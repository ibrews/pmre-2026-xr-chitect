SD.defineSlide({
id:"pmre/nxt-blueprint-immersive",steps:7,duration:23.5,
props:{"title": "Blueprint Immersive", "line": "Runtime Datasmith imports and design options", "media": [{"src": "media/nxtbld/bp-asset-35-a.mp4", "seconds": 4.8, "loop": false, "ratio": 1.7826086956521738}, {"src": "media/nxtbld/bp-asset-35-b.mp4", "seconds": 18.985633, "loop": false, "ratio": 1.7777777777777777}, {"src": "media/nxtbld/bp-asset-36.png", "seconds": 6, "loop": false, "ratio": 1.9409937888198758}, {"src": "media/nxtbld/bp-asset-37.png", "seconds": 6, "loop": false, "ratio": 1.600942655145326}, {"src": "media/nxtbld/bp-asset-38.png", "seconds": 6, "loop": false, "ratio": 1.7279411764705883}, {"src": "media/nxtbld/bp-asset-39.png", "seconds": 6, "loop": false, "ratio": 1.8618181818181818}, {"src": "media/nxtbld/bp-asset-40.jpg", "seconds": 6, "loop": false, "ratio": 1.7768301350390903}], "kind": "belt"},
assets:["source.json", "notes.txt", "case.json", "media-manifest.json", "media/nxtbld/bp-asset-35-a.mp4", "media/nxtbld/bp-asset-35-b.mp4", "media/nxtbld/bp-asset-36.png", "media/nxtbld/bp-asset-37.png", "media/nxtbld/bp-asset-38.png", "media/nxtbld/bp-asset-39.png", "media/nxtbld/bp-asset-40.jpg"],
notes:"The first attempt grew from FDA Theatre Planning work. The tool used Datasmith runtime importing and option toggles. The seven-item belt shows both videos and five stills. In the source, the text fades to 50% and the belt enters after 3.5 seconds, moves for 20 seconds, and leaves the final image centered.",
provenance:["https://ibrews.github.io/nxtbld-2026-productizing-xr/#20 @9736254f9099037e9a1155a242b0c4b27fb13ffb"],
css:".sd-mod-pmre-nxt-blueprint-immersive{padding:0!important}.sd-mod-pmre-nxt-blueprint-immersive .special-port{position:absolute;inset:0;overflow:hidden;color:var(--text,#f0f4ff)}.sd-mod-pmre-nxt-blueprint-immersive header{position:absolute;top:3%;left:8%;width:84%;text-align:center;z-index:1}.sd-mod-pmre-nxt-blueprint-immersive h2{font:700 clamp(40px,4vw,76px)/1.1 var(--font,sans-serif);margin:0 0 12px;letter-spacing:-.03em}.sd-mod-pmre-nxt-blueprint-immersive p{font:400 clamp(24px,1.8vw,34px)/1.4 var(--font,sans-serif);margin:0;color:var(--dim,#abb6cc)}.sd-mod-pmre-nxt-blueprint-immersive .special-media{position:absolute;object-fit:contain;border-radius:8px;z-index:2}.sd-mod-pmre-nxt-blueprint-immersive header{top:3%}",
  render(el,p,ctx){
    const root=document.createElement('div');root.className='special-port';el.appendChild(root);
    const head=document.createElement('header'),h=document.createElement('h2'),line=document.createElement('p');h.textContent=p.title;line.textContent=p.line;head.append(h,line);root.appendChild(head);
    let active=false,current=0,mode='auto';const clamp=x=>Math.max(0,Math.min(1,x));
    const media=p.media.map((it,i)=>{const m=document.createElement(/\.(mp4|webm)$/.test(it.src)?'video':'img');m.src=ctx.asset(it.src);if(m.tagName==='VIDEO'){m.muted=true;m.loop=true;m.playsInline=true;m.preload='auto';}else m.alt=p.title+' — source item '+(i+1);m.className='special-media';root.appendChild(m);return m;});
    const pause=()=>media.forEach(m=>m.tagName==='VIDEO'&&m.pause());
    const play=()=>{if(active&&!ctx.instant)media.forEach(m=>m.tagName==='VIDEO'&&m.play().catch(()=>{}));};
    const spans=p.media.map(it=>it.ratio||1.5);
    function frame(t,which=null){
      if(p.kind==='title'){head.style.opacity=clamp(t/1.2);return;}
      if(p.kind==='production'){
        media.forEach((m,i)=>{m.style.cssText=`left:${3+32*i}%;top:22%;width:30%;height:67%;opacity:${which===null?clamp((t-.8-.5*i)/.7):i<=which?1:0}`;});
        return;
      }
      // Faithful NXT #20 conveyor: enter from off-right at 3.5s; pan 20s;
      // keep the last image centered while the penultimate item exits.
      const W=root.clientWidth,H=root.clientHeight,hgt=H*.62,gap=W*.04;
      const widths=spans.map(r=>hgt*r);let x=W;const xs=widths.map(w=>{const v=x;x+=w+gap;return v;});
      const last=media.length-1,centerShift=W/2-(xs[last]+widths[last]/2),exitShift=-xs[last-1]-widths[last-1]-20,trackShift=Math.min(centerShift,exitShift),k=clamp((t-3.5)/20),shift=trackShift*k;
      head.style.opacity=which===null?1-.5*clamp((t-1.5)/2):.5;
      media.forEach((m,i)=>{let mx=xs[i]+shift;if(i===last)mx+=Math.max(0,centerShift-shift);if(which!==null)mx=xs[i]+W/2-(xs[which]+widths[which]/2);m.style.cssText=`left:${mx}px;top:19%;height:62%;width:${widths[i]}px;opacity:${i===last-1&&k===1&&which===null?0:1}`;});
    }
    function seekVideos(t){media.forEach(m=>{if(m.tagName==='VIDEO'&&m.readyState>=1)m.currentTime=t%Math.max(.01,m.duration||1);});}
    return {enter(){active=true;current=0;mode='auto';media.forEach(m=>{if(m.tagName==='VIDEO')m.currentTime=0;});play();frame(ctx.instant?(p.kind==='belt'?23.5:3):0);if(!ctx.instant)ctx.clock.loop(t=>{if(!active)return false;if(mode==='auto')frame(t);});},step(n){mode='manual';current=p.kind==='belt'?Math.max(0,n-1):n;frame(24,current);play();},seek(t){active=false;mode='manual';pause();frame(t);seekVideos(t);},staticFrame(){active=false;pause();frame(p.kind==='belt'?23.5:3);seekVideos(0);},leave(){active=false;pause();}};
  }

});
