// Focused live selection / offline / deterministic-motion checks. Run after admitting one light browser.
import {execFileSync} from 'node:child_process';
import {loadPlaywright,CHROME} from './venue_capture.mjs';import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import assert from 'node:assert/strict';
const [base,out]=process.argv.slice(2);fs.mkdirSync(out,{recursive:true});const {chromium}=loadPlaywright();const b=await chromium.launch({executablePath:CHROME,args:['--autoplay-policy=no-user-gesture-required']});
const rasterComparisons=[];
function sameRaster(a,b,label){
 if(a.equals(b)){rasterComparisons.push({label,maxChannelDelta:0});return true;}
 const af=path.join(out,'raster-a.png'),bf=path.join(out,'raster-b.png');fs.writeFileSync(af,a);fs.writeFileSync(bf,b);
 const delta=+execFileSync('magick',[af,bf,'-compose','difference','-composite','-format','%[fx:maxima*255]','info:']).toString();
 rasterComparisons.push({label,maxChannelDelta:delta});return delta<=1; // Chromium image resampling can differ by one 8-bit rounding level.
}
const rep={rasterComparisons,host:os.hostname(),url:base,errors:[],http:[],external:[],selection:[],motions:[]};
try{
 const ctx=await b.newContext({viewport:{width:1920,height:1080}});const origin=new URL(base).origin;
 await ctx.route('**/*',r=>{const u=new URL(r.request().url());if(/^https?:$/.test(u.protocol)&&u.origin!==origin){rep.external.push(u.href);return r.abort();}return r.continue();});
 const p=await ctx.newPage();p.on('pageerror',e=>rep.errors.push(String(e)));p.on('console',m=>{if(m.type()==='error')rep.errors.push(m.text()+' @ '+m.location().url)});p.on('response',r=>{if(r.status()>=400)rep.http.push(r.status()+' '+r.url())});
 const u=q=>{const u=new URL(base);for(const [k,v]of Object.entries(q))u.searchParams.set(k,v);return u.href;};
 for(const fsPick of ['v2','legacy'])for(const cut of ['20t','20','30','full']){
  await p.goto(u({opt:'fs:'+fsPick,cut}),{waitUntil:'load'});await p.waitForTimeout(250);
  const s=await p.evaluate(()=>{const visible=allSlides.filter(s=>s.dataset.hidden!=='1'&&s.dataset.type!=='settings');const sec=n=>{const m=(n||'').match(/⏱\s*(\d+)s(?: of)? animation, ~(\d+)s total|⏱\s*~?(\d+)\s*(s|min)/);return !m?60:m[2]?+m[2]:m[4]==='min'?+m[3]*60:+m[3]};return{picks:TALK_PICKS,seconds:visible.reduce((a,s)=>a+sec(getSlideNotes(allSlides.indexOf(s))),0),visible:visible.length,ids:visible.map(s=>s.dataset.sdMod).filter(Boolean),notes:visible.map(s=>getSlideNotes(allSlides.indexOf(s)))}});
  const expected=fsPick==='v2'?{'20t':2025,'20':2505,'30':3690,full:4335}:{'20t':2070,'20':2130,'30':3435,full:4125};assert.equal(s.seconds,expected[cut],fsPick+' '+cut);
  assert.equal(s.ids.includes('pmre/fs-stats'),fsPick==='v2');assert.equal(s.ids.includes('pmre/mexico-scale'),fsPick==='v2');rep.selection.push({fs:fsPick,cut,seconds:s.seconds,visible:s.visible});
 }
 await p.goto(u({opt:'fs:v2',cut:'20t',fsbudget:'all'}));await p.waitForTimeout(150);assert.equal(await p.evaluate(()=>allSlides.filter(s=>s.dataset.hidden!=='1'&&s.dataset.type==='lesson').length),10);
 await p.goto(u({opt:'fs:v2',cut:'full'}));await p.waitForTimeout(300);
 for(let i=1;i<await p.evaluate(()=>allSlides.length);i++){
  await p.evaluate(i=>goTo(i),i);await p.waitForTimeout(100);
  const bad=await p.evaluate(()=>[...allSlides[current].querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src));assert.equal(bad.length,0,JSON.stringify(bad));
 }
 const vi=await p.evaluate(()=>allSlides.findIndex(s=>s.querySelector('video.full-media')));assert(vi>0);await p.evaluate(i=>goTo(i),vi);await p.locator('video.full-media').evaluate(v=>v.play());await p.waitForTimeout(600);assert(await p.locator('video.full-media').evaluate(v=>v.currentTime>0&&v.duration>63&&!!v.poster&&!!v.getAttribute('aria-label')));
 await p.goto(u({opt:'fs:v2',print:''}),{waitUntil:'load'});await p.waitForTimeout(300);assert.equal(await p.locator('video.full-media').count(),0);const poster=p.locator('img[src="media/pmre/fs-v2/aspen-poster.jpg"]');assert.equal(await poster.count(),1);assert(await poster.evaluate(i=>i.complete&&i.naturalWidth>0));
 for(const look of ['house','noir'])for(const [name,end,times]of [['fs-stats',8,[0,2,5,8]],['fs-travels',21,[2,6,10,15,19,21]],['mexico-scale',6,[0,3,6]]]){
  const f=new URL(`slides/pmre/${name}/${name}.html`,base);f.search='?look='+look+'&t=0';await p.goto(f.href);await p.waitForFunction(()=>typeof seek==='function');await p.evaluate(()=>document.fonts.ready);await p.waitForFunction(()=>[...document.images].every(i=>i.complete&&i.naturalWidth>0));await p.evaluate(()=>Promise.all([...document.images].map(i=>i.decode())));await p.waitForTimeout(400);
  assert.equal(await p.evaluate(()=>MOTION_END),end);for(const t of times){await p.evaluate(t=>seek(t),t);await p.screenshot({path:path.join(out,`${name}-${look}-${t}.png`)});}
  await p.evaluate(t=>seek(t),end);await p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));const final=await p.screenshot();fs.writeFileSync(path.join(out,name+'-'+look+'-final.png'),final);f.search='?look='+look+'&static';await p.goto(f.href);await p.waitForTimeout(400);await p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});const still=await p.screenshot();fs.writeFileSync(path.join(out,name+'-'+look+'-static.png'),still);assert(sameRaster(final,still,name+'-'+look+'-static'),name+' static differs');
  await p.emulateMedia({reducedMotion:'reduce'});f.search='?look='+look;await p.goto(f.href);await p.waitForTimeout(400);await p.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>i.decode()));await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));});assert(sameRaster(final,await p.screenshot(),name+'-'+look+'-reduced'),name+' reduced-motion differs');await p.emulateMedia({reducedMotion:'no-preference'});rep.motions.push({name,look,end,samples:times.length,staticMatches:true,reducedMatches:true});
 }
 assert.equal(rep.errors.length,0,JSON.stringify(rep.errors));assert.equal(rep.external.length,0,JSON.stringify(rep.external));assert.equal(rep.http.length,0,JSON.stringify(rep.http));rep.verdict='PASS';
}catch(e){rep.verdict='FAIL';rep.failure=e.stack;process.exitCode=1;}finally{await b.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(rep,null,2));console.log(JSON.stringify(rep,null,2));}
