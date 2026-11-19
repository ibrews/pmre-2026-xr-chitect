// Thumbnail mode (?thumb=1): used by the presenter window's current/next previews.
// Must load before the deck so the preview copy stays silent and never broadcasts
// slide changes back to the presenter window (that would overwrite the real notes).
(function(){
  if(!/[?&]thumb=1/.test(location.search)){addEventListener('load',()=>{const s=document.createElement('script');s.src='talk/presenter-thumbs.js';document.body.appendChild(s)});return;}
  window.__SD_THUMB=true;
  window.BroadcastChannel=function(){return{postMessage(){},close(){},addEventListener(){},set onmessage(v){}}};
  const AC=window.AudioContext||window.webkitAudioContext;
  if(AC){const W=function(...a){const c=new AC(...a);try{c.suspend()}catch(e){}c.resume=()=>Promise.resolve();return c};W.prototype=AC.prototype;window.AudioContext=window.webkitAudioContext=W;}
  const play=HTMLMediaElement.prototype.play;
  HTMLMediaElement.prototype.play=function(){this.muted=true;this.volume=0;return play.call(this)};
  try{Object.defineProperty(window,'localStorage',{value:(()=>{const m={};return{getItem:k=>m[k]??null,setItem:(k,v)=>{m[k]=String(v)},removeItem:k=>{delete m[k]},clear(){},key:()=>null,length:0}})()})}catch(e){}
  document.documentElement.classList.add('sd-thumb');
})();
