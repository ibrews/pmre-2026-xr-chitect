// November 19 acceptance for speaker, MIA client orbit and presenter-supplied story photographs.
import fs from 'node:fs';import path from 'node:path';import {pathToFileURL} from 'node:url';import {loadPlaywright,CHROME} from './venue_capture.mjs';
const root=path.resolve(process.argv[2]||'.'),out=path.resolve(process.argv[3]);fs.mkdirSync(out,{recursive:true});
const {chromium}=loadPlaywright(),b=await chromium.launch({executablePath:CHROME}),p=await b.newPage({viewport:{width:1920,height:1080}}),r={root,protocol:'file:',errors:[],shots:[],pass:false};
p.on('pageerror',e=>r.errors.push(String(e)));await p.route('**/*',route=>/^https?:/.test(route.request().url())?route.abort():route.continue());
const url=pathToFileURL(path.join(root,'index.html')).href+'?cut=full&ai=on&safe=70&theme=house';
const shot=async name=>{const file=path.join(out,name+'.png');await p.screenshot({path:file});r.shots.push(file);};
try{
 await p.goto(url);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(600);
 r.slides=await p.evaluate(()=>allSlides.map((s,i)=>({index:i,id:s.dataset.storyId,hidden:s.dataset.hidden==='1'})));
 if(r.slides[2].id!=='speaker-intro'||r.slides[2].hidden||r.slides[3].id!=='hello')throw Error('Opening URL positions/visibility incorrect');
 await p.evaluate(()=>goTo(2));await p.waitForTimeout(4400);await shot('002-speaker-first-headset');
 r.first=await p.locator('.active .worn-headset').evaluateAll(a=>a.map(e=>({kind:e.dataset.kind,box:{w:e.getBBox().width,h:e.getBBox().height},transform:e.getAttribute('transform')})));
 if(r.first.length!==1||r.first[0].kind!=='bulky')throw Error('First headset must be one bulky set');
 await p.keyboard.press('ArrowRight');await p.waitForTimeout(650);await p.keyboard.press('ArrowRight');await p.waitForTimeout(10200);
 r.second=await p.locator('.active .worn-headset').evaluateAll(a=>a.map(e=>({kind:e.dataset.kind,transform:e.getAttribute('transform')})));
 if(r.second.length!==1||r.second[0].kind!=='compact')throw Error('Second VR pickup must replace the bulky headset');await shot('002-speaker-second-headset');
 await p.keyboard.press('ArrowRight');await p.waitForTimeout(5000);await p.evaluate(()=>SD._recs.get(allSlides[current]).inst.complete());await shot('002-speaker-complete');
 const t=await p.locator('.slide.active').innerText();if(!t.includes('Co-Founder')||!t.includes('350+ clients'))throw Error('Speaker text missing');
 await p.evaluate(()=>goTo(3));await p.waitForTimeout(600);await shot('003-studio-wheel');
 const before=await p.locator('.client-label').first().getAttribute('transform');await p.waitForTimeout(500);r.wheelSpins=before!==await p.locator('.client-label').first().getAttribute('transform');if(!r.wheelSpins)throw Error('Wheel is not spinning');
 r.left=await p.locator('.studio-copy').textContent();const expected=['Agile Lens Immersive Design · New York City','An XR studio','Architecture','Real estate','Entertainment','…and much more'];for(const t of expected)if(!r.left.includes(t))throw Error('v5 studio text missing: '+t);
 r.wheel=await p.evaluate(()=>{const sl=allSlides[3],els=[...sl.querySelectorAll('.client-label')],collisions=[],outside=[];let raf; // Freeze ambient orbit while sampling its exact phase hook.
  SD._recs.get(sl).inst.staticFrame();
  const poly=e=>{const b=e.getBBox(),m=e.getCTM();return [[b.x,b.y],[b.x+b.width,b.y],[b.x+b.width,b.y+b.height],[b.x,b.y+b.height]].map(([x,y])=>({x:m.a*x+m.c*y+m.e,y:m.b*x+m.d*y+m.f}));};
  const hit=(a,b)=>{for(const shape of [a,b])for(let i=0;i<4;i++){const p=shape[i],q=shape[(i+1)%4],axis={x:-(q.y-p.y),y:q.x-p.x},aa=a.map(v=>v.x*axis.x+v.y*axis.y),bb=b.map(v=>v.x*axis.x+v.y*axis.y);if(Math.max(...aa)<Math.min(...bb)-2||Math.max(...bb)<Math.min(...aa)-2)return false;}return true;};
  for(let d=0;d<360;d+=2){sl._wheelPhase(d*Math.PI/180);const ps=els.map(poly);for(let i=0;i<ps.length;i++){for(let j=i+1;j<ps.length;j++)if(hit(ps[i],ps[j]))collisions.push({d,a:els[i].textContent,b:els[j].textContent});const rect=els[i].getBoundingClientRect(),bounds=sl.querySelector('.studio-orbit').getBoundingClientRect();if(rect.left<bounds.left-1||rect.right>bounds.right+1||rect.top<bounds.top-1||rect.bottom>bounds.bottom+1)outside.push({d,label:els[i].textContent});}}
  sl._wheelPhase(0);return {labels:els.map(e=>({text:e.textContent,size:e.getAttribute('font-size')})),samples:180,collisions,outside};});
 if(r.wheel.labels.length!==19||!r.wheel.labels.some(l=>l.text==='Intel')||r.wheel.collisions.length||r.wheel.outside.length)throw Error('Wheel geometry failed');
 for(const id of ['wisconsin-detail','youtube','speaking-unlock']){const s=r.slides.find(s=>s.id===id);await p.evaluate(i=>goTo(i),s.index);await p.waitForTimeout(700);await p.evaluate(()=>SD.completeCurrent(allSlides[current]));await shot(String(s.index).padStart(3,'0')+'-'+id);if(await p.locator('.active img').evaluateAll(imgs=>imgs.some(i=>!i.complete||!i.naturalWidth)))throw Error('Missing story photo '+id);}
 r.pass=!r.errors.length;
}catch(e){r.failure=e.stack;}finally{await b.close();fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(r,null,2));console.log(JSON.stringify({pass:r.pass,slides:r.slides?.length,wheel:r.wheel,errors:r.errors,failure:r.failure},null,2));if(!r.pass)process.exitCode=1;}
