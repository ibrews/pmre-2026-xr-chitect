// The presenter supplies the ranking as a rhetorical frame; biographical evidence stays in notes.
SD.defineSlide({id:'pmre/niche-example',steps:0,
props:{headline:'Not the best X —\nthe best at X + Y',name:'',combination:'',src:'',credit:'',alt:''},assets:[],
provenance:['Restored from 4947e11; speaker notes retain original primary sources; portrait sources in media/v3-fix1, v3-fix3 and v3-fix5 manifests'],
css:`.sd-mod-pmre-niche-example{padding:0!important}.niche-stage{position:absolute;inset:0;background:#141110;color:var(--text)}.niche-headline{position:absolute;left:4%;top:15%;width:60%;margin:0;font:700 72px/1.16 var(--font-display,var(--font));white-space:pre-line}.niche-stage .case-title{position:absolute;left:4%;top:49%;margin:0!important;font:700 64px/1.15 var(--font-display,var(--font));max-width:60%}.niche-combination{position:absolute;left:4%;top:60%;margin:0;font:500 54px/1.2 var(--font);color:#d3bc91;max-width:61%}.niche-portrait{position:absolute;right:4%;top:19%;width:29%;height:53%;object-fit:contain}.niche-credit{position:absolute;left:4%;top:4%;max-width:90%;margin:0;font:400 22px/1.3 var(--font);color:#c3b9aa}`,
render(el,p){const root=document.createElement('div');root.className='niche-stage';el.append(root);
 for(const [tag,cls,value] of [['p','niche-headline',p.headline],['h2','case-title',p.name],['p','niche-combination',p.combination],['p','niche-credit',p.credit]]){const e=document.createElement(tag);e.className=cls;e.textContent=value;root.append(e);}
 const photo=document.createElement('img');photo.className='niche-portrait';photo.src=p.src;photo.alt=p.alt||p.name;root.append(photo);return{};
}});
