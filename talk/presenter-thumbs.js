// Presenter window (press N): adds live previews of the current and next slide above the notes.
(function(){
  if(window.__SD_THUMB||typeof openPresenterPopup!=='function')return;
  const base=location.pathname+'?thumb=1'+(location.search?'&'+location.search.slice(1):'');

  // Notes view preferences (persist across talks on this machine).
  const pref=(k,dflt)=>{try{return localStorage.getItem('pmre-notes-'+k)||dflt}catch(e){return dflt}};
  const setPref=(k,v)=>{try{localStorage.setItem('pmre-notes-'+k,v)}catch(e){}};
  function applySize(){const w=_notesWin;if(!w||w.closed)return;const n=w.document.getElementById('pn-notes');if(n)n.style.fontSize=pref('size','15')+'px'}
  // Bullets: drop production metadata, split the spoken prose into one line per sentence.
  const META=/^(⏱|Year:|Venn weights|Delivery prompts|Creative\/source credit|Sources?:|Source |Image provenance|Clip:|V\d+ (direction|:)|Elizabeth review|Merged delivery context|Restored |Talkthrough \d)/i;
  function bullets(t){const out=[];for(const para of (t||'').split(/\n\s*\n|\n/)){const p=para.trim();if(!p||META.test(p)||/https?:\/\//.test(p))continue;
    for(const sen of p.split(/(?<=[.!?”])\s+(?=[A-Z“"(])/)){const x=sen.trim();if(x)out.push(x)}}return out}
  function esc(x){return x.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]))}
  function renderNotes(){const w=_notesWin;if(!w||w.closed)return;const d=w.document,el=d.getElementById('pn-notes');if(!el)return;
    const mode=pref('mode','script'),raw=getSlideNotes(current)||'';
    d.getElementById('pn-bul')?.classList.toggle('on',mode==='bullets');d.getElementById('pn-scr')?.classList.toggle('on',mode==='script');
    if(mode==='bullets'){const b=bullets(raw);el.innerHTML=b.length?'<ul>'+b.map(x=>'<li>'+esc(x)+'</li>').join('')+'</ul>':'(no notes)'}
    else el.textContent=raw||'(no notes)';
    applySize()}
  const orig=openPresenterPopup;
  function inject(){
    const w=_notesWin;if(!w||w.closed)return;const d=w.document;
    if(d.getElementById('pn-thumbs'))return;
    try{w.resizeTo(1000,820)}catch(e){}
    const st=d.createElement('style');
    st.textContent='#pn-thumbs{display:grid;grid-template-columns:1.4fr 1fr;gap:14px;margin:0 0 16px}#pn-thumbs figure{margin:0}#pn-thumbs figcaption{font-size:.68rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:6px}#pn-thumbs .box{position:relative;aspect-ratio:16/9;overflow:hidden;border-radius:8px;border:1px solid rgba(255,255,255,.15);background:#000}#pn-thumbs iframe{position:absolute;left:0;top:0;width:1920px;height:1080px;border:0;transform-origin:0 0;pointer-events:none}#pn-thumbs .next .box{opacity:.85}';
    d.head.appendChild(st);
    const wrap=d.createElement('div');wrap.id='pn-thumbs';
    wrap.innerHTML='<figure class="cur"><figcaption>Now</figcaption><div class="box"><iframe id="pn-cur"></iframe></div></figure><figure class="next"><figcaption>Next</figcaption><div class="box"><iframe id="pn-nxt"></iframe></div></figure>';
    const title=d.getElementById('pn-title');title.parentNode.insertBefore(wrap,title);
    st.textContent+='#pn-ctl{display:flex;align-items:center;gap:14px;margin:0 0 12px;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.5)}#pn-ctl input{accent-color:#d7b668;width:160px}#pn-ctl button{font:inherit;letter-spacing:.12em;text-transform:uppercase;padding:6px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:transparent;color:rgba(255,255,255,.55);cursor:pointer}#pn-ctl button.on{background:#d7b668;color:#111;border-color:#d7b668}.pn-notes ul{margin:0;padding-left:1.1em;white-space:normal}.pn-notes li{margin:0 0 .45em}';
    const ctl=d.createElement('div');ctl.id='pn-ctl';
    ctl.innerHTML='<label>Text size <input id="pn-size" type="range" min="12" max="36" step="1"></label><span style="flex:1"></span><button id="pn-bul">Bullets</button><button id="pn-scr">Script</button>';
    title.parentNode.insertBefore(ctl,title.nextSibling);
    const size=d.getElementById('pn-size');size.value=pref('size','15');
    size.addEventListener('input',()=>{setPref('size',size.value);applySize()});
    d.getElementById('pn-bul').onclick=()=>{setPref('mode','bullets');renderNotes()};
    d.getElementById('pn-scr').onclick=()=>{setPref('mode','script');renderNotes()};
    const fit=()=>wrap.querySelectorAll('.box').forEach(b=>{b.querySelector('iframe').style.transform='scale('+(b.clientWidth/1920)+')'});
    w.addEventListener('resize',fit);
    const cur=d.getElementById('pn-cur'),nxt=d.getElementById('pn-nxt');
    cur.src=base+'#'+(current+1);nxt.src=base+'#'+(nextVisible(current,1)+1);
    [cur,nxt].forEach(f=>f.addEventListener('load',()=>{fit();sync()}));
    setTimeout(fit,50);
  }
  function go(f,i){try{const cw=f.contentWindow;if(cw&&typeof cw.goTo==='function'&&cw.current!==i)cw.goTo(i)}catch(e){}}
  function sync(){
    const w=_notesWin;if(!w||w.closed)return;const d=w.document;
    const cur=d.getElementById('pn-cur'),nxt=d.getElementById('pn-nxt');if(!cur)return;
    const n=nextVisible(current,1);go(cur,current);
    nxt.parentNode.parentNode.style.visibility=n===current?'hidden':'visible';if(n!==current)go(nxt,n);
  }
  window.openPresenterPopup=openPresenterPopup=function(){orig.apply(this,arguments);inject();sync();renderNotes();};
  const send=sendNotesUpdate;
  window.sendNotesUpdate=sendNotesUpdate=function(){send.apply(this,arguments);sync();renderNotes();};
})();
