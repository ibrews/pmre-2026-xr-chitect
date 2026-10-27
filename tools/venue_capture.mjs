// Venue capture: drive the RENDERED deck (not sections.js) in headless Chrome and record every slide AND every substep
// (build state) in venue safe-zone mode. Structure-agnostic on purpose: it only relies on goTo(), the ArrowRight key,
// getSlideNotes(), allSlides/slideSteps (or data-sd-steps / window.SD when the modular-slides runtime is present).
//
// For each build state it writes:
//   - <work>/frames/<NN>-full.png  settled final frame (what the audience sees after any animation)
//   - <work>/frames/<NN>-bg.png    the same frame with the natively rebuilt text/pictures hidden (PPTX background)
//   - DOM geometry for native PowerPoint objects (text runs with Arial/Arial Narrow fit, pictures + crops, inline SVG)
//   - a deterministic MP4 when the state animates:
//       * motion iframes (media/motion/*.html or SD.list() frames with window.seek): frame-by-frame seek, composited
//         into the iframe's safe-zone rect over the deck background
//       * anything else (intro sprite, orbit, step animations): a fake clock (Playwright page.clock) + every Web
//         Animation paused and stepped by hand, one screenshot per 1/30 s, until the frame stops changing
// Videos are cached in <cache>/ by a content key (motion source hash + background + rect, or slide DOM + CSS + picks),
// so a re-run after a text edit only re-renders what changed.
//
// Usage (normally called by tools/export_venue_package.mjs):
//   node tools/venue_capture.mjs --work DIR --cache DIR [--pick g=c ...] [--only 3,6] [--fps 30] [--safe 70]
import { createRequire } from 'module';
import { execFileSync } from 'child_process';
import crypto from 'crypto'; import fs from 'fs'; import path from 'path'; import os from 'os';
import { fileURLToPath, pathToFileURL } from 'url';
const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

export function parseArgs(argv) {
  const a = { pick: [], fps: 30, safe: '70', only: null, work: null, cache: null, maxSec: 12, videoMin: 1.6 };
  for (let i = 0; i < argv.length; i++) {
    const k = argv[i], v = () => argv[++i];
    if (k === '--pick') a.pick.push(v()); else if (k === '--work') a.work = v(); else if (k === '--cache') a.cache = v();
    else if (k === '--fps') a.fps = +v(); else if (k === '--safe') a.safe = v(); else if (k === '--only') a.only = v().split(',').map(Number);
    else if (k === '--max-sec') a.maxSec = +v(); else if (k === '--video-min') a.videoMin = +v();
  }
  return a;
}

export function loadPlaywright() {
  const cands = [process.env.PLAYWRIGHT_CORE, '/Users/alex/GH/xrsim/node_modules/playwright-core',
    path.join(os.homedir(), '.cache/spatial-deck/video-deps/node_modules/playwright-core')].filter(Boolean);
  const p = cands.find(c => fs.existsSync(path.join(c, 'package.json')));
  if (!p) { console.error('playwright-core not found: set PLAYWRIGHT_CORE=/abs/path/node_modules/playwright-core'); process.exit(2); }
  return require(p);
}
export const CHROME = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const sha = b => crypto.createHash('sha256').update(b).digest('hex');
const slug = s => (s || 'slide').toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-').slice(0, 32).replace(/-$/, '') || 'slide';

// ---------- in-page helpers (serialized into the page) ----------
function pageInit() {
  // Manual animation clock: every Web Animation / CSS animation / transition is paused when first seen and stepped by
  // hand, so frames are deterministic. Infinite (ambient) loops are frozen at their first-seen time.
  window.__vx = { map: new Map(), tick: 0 };
  window.__vxStep = (tick, dt) => {
    let running = 0;
    for (const a of document.getAnimations()) {
      let r = window.__vx.map.get(a);
      const tm = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : null;
      const end = tm ? tm.endTime : 0;
      if (!r) { r = { t0: tick, inf: !isFinite(end), c0: isFinite(end) ? 0 : (a.currentTime || 0) }; window.__vx.map.set(a, r); try { a.pause(); } catch (_) {} }
      try {
        if (r.inf) { a.currentTime = r.c0; continue; }
        const t = Math.min(r.c0 + (tick - r.t0) * dt, end); a.currentTime = t; if (t < end) running++;
      } catch (_) {}
    }
    return running;
  };
}

function pageVisibleSlides() {
  const out = [];
  const sd = window.SD && typeof window.SD.list === 'function' ? window.SD.list() : null;
  const byIdx = new Map((sd || []).map(m => [m.index, m]));
  allSlides.forEach((s, i) => {
    if (s.dataset.hidden === '1' || s.dataset.type === 'settings') return;
    const ss = typeof slideSteps !== 'undefined' ? slideSteps.get(s) : null;
    const steps = s.dataset.sdSteps != null ? +s.dataset.sdSteps : (ss && ss.steps ? ss.steps.length : 0);
    const m = byIdx.get(i);
    const title = (s.querySelector('.case-title,.lesson-title,.talk-title,.close-title,.big-text,.intro-title,h1,h2')?.textContent || s.dataset.type || '').replace(/\s+/g, ' ').trim();
    out.push({ index: i, type: s.dataset.type || '', classes: s.className, steps, title: title.slice(0, 120), module: m ? { id: m.id, src: m.src, name: m.name, seekable: !!m.seekable, duration: m.duration } : null });
  });
  return out;
}

