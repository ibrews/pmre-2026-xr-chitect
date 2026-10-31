#!/usr/bin/env python3
"""Venue PowerPoint from a venue capture (tools/venue_capture.mjs -> capture.json). One PPTX slide per build state.

Each slide = full-frame PNG background of that build state (everything the deck drew, minus what is rebuilt natively)
+ native objects on top: text boxes (Arial / Arial Narrow, sized and placed from the DOM), pictures for local photos
(with crop + rounded corners), inline SVG as vector (svgBlip, PNG fallback). Animated states show the video's final
frame and their notes start with the ▶ VIDEO cue for the AV crew; the MP4 itself is NOT embedded (PMRE rule).
Notes are cleaned for the stage wedge monitors (timing, spoken lines, cues); full annotated notes go to NOTES-FULL.md.

    python3 tools/venue_pptx.py --capture WORK/capture.json --out X.pptx --videos-dir PKG/videos --notes-full PKG/NOTES-FULL.md
"""
import argparse, copy, json, re, shutil
from pathlib import Path
from lxml import etree
from pptx import Presentation
from pptx.util import Emu, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.opc.package import Part
from pptx.opc.packuri import PackURI

PX = 6350  # EMU per px: 1920 px = 13.333 in = 12192000 EMU
NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main", "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}
SVG_EXT = "{96DAC541-7B7A-43D3-8B79-37D633B846F1}"
RT_IMAGE = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image"

# ---------- presenter notes for the wedge monitors ----------
CODE = re.compile(r"\s*\[[A-Z][A-Z0-9 #:/.,_+&-]*(?:\s[^\]]{0,80})?\]")
INTERNAL = re.compile(r"(MP4|media/|\.html|\.png|Options\s*→|ALTERNATE|Reduced-motion|reduced-motion|offline|KB |ledger|PROVENANCE|https?://|youtu\.be|\bsee [a-z/]+\.md)", re.I)

def stage_notes(raw, cap=700):
    """Preserve complete source notes, including literal markup/placeholders in archived slide copy."""
    # Notes are plain text, not HTML. Stripping tags silently deleted archived <name> fields and changed source copy.
    return raw or ""

def fmt_dur(s):
    s = int(round(s)); return f"{s // 60:02d}:{s % 60:02d}"

# ---------- drawing helpers ----------
def emu(v): return Emu(int(round(v * PX)))

def set_alpha(color_elm_parent, a):
    if a >= 0.995: return
    clr = color_elm_parent.find(".//a:srgbClr", NS)
    if clr is not None:
        al = etree.SubElement(clr, f"{{{NS['a']}}}alpha"); al.set("val", str(int(a * 100000)))

def add_text(slide, t, safe_scale):
    lines = t["lines"]; fit = t["fit"]
    x, y, w, h = t["box"]
    pad = max(4, w * 0.04)  # Arial is rarely exactly as wide; give the box room so PowerPoint never re-wraps
    # keep the box itself inside the venue safe zone (the text already is: the deck scaled it there)
    zl, zr = 1920 * (1 - safe_scale) / 2, 1920 * (1 + safe_scale) / 2
    room_l, room_r = max(0, x - zl), max(0, zr - x - w)
    if t["align"] == "center": pl = pr = min(pad, room_l, room_r)
    elif t["align"] == "left": pl, pr = 0, min(pad * 2, room_r)
    else: pl, pr = min(pad * 2, room_l), 0
    bx, bw = x - pl, w + pl + pr
    tb = slide.shapes.add_textbox(emu(bx), emu(y), emu(bw), emu(h))
    tf = tb.text_frame; tf.word_wrap = False; tf.auto_size = None
    gaps = [lines[i + 1]["y"] - lines[i]["y"] for i in range(len(lines) - 1)]
    base = min(gaps) if gaps else lines[0]["h"]  # one line's pitch, not inflated by <br><br> gaps
    tf.margin_left = tf.margin_right = tf.margin_top = tf.margin_bottom = 0; tf.vertical_anchor = MSO_ANCHOR.TOP
    for i, ln in enumerate(lines):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = {"left": PP_ALIGN.LEFT, "center": PP_ALIGN.CENTER, "right": PP_ALIGN.RIGHT}[t["align"]]
        # exact spacing sets the distance from the PREVIOUS line, so a blank-line gap belongs to the line after it
        pitch = (ln["y"] - lines[i - 1]["y"]) if i > 0 else base
        p.line_spacing = Pt(max(1, pitch * 0.5))
        for r in ln["runs"]:
            st = r["st"]; run = p.add_run(); run.text = r["t"]
            f = run.font; f.name = t["font"]; f.size = Pt(max(1, round(st["px"] * fit * 0.5 * 2) / 2)); f.bold = st["bold"]; f.italic = st["it"]
            c = st["col"]; f.color.rgb = RGBColor(int(c["r"]), int(c["g"]), int(c["b"]))
            rPr = run._r.get_or_add_rPr()
            for tag in ("latin", "ea", "cs"):  # same face for every script so Keynote/PowerPoint do not substitute
                el = rPr.find(f"a:{tag}", NS)
                if el is None: el = etree.SubElement(rPr, f"{{{NS['a']}}}{tag}")
                el.set("typeface", t["font"])
            if st.get("ls"): rPr.set("spc", str(int(round(st["ls"] * 0.5 * 100))))
            set_alpha(rPr, c.get("a", 1))
    # PowerPoint puts the first baseline ~0.8 em below the top for exact spacing vs the DOM's half-leading: nudge
    first = lines[0]; em = max(r["st"]["px"] for r in first["runs"]) * fit
    pitch0 = base
    tb.top = emu(y + (first["h"] - pitch0) / 2 if pitch0 else y)
    tb.height = emu(max(h, sum(gaps) + pitch0))
    tb.name = "venue-text: " + t["plain"][:40].replace("\n", " ")
    return tb

