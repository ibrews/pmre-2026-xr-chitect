# Architect to XR-chitect

Alex Coulombe at PMRE2026, November19, Las Vegas. This preview tells one chronological career story through eight plain lessons, real project media, and a repeatable takeaway at each chapter’s end.

**Branch:** `story/chapters-v1`. The story stays off main. Main contains the round4 deck plus the separately shipped **X / Shift+X** hide controls (`9d0a441`). Preview and package evidence: [Story v1](talk/STORY-V1.md).

## Quickstart

```bash
git clone --branch story/chapters-v1 https://github.com/ibrews/pmre-2026-xr-chitect
cd pmre-2026-xr-chitect
python3 tools/serve_deck.py --port 8775
```

Open `http://127.0.0.1:8775/?cut=20t&safe=70&theme=house`. Arrow keys navigate. Files, fonts and media are local; the deck can also open from `index.html`.

## Things to Try

1. Advance through the eight chapters. The quiet chapter label and journey minimap keep your place. Each chapter opens with a lesson and ends with a takeaway.
2. Press **O** and choose one of three expressions for any chapter. The choice replaces its opening card and preserves your current cut. URL example: `?cut=30&story1=b&safe=70`.
3. Press **X** to hide/restore the current slide, then **Shift+X** to review hidden slides. The grid shows hidden slides dimmed and struck. Ctrl/Cmd-click a thumbnail uses the same hide list.
4. Press **A**, then **Copy All**. Its **HIDDEN SLIDES** section lists the deck-counter number, content ID and title, even without element annotations. Paste the list to request a permanent cut.
5. Press **N** for presenter notes, **Shift+N** for the notes drawer, or **?** for help. Try `?safe=70&safezone` to show the venue’s centered1344×756 safe region.

## Chapters and timing

1. Ignore the lane
2. Your skills travel
3. Teach to learn
4. Work at human scale
5. Make it repeatable
6. Capture impossible places
7. Share your niche
8. Find your weird intersection

**20t:29:10**, plus15minutes Q&A=44:10. **30:38:00**, expanded reference. These are authored budgets, including clip playback, not a measured rehearsal. [Run of show and complete notes](talk/REHEARSAL.md).

Content slides contain one visual and one line of at most8words. Credits live in speaker notes and [media provenance](media/story/PROVENANCE.md); the required **Rendering: DBOX for Austin Capital Partners** is the sole line on its two slides. Simulator and web-rendered footage retain explicit identity in their visible line. Original wording and notes are preserved verbatim in actual chapter takeaway/closing notes; [allocation](talk/story-preservation.json), [baseline source](talk/story-baseline.json), [word counts](talk/WORD-COUNTS.md).

## Presenter keep/cut review

X choices persist in localStorage for this browser and deck path. Normal navigation skips them; Shift+X includes them for review. Typing and command-modified keys are ignored. They never change baked defaults, print/shot output or venue exports. An explicit source-apply request is required to make a keep/cut list permanent. Baked cut and option exclusions remain separate.

## Editing and verification

Edit `talk/sections.js`, `talk/options.js`, `talk/story.js`, or `slides/pmre/story-media/slide.js`, then:

```bash
python3 tools/bake_talk.py
node tools/talk_script.mjs
python3 tools/slide.py check .
node tools/tests/test_story.cjs http://127.0.0.1:8775/
node tools/tests/test_presenter_hidden.cjs http://127.0.0.1:8775/
```

There is no bundler or npm build. `index.html` is the baked runtime. [Module contract](slides/README.md). The chapter alternatives use `story1`–`story8` with choices`a`, `b`, `c`.

Venue package command:

```bash
node tools/export_venue_package.mjs --cuts 20t,30 --label 2026-11-01-story-v1 --no-keynote
```

For admitted off-host capture, use `venue_capture.mjs` on that host, copy its work/cache directories back, and add `--captured DIR --cache DIR`. See [venue pipeline](README-VENUE.md). Submit the cut20t PowerPoint, separate MP4s and VIDEO-CUES. No organizer upload/email/submission is performed by this work.

## Credits

**Alex Coulombe Presents.** Built on [Spatial Deck](https://github.com/ibrews/spatial-deck), with the existing house look and venue pipeline. Actual media comes from the HarvardXR, NXT BLD, MIA and VR Cinematics decks, supplied PMRE assets, and Alex’s UOXR/SplatDiorama artifacts. [All selected sources and credits](media/story/PROVENANCE.md); [original sources](media/pmre/PROVENANCE.md).

## Story v2 venue polish

On `story/chapters-v1`, story media fills the safe zone as far as its native aspect permits. Headlines overlay a dark lower band; chapter lessons and one-line takeaways use large fitted display type. The shared layout sizes the element to the actual media edge, with a 90% brightness treatment for the dark room. Images are never stretched or cropped. Aspen uses a real frame at seven seconds as its static poster. Separate AV exports retain the same overlay chrome; its Aspen poster uses that same selected time, while other clips use the final frame.

Preview URLs and the `2026-11-01-story-v2` package receipt are recorded in `talk/STORY-V2.md`. X hides/restores a slide locally; Shift+X enables review navigation through hidden slides on both the story branch and main.
