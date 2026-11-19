// QA: deck-wide sfx loudness vs the slide-change whoosh. Usage: node tools/qa_sfx_sweep.mjs OUT.json [waitms] [idx,idx] (needs the deck served at localhost:8765)
// node sfxsweep.mjs OUT.json [waitms] [idx,idx]  -> per visible slide+step: peak / 100ms-window RMS of all Web Audio reaching destination (whoosh muted), vs the whoosh
import {loadPlaywright,CHROME} from '/Users/alex/Archives/pmre2026-2026-10/v8/deck/tools/venue_capture.mjs';
import fs from 'node:fs';
const [out,wait='3500',only='']=process.argv.slice(2);
const {chromium}=loadPlaywright();const b=await chromium.launch({executablePath:CHROME,headless:true,args:['--autoplay-policy=no-user-gesture-required']});
const p=await b.newPage({viewport:{width:1920,height:1080}});const errs=[];p.on('pageerror',e=>errs.push(String(e)));
await p.addInitScript(()=>{
 const top=window.top;top.__m=top.__m||{peak:0,ms:0,n:0};
 const taps=new WeakMap();const orig=AudioNode.prototype.connect;
 AudioNode.prototype.connect=function(dest,...r){
  if(dest instanceof AudioDestinationNode){const c=dest.context;let t=taps.get(c);
   if(!t){t=c.createScriptProcessor(4096,2,2);const win=Math.round(c.sampleRate*.1);let buf=[];
    t.onaudioprocess=e=>{const M=top.__m;for(let ch=0;ch<e.inputBuffer.numberOfChannels;ch++){const d=e.inputBuffer.getChannelData(ch);let sq=0;for(let i=0;i<d.length;i++){const v=d[i];if(Math.abs(v)>M.peak)M.peak=Math.abs(v);sq+=v*v;}if(ch===0){const rms=Math.sqrt(sq/d.length);if(rms>M.ms)M.ms=rms;}}};
    orig.call(t,dest);taps.set(c,t);}
   orig.call(this,t);}
  return orig.call(this,dest,...r);};
});
await p.goto('http://localhost:8765/?cut=full&ai=on&safe=70&theme=house',{waitUntil:'load'});await p.waitForTimeout(1500);
await p.mouse.click(5,5);
// whoosh reference through the same meter
await p.evaluate(()=>{window.__m={peak:0,ms:0};playWhoosh();});await p.waitForTimeout(900);
const W=await p.evaluate(()=>({...window.__m}));console.log('WHOOSH',JSON.stringify(W));
await p.evaluate(()=>{window.__origWhoosh=playWhoosh;window.playWhoosh=()=>{};});
const list=await p.evaluate(()=>allSlides.map((s,i)=>({i,id:s.dataset.storyId||'',steps:+s.dataset.sdSteps||0,hidden:s.dataset.hidden==='1'})).filter(s=>!s.hidden));
const sel=only?only.split(',').map(Number):null,res=[];
for(const s of list){if(sel&&!sel.includes(s.i))continue;
 await p.evaluate(i=>{window.__m={peak:0,ms:0};goTo(i);},s.i);await p.waitForTimeout(+wait);
 for(let n=0;n<=s.steps;n++){if(n){await p.evaluate(()=>{window.__m={peak:0,ms:0};});await p.keyboard.press('ArrowRight');await p.waitForTimeout(+wait);}
  if(await p.evaluate(()=>current)!==s.i)break;
  const m=await p.evaluate(()=>({...window.__m}));if(m.peak>0.0005){const r={i:s.i,id:s.id,step:n,peak:+m.peak.toFixed(4),ms:+m.ms.toFixed(4),pk:+(m.peak/W.peak).toFixed(2),rm:+(m.ms/W.ms).toFixed(2)};res.push(r);console.log(JSON.stringify(r));}}}
fs.writeFileSync(out,JSON.stringify({W,res,errs},null,1));console.log('done',res.length,errs.length);await b.close();
