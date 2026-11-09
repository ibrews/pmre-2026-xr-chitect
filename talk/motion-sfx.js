// Original procedural sound design, Alex Coulombe Presents, 2026. No sampled/third-party audio.
// Pure deterministic PCM generator shared by WebAudio and both offline MP4 exporters.
(function(root){
 if(typeof window==='object'){
  const q=new URLSearchParams(location.search);let unlocked=false;
  window._sdSfxMuted=q.has('mute')||q.get('audio')==='off';
  window._sdSoundAllowed=()=>unlocked&&!window._sdSfxMuted&&!q.has('reduced')&&!q.has('static')&&!q.has('print')&&!q.has('shot')&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
  for(const type of ['pointerdown','keydown','touchstart'])addEventListener(type,e=>{if(e.isTrusted)unlocked=true;},{capture:true,passive:true});
  window.setMotionMuted=value=>{window._sdSfxMuted=!!value;if(value)window._killAllSfx?.();};
 }
 const RATE=48000,TAU=2*Math.PI;
 function samples(c,rate=RATE){const dur=c.duration||({honk:.28,pass:1.2,merge:.85,pop:.18,snap:.09,projector:3.8}[c.kind]||.2),a=new Float32Array(Math.ceil(dur*rate));let seed=24681357,phase=0,low=0;const pitch=c.pitch||1;
  for(let i=0;i<a.length;i++){const t=i/rate,u=t/dur;seed=(Math.imul(seed,1664525)+1013904223)|0;const noise=(seed>>>0)/2147483648-1;low+=.14*(noise-low);let v=0;
   if(c.kind==='honk'){const f=350*pitch;v=.09*(Math.sin(TAU*f*t)+.65*Math.sin(TAU*440*pitch*t)+.15*Math.sin(TAU*3*f*t))*Math.min(1,t/.012,(dur-t)/.05);}
   else if(c.kind==='pass'||c.kind==='merge'){phase+=TAU*(c.kind==='pass'?150-80*u:90+100*u)/rate;v=(.055*Math.sin(phase)+.08*low)*Math.sin(Math.PI*u)**2;}
   else if(c.kind==='projector'){const pulse=Math.exp(-((t*18)%1)*17);v=.06*(noise-low)*pulse*Math.min(1,t/.12,(dur-t)/.2);}
   else if(c.kind==='pop'){phase+=TAU*(950*Math.exp(-t*22)+130)/rate;v=.15*Math.sin(phase)*Math.exp(-t*34)*Math.min(1,t/.004);}
   else if(c.kind==='snap'){v=.15*(noise-low)*Math.exp(-t*70)*Math.min(1,t/.002);}
   a[i]=v*(c.gain??1);
  }return a;
 }
 function mix(cues,duration,rate=RATE){const a=new Float32Array(Math.ceil(duration*rate));for(const c of cues){const s=samples(c,rate),off=Math.round(c.t*rate);for(let i=0;i<s.length&&i+off<a.length;i++)if(i+off>=0)a[i+off]+=s[i];}for(let i=0;i<a.length;i++)a[i]=Math.max(-.85,Math.min(.85,a[i]));return a;}
 const api={RATE,samples,mix};if(typeof module==='object'&&module.exports)module.exports=api;else root.SDMotionSfx=api;
})(typeof window==='object'?window:globalThis);
