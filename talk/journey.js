/* PMRE journey minimap + persistent pixel Alex (option group "journey": on | map | off). Spliced into index.html by
   tools/bake_talk.py after talk/intro.js; CSS in talk/journey.css.
   Architecture adopted from the HarvardXR 2026 keynote's bottom-right tracker (harvardxr-keynote@7c6fbf5, buildTracker /
   tPos / updateTracker / the intermission grow-and-shrink hand-off): one small fixed SVG, one stop per chapter, a tiny
   Stardew-style Alex at the current chapter, hidden on slides that already draw a big Alex. The PMRE map is the talk's own
   metaphor instead of the Agile Lens monocle: one lane ("pick a lane") forks into three strands (architecture, theater,
   technology) that braid and rejoin as one wider road, like media/motion/lane.html.
   Costume follows facts already in the deck: beardless student early; headset from the 2013 chapter (DK1, Kickstarter late
   2012, hands-on 2013); the 2020 chapter card is the "pandemic beard" reveal (Alex, 2026-10-27; HXR's tracker also switches
   to the beard from 2020): the headset comes off so the beard reads, and from 2020 on he stays bearded with no headset.
   Slide hook: listens for the modular-slides `sd:slide` event ({index, slide, type, section, year, shows}) and falls back to a
   MutationObserver on the active slide (data-section / data-year / data-sd-shows). Slides that already show pixel Alex
   declare `shows: ['avatar']` in sections.js; jInit() copies that to data-sd-shows unless something already set it.
   Motion off (no walking, no hop-outs, no bob) for ?static, ?reduced, ?print, ?shot and prefers-reduced-motion.
   ?print puts a static minimap on each printed slide (the PDF is a handout of the journey; same state the room saw).
   Pixel data: copied from talk/intro.js tiAvatar/tiHeadset (itself ported from the HXR / FMX intro sprite) so this file
   has no runtime dependency on intro.js. */
const J = (() => {
  const q = new URLSearchParams(location.search); let rm = false; try { rm = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}
  const exp = q.has('print') || q.has('shot');
  return { exp, still: exp || q.has('static') || q.has('reduced') || rm,
    W: 200, H: 54, LANE_Y: 40, FORK: 24, MERGE: 160, A: 9, P: 68,
    END_X: 196,
    HOP: { '2010': 'headset', '2020': 'beard' },  // chapter year → costume change earned on that chapter card
    S: 1 / 3 };                           // walker scale in the 200-unit map: ~24 units; 0.5px per sprite pixel at 300px wide
})();
const jE = (tag, a = {}) => { const e = document.createElementNS('http://www.w3.org/2000/svg', tag); for (const k in a) e.setAttribute(k, a[k]); return e; };

// ── Route geometry (pure JS, so print/static/PNG export get identical positions without layout) ──
function jEnv(x) { return x <= J.FORK || x >= J.MERGE ? 0 : Math.sin(Math.PI * (x - J.FORK) / (J.MERGE - J.FORK)); }
function jStrandY(x, j) { return J.LANE_Y + J.A * jEnv(x) * Math.sin(2 * Math.PI * (x - J.FORK) / J.P + j * 2 * Math.PI / 3); }
const J_ROUTE = (() => { const pts = []; for (let x = 2; x <= J.END_X; x += 1) pts.push([x, jStrandY(x, 0)]); let L = 0; const len = [0];
  for (let i = 1; i < pts.length; i++) { L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); len.push(L); } return { pts, len, total: L }; })();
function jLenAtX(x) { const i = Math.max(0, Math.min(J_ROUTE.pts.length - 1, Math.round(x - 2))); return J_ROUTE.len[i]; }
function jPointAt(L) { const { pts, len } = J_ROUTE; L = Math.max(0, Math.min(J_ROUTE.total, L)); let i = 1; while (i < len.length - 1 && len[i] < L) i++;
  const k = (L - len[i - 1]) / ((len[i] - len[i - 1]) || 1); return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * k, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * k]; }
