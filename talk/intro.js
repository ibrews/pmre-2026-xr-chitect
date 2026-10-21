/* PMRE intro slides (option group "intro"): layout 'intro-alex' = the 8-bit Alex power-up; layout 'intro-lens' = the Agile Lens
   monocle orbit with the 2026 → 2016 countdown. Spliced into index.html by tools/bake_talk.py; the case builder calls
   buildTalkIntro(slide, case) for these two layouts. Every visible string comes from the case's `intro` / `lens` object in sections.js.
   Ported from: FMX 2026 solo intro (git/fmx-2026-spatial-storytelling@b035b8c — walker, UE5 power-up, fireballs, tallies),
   NXT BLD 2026 (git/nxtbld-2026-productizing-xr@9736254 — config-driven text, mobile CSS) and HarvardXR 2026
   (harvardxr-keynote@7c6fbf5 — the 5-step monocle slide). Changes from the sources: scoped to the slide (no global ids), one
   timer/rAF clock per slide so leaving stops everything, replay from the start on every visit, and an "instant" path that jumps
   to each beat's final frame for ?reduced, prefers-reduced-motion, ?print and ?shot=N. Audio is synthesized with Web Audio; the
   context is recreated after the deck's _killAllSfx() closes it, so sound comes back on re-entry. */
