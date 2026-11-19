// Reused from ibrews/mia-2026-collective-pitch@9ee2493, slide #2.
SD.defineSlide({id:'pmre/mia-speaker',steps:3,manualSteps:true,props:{},assets:[],css:".slide.sd-mod-pmre-mia-speaker{padding:0;align-items:center;justify-content:center}\n.intro-grid{display:flex;align-items:center;gap:clamp(40px,calc(5*var(--vw)),90px);width:100%;max-width:1500px;padding:clamp(50px,calc(5*var(--vw)),90px) clamp(60px,calc(7*var(--vw)),140px)}\n.intro-stage{flex:0 0 42%;max-width:560px;aspect-ratio:1/1;position:relative}\n.intro-stage svg{width:100%;height:100%;overflow:visible}\n.intro-content{flex:1;text-align:left;min-width:0}\n.intro-eyebrow{font-size:clamp(.78rem,calc(1.1*var(--vw)),1rem);font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:var(--teal);margin-bottom:18px}\n.intro-title{font-size:clamp(2.6rem,calc(5.5*var(--vw)),5.2rem);font-weight:700;line-height:1.02;letter-spacing:-.02em;margin-bottom:14px;background:linear-gradient(130deg,#fff 20%,#a5d8ff 55%,#c5b6ff 90%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}\n.intro-role{font-size:clamp(1rem,calc(1.45*var(--vw)),1.35rem);font-weight:600;color:var(--text);letter-spacing:.04em;margin:0 0 20px}\n.intro-sub{font-size:clamp(1rem,calc(1.5*var(--vw)),1.3rem);color:var(--dim);line-height:1.55;margin-bottom:24px;max-width:640px}\n.intro-stats{display:flex;gap:14px;flex-wrap:nowrap}\n.intro-stat{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:16px 18px;flex:1;min-width:0}\n.intro-stat .num{display:block;font-size:clamp(1.4rem,calc(2.2*var(--vw)),2rem);font-weight:700;color:var(--teal);letter-spacing:-.02em;margin-bottom:6px;transform-origin:left bottom}\n.intro-stat .lbl{display:block;font-size:clamp(.6rem,calc(.82*var(--vw)),.76rem);font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.55);line-height:1.3}\n.intro-stage .stage-floor{fill:rgba(0,212,255,.10);stroke:rgba(0,212,255,.28);stroke-width:1}\n.intro-stage .ti-anim{transform-box:fill-box;transform-origin:center bottom}\n.intro-stage .ti-block{transform-box:fill-box;transform-origin:center}\n.ti-fade{opacity:0;transition:opacity .6s}\n.ti-fade.on{opacity:1}\n.ti-now .ti-fade{transition:none}\n.avatar .av-arms-up{visibility:hidden}\n.avatar.arm-up .av-arms-down{visibility:hidden}\n.avatar.arm-up .av-arms-up{visibility:visible}\n.slide.layout-intro-lens{padding:0;overflow:hidden}\n.slide.layout-intro-lens .lens-svg{position:absolute;inset:0;width:100%;height:100%}\n@keyframes introWalk{0%{transform:translate(-200px,0)}100%{transform:translate(160px,0)}}\n@keyframes introJumpUp{0%{transform:translate(160px,0) scale(1,1)}30%{transform:translate(160px,-16px) scale(.95,1.05)}100%{transform:translate(160px,-80px) scale(1,1)}}\n@keyframes introFallDown{0%{transform:translate(160px,-80px) scale(1.4)}100%{transform:translate(160px,0) scale(1.4)}}\n@keyframes introPowerUp{0%{transform:translate(160px,-80px) scale(1);filter:brightness(1)}35%{transform:translate(160px,-80px) scale(1.2);filter:brightness(1.8)}60%{transform:translate(160px,-80px) scale(1.1);filter:brightness(1.3)}100%{transform:translate(160px,-80px) scale(1.4);filter:brightness(1)}}\n@keyframes introHeadsetBob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}\n@keyframes introHeadsetGrab{0%{opacity:1;transform:scale(1)}50%{opacity:1;transform:scale(1.3) translateY(-8px)}100%{opacity:0;transform:scale(0) translateY(-24px)}}\n@keyframes introSparkle{0%{opacity:0;transform:translate(0,0) scale(.3)}12%{opacity:1;transform:translate(calc(var(--tx)*.15),calc(var(--ty)*.15)) scale(1.5)}55%{opacity:1;transform:translate(calc(var(--tx)*.6),calc(var(--ty)*.6)) scale(1)}100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(.3)}}\n@keyframes introFlash{0%{opacity:0}8%{opacity:.7}100%{opacity:0}}\n@keyframes ue5JumpUp{0%{transform:translate(0,0) scale(1.5)}25%{transform:translate(0,-20px) scale(1.4,1.6)}100%{transform:translate(0,-130px) scale(1.5)}}\n@keyframes ue5PowerUp{0%{transform:translate(0,-130px) scale(1.5);filter:brightness(1)}30%{transform:translate(0,-130px) scale(1.8);filter:brightness(1.7)}55%{transform:translate(0,-130px) scale(1.4);filter:brightness(1.3)}100%{transform:translate(0,-130px) scale(2);filter:brightness(1)}}\n@keyframes ue5FallDown{0%{transform:translate(0,-130px) scale(2)}100%{transform:translate(0,0) scale(2)}}\n@media(max-width:900px){\n  body:not(.stage-on) .intro-grid{flex-direction:column;text-align:center;padding:24px 16px;gap:12px}\n  body:not(.stage-on) .intro-stage{flex:none;width:70%;max-width:280px}\n  body:not(.stage-on) .intro-content{text-align:center}\n  body:not(.stage-on) .intro-sub{margin-left:auto;margin-right:auto}\n  body:not(.stage-on) .intro-stats{flex-wrap:wrap}\n  body:not(.stage-on) .intro-stat{flex:1 1 40%}\n  body:not(.stage-on) .slide.layout-intro-lens{min-height:56vw}\n}\n\n.sd-mod-pmre-mia-speaker .intro-grid{box-sizing:border-box;padding:70px 100px;gap:70px;max-width:none}.sd-mod-pmre-mia-speaker .intro-stage{flex-basis:37%}.sd-mod-pmre-mia-speaker .intro-role{font-size:29px}.sd-mod-pmre-mia-speaker .intro-sub{font-size:30px;max-width:none}.sd-mod-pmre-mia-speaker .intro-title{font-size:96px}.sd-mod-pmre-mia-speaker .intro-eyebrow{font-size:24px}.sd-mod-pmre-mia-speaker .intro-stat .lbl{font-size:18px}.sd-mod-pmre-mia-speaker .intro-stat .num{font-size:42px}",render(s,I,ctx){const svgE=ctx.svg;
const TI={get exp(){return ctx.exportMode;},get instant(){return ctx.instant;}};
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
function tiHeadset(body, bulky=false) {
  body.querySelector('.worn-headset')?.remove();
  const hs = svgE('g', { class: 'worn-headset' }); hs.style.shapeRendering = 'crispEdges';
  const px = (x, y, w, h, fill) => hs.appendChild(svgE('rect', { x, y, width: w, height: h, fill }));
  px(-13, -27, 26, 1, '#0a0a14'); px(-13, -26, 26, 9, '#1a1a26'); px(-13, -17, 26, 1, '#0a0a14');
  px(-8, -24, 5, 5, '#00d4ff'); px(3, -24, 5, 5, '#00d4ff'); px(-7, -23, 1, 1, '#fff'); px(4, -23, 1, 1, '#fff');
  px(-13, -23, 1, 3, '#3a3a4e'); px(12, -23, 1, 3, '#3a3a4e');
  if(bulky){hs.dataset.kind='bulky';hs.setAttribute('transform','translate(0,54) scale(2,3.7)');}else hs.dataset.kind='compact';
  body.appendChild(hs);
}
// Pixel clapperboard (the film power-up on intro-alex) and pixel stars (the earlier stand-in for the Unreal-logo fireballs, now unused)
function tiClapper(g) {
  g.style.shapeRendering = 'crispEdges';
  const px = (x, y, w, h, fill) => g.appendChild(svgE('rect', { x, y, width: w, height: h, fill }));
  px(-21, -8, 42, 28, '#1a1a26'); px(-21, -8, 42, 2, '#3a3a4e'); px(-16, 2, 32, 2, 'rgba(255,255,255,.55)'); px(-16, 9, 22, 2, 'rgba(255,255,255,.35)');
  const arm = svgE('g', { transform: 'rotate(-14 -21 -10)' }); g.appendChild(arm);
  for (let i = 0; i < 6; i++) arm.appendChild(svgE('rect', { x: -21 + i * 7, y: -20, width: 7, height: 9, fill: i % 2 ? '#f0f4ff' : '#1a1a26' }));
  arm.appendChild(svgE('rect', { x: -21, y: -20, width: 42, height: 9, fill: 'none', stroke: '#f59e0b', 'stroke-width': '1.5' }));
  g.appendChild(svgE('rect', { x: -21, y: -8, width: 42, height: 28, fill: 'none', stroke: '#f59e0b', 'stroke-width': '1.5' }));
}
function tiStar(g, r, fill) {
  const pts = Array.from({ length: 10 }, (_, i) => { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * .45 : r; return `${(Math.cos(a) * rr).toFixed(1)},${(Math.sin(a) * rr).toFixed(1)}`; }).join(' ');
  g.appendChild(svgE('polygon', { points: pts, fill, stroke: '#b45309', 'stroke-width': '1.5' }));
}


// Pixel icons from the HarvardXR 2026 Venn slide (harvardxr-keynote index.html, "2010 Alex bouncing between passions"),
// redrawn at scale S around (0,0). Used as power-up blocks on intro-alex (Alex, 2026-10-22).
function tiIcon(kind, g, S) {
  g.style.shapeRendering = 'crispEdges';
  const r = (x, y, w, h, f) => g.appendChild(svgE('rect', { x: x * S, y: y * S, width: w * S, height: h * S, fill: f }));
  if (kind === 'architecture') {
    r(-1, -20, 2, 2, '#c4b5fd'); r(-3, -18, 6, 2, '#c4b5fd'); r(-6, -16, 12, 2, '#a78bfa'); r(-9, -14, 18, 2, '#a78bfa'); r(-12, -12, 24, 2, '#9370db');
    r(-13, -10, 26, 2, '#a78bfa'); r(-13, -8, 26, 1, '#7c5cbf');
    [-11, -5, 2, 8].forEach(x => { r(x, -7, 3, 18, '#c4b5fd'); r(x + 1, -7, 1, 18, '#a78bfa'); });
    r(-14, 11, 28, 2, '#a78bfa'); r(-15, 13, 30, 2, '#9370db'); r(-16, 15, 32, 2, '#7c5cbf');
  } else if (kind === 'computer') {
    r(-16, -16, 32, 24, '#1e293b'); r(-14, -14, 28, 20, '#0f172a'); r(-14, -14, 28, 1, '#334155'); r(-3, 8, 6, 4, '#475569'); r(-8, 12, 16, 2, '#475569'); r(-7, 12, 14, 1, '#64748b');
    r(-12, 2, 24, 2, '#22c55e'); r(-12, 4, 24, 2, '#166534'); r(-6, -4, 2, 2, '#60a5fa'); r(-7, -2, 4, 4, '#3b82f6'); r(-7, 2, 2, 1, '#1e40af'); r(-5, 2, 2, 1, '#1e40af');
    r(2, -6, 2, 2, '#fbbf24'); r(7, -8, 2, 2, '#fbbf24'); r(4, -2, 8, 2, '#854d0e'); r(4, -2, 8, 1, '#a16207'); r(-10, -12, 6, 2, 'rgba(255,255,255,.15)'); r(5, -10, 4, 2, 'rgba(255,255,255,.1)');
  } else if (kind === 'vr') {
    // drawn for MIA from the deck's own pixel headset (the ? block on this slide), enlarged as an icon
    r(-16, -8, 32, 2, '#0a0a14'); r(-16, -6, 32, 14, '#1a1a26'); r(-16, 8, 32, 2, '#0a0a14'); r(-12, -3, 9, 8, '#00d4ff'); r(3, -3, 9, 8, '#00d4ff');
    r(-11, -2, 2, 2, '#fff'); r(4, -2, 2, 2, '#fff'); r(-2, 4, 4, 4, '#0a0a14'); r(-18, -3, 2, 6, '#3a3a4e'); r(16, -3, 2, 6, '#3a3a4e'); r(-14, -12, 28, 3, '#3a3a4e');
  } else {
    r(-16, -18, 32, 3, '#f59e0b'); r(-16, -15, 3, 30, '#f59e0b'); r(13, -15, 3, 30, '#f59e0b'); r(-15, -17, 30, 1, '#fde68a'); r(-13, -15, 26, 27, '#0a0812');
    r(-13, -15, 4, 25, '#dc2626'); r(-9, -15, 3, 23, '#ef4444'); r(-12, -15, 2, 25, '#b91c1c'); r(-7, -15, 2, 20, '#dc2626');
    r(9, -15, 4, 25, '#dc2626'); r(6, -15, 3, 23, '#ef4444'); r(10, -15, 2, 25, '#b91c1c'); r(5, -15, 2, 20, '#dc2626');
    r(-9, -15, 18, 3, '#dc2626'); r(-7, -13, 14, 2, '#ef4444'); r(-5, -11, 10, 1, '#dc2626'); r(-13, 12, 26, 3, '#8b6f47'); r(-13, 12, 26, 1, '#a0845c');
    r(-1, -12, 2, 3, 'rgba(255,255,200,.3)'); r(-2, -9, 4, 4, 'rgba(255,255,200,.15)'); r(-4, -5, 8, 6, 'rgba(255,255,200,.08)');
  }
}
// ── 'intro-alex': walk → ? block → headset power-up (auto) · bio · clapperboard power-up + stars · stat tallies ──
function tiBuildAlex(s, I) {
  const stats = (I.stats || []).map(x => `<div class="intro-stat"><span class="num" data-tally="${x.n}">${x.n}</span><span class="lbl">${x.l}</span></div>`).join('');
  s.innerHTML = `<div class="intro-grid"><div class="intro-stage"><svg viewBox="0 0 400 400" aria-hidden="true"></svg></div><div class="intro-content"><div class="intro-eyebrow ti-fade">${I.eyebrow || ''}</div><h1 class="intro-title ti-fade">${I.name || ''}</h1>${I.role ? `<p class="intro-role ti-fade">${I.role}</p>` : ''}<p class="intro-sub ti-fade">${I.bio || ''}</p><p class="intro-sub intro-sub-ue5 ti-fade">${(I.ue5 || '').replace(/\n/g, '<br>')}</p><div class="intro-stats ti-fade">${stats}</div></div></div>`;
  const svg = s.querySelector('svg'), q = sel => s.querySelector(sel);
  [['.intro-title',104],['.intro-role',32],['.intro-sub',34],['.intro-stat .lbl',24],['.intro-stat .num',52]].forEach(([sel,size])=>s.querySelectorAll(sel).forEach(e=>e.style.setProperty('font-size',size+'px','important')));
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
  // Clapperboard block at (80,140), hit in step 2
  const uPos = svgE('g', { transform: 'translate(80,140)' }), uAnim = svgE('g', { class: 'ti-block' }); uPos.appendChild(uAnim);
  uAnim.appendChild(svgE('image', { href: I.badge || 'media/pmre/v8/GoldAuthorized.png', x: -22, y: -22, width: 44, height: 44 }));
  svg.appendChild(uPos);
  // Power-up icons (HarvardXR Venn icons), hit one after another before the Unreal block
  const ICONS = (I.icons || []).map((kind, i, all) => { const x = all.length > 1 ? 120 + i * (220 / (all.length - 1)) : 240; const pos = svgE('g', { transform: `translate(${x},150)` }), a = svgE('g', { class: 'ti-block' }); pos.appendChild(a); if (kind === 'film') { const k = svgE('g', { transform: 'scale(.8)' }); a.appendChild(k); tiClapper(k); } else tiIcon(kind, a, 1.0); pos.style.opacity = '0'; svg.appendChild(pos); return { x, pos, a, kind }; });
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
  function entranceFinal() { E.stop(); setAnim('none', 'translate(160px,0) scale(1.5)'); anim.style.opacity = '1'; bAnim.style.animation = 'none'; bAnim.style.opacity = '0'; sparkles.setAttribute('opacity', '0'); flash.style.animation = 'none'; tiHeadset(avBody,true); }
  function stop() { E.stop(); S.stop(); svg.querySelectorAll('.ti-fb').forEach(f => f.remove()); }
  function play() {
    stop(); s.classList.toggle('ti-now', TI.instant);
    tiFade([...bioEls, ue5Text, statsRow], false, true);
    nums.forEach(n => { n.textContent = TI.instant ? n.dataset.tally : (/^\d+\+?$/.test(n.dataset.tally) ? '0' : n.dataset.tally); n.style.transform = ''; });
    uPos.style.opacity = '0'; uAnim.style.opacity = '1'; uAnim.style.animation = 'none'; anim.style.transition = 'none'; anim.style.filter = ''; ICONS.forEach(o => { o.pos.style.opacity = '0'; o.a.style.animation = 'none'; o.a.style.opacity = '1'; });
    if (TI.instant) { entranceFinal(); if (TI.exp) { tiHeadset(avBody); tiFade([...bioEls, ue5Text, statsRow], true, true); setAnim('none', 'translate(90px,0) scale(2)'); } return; }
    avBody.querySelector('.worn-headset')?.remove();
    setAnim('none', ''); anim.style.opacity = '0'; bAnim.style.opacity = '1'; bAnim.style.animation = 'introHeadsetBob 1.6s ease-in-out infinite';
    sparkles.setAttribute('opacity', '0'); sparkles.querySelectorAll('circle').forEach(p => p.style.animation = 'none'); flash.style.animation = 'none';
    const D = 300;
    E.after(D, () => { anim.style.opacity = '1'; setAnim('introWalk 2s linear 0s 1 normal both'); });
    E.after(D + 2000, () => setAnim('introJumpUp .4s cubic-bezier(.3,.7,.4,1) 0s 1 normal both'));
    E.after(D + 2400, () => { pulse(flash, 'introFlash .45s ease-out forwards'); bAnim.style.animation = 'introHeadsetGrab .5s ease-out forwards'; sparkles.setAttribute('opacity', '1'); sparkles.querySelectorAll('circle').forEach(p => pulse(p, 'introSparkle 1.1s ease-out forwards')); tiSfx.powerUp(); setAnim('introPowerUp .8s ease-out forwards'); });
    E.after(D + 2900, () => tiHeadset(avBody,true));
    E.after(D + 3200, () => setAnim('introFallDown .55s cubic-bezier(.55,0,.8,1) forwards'));
    E.after(D + 3780, () => setAnim('none', 'translate(160px,0) scale(1.5)'));
  }
  function showBio() { tiFade(bioEls, true, TI.instant, 200); }
  function shootStar(x, y, dir) {
    const fb = svgE('g', { class: 'ti-fb', transform: `translate(${x},${y})` });
    fb.appendChild(svgE('image', { href: Math.random() < .5 ? (I.badge || 'media/pmre/v8/GoldAuthorized.png') : (I.logo || 'media/pmre/v8/ue5logo.png'), x: -20, y: -20, width: 40, height: 40 }));
    svg.appendChild(fb); tiSfx.zap();
    let f = 0; const sp = dir * 5.5;
    const spin = () => { f++; const cx = x + sp * f, b = -Math.abs(Math.sin(f * .12)) * 18 * Math.max(0, 1 - f / 40); fb.setAttribute('transform', `translate(${cx},${y + b}) rotate(${f * 12})`); if (f < 55 && cx > 5 && cx < 395) S.raf(spin); else fb.remove(); };
    S.raf(spin);
  }
  // Icon power-ups: walk under each icon, jump, grab it (flash + chime), land; then hand over to the Unreal block
  function iconHops() {
    entranceFinal(); ICONS.forEach(o => { o.pos.style.opacity = '1'; o.a.style.animation = 'none'; o.a.style.opacity = '1'; });
    if (TI.instant || !ICONS.length) { ICONS.forEach(o => o.pos.style.opacity = '0'); ue5PowerUp(); tiHeadset(avBody); return; }
    let tAt = 200;
    ICONS.forEach(o => {
      const dx = o.x - 80;
      S.after(tAt, () => { anim.style.animation = 'none'; anim.style.transition = 'transform .45s ease-in-out'; anim.style.transform = `translate(${dx}px,0) scale(1.5)`; });
      S.after(tAt + 470, () => { anim.style.transition = 'transform .3s cubic-bezier(.3,.7,.4,1)'; anim.style.transform = `translate(${dx}px,-74px) scale(1.5)`; });
      S.after(tAt + 770, () => { o.a.style.animation = 'introHeadsetGrab .5s ease-out forwards'; if(o.kind==='vr')tiHeadset(avBody); anim.style.filter = 'brightness(1.8)'; tiSfx.powerUp(); anim.style.transition = 'transform .28s cubic-bezier(.55,0,.8,1)'; anim.style.transform = `translate(${dx}px,0) scale(1.5)`; });
      S.after(tAt + 1000, () => { anim.style.filter = ''; });
      tAt += 1100;
    });
    S.after(tAt, () => { ICONS.forEach(o => o.pos.style.opacity = '0'); ue5PowerUp(true); });
  }
  function ue5PowerUp(fromIcons) {
    if (!fromIcons) entranceFinal(); // pressing → mid-walk lands the entrance first
    tiFade([ue5Text], false, true); uPos.style.opacity = '1';
    if (TI.instant) { uAnim.style.opacity = '0'; setAnim('none', 'translate(90px,0) scale(2)'); tiFade([ue5Text], true, true); return; }
    const fromX = fromIcons && ICONS.length ? ICONS[ICONS.length - 1].x - 80 : 160; setAnim('none', `translate(${fromX}px,0) scale(1.5)`); void anim.getBoundingClientRect(); anim.style.transition = 'transform 1.5s linear'; anim.style.transform = 'translate(0,0) scale(1.5)';
    S.after(1500, () => { anim.style.transition = 'none'; void anim.getBoundingClientRect(); setAnim('ue5JumpUp .4s cubic-bezier(.3,.7,.4,1) forwards'); });
    S.after(1900, () => { pulse(flash, 'introFlash .45s ease-out forwards'); uAnim.style.animation = 'introHeadsetGrab .5s ease-out forwards'; tiSfx.powerUp(); setAnim('ue5PowerUp .8s ease-out forwards'); });
    S.after(2700, () => setAnim('ue5FallDown .55s cubic-bezier(.55,0,.8,1) forwards'));
    S.after(3300, () => {
      tiFade([ue5Text], true, false); setAnim('none', 'translate(0,0) scale(2)');
      const run = (startX, hop, done) => { let dir = 1, x = startX, fbt = 0, n = 0; const loop = () => { if (n > 180) { done(x); return; } n++; x += dir * 2.8; if (x > 200) dir = -1; if (x < -20) dir = 1; const hy = hop ? -Math.abs(Math.sin(n * .15)) * 8 : 0; anim.style.transform = `translate(${x}px,${hy}px) scale(2)`; if (++fbt > 18 && Math.random() < .18) { shootStar(80 + x + (dir > 0 ? 25 : -25), 270 + hy, dir); fbt = 0; } S.raf(loop); }; S.raf(loop); };
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
  return {enter:play,leave:stop,staticFrame(){this.complete();},step(n){[showBio,iconHops,showTallies][n-1]();},complete(){stop();entranceFinal();tiHeadset(avBody);ICONS.forEach(o=>o.pos.style.opacity='0');uPos.style.opacity='0';tiFade([...bioEls,ue5Text,statsRow],true,true);nums.forEach(n=>n.textContent=n.dataset.tally);setAnim('none','translate(90px,0) scale(2)');}};
}


return tiBuildAlex(s,I);}});
