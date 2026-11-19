// pmre/waldorf-sequence (Alex, 2026-11-19): "Projects can come from anywhere".
// Step 0: a short Christmas Carol VR dance clip (the work someone saw). Clicks 1-4: the four Waldorf Astoria Miami
// media arrive one at a time in a 2x2 grid, the live-concierge loop last in the bottom-right slot. Click 5: the grid
// gives way to two images of the residences themselves. Every state is a CSS class, so restore/instant is exact.
SD.defineSlide({id:'pmre/waldorf-sequence',manualSteps:true,steps:5,props:{},assets:[],
provenance:['Christmas Carol clip trimmed from media/pmre/audit/carol-trailer-dance.mp4; Waldorf media restored from slides/pmre/hxr-waldorf-astoria; residence images supplied by Alex 2026-11-19 (closeup marked artist conceptual rendering).'],
css:`.sd-mod-pmre-waldorf-sequence{padding:0!important}
.wseq{position:absolute;inset:3% 4% 15.5%;color:var(--text)}
.wseq h2{margin:0;font:800 96px/1.05 var(--font-display,var(--font))}
.wseq .stage{position:absolute;left:0;right:0;top:140px;bottom:52px}
.wseq .layer{position:absolute;inset:0;transition:opacity .8s ease,transform .9s cubic-bezier(.2,.8,.2,1)}
.wseq .carol{border-radius:14px;overflow:hidden;background:#000}
.wseq .carol video,.wseq .finale img{width:100%;height:100%;object-fit:cover;display:block}
.wseq .grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:16px}
.wseq .slot{position:relative;overflow:hidden;border-radius:12px;background:#000;opacity:0;transform:scale(.92) translateY(18px);transition:opacity .7s ease,transform .8s cubic-bezier(.2,.8,.2,1)}
.wseq .slot img,.wseq .slot video{width:100%;height:100%;object-fit:cover;display:block}
.wseq .slot.on{opacity:1;transform:none}
.wseq .finale{display:grid;grid-template-columns:1.78fr 1fr;gap:16px;opacity:0;transform:scale(1.03)}
.wseq .finale figure{margin:0;overflow:hidden;border-radius:12px}
.wseq .label{position:absolute;left:0;bottom:0;font:700 26px/1 var(--font);letter-spacing:.14em;text-transform:uppercase;color:#d7b668}
.wseq[data-s="0"] .grid,.wseq[data-s="5"] .grid{opacity:0}
.wseq:not([data-s="0"]) .carol{opacity:0;transform:scale(.96)}
.wseq[data-s="5"] .finale{opacity:1;transform:none}
.wseq.noanim *{transition:none!important}`,
render(el,p,ctx){
const W='slides/pmre/hxr-waldorf-astoria/media/waldorf-astoria-miami/';
el.innerHTML=`<div class="wseq" data-s="0"><h2 class="case-title">Projects can come from anywhere</h2><div class="stage">
<div class="layer carol"><video muted loop playsinline preload="auto" poster="media/pmre/v8/carol-dance-6s.jpg" src="media/pmre/v8/carol-dance-6s.mp4" aria-label="A Christmas Carol VR: performers dance on the virtual stage"></video></div>
<div class="layer grid"><div class="slot"><img src="${W}01.jpg" alt="Waldorf Astoria Miami virtual lobby"></div><div class="slot"><img src="${W}02.jpg" alt="Waldorf Astoria Miami virtual lobby, second view"></div><div class="slot"><img src="${W}waldorf_concierge.png" alt="The live motion-capture host"></div><div class="slot"><video muted loop playsinline preload="auto" poster="${W}02.jpg" src="${W}concierge-loop.mp4" aria-label="Live virtual concierge in the Waldorf Astoria Miami lobby"></video></div></div>
<div class="layer finale"><figure><img src="media/pmre/v8/waldorf-residences-1.jpg" alt="Waldorf Astoria Residences Miami, living room rendering"></figure><figure><img src="media/pmre/v8/waldorf-residences-closeup.jpg" alt="Waldorf Astoria Residences Miami tower at dusk, artist conceptual rendering"></figure></div>
</div><div class="label">Waldorf Astoria Miami</div></div>`;
const root=el.querySelector('.wseq'),slots=[...el.querySelectorAll('.slot')],carol=el.querySelector('.carol video'),loopV=el.querySelector('.slot video');
const vid=(v,on)=>{if(on){if(v.paused)v.play().catch(()=>{});}else{v.pause();}};
let still=false;const set=(n,instant)=>{if(instant){root.classList.add('noanim');}root.dataset.s=n;slots.forEach((s,i)=>s.classList.toggle('on',n>=i+1&&n<5));
 vid(carol,n===0&&!still);vid(loopV,n===4&&!still);
 if(instant){void root.offsetWidth;root.classList.remove('noanim');}};
return{enter(){carol.currentTime=0;set(0,true);},step(n){set(n,ctx.instant)},complete(n){set(n,true)},restore(n){set(n,true)},staticFrame(){still=true;set(5,true);still=false;},leave(){carol.pause();loopV.pause();}};}});
