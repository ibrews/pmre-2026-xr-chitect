/* The venn-sprite sequence as a reusable builder, so lane-traffic can play the exact same timeline after its curl.
   PX.vennScene(svg, { END, T0, curl, handoff }) appends: three circles, craft labels, HXR icons, overlap labels (VERIFIED,
   same as venn.html), the XR-CHITECT pill, the pixel-Alex hero and caption "BIZARRE OVERLAPS". Every time is T0 + the
   venn-sprite time. curl: the circles fade in (they arrive as strands curling) instead of flying in. handoff: the hero
   appears instantly at the temple at T0+2.6 (a previous sprite hands over there) instead of fading in.
   Needs sprite.js, the gradients #ga #gt #gx #core in <defs>, and the page CSS classes .c .fade .pop .lbl .ov .halo .cap .core
   (see venn-sprite.html). Build synchronously, before the seek runtime and look.js. */
(function () {
  const { E, track, clamp } = PX;
  PX.vennScene = function (svg, o) {
    const END = o.END, T = s => (o.T0 || 0) + s, at = (s) => `--t:${T(s).toFixed(2)}s`, S = 3.4, SC = 1.6;
    const txt = (attrs, cls, style, str) => { const t = E('text', Object.assign({ 'text-anchor': 'middle', class: cls, style }, attrs), svg); t.textContent = str; return t; };
    const cg = E('g', { class: 'venn-circles' }, svg);
    [[820, 450, 'ga', '#00d4ff', .3, '-500px', '-120px'], [1100, 450, 'gt', '#f43f5e', .8, '500px', '-120px'], [960, 690, 'gx', '#a78bfa', 1.3, '0px', '420px']].forEach(([cx, cy, g, col, t, dx, dy]) =>
      E('circle', { class: o.curl ? 'vc fade' : 'c', cx, cy, r: 300, fill: `url(#${g})`, stroke: col, 'stroke-width': 3, style: o.curl ? `${at(.3)}` : `${at(t)};--dx:${dx};--dy:${dy}` }, cg));
    txt({ x: 560, y: 118 }, 'lbl fade', `${at(1.2)};fill:#00d4ff`, 'ARCHITECTURE');
    txt({ x: 1320, y: 118 }, 'lbl fade', `${at(1.6)};fill:#f43f5e`, 'THEATER');
    txt({ x: 960, y: 1040 }, 'lbl fade', `${at(2.0)};fill:#a78bfa`, 'TECHNOLOGY');
    const icons = E('g', {}, svg);
    // overlaps, each a real chapter of the story (same VERIFIED labels as venn.html), revealed as he crosses them
    txt({ x: 960, y: 355 }, 'ov halo fade', at(4.5), 'theater planning');
    txt({ x: 1160, y: 700 }, 'ov halo fade', at(6.6), 'live VR theater');
    txt({ x: 755, y: 700 }, 'ov halo fade', at(8.6), 'archviz');
    const pill = E('g', { class: 'pop', style: at(10.2) }, svg);
    E('rect', { x: 790, y: 508, width: 340, height: 76, rx: 38, fill: 'url(#core)' }, pill);
    const core = E('text', { x: 960, y: 560, 'text-anchor': 'middle', class: 'core' }, pill); core.textContent = 'XR-CHITECT';
    const heroG = E('g', {}, svg), fx = E('g', {}, svg);
    txt({ x: 960, y: 56 }, 'cap fade', at(11.4), 'BIZARRE OVERLAPS');
    // Icons in each circle's exclusive region (HXR layout, PMRE colors: architecture teal, theater rose, technology purple).
    const A = [640, 470], Tp = [1280, 470], X = [960, 880], C = [960, 508];  // sprite foot positions
    const tmp = PX.temple(icons, A[0], A[1] - 17 * S, S), th = PX.theater(icons, Tp[0], Tp[1] - 12 * S, S), mo = PX.monitor(icons, X[0], X[1] - 14 * S, S);
    [[tmp, 2.0], [th, 2.2], [mo, 2.4]].forEach(([I, t0]) => track(I.pos, END, t => { const k = clamp((t - T(t0)) / .5, 0, 1); return { opacity: +k.toFixed(3) }; }));
    const hero = PX.sprite(heroG, { withBeard: false });
    // Two bounces per leg, like the HXR pinball: the first lands on the overlap, the second on the next icon.
    const route = PX.route([
      { type: 'idle', t0: 0, t1: T(3.4), a: A, face: 1 },
      { type: 'hop', t0: T(3.4), t1: T(4.3), a: A, b: [960, 440], h: 120 },   // into Architecture ∩ Theater
      { type: 'hop', t0: T(4.3), t1: T(5.1), a: [960, 440], b: Tp, h: 80 },
      { type: 'idle', t0: T(5.1), t1: T(5.6), a: Tp },
      { type: 'hop', t0: T(5.6), t1: T(6.4), a: Tp, b: [1170, 640], h: 90 },   // Theater ∩ Technology
      { type: 'hop', t0: T(6.4), t1: T(7.2), a: [1170, 640], b: X, h: 70 },
      { type: 'idle', t0: T(7.2), t1: T(7.6), a: X },
      { type: 'hop', t0: T(7.6), t1: T(8.4), a: X, b: [760, 640], h: 90 },     // Architecture ∩ Technology
      { type: 'idle', t0: T(8.4), t1: T(8.9), a: [760, 640] },
      { type: 'hop', t0: T(8.9), t1: T(9.9), a: [760, 640], b: C, h: 150 },    // up onto the center
      { type: 'idle', t0: T(9.9), t1: END, a: C, face: 1 }
    ]);
    PX.drive(hero, END, route, SC, o.handoff ? [T(2.6) - .001, T(2.6)] : [T(2.6), T(3.1)]);
    PX.reactArch(tmp, END, T(3.1)); PX.reactTheater(th, END, T(5.1)); PX.reactTech(mo, END, T(7.2));
    PX.sparkles(fx, END, A[0], A[1] - 60, T(2.7), 21, .8); PX.sparkles(fx, END, Tp[0], Tp[1] - 60, T(5.1), 22, .6); PX.sparkles(fx, END, X[0], X[1] - 50, T(7.2), 23, .6); PX.sparkles(fx, END, 960, 546, T(10.0), 24, 1.3);
    return { A, circles: cg, hero, SC };
  };
  PX.VENN_LEN = 13.5;
})();
