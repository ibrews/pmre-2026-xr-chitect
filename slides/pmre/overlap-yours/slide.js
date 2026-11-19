// pmre/overlap-yours: Alex's architecture/theater/tech Venn shrinks into a corner badge; the audience's own
// photography + X + spatial-media Venn grows in its place (X cycles through niches from this room), then the
// center lights up as their lane. 2 clicks; CSS transitions only, so forward/back/re-entry are smooth.
SD.defineSlide({id:'pmre/overlap-yours',manualSteps:true,steps:2,props:{},assets:[],
provenance:['Claude concept slide 2026-11-19 from Alex’s notes: weird overlaps make you memorable; niches reuse the sourced attendee-niches slide (Dave Koch aviation, Krisse & Rich Newport Lake Martin, Devon Pastorius performance, Via Lloyd-George architect).'],
css:`.ov-y{position:absolute;inset:4% 4% 19%;color:var(--text)}
.ov-y .hd{position:relative;height:120px}
.ov-y h2{position:absolute;left:0;top:0;margin:0;font:800 104px/1.05 var(--font-display,var(--font));transition:opacity .6s ease,transform .8s cubic-bezier(.2,.8,.2,1);white-space:nowrap}
.ov-y h2.b,.ov-y[data-s="0"] h2.b,.ov-y[data-s="-1"] h2.b{opacity:0;transform:translateY(24px)}
.ov-y[data-s="1"] h2.b,.ov-y[data-s="2"] h2.b{opacity:1;transform:none}
.ov-y[data-s="1"] h2.a,.ov-y[data-s="2"] h2.a{opacity:0;transform:translateY(-24px)}
.ov-y[data-s="-1"] h2.a{opacity:0}
.ov-y svg{position:absolute;left:0;right:0;top:130px;bottom:60px;width:100%;height:calc(100% - 190px);overflow:visible}
.ov-y .grp{transition:transform 1.2s cubic-bezier(.65,0,.25,1),opacity .9s ease}
.ov-y .mine{transform:translate(0,0) scale(1);transform-origin:850px 300px}
.ov-y[data-s="-1"] .mine{opacity:0;transform:scale(.6)}
.ov-y[data-s="1"] .mine,.ov-y[data-s="2"] .mine{transform:translate(720px,130px) scale(.34)}
.ov-y .yours{opacity:0;transform:scale(.4);transform-origin:850px 330px}
.ov-y[data-s="1"] .yours,.ov-y[data-s="2"] .yours{opacity:1;transform:scale(1)}
.ov-y .lab{font:700 30px var(--font);letter-spacing:.12em;fill:var(--text)}
.ov-y .big{font:800 44px var(--font-display,var(--font));fill:#d7b668}
.ov-y .tag{font:600 26px var(--font);fill:var(--dim);letter-spacing:.14em}
.ov-y .cyc text{opacity:0;}.ov-y .cyc text:first-child{opacity:1}.ov-y .cyc text{animation:ovcyc 8s infinite}
.ov-y .cyc text:nth-child(2){animation-delay:2s}.ov-y .cyc text:nth-child(3){animation-delay:4s}.ov-y .cyc text:nth-child(4){animation-delay:6s}
@keyframes ovcyc{0%,22%{opacity:1}26%,96%{opacity:0}100%{opacity:1}}
.ov-y .core{opacity:0;transition:opacity .8s ease .2s}
.ov-y[data-s="2"] .core{opacity:1}
.ov-y .glow{transform-origin:850px 360px;transform:scale(.2);opacity:0;transition:transform 1s cubic-bezier(.2,.8,.2,1),opacity .8s}
.ov-y[data-s="2"] .glow{transform:scale(1);opacity:1}
.ov-y .foot{position:absolute;left:0;right:0;bottom:0;font:500 46px/1.25 var(--font);text-align:center;color:var(--dim);opacity:0;transition:opacity .8s ease .4s}
.ov-y[data-s="2"] .foot{opacity:1}
.ov-y .foot b{color:#d7b668}
.ov-y .mine-tag{opacity:0;transition:opacity .6s}.ov-y[data-s="1"] .mine-tag,.ov-y[data-s="2"] .mine-tag{opacity:1}
.ov-y.noanim *{transition:none!important}`,
render(el,props,ctx){
el.innerHTML=`<div class="ov-y" data-s="-1"><div class="hd"><h2 class="a">My weird overlap became the job</h2><h2 class="b">Now find yours</h2></div>
<svg viewBox="0 0 1700 660" role="img" aria-label="Venn diagram: architecture, theater and technology shrink; photography, your niche and spatial media grow">
<defs><radialGradient id="ovg"><stop offset="0" stop-color="#d7b668" stop-opacity=".75"/><stop offset="1" stop-color="#d7b668" stop-opacity="0"/></radialGradient></defs>
<g class="grp mine">
 <circle cx="760" cy="250" r="190" fill="#00d4ff1f" stroke="#00d4ff" stroke-width="4"/>
 <circle cx="940" cy="250" r="190" fill="#f43f5e1f" stroke="#f43f5e" stroke-width="4"/>
 <circle cx="850" cy="400" r="190" fill="#a78bfa1f" stroke="#a78bfa" stroke-width="4"/>
 <g text-anchor="middle" class="lab"><text x="690" y="200">ARCHITECTURE</text><text x="1010" y="200">THEATER</text><text x="850" y="520">TECHNOLOGY</text></g>
 <text x="850" y="322" text-anchor="middle" class="big">XR studio</text>
 <text class="tag mine-tag" x="850" y="700" text-anchor="middle" style="font-size:66px">MINE</text>
</g>
<g class="grp yours">
 <circle class="glow" cx="850" cy="360" r="170" fill="url(#ovg)"/>
 <circle cx="740" cy="270" r="210" fill="#00d4ff1f" stroke="#00d4ff" stroke-width="4"/>
 <circle cx="960" cy="270" r="210" fill="#f43f5e1f" stroke="#f43f5e" stroke-width="4"/>
 <circle cx="850" cy="450" r="210" fill="#a78bfa1f" stroke="#a78bfa" stroke-width="4"/>
 <g text-anchor="middle" class="lab"><text x="610" y="210">PHOTOGRAPHY</text><text x="850" y="600">SPATIAL MEDIA</text></g>
 <text x="1200" y="232" class="tag" style="font-size:32px">YOUR ___</text>
 <g class="cyc lab" style="font-size:44px;fill:#f43f5e"><text x="1190" y="290">AVIATION</text><text x="1190" y="290">LAKE MARTIN</text><text x="1190" y="290">PERFORMANCE</text><text x="1190" y="290">ARCHITECTURE</text></g>
 <g class="core" text-anchor="middle"><text x="850" y="350" class="big" style="font-size:50px">YOUR</text><text x="850" y="402" class="big" style="font-size:50px">LANE</text></g>
</g></svg>
<div class="foot">Anyone can be hired to shoot a listing. <b>Only you</b> sit in your overlap.</div></div>`;
const root=el.querySelector('.ov-y');
const set=n=>{root.dataset.s=n;};
return{enter(){root.classList.add('noanim');set(-1);void root.offsetWidth;root.classList.remove('noanim');if(ctx.instant)set(0);else ctx.clock.after(60,()=>set(0));},
step(n){set(n)},complete(n){set(n)},restore(n){const c=root.querySelector('.cyc');c.style.display='none';void c.getBoundingClientRect();c.style.display='';set(n)},staticFrame(){set(2)}};}});
