> November 11 Elizabeth review: full **80:00**, medium **40:55**, 20/20t **33:30** (48:30 including 15 minutes Q&A). Family footage, the queue selfie, built museum photo, AI placeholder callbacks and all niche examples are removed from every cut. Credits distinguish photography, visualization, venue and project roles; Brockman uses Rice’s Brandon Martin photograph. The final QR reads “Explore our immersive projects · agilelens.com”. See [review decisions and source map](talk/ELIZABETH-REVIEW.md).

# Architect to XR-chitect

Alex Coulombe Presents at PMRE 2026, November 19, Las Vegas. A chronological story about architecture, theater and emerging technology becoming one career. Source lives on `story/v3-chronological`; main remains unchanged.

Full is the default **80:00** rehearsal. Medium (`30`) is **40:55**, short (`20` / `20t`) **33:30**. Short plus 15 minutes Q&A is **48:30**. These are authored budgets, including media playback, not a measured rehearsal. AI and niche callback slides/options are removed in this revision. [Running order and notes](talk/REHEARSAL.md) · [V3 source guide](talk/STORY-V3.md).

## Quickstart

```bash
git clone --single-branch --branch story/v3-chronological https://github.com/ibrews/pmre-2026-xr-chitect
cd pmre-2026-xr-chitect
python3 tools/serve_deck.py --port 8791
```

Open `http://127.0.0.1:8791/?cut=full&safe=70&theme=house`. Arrow keys advance slides and reveals. Fonts and media are local. Use the supplied server: its concurrent request handling prevents false image failures during QA, and byte-range responses support actual video seeking and selected posters.

## Things to Try

1. Follow the year and weighted architecture/theater/technology icons through the story.
2. At Picasso, reveal the 1896 self-portrait, then the catalog-matched color *Facing Death*, then dates and ages 14–15 and 90. Notes connect this to deliberate practice.
3. Press **O** to select the short cut, include the two extra Designing Naturally workflow demonstrations (`workflows=extended`).
4. Press **X** to hide or restore a slide locally. **Shift+X** includes hidden slides for review. These choices never alter source or exports.
5. Press **N** for presenter notes or **Shift+N** for the notes drawer. `?safe=70&safezone` shows the venue safe box.

## Source and media

Edit `talk/sections.js` and the relevant modules, then bake `index.html`. `talk/v3-plan.json` records the running order, authored budgets, source media, notes and merged beats. The restored Designing Naturally, AU 2017, RTC 2021 and HarvardXR media have separate relevant views. [New media manifest](media/v3-fix1/manifest.json) · [Verified source details](media/v3-fix1/PROVENANCE.md) · [Earlier sources](media/v3/PROVENANCE.md).

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

## November 9 presenter corrections

The cover omits the year/Venn tracker. Picasso’s three-click-state comparison follows the 2016 hiring/curiosity beat. All content media reserves a footer for the title and tracker, keeping captions/credits baked into images and footage clear. Designing Naturally sequences use the same large source-ratio media and short lower-left title.

Motion sound design is original procedural synthesis by Alex Coulombe Presents (2026), with no sampled or third-party audio. `talk/motion-sfx.js` generates the same PCM samples for live WebAudio and `tools/motion_sfx.mjs` offline WAV generation. Both MP4 renderers mix those cues into their separate venue videos: car/engine passes and honks, road merges, Venn pops, projector clatter and hard-cut snaps. Live sounds require a trusted pointer/touch/key interaction, stop on slide exit and stay silent in static/reduced/export views. Add `?mute` or `?audio=off` to silence all deck SFX; `window.setMotionMuted(true)` also stops pending cues. This does not change source videos’ existing muted playback. Venue cue sheets identify the baked SFX audio tracks.

The traffic graphic includes four staggered car speech bubbles, each held 1.8 seconds with a paired horn. Timings remain full80:00 / medium40:55 / short33:30.

Venue export captures transparent title/credit/tracker chrome above video-backed canvases as well as normal videos, preserving the complete source credit on sequence movie posters and playback. Captured overlays exclude presenter navigation and step controls.

## November 9 verified facts

Speaker notes cite career dates, the Miranda quotation, AU 2017, TCG 2017 in Portland with the Brockman model, Perfect Day Mexico 2025, RSC rehearsal R&D in 2024–2025, SIGGRAPH 2025/2026 and FMX 2026 roles, the California/Miami 2026 tour, and the Sina Bernini Bristol hotel scan. The supplied monochrome 1972 Picasso was a different work. The displayed color *Facing Death* matches the June 30, 1972 catalog. [Additional source and portrait manifest](media/v3-fix3/manifest.json). Princeton teaching is dated 2021 by the presenter. Yu-Jun Yeh’s hiring year remains undocumented and omitted. No relative PMRE speaker order is claimed.

Niche options replace the default 65-second example at the same budget. The sourced combinations are facts; “best at X-plus-Y” and the Sondheim comparison are presenter opinion. Miranda is an outside example. Devon, Natalia and Matt are listed PMRE 2026 participants. `talk/story-baseline*.json` and `talk/story-plan.json` are historical source snapshots, rather than current fact status. Current wording lives in `talk/sections.js` and the generated rehearsal notes.
