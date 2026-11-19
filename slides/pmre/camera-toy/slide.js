// A presenter-controlled framing study on a supplied architectural visualization.
function pmreArchitectureCamera(s,p,ctx){
 s.innerHTML=`<div class="ct-wrap ct-architecture"><div class="ct-head"><h2 class="case-title">${p.title}</h2><p>Your lens. Your framing. Your story.</p></div><div class="ct-main"><div class="ct-left"><svg class="ct-plan" viewBox="0 0 400 400" aria-label="Schematic room and camera position"><path d="M30 350V45H370V350M30 140H120V45M280 45V150H370" fill="none" stroke="#d7b668" stroke-width="12"/><path d="M65 45H240M370 185V290" stroke="#9cb9b4" stroke-width="6"/><rect x="140" y="160" width="125" height="70" rx="10" fill="#635744"/><rect x="140" y="270" width="125" height="26" rx="6" fill="#8d7b5a"/><path class="ct-fr" d="M200 340L90 70H320Z" fill="#d7b6681c" stroke="#d7b668" stroke-width="3"/><g class="ct-cam" transform="translate(200 340)"><circle r="18" fill="#d7b668"/><rect x="-10" y="-7" width="20" height="14" rx="3" fill="#211d19"/></g><text x="200" y="390" text-anchor="middle" fill="#d7b668" font-size="18">FRAMING STUDY</text></svg><p class="ct-instruction">1 · Reframe<br>2 · Choose the crop<br>3 · Keep the shots</p><p class="ct-source">${p.architectureLabel}</p></div><div class="ct-right"><div class="ct-view"><canvas aria-label="Camera framing of the Xiqu architectural visualization"></canvas><div class="ct-hud"></div></div><div class="ct-strip">${[0,1,2].map(i=>`<div class="ct-frame"><span>${'ABC'[i]}</span></div>`).join('')}</div></div></div></div>`;
 const q=k=>s.querySelector(k),canvas=q('canvas'),g=canvas.getContext('2d'),view=q('.ct-view'),hud=q('.ct-hud'),frames=[...s.querySelectorAll('.ct-frame')],im=new Image();let gen=0,active=false;
 let pose={f:35,x:.5,y:.5,mask:0},step=0;
 canvas.width=1280;canvas.height=720;
 function paint(target=canvas,c=pose){const d=target.getContext('2d'),W=target.width,H=target.height;if(!im.naturalWidth)return;const zoom=Math.max(1,c.f/35),ratio=W/H;let w=Math.min(im.width,im.height*ratio)/zoom,h=w/ratio;const x=Math.max(0,Math.min(im.width-w,c.x*im.width-w/2)),y=Math.max(0,Math.min(im.height-h,c.y*im.height-h/2));d.drawImage(im,x,y,w,h,0,0,W,H);if(c.mask){d.fillStyle='#000';const bar=(H-W/2.39)/2*c.mask;d.fillRect(0,0,W,bar);d.fillRect(0,H-bar,W,bar);}}
 function draw(){paint();hud.textContent=`${Math.round(pose.f)} mm · ${pose.mask>.5?'2.39 crop':'16:9'}`;q('.ct-cam').setAttribute('transform',`translate(${200+(pose.x-.5)*220} ${340-(pose.f-35)*.5})`);view.classList.toggle('masked',pose.mask>.5);}
 function shutter(){if(ctx.instant)return;try{const a=ctx.audio();if(!a)return;const t=a.currentTime,b=a.createBuffer(1,Math.ceil(a.sampleRate*.12),a.sampleRate),v=b.getChannelData(0);let seed=117;for(let i=0;i<v.length;i++){const z=i/a.sampleRate;seed=(Math.imul(seed,1664525)+1013904223)|0;const noise=(seed>>>0)/2147483648-1;v[i]=noise*(Math.exp(-z*100)+.4*Math.exp(-Math.abs(z-.055)*180));}const src=a.createBufferSource(),gain=a.createGain(),f=a.createBiquadFilter();src.buffer=b;f.type='highpass';f.frequency.value=1500;gain.gain.value=.018;src.connect(f);f.connect(gain);gain.connect(a.destination);src.start(t);}catch(_){}}
 function move(next,instant=ctx.instant){const token=++gen,from={...pose};if(instant){pose={...next};draw();return;}ctx.clock.loop(t=>{if(token!==gen||!active)return false;const u=Math.min(1,t/.7),e=u*u*(3-2*u);for(const k of ['f','x','y','mask'])pose[k]=from[k]+(next[k]-from[k])*e;draw();return u<1;});}
 const setups=[{f:24,x:.5,y:.5,mask:1},{f:50,x:.43,y:.51,mask:1},{f:85,x:.67,y:.47,mask:1}];
 function take(i){const c=document.createElement('canvas');c.width=640;c.height=360;paint(c,setups[i]);frames[i].style.backgroundImage=`url(${c.toDataURL('image/jpeg',.9)})`;frames[i].querySelector('span').textContent=`${'ABC'[i]} · ${setups[i].f} mm`;frames[i].classList.add('masked');}
 function restore(n){ctx.clock.stop();gen++;step=n;pose={f:n?85:35,x:n?.67:.5,y:n?.47:.5,mask:n>=2?1:0};frames.forEach((f,i)=>{f.style.backgroundImage='';f.classList.remove('masked');f.querySelector('span').textContent='ABC'[i];});if(n>=3)setups.forEach((_,i)=>take(i));draw();}
 im.onload=()=>restore(step);im.src=p.architecture;
 return{enter(){active=true;restore(0);},step(n){step=n;shutter();if(n===1)move({f:85,x:.67,y:.47,mask:0});else if(n===2)move({...pose,mask:1});else if(n===3){if(ctx.instant)setups.forEach((_,i)=>take(i));else setups.forEach((_,i)=>ctx.clock.after(i*240,()=>{take(i);frames[i].animate([{opacity:0,transform:'translateY(12px)'},{opacity:1,transform:'none'}],{duration:500,easing:'ease-out'});}));}},restore(n){active=true;restore(n);},leave(){active=false;gen++;ctx.clock.stop();},staticFrame(){restore(3);}};
}

