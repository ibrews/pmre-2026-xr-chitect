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
| Closing ask `ask` | `text` *(default)* | "What's your weird intersection?" as text. |
| | `motion` | `venn-you`: the audience's own Venn. PHOTOGRAPHY / VIDEO plus two blanks that cycle examples, then YOUR LANE. |
| Thesis `thesis` | `a` *(default)* | "The Advice Wasn't Wrong. It Just Assumed One Lane." |
| | `b` | "Specialize in the Overlap." Shortest and most quotable. |
| | `c` | "Pick a Lane. Then Build a Bridge." Kindest to the professors. |
| Close `close` | `talk` *(default)* | "Let's Talk." plus an intersection invite and the kids'-names bit. |
| | `kids` | "Ask Me About My Kids' Names." The bio's hook as the whole close. |
| | `question` | "What's Your Weird Intersection?" Ends on the audience. |
| Cover `cover` | `still` *(default)* / `motion` | Ambient strand background (`cover-ambient.html`, delivered 10:34 ET). Text-free; screen-blended so it works on every theme. |
| Length `cut` | `full` *(default)* | About 47 min, 35 slides. |
| | `30` | About 35 min (25 slides; lessons keep their full timing). |
| | `20` | About 25 min (17 slides). |
| Look `theme` | `noir` | The original Spatial Deck look. `node tools/lint_look.mjs --query theme=noir` flags 7 generic-AI-design tells in it. |
| | `sheet` | Drawing set: paper, ink, hairlines, a title block with the sheet number, redline accent. Motion graphics are recolored to ink on paper. |
| | `folio` | Editorial: serif on black with one vermilion spot color, running head and folio. Descends from Alex's NXT BLD 2020/2021 decks. |
| | `house` *(default, Alex 2026-10-27; old `?theme=stage`)* | Theater program: gold masthead band, condensed wood-type caps, a followspot on chapter cards, curtain call close. |

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
| Pixel Alex `journey` | `on` *(default)* | Bottom-right journey minimap: one lane forks into three braided strands (architecture, theater, technology) and rejoins as a wider road, one stop per chapter. Pixel Alex walks to the current chapter; on the 2013 card he hops out, puts on the headset and shrinks back into the map, and on the 2023 card he gets the beard. He waves on the close. Hidden on the cover, the map slide, and every slide that already draws him (`shows: ["avatar"]`: intro, lane-traffic, lane-sprite, venn-sprite, lane-to-venn), so there is only ever one Alex on screen. Alex, 2026-10-27. |
| | `map` | Minimap only: he still walks, the costume just changes on arrival, no hop-outs. |
| | `off` | No minimap, no walker (also drops it from the PPTX). |
| Venue safe zone `safe` | `off` *(default)* | Full-frame web deck. |
| | `70` | PMRE's screen: all content scaled into the centered 1344×756 box (288/162 px margins), background still full-frame. `?safezone` draws the box for QA. Other features position with `--safe-inset-x/y`. The venue export always uses it. |

**Looks** come from the Spatial Deck style library (`styles/`, from ibrews/spatial-deck; rules in `styles/README.md`). `tools/bake_talk.py` inlines them with `tools/apply_look.py`, then runs `tools/check_branding.py`. Old `?theme=blueprint` / `?theme=stage` links map to `sheet` / `house`. Look-specific poster frames are `media/motion/mp4/<name>-poster.<look>.png` (`LOOK=sheet POSTER_ONLY=1 node tools/render_motion.mjs`). Organizer MP4s in the default look: `media/motion/mp4/<name>.house.mp4` (`LOOK=house node tools/render_motion.mjs`); `<name>.sheet.mp4` are the Drawing set renders; the unsuffixed `<name>.mp4` files are the noir renders. PPTX in a look: `python3 tools/export_talk_pptx.py --pick theme=sheet --out x.pptx` (Arial is kept for show machines).

**Pixel Alex modes:** `?static`, `?reduced` and prefers-reduced-motion place him without walking, bobbing or hop-outs. `?notes` hides the minimap. `?print` puts a static minimap on each printed slide, because the PDF is a handout of the same journey the room saw. The minimap is independent of `chrome` (it is content, not page chrome; use `journey=off` to remove it); with `chrome=full` it lifts above a bottom-right title block (Drawing set). It is positioned against `--safe-inset-x` / `--safe-inset-y` (0 by default), so a venue safe-zone option that sets them keeps it inside PMRE's 70% box.