def add_picture(slide, im):
    x, y, w, h = im["box"]
    pic = slide.shapes.add_picture(im["path"], emu(x), emu(y), emu(w), emu(h))
    c = im["crop"]; pic.crop_left, pic.crop_top, pic.crop_right, pic.crop_bottom = c["l"], c["t"], c["r"], c["b"]
    if im.get("radius", 0) > 1:
        pic.auto_shape_type = MSO_SHAPE.ROUNDED_RECTANGLE
        geom = pic._element.spPr.find("a:prstGeom", NS); av = geom.find("a:avLst", NS)
        if av is None: av = etree.SubElement(geom, f"{{{NS['a']}}}avLst")
        gd = etree.SubElement(av, f"{{{NS['a']}}}gd"); gd.set("name", "adj"); gd.set("fmla", f"val {int(min(0.5, im['radius'] / min(w, h)) * 100000)}")
    pic.name = "venue-picture: " + Path(im["path"]).name
    return pic

def add_svg(slide, sv, prs):
    x, y, w, h = sv["box"]
    pic = slide.shapes.add_picture(sv["png"], emu(x), emu(y), emu(w), emu(h))
    svg_bytes = Path(sv["svg"]).read_bytes()
    part = Part(prs.part.package.next_partname("/ppt/media/venue-svg-%d.svg"), "image/svg+xml", prs.part.package, svg_bytes)
    rid = slide.part.relate_to(part, RT_IMAGE)
    blip = pic._element.find(".//a:blip", NS)
    ext_lst = etree.SubElement(blip, f"{{{NS['a']}}}extLst")
    ext = etree.SubElement(ext_lst, f"{{{NS['a']}}}ext"); ext.set("uri", SVG_EXT)
    sb = etree.SubElement(ext, "{http://schemas.microsoft.com/office/drawing/2016/SVG/main}svgBlip", nsmap={"asvg": "http://schemas.microsoft.com/office/drawing/2016/SVG/main"})
    sb.set(f"{{{NS['r']}}}embed", rid)
    pic.name = "venue-svg"
    return pic

