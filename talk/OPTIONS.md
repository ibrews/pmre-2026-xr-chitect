# PMRE 2026: options index ("Architect to XR-chitect")

Every option below is built into the deck. Press **O** in the deck for the picker, or add URL params, for example `index.html?open=question&thesis=b&cut=30&theme=sheet`. The defaults reproduce the audited draft exactly. Picks are saved per browser, and **Reset to defaults** in the O panel clears them.

| Group (`?param=`) | Choice | One-line pitch |
|---|---|---|
| Opening `open` | `cold` *(default)* | The lane motion: one road splits into architecture, theater and technology, then braids into XR-chitect. Ends on "I didn't." |
| | `question` | Show of hands first: "Who here has a job title your parents can't explain?" Warms a post-lunch room. |
| | `story` | Skips the motion and goes straight to the "that job doesn't exist yet" quote. Fastest start. |
| Who I am `intro` | `classic` *(default)* | Two intro slides after the first chapter card. The 8-bit Alex power-up (walk, ? block, headset, Unreal power-up with fireballs, stat cards) and then the Agile Lens monocle: client names orbit, 2026 counts back, and 2016 Alex lands on the lens. About 3 min. |
| | `alex` | Power-up only (about 90 s). This is also what the 20-minute cut keeps. |
| | `none` | No intro. Straight from the chapter card into the cold open, as before. |
| Render questions `renders` | `quote` *(default)* | Three questions as a big typographic quote. |
| | `motion` | `questions-dissolve`: the questions orbit a flat render, a headset arrives, and they dissolve into the essay line. |
| One talk → one client `onetalk` | `photo` *(default)* | Two-pane slide with the Ed Sullivan lighting render. |
| | `motion` / `both` | `one-talk`: podium, ripple, audience member, client, twice (Late Show dome, then Waldorf Astoria). |
| Holodeck staging `spike` | `photo` *(default)* | Holodeck photo with the spike-tape bullets. |
| | `motion` / `both` | `spike-tape`: top-down plan over an empty room, spike marks laid, a guest walking mark to mark (illustrative). |
| Career-path motion `lanemotion` (cold open; needs `open=cold`) | `traffic` *(default, Alex's pick 2026-10-27)* | `lane-traffic` (~43 s, with honks): one ARCHITECTURE road and "Pick a lane."; THEATER and TECHNOLOGY lanes arrive; traffic, and pixel Alex hops lane to lane dodging honking, swerving cars; the roads braid, curl into the Venn ("Reframe it."), then the full `venn` sequence plays. All type inside the presenter safe zone. |
| | `original` | The lane motion as it was: no protagonist. |
| | `sprite` | `lane-sprite`: 2010 pixel Alex (the intro sprite) walks the lane, rides the architecture strand to a pixel temple (columns crack), drops onto the theater strand's stage (curtains shimmer), hops to the tech line (the monitor's platformer runs), then grabs the intro's headset on the XR-chitect road. "I didn't." |
| | `venn` | `venn-sprite`: a seekable port of the HarvardXR 2026 Venn. He bounces icon to icon; theater planning, live VR theater and archviz appear as he crosses each overlap; he ends on XR-CHITECT. Previews the later Venn slide. |
| | `lanevenn` | `lane-to-venn`: the lane plays, then the three strands curl up into the Venn circles under his feet; he lands on XR-CHITECT with the headset. "I didn't." |
| Who-we-hired quote `q29` (2016, slide 29) | `hxr` *(default, 2026-10-27)* | "I was surrounded by theater people … those were the people who understood right out of the gate." Your words, HXR 2026 talk, 00:04:49–00:04:59 (auto-captions). |
| | `disciplines` | "All the best XR experiences I've worked on had a lot of people coming from other disciplines." HXR 2026, 00:16:27. |
| | `prep` | The previous line, "I don't want a bunch of computer science graduates. I want actual theater people." From prep-interview notes, not a recording; Alex didn't recognize it. |
| Closing ask `ask` | `text` *(default)* | "What's your weird intersection?" as text. |
| | `motion` | `venn-you`: the audience's own Venn. PHOTOGRAPHY / VIDEO plus two blanks that cycle examples, then YOUR LANE. |
| Thesis `thesis` | `a` *(default)* | "The Advice Wasn't Wrong. It Just Assumed One Lane." |
| | `b` | "Specialize in the Overlap." Shortest and most quotable. |
| | `c` | "Pick a Lane. Then Build a Bridge." Kindest to the professors. |
| Close `close` | `talk` *(default)* | "Let's Talk." plus an intersection invite and the kids'-names bit. |
| | `kids` | "Ask Me About My Kids' Names." The bio's hook as the whole close. |
| | `question` | "What's Your Weird Intersection?" Ends on the audience. |
| Cover `cover` | `still` *(default)* / `motion` | Ambient strand background (`cover-ambient.html`, delivered 10:34 ET). Text-free; screen-blended so it works on every theme. |
| Length `cut` | `full` *(default)* | About 69 min (talk/REHEARSAL.md, 2026-10-27, with the 2025 CAPTURE chapter). |
| | `30` | About 57 min. Over the venue cap: cut more before using it as-is. |
| | `20` | About 35:30. The 2025 chapter keeps only its chapter card and `camera-toy` here. |
| | `20t` | 34:30 with default picks: cut20 minus the 60s `scale` illustration after the 2023 chapter. With 15 min Q&A: 49:30. Other picks can change the estimate. |
| Look `theme` | `noir` | The original Spatial Deck look. `node tools/lint_look.mjs --query theme=noir` flags 7 generic-AI-design tells in it. |
| | `sheet` | Drawing set: paper, ink, hairlines, a title block with the sheet number, redline accent. Motion graphics are recolored to ink on paper. |
| | `folio` | Editorial: serif on black with one vermilion spot color, running head and folio. Descends from Alex's NXT BLD 2020/2021 decks. |
| | `house` *(default, Alex 2026-10-27; old `?theme=stage`)* | Theater program: gold masthead band, condensed wood-type caps, a followspot on chapter cards, curtain call close. |

