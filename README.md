## PMRE v8 — conference voices and attendee niches

Source: `story/v8`; publish only the new `/v8/` subtree. Root and `/v3/` through `/v7/` are preserved. Conference quotes now appear on slides; attendee Venn spotlights, Matt Gio’s cognitive-ladder idea, an attributed Nucleus4D claim and Emily Olman’s AR Insider Four Seasons header capture are included. Via’s company could not be verified and is omitted. Source details: `media/pmre/v8/provenance.json`.

Package with `python3 tools/package_offline.py --out <organizer-package>`; verify the extracted ZIP using `node tools/qa_v8.mjs ROOT OUT chrome|firefox` and `tools/qa_v7_resources.mjs`. No Drive upload.

# Architect to XR-chitect

Alex Coulombe Presents at PMRE 2026, November 19, Las Vegas. V7 extends v6 and follows Alex’s November 18 notes and local talkthrough, from architecture/theater/technology to practical spatial-media services and premium collaboration with Agile Lens.

[Present v7](https://ibrews.github.io/pmre-2026-xr-chitect/v7/) · [Free starter guide and links](https://ibrews.github.io/pmre-2026-xr-chitect/v7/resources/)

## Present locally on Windows

Extract **all** files from the offline ZIP, then double-click `index.html` and open it in Chrome or Firefox. No Python, server or internet is required for the presentation. Keep its folders together. Press F11 for full screen; arrows advance; O opens the cut/theme options; Shift+N shows notes. The QR destination and external resource links need internet on the viewer’s device.

Full is the default; medium and short cuts remain selectable. These are authored rehearsal budgets, not a measured performance; see `talk/REHEARSAL.md` for the current order and timing. All length cuts retain the three-beat ending: how spatial media changes property work; start building and selling; collaborate on premium briefs. The final slide has one QR plus Q&A. The final QR opens the Welcome PMRE Attendees hub (password `pixie`, a playful client-side gate, not security), including a real Markdown/ZIP second-brain kit, 1:1/company training offer (20% off; `PMRE20` is a TODO placeholder, contact Alex to confirm), project details and the full deck.

## Author and package

Source branch: `story/v7`. Edit `talk/sections.js` and slide modules, then run:

```sh
python3 tools/bake_talk.py
python3 tools/slide.py check
python3 tools/check_branding.py
```

Runtime dependencies are local classic scripts, relative HTML frames, fonts and media. No JSON is fetched for local presentation. The camera concept uses its built-in 2D projection over `file://`; the normal served version can use its vendored Three.js renderer. Optional cloud notes sync is opt-in.

After committing all required runtime assets (including media ignored by `.gitignore`):

```sh
python3 tools/package_offline.py --out /absolute/path/to/organizer-package
node tools/qa_v7.mjs /absolute/path/to/extracted-package /absolute/path/to/qa-chrome chrome
node tools/qa_v7.mjs /absolute/path/to/extracted-package /absolute/path/to/qa-firefox firefox
node tools/qa_v7_resources.mjs /absolute/path/to/extracted-package /absolute/path/to/qa-hub chrome
```

`qa_v7.mjs` uses system Chrome and installed `playwright-core` (set `PLAYWRIGHT_CORE` if needed). It checks every absolute slide, including hidden structural slides, over ordinary `file://`, records console/page/network/media failures, captures visible slides and checks all length/AI combinations. It does not pass security-bypass flags. ZIPs include a file-hash manifest, opening instructions and an external SHA-256 sidecar. Do not upload to Drive until Alex requests it.

Publish by copying the committed source tree into a **new `/v7/` directory on main**, preserving root, `/v3/`, `/v4/`, `/v5/`, `/v6/`. Compare source and destination tracked paths after copying: nested `.gitignore` rules can silently omit force-tracked media. Public project credits remain in notes and meaningful media credits; no source-deck captions are added.

## Things to Try

1. Open `index.html` without a server, disconnect the network and step through the entire deck.
2. Pause the opening sprite/lane animation, then click through its four overlap reveals.
3. Compare virtual and built Macbeth/Brockman images; inspect the restored Waldorf and Geffen galleries without pixel cycling.
4. Watch the Aspen setup shrink beside the America map while the video continues.
5. Use the final QR/resources page to download the free guide, then inspect the package/pricing example and collaboration close.

## Source and attribution

This talk is built with [Spatial Deck](https://github.com/ibrews/spatial-deck). Media credits and claim sources live in presenter notes and the existing project manifests. New Apple SHARP examples come from the [official research page](https://apple-aiml-research.github.io/ml-sharp/), not a commissioned property survey. Pricing figures are illustrative teaching examples, not vendor rates or Agile Lens quotes.

V7 adds original XR tiers and plan-to-presence diagrams inspired by Matt Michalski (credited in notes); public product imagery/official specs for Vision Pro M5, Quest 3 and XREAL AURA, plus a generic NDA silhouette for PICO Space Pro; Alex’s Cotton placeholder still and Latest BPI Trailer V2 derivative. Source hashes, number sources and qualifications are in `media/pmre/v7/provenance.json` and the canonical KB v7 receipt. No Drive uploads.