const TI = (() => { const q = new URLSearchParams(location.search); let rm = false; try { rm = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {} return { exp: q.has('print') || q.has('shot'), instant: q.has('print') || q.has('shot') || q.has('reduced') || rm }; })();
let _tiAudio = null;
function tiCtx() {
  if (TI.instant) return null;
  try { if (!_tiAudio || _tiAudio.state === 'closed') _tiAudio = new (window.AudioContext || window.webkitAudioContext)(); if (_tiAudio.state === 'suspended') _tiAudio.resume(); return _tiAudio; } catch (e) { return null; }
}
function tiTone(freq, start, dur, type, vol) {
  const c = tiCtx(); if (!c) return;
  try { const now = c.currentTime, o = c.createOscillator(), g = c.createGain(); o.type = type || 'square'; o.frequency.value = freq; o.connect(g); g.connect(c.destination); g.gain.setValueAtTime(vol, now + start); g.gain.exponentialRampToValueAtTime(0.001, now + start + dur); o.start(now + start); o.stop(now + start + dur + 0.01); } catch (e) {}
}
const tiSfx = {
  powerUp() { [[130, 0, .09], [196, .08, .09], [262, .16, .09], [349, .24, .09], [523, .32, .09], [698, .40, .09], [1047, .48, .12], [784, .61, .18, 'sine', .08], [1047, .80, .25, 'sine', .1]].forEach(([f, s, d, t, v]) => tiTone(f, s, d, t || 'square', v || .12)); },
  zap() { const c = tiCtx(); if (!c) return; try { const now = c.currentTime, o = c.createOscillator(), g = c.createGain(); o.type = 'sawtooth'; o.frequency.setValueAtTime(600, now); o.frequency.exponentialRampToValueAtTime(200, now + .15); o.connect(g); g.connect(c.destination); g.gain.setValueAtTime(.06, now); g.gain.exponentialRampToValueAtTime(.001, now + .15); o.start(now); o.stop(now + .15); } catch (e) {} },
  tick() { tiTone(880, 0, .06, 'sine', .04); },
  ching() { [[1047, 0, .18], [1319, .05, .18], [1568, .1, .25]].forEach(([f, s, d]) => tiTone(f, s, d, 'sine', .06)); },
  year() { [[523, 0], [659, .10], [784, .20]].forEach(([f, t]) => tiTone(f, t, .5, 'sine', .12)); },
  spawn() { [[523, 0], [659, .07], [784, .14], [1047, .22], [1319, .30]].forEach(([f, t]) => tiTone(f, t, .18, 'sine', .07)); },
  shrink() { [[880, 0], [587, .09], [392, .18]].forEach(([f, t]) => tiTone(f, t, .12, 'sine', .08)); },
  countTick() { tiTone(1200 + Math.random() * 200, 0, .04, 'square', .04); },
  chiptune() { [262, 294, 330, 349, 392, 349, 330, 294, 262, 330, 392, 440].forEach((f, i) => tiTone(f, i * .22, .2, 'square', .04)); }
};
// One clock per slide: stop() cancels every pending timeout and ends every rAF loop started through it.
function tiClock() {
  const ts = new Set(); let gen = 0;
  return {
    after(ms, fn) { const g = gen; const id = setTimeout(() => { ts.delete(id); if (g === gen) fn(); }, ms); ts.add(id); },
    raf(fn) { const g = gen; requestAnimationFrame(t => { if (g === gen) fn(t); }); },
    stop() { ts.forEach(clearTimeout); ts.clear(); gen++; }
  };
}
// Shared lifecycle: the deck's goTo() calls reset() on entry and runs steps on →; a MutationObserver on .active replays/stops.
function tiLifecycle(s, play, stop, steps) {
  slideSteps.set(s, { current: 0, steps, reset() { if (s.classList.contains('active')) play(); else stop(); } });
  let on = s.classList.contains('active');
  new MutationObserver(() => { const a = s.classList.contains('active'); if (a && !on) { on = true; play(); } else if (!a && on) { on = false; stop(); } }).observe(s, { attributes: true, attributeFilter: ['class'] });
  if (window._sfxKillHooks) window._sfxKillHooks.push(() => { _tiAudio = null; });
  if (on || TI.exp) play(); // print mode stacks every slide without .active: show the entrance's final frame up front
}
function tiFade(els, on, instant, stagger) {
  els.forEach((el, i) => { if (!el) return; if (instant || !on) { el.style.transition = 'none'; el.classList.toggle('on', on); void el.offsetWidth; el.style.transition = ''; } else setTimeout(() => el.classList.add('on'), (stagger || 0) * i); });
}

// ── Pixel avatar (FMX buildAvatar, from HXR) ──
function tiAvatar(parent, opts = {}) {
  const withBeard = !!opts.withBeard;
  const root = svgE('g', { class: 'avatar' }); root.style.shapeRendering = 'crispEdges'; parent.appendChild(root);
  const SKIN = '#f2c79b', SKIN_DARK = '#d9a77a', HAIR_LIGHT = '#a8602f', HAIR = '#8b4a2a', HAIR_DARK = '#5e2f1a', HAIR_SHADOW = '#3a1c08', BEARD = '#6e3a1e', BEARD_LIGHT = '#8a4f2a', SHIRT = '#6a8fd6', SHIRT_DARK = '#4a6fb8', PANTS = '#3f3025', BOOTS = '#1f150c', EYE = '#1a1a26';
  const px = (g, x, y, w, h, fill) => g.appendChild(svgE('rect', { x, y, width: w, height: h, fill }));
  const body = svgE('g', { class: 'av-body' });
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
  if (withBeard) { px(body, -12, -22, 4, 5, BEARD); px(body, 8, -22, 4, 5, BEARD); px(body, -12, -20, 5, 3, BEARD); px(body, 7, -20, 5, 3, BEARD); px(body, -12, -17, 4, 1, BEARD); px(body, 8, -17, 4, 1, BEARD); px(body, -7, -19, 14, 2, BEARD); px(body, -6, -19, 12, 1, BEARD_LIGHT); px(body, -2, -16, 4, 1, BEARD); px(body, -12, -16, 24, 2, BEARD); px(body, -12, -14, 24, 2, BEARD); px(body, -10, -12, 20, 1, BEARD); }
  px(body, -4, -12, 8, 3, SKIN_DARK);
  px(body, -12, -9, 24, 18, SHIRT); px(body, -12, -9, 24, 3, SHIRT_DARK); px(body, -12, 6, 24, 3, SHIRT_DARK);
  px(body, -12, 9, 12, 14, PANTS); px(body, 0, 9, 12, 14, PANTS); px(body, -2, 9, 4, 14, '#2a1f18');
  px(body, -12, 23, 12, 5, BOOTS); px(body, 0, 23, 12, 5, BOOTS);
  root.appendChild(body);
  const armsDown = svgE('g', { class: 'av-arms-down' }); px(armsDown, -18, -8, 6, 14, SHIRT); px(armsDown, -18, 4, 6, 4, SKIN); px(armsDown, 12, -8, 6, 14, SHIRT); px(armsDown, 12, 4, 6, 4, SKIN); root.appendChild(armsDown);
  const armsUp = svgE('g', { class: 'av-arms-up' }); px(armsUp, -18, -22, 6, 14, SHIRT); px(armsUp, -18, -26, 6, 6, SKIN); px(armsUp, 12, -22, 6, 14, SHIRT); px(armsUp, 12, -26, 6, 6, SKIN); root.appendChild(armsUp);
  return root;
}
function tiHeadset(body) {
  body.querySelector('.worn-headset')?.remove();
  const hs = svgE('g', { class: 'worn-headset' }); hs.style.shapeRendering = 'crispEdges';
  const px = (x, y, w, h, fill) => hs.appendChild(svgE('rect', { x, y, width: w, height: h, fill }));
  px(-13, -27, 26, 1, '#0a0a14'); px(-13, -26, 26, 9, '#1a1a26'); px(-13, -17, 26, 1, '#0a0a14');
  px(-8, -24, 5, 5, '#00d4ff'); px(3, -24, 5, 5, '#00d4ff'); px(-7, -23, 1, 1, '#fff'); px(4, -23, 1, 1, '#fff');
  px(-13, -23, 1, 3, '#3a3a4e'); px(12, -23, 1, 3, '#3a3a4e');
  body.appendChild(hs);
}

function buildTalkIntro(s, c) {
  if (c.layout === 'intro-alex') tiBuildAlex(s, c.intro || {});
  else if (c.layout === 'intro-lens') tiBuildLens(s, c.lens || {});
}

// ── 'intro-alex': walk → ? block → headset power-up (auto) · bio · UE5 power-up + fireballs · stat tallies ──
function tiBuildAlex(s, I) {
  const IMG = I.img || {};
  const stats = (I.stats || []).map(x => `<div class="intro-stat"><span class="num" data-tally="${x.n}">${x.n}</span><span class="lbl">${x.l}</span></div>`).join('');
  s.innerHTML = `<div class="intro-grid"><div class="intro-stage"><svg viewBox="0 0 400 400" aria-hidden="true"></svg></div><div class="intro-content"><div class="intro-eyebrow ti-fade">${I.eyebrow || ''}</div><h1 class="intro-title ti-fade">${I.name || ''}</h1>${I.role ? `<p class="intro-role ti-fade">${I.role}</p>` : ''}<p class="intro-sub ti-fade">${I.bio || ''}</p><p class="intro-sub intro-sub-ue5 ti-fade">${(I.ue5 || '').replace(/\n/g, '<br>')}</p><div class="intro-stats ti-fade">${stats}</div></div></div>`;
  const svg = s.querySelector('svg'), q = sel => s.querySelector(sel);
  const bioEls = [q('.intro-eyebrow'), q('.intro-title'), q('.intro-role'), q('.intro-sub:not(.intro-sub-ue5)')].filter(Boolean);
  const ue5Text = q('.intro-sub-ue5'), statsRow = q('.intro-stats');
  svg.appendChild(svgE('rect', { x: 30, y: 300, width: 340, height: 6, class: 'stage-floor', rx: '2' }));
  // "?" block holding a headset at (240,200)
  const bPos = svgE('g', { transform: 'translate(240,200)' }), bAnim = svgE('g', { class: 'ti-block' }); bPos.appendChild(bAnim);
  bAnim.appendChild(svgE('rect', { x: -22, y: -22, width: 44, height: 44, fill: '#f59e0b', stroke: '#b45309', 'stroke-width': '2', rx: '3' }));
  bAnim.appendChild(svgE('rect', { x: -18, y: -18, width: 36, height: 36, fill: 'none', stroke: '#fde68a', 'stroke-width': '1', rx: '1' }));
  bAnim.appendChild(svgE('rect', { x: -13, y: -7, width: 26, height: 14, rx: '5', fill: '#1a1a26' }));
  bAnim.appendChild(svgE('circle', { cx: -6, cy: 0, r: '3', fill: '#00d4ff' })); bAnim.appendChild(svgE('circle', { cx: 6, cy: 0, r: '3', fill: '#00d4ff' }));
  bAnim.appendChild(svgE('rect', { x: -13, y: -9, width: 26, height: 2, fill: '#0a0a14' }));
  svg.appendChild(bPos);
  // UE5 block at (80,140), hit in step 2
  const uPos = svgE('g', { transform: 'translate(80,140)' }), uAnim = svgE('g', { class: 'ti-block' }); uPos.appendChild(uAnim);
  uAnim.appendChild(svgE('image', { href: IMG.badge || 'media/pmre/GoldAuthorized.png', x: -22, y: -22, width: 44, height: 44 }));
  svg.appendChild(uPos);
  // Walker
  const walker = svgE('g', { class: 'stage-walker', transform: 'translate(80,270)' }), anim = svgE('g', { class: 'ti-anim' });
  walker.appendChild(anim); svg.appendChild(walker);
  const avBody = tiAvatar(anim, { withBeard: I.withBeard !== false }).querySelector('.av-body');
  // 24 sparkles + flash
  const sparkles = svgE('g', { opacity: '0' }), COLORS = ['#fde68a', '#00d4ff', '#a78bfa', '#f59e0b', '#fff', '#fb7185'];
  for (let i = 0; i < 24; i++) { const a = (i / 24) * Math.PI * 2 + (Math.random() - .5) * .4, d = 55 + Math.random() * 45; const sp = svgE('circle', { cx: 240, cy: 200, r: (1.2 + Math.random() * 2.2).toFixed(1), fill: COLORS[i % COLORS.length] }); sp.style.setProperty('--tx', (Math.cos(a) * d).toFixed(1) + 'px'); sp.style.setProperty('--ty', (Math.sin(a) * d).toFixed(1) + 'px'); sp.style.transformOrigin = '240px 200px'; sparkles.appendChild(sp); }
  svg.appendChild(sparkles);
  const flash = svgE('rect', { x: 0, y: 0, width: 400, height: 400, fill: '#fff', opacity: '0', 'pointer-events': 'none' }); svg.appendChild(flash);
  const nums = [...s.querySelectorAll('.num')];
  const E = tiClock(), S = tiClock();
  const setAnim = (v, tf) => { anim.style.animation = v; if (tf !== undefined) anim.style.transform = tf; };
  const pulse = (el, a) => { el.style.animation = 'none'; void el.getBoundingClientRect(); el.style.animation = a; };
  function entranceFinal() { E.stop(); setAnim('none', 'translate(160px,0) scale(1.5)'); anim.style.opacity = '1'; bAnim.style.animation = 'none'; bAnim.style.opacity = '0'; sparkles.setAttribute('opacity', '0'); flash.style.animation = 'none'; tiHeadset(avBody); }
  function stop() { E.stop(); S.stop(); svg.querySelectorAll('.ti-fb').forEach(f => f.remove()); }
  function play() {
    stop(); s.classList.toggle('ti-now', TI.instant);
    tiFade([...bioEls, ue5Text, statsRow], false, true);
    nums.forEach(n => { n.textContent = TI.instant ? n.dataset.tally : (/^\d+\+?$/.test(n.dataset.tally) ? '0' : n.dataset.tally); n.style.transform = ''; });
    uPos.style.opacity = '0'; uAnim.style.opacity = '1'; uAnim.style.animation = 'none'; anim.style.transition = 'none'; anim.style.filter = '';
    if (TI.instant) { entranceFinal(); return; }
    avBody.querySelector('.worn-headset')?.remove();
    setAnim('none', ''); anim.style.opacity = '0'; bAnim.style.opacity = '1'; bAnim.style.animation = 'introHeadsetBob 1.6s ease-in-out infinite';
    sparkles.setAttribute('opacity', '0'); sparkles.querySelectorAll('circle').forEach(p => p.style.animation = 'none'); flash.style.animation = 'none';
    const D = 300;
    E.after(D, () => { anim.style.opacity = '1'; setAnim('introWalk 2s linear 0s 1 normal both'); });
    E.after(D + 2000, () => setAnim('introJumpUp .4s cubic-bezier(.3,.7,.4,1) 0s 1 normal both'));
    E.after(D + 2400, () => { pulse(flash, 'introFlash .45s ease-out forwards'); bAnim.style.animation = 'introHeadsetGrab .5s ease-out forwards'; sparkles.setAttribute('opacity', '1'); sparkles.querySelectorAll('circle').forEach(p => pulse(p, 'introSparkle 1.1s ease-out forwards')); tiSfx.powerUp(); setAnim('introPowerUp .8s ease-out forwards'); });
    E.after(D + 2900, () => tiHeadset(avBody));
    E.after(D + 3200, () => setAnim('introFallDown .55s cubic-bezier(.55,0,.8,1) forwards'));
    E.after(D + 3780, () => setAnim('none', 'translate(160px,0) scale(1.5)'));
  }
  function showBio() { tiFade(bioEls, true, TI.instant, 200); }
  function shootFireball(x, y, dir) {
    const fb = svgE('g', { class: 'ti-fb', transform: `translate(${x},${y})` });
    fb.appendChild(svgE('image', { href: Math.random() < .5 ? (IMG.badge || 'media/pmre/GoldAuthorized.png') : (IMG.logo || 'media/pmre/ue5logo.png'), x: -20, y: -20, width: 40, height: 40 }));
    svg.appendChild(fb); tiSfx.zap();
    let f = 0; const sp = dir * 5.5;
    const spin = () => { f++; const cx = x + sp * f, b = -Math.abs(Math.sin(f * .12)) * 18 * Math.max(0, 1 - f / 40); fb.setAttribute('transform', `translate(${cx},${y + b}) rotate(${f * 12})`); if (f < 55 && cx > 5 && cx < 395) S.raf(spin); else fb.remove(); };
    S.raf(spin);
  }
  function ue5PowerUp() {
    entranceFinal(); // pressing → mid-walk lands the entrance first
    tiFade([ue5Text], false, true); uPos.style.opacity = '1';
    if (TI.instant) { uAnim.style.opacity = '0'; setAnim('none', 'translate(90px,0) scale(2)'); tiFade([ue5Text], true, true); return; }
    setAnim('none', 'translate(160px,0) scale(1.5)'); void anim.getBoundingClientRect(); anim.style.transition = 'transform 1.5s linear'; anim.style.transform = 'translate(0,0) scale(1.5)';
    S.after(1500, () => { anim.style.transition = 'none'; void anim.getBoundingClientRect(); setAnim('ue5JumpUp .4s cubic-bezier(.3,.7,.4,1) forwards'); });
    S.after(1900, () => { pulse(flash, 'introFlash .45s ease-out forwards'); uAnim.style.animation = 'introHeadsetGrab .5s ease-out forwards'; tiSfx.powerUp(); setAnim('ue5PowerUp .8s ease-out forwards'); });
    S.after(2700, () => setAnim('ue5FallDown .55s cubic-bezier(.55,0,.8,1) forwards'));
    S.after(3300, () => {
      tiFade([ue5Text], true, false); setAnim('none', 'translate(0,0) scale(2)');
      const run = (startX, hop, done) => { let dir = 1, x = startX, fbt = 0, n = 0; const loop = () => { if (n > 180) { done(x); return; } n++; x += dir * 2.8; if (x > 200) dir = -1; if (x < -20) dir = 1; const hy = hop ? -Math.abs(Math.sin(n * .15)) * 8 : 0; anim.style.transform = `translate(${x}px,${hy}px) scale(2)`; if (++fbt > 18 && Math.random() < .18) { shootFireball(80 + x + (dir > 0 ? 25 : -25), 270 + hy, dir); fbt = 0; } S.raf(loop); }; S.raf(loop); };
      run(0, false, () => { anim.style.transform = 'translate(90px,0) scale(2)'; S.after(5000, () => run(90, true, x2 => { anim.style.transform = `translate(${x2}px,0) scale(2)`; })); });
    });
  }
  function showTallies() {
    tiFade([statsRow], true, TI.instant);
    if (TI.instant) { nums.forEach(n => n.textContent = n.dataset.tally); return; }
    S.after(300, () => nums.forEach(el => {
      const m = el.dataset.tally.match(/^(\d+)(\+?)$/); if (!m) return;
      const target = +m[1], suf = m[2] || '', t0 = performance.now(); let last = -1; el.style.display = 'inline-block';
      const frame = t => { const k = Math.min(1, (t - t0) / 1000), cur = Math.round((1 - Math.pow(1 - k, 3)) * target); el.textContent = cur + (k >= 1 ? suf : ''); if (cur !== last && k < 1) { tiSfx.tick(); last = cur; }
        let y = 0, sx = 1, sy = 1; if (k < .85) y = -Math.sin((k / .85) * Math.PI) * 14; else { const lk = (k - .85) / .15; sy = 1 - .12 * Math.sin(lk * Math.PI); sx = 1 + .12 * Math.sin(lk * Math.PI); }
        el.style.transform = `translateY(${y.toFixed(2)}px) scale(${sx.toFixed(3)},${sy.toFixed(3)})`; if (k < 1) S.raf(frame); else { el.style.transform = ''; tiSfx.ching(); } };
      S.raf(frame);
    }));
  }
  tiLifecycle(s, play, stop, [showBio, ue5PowerUp, showTallies]);
}

// ── 'intro-lens': clients orbit the monocle (auto, with hum) · fade names · 2026 countdown · 2016 Alex spawns · shrinks into the eyepiece · dashes around the lens to "2016" ──
function tiBuildLens(s, L) {
  s.innerHTML = `<svg class="lens-svg" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid meet" aria-label="${(L.name || 'Agile Lens')}: client orbit"></svg>`;
  const svg = s.querySelector('svg'), CX = 800, CY = 420, R = 200;
  const ringCX = 407, ringCY = 432, ringR = 374, mS = R / ringR, mW = 852 * mS, mH = 877 * mS, mX = CX - ringCX * mS, mY = CY - ringCY * mS;
  svg.appendChild(svgE('circle', { cx: CX, cy: CY, r: R, fill: 'none', stroke: 'rgba(255,255,255,.12)', 'stroke-width': '28' }));
  svg.appendChild(svgE('circle', { cx: CX, cy: CY, r: R, fill: 'none', stroke: 'rgba(255,255,255,.06)', 'stroke-width': '34' }));
  [-1.41, -0.2].forEach(a => svg.appendChild(svgE('circle', { cx: CX + (R + 16) * Math.cos(a), cy: CY + (R + 16) * Math.sin(a), r: '8', fill: 'none', stroke: 'rgba(255,255,255,.1)', 'stroke-width': '5' })));
  const ex = CX + (775 - 407) * mS, ey = CY + (788 - 432) * mS, eyeA = Math.atan2(ey - CY, ex - CX);
  const cs = { x: CX + R * Math.cos(eyeA), y: CY + R * Math.sin(eyeA) }, ctl = { x: (cs.x + ex) / 2 + 15 * Math.cos(eyeA + Math.PI / 2), y: (cs.y + ey) / 2 + 15 * Math.sin(eyeA + Math.PI / 2) };
  svg.appendChild(svgE('path', { d: `M${cs.x} ${cs.y} Q${ctl.x} ${ctl.y} ${ex} ${ey}`, fill: 'none', stroke: 'rgba(255,255,255,.08)', 'stroke-width': '4', 'stroke-linecap': 'round' }));
  svg.appendChild(svgE('circle', { cx: ex, cy: ey, r: '18', fill: 'none', stroke: 'rgba(255,255,255,.1)', 'stroke-width': '5' }));
  const pulseImg = svgE('image', { href: L.monocle || 'media/pmre/monocle-white.png', x: mX + 1, y: mY - 4, width: mW, height: mH, opacity: '0' }); svg.appendChild(pulseImg);
  const txt = (str, x, y, size, weight, ls, fill) => { const t = svgE('text', { x, y, 'text-anchor': 'middle', 'dominant-baseline': 'middle', fill, 'font-family': 'Space Grotesk,sans-serif', 'font-size': size, 'font-weight': weight, 'letter-spacing': ls }); t.textContent = str; svg.appendChild(t); return t; };
  const heads = [txt(L.name || 'AGILE LENS', CX + 2, CY - 16, 42, 700, 6, 'rgba(255,255,255,.85)'), txt(L.tagline || '', CX, CY + 18, 16, 400, 4, 'rgba(255,255,255,.35)'), txt(L.est || '', CX, CY + 42, 14, 400, 5, 'rgba(255,255,255,.30)'), txt(L.city || '', CX, CY + 64, 13, 400, 6, 'rgba(255,255,255,.20)')];
  const foot = svgE('text', { x: CX, y: 830, 'text-anchor': 'middle', fill: 'rgba(255,255,255,.25)', 'font-family': 'Space Grotesk,sans-serif', 'font-size': '14', 'letter-spacing': '2' }); foot.textContent = L.footer || ''; svg.appendChild(foot);
  // Four anchors at 12/3/6/9 o'clock, the rest two per gap (HXR layout)
  const fixed = (L.clientsFixed || []).slice(0, 4).map((name, i) => ({ name, angle: -Math.PI / 2 + i * Math.PI / 2 }));
  const all = [...fixed, ...(L.clientsOthers || []).map((name, i) => { const from = -Math.PI / 2 + (i % 4) * Math.PI / 2; return { name, angle: from + (Math.PI / 2) * (i < 4 ? 1 / 3 : 2 / 3) }; })].sort((a, b) => a.angle - b.angle);
  const oR = R + 110, clients = all.map(({ name, angle }) => { const t = txt(name.toUpperCase(), CX + Math.cos(angle) * oR, CY + Math.sin(angle) * oR, 18, 600, 2.5, 'rgba(255,255,255,.6)'); t.dataset.a = angle; return t; });
  const texts = [...heads, foot, ...clients];
  const C = tiClock(); let hum = null, ang = 0, tt = 0, av = null;
  function place() { clients.forEach(el => { const a = +el.dataset.a + ang; el.setAttribute('x', CX + Math.cos(a) * oR); el.setAttribute('y', CY + Math.sin(a) * oR); el.setAttribute('fill', `rgba(255,255,255,${(0.3 + 0.5 * (1 - (Math.sin(a) + 1) / 2)).toFixed(2)})`); }); }
  function startHum() { const c = tiCtx(); if (!c) return; try { const g = c.createGain(); g.gain.value = 0; g.connect(c.destination); const oscs = [[68, 1], [136, .55], [204, .25]].map(([f, rel]) => { const o = c.createOscillator(), og = c.createGain(); o.type = 'sine'; o.frequency.value = f; og.gain.value = rel; o.connect(og); og.connect(g); o.start(); return o; }); g.gain.setValueAtTime(0, c.currentTime); g.gain.linearRampToValueAtTime(.091, c.currentTime + 1.2); hum = { c, g, oscs }; } catch (e) {} }
  function stopHum() { const h = hum; hum = null; if (!h) return; try { if (h.c.state !== 'closed') { h.g.gain.setValueAtTime(h.g.gain.value, h.c.currentTime); h.g.gain.linearRampToValueAtTime(0, h.c.currentTime + .6); setTimeout(() => h.oscs.forEach(o => { try { o.stop(); } catch (e) {} }), 700); } } catch (e) {} }
  function orbit() { ang += .003; tt += .02; place(); pulseImg.setAttribute('opacity', (.06 + .06 * Math.sin(tt)).toFixed(3)); if (hum && hum.c.state !== 'closed') hum.g.gain.setTargetAtTime(.056 + .07 * ((Math.sin(tt) + 1) / 2), hum.c.currentTime, .08); C.raf(orbit); }
  function clear() { svg.querySelectorAll('.ti-lens-x').forEach(n => n.remove()); av = null; }
  function stop() { C.stop(); stopHum(); }
  function play() {
    stop(); clear(); ang = 0; tt = 0; place();
    texts.forEach(el => { el.style.transition = 'none'; el.style.opacity = ''; });
    if (TI.instant) { pulseImg.setAttribute('opacity', '.1'); return; }
    pulseImg.setAttribute('opacity', '.06');
    C.after(400, () => { startHum(); C.raf(orbit); });
  }
  function fadeNames() { texts.forEach(el => { el.style.transition = TI.instant ? 'none' : 'opacity .8s ease-out'; el.style.opacity = '0'; }); stopHum(); }
  function countdown() {
    if (TI.instant) return; // its final frame is empty: the counter fades out by 1950
    const from = L.countFrom || 2026, y = svgE('text', { x: CX, y: CY, 'text-anchor': 'middle', 'dominant-baseline': 'middle', fill: 'rgba(255,255,255,.85)', 'font-family': 'Space Grotesk,sans-serif', 'font-size': '72', 'font-weight': '700', 'letter-spacing': '4', class: 'ti-lens-x' });
    y.style.transformBox = 'fill-box'; y.style.transformOrigin = 'center'; y.textContent = String(from); y.style.opacity = '0'; svg.appendChild(y);
    C.after(50, () => { y.style.transition = 'opacity .4s'; y.style.opacity = '1'; });
    C.after(500, () => {
      y.style.transition = ''; const t0 = performance.now(); let last = -1;
      const frame = now => { const k = Math.min(1, (now - t0) / 3000), cur = Math.round(from - k * 126); y.textContent = String(cur); if (cur !== last) { if (cur > 1975) tiSfx.countTick(); last = cur; }
        const ct = Math.min(1, Math.max(0, (from - cur) / 16)); y.setAttribute('fill', `rgb(${Math.round(255 * (1 - ct))},${Math.round(255 - 43 * ct)},255)`);
        if (cur <= 1970) { const f = Math.min(1, (1970 - cur) / 20); y.style.opacity = (1 - f).toFixed(3); y.style.transform = `scale(${(1 - .15 * f).toFixed(3)})`; }
        if (k < 1) C.raf(frame); else y.style.opacity = '0'; };
      C.raf(frame);
    });
  }
  const tf = (x, y, k) => av.setAttribute('transform', `translate(${x.toFixed(1)},${y.toFixed(1)}) scale(${k.toFixed(3)})`);
  const ease = k => k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
  function spawn() {
    svg.querySelectorAll('.ti-lens-av').forEach(n => n.remove());
    av = svgE('g', { class: 'ti-lens-x ti-lens-av', transform: `translate(${CX},${CY}) scale(1.2)` });
    const root = tiAvatar(av, { withBeard: false }); tiHeadset(root.querySelector('.av-body')); svg.appendChild(av);
    if (TI.instant) return;
    root.classList.add('arm-up'); av.style.opacity = '0'; av.style.transition = 'opacity .5s';
    C.after(50, () => { av.style.opacity = '1'; tiSfx.spawn(); });
    C.after(1500, () => root.classList.remove('arm-up'));
  }
  function shrink() {
    if (!av) spawn();
    if (TI.instant) { tf(ex, ey, .4); return; }
    tiSfx.shrink(); const t0 = performance.now();
    const frame = now => { const k = Math.min(1, (now - t0) / 1500), e = ease(k); tf(CX + (ex - CX) * e, CY + (ey - CY) * e, 1.2 - .8 * e); if (k < 1) C.raf(frame); };
    C.raf(frame);
  }
  function dash() {
    if (!av) spawn();
    const rx = CX + R * Math.cos(eyeA), ry = CY + R * Math.sin(eyeA), SIX = Math.PI / 2;
    const trail = () => { const p = svgE('path', { d: '', fill: 'none', stroke: 'rgba(0,212,255,.4)', 'stroke-width': '2', 'stroke-dasharray': '6 4', 'stroke-linecap': 'round', class: 'ti-lens-x' }); svg.insertBefore(p, av); return p; };
    const label = () => { const l = svgE('text', { x: CX, y: CY + R + 52, 'text-anchor': 'middle', fill: 'rgba(0,212,255,.8)', 'font-family': 'Space Grotesk,sans-serif', 'font-size': '18', 'font-weight': '600', 'letter-spacing': '2', class: 'ti-lens-x' }); l.textContent = L.year || '2016'; svg.appendChild(l); return l; };
    const arcPts = n => Array.from({ length: n + 1 }, (_, i) => { const a = eyeA + (SIX - eyeA) * (i / n); return `${(CX + R * Math.cos(a)).toFixed(1)},${(CY + R * Math.sin(a)).toFixed(1)}`; });
    if (TI.instant) { trail().setAttribute('d', `M${ex.toFixed(1)},${ey.toFixed(1)} L${rx.toFixed(1)},${ry.toFixed(1)}`); trail().setAttribute('d', 'M' + arcPts(24).join(' L')); tf(CX, CY + R, .4); label(); return; }
    tiSfx.chiptune();
    const tA = trail(), pA = [], t0 = performance.now();
    const phaseA = now => { const e = ease(Math.min(1, (now - t0) / 700)), x = ex + (rx - ex) * e, y = ey + (ry - ey) * e; tf(x, y, .4); pA.push(`${x.toFixed(1)},${y.toFixed(1)}`); if (pA.length > 1) tA.setAttribute('d', 'M' + pA.join(' L')); if (e < 1) { C.raf(phaseA); return; }
      const tB = trail(), pB = [], t1 = performance.now();
      const phaseB = n2 => { const k = Math.min(1, (n2 - t1) / 1940), a = eyeA + (SIX - eyeA) * ease(k), x2 = CX + R * Math.cos(a), y2 = CY + R * Math.sin(a); tf(x2, y2, .4); pB.push(`${x2.toFixed(1)},${y2.toFixed(1)}`); if (pB.length > 1) tB.setAttribute('d', 'M' + pB.join(' L')); if (k < 1) { C.raf(phaseB); return; }
        const l = label(); l.style.opacity = '0'; C.after(50, () => { l.style.transition = 'opacity .5s'; l.style.opacity = '1'; tiSfx.year(); }); };
      C.raf(phaseB); };
    C.raf(phaseA);
  }
  tiLifecycle(s, play, stop, [fadeNames, countdown, spawn, shrink, dash]);
}
