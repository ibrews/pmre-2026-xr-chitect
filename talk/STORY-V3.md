# PMRE v3 chronological story

Source: Alex's November 8, 2026 walk direction. Baseline `ca07098`; work stays on `story/v3-chronological`. Main and the organizer's older package are unchanged.

Full is primary: **80:00** authored budget. Medium (`cut=30`) is **45:05**. Short (`20` / `20t`) is **34:35**, or **49:35** with 15 minutes Q&A. These are slide budgets, not a measured rehearsal. Full and medium exceed the venue talk-plus-Q&A limit. AI defaults on; `ai=off` or `opt=ai:off` gives full **76:55**, medium **43:25**, short unchanged.

The running order starts with the interests, then the 2005–2010 student years, FDA/DK1/Macbeth/Ed Sullivan, Josh and Agile Lens in 2016, AU and teaching, Mexico and Four Seasons, RSC and repeatable tools, spatial storytelling, current splats/AI, and the audience's intersection. Numbered lesson cards and recap takeaways are removed. The two retained lane animations establish the colors.

Each content record owns `year` and `venn: [architecture, theater, technology]`. Weights are editorial emphasis, 0–1. `talk/story.js` renders a year and size-weighted three-icon Venn at bottom-right. Icon geometry comes from HarvardXR. All of it participates in the existing safe70 fit. `talk/v3-plan.json` is the per-beat data manifest; `talk/sections.js` drives the runtime and notes.

`slides/pmre/film-language` is a 28-second seekable schematic motion: static action, cut/reverse angle, close-up, cut across time, expressive tilt, montage, and VR's emerging language. It uses the existing SDFrame WAAPI protocol and supports seek, static and reduced motion. Museum/archive sources are in its notes. The drawings illustrate grammar and are not archival film frames. Dates are examples, not claims about who invented a technique first.

`media/v3/PROVENANCE.md` records the original research media; `media/v3-fix1/manifest.json` and `PROVENANCE.md` record the restored sources. November 9 source verification resolves the AU queue (2017), Picasso work identities/ages, Mexico (2025), RSC 2024–2025 scope, SIGGRAPH 2025/2026 and FMX 2026 roles, the 2026 tour and Sina Bernini Bristol hotel. Miranda’s short verbatim recollection is cited to Jennifer Vanasco’s September 12, 2025 NPR review on CapRadio. Career dates distinguish dated teaching engagements from unknown first appointments. See the canonical KB presenter-career-facts reference and source table in the receipt.

## Things to try

1. Open `index.html?cut=full&safe=70&theme=house` and follow the tracker through the story.
2. Press O and turn AI off; confirm the present-day splat story remains.
3. Open `?cut=20t` for the venue budget, then `?cut=30` for the medium rehearsal.
4. Press X to hide a slide locally; Shift+X reviews hidden slides. Exports ignore local hides.
5. Open `slides/pmre/film-language/film-language.html?t=12` and compare with `?static` and reduced motion.

Bake with `python3 tools/bake_talk.py`, regenerate timings with `node tools/talk_script.mjs`. Source edits belong on the story branch. Package with `node tools/export_venue_package.mjs --cuts full,30 --label 2026-11-08-v3 --no-keynote` after capture admission. Do not submit automatically.

## November 9 media correction

Full has 72 default story slides before reveal expansion. Repeated-photo beats are merged or have distinct relevant media. Picasso uses the supplied paintings in three click states, placed after the 2016 hiring/curiosity lesson. The source-sequence module groups the sketchbook/sketching/full-scale sketch and the children’s drawing/VR. Designing Naturally s7–10, s18–20, s28, s34, s36, s38 and s57 are restored. Optional s45/s53 demonstrations sit after the sketch under `workflows=extended`, adding 3:25. Statue of Liberty Museum has distinct unbuilt and built views; The Shed and RSC have separate design/rehearsal views. Rice2015 precedes the RTC2021 virtual/built Brockman comparison.

The story-media module defers video source loading until activation, avoiding hidden-media preload stalls on option reload. Static video frames use explicit representative times where the first/last frame is weak. The set-designer derivative has no audio stream. The static Picasso module declares a minimal duration so advancing immediately reveals the next painting rather than consuming a redundant completion click.

`slide.py check` recognizes both JavaScript and JSON-quoted `use` keys. Runtime/sweep readiness uses DOMContentLoaded, followed by actual decoded-media/layout checks, rather than unrelated hidden video load completion. Existing safe70, tracker and separate-video exporter gates remain.

## Presenter corrections

The cover has no tracker. Content media and source sequences reserve a170px footer at the1920×1080 design size, so the title and tracker cannot mask source captions or credits. Source sequences now fill the slide with aspect-preserved media and a lower-left title; explanatory side copy remains in speaker notes. Picasso follows hiring/curiosity, with its original three reveals. All motion SFX use the deterministic synth in `talk/motion-sfx.js`, shared with both video exporters. Cue definitions live in each frame’s `MOTION_SFX`. Live playback requires trusted activation, respects mute/static/reduced and is canceled by the existing audio-context cleanup on slide exit. `?mute` / `?audio=off` silence SFX; no sampled audio requires licensing. Preserve the synthesis source in the capture-cache hash.

## Verified facts and selectable niche examples

The default `niche=devon` beat is 65 seconds. `niche=miranda`, `niche=natalia` and `niche=matt` replace it at the same budget. Each example states a sourced combination; “best at X-plus-Y” is presenter opinion, not a measured ranking. No relative speaker order is asserted. The abstract equipment example is removed. Hotel media is the existing 10-second PortalCam splat flythrough, credited to Josette Seitz / Agile Lens and identified as web-rendered footage.
