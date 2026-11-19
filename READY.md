# READY: five new concept slides (branch story/v8-claude-ideas)

Built overnight 2026-11-19 by Claude. Nothing existing was modified except: one new case per slide inserted in
`talk/sections.js`, the module list in `index.html` (`slide.py sync`) and the bake (`bake_talk.py`). All five are
`keep: 99` (Full cut only) so the timed 20/30/20t cuts are untouched; promote to `19` to show in every cut.
Each is an inline module with `manualSteps`, CSS-transition states, and `restore(n)`: forward, back and re-entry
animate smoothly (verified headless, screenshots below, `-back` = after ArrowLeft). Safe-zone audit
(`tools/qa_safezone.mjs`, house look): 0 violations on all five. `slide.py check`: 0 problems. No console errors.
Only sound: a shutter on unbuilt-shutter click 2, gain 0.035 (slide whoosh peaks at 0.08).
Pre-existing, not mine: `check_branding.py` fails in this clone (og:image vs. missing Pages remote).

| # (full cut, ai=on) | Module / case id | Headline | Placed | Clicks | What it communicates |
|---|---|---|---|---|---|
| 18 | `pmre/overlap-yours` | My weird overlap became the job → Now find yours | after “Great niches in this room” | 2 | Alex’s architecture/theater/technology Venn shrinks to a “MINE” badge; the audience’s Photography + YOUR ___ + Spatial media Venn grows (niche cycles: aviation, Lake Martin, performance, architecture, reused from the sourced niches slide); center lights “YOUR LANE”. |
| 73 | `pmre/helmet-to-glasses` | From helmet to sunglasses | after “Now we’re there” (glasses-objections) | 3 | One head; the device shrinks from a DK1-era box (2012, already in deck) → standalone → lighter → gold sunglasses while a timeline advances. Generic silhouettes, labeled illustrative; no PICO/NDA detail. |
| 81 | `pmre/unbuilt-shutter` | Photograph a place that doesn’t exist yet | after the “Photograph an unbuilt space” title card, before camera-toy | 2 | Schematic plan linework draws on → tilts to 3D as floors extrude → shutter flash + viewfinder resolves the deck’s already-credited Four Seasons Lake Austin rendering (DBOX for Austin Capital Partners). Plan/Model/Photograph legend tracks the beat. |
| 86 | `pmre/package-shelf` | The top shelf of what you already sell | before “Your package has room to grow” table | 4 | Staircase builds upward: Photos, Video, Drone (“what you sell today”) → 3D tour + plan → splat walkthrough → VR/MR visit → glowing Premium Unreal. Labeled illustrative, no prices (the next slide has them). |
| 89 | `pmre/brief-closer` | Brandon’s brief → The brief, answered | after plan-to-presence, before the Jonathan Lee quote / DIY / hire-us beats | 2 | Brandon’s brief (trimmed with ellipsis; full verbatim in notes) → three answers: Live / Do business / Your media → “So start building. Bring us the ambitious ones.” |

Screenshots (1280px JPEG, every substep): `docs/claude-ideas-shots/<module>-<index>-s<N>.jpg` and `-back.jpg`, e.g.
`docs/claude-ideas-shots/overlap_yours-18-s2.jpg`, `helmet_to_glasses-73-s3.jpg`, `unbuilt_shutter-81-s2.jpg`,
`package_shelf-86-s4.jpg`, `brief_closer-89-s2.jpg`. Slide indexes shift by one per earlier inserted slide when
merging; find them by case id.

Fact discipline: no new names, numbers, quotes or client claims. Speaker notes on each case flag the beat, the
clicks, and what is illustrative. Reviewer judgment calls for Alex: whether overlap-yours duplicates venn-you
(not in the current order), and whether brief-closer’s three answers match how he wants to phrase the forecast.
MIA-deck media was not needed; no images were imported.
