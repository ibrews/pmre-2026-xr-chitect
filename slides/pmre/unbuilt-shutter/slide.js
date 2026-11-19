// pmre/unbuilt-shutter: plan linework draws on, tilts into 3D while floors extrude, then a camera shutter fires and
// the photoreal rendering of the then-unbuilt Four Seasons Lake Austin resolves in a viewfinder. 3 clicks.
// Alex 2026-11-19: it now OPENS on the MIA 'Find the Shot' camera-toy idea (top-down camera frustum sweeping a set),
// with architecture (walls, columns, stair, door) added, then flows into Plan -> Model -> Photograph.
// Linework is schematic (not the project's drawings); the rendering reuses the deck's credited DBOX image.
SD.defineSlide({id:'pmre/unbuilt-shutter',manualSteps:true,steps:4,props:{},assets:[],
provenance:['Claude concept slide 2026-11-19; schematic linework is invented and labeled; before/after hillside images are conceptual illustrations made by Alex (2026-11-19), no project named.'],
css:`.ub-s{position:absolute;inset:4% 4% 19%;color:var(--text)}
.ub-s h2{margin:0;font:800 100px/1.05 var(--font-display,var(--font))}
.ub-s .legend{position:absolute;left:0;top:180px;width:340px;display:flex;flex-direction:column;gap:22px}
.ub-s .legend div{font:700 50px/1.1 var(--font);color:var(--dim);opacity:.45;transition:opacity .6s,color .6s,transform .6s;transform-origin:left}
.ub-s .legend b{display:block;font:800 30px var(--font);color:#d7b668;letter-spacing:.12em;margin-bottom:6px}
.ub-s .legend div.on{opacity:1;color:var(--text);transform:scale(1.04)}
.ub-s .legend p{font:500 34px/1.3 var(--font);color:var(--dim);margin:10px 0 0;opacity:0;transition:opacity .8s .6s}
.ub-s[data-s="2"] .legend p,.ub-s[data-s="3"] .legend p{opacity:1}
.ub-s .stage{position:absolute;left:380px;right:0;top:170px;bottom:0;perspective:2200px;overflow:hidden;border-radius:14px;background:#0b1622}
.ub-s .plane{position:absolute;left:50%;top:50%;width:900px;height:520px;margin:-260px 0 0 -450px;transform-style:preserve-3d;transition:transform 1.6s cubic-bezier(.65,0,.25,1);
 background-image:linear-gradient(#00d4ff18 1px,transparent 1px),linear-gradient(90deg,#00d4ff18 1px,transparent 1px);background-size:30px 30px;border:2px solid #00d4ff55;transform:scale(1.12)}
.ub-s[data-s="1"] .plane,.ub-s[data-s="2"] .plane{transform:translateY(60px) rotateX(58deg) rotateZ(-26deg) scale(.95)}
.ub-s .plane svg{position:absolute;inset:0;width:100%;height:100%}
.ub-s .ln{fill:none;stroke:#7fe6ff;stroke-width:3;stroke-dasharray:1800;stroke-dashoffset:1800;transition:stroke-dashoffset 2.2s ease}
.ub-s .ln.w{stroke:#3b82c4;stroke-width:2}
.ub-s[data-s="0"] .ln,.ub-s[data-s="1"] .ln,.ub-s[data-s="2"] .ln{stroke-dashoffset:0}
.ub-s .bld{position:absolute;transform-style:preserve-3d}
.ub-s .slab{position:absolute;inset:0;border:2px solid #d7b668;background:#d7b6681f;transform:translateZ(0);opacity:0;transition:transform 1.2s cubic-bezier(.2,.8,.2,1) .5s,opacity .5s .5s}
.ub-s[data-s="1"] .slab,.ub-s[data-s="2"] .slab{transform:translateZ(var(--z));opacity:1}
.ub-s .tag{position:absolute;left:24px;bottom:18px;font:600 24px var(--font);color:#7fe6ffaa;letter-spacing:.1em}
.ub-s .photo{position:absolute;inset:0;background:#000 center/cover;opacity:0;transform:scale(1.06);transition:opacity .9s ease .15s,transform 2.4s cubic-bezier(.2,.8,.2,1)}
.ub-s[data-s="2"] .photo{opacity:1;transform:none}
.ub-s .vf{position:absolute;inset:26px;pointer-events:none;opacity:0;transition:opacity .4s}
.ub-s[data-s="1"] .vf,.ub-s[data-s="2"] .vf{opacity:1}
.ub-s .vf i{position:absolute;width:60px;height:60px;border:0 solid #fff}
.ub-s .vf i:nth-child(1){left:0;top:0;border-width:4px 0 0 4px}.ub-s .vf i:nth-child(2){right:0;top:0;border-width:4px 4px 0 0}
.ub-s .vf i:nth-child(3){left:0;bottom:0;border-width:0 0 4px 4px}.ub-s .vf i:nth-child(4){right:0;bottom:0;border-width:0 4px 4px 0}
.ub-s .vf em{position:absolute;right:20px;top:16px;font:700 24px var(--font);font-style:normal;color:#fff;letter-spacing:.1em}
.ub-s .vf em::before{content:'';display:inline-block;width:14px;height:14px;border-radius:50%;background:#f43f5e;margin-right:10px}
.ub-s .flash{position:absolute;inset:0;background:#fff;opacity:0;pointer-events:none}
.ub-s .flash.go{animation:ubflash .7s ease-out}
@keyframes ubflash{0%{opacity:0}12%{opacity:.95}100%{opacity:0}}
.ub-s .credit{position:absolute;right:100px;bottom:36px;font:500 26px var(--font);color:#fff;text-shadow:0 1px 6px #000;opacity:0;transition:opacity .8s 1s}
.ub-s[data-s="2"] .credit{opacity:.9}.ub-s .tag{transition:opacity .4s}.ub-s[data-s="1"] .tag,.ub-s[data-s="2"] .tag{opacity:0}
.ub-s.noanim *{transition:none!important}
/* Alex 2026-11-19: conceptual before/after (his own illustrations, no project named): photo = the bare hillside, one more click wipes to the built version */
.ub-s .photo.after{opacity:1;transform:none;clip-path:inset(0 100% 0 0);transition:clip-path 1.6s cubic-bezier(.65,0,.25,1)}
.ub-s[data-s="3"] .photo:not(.after){opacity:1;transform:none}.ub-s[data-s="3"] .photo.after{clip-path:inset(0 0 0 0)}
.ub-s[data-s="3"] .vf{opacity:1}.ub-s[data-s="3"] .tag{opacity:0}
.ub-s .credit{right:auto;left:60px;font-weight:700;letter-spacing:.14em;text-transform:uppercase}.ub-s .after-tag{opacity:0!important}.ub-s[data-s="3"] .credit:not(.after-tag){opacity:0}.ub-s[data-s="3"] .after-tag{opacity:.9!important}
.ub-s .plane{transition:transform 1.6s cubic-bezier(.65,0,.25,1),opacity .8s ease}.ub-s[data-s="pre"] .plane,.ub-s[data-s="-1"] .plane{opacity:0}
.ub-s .pre{position:absolute;inset:0;width:100%;height:100%;transition:opacity .9s ease}.ub-s:not([data-s="pre"]) .pre{opacity:0}
.ub-s .pre .wall{fill:none;stroke:#7fe6ff;stroke-width:6;stroke-linecap:square}.ub-s .pre .thin{fill:none;stroke:#3b82c4;stroke-width:2.5}
.ub-s .pre .col{fill:#7fe6ff}.ub-s .pre text{font:700 22px var(--font);letter-spacing:.14em;fill:#7fe6ffaa}
.ub-s .pre .cone{transform-box:view-box;transform-origin:693px 520px;animation:ubsweep 3.6s ease-in-out infinite alternate}
@keyframes ubsweep{from{transform:rotate(-13deg)}to{transform:rotate(13deg)}}
.ub-s .pre .cone path{fill:#00d4ff22;stroke:#00d4ff;stroke-width:3}.ub-s[data-s="pre"] .tag{opacity:0}`,
render(el,props,ctx){
const B=[[60,50,620,80,6],[110,200,170,64,3],[320,186,170,64,3],[530,200,170,64,3],[170,312,170,64,2],[390,300,170,64,2],[610,318,170,64,2]];
const slabs=(n)=>Array.from({length:n},(_,k)=>`<div class="slab" style="--z:${(k+1)*26}px"></div>`).join('');
el.innerHTML=`<div class="ub-s" data-s="-1"><h2>Photograph a place that doesn’t exist yet</h2>
<div class="legend"><div data-k="pre"><b>00</b>Shot</div><div data-k="0"><b>01</b>Plan</div><div data-k="1"><b>02</b>Model</div><div data-k="2"><b>03</b>Photograph</div><p>Same eye for light, angle and lens.<br>No building required.</p></div>
<div class="stage"><svg class="pre" viewBox="0 0 1386 586" preserveAspectRatio="xMidYMid meet" aria-label="Top-down set: walls, columns, a stair and three performers; a camera at the bottom sweeps its frame across the room">
<rect class="thin" x="240" y="40" width="906" height="430"/>
<path class="wall" d="M240 40 H1146 V470 H760 M626 470 H240 Z"/><path class="thin" d="M626 470 A134 134 0 0 1 760 336"/>
${[[420,170],[693,170],[966,170],[420,340],[966,340]].map(c=>`<rect class="col" x="${c[0]-14}" y="${c[1]-14}" width="28" height="28"/>`).join('')}
<g class="thin">${Array.from({length:7},(_,k)=>`<path d="M${1000+k*18} 60 V160"/>`).join('')}<path d="M1000 60 H1126 V160 H1000"/></g>
<text x="270" y="78">BACKDROP</text><path class="thin" d="M270 92 H700" stroke-dasharray="10 8"/>
<circle cx="560" cy="250" r="16" fill="#e5bb61"/><circle cx="700" cy="300" r="18" fill="#f97316"/><circle cx="830" cy="240" r="18" fill="#f43f5e"/>
<g class="cone"><path d="M693 520 L470 40 H916 Z"/></g>
<rect x="676" y="506" width="34" height="28" rx="5" fill="#00d4ff"/><circle cx="693" cy="520" r="7" fill="#0b1622"/>
<text x="24" y="566">FIND THE SHOT · CAMERA TOP VIEW</text></svg><div class="plane"><svg viewBox="0 0 900 520">
<path class="ln w" d="M0 450 C200 425 420 470 620 440 S860 430 900 445"/>
${B.map(b=>`<rect class="ln" x="${b[0]}" y="${b[1]}" width="${b[2]}" height="${b[3]}"/>`).join('')}
<path class="ln" d="M380 130 L410 186 M440 264 L470 300 M300 376 L330 440"/></svg>
${B.map(b=>`<div class="bld" style="left:${b[0]}px;top:${b[1]}px;width:${b[2]}px;height:${b[3]}px">${slabs(b[4])}</div>`).join('')}</div>
<span class="tag">SCHEMATIC LINEWORK</span>
<div class="photo" style="background-image:url('media/pmre/v8/unbuilt-before.jpg')"></div><div class="photo after" style="background-image:url('media/pmre/v8/unbuilt-after.jpg')"></div>
<div class="vf"><i></i><i></i><i></i><i></i><em>REC</em></div><div class="flash"></div>
<span class="credit">Before</span><span class="credit after-tag">After</span></div></div>`;
const root=el.querySelector('.ub-s'),leg=[...el.querySelectorAll('.legend div')],flash=el.querySelector('.flash');
// deck step 0 = the camera-toy prelude ('pre'); steps 1-3 = the original Plan / Model / Photograph states 0-2
const S=n=>n<=0?'pre':n-1,set=v=>{root.dataset.s=v;leg.forEach(d=>d.classList.toggle('on',d.dataset.k===String(v===3?2:v)));};
const shutter=()=>{flash.classList.remove('go');void flash.offsetWidth;flash.classList.add('go');const c=ctx.audio&&ctx.audio();if(!c)return;try{const t=c.currentTime,len=c.sampleRate*.09,b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(let i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3);const s=c.createBufferSource();s.buffer=b;const f=c.createBiquadFilter();f.type='highpass';f.frequency.value=1800;const g=c.createGain();g.gain.value=.012;s.connect(f);f.connect(g);g.connect(c.destination);s.start(t);const s2=c.createBufferSource();s2.buffer=b;const g2=c.createGain();g2.gain.value=.008;s2.connect(f);f.connect(g2);g2.connect(c.destination);s2.start(t+.07);}catch(e){}};
return{enter(){root.classList.add('noanim');set(-1);void root.offsetWidth;root.classList.remove('noanim');if(ctx.instant)set('pre');else ctx.clock.after(60,()=>set('pre'));},
step(n){set(S(n));if(n===3&&!ctx.instant)shutter();},complete(n){set(S(n))},restore(n){set(S(n))},staticFrame(){root.classList.add('noanim');set(3);void root.offsetWidth;root.classList.remove('noanim');}};}});
