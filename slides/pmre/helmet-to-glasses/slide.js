// pmre/helmet-to-glasses: one head, one device that shrinks click by click from a developer-kit box to sunglasses
// while a timeline marker advances. Generic silhouettes (no product specs, nothing under NDA). 3 clicks.
SD.defineSlide({id:'pmre/helmet-to-glasses',manualSteps:true,steps:3,props:{},assets:[],
provenance:['Claude concept slide 2026-11-19 from Alex’s glasses-objection note; Rift DK1 2012 is already in the deck. Silhouettes are generic and illustrative; no PICO or NDA hardware details.'],
css:`.hg-s{position:absolute;inset:4% 4% 19%;color:var(--text)}
.hg-s h2{margin:0;font:800 100px/1.05 var(--font-display,var(--font))}
.hg-s .stage{position:absolute;left:50%;top:140px;width:1000px;height:470px;margin-left:-500px}
.hg-s .head{position:absolute;left:330px;top:40px;width:340px;height:420px;border-radius:48% 48% 44% 44%;background:#2a2420;border:3px solid #746047}
.hg-s .neck{position:absolute;left:430px;top:430px;width:140px;height:60px;background:#2a2420;border:3px solid #746047;border-top:0}
.hg-s .band,.hg-s .lens,.hg-s .strap{position:absolute;transition:all 1.1s cubic-bezier(.65,0,.25,1)}
.hg-s .band{left:330px;width:340px;top:60px;height:44px;border-radius:30px 30px 0 0;background:#3c3a40;border:3px solid #6b6872}
.hg-s .strap{left:310px;width:380px;background:#3c3a40;border:3px solid #6b6872;border-radius:12px}
.hg-s .lens{background:#1b1b22;border:5px solid #8d8a96;box-shadow:0 26px 0 -4px #0e0e12}
.hg-s .lbl{position:absolute;left:0;right:0;top:-6px;text-align:center;font:700 40px var(--font);color:#d7b668;opacity:0;transition:opacity .5s}
.hg-s .time{position:absolute;left:150px;right:150px;bottom:-30px;height:130px}
.hg-s .rail{position:absolute;left:0;right:0;top:20px;height:4px;background:#746047}
.hg-s .fill{position:absolute;left:0;top:20px;height:4px;background:#d7b668;transition:width 1.1s cubic-bezier(.65,0,.25,1)}
.hg-s .tick{position:absolute;top:0;width:320px;margin-left:-160px;text-align:center;font:600 40px/1.15 var(--font);color:var(--dim);transition:color .6s}
.hg-s .tick::before{content:'';display:block;width:24px;height:24px;margin:10px auto 14px;border-radius:50%;background:var(--bg,#14110f);border:4px solid #746047;transition:all .6s}
.hg-s .tick.on{color:var(--text)}.hg-s .tick.on::before{background:#d7b668;border-color:#d7b668}
.hg-s .note{position:absolute;right:0;top:20px;font:500 30px var(--font);color:var(--dim)}
.hg-s.noanim *{transition:none!important}`,
render(el,props,ctx){
// [lensW, lensH, gap, radius, top, strapH, bandOpacity, frameColor, shadow]
const S=[[235,205,0,16,160,70,1,'#8d8a96',30],[180,140,0,42,190,40,1,'#8d8a96',18],[155,105,0,52,205,22,0,'#8d8a96',10],[140,84,30,40,218,8,0,'#d7b668',0]];
const ticks=['Rift DK1 era<br>2013','Standalone<br>headsets','Lighter<br>headsets','Glasses<br>now'];
el.innerHTML=`<div class="hg-s" data-s="-1"><h2>From helmet to sunglasses</h2><span class="note">Silhouettes illustrative</span>
<div class="stage"><div class="neck"></div><div class="head"></div><div class="band"></div><div class="strap"></div><div class="lens l"></div><div class="lens r"></div></div>
<div class="time"><div class="rail"></div><div class="fill"></div>${ticks.map((t,i)=>`<div class="tick" style="left:${i*100/3}%">${t}</div>`).join('')}</div></div>`;
const root=el.querySelector('.hg-s'),q=s=>el.querySelector(s),L=q('.lens.l'),R=q('.lens.r'),band=q('.band'),strap=q('.strap'),fill=q('.fill'),tk=[...el.querySelectorAll('.tick')];
const set=n=>{root.dataset.s=n;const k=Math.max(0,n),[w,h,g,r,t,sh,bo,fc,sd]=S[k];
 const solo=g===0; // a box headset: both halves read as one slab
 L.style.cssText=`left:${500-g/2-w}px;top:${t}px;width:${w}px;height:${h}px;border-radius:${solo?`${r}px 0 0 ${r}px`:`${r}px`};border-color:${fc};box-shadow:0 ${sd}px 0 -4px #0e0e12;${solo?'border-right-width:0;':''}`;
 R.style.cssText=`left:${500+g/2}px;top:${t}px;width:${w}px;height:${h}px;border-radius:${solo?`0 ${r}px ${r}px 0`:`${r}px`};border-color:${fc};box-shadow:0 ${sd}px 0 -4px #0e0e12;${solo?'border-left-width:0;':''}`;
 strap.style.cssText=`top:${t+h/2-sh/2}px;height:${sh}px;border-color:${k===3?'#d7b668':'#6b6872'};background:${k===3?'#d7b668':'#3c3a40'}`;
 band.style.opacity=bo;fill.style.width=(k*100/3)+'%';tk.forEach((e,i)=>e.classList.toggle('on',i===k));};
return{enter(){root.classList.add('noanim');set(0);void root.offsetWidth;root.classList.remove('noanim');},
step(n){set(n)},complete(n){set(n)},restore(n){set(n)},staticFrame(){root.classList.add('noanim');set(3);void root.offsetWidth;root.classList.remove('noanim');}};}});
