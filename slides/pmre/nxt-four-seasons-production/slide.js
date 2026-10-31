SD.defineSlide({
id:"pmre/nxt-four-seasons-production",steps:0,duration:24.653,
props:{"title": "Holodeck Anywhere", "line": "In production", "media": [{"src": "media/nxtbld/holo-prod-a.mp4", "seconds": 10.873334, "loop": false}, {"src": "media/nxtbld/holo-prod-b.mp4", "seconds": 22.153334, "loop": false}, {"src": "media/nxtbld/holo-prod-c.mp4", "seconds": 14.935, "loop": false}], "kind": "production"},
assets:["source.json", "notes.txt", "case.json", "media-manifest.json", "media/nxtbld/holo-prod-a.mp4", "media/nxtbld/holo-prod-b.mp4", "media/nxtbld/holo-prod-c.mp4"],
notes:"Three production clips appear in a row: landscape, portrait, portrait. Preserve each clip\u2019s full aspect ratio and the sequential fades (800 ms delay, 500 ms stagger, 700 ms fade). Alex requested this as Four Seasons; the source title is Holodeck Anywhere / In Production and does not label each clip\u2019s location. Do not assign a location to an individual clip without further evidence.",
provenance:["https://ibrews.github.io/nxtbld-2026-productizing-xr/#37 @9736254f9099037e9a1155a242b0c4b27fb13ffb"],
css:".sd-mod-pmre-nxt-four-seasons-production{padding:0!important}.sd-mod-pmre-nxt-four-seasons-production .special-port{position:absolute;inset:0;overflow:hidden;color:var(--text,#f0f4ff)}.sd-mod-pmre-nxt-four-seasons-production header{position:absolute;top:3%;left:8%;width:84%;text-align:center;z-index:1}.sd-mod-pmre-nxt-four-seasons-production h2{font:700 clamp(40px,4vw,76px)/1.1 var(--font,sans-serif);margin:0 0 12px;letter-spacing:-.03em}.sd-mod-pmre-nxt-four-seasons-production p{font:400 clamp(24px,1.8vw,34px)/1.4 var(--font,sans-serif);margin:0;color:var(--dim,#abb6cc)}.sd-mod-pmre-nxt-four-seasons-production .special-media{position:absolute;object-fit:contain;border-radius:8px;z-index:2}",
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
    return {enter(){active=true;current=0;mode='auto';media.forEach(m=>{if(m.tagName==='VIDEO')m.currentTime=0;});play();frame(ctx.instant?(p.kind==='belt'?0:3):0);if(!ctx.instant)ctx.clock.loop(t=>{if(!active)return false;if(mode==='auto')frame(t);});},step(n){mode='manual';current=p.kind==='belt'?Math.max(0,n-1):n;frame(24,current);play();},seek(t){active=false;mode='manual';pause();frame(t);seekVideos(t);},staticFrame(){active=false;pause();frame(p.kind==='belt'?23.5:3);seekVideos(0);},leave(){active=false;pause();}};
  }

});
