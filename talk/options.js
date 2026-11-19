/* PMRE talk options runtime — lets Alex choose between alternates live instead of us guessing.
   Picks come from URL params (?open=question&cut=30&theme=sheet …), else localStorage 'pmre-opts', else TALK.options defaults.
   Slides tagged opt:"group:choice" (or "g1:c1&g2:c2", all must match) are hidden unless that choice is picked; keep:19|20|30 marks slides that survive the
   trimmed-short/20/30-minute cuts. Press O for the picker overlay. applyTalkOptions() runs after slides are built, before navigation
   is wired, so print/shot exports honor the picks too. */
// ?print / ?shot show each motion module's rendered poster in the picked look (tools/render_motion.mjs), not a live frame.
window.SD_POSTERS='media/motion/mp4/{motion}-poster{.look}.png';
function talkPicks(){
  const P=new URLSearchParams(location.search);let saved={};try{saved=JSON.parse(localStorage.getItem('pmre-opts')||'{}');}catch(e){}
  const optPicks=Object.fromEntries((P.get('opt')||'').split(/[,&]/).filter(Boolean).map(t=>t.split(':')));
  const LEGACY={theme:{blueprint:'sheet',stage:'house'}};  // older ?theme= links keep working
  const out={};Object.entries(TALK.options).forEach(([g,o])=>{let v=P.get(g)||optPicks[g]||(g==='theme'&&P.get('look'))||saved[g]||o.default;v=(LEGACY[g]&&LEGACY[g][v])||v;out[g]=o.choices[v]?v:o.default;});return out;
}
function applyTalkOptions(){
  const pick=talkPicks();window.TALK_PICKS=pick;
  document.body.dataset.talkTheme=pick.theme;document.body.dataset.look=pick.theme;document.body.dataset.chrome=pick.chrome;  // styles/ looks + chrome density, applied by tools/apply_look.py
  if(typeof applySafeZone==='function')applySafeZone(pick);  // talk/safezone.js: ?safe=70 venue safe zone + --safe-inset-x/y vars
  const cutN=pick.cut==='full'?Infinity:pick.cut==='20t'?19:+pick.cut;
  // walk built slides in SECTIONS order
  let si=-1,ci=0;
  allSlides.forEach(sl=>{
    const ty=sl.dataset.type;let cfg=null;
    if(ty==='lesson'){si=+sl.dataset.section;ci=0;cfg=SECTIONS[si].lesson;}
    else if(ty==='case'){cfg=SECTIONS[+sl.dataset.section].cases[ci++];}
    else return;
    let hide=pick.ports==='on'&&pick.cut==='20t'&&!!cfg.round2Budget;
    hide ||=pick.fs==='v2'&&pick.fsbudget==='tight'&&pick.cut==='20t'&&!!cfg.shortBudget;
    if(cfg.opt&&!cfg.opt.split('&').every(t=>{const [g,c]=t.split(':');return c.split('|').includes(pick[g]);}))hide=true;  // "a:x&b:y" = every condition must match
    if(cutN!==Infinity&&ty==='case'&&!(cfg.keep&&cfg.keep<=cutN))hide=true;
    if(hide)sl.dataset.hidden='1';
  });
  if(cutN!==Infinity){allSlides.filter(s=>s.dataset.type==='map').forEach(s=>s.dataset.hidden='1');}
  if(pick.ports==='on'){const b=allSlides.find(s=>s.dataset.type==='bonus');if(b)b.dataset.hidden='1';}
  if(typeof applyStorySpine==='function')applyStorySpine();
  // thesis + close copy alternates
  const th=TALK.thesisAlts[pick.thesis];const bon=allSlides.find(s=>s.dataset.type==='bonus');
  if(th&&bon){const t=bon.querySelector('.lesson-title'),g=bon.querySelector('.lesson-tagline');if(t)t.innerHTML=th.title.replace(/\n/g,'<br>');if(g)g.innerHTML=th.tagline;BONUS.notes=th.notes+'\n\n'+(BONUS.baseNotes||(BONUS.baseNotes=BONUS.notes));}
  const cl=TALK.closeAlts[pick.close];const cs=allSlides.find(s=>s.dataset.type==='close');
  if(cl&&cs){const t=cs.querySelector('.close-title'),u=cs.querySelector('.close-sub');if(t)t.innerHTML=cl.title;if(u)u.innerHTML=cl.sub;}
  // ambient cover motion
  if(pick.cover==='motion'){const cov=allSlides.find(s=>s.dataset.type==='cover');if(cov&&!cov.querySelector('.cover-ambient')){const f=document.createElement('iframe');f.className='cover-ambient anim-frame';f.src='media/motion/cover-ambient.html';f.setAttribute('frameborder','0');f.setAttribute('scrolling','no');cov.insertBefore(f,cov.firstChild);}}
}
(function(){
  function panel(){
    let el=document.getElementById('talk-opts');if(el){el.remove();return;}
    const pick=window.TALK_PICKS||talkPicks();el=document.createElement('div');el.id='talk-opts';
    el.innerHTML='<h3>Talk options <small>O to close · picks are saved in this browser</small></h3>'+Object.entries(TALK.options).map(([g,o])=>
      `<div class="to-row"><div class="to-g">${o.label}</div>${Object.entries(o.choices).map(([k,lbl])=>`<button data-g="${g}" data-c="${k}" class="${pick[g]===k?'on':''}">${lbl}</button>`).join('')}</div>`).join('')+
      '<div class="to-foot"><button data-reset="1">Reset to defaults</button><span>Share a combo: use ?cut=30&amp;story1=b</span></div>';
    el.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;let s={};try{s=JSON.parse(localStorage.getItem('pmre-opts')||'{}');}catch(_){}
      if(b.dataset.reset)s={};else{s={...s,...talkPicks()};s[b.dataset.g]=b.dataset.c;}try{localStorage.setItem('pmre-opts',JSON.stringify(s));}catch(_){}
      const u=new URL(location.href);Object.keys(TALK.options).forEach(g=>u.searchParams.delete(g));u.searchParams.delete('opt');location.href=u.toString();});
    document.body.appendChild(el);
  }
  document.addEventListener('keydown',e=>{if((e.key==='o'||e.key==='O')&&!e.metaKey&&!e.ctrlKey&&!/INPUT|TEXTAREA/.test(document.activeElement?.tagName||'')&&!document.activeElement?.isContentEditable){e.preventDefault();panel();}});
})();