/* pmre/camera-toy: a concept demo of choosing a shot inside a virtual set. A top-down plan of a simple set (two actors,
   a lamp, a backdrop) with a camera you can drag; 24/35/50/85 mm lens buttons; a 2.39 mask; "Take shot" fills a
   three-frame strip. The viewfinder is three.js when WebGL and the vendored module load, else a 2D pinhole projection of
   the same set (file://, no WebGL), so it never shows an empty box. On file:// it does not even try the import.
   Clicks (unchanged from the MIA original): 1 lens to 85 mm (camera dollies in), 2 the 2.39 mask, 3 three shots from
   preset set-ups (24 mm wide, 50 mm two-shot, 85 mm close-up) fill the strip, 0.9 s apart.
   Pointer input inside the widget never reaches the deck's click-to-advance, so dragging or pressing a lens on stage
   cannot skip a slide. Exports (?print/?shot, instant) get the final frame: mask on, all three shots taken.
   Ported from ibrews/mia-2026-collective-pitch index.html mgBuildCameraToy @9ee2493 (by hand: MIA is a classic deck,
   so tools/slide.py pull had no module to copy). Differences: ctx.clock/ctx.instant replace tiClock/TI; every action
   waits for the viewfinder to finish loading, so a click during the three.js import is not drawn by the 2D fallback
   and then overwritten; colors of the UI come from the look (var(--teal), var(--text)); text is props. */