// Collect everything the PPTX writer needs from the active slide, in viewport px (1920x1080).
function pageExtract(opts) {
  const slide = allSlides[current]; const SR = slide.getBoundingClientRect();
  const VW = innerWidth, VH = innerHeight;
  const INLINE = new Set(['inline', 'contents']);
  const cv = document.createElement('canvas').getContext('2d');
  const op = el => { let o = 1; for (let e = el; e && e !== document.body; e = e.parentElement) { const cs = getComputedStyle(e); o *= +cs.opacity; if (cs.visibility === 'hidden' || cs.display === 'none') return 0; } return o; };
  const effScale = el => { const r = el.getBoundingClientRect(); return el.offsetWidth ? r.width / el.offsetWidth : 1; };
  const rgba = c => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 }; };
  const blockRoot = el => { let e = el; while (e && e !== slide && INLINE.has(getComputedStyle(e).display)) e = e.parentElement; return e; };
  const inside = (el, sel) => !!el.closest(sel);
  const clipRect = el => { // intersect with overflow-clipping ancestors (incl. the slide)
    let r = { l: -1e9, t: -1e9, r: 1e9, b: 1e9 };
    for (let e = el.parentElement; e && e !== document.documentElement; e = e.parentElement) {
      const cs = getComputedStyle(e); if (cs.overflow !== 'visible' || e === slide) { const q = e.getBoundingClientRect(); r = { l: Math.max(r.l, q.left), t: Math.max(r.t, q.top), r: Math.min(r.r, q.right), b: Math.min(r.b, q.bottom) }; }
      if (e === slide) break;
    }
    return r;
  };
  const measure = (txt, cs, px, fam) => { cv.font = `${cs.fontStyle} ${cs.fontWeight} ${px}px ${fam}`; try { cv.letterSpacing = cs.letterSpacing === 'normal' ? '0px' : (parseFloat(cs.letterSpacing) * px / parseFloat(cs.fontSize)) + 'px'; } catch (_) {} return cv.measureText(txt).width; };
  const impactOK = (() => { cv.font = '40px Impact'; const n = cv.measureText('MMMMMMMMMM').width; cv.font = '40px Arial'; return Math.abs(n - cv.measureText('MMMMMMMMMM').width) > 4; })();
  const narrowOK = (() => { cv.font = '40px "Arial Narrow"'; const n = cv.measureText('MMMMMMMMMM').width; cv.font = '40px Arial'; return n < cv.measureText('MMMMMMMMMM').width * 0.95; })();
  const xform = t => t === 'uppercase' ? s => s.toUpperCase() : t === 'lowercase' ? s => s.toLowerCase() : t === 'capitalize' ? s => s.replace(/\b\w/g, c => c.toUpperCase()) : s => s;

  // ---- text ----
  slide.querySelectorAll('[data-vx-hide],[data-vx-keep]').forEach(e => { e.removeAttribute('data-vx-hide'); e.removeAttribute('data-vx-keep'); e.style.removeProperty('--vx-c'); e.style.removeProperty('--vx-f'); });
  const groups = new Map();
  const tw = document.createTreeWalker(slide, NodeFilter.SHOW_TEXT);
  for (let n; (n = tw.nextNode());) {
    if (!n.nodeValue.trim()) continue; const pe = n.parentElement; if (!pe) continue;
    if (inside(pe, 'svg,iframe,canvas,script,style,noscript,#sd-safezone,#journey,[id^="journey"],[class*="journey"]')) continue;  // the minimap may sit at the physical corner
    const root = blockRoot(pe); if (!groups.has(root)) groups.set(root, []); groups.get(root).push(n);
  }
  const texts = [], allText = [];
  for (const [root, nodes] of groups) {
    const toks = []; let reason = null;
    for (const n of nodes) {
      const pe = n.parentElement, cs = getComputedStyle(pe), o = op(pe); if (o < 0.04) continue;
      const col = rgba(cs.color); if (!col || col.a * o < 0.04) continue;
      if (cs.backgroundClip === 'text' || cs.webkitBackgroundClip === 'text' || /transparent|rgba\(0, 0, 0, 0\)/.test(cs.webkitTextFillColor)) reason = reason || 'gradient/clip text';
      const s = effScale(pe), T = xform(cs.textTransform), v = n.nodeValue;
      const re = /\S+/g; let m;
      while ((m = re.exec(v))) {
        const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length);
        const rs = [...rg.getClientRects()].filter(r => r.width > 0 && r.height > 0); if (!rs.length) continue;
        const r = rs[0], space = m.index > 0 ? /\s/.test(v[m.index - 1]) : (toks.length && toks[toks.length - 1].node !== n);
        toks.push({ node: n, t: T(m[0]), x: r.left, y: r.top, w: rs.reduce((a, q) => a + q.width, 0), h: r.height, sp: space, px: parseFloat(cs.fontSize) * s, cs, col: { ...col, a: +(col.a * o).toFixed(3) }, bold: +cs.fontWeight >= 600, it: cs.fontStyle === 'italic', fam: cs.fontFamily, ls: cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing) * s });
      }
    }
    if (!toks.length) continue;
    // lines: a new line when the token starts below the current line's vertical middle
    const lines = []; let cur = null;
    for (const k of toks) { if (!cur || k.y > cur.y + cur.h * 0.6) { cur = { y: k.y, h: k.h, toks: [] }; lines.push(cur); } cur.toks.push(k); cur.h = Math.max(cur.h, k.h); }
    const cl = clipRect(root);
    let L = 1e9, T = 1e9, R = -1e9, B = -1e9;
    for (const ln of lines) for (const k of ln.toks) { L = Math.min(L, k.x); T = Math.min(T, k.y); R = Math.max(R, k.x + k.w); B = Math.max(B, k.y + k.h); }
    const vis = { l: Math.max(L, cl.l), t: Math.max(T, cl.t), r: Math.min(R, cl.r), b: Math.min(B, cl.b) };
    const clipped = vis.l > L + 2 || vis.t > T + 2 || vis.r < R - 2 || vis.b < B - 2;
    const plain = lines.map(l => l.toks.map((k, i) => (i && k.sp ? ' ' : '') + k.t).join('')).join('\n');
    allText.push({ text: plain.slice(0, 160), rect: [L, T, R - L, B - T], visible: vis.r > vis.l && vis.b > vis.t ? [vis.l, vis.t, vis.r - vis.l, vis.b - vis.t] : null, clipped });
    if (clipped) reason = reason || 'clipped by its container (decorative)';
    // CSS-generated text (::before/::after content, e.g. a "No." label) is not in the DOM: rebuilding the block natively
    // would hide it with the rest and lose it, so such blocks stay in the frame image.
    for (const e of [root, ...root.querySelectorAll('*')]) { for (const pe of ['::before', '::after']) { const c = getComputedStyle(e, pe).content; if (c && c !== 'none' && c !== 'normal' && /[\p{L}\p{N}]/u.test(c)) { reason = reason || 'has CSS-generated text (' + c.slice(0, 12) + ')'; break; } } if (reason) break; }
    const rcs = getComputedStyle(root); if (/rotate|skew|matrix3d/.test(rcs.transform) || (rcs.transform.startsWith('matrix(') && (() => { const m = rcs.transform.match(/matrix\(([^)]+)\)/)[1].split(',').map(Number); return Math.abs(m[1]) > 1e-3 || Math.abs(m[2]) > 1e-3; })())) reason = reason || 'rotated/skewed';
    // font fit: Arial (or Arial Narrow for condensed faces) at the DOM size must be within ~22% of the DOM line width
    // Candidates every show machine has: Arial, Arial Narrow (Office), Impact (Windows + macOS core font) for heavy condensed caps.
    const cands = ['Arial', ...(narrowOK ? ['Arial Narrow'] : []), ...(impactOK && lines.every(l => l.toks.every(k => +k.cs.fontWeight >= 600 || /uppercase/.test(k.cs.textTransform))) ? ['Impact'] : [])];
    const fits = {};
    for (const f of cands) { let m = 1e9; for (const ln of lines) { const domW = ln.toks[ln.toks.length - 1].x + ln.toks[ln.toks.length - 1].w - ln.toks[0].x; let w = 0; ln.toks.forEach((k, i) => { w += measure((i && k.sp ? ' ' : '') + k.t, k.cs, k.px, '"' + f + '"'); }); if (w > 0) m = Math.min(m, domW / w); } fits[f] = m; }
    let font = 'Arial', fit = fits.Arial;
    if (fit < 0.9) for (const f of cands) if (Math.abs(Math.log(Math.min(fits[f], 1.15))) < Math.abs(Math.log(Math.min(fit, 1.15)))) { font = f; fit = fits[f]; }
    if (fit < 0.85) reason = reason || `font too different (${font} would need ${(fit * 100) | 0}% size)`;
    const align = (() => { const a = rcs.textAlign; if (a === 'center' || a === 'right' || a === 'end') return a === 'end' ? 'right' : a; if (lines.length > 1) { const cs = lines.map(l => (l.toks[0].x + l.toks[l.toks.length - 1].x + l.toks[l.toks.length - 1].w) / 2); if (Math.max(...cs) - Math.min(...cs) < 4 && Math.abs(lines[0].toks[0].x - lines[1].toks[0].x) > 4) return 'center'; } return 'left'; })();
    const pitch = lines.length > 1 ? (lines[lines.length - 1].y - lines[0].y) / (lines.length - 1) : null;
    texts.push({
      id: texts.length, native: !reason, reason, font, fit: +Math.min(1, fit).toFixed(3), align, pitch, box: [L, T, R - L, B - T], plain,
      lines: lines.map(l => ({ y: l.y, h: l.h, x0: l.toks[0].x, x1: l.toks[l.toks.length - 1].x + l.toks[l.toks.length - 1].w,
        runs: l.toks.reduce((runs, k, i) => { const st = { px: +k.px.toFixed(2), col: k.col, bold: k.bold, it: k.it, ls: +k.ls.toFixed(2) }; const t = (i && k.sp ? ' ' : '') + k.t; const last = runs[runs.length - 1]; if (last && JSON.stringify(last.st) === JSON.stringify(st)) last.t += t; else runs.push({ t, st }); return runs; }, []) })),
      _el: null
    });
    root.dataset.vxText = String(texts.length - 1);
    // Hide only this block's own text when it is rebuilt natively; a nested block that stays in the image keeps its
    // exact colors even though its parent's text goes transparent (inheritance).
    if (!reason) nodes.forEach(n => n.parentElement && n.parentElement.setAttribute('data-vx-hide', ''));
    else nodes.forEach(n => { const e = n.parentElement; if (!e) return; const c = getComputedStyle(e); e.setAttribute('data-vx-keep', ''); e.style.setProperty('--vx-c', c.color); e.style.setProperty('--vx-f', c.webkitTextFillColor); });
  }

  // ---- pictures ----
  const images = [];
  slide.querySelectorAll('img').forEach(img => {
    const r = img.getBoundingClientRect(); if (r.width < 8 || r.height < 8) return; const o = op(img); if (o < 0.04) return;
    const cs = getComputedStyle(img); let reason = null;
    if (!img.complete || !img.naturalWidth) reason = 'not loaded';
    const u = new URL(img.currentSrc || img.src, location.href); if (u.protocol !== 'file:') reason = reason || 'not a local file';
    if (cs.filter !== 'none' || cs.mixBlendMode !== 'normal' || cs.clipPath !== 'none' || cs.maskImage && cs.maskImage !== 'none') reason = reason || 'filter/blend/mask';
    if (/rotate|skew/.test(cs.transform) || (cs.transform.startsWith('matrix(') && (() => { const m = cs.transform.match(/matrix\(([^)]+)\)/)[1].split(',').map(Number); return Math.abs(m[1]) > 1e-3 || Math.abs(m[2]) > 1e-3 || m[0] < 0; })())) reason = reason || 'transformed';
    if (o < 0.95 && o > 0) reason = reason || 'partially transparent';
    // drawn content box per object-fit (cover/contain/fill), then clipped by overflow ancestors
    const nw = img.naturalWidth, nh = img.naturalHeight, fitm = cs.objectFit; let dx = r.left, dy = r.top, dw = r.width, dh = r.height;
    if (fitm === 'cover' || fitm === 'contain') { const sc = fitm === 'cover' ? Math.max(r.width / nw, r.height / nh) : Math.min(r.width / nw, r.height / nh); dw = nw * sc; dh = nh * sc; const [px, py] = cs.objectPosition.split(' ').map(v => parseFloat(v) / 100); dx = r.left + (r.width - dw) * (isNaN(px) ? .5 : px); dy = r.top + (r.height - dh) * (isNaN(py) ? .5 : py); }
    const cl = clipRect(img); const box = { l: Math.max(dx, r.left, cl.l), t: Math.max(dy, r.top, cl.t), r: Math.min(dx + dw, r.right, cl.r), b: Math.min(dy + dh, r.bottom, cl.b) };
    if (box.r - box.l < 4 || box.b - box.t < 4) return;
    const crop = { l: (box.l - dx) / dw, t: (box.t - dy) / dh, r: (dx + dw - box.r) / dw, b: (dy + dh - box.b) / dh };
    let radius = parseFloat(cs.borderTopLeftRadius) || 0; for (let e = img.parentElement; e && e !== slide; e = e.parentElement) { const c = getComputedStyle(e); if (c.overflow !== 'visible') radius = Math.max(radius, parseFloat(c.borderTopLeftRadius) || 0); }
    radius *= effScale(img);
    if (cs.imageRendering === 'pixelated' || cs.imageRendering === 'crisp-edges') reason = reason || 'pixel art (kept in the frame image)';
    images.push({ id: images.length, native: !reason, reason, path: u.protocol === 'file:' ? u.href : null, box: [box.l, box.t, box.r - box.l, box.b - box.t], crop, radius, natural: [nw, nh] });
    img.dataset.vxImg = String(images.length - 1);
  });

  // ---- inline SVG (vector) ----
  const svgs = [];
  const PROPS = ['fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'opacity', 'font-family', 'font-size', 'font-weight', 'font-style', 'text-anchor', 'dominant-baseline', 'letter-spacing', 'visibility', 'display'];
  slide.querySelectorAll('svg').forEach(svg => {
    if (svg.parentElement.closest('svg')) return; const r = svg.getBoundingClientRect(); if (r.width * r.height < 40000) return; const o = op(svg); if (o < 0.04) return;
    let reason = null;
    if (svg.querySelector('image,foreignObject,filter,mask,pattern,use')) reason = 'uses image/filter/mask/use';
    if (svg.querySelector('animate,animateTransform,animateMotion,set')) reason = reason || 'SMIL animation';
    if (getComputedStyle(svg).mixBlendMode !== 'normal' || getComputedStyle(svg).filter !== 'none') reason = reason || 'filter/blend';
    if (r.left < SR.left - 1 || r.top < SR.top - 1 || r.right > SR.right + 1 || r.bottom > SR.bottom + 1) reason = reason || 'extends past the slide';
    let markup = null;
    if (!reason) {
      const clone = svg.cloneNode(true); const src = [svg, ...svg.querySelectorAll('*')], dst = [clone, ...clone.querySelectorAll('*')];
      src.forEach((el, i) => { const cs = getComputedStyle(el), d = dst[i]; d.removeAttribute('class'); d.removeAttribute('style');
        const st = PROPS.map(p => { let v = cs.getPropertyValue(p); if (p === 'font-family') v = v + ', Arial, sans-serif'; return v && v !== 'normal' && v !== 'auto' ? `${p}:${v}` : ''; }).filter(Boolean);
        if (el !== svg && cs.transform && cs.transform !== 'none' && !el.getAttribute('transform')) { const bb = cs.transformOrigin.split(' ').map(parseFloat); d.setAttribute('transform', `translate(${bb[0]||0} ${bb[1]||0}) ${cs.transform.replace(/,/g, ' ')} translate(${-(bb[0]||0)} ${-(bb[1]||0)})`); }
        if (st.length) d.setAttribute('style', st.join(';')); });
      const vb = svg.getAttribute('viewBox'); clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg'); clone.setAttribute('width', String(Math.round(r.width))); clone.setAttribute('height', String(Math.round(r.height)));
      if (!vb) clone.setAttribute('viewBox', `0 0 ${svg.clientWidth || r.width} ${svg.clientHeight || r.height}`);
      markup = new XMLSerializer().serializeToString(clone);
    }
    svgs.push({ id: svgs.length, native: !reason, reason, box: [r.left, r.top, r.width, r.height], opacity: +o.toFixed(3), markup });
    svg.dataset.vxSvg = String(svgs.length - 1);
  });

  const iframes = [...slide.querySelectorAll('iframe')].map(f => { const r = f.getBoundingClientRect(); return { src: f.dataset.motionBase || f.getAttribute('src') || '', abs: new URL(f.dataset.motionBase || f.getAttribute('src') || '', location.href).href, box: [r.left, r.top, r.width, r.height], visible: op(f) > 0.04 && r.width > 50 }; }).filter(f => f.visible);
  const videos = [...slide.querySelectorAll('video')].map(v => { const r = v.getBoundingClientRect(); return { src: new URL(v.currentSrc || v.src || '', location.href).href, box: [r.left, r.top, r.width, r.height], visible: op(v) > 0.04 && r.width > 50 }; }).filter(v => v.visible);
  return { texts: texts.map(({ _el, ...t }) => t), images, svgs, allText, iframes, videos, slideRect: [SR.left, SR.top, SR.width, SR.height], vw: VW, vh: VH, fit: slide.dataset.safeFit || null };
}

