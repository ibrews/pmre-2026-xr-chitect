#!/usr/bin/env python3
"""Venue checks for the PMRE organizer package. Exit 1 on any FAIL. Every failure names the slide and what to fix.

  1. safe-zone   every PPTX text box lies inside the centered 1344x756 box, AND every piece of text the deck drew
                 (including text baked into a background/poster image) is inside it
  2. dark        no slide has a light background (mean luminance of the frame image; venue room is dark)
  3. no-media    no audio/video embedded in the PPTX, no external links of any kind
  4. video-cues  every ▶ VIDEO note names an MP4 in videos/ and its (mm:ss) matches the file; no orphan MP4s
  5. timing      talk length per cut from the ⏱ notes vs the 50-min slot that also has to hold 10-15 min of Q&A

    python3 tools/venue_checks.py --pptx X.pptx --videos DIR --capture capture.json [--json out.json]
    python3 tools/venue_checks.py --selftest --pptx X.pptx --videos DIR --capture capture.json   # breaks a copy on purpose; every check must FAIL
"""
import argparse, io, json, re, shutil, subprocess, sys, tempfile, zipfile
from pathlib import Path
from PIL import Image
from pptx import Presentation
from pptx.util import Emu

PX = 6350
ZONE = (288, 162, 1632, 918)  # 1344x756 centered in 1920x1080
LIGHT_LUMA = 89              # mean Rec.709 luma (0-255) above this = light background
CAP_MIN, QA_MIN = 50, (10, 15)
MEDIA_EXT = (".mp4", ".mov", ".m4v", ".avi", ".wmv", ".mp3", ".wav", ".m4a", ".aac", ".ogg", ".webm", ".mpg", ".mpeg")
CUE = re.compile(r"▶ VIDEO (\S+\.mp4) \((\d+):(\d\d)\)")

def ffdur(f):
    return float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=nw=1:nk=1", str(f)], capture_output=True, text=True).stdout.strip() or 0)

def luma(img):
    im = img.convert("RGB").resize((192, 108))
    from PIL import ImageStat; r, g, b = ImageStat.Stat(im).mean; return 0.2126 * r + 0.7152 * g + 0.0722 * b

def check_safe(prs, cap):
    bad = []
    for n, s in enumerate(prs.slides, 1):
        for sh in s.shapes:
            is_text=sh.has_text_frame and sh.text_frame.text.strip()
            is_picture=sh.shape_type==13 and not (abs(sh.width-prs.slide_width)<PX*4 and abs(sh.height-prs.slide_height)<PX*4)
            if not (is_text or is_picture): continue
            x, y, w, h = (v / PX for v in (sh.left, sh.top, sh.width, sh.height))
            if x < ZONE[0] - 1 or y < ZONE[1] - 1 or x + w > ZONE[2] + 1 or y + h > ZONE[3] + 1:
                bad.append(f"PPTX slide {n}: key object {sh.name!r} at x={x:.0f} y={y:.0f} w={w:.0f} h={h:.0f} px is outside the 1344x756 safe zone")
    for st in (cap or {}).get("states", []):
        for t in (st.get("video") or {}).get("textAudit") or []:
            bad.append(f"VIDEO {st['video']['file']} (PPTX slide {st['n']}): baked-in text {t['text']!r} is outside the safe zone at t={t['t']}s ({t['over']}) — fix the motion graphic's layout")
        for t in st.get("allText", []):
            v = t.get("visible")
            if not v: continue
            x, y, w, h = v
            if x < ZONE[0] - 2 or y < ZONE[1] - 2 or x + w > ZONE[2] + 2 or y + h > ZONE[3] + 2:
                bad.append(f"PPTX slide {st['n']} (deck slide {st['deckIndex']}, step {st['step']}): the deck draws {t['text'][:40]!r} outside the safe zone (x={x:.0f} y={y:.0f} w={w:.0f} h={h:.0f}) — fix the slide layout in the deck")
    if cap:
        for st in cap['states']:
            for m in st.get('keyMedia',[]):
                x,y,w,h=m['box']
                if x<287 or y<161 or x+w>1633 or y+h>919:
                    bad.append(f"deck slide {st['deckIndex']} step {st['step']}: key {m['tag']} outside safe zone {m['box']}")
    return bad