def relocator(cap, capture_path, local_cache):
    """capture.json may come from another host (e.g. rendered on Archie, written here): map its repo/work/cache roots
    and file:// URLs onto this machine's checkout, the capture's folder and the local cache copy."""
    from urllib.parse import urlparse, unquote
    here = Path(__file__).resolve().parent.parent
    roots = cap.get("roots") or {}
    norm = lambda p: str(p).replace("\\", "/").rstrip("/")
    maps = [(norm(roots[k]), v) for k, v in (("work", Path(capture_path).resolve().parent), ("cache", Path(local_cache) if local_cache else None), ("repo", here)) if roots.get(k) and v]
    def loc(p):
        if p is None: return None
        p = str(p)
        if p.startswith("file:"):
            u = unquote(urlparse(p).path); p = u[1:] if len(u) > 2 and u[2] == ":" else u
        q = norm(p)
        for r, v in maps:
            if q.lower().startswith(r.lower() + "/"): return str(Path(v) / q[len(r) + 1:])
        return p
    return loc

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--capture", required=True); ap.add_argument("--out", required=True)
    ap.add_argument("--videos-dir", required=True); ap.add_argument("--notes-full", required=True)
    ap.add_argument("--report", help="write per-slide build report JSON here")
    ap.add_argument("--cache", help="local copy of the capture's MP4 cache (when the capture ran on another host)")
    a = ap.parse_args()
    cap = json.loads(Path(a.capture).read_text(encoding="utf-8")); loc = relocator(cap, a.capture, a.cache)
    for st in cap["states"]:
        for k in ("full", "bg"): st[k] = loc(st.get(k))
        if st.get("video"): st["video"]["cache"] = loc(st["video"]["cache"]); st["video"]["poster"] = loc(st["video"]["poster"])
        for im in st.get("images", []): im["path"] = loc(im.get("path"))
        for sv in st.get("svgs", []): sv["png"] = loc(sv.get("png")); sv["svg"] = loc(sv.get("svg"))
    vids = Path(a.videos_dir); vids.mkdir(parents=True, exist_ok=True)
    prs = Presentation(); prs.slide_width, prs.slide_height = Emu(1920 * PX), Emu(1080 * PX)
    report, full_notes = [], ["# Full annotated presenter notes\n", f"Deck: {cap['url']}\n", f"Picks: {json.dumps(cap['picks'])}\n"]
    safe = int(cap.get("safe") or 70) / 100
    for st in cap["states"]:
        s = prs.slides.add_slide(prs.slide_layouts[6])
        s.background.fill.solid(); s.background.fill.fore_color.rgb = RGBColor(0, 0, 0)
        row = {"pptx": len(prs.slides), "NN": st["NN"], "letter": st["letter"], "deck": st["deckIndex"], "step": st["step"], "title": st["title"], "kind": st["kind"]}
        notes = stage_notes(st.get("notes", "")) if st["step"] == 0 else "(build step — same talking point)"
        if st["kind"] == "video":
            v = st["video"]; shutil.copyfile(v["cache"], vids / v["file"])
            s.shapes.add_picture(v["poster"], 0, 0, prs.slide_width, prs.slide_height).name = "venue-video-poster (final frame)"
            notes = f"▶ VIDEO {v['file']} ({fmt_dur(v['duration'])}) — crew plays, then next slide\n\n" + notes
            row.update(mode="video-poster", video=v["file"], duration=round(v["duration"], 2), audio=bool(v.get("audio")), audio_kind=v.get("audioKind", "synthesized car horns" if v.get("audio") else "silent"))
        elif st.get("iframes") and st["step"] == 0:  # motion frame without window.seek: keep the whole frame as a still
            s.shapes.add_picture(st["full"], 0, 0, prs.slide_width, prs.slide_height).name = "venue-frame (motion still)"
            row.update(mode="image", kept_in_image=st.get("warn", []))
        else:
            s.shapes.add_picture(st["bg"], 0, 0, prs.slide_width, prs.slide_height).name = "venue-background (build-state frame)"
            nt = [t for t in st["texts"] if t["native"]]; ni = [i for i in st["images"] if i["native"]]; ns = [v for v in st["svgs"] if v["native"]]
            for im in ni: add_picture(s, im)
            for sv in ns: add_svg(s, sv, prs)
            for t in nt: add_text(s, t, safe)
            img_text = [t for t in st["texts"] if not t["native"]]
            row.update(native_text=len(nt), image_text=len(img_text), pictures=len(ni), svgs=len(ns),
                       mode="native" if not img_text and st["texts"] else "image" if not nt else "hybrid",
                       kept_in_image=[f"{t['plain'][:40]!r}: {t['reason']}" for t in img_text] + [f"img {Path(i['path'] or '?').name}: {i['reason']}" for i in st["images"] if not i["native"]] + [f"svg: {v['reason']}" for v in st["svgs"] if not v["native"]])
            if not st["texts"]: row["mode"] = "image" if not ni and not ns else "native"
        s.notes_slide.notes_text_frame.text = notes
        report.append(row)
        if st["step"] == 0:
            full_notes.append(f"\n## PPTX {row['pptx']} · deck slide {st['deckIndex']} · {st['title']}\n\n{st.get('notes', '').strip() or '(no notes)'}\n")
    out = Path(a.out).expanduser(); out.parent.mkdir(parents=True, exist_ok=True); prs.save(out)
    Path(a.notes_full).write_text("".join(full_notes))
    if a.report: Path(a.report).write_text(json.dumps(report, indent=1, ensure_ascii=False))
    modes = {}
    for r in report: modes[r["mode"]] = modes.get(r["mode"], 0) + 1
    print(f"{out}: {len(prs.slides)} slides {modes}")

if __name__ == "__main__":
    main()
