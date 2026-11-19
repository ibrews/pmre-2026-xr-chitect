// Speaker/pulse acceptance using Chrome's manual clock; no exports or network assets.
import fs from 'node:fs';import path from 'node:path';import {loadPlaywright,CHROME} from './venue_capture.mjs';
const out=path.resolve(process.argv[2]),base=process.argv[3]||'http://localhost:8765/';fs.mkdirSync(out,{recursive:true});
const {chromium}=loadPlaywright(),b=await chromium.launch({executablePath:CHROME,headless:true}),p=await b.newPage({viewport:{width:1920,height:1080}}),r={errors:[],samples:[]};p.on('pageerror',e=>r.errors.push(String(e)));
try{
 await p.clock.install({time:new Date('2026-01-01T00:00:00Z')});await p.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));await p.goto(base+'?cut=full&ai=on&safe=70&theme=house',{waitUntil:'domcontentloaded'});await p.evaluate(()=>document.fonts.ready);await p.clock.runFor(600);
 await p.evaluate(()=>goTo(2));await p.clock.runFor(600);
 r.block=await p.locator('.active .block-headset').evaluate(e=>({blue:!!e.querySelector('[fill="#00d4ff"]'),rect:[e.getBBox().x,e.getBBox().y,e.getBBox().width,e.getBBox().height]}));
 await p.screenshot({path:path.join(out,'002-headset-box.png')});await p.clock.runFor(3900);
 r.first=await p.locator('.active .worn-headset').evaluate(e=>({kind:e.dataset.kind,blue:!!e.querySelector('[fill="#00d4ff"]'),rect:[e.getBBox().x,e.getBBox().y,e.getBBox().width,e.getBBox().height]}));
 if(r.block.blue||r.first.blue||r.first.kind!=='bulky'||r.first.rect[1]!==-39||r.first.rect[2]<58)throw Error('First headset must be opaque, chunky and cover the face');
 await p.screenshot({path:path.join(out,'002-first-headset.png')});
 await p.keyboard.press('ArrowRight');await p.clock.runFor(1300);await p.keyboard.press('ArrowRight');
 // Check every 50ms, including scale/fade tails. Record each appearance interval.
 for(let t=0;t<=10200;t+=50){if(t)await p.clock.runFor(50);const a=await p.locator('.active [data-powerup]').evaluateAll(els=>els.filter(e=>+getComputedStyle(e).opacity>.001&&+getComputedStyle(e.firstElementChild).opacity>.001).map(e=>e.dataset.powerup));r.samples.push({t,visible:a});if(a.length>1)throw Error('Overlapping power-ups at '+t);}
 r.intervals=[];for(const s of r.samples){const name=s.visible[0];if(!name)continue;const last=r.intervals.at(-1);if(last?.name===name)last.end=s.t;else r.intervals.push({name,start:s.t,end:s.t});}
 if(r.intervals.map(x=>x.name).join(',')!=='architecture,theatre,film,computer,vr')throw Error('Power-up order incorrect');
 // 770ms travel/jump + 1050ms complete power-up chime must precede the next appearance.
 for(let i=1;i<r.intervals.length;i++)if(r.intervals[i].start-r.intervals[i-1].start<1850)throw Error('Next power-up starts before previous finishes');
 r.second=await p.locator('.active .worn-headset').evaluateAll(els=>els.map(e=>e.dataset.kind));if(r.second.join()!=='compact')throw Error('Compact pickup must replace first headset');
 await p.keyboard.press('ArrowRight');await p.clock.runFor(4500);await p.evaluate(()=>SD._recs.get(allSlides[current]).inst.complete());
 r.text=await p.locator('.slide.active').innerText();if(!r.text.includes('350+ clients')||!r.text.includes('8+')||!r.text.includes('UNREAL ENGINE'))throw Error('Speaker copy missing');
 r.clientLine=await p.locator('.active .intro-sub-ue5').evaluate(e=>{const a=[...e.childNodes].map(n=>n.nodeName==='BR'?'\n':n.textContent).join('');return a.split('\n');});if(!r.clientLine.includes('350+ clients'))throw Error('Clients need their own line');
 await p.screenshot({path:path.join(out,'002-complete.png')});
 await p.evaluate(()=>goTo(3));let lo=1,hi=0;for(let t=0;t<=6600;t+=25){await p.clock.runFor(25);const op=+(await p.locator('.active .studio-orbit image').getAttribute('opacity'));lo=Math.min(lo,op);hi=Math.max(hi,op);}r.pulse={min:lo,max:hi};if(Math.abs(lo-.05)>.002||Math.abs(hi-.9)>.002)throw Error('Monocle pulse must span 5%–90%');
 r.pass=!r.errors.length;
}catch(e){r.failure=e.stack;r.pass=false;}finally{await b.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(r,null,2));console.log(JSON.stringify({pass:r.pass,first:r.first,block:r.block,intervals:r.intervals,pulse:r.pulse,errors:r.errors,failure:r.failure},null,2));if(!r.pass)process.exitCode=1;}
