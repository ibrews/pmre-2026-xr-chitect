// One manual build: stereo capture → right eye beside the original architectural render.
SD.defineSlide({manualSteps:true,id:'pmre/xiqu-comparison',steps:1,props:{title:'Xiqu Centre',stereo:'',src:'',credit:''},assets:[],
css:`.xiqu-comparison{position:absolute;inset:0;overflow:hidden}.xiqu-comparison h2{position:absolute;left:4%;bottom:3%;margin:0;font:800 76px/1.06 var(--font-display,var(--font))}.xiqu-comparison .credit{position:absolute;left:4%;top:3%;font:22px/1.3 var(--font);color:var(--dim)}.xiqu-comparison .eye{position:absolute;overflow:hidden;transform-origin:0 0}.xiqu-comparison .eye img{position:absolute;top:0;width:200%;height:100%;max-width:none;max-height:none}.xiqu-comparison .left-eye img{left:0}.xiqu-comparison .right-eye img{left:-100%}.xiqu-comparison .render{position:absolute;object-fit:contain;max-width:none;max-height:none}`,
render(el,p,ctx){const root=document.createElement('div');root.className='xiqu-comparison';el.append(root);
 const title=document.createElement('h2');title.className='case-title';title.textContent=p.title;root.append(title);
 const credit=document.createElement('div');credit.className='credit';credit.textContent=p.credit;root.append(credit);
 const eyes=['left','right'].map(side=>{const box=document.createElement('div');box.className='eye '+side+'-eye';const img=document.createElement('img');img.src=p.stereo;img.alt='Xiqu Centre VR capture — '+side+' eye';box.append(img);root.append(box);return box;});
 const render=document.createElement('img');render.className='render';render.src=p.src;render.alt='Xiqu Centre architectural render by Bing Thom Architects';root.append(render);let state=0;
 function layout(n,instant){state=n;const w=root.clientWidth,h=root.clientHeight,areaW=w*.92,areaH=h*.75,top=h*.1,left=w*.04;
  const ratio=(eyes[0].firstChild.naturalWidth||1920)/(eyes[0].firstChild.naturalHeight||1090),pairW=Math.min(areaW,areaH*ratio),eyeW=pairW/2,pairH=pairW/ratio,x=(w-pairW)/2,y=top+(areaH-pairH)/2;
  const k=Math.min((areaW*.37)/eyeW,areaH*.82/pairH),rw=areaW*.60,rh=areaH*.82;
  eyes.forEach((box,i)=>{box.style.transition=instant?'none':(i?'transform 700ms ease 180ms':'opacity 300ms ease');box.style.left=(x+i*eyeW)+'px';box.style.top=y+'px';box.style.width=eyeW+'px';box.style.height=pairH+'px';});
  eyes[0].style.opacity=n?'0':'1';eyes[0].setAttribute('aria-hidden',String(!!n));
  eyes[1].style.transform=n?`translate(${left-(x+eyeW)}px,${top+(areaH-pairH*k)/2-y}px) scale(${k})`:'none';
  Object.assign(render.style,{left:(left+areaW*.40)+'px',top:(top+(areaH-rh)/2)+'px',width:rw+'px',height:rh+'px',transition:instant?'none':'opacity 650ms ease 450ms',opacity:n?'1':'0'});render.setAttribute('aria-hidden',String(!n));
 }
 const resize=()=>layout(state,true);addEventListener('resize',resize);eyes[0].firstChild.addEventListener('load',resize);layout(0,true);
 return{enter(){layout(0,true);},step(n){layout(n,ctx.instant);},complete(n){layout(n,true);},restore(n){layout(n,true);},staticFrame(){layout(1,true);}};
}});