function jPath(x0, x1, j) { let d = ''; for (let x = x0; x <= x1; x += 1) d += (d ? ' L' : 'M') + x + ',' + jStrandY(x, j).toFixed(2); return d; }
function jTrail(L) { const { pts, len } = J_ROUTE; let d = 'M' + pts[0].join(','); for (let i = 1; i < pts.length && len[i] <= L; i++) d += ' L' + pts[i][0] + ',' + pts[i][1].toFixed(2); const p = jPointAt(L); return d + ' L' + p[0].toFixed(2) + ',' + p[1].toFixed(2); }

// ── Sprite (copied from talk/intro.js tiAvatar + tiHeadset; feet at y=28, head top at y=-43) ──
function jAvatar(parent) {
  const root = jE('g', { class: 'j-av' }); parent.appendChild(root);
  const SKIN = '#f2c79b', SKIN_DARK = '#d9a77a', HAIR_LIGHT = '#a8602f', HAIR = '#8b4a2a', HAIR_DARK = '#5e2f1a', HAIR_SHADOW = '#3a1c08', BEARD = '#6e3a1e', BEARD_LIGHT = '#8a4f2a', SHIRT = '#6a8fd6', SHIRT_DARK = '#4a6fb8', PANTS = '#3f3025', BOOTS = '#1f150c', EYE = '#1a1a26';
  const px = (g, x, y, w, h, fill) => g.appendChild(jE('rect', { x, y, width: w, height: h, fill }));
  const body = jE('g'); root.appendChild(body);
  px(body, -12, -34, 24, 22, SKIN); px(body, -12, -16, 24, 4, SKIN_DARK);
  px(body, -13, -40, 26, 2, HAIR_SHADOW); px(body, -15, -38, 30, 3, HAIR_SHADOW); px(body, -16, -36, 32, 4, HAIR_SHADOW); px(body, -9, -42, 5, 2, HAIR_SHADOW); px(body, 3, -42, 4, 2, HAIR_SHADOW); px(body, -2, -43, 5, 1, HAIR_SHADOW);
  px(body, -12, -40, 24, 2, HAIR_DARK); px(body, -14, -38, 28, 3, HAIR_DARK); px(body, -13, -34, 30, 3, HAIR_DARK); px(body, -8, -42, 4, 2, HAIR_DARK); px(body, 4, -42, 3, 2, HAIR_DARK); px(body, -1, -43, 3, 1, HAIR_DARK);
  px(body, -11, -41, 22, 1, HAIR); px(body, -13, -38, 26, 2, HAIR); px(body, -14, -36, 28, 2, HAIR); px(body, -8, -41, 4, 1, HAIR); px(body, 4, -41, 3, 1, HAIR);
  px(body, -13, -34, 2, 3, HAIR_DARK); px(body, 12, -33, 2, 3, HAIR_DARK); px(body, -14, -31, 2, 4, HAIR); px(body, 10, -31, 1, 2, HAIR);
  px(body, -8, -40, 3, 1, HAIR_LIGHT); px(body, 4, -40, 2, 1, HAIR_LIGHT); px(body, -10, -38, 2, 1, HAIR_LIGHT); px(body, -2, -42, 2, 1, HAIR_LIGHT); px(body, -7, -41, 2, 1, HAIR_LIGHT);
  px(body, -12, -34, 5, 3, HAIR_DARK); px(body, -11, -33, 4, 2, HAIR); px(body, -7, -34, 3, 2, HAIR_DARK); px(body, -7, -33, 2, 1, HAIR); px(body, -4, -34, 2, 4, HAIR_DARK); px(body, -4, -33, 1, 3, HAIR); px(body, -1, -34, 3, 2, HAIR_DARK); px(body, -1, -33, 2, 1, HAIR); px(body, 3, -34, 4, 3, HAIR_DARK); px(body, 3, -33, 3, 2, HAIR); px(body, 7, -34, 5, 4, HAIR_DARK); px(body, 10, -31, 3, 3, HAIR);
  px(body, -12, -31, 2, 1, HAIR_LIGHT); px(body, 8, -33, 2, 1, HAIR_LIGHT);
  px(body, -8, -27, 8, 3, HAIR_DARK); px(body, 3, -28, 9, 4, HAIR_DARK);
  px(body, -7, -24, 3, 4, EYE); px(body, 4, -24, 3, 4, EYE); px(body, -6, -23, 1, 2, '#fff'); px(body, 5, -23, 1, 2, '#fff');
  px(body, -3, -17, 6, 1, '#9c5040');
  const beard = jE('g', { class: 'j-beard' }); body.appendChild(beard);
  px(beard, -12, -22, 4, 5, BEARD); px(beard, 8, -22, 4, 5, BEARD); px(beard, -12, -20, 5, 3, BEARD); px(beard, 7, -20, 5, 3, BEARD); px(beard, -12, -17, 4, 1, BEARD); px(beard, 8, -17, 4, 1, BEARD); px(beard, -7, -19, 14, 2, BEARD); px(beard, -6, -19, 12, 1, BEARD_LIGHT); px(beard, -2, -16, 4, 1, BEARD); px(beard, -12, -16, 24, 2, BEARD); px(beard, -12, -14, 24, 2, BEARD); px(beard, -10, -12, 20, 1, BEARD);
  px(body, -4, -12, 8, 3, SKIN_DARK);
  px(body, -12, -9, 24, 18, SHIRT); px(body, -12, -9, 24, 3, SHIRT_DARK); px(body, -12, 6, 24, 3, SHIRT_DARK);
  const legL = jE('g', { class: 'j-leg-l' }), legR = jE('g', { class: 'j-leg-r' }); body.appendChild(legL); body.appendChild(legR);
  px(legL, -12, 9, 12, 14, PANTS); px(legL, -12, 23, 12, 5, BOOTS); px(legR, 0, 9, 12, 14, PANTS); px(legR, 0, 23, 12, 5, BOOTS); px(body, -2, 9, 4, 14, '#2a1f18');
  const hs = jE('g', { class: 'j-headset' }); body.appendChild(hs);
  px(hs, -13, -27, 26, 1, '#0a0a14'); px(hs, -13, -26, 26, 9, '#1a1a26'); px(hs, -13, -17, 26, 1, '#0a0a14');
  px(hs, -8, -24, 5, 5, '#00d4ff'); px(hs, 3, -24, 5, 5, '#00d4ff'); px(hs, -7, -23, 1, 1, '#fff'); px(hs, 4, -23, 1, 1, '#fff');
  px(hs, -13, -23, 1, 3, '#3a3a4e'); px(hs, 12, -23, 1, 3, '#3a3a4e');
  const down = jE('g', { class: 'j-arms-down' }); px(down, -18, -8, 6, 14, SHIRT); px(down, -18, 4, 6, 4, SKIN); px(down, 12, -8, 6, 14, SHIRT); px(down, 12, 4, 6, 4, SKIN); root.appendChild(down);
  const up = jE('g', { class: 'j-arms-up' }); px(up, -18, -22, 6, 14, SHIRT); px(up, -18, -26, 6, 6, SKIN); px(up, 12, -22, 6, 14, SHIRT); px(up, 12, -26, 6, 6, SKIN); root.appendChild(up);
  return root;
}
// Costume for a chapter index (-1 = before the talk starts, 99 = after the last chapter).
function jIdx(year) { const i = SECTIONS.findIndex(s => String(s.year) === year); return i < 0 ? Infinity : i; }
function jCostume(si) { const h = jIdx('2010'), b = jIdx('2020'); return { headset: si >= h && si < b, beard: si >= b }; }
function jHop(si) { return J.HOP[String(SECTIONS[si]?.year)] || null; }
// Stops: the lane stop, the braided chapters spaced evenly, the merge (second-to-last chapter) and the last chapter on the road.
function jStops() { if (J._stops) return J._stops; const n = SECTIONS.length, mid = n - 3, x = [10];
  for (let i = 0; i < mid; i++) x.push(Math.round(36 + (mid > 1 ? i * 100 / (mid - 1) : 0))); x.push(J.MERGE, 184); return (J._stops = x); }