SD.defineSlide({
  id: 'pmre/camera-toy',
  manualSteps: true,
  steps: 3,
  duration: 3.2,
  props: {
    title: 'Find the Shot',
    subtitle: 'Drag the camera. Pick a lens. Take the shot.',
    badge: 'Concept demo',
    lenses: [24, 35, 50, 85],
    dragHint: 'drag the camera',
  },
  assets: ['three.module.min.js', 'three-LICENSE.txt'],
  provenance: [
    'ibrews/mia-2026-collective-pitch@9ee2493 index.html mgBuildCameraToy + .ct-* CSS (camera-toy layout)',
    'three.js r164 three.module.min.js (MIT, three-LICENSE.txt), vendored in mia-2026-collective-pitch assets/vendor/three',
  ],
  css: `
.slide.sd-mod-pmre-camera-toy{padding:0;display:block}
.sd-mod-pmre-camera-toy .ct-wrap{position:absolute;inset:calc(4.5*var(--vh)) calc(4*var(--vw)) calc(5*var(--vh));display:flex;flex-direction:column;gap:calc(2*var(--vh))}
.sd-mod-pmre-camera-toy .ct-head h2{font-size:calc(3*var(--vw));font-weight:700;letter-spacing:-.02em;line-height:1.1;color:var(--text,#f0f4ff)}
.sd-mod-pmre-camera-toy .ct-head p{font-size:calc(1.45*var(--vw));color:var(--text,#f0f4ff);opacity:.7;margin-top:.3em}
.sd-mod-pmre-camera-toy .ct-main{flex:1;display:grid;grid-template-columns:30% 1fr;gap:calc(2*var(--vw));min-height:0}
.sd-mod-pmre-camera-toy .ct-left{display:flex;flex-direction:column;gap:calc(1.4*var(--vh))}
.sd-mod-pmre-camera-toy .ct-plan{width:100%;aspect-ratio:1/1;touch-action:none}
.sd-mod-pmre-camera-toy .ct-btns{display:flex;gap:.5em;flex-wrap:wrap}
.sd-mod-pmre-camera-toy .ct-btns button{font:inherit;font-size:calc(1.05*var(--vw));font-weight:700;letter-spacing:.06em;padding:.35em .8em;border-radius:999px;background:rgba(255,255,255,.04);border:2px solid var(--teal,#00d4ff);color:var(--teal,#00d4ff);cursor:pointer;opacity:.55;transition:opacity .3s,background .3s}
.sd-mod-pmre-camera-toy .ct-btns button.on{opacity:1;background:rgba(255,255,255,.12)}
.sd-mod-pmre-camera-toy .ct-right{display:flex;flex-direction:column;gap:calc(1.4*var(--vh));min-width:0}
.sd-mod-pmre-camera-toy .ct-view{position:relative;width:100%;height:auto;aspect-ratio:16/9;max-width:100%;border-radius:14px;overflow:hidden;border:2px solid var(--teal,#00d4ff);background:#05060a}
.sd-mod-pmre-camera-toy .ct-view canvas{width:100%;height:100%;display:block}
.sd-mod-pmre-camera-toy .ct-bar{position:absolute;left:0;right:0;height:0;background:#000;transition:height .5s}
.sd-mod-pmre-camera-toy .ct-bar.t{top:0}.sd-mod-pmre-camera-toy .ct-bar.b{bottom:0}
.sd-mod-pmre-camera-toy .ct-view.masked{aspect-ratio:2.39}.sd-mod-pmre-camera-toy .ct-bar{display:none}
.sd-mod-pmre-camera-toy .ct-hud{position:absolute;left:14px;top:10px;font-size:calc(1.1*var(--vw));font-weight:700;color:#fff;text-shadow:0 1px 3px #000;z-index:2}
.sd-mod-pmre-camera-toy .ct-strip{display:flex;gap:calc(1*var(--vw))}
.sd-mod-pmre-camera-toy .ct-frame{position:relative;width:31%;height:auto;aspect-ratio:16/9;border-radius:8px;background:#11131b center/cover no-repeat;border:2px solid rgba(255,255,255,.16)}
.sd-mod-pmre-camera-toy .ct-frame.masked{aspect-ratio:2.39;box-shadow:none}
.sd-mod-pmre-camera-toy .ct-frame span{position:absolute;left:8px;bottom:6px;font-size:calc(.95*var(--vw));font-weight:700;color:#fff;text-shadow:0 1px 3px #000}
.sd-mod-pmre-camera-toy .ct-frame.flash{animation:sdCtFlash .5s ease-out}
@keyframes sdCtFlash{0%{filter:brightness(3)}100%{filter:brightness(1)}}
.sd-mod-pmre-camera-toy .ct-badge{position:absolute;right:0;top:0;font-size:calc(.95*var(--vw));font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--amber,#fde68a);border:1.5px solid var(--amber,#fde68a);padding:.35em .8em;border-radius:999px}
.ct-architecture .ct-instruction{font:500 30px/1.7 var(--font);color:var(--text);margin:0}.ct-architecture .ct-source{font:22px/1.3 var(--font);color:var(--dim);margin:0}.ct-architecture .ct-main{grid-template-columns:23% 1fr}.ct-architecture .ct-view,.ct-architecture .ct-view.masked{aspect-ratio:16/9}.ct-architecture .ct-frame,.ct-architecture .ct-frame.masked{aspect-ratio:16/9}.ct-architecture .ct-left{gap:20px}.ct-architecture .ct-plan{max-height:340px}.sd-mod-pmre-camera-toy .ct-architecture{bottom:18%}.ct-architecture .ct-right{min-height:0}.ct-architecture .ct-view,.ct-architecture .ct-view.masked{flex:1;min-height:0;aspect-ratio:auto}.ct-architecture .ct-view canvas{object-fit:contain}.ct-architecture .ct-strip{height:140px;flex:none}.ct-architecture .ct-frame,.ct-architecture .ct-frame.masked{height:100%;width:31%;aspect-ratio:auto}
`,
  render(s, props, ctx) {
    if(props.architecture)return pmreArchitectureCamera(s,props,ctx);
    const LENSES = props.lenses;
    s.innerHTML = `<div class="ct-wrap"><div class="ct-head"><h2 class="case-title">${props.title || ''}</h2>${props.subtitle ? `<p>${props.subtitle}</p>` : ''}</div>
    <div class="ct-main"><div class="ct-left"><svg class="ct-plan" viewBox="0 0 400 400" aria-label="Top-down plan of the set: drag the camera"></svg>
      <div class="ct-btns">${LENSES.map(f => `<button data-f="${f}">${f} mm</button>`).join('')}</div>
      <div class="ct-btns"><button class="ct-mask">2.39 mask</button><button class="ct-take">Take shot</button></div></div>
      <div class="ct-right"><div class="ct-view"><canvas></canvas><div class="ct-bar t"></div><div class="ct-bar b"></div><div class="ct-hud"></div></div>
      <div class="ct-strip">${[0, 1, 2].map(i => `<div class="ct-frame"><span>${'ABC'[i]}</span></div>`).join('')}</div></div></div>
    ${props.badge ? `<div class="ct-badge">${props.badge}</div>` : ''}</div>`;
    const q = k => s.querySelector(k), plan = q('.ct-plan'), view = q('.ct-view'), canvas = q('canvas'), hud = q('.ct-hud'), frames = [...s.querySelectorAll('.ct-frame')];
    ['click', 'pointerdown', 'mousedown', 'touchstart', 'wheel'].forEach(t => q('.ct-main').addEventListener(t, e => e.stopPropagation()));
    // plan: stage 0..400; figures at fixed spots; camera position + yaw (always aims at the midpoint of the two figures)
    const FIG = [{ x: 175, y: 170, col: '#f59e0b' }, { x: 235, y: 185, col: '#fb7185' }], AIM = { x: 205, y: 172 };
    const HOME = { x: 205, y: 340, f: 35 };
    const st = { ...HOME, mask: false, shots: 0 };
    const pcid = 'ctclip' + (Math.random() * 1e9 | 0).toString(36);
    plan.innerHTML = `<clipPath id="${pcid}"><rect x="10" y="10" width="380" height="380" rx="14"/></clipPath><rect x="10" y="10" width="380" height="380" rx="14" fill="#0d1020" stroke="rgba(255,255,255,.18)" stroke-width="2"/><rect x="40" y="40" width="320" height="16" fill="#2a2440"/>
    <text x="200" y="34" text-anchor="middle" fill="rgba(255,255,255,.5)" font-size="16" style="font-family:inherit">BACKDROP</text>
    <circle cx="110" cy="120" r="8" fill="#fbbf24"/><path class="ct-fr" clip-path="url(#${pcid})" fill="rgba(0,212,255,.14)" stroke="rgba(0,212,255,.7)" stroke-width="2"/>
    ${FIG.map(f => `<circle cx="${f.x}" cy="${f.y}" r="13" fill="${f.col}"/>`).join('')}<g class="ct-cam" style="cursor:grab"><circle r="18" fill="#00d4ff"/><rect x="-10" y="-7" width="20" height="14" rx="3" fill="#0b0e18"/></g>
    <text x="200" y="384" text-anchor="middle" fill="rgba(255,255,255,.45)" font-size="15" style="font-family:inherit">${props.dragHint || ''}</text>`;
    const camG = plan.querySelector('.ct-cam'), fr = plan.querySelector('.ct-fr');
    let three = null;
    const hfov = f => 2 * Math.atan(18 / f); // 36 mm-wide full-frame gate
    function drawPlan() {
      const yaw = Math.atan2(AIM.y - st.y, AIM.x - st.x), h = hfov(st.f) / 2, L = 420;
      camG.setAttribute('transform', `translate(${st.x},${st.y}) rotate(${yaw * 180 / Math.PI})`);
      fr.setAttribute('d', `M${st.x} ${st.y} L${st.x + Math.cos(yaw - h) * L} ${st.y + Math.sin(yaw - h) * L} L${st.x + Math.cos(yaw + h) * L} ${st.y + Math.sin(yaw + h) * L} Z`);
      s.querySelectorAll('[data-f]').forEach(b => b.classList.toggle('on', +b.dataset.f === st.f)); q('.ct-mask').classList.toggle('on', st.mask);
      view.classList.toggle('masked', st.mask); hud.textContent = `${st.f} mm${st.mask ? ' · 2.39' : ' · 16:9'}`;
    }
    // Load the viewfinder once per slide build; every action waits for it (see header).
    const ready = (async () => {
      // file:// cannot load a module script (Chrome blocks it as cross-origin and logs an error): go straight to 2D.
      if (location.protocol === 'file:') return null;
      // No WebGL (venue laptop, headless capture): skip three.js, which would log a context-creation error per attempt.
      try { const t = document.createElement('canvas'); if (!(t.getContext('webgl2') || t.getContext('webgl'))) return null; } catch (e) { return null; }
      try {
        const THREE = await import(new URL(ctx.asset('three.module.min.js'), location.href).href);
        const r = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true }); r.setPixelRatio(1); r.setSize(1280, 720, false);
        if (!r.getContext()) return null;
        const scene = new THREE.Scene(); scene.background = new THREE.Color('#0a0c16'); scene.fog = new THREE.Fog('#0a0c16', 14, 30);
        const cam = new THREE.PerspectiveCamera(40, 16 / 9, .1, 100);
        scene.add(new THREE.HemisphereLight('#9fb4ff', '#1a1020', .55));
        const key = new THREE.SpotLight('#ffe2b0', 60, 30, .6, .5); key.position.set(-3, 6, 4); scene.add(key); key.target.position.set(0, 0, -1); scene.add(key.target);
        const lamp = new THREE.PointLight('#fbbf24', 8, 8); lamp.position.set(-3.6, 2.6, -2.4); scene.add(lamp);
        const floor = new THREE.Mesh(new THREE.PlaneGeometry(24, 24), new THREE.MeshStandardMaterial({ color: '#3a2e2a', roughness: .9 })); floor.rotation.x = -Math.PI / 2; scene.add(floor);
        const wall = new THREE.Mesh(new THREE.BoxGeometry(16, 6, .3), new THREE.MeshStandardMaterial({ color: '#2a2440', roughness: 1 })); wall.position.set(0, 3, -6.5); scene.add(wall);
        for (let i = -2; i <= 2; i++) { const w = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.8), new THREE.MeshBasicMaterial({ color: '#ffd98a' })); w.position.set(i * 2.6, 3.4, -6.3); scene.add(w); }
        const post = new THREE.Mesh(new THREE.CylinderGeometry(.06, .08, 2.8), new THREE.MeshStandardMaterial({ color: '#111' })); post.position.set(-3.6, 1.4, -2.4); scene.add(post);
        const bulb = new THREE.Mesh(new THREE.SphereGeometry(.18), new THREE.MeshBasicMaterial({ color: '#ffd27a' })); bulb.position.copy(lamp.position); scene.add(bulb);
        const person = (col, h) => { const g = new THREE.Group(), m = new THREE.MeshStandardMaterial({ color: col, roughness: .6 }); const b = new THREE.Mesh(new THREE.CapsuleGeometry(.28, h - .9, 6, 12), m); b.position.y = h / 2 - .1; g.add(b); const hd = new THREE.Mesh(new THREE.SphereGeometry(.2, 16, 12), new THREE.MeshStandardMaterial({ color: '#f2c79b' })); hd.position.y = h - .05; g.add(hd); scene.add(g); return g; };
        const toW = p => new THREE.Vector3((p.x - 200) / 40, 0, (p.y - 200) / 40);
        const A = person('#f59e0b', 1.85), Bp = person('#fb7185', 1.65); A.position.copy(toW(FIG[0])); Bp.position.copy(toW(FIG[1]));
        ['#f59e0b', '#00d4ff', '#a78bfa'].forEach((col, i) => { const m = new THREE.Mesh(new THREE.RingGeometry(.18, .26, 24), new THREE.MeshBasicMaterial({ color: col })); m.rotation.x = -Math.PI / 2; m.position.set(-1.5 + i * 1.6, .01, 1.2); scene.add(m); });
        three = { r, scene, cam, toW };
      } catch (e) { three = null; }
      return three;
    })();
    // No WebGL (some venue laptops, file://, headless capture): a 2D pinhole projection of the same set.
    function render2d() {
      const g = canvas.getContext('2d'); if (!g) return; const W = canvas.width = 1280, H = canvas.height = 720;
      const yaw = Math.atan2(AIM.y - st.y, AIM.x - st.x), fx = (W / 2) / Math.tan(hfov(st.f) / 2), camH = 1.55;
      const proj = (px, py, h) => { const dx = (px - st.x) / 40, dz = (py - st.y) / 40, z = dx * Math.cos(yaw) + dz * Math.sin(yaw), x = -dx * Math.sin(yaw) + dz * Math.cos(yaw); return z <= .2 ? null : { x: W / 2 + x / z * fx, y: H / 2 - (h - camH + .2) / z * fx, z }; };
      const sky = g.createLinearGradient(0, 0, 0, H); sky.addColorStop(0, '#141228'); sky.addColorStop(.55, '#2a2440'); sky.addColorStop(.56, '#3a2e2a'); sky.addColorStop(1, '#241c18'); g.fillStyle = sky; g.fillRect(0, 0, W, H);
      for (let i = -2; i <= 2; i++) { const a = proj(200 + i * 104, 40, 4.3), b = proj(200 + i * 104 + 44, 40, 2.5); if (a && b) { g.fillStyle = '#ffd98a'; g.fillRect(Math.min(a.x, b.x), a.y, Math.abs(b.x - a.x), b.y - a.y); } }
      const items = [{ x: 110, y: 120, h: 2.8, col: '#111', w: .08, lamp: true }, ...FIG.map((f, i) => ({ x: f.x, y: f.y, h: i ? 1.65 : 1.85, col: f.col, w: .2 }))]
        .map(o => ({ o, top: proj(o.x, o.y, o.h), bot: proj(o.x, o.y, 0) })).filter(r => r.top && r.bot).sort((a, b) => b.bot.z - a.bot.z);
      items.forEach(({ o, top, bot }) => { const w = Math.max(2, o.w / bot.z * fx); g.fillStyle = o.col; const hr = .11 / bot.z * fx; g.fillRect(bot.x - w, top.y + (o.lamp ? 0 : hr * 2.3), w * 2, bot.y - top.y - (o.lamp ? 0 : hr * 2.3));
        if (o.lamp) { g.fillStyle = '#ffd27a'; g.beginPath(); g.arc(top.x, top.y, Math.max(4, .2 / top.z * fx), 0, 7); g.fill(); } else { g.fillStyle = '#f2c79b'; g.beginPath(); g.arc(top.x, top.y + hr, hr, 0, 7); g.fill(); } });
    }
    function draw() {
      drawPlan(); const ratio=st.mask?2.39:16/9; if(canvas.height!==Math.round(1280/ratio)){canvas.width=1280;canvas.height=Math.round(1280/ratio);} if (!three) { render2d(); return; }
      const { r, scene, cam, toW } = three, p = toW(st), a = toW(AIM);
      r.setSize(1280,Math.round(1280/ratio),false);cam.aspect=ratio;cam.position.set(p.x, 1.55, p.z); cam.fov = 2 * Math.atan(Math.tan(hfov(st.f) / 2) / ratio) * 180 / Math.PI; cam.updateProjectionMatrix(); cam.lookAt(a.x, 1.35, a.z);
      r.render(scene, cam);
    }
    function take() {
      draw(); const i = st.shots % 3; st.shots++;
      const fEl = frames[i]; fEl.style.backgroundImage = `url(${canvas.toDataURL('image/jpeg', .8)})`; fEl.classList.toggle('masked', st.mask); fEl.querySelector('span').textContent = `${'ABC'[i]} · ${st.f} mm`;
      if (!ctx.instant) { fEl.classList.remove('flash'); void fEl.offsetWidth; fEl.classList.add('flash'); }
    }
    // Every state change goes through act(): it runs after the viewfinder is ready, and a generation counter drops work
    // queued before the latest enter() (going back to the slide mid-load must not replay stale clicks).
    let gen = 0; const act = (fn,instant=ctx.instant,motion=false) => { const g = gen; return ready.then(() => { if (g === gen) {const old=ctx.instant;ctx.instant=instant;try{if(motion)SDStepMotion.run(s,fn,instant);else fn();}finally{ctx.instant=old;}} }); };
    let drag = false; const toPlan = e => { const b = plan.getBoundingClientRect(); return { x: Math.max(30, Math.min(370, (e.clientX - b.left) / b.width * 400)), y: Math.max(215, Math.min(370, (e.clientY - b.top) / b.height * 400)) }; };
    plan.addEventListener('pointerdown', e => { drag = true; try { plan.setPointerCapture(e.pointerId); } catch (_) {} Object.assign(st, toPlan(e)); act(draw); });
    plan.addEventListener('pointermove', e => { if (drag) { Object.assign(st, toPlan(e)); act(draw); } });
    plan.addEventListener('pointerup', () => { drag = false; });
    s.querySelectorAll('[data-f]').forEach(b => b.addEventListener('click', () => { st.f = +b.dataset.f; act(draw); }));
    q('.ct-mask').addEventListener('click', () => { st.mask = !st.mask; act(draw); });
    q('.ct-take').addEventListener('click', () => act(take));
    const SETUPS = [{ x: 90, y: 330, f: 24 }, { x: 205, y: 300, f: 50 }, { x: 245, y: 330, f: 85 }];
    function reset() {
      gen++; Object.assign(st, HOME, { mask: false, shots: 0 });
      frames.forEach((f, i) => { f.style.backgroundImage = ''; f.classList.remove('masked', 'flash'); f.querySelector('span').textContent = 'ABC'[i]; });
      drawPlan(); act(draw);
    }
    const STEPS = {
      1() { act(() => { Object.assign(st, { f: 85, x: 215, y: 365 }); draw(); },ctx.instant,true); },
      2() { act(() => { st.mask = true; draw(); },ctx.instant,true); },
      3() { act(() => SETUPS.forEach((u, i) => { const shot = () => SDStepMotion.run(s,()=>{ Object.assign(st, u); take(); },ctx.instant); if (ctx.instant) shot(); else ctx.clock.after(i * 900, shot); })); },
    };
    reset();
    return {
      enter: reset,
      step(n) { STEPS[n] && STEPS[n](); },
      restore(n,animate) { gen++;return act(()=>{Object.assign(st,HOME,{mask:n>=2,shots:0});frames.forEach((f,i)=>{f.style.backgroundImage='';f.classList.remove('masked','flash');f.querySelector('span').textContent='ABC'[i];});if(n>=1)Object.assign(st,{f:85,x:215,y:365});if(n>=3)SETUPS.forEach(u=>{Object.assign(st,u);take();});else draw();},true); },
      leave(){gen++;},
      // Final frame: mask on, all three shots in the strip, camera back home so the viewfinder and the plan agree.
      staticFrame() { reset(); act(() => { st.mask = true; SETUPS.forEach(u => { Object.assign(st, u); take(); }); Object.assign(st, HOME); draw(); }); },
    };
  },
});
