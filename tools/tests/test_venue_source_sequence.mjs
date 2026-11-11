// Actual DOM regression: the previous 12s settle crosses the first still into video; the export freeze preserves it.
import assert from 'node:assert/strict';import fs from 'node:fs';import {loadPlaywright,CHROME,settleSourceSequence}from'../venue_capture.mjs';
const [url,out]=process.argv.slice(2),{chromium}=loadPlaywright(),b=await chromium.launch({executablePath:CHROME}),report={};
try{const p=await b.newPage({viewport:{width:1920,height:1080}});await p.goto(url,{waitUntil:'domcontentloaded'});await p.waitForTimeout(500);await p.clock.install();const index=await p.evaluate(()=>allSlides.findIndex(s=>s.dataset.storyId==='napkin-scale'));
 const media=()=>p.evaluate(()=>({selected:allSlides[current].querySelector('.port-root').dataset.media,video:allSlides[current].querySelector('canvas').dataset.videoSource||null}));
 await p.evaluate(i=>goTo(i),index);await p.clock.runFor(12000);report.old=await media();assert.notEqual(report.old.selected,'0','Control must reproduce lost first image');
 await p.evaluate(()=>goTo(1));await p.evaluate(i=>goTo(i),index);await settleSourceSequence(p,'pmre/source-sequence');await p.clock.runFor(12000);report.fixed=await media();assert.equal(report.fixed.selected,'0');assert.equal(report.fixed.video,null);
 for(let n=1;n<=2;n++){await p.evaluate(()=>{const ss=slideSteps.get(allSlides[current]);ss.steps[ss.current++]();});await settleSourceSequence(p,'pmre/source-sequence');await p.clock.runFor(12000);const x=await media();assert.equal(x.selected,String(n));assert(x.video.endsWith(n===1?'sketching.mp4':'sketch-at-scale.mp4'));}
 report.pass=true;}finally{await b.close();fs.writeFileSync(out,JSON.stringify(report,null,2));}console.log(report);
