(function(){
 const grid=document.getElementById('room-cards');
 PMRE_SPONSORS.filter(s=>s.pmreRole!=='presenter').forEach(s=>{
  const card=document.createElement('article');card.className='card sponsor-card';
  const img=document.createElement('img');img.src='../assets/pmre-sponsors/'+s.logo;img.alt=s.name;img.className='sponsor-logo';card.append(img);
  const eyebrow=document.createElement('span');eyebrow.className='step';eyebrow.textContent=(s.step+(s.also?' + '+s.also:'')).toUpperCase()+' · '+(s.pmreRole==='listing ecosystem'?'Listing ecosystem':'PMRE '+s.pmreRole);card.append(eyebrow);
  const h=document.createElement('h3'),a=document.createElement('a');a.href=s.url;a.textContent=s.name;h.append(a);card.append(h);
  const what=document.createElement('p');what.textContent=s.oneLiner;card.append(what);
  const next=document.createElement('p'),b=document.createElement('b');b.textContent='The next step: ';next.append(b,document.createTextNode(s.nextStep));card.append(next);grid.append(card);
 });
})();