def check_dark(prs):
    bad, vals = [], []
    W, H = prs.slide_width, prs.slide_height
    for n, s in enumerate(prs.slides, 1):
        top = None
        for sh in s.shapes:  # the top-most full-frame picture is what the audience sees behind everything
            if sh.shape_type == 13 and abs(sh.width - W) < PX * 4 and abs(sh.height - H) < PX * 4 and sh.left <= PX * 2 and sh.top <= PX * 2: top = sh
        if top is not None: L = luma(Image.open(io.BytesIO(top.image.blob)))
        else:
            f = s.background.fill
            try: c = f.fore_color.rgb; L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
            except Exception: L = 255  # no fill and no frame = PowerPoint default white
        vals.append(round(L, 1))
        if L > LIGHT_LUMA: bad.append(f"PPTX slide {n}: background is light (mean luma {L:.0f} > {LIGHT_LUMA}); PMRE's room is dark — use a dark look (theme) or a dark slide background")
    return bad, vals

def check_media(path):
    bad = []
    with zipfile.ZipFile(path) as z:
        for nm in z.namelist():
            if nm.lower().endswith(MEDIA_EXT): bad.append(f"embedded media file {nm} (PMRE: video/audio go as separate files)")
            if nm.endswith(".rels"):
                x = z.read(nm).decode("utf-8", "replace")
                for m in re.finditer(r"<Relationship [^>]*>", x):
                    r = m.group(0)
                    if 'TargetMode="External"' in r: bad.append(f"external link in {nm}: {re.search(r'Target=\"([^\"]*)', r).group(1)[:80]}")
                    if re.search(r'/relationships/(video|audio|media)"', r): bad.append(f"media relationship in {nm}")
        ct = z.read("[Content_Types].xml").decode()
        for m in re.finditer(r'ContentType="((?:video|audio)/[^"]+)"', ct): bad.append(f"content type {m.group(1)} declared")
    return bad

def check_videos(prs, vdir):
    bad, cues = [], []
    vdir = Path(vdir); used = set()
    for n, s in enumerate(prs.slides, 1):
        nt = s.notes_slide.notes_text_frame.text if s.has_notes_slide else ""
        for m in CUE.finditer(nt):
            f, mm, ss = vdir / m.group(1), int(m.group(2)), int(m.group(3)); used.add(m.group(1))
            if not f.exists(): bad.append(f"PPTX slide {n}: notes cue {m.group(1)} but videos/{m.group(1)} does not exist"); continue
            d = ffdur(f); cues.append({"slide": n, "file": m.group(1), "duration": round(d, 2)})
            if abs(d - (mm * 60 + ss)) > 1.0: bad.append(f"PPTX slide {n}: cue says {mm:02d}:{ss:02d} but {m.group(1)} is {d:.1f}s")
    for f in sorted(vdir.glob("*.mp4")):
        if f.name not in used: bad.append(f"videos/{f.name} is not cued on any slide")
    return bad, cues

TIME_RE = [(re.compile(r"~?\s*(\d+(?:\.\d+)?)\s*(?:s|sec|seconds)\b[^.\n]{0,12}\btotal", re.I), 1), (re.compile(r"~?\s*(\d+(?:\.\d+)?)\s*(?:–|-|to)\s*(\d+(?:\.\d+)?)\s*min", re.I), 60),
           (re.compile(r"~?\s*(\d+(?:\.\d+)?)\s*min", re.I), 60), (re.compile(r"~?\s*(\d+(?:\.\d+)?)\s*(?:s|sec|seconds)\b", re.I), 1)]

def slide_seconds(notes):
    m = re.search(r"⏱[^\n]*", notes or "")
    if not m: return 30, "no ⏱ (30 s default)"
    line = m.group(0)
    for rx, mul in TIME_RE:
        g = rx.search(line)
        if g:
            nums = [float(x) for x in g.groups() if x]
            return sum(nums) / len(nums) * mul, line[:60]
    return 30, line[:60] + " (unparsed, 30 s)"

def timing(cap):
    rows, tot = [], 0
    for st in cap["states"]:
        if st["step"] != 0: continue
        sec, src = slide_seconds(st.get("notes")); tot += sec
        rows.append({"deck": st["deckIndex"], "title": st["title"][:50], "sec": round(sec), "src": src})
    mins = tot / 60
    return {"talk_min": round(mins, 1), "with_qa_min": [round(mins + QA_MIN[0], 1), round(mins + QA_MIN[1], 1)], "cap_min": CAP_MIN,
            "fits": mins + QA_MIN[1] <= CAP_MIN, "fits_short_qa": mins + QA_MIN[0] <= CAP_MIN, "slides": rows}

