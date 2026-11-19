// Presenter aid (Alex, 2026-11-19): the corner tracker's position dot gives one short gold pulse the moment the
// current step has finished, so he can tell when an animation / video / substep is done. Deck-level, no sound.
// A step counts as finished when, on the active slide:
//   - no finite Web Animation or CSS transition is still running (slide subtree + same-origin iframes, which covers
//     every seekable motion frame: they animate only with WAAPI/CSS on their step timing);
//   - the module's clock is idle (ctx.clock.busy()), or its own stepBusy() hook says so when it defines one;
//   - every video that started on this step has played through once (first wrap for loops);
// whichever comes first of that (held for two polls) or a 20 s cap. Fires once per step; any step change re-arms.
(function(){
  const POLL=150,SETTLE=400,CAP=20000,TAG='sd-step-done';
  let key='',t0=0,done=false,quiet=0;const vids=new Map();
  const finite=a=>{try{return a.id!==TAG&&a.playState==='running'&&isFinite(a.effect?.getComputedTiming().activeDuration);}catch(e){return false;}};
  function docs(sl){const out=[];sl.querySelectorAll('iframe').forEach(f=>{try{if(f.contentDocument)out.push(f.contentDocument);}catch(e){}});return out;}
  function animBusy(sl){if(sl.getAnimations({subtree:true}).some(finite))return true;return docs(sl).some(d=>d.getAnimations().some(finite));}
  function clockBusy(sl){const r=window.SD?._recs?.get(sl);if(!r)return false;try{if(typeof r.inst?.stepBusy==='function')return !!r.inst.stepBusy();return !!r.ctx?.clock?.busy();}catch(e){return false;}}
  function videoBusy(sl){let busy=false;const all=[...sl.querySelectorAll('video')];docs(sl).forEach(d=>all.push(...d.querySelectorAll('video')));
    for(const v of all){let s=vids.get(v);
      if(!s){if(v.paused||v.currentTime>1)continue;s={last:v.currentTime,done:false};vids.set(v,s);}   // started on this step
      if(s.done)continue;
      if(v.ended||(v.loop&&v.currentTime+.05<s.last)||(v.paused&&v.currentTime>0))s.done=true;else busy=true;
      s.last=v.currentTime;}
    return busy;}
  function pulse(sl){const dot=sl.querySelector('.v3-tracker .v3-dot');if(!dot)return;
    // Alex had not noticed the first version: bigger, brighter, a double beat with a glow (still silent, ~0.7 s).
    dot.animate([{fill:'#ffffff',transform:'scale(1)',filter:'none'},{fill:'#ffd34d',transform:'scale(2.6)',filter:'drop-shadow(0 0 6px #ffd34d)',offset:.22},{fill:'#ffd34d',transform:'scale(1.6)',filter:'drop-shadow(0 0 4px #ffd34d)',offset:.45},{fill:'#ffd34d',transform:'scale(2.3)',filter:'drop-shadow(0 0 6px #ffd34d)',offset:.65},{fill:'#ffffff',transform:'scale(1)',filter:'none'}],{duration:720,easing:'ease-out',id:TAG});
    document.body.dataset.stepDone=key;}   // read by QA
  function tick(){
    if(typeof allSlides==='undefined'||typeof current==='undefined')return;
    const sl=allSlides[current];if(!sl)return;
    let step=0;try{const ss=typeof slideSteps!=='undefined'&&slideSteps.get(sl);if(ss)step=ss.current;else{const r=window.SD?._recs?.get(sl);if(r)step=r.cur|0;}}catch(e){}
    const k=current+':'+step,now=performance.now();
    if(k!==key){key=k;t0=now;done=false;quiet=0;vids.clear();delete document.body.dataset.stepDone;}
    if(done||!sl.querySelector('.v3-tracker .v3-dot'))return;
    const el=now-t0;if(el<SETTLE){videoBusy(sl);return;}
    const busy=animBusy(sl)|clockBusy(sl)|videoBusy(sl);   // | (not ||) so the video tracker always updates
    quiet=busy?0:quiet+1;
    if(quiet>=2||el>=CAP){done=true;pulse(sl);}
  }
  setInterval(tick,POLL);
})();
