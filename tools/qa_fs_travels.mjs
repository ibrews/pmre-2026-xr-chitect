// Local route-tour regression: actual playback, interrupted navigation, seek/static parity and venue bounds.
// Usage: node tools/qa_fs_travels.mjs OUT [BASE=http://localhost:8765/]
import fs from 'node:fs';import path from 'node:path';import assert from 'node:assert/strict';
import {loadPlaywright,CHROME} from './venue_capture.mjs';
const out=path.resolve(process.argv[2]),base=process.argv[3]||'http://localhost:8765/';fs.mkdirSync(out,{recursive:true});
const browser=await loadPlaywright().chromium.launch({executablePath:CHROME,headless:true});
const page=await browser.newPage({viewport:{width:1920,height:1080}}),report={checks:[],errors:[]};
page.on('pageerror',e=>report.errors.push(String(e)));
const check=(yes,name)=>{assert.ok(yes,name);report.checks.push(name);};
async function state(frame){return frame.evaluate(()=>({time:document.querySelector('figure').getAnimations()[0].currentTime/1000,figures:[...document.querySelectorAll('figure')].map(e=>({opacity:+getComputedStyle(e).opacity,transform:getComputedStyle(e).transform})),legs:[...document.querySelectorAll('mask path')].map(e=>parseFloat(getComputedStyle(e).strokeDashoffset)),video:{paused:film.paused,muted:film.muted,loop:film.loop,time:film.currentTime}}));}
async function build(n){await page.evaluate(n=>SD.restoreStep(allSlides[current],n),n);await page.waitForTimeout(100);}
async function enter(i){await page.evaluate(()=>goTo(0));await page.waitForTimeout(80);await page.evaluate(i=>goTo(i),i);await page.waitForTimeout(500);}
try{
 await page.goto(base+'?safe=70&mute');await page.waitForTimeout(700);
 const i=await page.evaluate(()=>allSlides.findIndex(s=>s.dataset.storyId==='holodeck-travels'));check(i>0,'find target by content ID');report.index=i;
 await enter(i);const frame=await page.locator('.slide.active iframe').elementHandle().then(e=>e.contentFrame());await frame.waitForFunction(()=>typeof seek==='function');
 await frame.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(i=>i.decode())));
 await frame.evaluate(()=>seek(12));await page.waitForTimeout(150);let s=await state(frame);
 check(s.time===12&&s.figures.every(e=>e.opacity===0),'initial build holds with no prematurely visible photos');
 check(!s.video.paused&&s.video.muted&&s.video.loop,'left setup video loops silently');const videoTime=s.video.time;
 await page.keyboard.press('ArrowRight');await page.waitForTimeout(3550);s=await state(frame);
 check(s.time>15&&s.time<17,'manual build plays timeline rather than jumping to its end');
 check(s.figures.filter(e=>e.opacity>.99).length===2,'Austin docks before Aspen spotlight');
 check(s.legs[0]===0&&s.legs[1]===1&&s.legs[2]===1,'route reveals only the completed leg');
 check(!s.video.paused&&s.video.time>videoTime,'video continues during the tour');
 await page.screenshot({path:path.join(out,'mid.png')});
 await page.waitForTimeout(6650);s=await state(frame);
 check(s.figures.every(e=>e.opacity===1)&&s.legs.every(n=>n===0),'natural playback finishes with every photo and route settled');
 const final=s.figures.map(e=>e.transform);await page.screenshot({path:path.join(out,'end.png')});
 // Measure painted leaf geometry throughout the timeline, mapped from iframe to the venue viewport.
 const box=await page.locator('.slide.active iframe').boundingBox();let samples=0;
 for(let t=0;t<=22;t+=.125){
  await frame.evaluate(t=>seek(t),t);
  const m=await frame.evaluate(()=>{const v=film.getBoundingClientRect(),rect=e=>{const r=e.getBoundingClientRect();return [r.left,r.top,r.right,r.bottom];},shown=e=>{let opacity=1;for(let p=e;p;p=p.parentElement)opacity*=+getComputedStyle(p).opacity;return opacity>.01;};return{size:[innerWidth,innerHeight],video:rect(film),photos:[...document.querySelectorAll('figure img')].filter(shown).map(rect),items:[...document.querySelectorAll('h1,.tag,.film-caption,figure img,figcaption,video,#map>g>path,.route')].filter(shown).map(rect)};});
  for(const r of m.items){const a=[box.x+r[0]*box.width/m.size[0],box.y+r[1]*box.height/m.size[1],box.x+r[2]*box.width/m.size[0],box.y+r[3]*box.height/m.size[1]];assert.ok(a[0]>=287.5&&a[1]>=161.5&&a[2]<=1632.5&&a[3]<=918.5,`unsafe content at ${t}: ${a}`);}
  for(const r of m.photos)assert.ok(r[0]>=m.video[2],`photo covers setup video at ${t}`);samples++;
 }
 check(samples===177,'all 177 timeline samples stay in 1344×756 safe zone with video clear');
 await page.keyboard.press('ArrowLeft');await page.waitForTimeout(900);s=await state(frame);
 check(s.time===12&&s.figures.every(e=>e.opacity===0)&&s.legs.every(n=>n===1),'backward build clears photos and route without delayed reappearance');
 await page.keyboard.press('ArrowRight');await page.waitForTimeout(350);await page.keyboard.press('ArrowLeft');await page.waitForTimeout(1000);s=await state(frame);
 check(s.time===12&&s.figures.every(e=>e.opacity===0),'rapid reversal cancels in-flight motion');
 await build(1);check((await state(frame)).figures.every((e,i)=>e.transform===final[i]),'instant final restoration matches natural ending');
 await page.evaluate(()=>goNext());await page.waitForTimeout(500);await page.keyboard.press('ArrowLeft');await page.waitForTimeout(900);s=await state(frame);
 check(await page.evaluate(i=>current===i&&slideSteps.get(allSlides[current]).current===1,i),'return from next slide restores final build counter');
 check(s.figures.every((e,i)=>e.transform===final[i])&&s.legs.every(n=>n===0)&&!s.video.paused,'previous-slide re-entry restores settled tour and looping video');
 await enter(i);await page.waitForTimeout(250);s=await state(frame);check(s.figures.every(e=>e.opacity===0)&&s.legs.every(n=>n===1),'fresh re-entry resets tour');
 await page.keyboard.press('ArrowRight');await page.waitForTimeout(250);await page.evaluate(()=>goNext());await page.waitForTimeout(900);s=await state(frame);check(s.video.paused,'leaving mid-tour pauses hidden video');
 const staticPage=await browser.newPage({viewport:{width:1344,height:756}});await staticPage.goto(base+'slides/pmre/fs-travels/fs-travels.html?static');await staticPage.waitForTimeout(200);
 check((await state(staticPage)).figures.every(e=>e.opacity===1),'static/export frame contains all thumbnails');await staticPage.close();
 const reduced=await browser.newPage({viewport:{width:1344,height:756},reducedMotion:'reduce'});await reduced.goto(base+'slides/pmre/fs-travels/fs-travels.html');await reduced.waitForTimeout(200);
 check((await state(reduced)).legs.every(n=>n===0),'reduced motion resolves directly to finished route');await reduced.close();
 check(report.errors.length===0,'no browser page errors');report.pass=true;
}catch(e){report.pass=false;report.failure=String(e.stack);console.error(e);process.exitCode=1;}
finally{await browser.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));}
