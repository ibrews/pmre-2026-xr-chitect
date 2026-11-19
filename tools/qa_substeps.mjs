// Audit the actual keyboard path in both directions, with authored visibility contracts for every build.
// Usage: node tools/qa_substeps.mjs OUT [BASE=http://localhost:8765/]
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {loadPlaywright,CHROME} from './venue_capture.mjs';
const out=path.resolve(process.argv[2]),base=process.argv[3]||'http://localhost:8765/';fs.mkdirSync(out,{recursive:true});
const b=await loadPlaywright().chromium.launch({executablePath:CHROME,headless:true}),p=await b.newPage({viewport:{width:1920,height:1080}}),report={base,slides:[],checks:0,errors:[]};
p.on('pageerror',e=>report.errors.push(String(e)));
const frameTime=(id,n)=>id==='lanes'?[5.6,9.4,12,34.7,36.9,38.9,42.9][n]:id==='holodeck-travels'?[12,22][n]:id==='hand'?12:id==='career-map'?8:4;
async function current(){return p.evaluate(()=>({i:current,n:slideSteps.get(allSlides[current])?.current||0}));}
async function settle(s,n,direction){
 const iframe=await p.locator('.slide.active iframe').count()?await p.locator('.slide.active iframe').elementHandle():null;
 if(iframe){const f=await iframe.contentFrame();await f.waitForFunction(()=>typeof window.seek==='function');if(direction==='forward'){await f.evaluate(t=>window.seek(t),frameTime(s.id,n));await p.clock.runFor(25);}await f.evaluate(()=>document.getAnimations().filter(a=>window.SDStepMotion?.owns(a)).forEach(a=>a.finish()));return f;}
 if(direction==='forward')await p.clock.runFor(s.id==='speaker-intro'?[4400,1400,16500,1700][n]:s.id==='demo-montage'?(n===1?1600:300):2400);
 await p.locator('.slide.active').evaluate(sl=>sl.getAnimations({subtree:true}).forEach(a=>{if(a.effect?.target!==sl&&isFinite(a.effect?.getComputedTiming().endTime))try{a.finish();}catch(_){}}));
 await p.clock.runFor(30);return p;
}
function inspect({id,n,rootSelector}){
 const root=document.querySelector(rootSelector),errors=[];
 const visible=e=>{if(!e)return false;let opacity=1;for(let q=e;q;q=q.parentElement){const s=getComputedStyle(q);if(s.display==='none'||s.visibility==='hidden')return false;opacity*=+s.opacity;}const r=e.getBoundingClientRect();return opacity>.01&&r.width>0&&r.height>0&&r.right>0&&r.bottom>0&&r.left<innerWidth&&r.top<innerHeight;};
 const all=q=>[...root.querySelectorAll(q)],vis=q=>all(q).filter(visible),check=(yes,msg)=>{if(!yes)errors.push(msg);},shown=(q,on)=>check((vis(q).length>0)===on,`${q} must be ${on?'visible':'hidden'}`);
 const text=all('text,h1,h2,p,.line,.title,.picasso-date,.ct-hud,figcaption').filter(visible).map(e=>e.textContent.trim()).filter(Boolean);
 const includes=s=>check(text.some(t=>t.includes(s)),`missing visible text: ${s}`);
 if(id==='goals'){shown('.title',true);check(vis('.line').length===n,`expected ${n} goal lines, got ${vis('.line').length}`);}
 else if(id==='career-map'){includes('Where the work was');includes('Fisher Dachs Associates');shown('#connie-thanks',n>=1);shown('#fda-website',n===2);if(n===1){includes('Thank you');includes('Connie Caldwell!');}}
 else if(id==='xiqu'){shown('.left-eye',n===0);shown('.right-eye',true);shown('.render',n===1);includes('Xiqu Centre');const eye=root.querySelector('.right-eye');check(n===0?getComputedStyle(eye).transform==='none':new DOMMatrix(getComputedStyle(eye).transform).a<1,'right eye must shrink only in comparison state');}
 else if(id==='referrals'){includes('A reputation becomes a brief');check(vis('.email-piece').length===n,`expected ${n} emails`);check(all('.email-piece img').every(e=>e.complete&&e.naturalWidth>0),'email asset failed to decode');check(vis('.email-piece').map(e=>+e.dataset.sourceImage).sort().join(',')===[42,40,39,41].slice(0,n).sort().join(','),'email arrival order wrong');}
 else if(id==='fda'){shown('.story-photo',true);shown('.story-overlay',n===1);includes('Sightlines, before VR');}
 else if(id==='hand'){shown('#hand',true);shown('#cad',true);shown('#outputs',n===1);includes('Drafting by hand taught me');if(n===1)check(vis('#outputs text').length===8,'all eight drawing-sheet labels must be visible');}
 else if(id==='lanes'){includes('Pick a lane');check(!root.textContent.includes('Richard Rosa'),'professor name on screen');check(!root.textContent.includes('MASTER ONE CRAFT'),'craft directive on screen');if(n<=2){shown('#hero',true);shown('#strands',true);includes('ARCHITECTURE');if(n>=1){includes('THEATER');includes('TECHNOLOGY');}check(!text.includes('theater planning'),'overlaps revealed too early');}else{shown('#venn',true);const labels=['theater planning','live VR theater','archviz'];labels.forEach((t,i)=>check(text.includes(t)===(i<=n-3),`overlap ${t} visibility at step ${n}`));if(n===6)includes('XR-CHITECT');}if(n===2)check(vis('#cars>g').some(e=>e.getBoundingClientRect().right>100&&e.getBoundingClientRect().left<1800),'traffic step must show cars');}
 else if(id==='speaker-intro'){shown('.intro-stage svg',true);shown('.intro-title',n>=1);shown('.intro-sub-ue5',n>=2);shown('.intro-stats',n>=3);if(n>=1)includes('Alex');if(n>=2)check(root.querySelector('.worn-headset')?.dataset.kind==='compact','compact headset must replace bulky one');}
 else if(id==='macbeth-comparison'||id==='brockman-real'){check(vis('.items figure').length===(n===0?1:2),'comparison must show exactly one/two media items');check(all('.items img,.items video').length>=2,'comparison assets missing');}
 else if(id==='thesis'){check(vis('.items figure').length===3,'all thesis images must remain visible');shown('.ar-callout',n===1);includes('Of course my thesis was an immersive theater you attend via submarine.');}
 else if(id==='picasso'){shown('.picasso-left img',true);shown('.picasso-right img',n>=1);shown('.picasso-date',n===2);includes(['Who painted this?','And this one?','Learn the rules before you break them.'][n]);}
 else if(id==='holodeck-travels'){shown('#film',true);check(vis('figure').length===(n===0?0:4),'travel locations revealed at wrong build');includes('The holodeck travels');}
 else if(id==='sponsor-pipeline'){includes('The first three steps are in this room');shown('.agile',true);check(root.querySelector('.agile').textContent.includes('Agile Lens'),'missing Agile Lens name');shown('.workflow-return',n===1);const im=root.querySelector('.workflow-return');check(im.complete&&im.naturalWidth>0,'workflow callback image failed to decode');check(im.getAttribute('src')==='media/v3-fix1/workflow.jpg','callback must reuse original workflow diagram');check(vis('.mark').length===13,'all vendor rows must remain visible');}
 else if(id==='glasses-objections'){shown('.before',n===0);shown('.arrival',n===1);if(n===0)includes('VR is cool');else{includes('Now we’re there');shown('.arrival img',true);}}
 else if(id==='demo-montage'){shown('.opening',n===0);shown('.album',n>0);if(n>0){includes('PMRE, through your eyes');check(vis('figure').length===(n===1?6:8),`expected ${n===1?6:8} montage photos, got ${vis('figure').length}`);}}
 else if(id==='camera-demo'){shown('.ct-plan',true);shown('.ct-view canvas',true);check(root.querySelector('.ct-view').classList.contains('masked')===(n>=2),'camera mask visibility wrong');check(all('.ct-frame').filter(e=>e.style.backgroundImage).length===(n===3?3:0),'camera shot count wrong');includes(n===0?'35 mm':n===3?'85 mm':'85 mm');}
 else errors.push('No authored contract for '+id);
 check(text.length>0||vis('svg,img,video,canvas').length>0,'blank build');
 return{errors,text,visibleImages:vis('img').map(e=>e.getAttribute('src')),visibleFigures:vis('figure').length};
}
try{
 await p.clock.install({time:new Date('2026-01-01T00:00:00Z')});await p.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));await p.goto(base+'?cut=full&ai=on&safe=70&theme=house&mute',{waitUntil:'domcontentloaded'});await p.evaluate(()=>document.fonts.ready);await p.clock.runFor(600);
 const slides=await p.evaluate(()=>allSlides.map((s,i)=>({i,id:s.dataset.storyId,mod:s.dataset.sdMod,steps:slideSteps.get(s)?.steps.length||0})).filter(s=>s.steps));
 for(const s of slides){
  await p.evaluate(i=>{goTo(0);goTo(i);},s.i);await p.clock.runFor(500);const result={...s,states:[]};
  for(let n=0;n<=s.steps;n++){
   if(n){for(let k=0;k<3&&(await current()).n!==n;k++){await p.keyboard.press('ArrowRight');await p.clock.runFor(30);}}
   assert.deepEqual(await current(),{i:s.i,n},`${s.id} forward navigation at ${n}`);
   const f=await settle(s,n,'forward'),r=await f.evaluate(inspect,{id:s.id,n,rootSelector:f===p?'.slide.active':'body'});result.states.push({direction:'forward',n,...r});report.checks++;assert.equal(r.errors.length,0,`${s.id} forward ${n}: ${r.errors.join('; ')}`);
  }
  for(let n=s.steps-1;n>=0;n--){
   await p.keyboard.press('ArrowLeft');await p.clock.runFor(80);assert.deepEqual(await current(),{i:s.i,n},`${s.id} backward navigation at ${n}`);
   const f=await settle(s,n,'backward'),r=await f.evaluate(inspect,{id:s.id,n,rootSelector:f===p?'.slide.active':'body'});result.states.push({direction:'backward',n,...r});report.checks++;assert.equal(r.errors.length,0,`${s.id} backward ${n}: ${r.errors.join('; ')}`);
  }
  // Repeat after reversing to ensure no stale clocks or animation fill effects survive a direction change.
  for(let n=1;n<=s.steps;n++){
   for(let k=0;k<3&&(await current()).n!==n;k++){await p.keyboard.press('ArrowRight');await p.clock.runFor(30);}
   assert.deepEqual(await current(),{i:s.i,n},`${s.id} forward-again navigation at ${n}`);const f=await settle(s,n,'forward'),r=await f.evaluate(inspect,{id:s.id,n,rootSelector:f===p?'.slide.active':'body'});result.states.push({direction:'forward-again',n,...r});report.checks++;assert.equal(r.errors.length,0,`${s.id} forward-again ${n}: ${r.errors.join('; ')}`);
  }
  // A previous-slide crossing must land on its final build, then remain reversible.
  await p.evaluate(()=>goNext());await p.clock.runFor(500);await p.keyboard.press('ArrowLeft');await p.clock.runFor(500); // allow the 400 ms slide entrance to settle
  assert.deepEqual(await current(),{i:s.i,n:s.steps},`${s.id} previous-slide final-build restoration`);
  const crossFrame=await settle(s,s.steps,'backward'),cross=await crossFrame.evaluate(inspect,{id:s.id,n:s.steps,rootSelector:crossFrame===p?'.slide.active':'body'});result.states.push({direction:'previous-slide',n:s.steps,...cross});report.checks++;assert.equal(cross.errors.length,0,`${s.id} previous-slide: ${cross.errors.join('; ')}`);
  // Reverse an in-flight reveal before its delayed callbacks finish.
  await p.evaluate(i=>{goTo(0);goTo(i);},s.i);await p.clock.runFor(500);await settle(s,0,'forward');
  for(let k=0;k<3&&(await current()).n!==1;k++){await p.keyboard.press('ArrowRight');await p.clock.runFor(1);}
  await p.keyboard.press('ArrowLeft');await p.clock.runFor(1800);assert.deepEqual(await current(),{i:s.i,n:0},`${s.id} rapid reversal counter`);
  const rapidFrame=await settle(s,0,'backward'),rapid=await rapidFrame.evaluate(inspect,{id:s.id,n:0,rootSelector:rapidFrame===p?'.slide.active':'body'});result.states.push({direction:'rapid-reversal',n:0,...rapid});report.checks++;assert.equal(rapid.errors.length,0,`${s.id} rapid reversal: ${rapid.errors.join('; ')}`);
  report.slides.push(result);console.log(`PASS ${s.i} ${s.id}: ${s.steps+1} states forward/backward/forward plus previous-slide restoration`);
 }
 assert.equal(report.errors.length,0,report.errors.join('\n'));report.pass=true;
}catch(e){report.pass=false;report.failure=e.stack;console.error(report.failure);process.exitCode=1;}finally{await b.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({pass:report.pass,slides:report.slides.length,checks:report.checks,errors:report.errors}));}
