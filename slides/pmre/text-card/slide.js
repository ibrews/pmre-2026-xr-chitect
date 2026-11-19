// pmre/text-card: type-led beat (kicker, title, short lines, big figure, pull quote), presenter photos (side, row or mosaic layout), or a clearly labeled photo placeholder. Seekable iframe motion graphic, short fade-ins, no clicks.
SD.defineSlide({
  id: 'pmre/text-card',
  frame: 'text-card.html',
  manualSteps: true,
  steps: p => p.lineSteps ? p.lines.length : 0,
  duration: 4,
  props: {kicker: '', title: '', lines: [], big: '', quote: '', attr: '', placeholder: '', photos: [], layout: 'side'},
  assets: ['text-card.html'],
  provenance: ['PMRE v5 (2026-11-14): presenter-dictated storyflow beats'],
});
