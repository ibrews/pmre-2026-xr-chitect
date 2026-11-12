# PMRE v4: property media and the next few years

Brandon’s organizer feedback, relayed by Alex on November 11: connect the career story to the real-estate-media audience. Alex also requested a proper Gaussian-splat beat and Rome headset footage. Source baseline: `2361c1a`, `story/v3-chronological`. This revision retains the chronological full story and the presenter-restored closing trio.

## Property-media thread

- Four Seasons walkthrough: “Market the home before it exists.” Keep DBOX/Pureblink/Agile Lens roles and distinguish the presales context from causality.
- Presales: “Sell the visit as well as the image.” Proposed showroom operation/update service; no measured sales lift.
- DBOX showroom: “Bring the property to the buyer.” Campaign media plus a guided visit for off-plan sales.
- Blueprint Immersive: “Make your expertise repeatable.” Transfer the service lesson from theatres without claiming it is a property product.
- Floor Tour: “Let buyers feel the floor plan.” Explain a human-scale plan alongside the photographs.

Opening, architecture/sightline, RSC and virtual-camera notes now return to the question of helping someone understand a property. Minimal on-slide lines support spoken examples; no new statistics are added.

## Four splat beats

1. `rome`: “Walk around the Colosseum” — existing web-rendered PortalCam scan.
2. `hotel`: Sina Bernini Bristol — existing web-rendered PortalCam scan, explicitly not Marriott marketing media.
3. `splat-vr`: “Rome, inside the headset” — actual first-person Vision Pro recording, replacing the simulator still. Silent 18s Colosseum + 12s hotel excerpts from [Alex Coulombe Presents](https://youtu.be/AD8d6CHDbGo). Visible hands/controls distinguish this from a clean camera-path render. Capture credited to Josette Seitz / Agile Lens.
4. `capture-to-tour`: “Your shoot becomes a place” — opens **The next few years**, with phone/drone → splat → walkthrough. Reuses a silent 9s MIA fountain scan view credited there to Alex; the portrait clip illustrates the reconstructed scene, not active phone capture.

The chapter continues with `view-before-visit`, “Choose how to live there” (screen browsing, shared VR showroom, AR layout/furniture choices), and `sell-next`, “What I’d sell next” (capture/tour, labeled AI-assisted staging/options, launch/updates). These are the presenter’s proposed services and forecasts. Notes distinguish captured appearance, unbuilt design models and AR object assets; no universal compatibility or adoption promise is made.

## Timing and trims

Authored budgets: **full80:00 / medium43:34 / short and20t34:29**. With15minutes Q&A,20t is49:29. These are not measured rehearsal.

Short/medium omit curiosity/hiring85s, Picasso75s, Unreal instructor75s and film-language150s, adding DBOX48s, Floor Tour51s, hotel45s, headset70s and the new chapter75+60+75s. Agile Lens origin210→165s in every cut. All four omitted detours stay in full; the AI/niche closing remains as before. Short keeps the existing Colosseum slide.

To preserve full80:00, replace the56s simulator still with70s actual headset footage, and shorten spoken holds: buyers117→67s, workflow demo155→105s, RSC workshop100→60s, teaching65→26s, presales96→46s. All project media/notes remain. No whole project beat is removed from full.

## Sources and provenance

- [Kerbl et al., SIGGRAPH2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/): reconstructing appearance/novel views, no performance stats reused.
- [Polycam drone guide](https://learn.poly.cam/hc/en-us/articles/30549134403860-How-to-Create-Drone-3D-Models-in-Polycam) and [existing-image/video guide](https://learn.poly.cam/hc/en-us/articles/30549121659412-How-to-Create-Photogrammetry-and-Gaussian-splats-from-Existing-Images-and-Videos-on-Mobile-and-Web): phone/drone reconstruction route and required coverage, no turnaround promise.
- [Media hashes and trim ranges](../media/v3-fix6/manifest.json). Rome/hotel identities follow the canonical presenter-career-facts reference.

## Publication

After verification, publish this branch tree under `/v4/` on main, excluding `.git` and pre-existing deployment directories. Preserve all root and `/v3/` bytes. Do not email or upload to Drive. The checked package contains separate MP4 cues, not embedded movies; the new Rome/MIA cues are silent, while existing source-video and procedural SFX audio policies remain. Keynote remains skipped under the documented limitation.
