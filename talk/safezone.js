/* Venue safe zone (PMRE 2026 Presenter Guidelines: 1920x1080 concave screen, all type and key info inside the centered
   1344x756 box = 70%). ?safe=70 (or Options -> "Venue safe zone") FITS EACH SLIDE'S CONTENT to that box: the content
   bounding box (text, pictures, graphics; for motion-graphic slides the timeline-wide box from talk/motion-fit.js) is
   scaled to reach the box on its tightest axis and centered in it, never above native size, so the talk uses as much
   of the safe zone as it can. The page background and the .bg layer still fill the frame. Off by default for the web
   deck; tools/export_venue_package.mjs always turns it on. Each slide records its fit in data-safe-fit ("scale tx ty").
   The journey minimap is not moved by safe mode: --safe-inset-x/-y stay 0; --safe-box-inset-x/-y carry the box margins
   for anything that wants them. ?safezone draws the 1344x756 QA box on top of everything (with or without ?safe). */
function applySafeZone(pick){
  const q=new URLSearchParams(location.search);
  let pct=pick&&pick.safe&&pick.safe!=='off'?+pick.safe:NaN;
  const raw=q.get('safe');if(raw&&/^\d{2,3}$/.test(raw))pct=+raw;  // ?safe=80 etc. work even if not a picker choice
  if(!document.getElementById('sd-safe-css')){
    const st=document.createElement('style');st.id='sd-safe-css';
    st.textContent=':root{--safe-inset-x:0px;--safe-inset-y:0px;--safe-box-inset-x:0px;--safe-box-inset-y:0px}'+
      'body.sd-safe #deck .slide{transform-origin:0 0}'+  /* scale/translate set per slide; individual props compose with the deck's transform animations */
      'body.sd-safe #brand{left:calc(var(--safe-box-inset-x) + 24px);bottom:calc(var(--safe-box-inset-y) + 18px)}'+
      'body.sd-safe #counter{right:calc(var(--safe-box-inset-x) + 24px);bottom:calc(var(--safe-box-inset-y) + 18px)}'+
      '#sd-safezone{position:fixed;left:15vw;top:15vh;width:70vw;height:70vh;box-sizing:border-box;border:2px dashed #ff2d55;z-index:2147483000;pointer-events:none;'+
      'box-shadow:0 0 0 100vmax rgba(255,45,85,.10)}'+
      '#sd-safezone span{position:absolute;left:8px;top:6px;font:600 13px/1 system-ui,sans-serif;color:#ff2d55;letter-spacing:.04em}';
    document.head.appendChild(st);
  }
  const on=pct>=40&&pct<100,s=on?pct/100:1,root=document.documentElement.style;
  document.body.classList.toggle('sd-safe',on);document.body.dataset.safe=on?String(pct):'off';
  root.setProperty('--safe-box-inset-x',((1-s)/2*100).toFixed(3)+'vw');root.setProperty('--safe-box-inset-y',((1-s)/2*100).toFixed(3)+'vh');
  window.SD_SAFE=on?s:0;
  if(q.has('safezone')&&!document.getElementById('sd-safezone')){
    const z=document.createElement('div');z.id='sd-safezone';z.innerHTML='<span>PMRE safe zone 1344×756</span>';document.body.appendChild(z);
  }
  if(!on||window._sdSafeWired)return;window._sdSafeWired=true;
  const fitActive=()=>{const a=document.querySelector('#deck .slide.active');if(a)safeFitSlide(a);};
  new MutationObserver(muts=>{for(const m of muts)if(m.target.classList&&m.target.classList.contains('slide')&&m.target.classList.contains('active'))safeFitSlide(m.target);})
    .observe(document.getElementById('deck'),{subtree:true,attributes:true,attributeFilter:['class']});
  addEventListener('resize',fitActive);
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fitActive);
  setTimeout(fitActive,0);
}
/* Content box of a slide in its own (untransformed) layout, as viewport px. Counts every laid-out piece of content,
   including later build steps (opacity 0 still has layout, so the fit does not jump between clicks). Skips: decorative
   text (color alpha < .15, e.g. the year ghost), full-bleed media (>=90% of the frame both ways: a motion frame uses its
   timeline box instead), anything clipped away, and the journey minimap. */
