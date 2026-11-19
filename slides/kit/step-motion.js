/* Presenter builds: keep the last painted pose while layout moves to its next state, then FLIP into place.
   Shared by the deck and file:// motion frames. Existing authored transitions keep their own timing. */
(function(){
 const owned=new WeakSet(),live=new WeakMap(),duration=700,easing='ease-in-out';
 const matrix=x=>new DOMMatrix(x==='none'?undefined:x),translate=(x,y)=>new DOMMatrix().translate(x,y);
 function info(el){
  const c=getComputedStyle(el),r=el.getBoundingClientRect();let opacity=1;
  for(let a=el;a;a=a.parentElement){const s=getComputedStyle(a);if(s.display==='none'||s.visibility==='hidden')opacity=0;opacity*=+s.opacity;}
  const visible=opacity>.001&&r.width>0&&r.height>0,onscreen=r.right>0&&r.bottom>0&&r.left<innerWidth&&r.top<innerHeight;
  if(!visible)return{el,visible:false};
  const svg=el instanceof SVGGraphicsElement;let box=svg?el.getBBox():{x:0,y:0,width:el.offsetWidth,height:el.offsetHeight};
  if(!box.width||!box.height)return{el,visible:false};
  const origin=c.transformOrigin.split(' ').map(parseFloat),q=translate(origin[0]||0,origin[1]||0).multiply(matrix(c.transform)).translate(-(origin[0]||0),-(origin[1]||0));
  let screen,parent;
  if(svg){const m=el.getScreenCTM();screen=new DOMMatrix([m.a,m.b,m.c,m.d,m.e,m.f]);parent=screen.multiply(q.inverse());}
  else{
   const points=[[0,0],[box.width,0],[0,box.height],[box.width,box.height]].map(([x,y])=>q.transformPoint({x,y}));
   const minX=Math.min(...points.map(p=>p.x)),minY=Math.min(...points.map(p=>p.y)),extent=Math.max(...points.map(p=>p.x))-minX;
   const scale=extent?r.width/extent:1;parent=translate(r.left-minX*scale,r.top-minY*scale).scale(scale);screen=parent.multiply(q);
  }
  // A contained photo/video keeps its aspect ratio while its layout box changes shape.
  if(el.matches('img,video')&&c.objectFit==='contain'){
   const w=el.naturalWidth||el.videoWidth,h=el.naturalHeight||el.videoHeight;
   if(w&&h){const k=Math.min(box.width/w,box.height/h);box={x:(box.width-w*k)/2,y:(box.height-h*k)/2,width:w*k,height:h*k};}
  }
  const meaningful=c.transform!=='none'||(svg?el.tagName.toLowerCase()!=='g':el.matches('img,video,canvas,iframe,h1,h2,h3,p,figcaption,button')||!el.children.length||c.backgroundColor!=='rgba(0, 0, 0, 0)'||parseFloat(c.borderTopWidth)>0);
  return{el,visible,onscreen,opacity:+c.opacity,r,box,q,screen,parent,meaningful,text:el.children.length?null:el.textContent,d:el.tagName.toLowerCase()==='path'?c.d:null};
 }
 function capture(root){return [...root.querySelectorAll('*')].filter(e=>!e.closest('script,style,defs,clipPath')).map(info);}
 function cancel(before){before.forEach(({el})=>{live.get(el)?.forEach(a=>a.cancel());live.delete(el);});}
 function play(before){
  const changes=before.map(a=>({a,b:info(a.el)})).filter(({a,b})=>{
   if(!b.visible||(!a.onscreen&&!b.onscreen))return false;if(!a.visible)return true;if(!a.meaningful&&!b.meaningful)return false;
   return a.text!==b.text||['x','y','width','height'].some(k=>Math.abs(a.r[k]-b.r[k])>.5)||a.d!==b.d;
  });
  const selected=changes.filter(({b})=>!changes.some(({b:p})=>p.el!==b.el&&p.el.contains(b.el)));
  for(const {a,b}of selected){
   const el=b.el,frames=[];
   if(!a.visible||a.text!==b.text)frames.push({opacity:0},{opacity:b.opacity});
   else if(a.d!==b.d&&a.d&&b.d)frames.push({d:a.d},{d:b.d});
   else{
    const first=b.parent.inverse().multiply(a.screen).translate(a.box.x,a.box.y).scale(a.box.width/b.box.width,a.box.height/b.box.height).translate(-b.box.x,-b.box.y);
    frames.push({transformOrigin:'0 0',transform:first.toString()},{transformOrigin:'0 0',transform:b.q.toString()});
   }
   const anim=el.animate(frames,{duration,easing});owned.add(anim);live.set(el,[anim]);anim.onfinish=()=>{if(live.get(el)?.[0]===anim)live.delete(el);};
  }
 }
 window.SDStepMotion={capture,cancel,play,owns:a=>owned.has(a),run(root,change,instant){if(instant)return change();const before=capture(root);cancel(before);const result=change();play(before);return result;}};
})();
