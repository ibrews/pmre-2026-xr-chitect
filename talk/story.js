// Story chapter metadata is attached to every record, including excluded options.
function applyStorySpine(){
 document.body.classList.add('story-v1');let ci=0;
 allSlides.forEach(sl=>{const ty=sl.dataset.type;let cfg=null,ch=ty==='cover'||ty==='settings'?1:8;
  if(ty==='lesson'){ci=0;cfg=SECTIONS[+sl.dataset.section].lesson;ch=+sl.dataset.section+1;}
  else if(ty==='case'){cfg=SECTIONS[+sl.dataset.section].cases[ci++];ch=+sl.dataset.section+1;}
  sl.dataset.storyChapter=ch;sl.dataset.storyRole=ty==='lesson'?'chapter':ty==='close'?'takeaway':cfg?.storyRole||ty;
  sl.dataset.storyId=cfg?.id||`chapter-${ch}-${ty}`;
  if(ty==='bonus'||ty==='map')sl.dataset.hidden='1';
  if(ty==='settings')return;
  const label=document.createElement('div');label.className='story-chapter-label';label.textContent=ch+' / 8   '+SECTIONS[ch-1].storyLesson;sl.append(label);
 });
 if(!document.getElementById('story-spine-style')){const st=document.createElement('style');st.id='story-spine-style';st.textContent=`
 .story-v1 .story-chapter-label{position:absolute;left:3%;top:3%;font:500 30px/1.2 var(--font);letter-spacing:.02em;color:#a9a5a3;z-index:8}
 .story-v1 .slide-lesson .year-ghost,.story-v1 .slide-lesson .lesson-ey,.story-v1 .slide-lesson .lesson-tagline,.story-v1 .slide-lesson .lesson-tags,.story-v1 .slide-lesson .lesson-rule{display:none!important}
 .story-v1 .slide-lesson .lesson-title{font:800 180px/1.05 var(--font-display,var(--font));font-size:180px!important;max-width:94%;white-space:nowrap;margin:0;text-align:left;position:absolute;top:42%;left:3%;letter-spacing:-.025em}
 .story-v1 #journey{top:16.5%!important;bottom:auto!important;right:15.5%!important;width:240px!important;z-index:9}
 .story-v1 #journey .j-label{display:none!important}.story-v1 #journey.is-hidden{opacity:1!important}
 .story-v1 .slide[data-type="cover"] .event-tag,.story-v1 .slide[data-type="cover"] .talk-subtitle,.story-v1 .slide[data-type="cover"] .speaker-co{display:none}
 .story-v1 .slide[data-type="close"] .close-ey,.story-v1 .slide[data-type="close"] .close-sub,.story-v1 .slide[data-type="close"] .qr-label,.story-v1 .slide[data-type="close"] .qr-badge,.story-v1 .slide[data-type="close"] .contact-row{display:none}
 .story-v1 .slide[data-type="close"] .close-title{font-size:100px!important}.story-v1 .slide[data-type="close"] .close-qr-row{margin-top:40px}
 `;document.head.append(st);}
 const fitTitles=()=>{allSlides.filter(s=>s.dataset.storyRole==='chapter').forEach(sl=>{const h=sl.querySelector('.lesson-title,.case-title');if(!h)return;const cs=getComputedStyle(h),c=document.createElement('canvas').getContext('2d');c.font=`${cs.fontWeight} 180px ${cs.fontFamily}`;const text=cs.textTransform==='uppercase'?h.textContent.toUpperCase():h.textContent;h.style.setProperty('font-size',Math.min(180,Math.floor(innerWidth*.92/c.measureText(text).width*180))+'px','important');});};
 document.fonts?.ready.then(fitTitles);addEventListener('resize',fitTitles);requestAnimationFrame(fitTitles);
}