function safeContentBox(sl){
  const R=sl.getBoundingClientRect();let L=1e9,T=1e9,Rt=-1e9,B=-1e9;
  const add=r=>{const l=Math.max(r.left,R.left),t=Math.max(r.top,R.top),rr=Math.min(r.right,R.right),b=Math.min(r.bottom,R.bottom);if(rr-l<1||b-t<1)return;L=Math.min(L,l);T=Math.min(T,t);Rt=Math.max(Rt,rr);B=Math.max(B,b);};
  const skip=el=>!!el.closest('#journey,[id^="journey"],[class*="journey"],.sd-skip-fit');
  const shown=el=>{for(let e=el;e&&e!==sl;e=e.parentElement){const c=getComputedStyle(e);if(c.display==='none'||c.visibility==='hidden')return false;}return true;};
  const tw=document.createTreeWalker(sl,NodeFilter.SHOW_TEXT);
  for(let n;(n=tw.nextNode());){const pe=n.parentElement;if(!n.nodeValue.trim()||!pe||skip(pe)||pe.closest('script,style,svg'))continue;if(!shown(pe))continue;
    const m=getComputedStyle(pe).color.match(/rgba?\(([^)]+)\)/);const a=m?(m[1].split(/[ ,/]+/).filter(Boolean)[3]??1):1;if(+a<.15)continue;
    const rg=document.createRange();rg.selectNodeContents(n);for(const r of rg.getClientRects())add(r);}
  let motion=null,fullFrame=false;
  sl.querySelectorAll('img,svg,canvas,video,iframe').forEach(el=>{if(skip(el)||el.parentElement.closest('svg')||!shown(el))return;const r=el.getBoundingClientRect();if(r.width<2||r.height<2)return;
    if(r.width>=R.width*.9&&r.height>=R.height*.9){if(el.tagName==='IFRAME'){const nm=((el.dataset.motionBase||el.getAttribute('src')||'').match(/([\w-]+)\.html/)||[])[1];const f=window.MOTION_FIT&&MOTION_FIT[nm];if(f&&f.box){const q=f.box;motion=[r.left+q[0]*r.width,r.top+q[1]*r.height,q[2]*r.width,q[3]*r.height];}else fullFrame=true;}return;}
    add(r);});
  if(motion)add({left:motion[0],top:motion[1],right:motion[0]+motion[2],bottom:motion[1]+motion[3]});
  return fullFrame?{fullFrame:true,R}:Rt>L?{x:L,y:T,w:Rt-L,h:B-T,R}:null;
}
function safeFitSlide(sl){
  const s=window.SD_SAFE;if(!s)return;
  sl.style.scale='';sl.style.translate='';
  // measure the settled layout: entrance animations (slide-in, fade-up) would otherwise skew the box. Jump each running
  // animation on the slide to its end, measure, then put it back exactly where it was.
  const anims=[];try{sl.getAnimations({subtree:true}).forEach(a=>{const e=a.effect&&a.effect.getComputedTiming?a.effect.getComputedTiming().endTime:Infinity;if(isFinite(e)&&a.playState!=='finished'){anims.push([a,a.currentTime,a.playState]);try{a.currentTime=Math.max(0,e-1);}catch(_){}}});}catch(_){}
  const b=safeContentBox(sl);
  anims.forEach(([a,t,ps])=>{try{a.currentTime=t;if(ps==='running')a.play();}catch(_){}});const R=b?b.R:sl.getBoundingClientRect();
  const W=innerWidth,H=innerHeight,bw=W*s,bh=H*s;
  // a full-bleed frame with no timeline box (or no content found): the whole frame goes in the box (plain 70% scale)
  const box=b&&!b.fullFrame?b:{x:R.left,y:R.top,w:R.width,h:R.height};
  const k=Math.min(1,bw/box.w,bh/box.h);
  // origin 0 0 at the slide's top-left: screen = R + k*(p - R) + t; put the content box center on the frame center
  const cx=box.x+box.w/2-R.left,cy=box.y+box.h/2-R.top;
  const tx=W/2-R.left-k*cx,ty=H/2-R.top-k*cy;
  sl.style.scale=String(k);sl.style.translate=tx.toFixed(1)+'px '+ty.toFixed(1)+'px';
  sl.dataset.safeFit=k.toFixed(3)+' '+tx.toFixed(0)+' '+ty.toFixed(0);
}
