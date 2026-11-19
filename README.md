# Architect to XR-chitect

Alex Coulombe Presents at PMRE 2026, November 19, Las Vegas. V6 follows Alex’s November 18 notes and local talkthrough, from architecture/theater/technology to practical spatial-media services and premium collaboration with Agile Lens.

[Present v6](https://ibrews.github.io/pmre-2026-xr-chitect/v6/) · [Free starter guide and links](https://ibrews.github.io/pmre-2026-xr-chitect/v6/resources/)

## Present locally on Windows

Extract **all** files from the offline ZIP, then double-click `index.html` and open it in Chrome or Firefox. No Python, server or internet is required for the presentation. Keep its folders together. Press F11 for full screen; arrows advance; O opens the cut/theme options; Shift+N shows notes. The QR destination and external resource links need internet on the viewer’s device.

Full is the default; medium and short cuts remain selectable. These are authored rehearsal budgets, not a measured performance; see `talk/REHEARSAL.md` for the current order and timing. All length cuts retain the three-beat ending: how spatial media changes property work; start building and selling; collaborate on premium briefs. The final slide has one QR plus Q&A. There is a real downloadable starter guide, with no promised second-brain signup or course entitlement.

## Author and package

Source branch: `story/v6`. Edit `talk/sections.js` and slide modules, then run:

```sh
python3 tools/bake_talk.py
python3 tools/slide.py check
python3 tools/check_branding.py
```

Runtime dependencies are local classic scripts, relative HTML frames, fonts and media. No JSON is fetched for local presentation. The camera concept uses its built-in 2D projection over `file://`; the normal served version can use its vendored Three.js renderer. Optional cloud notes sync is opt-in.

After committing all required runtime assets (including media ignored by `.gitignore`):

```sh
python3 tools/package_offline.py --out /absolute/path/to/organizer-package
node tools/qa_v6.mjs /absolute/path/to/extracted-package /absolute/path/to/qa-output
```

`qa_v6.mjs` uses system Chrome and installed `playwright-core` (set `PLAYWRIGHT_CORE` if needed). It checks every absolute slide, including hidden structural slides, over ordinary `file://`, records console/page/network/media failures, captures visible slides and checks all length/AI combinations. It does not pass security-bypass flags. ZIPs include a file-hash manifest, opening instructions and an external SHA-256 sidecar. Do not upload to Drive until Alex requests it.

Publish by copying the committed source tree into a **new `/v6/` directory on main**, preserving root, `/v3/`, `/v4/`, `/v5/`. Compare source and destination tracked paths after copying: nested `.gitignore` rules can silently omit force-tracked media. Public project credits remain in notes and meaningful media credits; no source-deck captions are added.

## Things to Try

1. Open `index.html` without a server, disconnect the network and step through the entire deck.
2. Pause the opening sprite/lane animation, then click through its two reveals.
3. Compare virtual and built Macbeth/Brockman images; inspect the restored Waldorf and Geffen galleries without pixel cycling.
4. Watch the Aspen setup shrink beside the America map while the video continues.
5. Use the final QR/resources page to download the free guide, then inspect the package/pricing example and collaboration close.

## Source and attribution

This talk is built with [Spatial Deck](https://github.com/ibrews/spatial-deck). Media credits and claim sources live in presenter notes and the existing project manifests. New Apple SHARP examples come from the [official research page](https://apple-aiml-research.github.io/ml-sharp/), not a commissioned property survey. Pricing figures are illustrative teaching examples, not vendor rates or Agile Lens quotes.
