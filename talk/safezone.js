/* Venue safe zone (PMRE 2026 Presenter Guidelines: 1920x1080 concave screen, all type and key info inside the centered
   1344x756 box = 70%). ?safe=70 (or Options -> "Venue safe zone") scales every slide's content into that centered box
   while the page background and the .bg layer still fill the frame. Off by default for the web deck; the venue exporter
   (tools/export_venue_package.mjs) always turns it on. Other features position themselves with the CSS vars
   --safe-inset-x / --safe-inset-y (0 when off) and --safe-scale (1 when off).
   ?safezone draws the 1344x756 QA box on top of everything (works with or without ?safe). */
function applySafeZone(pick){
  const q=new URLSearchParams(location.search);
  let pct=pick&&pick.safe&&pick.safe!=='off'?+pick.safe:NaN;
  const raw=q.get('safe');if(raw&&/^\d{2,3}$/.test(raw))pct=+raw;  // ?safe=80 etc. work even if not a picker choice
  if(!document.getElementById('sd-safe-css')){
    const st=document.createElement('style');st.id='sd-safe-css';
    st.textContent=':root{--safe-scale:1;--safe-inset-x:0px;--safe-inset-y:0px}'+
      /* scale (not transform) composes with the deck's slideIn/zoom transform animations; origin = slide center */
      'body.sd-safe #deck .slide{scale:var(--safe-scale);transform-origin:50% 50%}'+
      'body.sd-safe #brand{left:calc(var(--safe-inset-x) + 24px);bottom:calc(var(--safe-inset-y) + 18px)}'+
      'body.sd-safe #counter{right:calc(var(--safe-inset-x) + 24px);bottom:calc(var(--safe-inset-y) + 18px)}'+
      '#sd-safezone{position:fixed;left:15vw;top:15vh;width:70vw;height:70vh;box-sizing:border-box;border:2px dashed #ff2d55;z-index:2147483000;pointer-events:none;'+
      'box-shadow:0 0 0 100vmax rgba(255,45,85,.10)}'+
      '#sd-safezone span{position:absolute;left:8px;top:6px;font:600 13px/1 system-ui,sans-serif;color:#ff2d55;letter-spacing:.04em}';
    document.head.appendChild(st);
  }
  const on=pct>=40&&pct<100,s=on?pct/100:1,root=document.documentElement.style;
  document.body.classList.toggle('sd-safe',on);document.body.dataset.safe=on?String(pct):'off';
  root.setProperty('--safe-scale',String(s));
  root.setProperty('--safe-inset-x',((1-s)/2*100).toFixed(3)+'vw');root.setProperty('--safe-inset-y',((1-s)/2*100).toFixed(3)+'vh');
  if(q.has('safezone')&&!document.getElementById('sd-safezone')){
    const z=document.createElement('div');z.id='sd-safezone';z.innerHTML='<span>PMRE safe zone 1344×756</span>';document.body.appendChild(z);
  }
}
