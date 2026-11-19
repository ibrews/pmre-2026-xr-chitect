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
 const RATE=48000,TAU=2*Math.PI,FIREWORK=[[0,2400],[.07,3100],[.16,2000],[.22,2800],[.33,3500],[.41,2200],[.55,2900]];
 function samples(c,rate=RATE){const dur=c.duration||({honk:.28,pass:1.2,merge:.85,pop:.18,snap:.09,projector:3.8,firework:.7,hooray:.36}[c.kind]||.2),a=new Float32Array(Math.ceil(dur*rate));let seed=24681357,phase=0,low=0;const pitch=c.pitch||1;
  for(let i=0;i<a.length;i++){const t=i/rate,u=t/dur;seed=(Math.imul(seed,1664525)+1013904223)|0;const noise=(seed>>>0)/2147483648-1;low+=.14*(noise-low);let v=0;
   if(c.kind==='honk'){const f=350*pitch;v=.09*(Math.sin(TAU*f*t)+.65*Math.sin(TAU*440*pitch*t)+.15*Math.sin(TAU*3*f*t))*Math.min(1,t/.012,(dur-t)/.05);}
   else if(c.kind==='pass'||c.kind==='merge'){phase+=TAU*(c.kind==='pass'?150-80*u:90+100*u)/rate;v=(.055*Math.sin(phase)+.08*low)*Math.sin(Math.PI*u)**2;}
   else if(c.kind==='projector'){const pulse=Math.exp(-((t*18)%1)*17);v=.06*(noise-low)*pulse*Math.min(1,t/.12,(dur-t)/.2);}
   // Tape rewind: a spool squeal that speeds up (620->1600 Hz, inside laptop-speaker range) with flutter, reel chatter and hiss.
   // Gain 1 lands at ~65% of the slide-change whoosh's window RMS and well under its peak (checked with qa_opener.mjs stats).
   else if(c.kind==='rewind'){const f=(620+980*u*u)*(1+.035*Math.sin(TAU*23*t));phase+=TAU*f/rate;const chat=.7+.3*Math.sin(TAU*(16+22*u)*t);v=.01*(.5*Math.sin(phase)+.22*Math.sin(2*phase)+.35*(noise-low))*chat*Math.min(1,t/.15,(dur-t)/.4);}
   else if(c.kind==='bounce'){phase+=TAU*(380*Math.exp(-t*18)+90)/rate;v=.08*Math.sin(phase)*Math.exp(-t*24)*Math.min(1,t/.006);}
   else if(c.kind==='pop'){phase+=TAU*(950*Math.exp(-t*22)+130)/rate;v=.15*Math.sin(phase)*Math.exp(-t*34)*Math.min(1,t/.004);}
   // Forward progression (ring-chapter moving ahead in time): soft clock ticks that quicken over a faint rising tone.
   else if(c.kind==='advance'){let tick=0;for(let n=0;n<10;n++){const d=t-.9*dur*(n/10)**.75;if(d>=0&&d<.05)tick+=Math.exp(-d*110)*Math.sin(TAU*(1500+60*n)*d);}phase+=TAU*(420+260*u)/rate;v=.012*(.9*tick+.18*Math.sin(phase)*Math.sin(Math.PI*u)**2);}
   // Hooray: a quick, soft three-note upward chirp (major arpeggio, triangle-ish) for a happy little jump.
   else if(c.kind==='hooray'){const k=Math.min(2,Math.floor(t/.075)),f=[660,830,990][k]*pitch,d=t-k*.075;phase+=TAU*f/rate;const tri=2/Math.PI*Math.asin(Math.sin(phase));v=.009*tri*Math.min(1,d/.006)*Math.exp(-d*(k<2?14:9));}
   // Tiny fireworks: a short run of soft crackles with a faint high ping each (lane-traffic XR-chitect landing).
   else if(c.kind==='firework'){let w=0;for(const [o,f] of FIREWORK){const d=t-o;if(d>=0&&d<.07)w+=Math.exp(-d*80)*(.7*(noise-low)+.5*Math.sin(TAU*f*pitch*d));}v=.02*w;}
   else if(c.kind==='snap'){v=.15*(noise-low)*Math.exp(-t*70)*Math.min(1,t/.002);}
   a[i]=v*(c.gain??1);
  }return a;
 }
 function mix(cues,duration,rate=RATE){const a=new Float32Array(Math.ceil(duration*rate));for(const c of cues){const s=samples(c,rate),off=Math.round(c.t*rate);for(let i=0;i<s.length&&i+off<a.length;i++)if(i+off>=0)a[i+off]+=s[i];}for(let i=0;i<a.length;i++)a[i]=Math.max(-.85,Math.min(.85,a[i]));return a;}
 const api={RATE,samples,mix};if(typeof module==='object'&&module.exports)module.exports=api;else root.SDMotionSfx=api;
})(typeof window==='object'?window:globalThis);
