// pmre/ring-chapter: chapter break. Outer ring of years 2005–2026 with a marker that travels to this chapter's year; the inner Venn shows how much architecture, theater and technology were in play. Seekable iframe motion graphic, ~3.8 s, no clicks.
SD.defineSlide({
  id: 'pmre/ring-chapter',
  frame: 'ring-chapter.html',
  steps: 0,
  duration: 3.8,
  props: {from: 2026, year: 2005, kicker: 'REWIND', label: '2005', sub: '', venn: [1, 1, 1], vennFrom: null, dur: 2.6, sfx: ''},
  assets: ['ring-chapter.html'],
  shared: ['kit/sprite.js'],
  provenance: ['PMRE v5 (2026-11-14): presenter-requested year ring + Venn progress indicator'],
});
