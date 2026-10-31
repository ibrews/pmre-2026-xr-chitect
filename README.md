# Architect to XR-chitect: The Best Career Advice I Ever Ignored

**Alex Coulombe at PMRE 2026** (Photo + Media for Real Estate), Palms Casino Resort, Las Vegas, Thursday, November 19, 11:00 am. The talk follows one winding career through architecture, theater and VR, and connects it to the craft of real-estate photographers and videographers.

**▶ View the deck:** https://ibrews.github.io/pmre-2026-xr-chitect/

The deck is built on [Spatial Deck](https://github.com/ibrews/spatial-deck), a single-file HTML presentation framework.

## Quickstart

```bash
git clone https://github.com/ibrews/pmre-2026-xr-chitect
open pmre-2026-xr-chitect/index.html
```

There's no build step. Arrow keys or clicks advance the slides.

## Things to Try

1. Open the deck and press **→** through the opening. Right after the chapter card, 8-bit Alex walks in and powers up with a headset (→ again for the bio, the Unreal power-up with fireballs, and the stat cards), then the Agile Lens monocle orbit counts back to 2016 over five clicks. The "Pick a lane" motion graphic follows, and every one of these replays each time you land on its slide. Turn the intro off with `?intro=none`, or keep just the power-up with `?intro=alex`. The "Pick a lane" slide is now `lane-traffic` (sound on: pixel Alex dodges honking traffic across the three lanes, then the roads curl into the Venn: "Reframe it."). Other versions to compare: `?lanemotion=original` (no sprite), `?lanemotion=sprite` (pixel Alex walks the lane and collects the temple, stage and monitor power-ups), `?lanemotion=venn` (he bounces through the HarvardXR Venn) and `?lanemotion=lanevenn` (the lane curls into the Venn).
2. Press **O** to open the options picker. You can switch the opening, the thesis line, the close, the length (full ~69 min, medium ~57 min, short ~36 min, trimmed short 34:30) and the look: House (theater program, the default), Drawing set, Folio or Noir (the original), from the Spatial Deck style library in `styles/`. Your picks are saved in your browser.
3. Use `index.html?cut=20t` for cut20 minus the 60-second illustrative scale motion (34:30 talk + 15 min Q&A = 49:30). Existing cuts keep their content and timings. Try a combination straight from the URL: `index.html?open=question&thesis=b&cut=30&theme=sheet`.
4. Press **N** for the presenter-notes popup, or open `index.html?notes` on a phone for the speaker companion.
5. Watch the bottom-right corner as you move through the chapters: pixel Alex walks a tiny braided road to each chapter's stop, gets his headset on the 2013 card, takes it off on the 2020 card to reveal his pandemic beard, and waves on the close. `?journey=map` keeps the minimap without the hop-outs; `?journey=off` removes him. Open `index.html?reduced` to see each motion graphic as its final frame with Alex simply placed at his stop (the reduced-motion mode; it also works offline).
6. Go to the 2025 chapter, "Capturing Places That Don’t Exist" (after the holodeck timeline). Three clicks on **Cut Your Own Version of the Show** walk the A Christmas Carol VR recording to your camera (50 mm), your credited shot and the working cut in 2.39. Then **Find the Shot**: three clicks switch to 85 mm, add the 2.39 mask and take a wide, a two-shot and a close-up. Between clicks, drag the camera on the plan or press the lens buttons yourself; the deck will not advance while you play. The viewfinder is real 3D when the deck is served over http; opened from a file it draws a flat version of the same set.
7. Open `index.html?safe=70&safezone` to see the deck the way PMRE's concave 1920×1080 screen needs it: each slide's content fitted to the centered 1344×756 safe zone (dashed box) as large as it will go, background still full-frame. The same toggle is in the **O** picker as "Venue safe zone".
8. Build the organizer package (PowerPoint + separate MP4s + cue sheet + checks) in one command: `PLAYWRIGHT_CORE=/Users/alex/GH/xrsim/node_modules/playwright-core node tools/export_venue_package.mjs --cuts 20,30`. SVG parts have unique package names, including repeated artwork, so PowerPoint can open without a duplicate-part repair. It walks every slide and substep in safe-zone mode, re-renders only the animations that changed, and exits 1 with a slide-by-slide list if anything breaks a venue rule.

## Four Seasons chapter (2026-10-30)

The default `fs=v2` chapter introduces Lake Austin with the supplied images, reveals **$500M+ presales** and **$870M investment** separately, retains the walkable scale / spike-tape material, maps the traveling holodeck, plays the complete Aspen video, and closes with the Perfect Day Mexico counterpoint. The $870M is the project’s TYKO construction loan; it is not VR revenue. Credits and timestamped source prompts are in the notes and [media provenance](media/pmre/fs-v2/PROVENANCE.md).

- New chapter: [`?opt=fs:v2`](https://ibrews.github.io/pmre-2026-xr-chitect/?opt=fs:v2). Original: `?fs=legacy`.
- Venue short: `?opt=fs:v2&cut=20t&safe=70`. Default `fsbudget=tight` skips four repeated setup cards only for v2 / 20t (ADVICE, 2010, TASTE, YOU); `?fsbudget=all` restores them. No notes or media holds are shortened.
- Default estimates: **20t 33:45 · 20 41:45 · 30 61:30 · full 72:15**. 20t plus 15 minutes Q&A is 48:45. Medium/full remain rehearsal material. Legacy chapter timing is unchanged.
- **ALEX TO CONFIRM:** California tour stops, dates and photo; itinerary order; relationship of the older 57th Street montage to the 2026 NYC pop-up; Aspen source audio; Alex’s firsthand Mexico lesson. The map visibly marks California’s missing photo instead of reusing a different location.
- Fonts and the used Three.js module are local. Optional notes sync loads only with `?sync`. The venue exporter now emits complete local MP4s, with original audio and a safe-zone final-frame poster, alongside seekable motions. Run `node tools/tests/test_venue_local_video.mjs` for its regression fixture.

Rebuild from this checkout with `python3 tools/bake_talk.py` and `node tools/talk_script.mjs`. Repackage with `PLAYWRIGHT_CORE=/Users/alex/GH/xrsim/node_modules/playwright-core node tools/export_venue_package.mjs --cuts 20t,30 --label 2026-10-30-holodeck` (use the documented `--captured` path when rendering off-host).

## What's in here

| Path | What |
|---|---|
| `talk/sections.js` | Talk content and presenter notes. Edit here, then run `python3 tools/bake_talk.py` |
| `talk/options.js` | The runtime options picker (key **O** or URL params) |
| `talk/intro.js`, `talk/intro.css` | The two intro slides (layouts `intro-alex` and `intro-lens`), ported from Alex's HarvardXR, FMX and NXT BLD decks. Their text lives in the `intro` / `lens` objects in `sections.js`; `bake_talk.py` splices both files in |
| `talk/journey.js`, `talk/journey.css` | The journey minimap and persistent pixel Alex (option `journey`), after the HarvardXR keynote's bottom-right tracker. Spliced in by `bake_talk.py`; PPTX PNGs come from `tools/render_journey_png.mjs` into `media/journey/` |
| `talk/REHEARSAL.md` | Timed run-of-show and full script, generated by `node tools/talk_script.mjs` |
| `talk/OPTIONS.md` | Every option, each with a one-line pitch |
| `media/motion/*.html` | Seekable motion graphics (`window.seek(sec)`, `?static`, `?t=N`) |
| `media/motion/mp4/` | MP4 and poster renders of each motion graphic (`node tools/render_motion.mjs`) |
| `media/pmre/` | Talk photos and renders, with sources in `PROVENANCE.md` |
| `tools/export_talk_pptx.py` | Editable PowerPoint export, e.g. `--pick cut=30 --pick thesis=b` |
| `talk/safezone.js` | Venue safe zone (`?safe=70`, `?safezone` QA box); defines `--safe-inset-x/y` and `--safe-scale` |
| `tools/export_venue_package.mjs` | PMRE organizer package: `venue_capture.mjs` (drives the rendered deck, one PPTX slide per build state, MP4 per animated state) → `venue_pptx.py` (native text/pictures/SVG over a frame image, clean stage notes) → `venue_checks.py` (safe zone, dark, no embedded media/links, cue files + durations, timing; `--selftest` proves each check fails on a broken copy) |
| `tools/venue_audit_selftest.mjs` | Proves the baked-in video text audit is not vacuous (full-frame motion text must be flagged, safe-framed must pass). Cross-host renders: run `venue_capture.mjs` on another machine, then `export_venue_package.mjs --captured DIR --cache DIR` |

To pull framework updates: `git remote add upstream https://github.com/ibrews/spatial-deck && git fetch upstream`.

## Credits

**Alex Coulombe Presents.** Built on the open-source [Spatial Deck](https://github.com/ibrews/spatial-deck) framework (see `LICENSE`). Sources for the project imagery are credited in `media/pmre/PROVENANCE.md`.
