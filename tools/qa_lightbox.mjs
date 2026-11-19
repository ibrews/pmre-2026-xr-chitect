// Every image reachable by the deck's click-to-zoom handler, in every authored build.
// node tools/qa_lightbox.mjs OUT [BASE=http://localhost:8765/]
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';import {execFileSync} from 'node:child_process';import {loadPlaywright,CHROME} from './venue_capture.mjs';
const out=path.resolve(process.argv[2]),base=process.argv[3]||'http://localhost:8765/';fs.mkdirSync(out,{recursive:true});
const b=await loadPlaywright().chromium.launch({executablePath:CHROME,headless:true});
const report={base,machine:'Alexs-MacBook-Pro-3.local / Apple M1 Max',viewports:[],errors:[],baseline:null};
const skip='.qr-card,.cover-logo-wrap,.placed-arrow,.media-cycler-mount,#anno-panel,#move-hud,#search-overlay,#export-modal,#notes-app,#presenter-popup';
function geometry(el){const r=el.getBoundingClientRect(),c=getComputedStyle(el);return{rect:{x:r.x,y:r.y,width:r.width,height:r.height,right:r.right,bottom:r.bottom},centerError:[r.x+r.width/2-innerWidth/2,r.y+r.height/2-innerHeight/2],viewport:[innerWidth,innerHeight],natural:[el.naturalWidth||el.videoWidth,el.naturalHeight||el.videoHeight],fit:c.objectFit,position:c.objectPosition,transform:c.transform,translate:c.translate,rotate:c.rotate,scale:c.scale,overlay:el.parentElement.id};}
function check(g){const r=g.rect;assert(r.width>0&&r.height>0,'empty zoom');assert(Math.abs(g.centerError[0])<1&&Math.abs(g.centerError[1])<1,'zoom must be viewport-centered: '+JSON.stringify(g));assert(r.x>=-.5&&r.y>=-.5&&r.right<=g.viewport[0]+.5&&r.bottom<=g.viewport[1]+.5,'cropped zoom');assert.equal(g.fit,'contain');assert.equal(g.position,'50% 50%');for(const k of ['transform','translate','rotate','scale'])assert.equal(g[k],'none',k+' inherited from slide');assert.equal(g.overlay,'fx-fs-overlay');if(g.natural.every(v=>v>0))assert(Math.abs((r.width/r.height)/(g.natural[0]/g.natural[1])-1)<.002,'zoom must use source aspect ratio');}
try{
 // Demonstrate that the unchanged baseline fails the same geometry assertion on Alex's diagram.
 const old=await b.newPage({viewport:{width:1920,height:1080}});const html=execFileSync('git',['show','f1b6125:index.html'],{encoding:'utf8',maxBuffer:4e6});await old.route(base+'?*',r=>r.fulfill({body:html,contentType:'text/html'}));await old.goto(base+'?safe=70&theme=house&mute',{waitUntil:'domcontentloaded'});await old.waitForTimeout(800);await old.evaluate(()=>goTo(allSlides.findIndex(s=>s.dataset.storyId==='not-turnkey')));await old.waitForTimeout(700);await old.locator('.slide.active .story-photo').click();await old.waitForTimeout(600);report.baseline=await old.locator('.fx-fs-target').evaluate(geometry);assert(report.baseline.centerError.some(n=>Math.abs(n)>100),'baseline must reproduce offset');await old.screenshot({path:path.join(out,'baseline-offset.png')});await old.close();
 for(const [width,height]of[[1920,1080],[1440,900]]){
  const p=await b.newPage({viewport:{width,height}}),run={viewport:[width,height],slides:0,tests:[],excluded:[],frames:[]};report.viewports.push(run);p.on('pageerror',e=>report.errors.push(String(e)));
  await p.clock.install({time:new Date('2026-01-01T00:00:00Z')});await p.clock.pauseAt(new Date('2026-01-01T00:00:01Z'));
  await p.goto(base+'?safe=70&theme=house&cut=full&ai=on&mute',{waitUntil:'domcontentloaded'});await p.evaluate(()=>document.fonts.ready);await p.clock.runFor(600);
  const slides=await p.evaluate(()=>allSlides.map((s,i)=>({i,id:s.dataset.storyId||s.dataset.type,steps:slideSteps.get(s)?.steps.length||0})));
  for(const s of slides){
   await p.evaluate(i=>{goTo(0);goTo(i);},s.i);await p.clock.runFor(600);run.slides++;
   for(let n=0;n<=s.steps;n++){
    if(n){await p.evaluate(n=>{restoreBuild(allSlides[current],n);updateStepIndicator();},n);await p.clock.runFor(60);}
    const sl=p.locator('#deck>.slide').nth(s.i);await sl.locator('img').evaluateAll(xs=>Promise.all(xs.map(i=>i.decode().catch(()=>{}))));
    const imgs=await sl.locator('img,video').elementHandles();let j=0;
    for(const el of imgs){
     const info=await el.evaluate((e,skip)=>{let v=true;for(let a=e;a;a=a.parentElement){const c=getComputedStyle(a);if(c.display==='none'||c.visibility==='hidden'||+c.opacity<.01)v=false;}const r=e.getBoundingClientRect();return{src:e.currentSrc||e.src,tag:e.tagName,excluded:e.closest(skip)?'decorative/cycler':!v||r.width<1||r.height<1?'hidden':null};},skip);j++;
     if(info.excluded){run.excluded.push({...s,n,j,...info});continue;}
     if(info.tag==='IMG')assert(await el.evaluate(e=>e.complete&&e.naturalWidth>0),'missing image '+info.src);
     const original=await el.evaluate(e=>{window.__lbOriginal={el:e,parent:e.parentNode,next:e.nextSibling,style:e.getAttribute('style')};const r=e.getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height};});
     // Click the image itself through the normal bubbling listener; no direct lightbox API.
     await el.dispatchEvent('click');await p.clock.runFor(550);await p.locator('#fx-fs-overlay').evaluate(e=>e.getAnimations({subtree:true}).forEach(a=>{if(isFinite(a.effect?.getComputedTiming().endTime))a.finish();}));assert.equal(await p.locator('#fx-fs-overlay').evaluate(e=>getComputedStyle(e).opacity),'1','backdrop must be fully opaque');const g=await el.evaluate(geometry);check(g);run.tests.push({...s,n,j,...info,...g});
     if(s.id==='not-turnkey'||s.id==='sponsor-pipeline'&&n===1&&info.src.endsWith('workflow.jpg'))await p.screenshot({path:path.join(out,`${width}x${height}-${s.id}-zoom.png`)});
     if(run.tests.length%2)await p.keyboard.press('Escape');else await el.dispatchEvent('click');await p.clock.runFor(480);
     assert(await el.evaluate(e=>{const o=window.__lbOriginal;return e.parentNode===o.parent&&e.nextSibling===o.next&&e.getAttribute('style')===o.style&&!e.classList.contains('fx-fs-target');}),'source DOM/style not restored');
     const restored=await el.evaluate(e=>{const r=e.getBoundingClientRect();return{x:r.x,y:r.y,width:r.width,height:r.height};});for(const k of Object.keys(original))assert(Math.abs(original[k]-restored[k])<2,'source layout changed on close: '+s.id+' '+k);
    }
    for(const f of await sl.locator('iframe').elementHandles()){const frame=await f.contentFrame();if(frame)run.frames.push({id:s.id,n,src:frame.url(),imageCount:await frame.locator('img').count(),clickToZoom:'No lightbox handler in iframe documents'});}
   }
  }
  // Resize while open, then navigation close, using the original diagram with its centered source transform.
  await p.evaluate(()=>goTo(allSlides.findIndex(s=>s.dataset.storyId==='not-turnkey')));await p.clock.runFor(600);const im=p.locator('.slide.active .story-photo');await im.click();await p.clock.runFor(550);await p.setViewportSize({width:width-160,height:height-100});await p.clock.runFor(550);await p.locator('.fx-fs-target').evaluate(e=>e.getAnimations().forEach(a=>a.finish()));check(await p.locator('.fx-fs-target').evaluate(geometry));await p.evaluate(()=>goTo(current+1));await p.clock.runFor(550);assert.equal(await p.locator('.fx-fs-target').count(),0);assert.equal(await p.locator('.fx-fs-placeholder').count(),0);run.resizeAndNavigation=true;
  console.log(JSON.stringify({viewport:run.viewport,slides:run.slides,zoomChecks:run.tests.length,pass:true}));await p.close();
 }
 assert.equal(report.errors.length,0,report.errors.join('\n'));report.pass=true;
}catch(e){report.pass=false;report.failure=e.stack;console.error(e.stack);process.exitCode=1;}finally{await b.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));}
