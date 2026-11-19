// Local venue audit: node tools/qa_safezone.mjs OUT [BASE=http://localhost:8765/]
// Saves every absolute slide at 1920x1080, plus actual text/key-content bounds.
import fs from 'node:fs';import path from 'node:path';
import {loadPlaywright,CHROME} from './venue_capture.mjs';
const out=path.resolve(process.argv[2]),base=process.argv[3]||'http://localhost:8765/';
fs.mkdirSync(out,{recursive:true});
const {chromium}=loadPlaywright(),browser=await chromium.launch({executablePath:CHROME,headless:true}),page=await browser.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
const report={base,viewport:[1920,1080],safe:{left:288,top:162,right:1632,bottom:918},slides:[],errors:[]};
page.on('pageerror',e=>report.errors.push(String(e)));
// Inspect rendered text runs (including SVG text) and semantic key-content boxes.
function measure({rootSelector}){
 const root=document.querySelector(rootSelector);if(!root)return[];
 const roots=[root],result=[];
 const visible=el=>{let o=1;for(let e=el;e;e=e.parentElement){const c=getComputedStyle(e);if(c.display==='none'||c.visibility==='hidden')return false;o*=+c.opacity;}return o>.001;};
 const label=e=>e.tagName.toLowerCase()+(e.id?'#'+e.id:'')+(typeof e.className==='string'?'.'+e.className.trim().split(/\s+/).join('.'):e.className?.baseVal?'.'+e.className.baseVal.trim().split(/\s+/).join('.'):'');
 const add=(kind,e,r,text)=>{
  // Measure painted content: stereo sources can be wider than their overflow-clipped eye viewport.
  let l=r.left,t=r.top,rr=r.right,b=r.bottom;
  for(let a=e.parentElement;a&&a!==document.body;a=a.parentElement){const c=getComputedStyle(a),q=a.getBoundingClientRect();if(/hidden|clip|scroll|auto/.test(c.overflowX)){l=Math.max(l,q.left);rr=Math.min(rr,q.right);}if(/hidden|clip|scroll|auto/.test(c.overflowY)){t=Math.max(t,q.top);b=Math.min(b,q.bottom);}}
  if(rr-l<.1||b-t<.1||rr<=0||b<=0||l>=innerWidth||t>=innerHeight)return;result.push({kind,selector:label(e),text:text?.trim().replace(/\s+/g,' ').slice(0,160),rect:[l,t,rr,b].map(n=>+n.toFixed(2))});};
 for(const rr of roots){
  const walker=document.createTreeWalker(rr,NodeFilter.SHOW_TEXT);
  for(let n;(n=walker.nextNode());){const e=n.parentElement;if(!n.nodeValue.trim()||!e||e.closest('script,style,title,desc')||!visible(e))continue;
   // SVG <text> is measured once below; tspans inherit its rotation/scale.
   if(e.closest('svg'))continue;
   const range=document.createRange();range.selectNodeContents(n);for(const r of range.getClientRects())add('text',e,r,n.nodeValue);
  }
  rr.querySelectorAll('svg text').forEach(e=>{if(visible(e))add('text',e,e.getBoundingClientRect(),e.textContent);});
  rr.querySelectorAll('.intro-grid,.studio-orbit,.studio-copy,.sponsor-pipeline,.sponsor-wall,.qr-card,[class*="quote"],[class*="venn"],img,svg,canvas,video,iframe').forEach(e=>{
   if(!visible(e)||e.closest('svg')&&e.tagName.toLowerCase()!=='svg')return;
   if(e.tagName.toLowerCase()==='svg'&&e.parentElement.closest('svg'))return;
   if(e.matches('.full-media')&&!e.matches('iframe'))return; // full-bleed media is allowed
   if(e.matches('img,video,canvas')&&e.getBoundingClientRect().width>=innerWidth*.9&&e.getBoundingClientRect().height>=innerHeight*.9)return;
   add('key',e,e.getBoundingClientRect());
  });
 }
 return result;
}
const violations=items=>items.filter(o=>{const [l,t,r,b]=o.rect;return l<287.5||t<161.5||r>1632.5||b>918.5;});
try{
 await page.goto(base+'?cut=full&ai=on&safe=70&theme=house&reduced',{waitUntil:'domcontentloaded'});await page.evaluate(()=>document.fonts.ready);await page.waitForTimeout(500);
 const slides=await page.evaluate(()=>allSlides.map((s,index)=>({index,id:s.dataset.storyId||s.dataset.type,type:s.dataset.type,hidden:s.dataset.hidden==='1',steps:+s.dataset.sdSteps||0})));
 for(const s of slides){
  await page.evaluate(i=>{goTo(i);},s.index);await page.waitForTimeout(80);
  await page.evaluate(()=>{
   const sl=allSlides[current],r=SD._recs.get(sl);if(r){r.ctx.clock.stop();r.ctx.instant=true;if(r.inst.staticFrame)r.inst.staticFrame();else{r.inst.enter?.();for(let n=1;n<=r.steps;n++)r.inst.step?.(n);r.inst.complete?.(r.steps);}}
   else{const ss=slideSteps.get(sl);if(ss)for(const fn of ss.steps)fn();}
   for(const a of document.getAnimations())if(isFinite(a.effect?.getComputedTiming().endTime))try{a.finish();}catch{}
  });await page.waitForTimeout(180);
  await page.locator('.slide.active img').evaluateAll(async imgs=>Promise.all(imgs.map(i=>i.complete?null:new Promise(r=>{i.onload=i.onerror=r;setTimeout(r,2500)}))));
  let items=await page.evaluate(measure,{rootSelector:'body'});const frames=[];
  for(const el of await page.locator('.slide.active iframe').elementHandles()){
   const f=await el.contentFrame();if(!f)continue;await f.waitForLoadState('domcontentloaded');await f.evaluate(()=>document.fonts.ready);
   const box=await el.boundingBox(),size=await f.evaluate(()=>({w:innerWidth,h:innerHeight}));
   const seek=await f.evaluate(()=>typeof window.seek==='function'?+(window.MOTION_END||30):0);
   // Timeline samples catch type that moves beyond the iframe's own safe area.
   const samples=seek?[0,...Array.from({length:Math.ceil(seek)},(_,i)=>Math.min(i+1,seek))]:[null];
   for(const t of samples){if(t!==null)await f.evaluate(t=>window.seek(t),t);
    const measured=await f.evaluate(measure,{rootSelector:'body'});
    const mapped=measured.map(o=>({...o,frame:f.url(),time:t,rect:[box.x+o.rect[0]*box.width/size.w,box.y+o.rect[1]*box.height/size.h,box.x+o.rect[2]*box.width/size.w,box.y+o.rect[3]*box.height/size.h].map(n=>+n.toFixed(2))}));items.push(...mapped);
   }frames.push({url:f.url(),samples:samples.length});
  }
  if(s.id==='hello'){
   const wheel=await page.evaluate(()=>{const sl=allSlides[current];SD._recs.get(sl).inst.staticFrame();const a=[];for(let d=0;d<360;d+=2){sl._wheelPhase(d*Math.PI/180);for(const e of sl.querySelectorAll('.client-label')){const r=e.getBoundingClientRect();a.push({kind:'wheel-rotation',text:e.textContent,phase:d,rect:[r.left,r.top,r.right,r.bottom].map(n=>+n.toFixed(2))});}}sl._wheelPhase(0);return a;});items.push(...wheel);
  }
  const file=String(s.index).padStart(3,'0')+'-'+s.id+'.png';await page.screenshot({path:path.join(out,file)});
  const bad=violations(items);report.slides.push({...s,file,frames,items,violations:bad});
  if(bad.length)console.log(JSON.stringify({index:s.index,id:s.id,count:bad.length,examples:bad.slice(0,5)}));
 }
 report.count=report.slides.length;report.checked=report.slides.reduce((n,s)=>n+s.items.length,0);report.violations=report.slides.reduce((n,s)=>n+s.violations.length,0);report.affected=report.slides.filter(s=>s.violations.length).map(s=>s.index);report.pass=!report.violations&&!report.errors.length;
}finally{await browser.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({count:report.count,checked:report.checked,violations:report.violations,affected:report.affected,errors:report.errors}));if(!report.pass)process.exitCode=1;}
