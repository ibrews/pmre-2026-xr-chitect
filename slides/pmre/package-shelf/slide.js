// pmre/package-shelf: a staircase of the services a listing-media shop sells, built upward click by click from core
// media to a premium Unreal experience. Illustrative, no prices: the package-table slide carries the numbers.
SD.defineSlide({id:'pmre/package-shelf',manualSteps:true,steps:4,props:{},assets:[],
provenance:['Claude concept slide 2026-11-19 from the PMRE audience brief (“present XR as the top shelf of what they already do”) and Alex’s package notes; ordering mirrors the existing package-table slide. Illustrative only.'],
css:`.pk-s{position:absolute;inset:4% 4% 19%;color:var(--text)}
.pk-s h2{margin:0;font:800 100px/1.05 var(--font-display,var(--font))}
.pk-s .sub{margin:14px 0 0;font:500 40px/1.3 var(--font);color:var(--dim)}
.pk-s .stairs{position:absolute;left:0;right:150px;bottom:70px;height:560px;display:grid;grid-template-columns:repeat(7,1fr);gap:16px;align-items:end}
.pk-s .st{position:relative;display:flex;flex-direction:column;justify-content:flex-end;height:100%}
.pk-s .blk{border-radius:10px 10px 0 0;transform:scaleY(0);transform-origin:bottom;transition:transform .9s cubic-bezier(.2,.8,.2,1),box-shadow .8s;background:var(--c);opacity:.9}
.pk-s .lbl{font:700 38px/1.1 var(--font);text-align:center;margin:0 0 14px;opacity:0;transform:translateY(20px);transition:opacity .6s ease .35s,transform .7s ease .35s}
.pk-s .st.on .blk{transform:scaleY(1)}.pk-s .st.on .lbl{opacity:1;transform:none}
.pk-s .st.top .blk{box-shadow:0 0 0 rgba(215,182,104,0)}
.pk-s[data-s="4"] .st.top .blk{box-shadow:0 0 60px rgba(215,182,104,.75)}
.pk-s .st.top .lbl{color:#d7b668}
.pk-s .base{position:absolute;left:0;right:150px;bottom:62px;height:4px;background:#746047}
.pk-s .brk{position:absolute;bottom:0;font:600 34px var(--font);text-align:center;border-top:3px solid;padding-top:10px;opacity:0;transition:opacity .7s ease .3s}
.pk-s .today{left:0;width:calc(3/7*(100% - 150px) - 10px);border-color:#746047;color:var(--dim)}
.pk-s .xr{left:calc(3/7*(100% - 150px) + 6px);width:calc(4/7*(100% - 150px) - 16px);border-color:#d7b668;color:#d7b668}
.pk-s[data-s="0"] .today,.pk-s[data-s="1"] .today,.pk-s[data-s="2"] .today,.pk-s[data-s="3"] .today,.pk-s[data-s="4"] .today{opacity:1}
.pk-s[data-s="2"] .xr,.pk-s[data-s="3"] .xr,.pk-s[data-s="4"] .xr{opacity:1}
.pk-s .arrow{position:absolute;right:0;bottom:70px;height:560px;width:110px;display:flex;flex-direction:column;align-items:center;justify-content:space-between;font:700 30px/1.15 var(--font);color:#d7b668;text-align:center;letter-spacing:.06em}
.pk-s .arrow i{flex:1;width:6px;margin:14px 0;background:linear-gradient(#d7b668,#d7b66800);border-radius:3px}
.pk-s .note{position:absolute;right:0;top:20px;font:500 30px var(--font);color:var(--dim)}
.pk-s.noanim *{transition:none!important}`,
render(el,props,ctx){
const tiers=[['Photos','#e9dcc6',.22,0],['Video','#e9dcc6',.32,0],['Drone','#e9dcc6',.42,0],['3D tour +<br>floor plan','#00d4ff',.54,1],['Splat<br>walkthrough','#22b8cf',.66,2],['VR / MR<br>visit','#a78bfa',.72,3],['Premium<br>Unreal','#d7b668',.84,4]];
el.innerHTML=`<div class="pk-s" data-s="-1"><h2>The top shelf of what you already sell</h2><p class="sub">Same capture. More ways to step inside it.</p><span class="note">Illustrative</span>
<div class="stairs">${tiers.map((t,i)=>`<div class="st${i===6?' top':''}" data-at="${t[3]}"><p class="lbl">${t[0]}</p><div class="blk" style="--c:${t[1]};height:${t[2]*100}%"></div></div>`).join('')}</div>
<div class="base"></div><div class="brk today">What you sell today</div><div class="brk xr">Spatial tiers: higher value per listing</div>
<div class="arrow">CLIENT<br>VALUE<i></i></div></div>`;
const root=el.querySelector('.pk-s'),sts=[...el.querySelectorAll('.st')];
// Soft rising chime per tier (Alex 2026-11-19: 'little light sounds'); kept well under the slide-change whoosh.
const chime=n=>{if(ctx.instant)return;const a=ctx.audio&&ctx.audio();if(!a)return;const t=a.currentTime,f=[660,784,880,988,1175][n]||880;[1,2].forEach((m,k)=>{const o=a.createOscillator(),g=a.createGain();o.type='sine';o.frequency.value=f*m;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(k?.006:.02,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+.7);o.connect(g).connect(a.destination);o.start(t);o.stop(t+.72);});};
const set=n=>{root.dataset.s=n;sts.forEach(s=>s.classList.toggle('on',n>=0&&+s.dataset.at<=n));};
return{enter(){root.classList.add('noanim');set(-1);void root.offsetWidth;root.classList.remove('noanim');if(ctx.instant)set(0);else ctx.clock.after(60,()=>set(0));},
step(n){set(n);chime(n)},complete(n){set(n)},restore(n){set(n)},staticFrame(){set(4)}};}});