def run(pptx, vdir, capf):
    prs = Presentation(pptx); cap = json.loads(Path(capf).read_text()) if capf else None
    res = {}
    res["safe-zone"] = check_safe(prs, cap)
    res["dark"], lumas = check_dark(prs)
    if cap:
        frame_vals=[]
        for st in cap['states']:
            f=Path(st.get('full',''))
            if not f.exists(): f=Path(capf).parent/'frames'/f.name
            if f.exists():
                L=luma(Image.open(f));frame_vals.append({'deck':st['deckIndex'],'step':st['step'],'luma':round(L/255,4)})
                if L>LIGHT_LUMA:res['dark'].append(f"deck slide {st['deckIndex']} step {st['step']}: full-frame luma {L/255:.3f} > 0.35")
    else: frame_vals=[]
    res["no-media"] = check_media(pptx)
    res["video-cues"], cues = check_videos(prs, vdir)
    t = timing(cap) if cap else None
    return res, {"lumas": lumas, "full_frame_luminance":frame_vals, "cues": cues, "timing": t}

def selftest(pptx, vdir, capf):
    """Break a copy in every way the checks guard against; each check must FAIL on it, or the PASS means nothing."""
    tmp = Path(tempfile.mkdtemp(prefix="venue-selftest-")); bp = tmp / "broken.pptx"; bv = tmp / "videos"
    shutil.copytree(vdir, bv)
    prs = Presentation(pptx)
    s1 = prs.slides[0]
    tb = s1.shapes.add_textbox(Emu(20 * PX), Emu(20 * PX), Emu(400 * PX), Emu(60 * PX)); tb.text_frame.text = "outside the safe zone"
    tb.text_frame.paragraphs[0].runs[0].hyperlink.address = "https://example.com/"
    white = tmp / "white.png"; Image.new("RGB", (1920, 1080), (250, 250, 250)).save(white)
    s1.shapes.add_picture(str(white), 0, 0, prs.slide_width, prs.slide_height)
    s1.notes_slide.notes_text_frame.text = "▶ VIDEO 99z-missing.mp4 (00:05) — crew plays, then next slide"
    vids = sorted(bv.glob("*.mp4"))
    for s in prs.slides:  # wrong duration on an existing cue
        nt = s.notes_slide.notes_text_frame.text if s.has_notes_slide else ""
        m = CUE.search(nt)
        if m and (bv / m.group(1)).exists():
            s.notes_slide.notes_text_frame.text = nt.replace(m.group(0), f"▶ VIDEO {m.group(1)} (09:59)"); break
    if not vids: (bv / "00a-orphan.mp4").write_bytes(b"")  # orphan file
    prs.save(bp)
    with zipfile.ZipFile(bp, "a") as z: z.writestr("ppt/media/media99.mp4", b"\0" * 64)
    res, _ = run(bp, bv, None)
    # Native and rasterized key media must fail too; background/poster frames alone are exempt.
    mediafake={"states":[{"n":1,"deckIndex":1,"step":0,"allText":[],"keyMedia":[{"tag":"IMG","box":[10,10,600,400]}]}]}
    res["safe-zone(media)"]=check_safe(Presentation(pptx),mediafake)
    # a deck-side text outside the zone (capture-level) must also fail
    fake = {"states": [{"n": 1, "deckIndex": 0, "step": 0, "allText": [{"text": "edge text", "visible": [10, 10, 100, 20]}]}]}
    res["safe-zone(deck)"] = check_safe(Presentation(pptx), fake)
    ok = all(res[k] for k in res)
    for k, v in res.items(): print(f"  selftest {k:16s} {'FAILS as it should' if v else 'DID NOT FAIL — check is broken'} ({len(v)} finding(s))")
    shutil.rmtree(tmp, ignore_errors=True)
    return ok

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--pptx", required=True); ap.add_argument("--videos", required=True)
    ap.add_argument("--capture"); ap.add_argument("--json"); ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    if a.selftest:
        ok = selftest(a.pptx, a.videos, a.capture); print("SELFTEST", "OK" if ok else "BROKEN"); sys.exit(0 if ok else 1)
    res, info = run(a.pptx, a.videos, a.capture)
    fail = False
    for k, v in res.items():
        print(f"{'FAIL' if v else 'PASS'}  {k}" + (f" ({len(v)})" if v else ""))
        for line in v[:25]: print("      - " + line)
        fail |= bool(v)
    t = info["timing"]
    if t:
        verdict = "fits" if t["fits"] else "fits only with 10-min Q&A" if t["fits_short_qa"] else "OVER the 50-min slot"
        print(f"INFO  timing: talk ≈ {t['talk_min']} min + Q&A 10-15 = {t['with_qa_min'][0]}-{t['with_qa_min'][1]} min vs {CAP_MIN} cap → {verdict}")
    print(f"INFO  luma max {max(info['lumas']) if info['lumas'] else 0:.0f} (limit {LIGHT_LUMA}); {len(info['cues'])} video cue(s)")
    if a.json: Path(a.json).write_text(json.dumps({"results": res, **info, "pass": not fail}, indent=1, ensure_ascii=False))
    sys.exit(1 if fail else 0)

if __name__ == "__main__":
    main()