**2025 · Capturing Places That Don’t Exist** (Alex, 2026-10-27) sits between 2023 and TASTE: a statement slide, the Christmas Carol camera angles (MIA `fmx-90`), `pmre/working-cut` (MIA `working-cut`, 3 clicks) and `pmre/camera-toy` (MIA `camera-toy`, 3 clicks: 85 mm, 2.39 mask, three shots; drag and lens buttons work between clicks), then synthetic Gaussian splats. Not an option group: it is in `full` and `30`, and `camera-toy` is also in `20`. Sources and ❓ ALEX items are in the speaker notes; media rows in `media/pmre/PROVENANCE.md`.

All new copy is ✎ PROPOSED (connective). The quotes inside motion graphics are ✅ VERIFIED against Alex's 2017 essay, the KB speaking modules and the Four Seasons Lake Austin notes. The plans in the motion graphics are illustrative.

**Not done (out of time, 10:45 ET):** an "extended" cut beyond full, a side-by-side comparison page, and alternate cover lines. The official title is already on the PMRE agenda, so only the kicker line would change.

**MP4s for the alternates** (silent, 1080p30): `media/motion/mp4/{questions-dissolve,one-talk,spike-tape,venn-you}.mp4`; the career-path options in the default look: `media/motion/mp4/{lane-traffic,lane-sprite,venn-sprite,lane-to-venn}.house.mp4` (`lane-traffic` has a synthesized honk track; in the deck the honks play live through the deck's audio). The sprite options share `media/motion/sprite.js` and `media/motion/venn-scene.js` (the venn sequence, reused verbatim by `lane-traffic`) (the intro's pixel Alex + headset and the HXR Venn icons, animated by WAAPI keyframes sampled from time, so they seek and render like the rest). Copies are also in `~/Archives/pmre2026-2026-10/organizer-package-draft/videos/alternates/`.

**Exports:**
- PMRE organizer package (PPTX + separate MP4s + cue sheet + checks), one command: `node tools/export_venue_package.mjs --cuts 20,30 [--pick group=choice …] [--label final]`. Package lands in `~/Archives/pmre2026-2026-10/organizer-package/<date>-<label>-<commit>/`; see its `RERUN.md`.
- Editable PPTX for any combination: `python3 tools/export_talk_pptx.py --pick thesis=b --pick cut=30 --out x.pptx`
- MP4s for the organizer: `node tools/render_motion.mjs <name>` writes to `media/motion/mp4/`
- Journey minimap PNGs for the PPTX (one per chapter, per look): `PLAYWRIGHT_CORE=/abs/node_modules/playwright-core node tools/render_journey_png.mjs` writes `media/journey/<look>/stop-<n>.png` and `end.png`; `export_talk_pptx.py` places them bottom-right, skipping slides that already show pixel Alex

| Page chrome `chrome` | `quiet` *(default)* | No masthead, page numbers or per-slide section labels; chapter cards keep their kicker without the "of 8". Henry Keyser's feedback, 2026-10-27. |
| | `full` | The look's frame, page counter and section labels on every slide. |
| | `none` | Also drops chapter kickers. |
| Pixel Alex `journey` | `on` *(default)* | Bottom-right journey minimap: one lane forks into three braided strands (architecture, theater, technology) and rejoins as a wider road, one stop per chapter. Pixel Alex walks to the current chapter; on the 2013 card he hops out, puts on the headset and shrinks back into the map, and on the 2020 card (teaching) the headset comes off and the pandemic beard appears; from then on he is bearded with no headset. He waves on the close. Hidden on the cover, the map slide, and every slide that already draws him (`shows: ["avatar"]`: intro, lane-traffic, lane-sprite, venn-sprite, lane-to-venn), so there is only ever one Alex on screen. Alex, 2026-10-27. |
| | `map` | Minimap only: he still walks, the costume just changes on arrival, no hop-outs. |
| | `off` | No minimap, no walker (also drops it from the PPTX). |
| Venue safe zone `safe` | `off` *(default)* | Full-frame web deck. |
| | `70` | PMRE's screen: each slide's content (text, pictures, graphics; motion graphics use their timeline-wide box from `talk/motion-fit.js`) is fitted to the centered 1344×756 box, reaching it on the tightest axis, never above native size; background still full-frame; the journey minimap stays in the physical corner. `?safezone` draws the box for QA. After editing a motion graphic run `node tools/motion_fit.mjs <name>` and re-bake. The venue export always uses it. |

