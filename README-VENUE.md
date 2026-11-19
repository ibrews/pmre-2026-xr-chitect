# PMRE story-v1 venue delivery

Submit the **cut20t PowerPoint**, separate`videos/` folder and`VIDEO-CUES.md`. The authored talk budget is **29:10**, or **44:10 with15minutes Q&A**. Cut30 is **38:00**, expanded reference. Cut labels are historical, not duration claims. Rehearsal is still required.

This revision is on`story/chapters-v1`; main retains the round4 story plus X/Shift+X controls. See [Story v1 preview](talk/STORY-V1.md).

The deck uses1920×1080 and fits all type/key media into the centered1344×756 safe region (`?cut=20t&safe=70&theme=house`). The quiet chapter label and journey minimap are also inside that region. Content slides have one real image/video and one line of at most8words. The six-word DBOX credit is the sole line on its two slides. Other media credits and source qualifications are in speaker notes and [provenance](media/story/PROVENANCE.md).

The eight O-picker groups each replace their chapter’s opening card. They preserve the current cut and timing. X/Shift+X choices are local rehearsal state, ignored by print/shot and venue captures; permanent source cuts require an explicit request.

Venue export uses native editable text/pictures over a raster background, complete separate video files, final-frame posters and full untruncated notes. Source-ratio media remains contained. Aspen’s full63.62second clip retains its audio; the55second Blueprint seat-demo hold includes its49.57second source. The Floor Tour plan demo is darkened to65% and its still to55% for the dark room; original bytes remain unchanged. Aspen stays at94% brightness.

Rome flythroughs are web-rendered scan footage, SplatDiorama is a build77simulator screenshot, and UOXR is simulator footage. The Carol replay is actual recorded-show footage; its working-cut prototype uses the real iPhone virtual-camera screen, with actual Carol camera views in the expanded cut. Preserve these identities and DBOX/Pureblink/Agile Lens role credits.

Build with:

```bash
node tools/export_venue_package.mjs --cuts 20t,30 --label 2026-11-01-story-v1 --no-keynote
```

For off-host capture, run`venue_capture.mjs --work <label>-cut20t --cache DIR --pick cut=20t`, then30. Transfer work/cache and pass`--captured DIR --cache DIR` to the package command. Run the exporter’s negative self-tests, inspect actual PowerPoint imports/PDFs, and retain`VENUE-COMPLIANCE.md` with final evidence. Keynote is skipped under the existing documented Mac limitation. No organizer submission is part of this work.