function pageHideNative(on) {
  let st = document.getElementById('vx-hide');
  if (!on) { if (st) st.remove(); return; }
  if (!st) { st = document.createElement('style'); st.id = 'vx-hide'; document.head.appendChild(st); }
  const N = window.__vxNative || { t: [], i: [], s: [] };
  st.textContent = '[data-vx-hide]{color:transparent!important;-webkit-text-fill-color:transparent!important;text-shadow:none!important;text-decoration-color:transparent!important}[data-vx-keep]{color:var(--vx-c)!important;-webkit-text-fill-color:var(--vx-f)!important}' +
    [...N.i.map(i => `[data-vx-img="${i}"]`), ...N.s.map(i => `[data-vx-svg="${i}"]`)].join(',') + (N.i.length + N.s.length ? '{visibility:hidden!important}' : '') + (N.f ? '#deck .slide.active iframe{visibility:hidden!important}' : '');
}

// ---------- node side ----------
export async function capture(opts) {
  const { chromium } = loadPlaywright();
  await loadGuard();
  const work = path.resolve(opts.work), cache = path.resolve(opts.cache); const FR = path.join(work, 'frames');
  fs.mkdirSync(FR, { recursive: true }); fs.mkdirSync(path.join(cache, 'video'), { recursive: true });
  const picks = Object.fromEntries(opts.pick.map(kv => kv.split('=')));
  const qs = new URLSearchParams({ ...picks, safe: opts.safe }).toString();
  const url = pathToFileURL(path.join(ROOT, 'index.html')).href + '?' + qs;
  const browser = await chromium.launch({ executablePath: CHROME, args: ['--hide-scrollbars', '--autoplay-policy=no-user-gesture-required'] });
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => { try { localStorage.clear(); localStorage.setItem('sd-cfg', JSON.stringify({ transition: 'none' })); } catch (_) {} });
  const page = await ctx.newPage();
  const errors = []; page.on('pageerror', e => errors.push(String(e)));
  await page.goto(url); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(1500);
  // presenter UI is not part of the slide: arrows, counters, step indicator, toggles, drawers
  await page.addStyleTag({ content: '.nav-arrows,.nav-autoplay,#step-indicator,#counter,#mobile-ui-toggle,#slide-grid-zone,#slide-grid,#anno-toggle,#move-toggle,#move-hud,#notes-drawer,#export-modal,#anno-toast,#_fs-toast,#fs-btn,#talk-opts{display:none!important}' });
  const styleHash = sha(await page.evaluate(() => [...document.querySelectorAll('style')].map(s => s.textContent).join('\n')));
  const slides = await page.evaluate(pageVisibleSlides);
  const realPicks = await page.evaluate(() => window.TALK_PICKS || {});
  await page.evaluate(pageInit);
  await page.clock.install();
  // park every motion iframe on its static frame and stop the replay observer from reloading them during capture
  const dt = 1000 / opts.fps, out = { host: os.hostname(), roots: { repo: ROOT, work, cache }, url, picks: realPicks, safe: opts.safe, fps: opts.fps, errors, slides: [], states: [] };
  let n = 0; const jobs = [];
  try {
  for (const sl of slides) {
    if (opts.only && !opts.only.includes(sl.index)) continue;
    out.slides.push(sl);
    await page.evaluate(i => { goTo(i); }, sl.index);
    const nStates = sl.steps + 1;
    for (let k = 0; k < nStates; k++) {
      if (k > 0) await page.keyboard.press('ArrowRight');
      n++; const NN = String(n).padStart(2, '0'), letter = 'abcdefghijklmnopqrstuvwxyz'[k];
      const st = { n, NN, letter, deckIndex: sl.index, step: k, nSteps: sl.steps, type: sl.type, title: sl.title, kind: 'static' };
      const probe = await page.evaluate(() => { const s = allSlides[current]; return { html: s.outerHTML.length > 2e6 ? s.outerHTML.slice(0, 2e6) : s.outerHTML, iframe: [...s.querySelectorAll('iframe')].some(f => /media\/motion\/|#sdp=|\/slides\//.test(f.dataset.motionBase || f.getAttribute('src') || '')) }; });
      const motionIframe = probe.iframe && k === 0;
      // record/settle
      const key = sha(JSON.stringify([probe.html, styleHash, realPicks, opts.safe, k, opts.fps, opts.videoMin, 'rec-v2']));
      const cdir = path.join(cache, 'video', key.slice(0, 24)); const meta = path.join(cdir, 'meta.json');
      let rec = !motionIframe && fs.existsSync(meta) ? JSON.parse(fs.readFileSync(meta, 'utf8')) : null;
      const shots = [];
      const maxT = Math.round(opts.maxSec * opts.fps);
      let tick = 0, last = null, lastChange = 0, stable = 0;
      if (motionIframe) { // the deck itself just shows the iframe's ?play; settle the deck chrome, the video comes from seek
        for (; tick < 45; tick++) { await page.evaluate(([t, d]) => window.__vxStep(t + window.__vx.tick, d), [tick, dt]); await page.clock.runFor(dt); }
      } else if (rec) { // cached: fast-forward without screenshots
        const T = Math.round((rec.settleSec + 1.2) * opts.fps);
        for (; tick < T; tick++) { await page.evaluate(([t, d]) => window.__vxStep(t + window.__vx.tick, d), [tick, dt]); await page.clock.runFor(dt); }
      } else {
        const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'vx-'));
        for (; tick < maxT; tick++) {
          const running = await page.evaluate(([t, d]) => window.__vxStep(t + window.__vx.tick, d), [tick, dt]);
          const buf = await page.screenshot({ animations: 'allow', caret: 'hide' });
          const h = sha(buf); if (h !== last) { lastChange = tick; stable = 0; } else stable++;
          last = h; const f = path.join(tmp, String(tick).padStart(5, '0') + '.png'); fs.writeFileSync(f, buf); shots.push(f);
          await page.clock.runFor(dt);
          if (running === 0 && stable >= opts.fps * 1.0) break;
        }
        const settleSec = lastChange / opts.fps;
        rec = { kind: settleSec > opts.videoMin ? 'video' : 'static', settleSec, frames: lastChange + 1, capped: tick >= maxT };
        if (rec.kind === 'video') {
          fs.mkdirSync(cdir, { recursive: true });
          execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-threads', '4', '-framerate', String(opts.fps), '-i', path.join(tmp, '%05d.png'),
            '-vf', `trim=end_frame=${lastChange + 1},tpad=stop_mode=clone:stop_duration=1,format=yuv420p`, '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-movflags', '+faststart', path.join(cdir, 'video.mp4')]);
          fs.copyFileSync(shots[lastChange], path.join(cdir, 'poster.png'));
        }
        fs.mkdirSync(cdir, { recursive: true }); fs.writeFileSync(meta, JSON.stringify(rec));
        fs.rmSync(tmp, { recursive: true, force: true });
      }
      await page.evaluate(t => { window.__vx.tick += t; }, tick);
      // geometry + frames
      const ex = await page.evaluate(pageExtract);
      const full = path.join(FR, NN + '-full.png'); await page.screenshot({ path: full, caret: 'hide' });
      for (const sv of ex.svgs) if (sv.native) { const [x, y, w, h] = sv.box; sv.png = path.join(FR, `${NN}-svg${sv.id}.png`); await page.screenshot({ path: sv.png, clip: { x, y, width: w, height: h }, caret: 'hide' }); fs.writeFileSync(path.join(FR, `${NN}-svg${sv.id}.svg`), sv.markup); sv.svg = path.join(FR, `${NN}-svg${sv.id}.svg`); delete sv.markup; }
      await page.evaluate(N => { window.__vxNative = N; }, { t: ex.texts.filter(t => t.native).map(t => t.id), i: ex.images.filter(t => t.native).map(t => t.id), s: ex.svgs.filter(t => t.native).map(t => t.id), f: motionIframe });
      await page.evaluate(pageHideNative, true);
      const bg = path.join(FR, NN + '-bg.png'); await page.screenshot({ path: bg, caret: 'hide' });
      await page.evaluate(pageHideNative, false);
      Object.assign(st, { full, bg, ...ex, notes: await page.evaluate(i => (typeof getSlideNotes === 'function' ? getSlideNotes(i) : '') || '', sl.index) });
      // video for this state
      const vslug = slug(sl.module?.name || (st.iframes[0] && path.basename(st.iframes[0].src.split(/[?#]/)[0], '.html')) || sl.title);
      if (motionIframe && st.iframes.length) {
        st.picks = realPicks; jobs.push({ st, fr: st.iframes[0], file: `${NN}${letter}-${vslug}.mp4` });
        { const nm = (st.iframes[0].src.match(/([\w-]+)\.html/) || [])[1]; const mf = await page.evaluate(n => (window.MOTION_FIT || {})[n] || null, nm); const f = nm && path.join(ROOT, 'media/motion', nm + '.html');
          if (f && fs.existsSync(f)) { const h = sha(fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n')).slice(0, 16); if (!mf) (st.warn = st.warn || []).push(`${nm}: no entry in talk/motion-fit.js (run node tools/motion_fit.mjs ${nm} && python3 tools/bake_talk.py); slide shows the whole frame at 70%`); else if (mf.src !== h) (st.warn = st.warn || []).push(`${nm}: talk/motion-fit.js is stale (run node tools/motion_fit.mjs ${nm} && python3 tools/bake_talk.py)`); } }  // rendered after the walk, same page (one browser, one page)
      } else if (rec && rec.kind === 'video') {
        Object.assign(st, { kind: 'video', video: { cache: path.join(cdir, 'video.mp4'), poster: path.join(cdir, 'poster.png'), duration: probeDur(path.join(cdir, 'video.mp4')), file: `${NN}${letter}-${vslug}.mp4`, source: 'record', capped: !!rec.capped, settleSec: rec.settleSec } });
      }
      if (st.videos.length) st.warn = (st.warn || []).concat(['<video> element on slide: frozen in capture (not exported as its own MP4 yet)']);
      out.states.push(st);
      console.log(`  ${NN}${letter} deck#${sl.index} step ${k}/${sl.steps} ${st.kind}${st.video ? ' ' + st.video.file + ' ' + st.video.duration.toFixed(1) + 's (' + st.video.source + (st.video.cached ? ', cached' : '') + ')' : ''}  text ${st.texts.filter(t => t.native).length}/${st.texts.length} img ${st.images.filter(t => t.native).length}/${st.images.length} svg ${st.svgs.filter(t => t.native).length}/${st.svgs.length}  ${sl.title.slice(0, 40)}`);
    }
  }
  for (const j of jobs) {
    await loadGuard();
    const v = await renderIframeMotion(page, j.fr, j.st, opts, cache);
    if (v) Object.assign(j.st, { kind: 'video', video: { ...v, file: j.file, source: 'seek' } });
    else (j.st.warn = j.st.warn || []).push('motion iframe has no window.seek: kept as a still');
    console.log(`  ${j.st.NN}${j.st.letter} ${v ? j.file + ' ' + v.duration.toFixed(1) + 's (seek' + (v.cached ? ', cached' : '') + ')' : 'no seek'}`);
  }
  } finally { await browser.close(); }
  fs.writeFileSync(path.join(work, 'capture.json'), JSON.stringify(out, null, 1));
  return out;
}

// Fleet throttle (2026-10-27): admit heavy batches through the host load guard; exit 75 = wait and retry.
export async function loadGuard(cls = 'build') {
  const g = path.join(os.homedir(), 'knowledge/scripts/fleet-load-guard.sh'); if (!fs.existsSync(g)) return;
  for (let i = 0; ; i++) { try { execFileSync('bash', [g, 'admit', cls], { stdio: 'ignore' }); return; } catch (e) { if (e.status !== 75) return; console.log('  load guard: host busy, waiting 60 s'); await new Promise(r => setTimeout(r, 60000)); } }
}

export const auditMotionText = (p, [x, y, w, h]) => p.evaluate(([X, Y, W, H]) => {
    const END = window.MOTION_END || 10, bad = {}, sx = W / innerWidth, sy = H / innerHeight;
    const vis = el => { let o = 1; for (let e = el; e && e.nodeType === 1; e = e.parentNode) { const cs = getComputedStyle(e); o *= +cs.opacity; if (cs.display === 'none' || cs.visibility === 'hidden') return 0; } return o; };
    for (let t = 0; t <= END + 1e-6; t += 0.25) { window.seek(Math.min(t, END));
      const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      for (let n; (n = tw.nextNode());) { if (!n.nodeValue.trim() || !n.parentElement || n.parentElement.closest('script,style')) continue; if (vis(n.parentElement) < .05) continue;
        const rg = document.createRange(); rg.selectNodeContents(n); const r = rg.getBoundingClientRect(); if (!r.width) continue;
        const L = X + r.left * sx, T = Y + r.top * sy, R = X + r.right * sx, B = Y + r.bottom * sy;
        const over = Object.entries({ left: 288 - L, right: R - 1632, top: 162 - T, bottom: B - 918 }).filter(([, v]) => v > 2).map(([k, v]) => k + ' ' + Math.round(v) + 'px');
        if (over.length) { const k = n.nodeValue.trim().slice(0, 32); (bad[k] = bad[k] || { t: t, over: over.join('/') }); } } }
    return Object.entries(bad).map(([k, v]) => ({ text: k, t: +v.t.toFixed(2), over: v.over }));
  }, [x, y, w, h]);

function probeDur(f) { return +execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'default=nw=1:nk=1', f]).toString().trim(); }

// Deterministic render of a seekable motion graphic, composited into its on-slide (safe-zone) rect over the deck bg.
async function renderIframeMotion(p, fr, st, opts, cache) {
  const srcPath = fileURLToPath(fr.abs.split(/[?#]/)[0]);
  const deps = [srcPath, ...fs.readdirSync(path.dirname(srcPath)).filter(f => f.endsWith('.js')).map(f => path.join(path.dirname(srcPath), f))].filter(f => fs.existsSync(f));
  const key = sha(JSON.stringify([deps.map(f => sha(fs.readFileSync(f))), sha(fs.readFileSync(st.bg)), fr.box.map(Math.round), new URL(fr.abs).search, new URL(fr.abs).hash, opts.fps, st.picks, 'seek-v1']));
  const cdir = path.join(cache, 'video', 'seek-' + key.slice(0, 24)); const mp4 = path.join(cdir, 'video.mp4'), poster = path.join(cdir, 'poster.png'), metaF = path.join(cdir, 'meta.json');
  if (fs.existsSync(mp4) && fs.existsSync(poster) && fs.existsSync(metaF)) return { cache: mp4, poster, duration: probeDur(mp4), cached: true, ...JSON.parse(fs.readFileSync(metaF, 'utf8')) };
  const u = new URL(fr.abs); u.searchParams.delete('static'); u.searchParams.delete('play'); u.searchParams.set('t', '0');
  const look = (st.picks || {}).theme; if (look && look !== 'noir' && !u.searchParams.has('look')) u.searchParams.set('look', look);
  await p.goto(u.href); await p.waitForFunction(() => typeof window.seek === 'function', null, { timeout: 15000 }).catch(() => {});
  if (!(await p.evaluate(() => typeof window.seek === 'function'))) return null;
  await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(400);
  const end = await p.evaluate(() => window.MOTION_END || 10);
  const [x, y, w, h] = fr.box.map(Math.round);
  // Safe-zone audit of the text baked into the video: every visible text box at t = 0, 0.25, 0.5 ... END, mapped
  // through the same scale/offset the composite uses (motion page 1920x1080 -> the slide's safe-zone rect).
  const audit = await auditMotionText(p, [x, y, w, h]);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'vxm-')); const frames = Math.ceil(end * opts.fps);
  for (let i = 0; i <= frames; i++) { await p.evaluate(s => window.seek(s), Math.min(i / opts.fps, end)); await p.screenshot({ path: path.join(tmp, String(i).padStart(5, '0') + '.png') }); }
  // Sound cues (window.MOTION_SFX = [{t, kind:'honk', pitch}]): same synthesized horn as tools/render_motion.mjs
  const sfx = await p.evaluate(() => window.MOTION_SFX || null); const HOLD = 1;
  let aud = null;
  if (sfx && sfx.length) {
    aud = path.join(tmp, 'sfx.m4a'); const dur = frames / opts.fps + HOLD, ins = [], fl = [];
    sfx.forEach((c, i) => { const f1 = (350 * (c.pitch || 1)).toFixed(1), f2 = (440 * (c.pitch || 1)).toFixed(1);
      ins.push('-f', 'lavfi', '-i', `aevalsrc=0.16*(sgn(sin(2*PI*${f1}*t))+sgn(sin(2*PI*${f2}*t)))*min(1\\,t/0.012)*min(1\\,(0.28-t)/0.05):s=48000:d=0.28`);
      fl.push(`[${i}]lowpass=f=2200,adelay=${Math.round(c.t * 1000)}:all=1[a${i}]`); });
    execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-threads', '4', ...ins, '-filter_complex', fl.join(';') + ';' + sfx.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${sfx.length}:normalize=0,apad,atrim=0:${dur.toFixed(3)}[out]`, '-map', '[out]', '-c:a', 'aac', '-b:a', '128k', aud]);
  }
  fs.mkdirSync(cdir, { recursive: true });
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-threads', '4', '-loop', '1', '-framerate', String(opts.fps), '-i', st.bg, '-framerate', String(opts.fps), '-i', path.join(tmp, '%05d.png'), ...(aud ? ['-i', aud] : []),
    '-filter_complex', `[1:v]scale=${w}:${h}:flags=lanczos[f];[0:v][f]overlay=${x}:${y}:shortest=1,tpad=stop_mode=clone:stop_duration=${HOLD},format=yuv420p[v]`, '-map', '[v]', ...(aud ? ['-map', '2:a', '-c:a', 'copy'] : []),
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '18', '-r', String(opts.fps), ...(aud ? ['-shortest'] : []), '-movflags', '+faststart', mp4]);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-threads', '4', '-sseof', '-0.2', '-i', mp4, '-update', '1', '-frames:v', '1', poster]);  // = the held final frame
  fs.rmSync(tmp, { recursive: true, force: true });
  const meta = { motionEnd: end, audio: !!aud, sfx: sfx ? sfx.length : 0, textAudit: audit };
  fs.writeFileSync(metaF, JSON.stringify(meta));
  return { cache: mp4, poster, duration: probeDur(mp4), ...meta };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const a = parseArgs(process.argv.slice(2));
  if (!a.work || !a.cache) { console.error('usage: node tools/venue_capture.mjs --work DIR --cache DIR [--pick g=c ...]'); process.exit(2); }
  await capture(a);
}
