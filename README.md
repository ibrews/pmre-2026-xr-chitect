# Architect to XR-chitect

Alex Coulombe Presents at PMRE 2026, November 19, Las Vegas. A chronological story about architecture, theater and emerging technology becoming one career. Source lives on `story/v3-chronological`; main remains unchanged.

Full is the default **80:00** rehearsal. Medium (`30`) is **45:05**, short (`20` / `20t`) **34:35**. Short plus 15 minutes Q&A is **49:35**. These are authored budgets, including media playback, not a measured rehearsal. AI off gives full **76:55**, medium **43:25**, short unchanged. [Running order and notes](talk/REHEARSAL.md) · [V3 source guide](talk/STORY-V3.md).

## Quickstart

```bash
git clone --branch story/v3-chronological https://github.com/ibrews/pmre-2026-xr-chitect
cd pmre-2026-xr-chitect
python3 tools/serve_deck.py --port 8791
```

Open `http://127.0.0.1:8791/?cut=full&safe=70&theme=house`. Arrow keys advance slides and reveals. Fonts and media are local. Use the supplied server: its concurrent request handling prevents false image failures during QA.

## Things to Try

1. Follow the year and weighted architecture/theater/technology icons through the story.
2. At Picasso, reveal the left painting, then the right painting, then dates 1896 / 1972. Notes connect this to deliberate practice.
3. Press **O** to select the short cut, skip AI, or include the two extra Designing Naturally workflow demonstrations (`workflows=extended`).
4. Press **X** to hide or restore a slide locally. **Shift+X** includes hidden slides for review. These choices never alter source or exports.
5. Press **N** for presenter notes or **Shift+N** for the notes drawer. `?safe=70&safezone` shows the venue safe box.

## Source and media

Edit `talk/sections.js` and the relevant modules, then bake `index.html`. `talk/v3-plan.json` records the running order, authored budgets, source media, notes and merged beats. The restored Designing Naturally, AU 2017, RTC 2021 and HarvardXR media have separate relevant views. [New media manifest](media/v3-fix1/manifest.json) · [Source and uncertainty details](media/v3-fix1/PROVENANCE.md) · [Earlier sources](media/v3/PROVENANCE.md).

Picasso has three click states. The napkin sketch combines the sketchbook, sketching and sketch at scale in one beat. Children’s drawing/VR are one short personal beat. Set-designer footage is silent in both web and separate venue AV. Source captions that conflict with recalled dates are qualified in notes. Museum design work precedes the 2019 built view; the RTC 2021 Brockman comparison appears after the 2015–2016 design work.

## Verification and venue package

```bash
python3 tools/bake_talk.py
node tools/talk_script.mjs
python3 tools/check_branding.py
python3 tools/slide.py check .
node tools/qa_v3.mjs http://127.0.0.1:8791/ ../qa-runtime
node tools/sweep_deck.mjs 'http://127.0.0.1:8791/?cut=full&safe=70&theme=house' ../sweep 1920 1080 v3-fix1 --steps
node tools/export_venue_package.mjs --cuts full,30 --label 2026-11-09-v3-fix1 --no-keynote
```

Run heavy capture only after host admission. For admitted fleet capture, use `tools/venue_capture.mjs`, then pass `--captured DIR --cache DIR` to the same exporter. [Venue pipeline](README-VENUE.md). Each PowerPoint has its own separate numbered MP4 cues. No movies are embedded or linked. Full and medium are rehearsal cuts exceeding the venue slot; the web short cut fits the 50-minute talk-plus-Q&A budget. No organizer upload, email or submission is authorized.

## Credits

**Alex Coulombe Presents.** Built on [Spatial Deck](https://github.com/ibrews/spatial-deck). Project media retains credits to Fisher Dachs Associates, Agile Lens, collaborating architects, Royal Shakespeare Company and source photographers where known. DBOX renders remain visibly credited **Rendering: DBOX for Austin Capital Partners**. Simulator and web-rendered footage retain their actual playback identity.