function jDress(av, c) { av.classList.toggle('has-headset', !!c.headset); av.classList.toggle('has-beard', !!c.beard); }

// ── Map SVG: strands, stops, trail, walker. Returns {svg, set(state)} so live, print and PNG export share one renderer ──
function jBuildMap() {
  const svg = jE('svg', { viewBox: `0 0 ${J.W} ${J.H}`, class: 'j-map', 'aria-hidden': 'true' });
  const g = jE('g', { class: 'j-roads' }); svg.appendChild(g);
  g.appendChild(jE('path', { d: `M2,${J.LANE_Y} L${J.FORK},${J.LANE_Y}`, class: 'j-lane' }));
  [1, 2, 0].forEach(j => g.appendChild(jE('path', { d: jPath(J.FORK, J.MERGE, j), class: 'j-strand' + (j === 0 ? ' j-strand-route' : '') })));
  g.appendChild(jE('path', { d: `M${J.MERGE},${J.LANE_Y} L${J.END_X + 2},${J.LANE_Y}`, class: 'j-road' }));
  const trail = jE('path', { d: '', class: 'j-trail' }); svg.appendChild(trail);
  const stops = jStops().map(x => { const c = jE('circle', { cx: x, cy: jStrandY(x, 0).toFixed(2), r: 2.4, class: 'j-stop' }); svg.appendChild(c); return c; });
  const walker = jE('g', { class: 'j-walker' }); const flip = jE('g', { class: 'j-flip' }); const bob = jE('g', { class: 'j-bob' });
  const scale = jE('g', { transform: `scale(${J.S})` }); walker.appendChild(flip); flip.appendChild(bob); bob.appendChild(scale); svg.appendChild(walker);
  const av = jAvatar(scale);
  let L = 0;
  function place(len) { L = len; const p = jPointAt(len); walker.setAttribute('transform', `translate(${p[0].toFixed(2)},${(p[1] - 28 * J.S + 0.6).toFixed(2)})`); trail.setAttribute('d', jTrail(len)); }
  function set(st) {  // st = {si, lesson, end, costume}
    const cur = st.end ? jStops().length : st.si;
    stops.forEach((c, i) => { c.classList.toggle('is-visited', i < cur || (i === cur && !st.lesson)); c.classList.toggle('is-current', i === cur); c.setAttribute('r', i === cur ? 3.4 : 2.4); });
    jDress(av, st.costume || jCostume(st.end ? 99 : st.si));
  }
  return { svg, walker, flip, bob, av, place, set, get L() { return L; } };
}
function jStateFor(sl) {
  if (!sl) return null; const ty = sl.dataset.type;
  if (ty === 'lesson' || ty === 'case') { const si = +sl.dataset.section; if (!(si >= 0)) return null; return { si, lesson: ty === 'lesson', end: false }; }
  if (ty === 'bonus' || ty === 'close') return { si: SECTIONS.length - 1, lesson: false, end: true };
  return null;  // cover, map, settings: no minimap
}
function jLenFor(st) { return st.end ? jLenAtX(J.END_X) : jLenAtX(jStops()[Math.min(st.si, jStops().length - 1)]); }
function jShows(sl) { return (sl?.dataset.sdShows || '').split(/[\s,]+/).includes('avatar'); }

