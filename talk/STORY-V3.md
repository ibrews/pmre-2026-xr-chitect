# PMRE v3 chronological story

Source: Alex's November 8, 2026 walk direction. Baseline `ca07098`; work stays on `story/v3-chronological`. Main and the organizer's older package are unchanged.

Full is primary: **80:00** authored budget. Medium (`cut=30`) is **44:25**. Short (`20` / `20t`) is **33:55**, or **48:55** with 15 minutes Q&A. These are slide budgets, not a measured rehearsal. Full and medium exceed the venue talk-plus-Q&A limit. AI defaults on; `ai=off` or `opt=ai:off` gives full **76:55**, medium **42:45**, short unchanged.

The running order starts with the interests, then the 2005–2010 student years, FDA/DK1/Macbeth/Ed Sullivan, Josh and Agile Lens in 2016, AU and teaching, Mexico and Four Seasons, RSC and repeatable tools, spatial storytelling, current splats/AI, and the audience's intersection. Numbered lesson cards and recap takeaways are removed. The two retained lane animations establish the colors.

Each content record owns `year` and `venn: [architecture, theater, technology]`. Weights are editorial emphasis, 0–1. `talk/story.js` renders a year and size-weighted three-icon Venn at bottom-right. Icon geometry comes from HarvardXR. All of it participates in the existing safe70 fit. `talk/v3-plan.json` is the per-beat data manifest; `talk/sections.js` drives the runtime and notes.

`slides/pmre/film-language` is a 28-second seekable schematic motion: static action, cut/reverse angle, close-up, cut across time, expressive tilt, montage, and VR's emerging language. It uses the existing SDFrame WAAPI protocol and supports seek, static and reduced motion. Museum/archive sources are in its notes. The drawings illustrate grammar and are not archival film frames. Dates are examples, not claims about who invented a technique first.

`media/v3/PROVENANCE.md` records the research media. AU queue year, Redleaf spelling, Picasso source, some project dates and exact RSC/SIGGRAPH/FMX scope remain flagged in notes. No Miranda anecdote or attributed Frost/Picasso quotation is presented as verified.

## Things to try

1. Open `index.html?cut=full&safe=70&theme=house` and follow the tracker through the story.
2. Press O and turn AI off; confirm the present-day splat story remains.
3. Open `?cut=20t` for the venue budget, then `?cut=30` for the medium rehearsal.
4. Press X to hide a slide locally; Shift+X reviews hidden slides. Exports ignore local hides.
5. Open `slides/pmre/film-language/film-language.html?t=12` and compare with `?static` and reduced motion.

Bake with `python3 tools/bake_talk.py`, regenerate timings with `node tools/talk_script.mjs`. Source edits belong on the story branch. Package with `node tools/export_venue_package.mjs --cuts full,30 --label 2026-11-08-v3 --no-keynote` after capture admission. Do not submit automatically.
