// pmre/brief-closer: Brandon's brief appears as a quote, condenses into a kicker, and unfolds into three answers
// (how we live, how we do business, how you create and market), then hands off to the DIY / hire-us beats. 2 clicks.
SD.defineSlide({id:'pmre/brief-closer',manualSteps:true,steps:2,props:{},assets:[],
provenance:['Claude concept slide 2026-11-19. Quote: Brandon’s brief as recorded verbatim in Alex’s notes and the property-future speaker notes; the three answers are presenter forecasts, not claims.'],
css:`.bc-s{position:absolute;inset:4% 4% 19%;color:var(--text)}
.bc-s .q{position:absolute;left:0;right:0;top:90px;font:600 96px/1.18 var(--font-display,var(--font));transition:all 1.1s cubic-bezier(.65,0,.25,1);transform-origin:left top}
.bc-s .q em{font-style:normal;color:#d7b668}
.bc-s .q small{display:block;margin-top:30px;font:500 40px var(--font);color:var(--dim);transition:opacity .5s}
.bc-s[data-s="1"] .q,.bc-s[data-s="2"] .q{opacity:0;transform:translateY(-60px) scale(.9)}
.bc-s .ans{position:absolute;left:0;top:0;margin:0;font:800 100px/1.05 var(--font-display,var(--font));opacity:0;transform:translateY(40px);transition:opacity .8s .3s,transform .9s cubic-bezier(.2,.8,.2,1) .3s}.bc-s[data-s="1"] .ans,.bc-s[data-s="2"] .ans{opacity:1;transform:none}
.bc-s[data-s="1"] .q small,.bc-s[data-s="2"] .q small{opacity:0}
.bc-s[data-s="-1"] .q{opacity:0;transform:translateY(30px)}
.bc-s .cols{position:absolute;left:0;right:0;top:190px;display:grid;grid-template-columns:repeat(3,1fr);gap:48px}
.bc-s .col{border-top:5px solid var(--c);padding-top:26px;opacity:0;transform:translateY(50px);transition:opacity .8s ease,transform .9s cubic-bezier(.2,.8,.2,1)}
.bc-s .col:nth-child(2){transition-delay:.18s}.bc-s .col:nth-child(3){transition-delay:.36s}
.bc-s[data-s="1"] .col,.bc-s[data-s="2"] .col{opacity:1;transform:none}
.bc-s .col svg{width:110px;height:110px;color:var(--c);display:block;margin-bottom:18px}
.bc-s .col h3{margin:0 0 16px;font:800 72px/1 var(--font-display,var(--font));color:var(--c)}
.bc-s .col p{margin:0;font:500 42px/1.25 var(--font)}
.bc-s .end{position:absolute;left:0;right:0;bottom:0;text-align:center;font:800 58px/1.1 var(--font-display,var(--font));color:#d7b668;opacity:0;transform:scale(.94);transition:opacity .8s,transform .9s cubic-bezier(.2,.8,.2,1)}
.bc-s[data-s="2"] .end{opacity:1;transform:none}
.bc-s.noanim *{transition:none!important}`,
render(el,props,ctx){
const ic={live:'<path d="M10 46 L45 16 L80 46 M20 38 V78 H70 V38 M38 78 V56 H52 V78" />',biz:'<circle cx="30" cy="28" r="11"/><circle cx="62" cy="28" r="11"/><path d="M10 76 C12 54 48 54 46 76 M44 76 C42 54 80 54 82 76"/>',media:'<rect x="10" y="26" width="58" height="44" rx="6"/><circle cx="39" cy="48" r="12"/><path d="M68 40 L84 30 V66 L68 56"/>'};
const svg=k=>`<svg viewBox="0 0 92 92" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" stroke-linecap="round">${ic[k]}</svg>`;
el.innerHTML=`<div class="bc-s" data-s="-1"><div class="q">How will AR and VR change the way we <em>live</em>, <em>do&nbsp;business</em>, and <em>market&nbsp;properties</em>?<small>Brandon’s challenge for this talk</small></div>
<h2 class="ans">Your next tier is a place</h2><div class="cols">
<div class="col" style="--c:#00d4ff">${svg('live')}<h3>Live</h3><p>Try the layout before you renovate. Visit before you fly.</p></div>
<div class="col" style="--c:#a78bfa">${svg('biz')}<h3>Do business</h3><p>Bring remote clients into the same space. Decide together.</p></div>
<div class="col" style="--c:#f43f5e">${svg('media')}<h3>Your media</h3><p>Capture once. Offer a visit, more views and a reason to choose the property.</p></div></div>
<div class="end">So start building. Bring us the ambitious ones.</div></div>`;
const root=el.querySelector('.bc-s');const set=n=>{root.dataset.s=n;};
return{enter(){root.classList.add('noanim');set(-1);void root.offsetWidth;root.classList.remove('noanim');if(ctx.instant)set(0);else ctx.clock.after(60,()=>set(0));},
step(n){set(n)},complete(n){set(n)},restore(n){set(n)},staticFrame(){root.classList.add('noanim');set(2);void root.offsetWidth;root.classList.remove('noanim');}};}});