// Static SVG markup for a state (tools/render_journey_png.mjs → organizer PPTX).
window.journeyStaticSVG = function (si, end) { const m = jBuildMap(); const st = { si, lesson: false, end: !!end }; m.set(st); m.place(jLenFor(st)); return m.svg; };

// ── Slide attributes the modular-slides refactor will own; set only when absent so the two never fight ──
function jTagSlides() {
  let si = -1, ci = 0;
  allSlides.forEach(sl => {
    const ty = sl.dataset.type; let cfg = null;
    if (ty === 'lesson') { si = +sl.dataset.section; ci = 0; cfg = SECTIONS[si]?.lesson; }
    else if (ty === 'case') { cfg = SECTIONS[+sl.dataset.section]?.cases[ci++]; }
    if (si >= 0 && (ty === 'lesson' || ty === 'case')) { if (!sl.hasAttribute('data-section')) sl.dataset.section = si; if (!sl.hasAttribute('data-year')) sl.dataset.year = SECTIONS[si].year; }
    if (cfg && Array.isArray(cfg.shows) && !sl.hasAttribute('data-sd-shows')) sl.dataset.sdShows = cfg.shows.join(' ');
  });
}

function jInit() {
  if (window._jInit || typeof allSlides === 'undefined' || typeof SECTIONS === 'undefined') return; window._jInit = true;
  const pick = (window.TALK_PICKS || (typeof talkPicks === 'function' ? talkPicks() : {})).journey || 'on';
  document.body.dataset.journey = pick;
  jTagSlides();
  if (pick === 'off') return;
  if (document.body.classList.contains('print-mode')) { jPrint(); return; }
  const box = document.createElement('div'); box.id = 'journey'; box.innerHTML = '<div class="j-label"></div>';
  const map = jBuildMap(); box.appendChild(map.svg); document.body.appendChild(box);
  const label = box.querySelector('.j-label');
  const hopOn = pick === 'on' && !J.still;
  let shownSlide = null, lastIdx = -1, walkRaf = 0, hop = null, lastSi = null;
  map.place(0);
  function cancelWalk() { if (walkRaf) cancelAnimationFrame(walkRaf); walkRaf = 0; box.classList.remove('is-walking'); }
  function walkTo(target, done) {
    cancelWalk(); const from = map.L; const d = target - from;
    if (J.still || Math.abs(d) < 0.5 || box.classList.contains('is-hidden')) { map.place(target); done && done(); return; }
    map.flip.setAttribute('transform', d < 0 ? 'scale(-1,1)' : ''); box.classList.add('is-walking');
    const dur = Math.max(600, Math.min(1000, 450 + Math.abs(d) * 4)), t0 = performance.now();
    const step = now => { const k = Math.min(1, (now - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; map.place(from + d * e);
      if (k < 1) { walkRaf = requestAnimationFrame(step); return; } walkRaf = 0; box.classList.remove('is-walking'); map.flip.setAttribute('transform', ''); done && done(); };
    walkRaf = requestAnimationFrame(step);
  }
  function update(sl, idx) {
    if (!sl) return;
    if (sl === shownSlide && idx === lastIdx) return;
    const fwd = idx > lastIdx; shownSlide = sl; lastIdx = idx;
    stopHop();
    const st = jStateFor(sl);
    const hidden = !st || jShows(sl) || document.body.classList.contains('notes-mode');
    box.classList.toggle('is-hidden', hidden);
    box.classList.toggle('on-media', !!sl.querySelector('.grid-wrap,.layout-grid .grid,img.full-media,iframe.anim-frame') || /layout-(grid|full)/.test(sl.className));
    box.classList.toggle('is-close', sl.dataset.type === 'close');
    if (!st) return;
    label.textContent = st.end ? (sl.dataset.type === 'close' ? 'THANK YOU' : (BONUS.year || 'THE LESSON')) : String(SECTIONS[st.si].year);
    const hopKind = hopOn && fwd && st.lesson && !hidden && jHop(st.si) && lastSi !== null && lastSi < st.si ? jHop(st.si) : null;
    // The costume change is earned on the chapter card: until the hop finishes he keeps the previous chapter's look.
    map.set(hopKind ? { ...st, costume: jCostume(st.si - 1) } : st);
    lastSi = st.end ? 99 : st.si;
    walkTo(jLenFor(st), hopKind ? () => startHop(hopKind, st) : null);
    if (sl.dataset.type === 'close' && !J.still) wave();
  }
  function wave() { let n = 0; const av = map.av; const t = setInterval(() => { av.classList.toggle('arms-up'); if (++n >= 6) { clearInterval(t); av.classList.remove('arms-up'); } }, 380); }
  // Hop-out: HXR's intermission hand-off at chapter-card scale. The minimap walker grows out of the map into the empty
  // lower-right of the card, changes costume (flash, like HXR's beard evolution but quieter), then shrinks back in.
  function stopHop() { if (!hop) return; hop.timers.forEach(clearTimeout); cancelAnimationFrame(hop.raf); hop.layer.remove(); map.walker.style.opacity = ''; const st = hop.st; hop = null; map.set(st); }
  function startHop(kind, st) {
    const layer = jE('svg', { class: 'j-hop', width: innerWidth, height: innerHeight, viewBox: `0 0 ${innerWidth} ${innerHeight}`, 'aria-hidden': 'true' });
    const g = jE('g'), inner = jE('g'); g.appendChild(inner); layer.appendChild(g); document.body.appendChild(layer);
    const av = jAvatar(inner); jDress(av, jCostume(st.si - 1));
    const wr = map.walker.getBoundingClientRect(), sx = wr.left + wr.width / 2, sy = wr.bottom, s0 = wr.height / 71;
    const mr = box.getBoundingClientRect(), big = Math.max(1.2, Math.min(2.2, innerHeight * 0.13 / 71));
    const tx = mr.left + mr.width * 0.42, ty = mr.top - innerHeight * 0.07;
    hop = { layer, timers: [], raf: 0, st };
    map.walker.style.opacity = '0';
    const at = (x, y, s) => { g.setAttribute('transform', `translate(${x.toFixed(1)},${(y - 28 * s).toFixed(1)})`); inner.setAttribute('transform', `scale(${s.toFixed(3)})`); };
    const tween = (a, b, dur, then) => { const t0 = performance.now(); const f = now => { if (!hop) return; const k = Math.min(1, (now - t0) / dur), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2, arc = Math.sin(Math.PI * k) * innerHeight * 0.04;
      at(a[0] + (b[0] - a[0]) * e, a[1] + (b[1] - a[1]) * e - arc, a[2] + (b[2] - a[2]) * e); if (k < 1) { hop.raf = requestAnimationFrame(f); return; } then && then(); }; hop.raf = requestAnimationFrame(f); };
    const later = (ms, fn) => hop.timers.push(setTimeout(fn, ms));
    at(sx, sy, s0);
    tween([sx, sy, s0], [tx, ty, big], 900, () => {
      const now = jCostume(st.si); let old = jCostume(st.si - 1), t0 = 0;
      if (kind === 'beard' && old.headset) {  // pandemic beard: the headset lifts off first (a beat), so the beard reads clearly
        av.classList.add('hs-off'); later(450, () => { av.classList.remove('hs-off'); jDress(av, { ...old, headset: false }); });
        old = { ...old, headset: false }; t0 = 650;
      }
      later(t0, () => av.classList.add('arms-up'));
      [0, 180, 380, 620, 900].forEach((t, i) => later(t0 + t, () => { jDress(av, i % 2 ? old : now); layer.classList.toggle('j-flash', i % 2 === 0); }));
      later(t0 + 1100, () => { layer.classList.remove('j-flash'); av.classList.remove('arms-up'); jDress(av, now); });
      later(t0 + 2300, () => { const r = map.walker.getBoundingClientRect(); tween([tx, ty, big], [r.left + r.width / 2, r.bottom, s0], 900, () => { const h = hop; hop = null; h.layer.remove(); map.set(h.st); map.walker.style.opacity = ''; }); });
    });
  }
  const onEvent = e => { const d = e.detail || {}; update(d.slide || allSlides[d.index], d.index ?? allSlides.indexOf(d.slide)); };
  document.addEventListener('sd:slide', onEvent);
  // Fallback until the modular-slides runtime fires sd:slide: watch which slide is .active (same trick as the motion replayer).
  const check = () => { const a = document.querySelector('#deck .slide.active'); if (a && a !== shownSlide) update(a, allSlides.indexOf(a)); };
  new MutationObserver(check).observe(document.getElementById('deck'), { subtree: true, attributes: true, attributeFilter: ['class'] });
  new MutationObserver(() => box.classList.toggle('is-hidden', document.body.classList.contains('notes-mode') || !jStateFor(shownSlide) || jShows(shownSlide))).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  // chrome=full: some looks put a title block in the bottom-right (sheet). Lift the map above it rather than overlap.
  function lift() { box.style.setProperty('--journey-lift', '0px'); const f = document.getElementById('sd-frame'); if (!f || document.body.dataset.chrome !== 'full') return;
    const fr = f.getBoundingClientRect(), br = box.getBoundingClientRect(); if (!fr.width || getComputedStyle(f).display === 'none' || getComputedStyle(f).visibility === 'hidden') return;
    if (fr.left < br.right && fr.right > br.left && fr.top < br.bottom && fr.bottom > br.top) box.style.setProperty('--journey-lift', Math.ceil(br.bottom - fr.top + 8) + 'px'); }
  addEventListener('resize', lift); setTimeout(lift, 300);
  check();
  if (J.still) box.classList.add('is-still');
}
function jPrint() {
  allSlides.forEach(sl => { if (sl.dataset.hidden === '1' || jShows(sl)) return; const st = jStateFor(sl); if (!st) return;
    const d = document.createElement('div'); d.className = 'journey-print'; const m = jBuildMap(); m.set(st); m.place(jLenFor(st)); d.appendChild(m.svg); sl.appendChild(d); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', jInit); else setTimeout(jInit, 0);