**Looks** come from the Spatial Deck style library (`styles/`, from ibrews/spatial-deck; rules in `styles/README.md`). `tools/bake_talk.py` inlines them with `tools/apply_look.py`, then runs `tools/check_branding.py`. Old `?theme=blueprint` / `?theme=stage` links map to `sheet` / `house`. Look-specific poster frames are `media/motion/mp4/<name>-poster.<look>.png` (`LOOK=sheet POSTER_ONLY=1 node tools/render_motion.mjs`). Organizer MP4s in the default look: `media/motion/mp4/<name>.house.mp4` (`LOOK=house node tools/render_motion.mjs`); `<name>.sheet.mp4` are the Drawing set renders; the unsuffixed `<name>.mp4` files are the noir renders. PPTX in a look: `python3 tools/export_talk_pptx.py --pick theme=sheet --out x.pptx` (Arial is kept for show machines).

**Pixel Alex modes:** `?static`, `?reduced` and prefers-reduced-motion place him without walking, bobbing or hop-outs. `?notes` hides the minimap. `?print` puts a static minimap on each printed slide, because the PDF is a handout of the same journey the room saw. The minimap is independent of `chrome` (it is content, not page chrome; use `journey=off` to remove it); with `chrome=full` it lifts above a bottom-right title block (Drawing set). It is 300px wide at 1920 (scaled with the stage) and sits in the physical bottom-right corner, 24px in, even with `?safe=70`: Alex accepted the venue edge effect for the map (2026-10-27). The Drawing set and Cyanotype looks keep it inside their frame rule.

## Title-slide lines from your HXR 2026 talk

Every line below is your own wording from the HXR 2026 closing keynote ("10 Lessons from 10 Years", YouTube `t1nkXyvQY5g`), taken from YouTube's auto-captions, which are imperfect. The timestamps are the caption timestamps. Only filler words and obvious caption errors were fixed. The raw caption text for each line is in the KB story ledger, §17. None of these lines replaces any text you have approved. The lines marked *(in notes)* are written into that slide's presenter notes as ALTERNATE.

| # | Line | Time | Could serve |
|---|---|---|---|
| 1 | "Virtual reality was very much a power-up for me." | 00:02:07 | Intro power-up slide *(in notes)* |
| 2 | "I didn't think that I would ever get to combine all of my interests together." | 00:02:19 | 2005 chapter card, or thesis |
| 3 | "They are inherently spatial." | 00:03:25 | Venn / cold open, YOU chapter |
| 4 | "Maybe in that specificity, we will find some universality." | 00:04:21 | Cover kicker or the YOU bridge |
| 5 | "I was surrounded by theater people." | 00:04:49 | Slide 29 *(now the default, `q29=hxr`)* |
| 6 | "You have the ability to guide an eye with light." | 00:05:09 | YOU chapter card *(in notes)*; strongest line for photographers |
| 7 | "You can't force someone to move through a building in a particular way, but you can guide them psychologically." | 00:05:20 | YOU chapter *(in notes)*, holodeck staging |
| 8 | "We just gotta get some tape and some cardboard." | 00:06:28 | Spike-tape slide (2023) |
| 9 | "All the best XR experiences I've worked on had a lot of people coming from other disciplines." | 00:16:27 | Slide 29 alternate (`q29=disciplines`), or thesis |
| 10 | "A choreographer is going to think more about how people move." | 00:17:14 | YOU chapter *(in notes)* |
| 11 | "This feels like stepping into a time machine." | 00:21:39 | 2023 "Real Estate, Before It's Built." *(in notes)* |
| 12 | "Protect time for 'we're not sure yet.'" | 00:26:39 | "The pattern" (R&D) slide |
| 13 | "Perfect is the enemy of best." | 00:28:27 | A standalone big slide |
| 14 | "Don't get caught up in different hype cycles." | 00:29:55 | TASTE / "For everyone in this room" *(in notes)* |
| 15 | "Use the tech for what you want it to be for." | 00:30:06 | Close, or the AI-era slide *(in notes)* |

Line 1 of the §14 quote list, "I really don't think that job exists yet." (00:03:12), is already on a slide.
