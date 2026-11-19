// Presenter window (press N): adds live previews of the current and next slide above the notes.
(function(){
  if(window.__SD_THUMB||typeof openPresenterPopup!=='function')return;
  const base=location.pathname+'?thumb=1'+(location.search?'&'+location.search.slice(1):'');
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
  window.openPresenterPopup=openPresenterPopup=function(){orig.apply(this,arguments);inject();sync();};
  const send=sendNotesUpdate;
  window.sendNotesUpdate=sendNotesUpdate=function(){send.apply(this,arguments);sync();};
})();
