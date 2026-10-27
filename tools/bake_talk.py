#!/usr/bin/env python3
"""Bake talk/sections.js (TALK + SECTIONS + BONUS) into index.html and apply the PMRE talk-branch runtime patches.

Idempotent: the content block lives between // ── TALK START ── / // ── TALK END ── sentinels; every runtime patch
checks for its own marker before applying, and fails loudly if its anchor text is missing (template drift).
    python3 tools/bake_talk.py
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
HTML, SRC = ROOT / "index.html", ROOT / "talk" / "sections.js"
s = HTML.read_text(encoding="utf-8")
talk = "\n".join((ROOT / "talk" / f).read_text(encoding="utf-8").strip() for f in ("sections.js", "options.js", "intro.js"))

def patch(marker, anchor, new, count=1):
    """Replace anchor with new unless marker already present."""
    global s
    if marker in s:
        return
    if anchor not in s:
        sys.exit(f"bake_talk: anchor not found for {marker!r} — template changed? anchor starts: {anchor[:80]!r}")
    s = s.replace(anchor, new, count)

# 1. Content block: first bake replaces the template's SECTIONS..BONUS; later bakes replace between sentinels.
START, END = "// ── TALK START ──", "// ── TALK END ──"
block = f"{START}\n{talk}\n{END}"
if START in s:
    s = re.sub(re.escape(START) + r".*?" + re.escape(END), lambda m: block, s, count=1, flags=re.S)
else:
    m = re.search(r"const SECTIONS = \[.*?\nconst BONUS = \{.*?\};\n", s, flags=re.S)
    if not m:
        sys.exit("bake_talk: template SECTIONS/BONUS block not found")
    s = s[:m.start()] + block + "\n" + s[m.end():]

# 2. Head: title, description, social, favicon.
s = re.sub(r"<title>.*?</title>", "<title>Architect to XR-chitect — Alex Coulombe — PMRE 2026</title>", s, count=1)
s = re.sub(r'<meta name="description" content=".*?">', '<meta name="description" content="Architect to XR-chitect: The Best Career Advice I Ever Ignored. Alex Coulombe, PMRE 2026, Las Vegas.">', s, count=1)
s = re.sub(r'<meta property="og:title" content=".*?">', '<meta property="og:title" content="Architect to XR-chitect: The Best Career Advice I Ever Ignored">', s, count=1)
s = re.sub(r'<meta property="og:description" content=".*?">', '<meta property="og:description" content="Alex Coulombe at PMRE 2026: from architecture school to walkable VR real estate.">', s, count=1)
ICONS = ('<link rel="icon" type="image/svg+xml" href="talk/favicon.svg">\n<link rel="icon" type="image/png" sizes="32x32" href="talk/favicon-32.png">\n'
         '<link rel="alternate icon" href="talk/favicon.ico">\n<link rel="apple-touch-icon" href="talk/apple-touch-icon.png">')
s = re.sub(r'<link rel="(icon|alternate icon|apple-touch-icon)"[^>]*>\n?', '', s)
s = s.replace('</title>', '</title>\n' + ICONS, 1)

# 2b. Social card: talk-specific og:image + twitter card (never the template's social.png — branding rule 2026-10-22).
SOCIAL = "https://ibrews.github.io/pmre-2026-xr-chitect/talk/social.png"
s = re.sub(r'<meta property="og:image" content=".*?">', f'<meta property="og:image" content="{SOCIAL}">', s, count=1)
s = re.sub(r'\n<meta (property="og:image:(width|height|alt)"|name="twitter:[a-z]+")[^>]*>', '', s)
s = s.replace(f'<meta property="og:image" content="{SOCIAL}">', f'<meta property="og:image" content="{SOCIAL}">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">\n<meta property="og:image:alt" content="Architect to XR-chitect: The Best Career Advice I Ever Ignored. Alex Coulombe Presents, PMRE 2026, Las Vegas.">\n<meta name="twitter:card" content="summary_large_image">\n<meta name="twitter:title" content="Architect to XR-chitect: The Best Career Advice I Ever Ignored">\n<meta name="twitter:description" content="Alex Coulombe at PMRE 2026: from architecture school to walkable VR real estate.">\n<meta name="twitter:image" content="{SOCIAL}">', 1)
if "spatial-deck/social.png" in s:
    sys.exit("bake_talk: template social.png still referenced")
# 2c. Look frame text (styles/ looks: title block / running head / masthead) and the corner wordmark.
s = re.sub(r'<meta name="(?:author|sd-event|sd-project)" content=".*?">\n?', "", s)
s = s.replace("<title>", '<meta name="author" content="Alex Coulombe">\n<meta name="sd-event" content="PMRE 2026 · Las Vegas">\n<meta name="sd-project" content="Architect to XR-chitect">\n<title>', 1)
s = s.replace('<div id="brand">Spatial Deck</div>', '<div id="brand">Alex Coulombe Presents</div>', 1)

# 3. Cover + close + map center text driven by TALK.
patch("TALK.coverTitle", "cov.innerHTML=`<div class=\"event-tag\">Spatial Deck &middot; Open-Source Presentation Framework</div><h1 class=\"talk-title\">Is XR Right<br>For Your Project?</h1><p class=\"talk-subtitle\">A framework for spatial decisions &mdash; before you pick a headset or a studio</p><div class=\"speaker-card\"><div><div class=\"speaker-name\">A Spatial Deck Presentation</div><div class=\"speaker-co\">github.com/spatial-deck</div></div></div>`;",
      "cov.innerHTML=`<div class=\"event-tag\">${TALK.coverEvent}</div><h1 class=\"talk-title\">${TALK.coverTitle}</h1><p class=\"talk-subtitle\">${TALK.coverSub}</p><div class=\"speaker-card\"><div><div class=\"speaker-name\">${TALK.speaker}</div><div class=\"speaker-co\">${TALK.speakerCo}</div></div></div>`;")
close_re = re.compile(r"cls\.innerHTML=`<div class=\"close-ey\">Thank You</div>.*?<div class=\"close-qr-row\">.*?</div></div></div>\n", re.S)
if "TALK.closeTitle" not in s:
    m = close_re.search(s)
    if not m:
        sys.exit("bake_talk: close slide anchor not found")
    s = s[:m.start()] + ("cls.innerHTML=`<div class=\"close-ey\">${TALK.closeEyebrow}</div><h2 class=\"close-title\">${TALK.closeTitle}</h2><p class=\"close-sub\">${TALK.closeSub}</p>\n"
        "<div class=\"contact-row\"><div class=\"contact-pill\"><span class=\"lbl\">Web</span>${TALK.web}</div></div>\n"
        "<div class=\"close-qr-row\"><div class=\"qr-card\"><img src=\"talk/qr.png\" alt=\"QR code: ${TALK.qr}\" onerror=\"this.parentNode.style.display='none'\"><div class=\"qr-label\">${TALK.qrLabel}</div><div class=\"qr-badge b-teal\">${TALK.web}</div></div></div>\n") + s[m.end():]
patch("TALK.mapCenter[0]", "ct.textContent='IS XR RIGHT'", "ct.textContent=TALK.mapCenter[0]")
patch("TALK.mapCenter[1]", "ct2.textContent='FOR YOUR PROJECT?'", "ct2.textContent=TALK.mapCenter[1]")

# 4. Presenter notes for cover/close/map/bonus come from TALK/BONUS.
patch("BONUS.notes)return BONUS.notes;",  # marker = the inserted text, so re-bakes do not stack copies
      "if(ty==='bonus')return'Bonus lesson:", "if(ty==='bonus'&&BONUS.notes)return BONUS.notes;\n  if(ty==='bonus')return'Bonus lesson:")
patch("TALK.coverNotes", "if(ty==='cover')return'Welcome", "if(ty==='cover'&&TALK.coverNotes)return TALK.coverNotes;\n  if(ty==='cover')return'Welcome")
patch("TALK.closeNotes", "if(ty==='close')return'Wrap up.", "if(ty==='close'&&TALK.closeNotes)return TALK.closeNotes;\n  if(ty==='close')return'Wrap up.")
patch("TALK.mapNotes", "if(ty==='map')return'The constellation", "if(ty==='map'&&TALK.mapNotes)return TALK.mapNotes;\n  if(ty==='map')return'The constellation")

# 5. No CDN 3D monocle on the bonus slide (offline-safe; not part of this talk).
patch("TALK_NO_MONOCLE", "// 3D Monocle on Bonus slide\n(function(){\n", "// 3D Monocle on Bonus slide\n(function(){if(window.TALK_NO_MONOCLE!==false)return; // TALK_NO_MONOCLE: disabled for PMRE talk\n")

# 6. Print/shot export: motion iframes become their rendered poster frame instead of a placeholder panel.
patch("sd-motion-poster", "querySelectorAll('#deck iframe').forEach(f=>{const src=f.src||'';",
      "querySelectorAll('#deck iframe').forEach(f=>{const src=f.src||'';const _mm=src.match(/media\\/motion\\/([\\w-]+)\\.html/);if(_mm){const im=document.createElement('img');im.className='full-media sd-motion-poster';const _lk=(typeof talkPicks==='function'&&talkPicks().theme)||new URLSearchParams(location.search).get('look')||'noir';im.src='media/motion/mp4/'+_mm[1]+'-poster'+(_lk!=='noir'?'.'+_lk:'')+'.png';im.onerror=function(){this.onerror=null;this.src='media/motion/mp4/'+_mm[1]+'-poster.png';};f.replaceWith(im);return;}")

# 6-look. Already-baked decks keep the old poster line (patches are marker-idempotent): upgrade it to per-look posters.
_OLDP = "im.src='media/motion/mp4/'+_mm[1]+'-poster.png';f.replaceWith(im)"
_NEWP = ("const _lk=(typeof talkPicks==='function'&&talkPicks().theme)||new URLSearchParams(location.search).get('look')||'noir';"
         "im.src='media/motion/mp4/'+_mm[1]+'-poster'+(_lk!=='noir'?'.'+_lk:'')+'.png';"
         "im.onerror=function(){this.onerror=null;this.src='media/motion/mp4/'+_mm[1]+'-poster.png';};f.replaceWith(im)")
if "_lk!=='noir'" not in s:
    if _OLDP not in s:
        sys.exit("bake_talk: motion poster line not found (template changed?)")
    s = s.replace(_OLDP, _NEWP, 1)

# 6a. Intro slides (talk/intro.js): the case builder hands layout 'intro-alex' / 'intro-lens' to buildTalkIntro().
patch("buildTalkIntro(s,c)", "    // layout: 'full' — full-bleed image",
      "    if(c.layout==='intro-alex'||c.layout==='intro-lens'){if(typeof buildTalkIntro==='function')buildTalkIntro(s,c);deck.appendChild(s);allSlides.push(s);return;}\n    // layout: 'full' — full-bleed image")

# 6b. Talk options: hide/swap alternates after all slides exist, before navigation is wired (exports honor picks).
patch("applyTalkOptions();", "\n// Navigation\n", "\nif(typeof applyTalkOptions==='function')applyTalkOptions();\n// Navigation\n")

# 7. Motion replay + reduced motion + talk CSS, appended before </body>.
EXTRA = """<!-- ── PMRE TALK RUNTIME ── -->
<style>
@@INTRO_CSS@@
.talk-title .xr{background:linear-gradient(90deg,var(--teal),var(--purple),var(--rose));-webkit-background-clip:text;background-clip:text;color:transparent}
.layout-big .big-text.big-l2{font-size:calc(5.2*var(--vw))}
.layout-big .big-text.big-l3{font-size:calc(4.1*var(--vw))}
.layout-big .big-text.big-l4{font-size:calc(3.4*var(--vw));line-height:1.22}
@media (prefers-reduced-motion: reduce){.slide,.slide *{animation-duration:.001s!important;animation-delay:0s!important;transition:none!important}.bg *{animation:none!important}}
body.reduced-motion .slide,body.reduced-motion .slide *{animation-duration:.001s!important;animation-delay:0s!important;transition:none!important}
body.reduced-motion .bg *{animation:none!important}
body:where([data-look]:not([data-look="noir"])):not(#_) .intro-title{background:none;-webkit-text-fill-color:currentColor;color:var(--ink);font-family:var(--font-display)}
body:where([data-look]:not([data-look="noir"])):not(#_) .intro-eyebrow,body:where([data-look]:not([data-look="noir"])):not(#_) .intro-stat .num{color:var(--acc-1)}
body:where([data-look]:not([data-look="noir"])):not(#_) .intro-role{color:var(--ink)}
body:where([data-look]:not([data-look="noir"])):not(#_) .intro-sub{color:var(--ink-2)}
body:where([data-look]:not([data-look="noir"])):not(#_) .intro-stat{background:transparent;border:1px solid var(--rule);border-radius:0}
body:where([data-look]:not([data-look="noir"])):not(#_) .intro-stat .lbl{color:var(--ink-2)}
.cover-ambient{position:absolute;inset:0;width:100%;height:100%;border:0;z-index:0;opacity:.9;mix-blend-mode:screen;background:transparent}
.slide[data-type="cover"]>*:not(.cover-ambient){position:relative;z-index:1}
#talk-opts{position:fixed;right:24px;top:24px;z-index:99999;width:min(720px,calc(100vw - 48px));max-height:calc(100vh - 48px);overflow:auto;background:rgba(8,10,20,.96);border:1px solid rgba(0,212,255,.35);border-radius:16px;padding:18px 20px;font:14px/1.4 Inter,system-ui,sans-serif;color:#f0f4ff;box-shadow:0 20px 60px rgba(0,0,0,.6)}
#talk-opts h3{margin:0 0 12px;font-size:18px}#talk-opts h3 small{font-weight:400;color:rgba(240,244,255,.5);font-size:12px;margin-left:8px}
#talk-opts .to-row{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:8px 0}#talk-opts .to-g{width:190px;color:rgba(240,244,255,.65);font-size:12px;letter-spacing:.06em;text-transform:uppercase}
#talk-opts button{background:rgba(255,255,255,.06);color:#f0f4ff;border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:6px 12px;cursor:pointer;font:inherit}
#talk-opts button.on{background:#f0f4ff;color:#060810;border-color:transparent;font-weight:600}
#talk-opts .to-foot{display:flex;gap:12px;align-items:center;margin-top:14px;color:rgba(240,244,255,.45);font-size:12px}
</style>
<script>
// Long statements step down a size tier by their longest line so quotes never overflow the 16:9 stage.
document.querySelectorAll('#deck .big-text').forEach(b=>{const n=Math.max(...b.innerHTML.split(/<br\\s*\\/?>/i).map(l=>l.replace(/<[^>]+>/g,'').length));b.classList.add(n>34?'big-l4':n>27?'big-l3':n>20?'big-l2':'big-l1');});
// Motion graphics (media/motion/*.html) restart every time their slide becomes active; ?reduced forces final frames.
(function(){const reduced=new URLSearchParams(location.search).has('reduced');if(reduced)document.body.classList.add('reduced-motion');
const frames=[...document.querySelectorAll('#deck iframe.anim-frame')].filter(f=>/media\\/motion\\//.test(f.getAttribute('src')||''));
frames.forEach(f=>{const base=f.getAttribute('src').split('?')[0];f.dataset.motionBase=base;f.setAttribute('src',base+'?static');});
function arm(sl){if(!sl)return;sl.querySelectorAll('iframe[data-motion-base]').forEach(f=>{f.setAttribute('src',f.dataset.motionBase+(reduced?'?static':'?play='+Date.now()));});}
function rest(sl){if(!sl)return;sl.querySelectorAll('iframe[data-motion-base]').forEach(f=>{f.setAttribute('src',f.dataset.motionBase+'?static');});}
let last=null;new MutationObserver(()=>{const a=document.querySelector('#deck .slide.active');if(a!==last){rest(last);arm(a);last=a;}}).observe(document.getElementById('deck'),{subtree:true,attributes:true,attributeFilter:['class']});
const a0=document.querySelector('#deck .slide.active');if(a0){arm(a0);last=a0;}})();
</script>
"""
EXTRA = EXTRA.replace("@@INTRO_CSS@@", (ROOT / "talk" / "intro.css").read_text(encoding="utf-8").strip())
s = re.sub(r"<!-- ── PMRE TALK RUNTIME ── -->.*?(?=</body>)", "", s, flags=re.S)
if True:
    i = s.rfind("</body>")
    s = s[:i] + EXTRA + s[i:]

HTML.write_text(s, encoding="utf-8")
print("bake_talk: index.html updated")

# 8. Style library looks (styles/, from ibrews/spatial-deck) + motion recolorer, then refuse template branding.
import subprocess
subprocess.run([sys.executable, str(ROOT / "tools" / "apply_look.py"), "--html", str(HTML), "--styles", str(ROOT / "styles"),
                "--default", "house", "--chrome", "quiet", "--motion-dir", str(ROOT / "media" / "motion")], check=True)
if subprocess.run([sys.executable, str(ROOT / "tools" / "check_branding.py")]).returncode:
    sys.exit("bake_talk: branding check failed (see above)")
