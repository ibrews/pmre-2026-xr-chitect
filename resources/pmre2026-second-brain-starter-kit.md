# Building VR real estate experiences with free tools
Alex Coulombe Presents · PMRE 2026 · checked 2026-11-18

A small second brain you can keep as plain Markdown in any notes app or folder. No signup or special app required. Start with one room, one client question and one tested delivery. Free software does not make your time, headset or hosting free.

## Your first useful result
1. Read [the tool map](01-tools-and-links.md). Start with Scaniverse’s free on-device capture and SuperSplat’s free editor/viewer. Check export and hosting limits first.
2. Duplicate [the property brief](02-property-brief.md) for a space you have permission to scan.
3. Follow [the capture and QA checklist](03-capture-and-qa.md).
4. Choose [a WebXR or Unreal learning route](04-webxr-and-unreal.md). A splat is not automatically a collision-ready VR scene.
5. Fill in [your service scope](05-service-scope.md) and [experiment log](06-experiment-log.md). Keep what worked and change one thing next time.

## Build a second brain, not a pile of bookmarks
Make one folder per property. Keep the brief, known dimension, original capture, export settings, tested devices, delivery URL and client feedback together. Link every claim to its source and date. Save a thumbnail locally; never treat an untested viewer link as a delivered VR tour.

## The talk and next steps
Full deck: https://ibrews.github.io/pmre-2026-xr-chitect/v8/
Attendee hub (password pixie): https://ibrews.github.io/pmre-2026-xr-chitect/v8/resources/
1:1 and company training: https://alexcoulombepresents.com
Ambitious spatial projects: https://agilelens.com


---

# Verified tool map
Checked 2026-11-18. These are official project/vendor links. Plans and browser support change; verify them before quoting a job.

| Job | Start here | What “free” means here |
| --- | --- | --- |
| Phone splat capture | [Scaniverse](https://scaniverse.nianticspatial.com/) · [official pricing](https://www.nianticspatial.com/en/pricing) | Classic on-device processing remains free; cloud processing, export and hosting have plan/credit limits. Check the exact route you need. |
| Compare capture apps | [Polycam Object Mode](https://learn.poly.cam/hc/en-us/articles/27425185907348-How-to-Use-Object-Mode) | Free photogrammetry is different from splats. Gaussian-splat creation is on paid plans; do not budget it as free. |
| Clean and view a splat | [SuperSplat editor](https://superspl.at/editor/) · [source/MIT license](https://github.com/playcanvas/supersplat) | Free open-source editor. Keep a local export and test its target viewer. |
| Deliver a viewer | [SuperSplat Viewer docs](https://developer.playcanvas.com/user-manual/supersplat/viewer/) | Open-source MIT viewer. Hosting/privacy and a particular device’s XR support are separate checks. |
| Learn browser VR | [A-Frame introduction](https://aframe.io/docs/1.7.0/introduction/) · [basic scene](https://aframe.io/docs/1.7.0/guides/building-a-basic-scene.html) | Free web framework. A desktop page is not proof of immersive WebXR support. |
| Learn an engine | [Unreal Engine licensing](https://www.unrealengine.com/license) · [official first project tutorial](https://dev.epicgames.com/documentation/unreal-engine/first-hour-in-unreal-engine) | Free to learn; commercial seat/royalty rules depend on your revenue and product. Read the terms before shipping. |

## Keep these distinctions
- A captured splat reproduces appearance. Glass, fine structure, unseen rooms and scale need inspection. It is not a measured survey.
- A browser flythrough, a headset video and a buyer-controlled VR experience are different deliverables.
- [WebXR](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) needs a supported browser/device and a secure context, normally HTTPS. Do not promise your VR project will run by double-clicking a local HTML file.
- [Nucleus4D](https://www.nucleus4d.com/) documents tours publishing into Zillow/realtor.com’s tour ecosystems. Nucleus4D’s own claim, supplied by Alex: “first 3DGS platform approved to publish immersive experiences directly into Zillow's 3D tour ecosystem” (company claim; source nucleus4d.com).
- [Zillow SkyTour](https://www.zillow.com/news/skytour-is-pushing-the-tech-boundaries-of-real-estate-visualization/) is an exterior-splat workflow for eligible Showcase listings, not an arbitrary splat upload destination.


---

# Property brief: duplicate this file

Property / client:
Capture permission and publication permission:
One question this experience should answer:
Audience and accessibility needs:
Existing photos / plan / model:
Known physical dimension and how it was measured:
Captured areas / excluded areas:
Sensitive details to remove:

## Deliverable
Choose: browser tour / directed film / guided VR / MR on site / bespoke Unreal.
Target headset, browser and version:
Client’s actual viewing device:
Start point and suggested route:
Host, expiry and maintenance owner:
Acceptance test in the client’s words:

## Source log
| Claim / asset | Source link or local filename | Date | Permission / confidence |
| --- | --- | --- | --- |
| | | | |


---

# Capture and delivery checklist

## Capture one small, useful space
- Get permission. Remove personal documents, faces, security details and sensitive views before capture.
- Use steady overlapping coverage. Walk slowly, revisit the room from different angles and include door transitions. Keep lighting and movable objects stable.
- Record a known dimension separately. A photorealistic appearance is not proof of accurate scale.
- Keep originals and processing settings. Preview locally before publishing anything public.

## Inspect the result
- Check windows, mirrors, white walls, doorways, exterior edges, floaters and unseen surfaces.
- Open the cleaned export in the intended viewer, not only the editor. Confirm the start position and useful viewpoints.
- If adding VR, test scale, comfort, clipping, collision/locomotion and a safe exit. Splat appearance alone does not supply collision geometry.
- Test the slowest target device and the real delivery network. Keep a directed film or still-image fallback.
- Test every link from a fresh browser and obtain client permission before public hosting.

## Acceptance evidence
Capture date:
Tool / version / settings:
Export filename / size:
Test device / OS / browser:
Delivery URL and expiry:
Known issues:
Client’s observed acceptance, date and exact words:


---

# Two free learning routes

## Browser route: A-Frame / WebXR
1. Follow [A-Frame’s basic scene guide](https://aframe.io/docs/1.7.0/guides/building-a-basic-scene.html). Build an empty room with a floor, walls and a camera before bringing in client assets.
2. Use a known dimension and establish a comfortable eye height. Add a few useful viewpoints rather than an elaborate interaction system.
3. Learn [model loading](https://aframe.io/docs/1.7.0/components/gltf-model.html). A-Frame’s glTF loader does not by itself make a Gaussian-splat file work: for splats use a viewer that explicitly supports them, such as the [SuperSplat Viewer](https://developer.playcanvas.com/user-manual/supersplat/viewer/).
4. Publish a test on HTTPS. Check [WebXR support](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API) on the exact headset/browser; test entering and leaving VR. Supply a desktop fallback.

## Unreal route: an unbuilt room
1. Start with [Epic’s first-hour tutorial](https://dev.epicgames.com/documentation/unreal-engine/first-hour-in-unreal-engine). Make a room, lighting and a known-size object.
2. Learn [the VR Template](https://dev.epicgames.com/documentation/en-us/unreal-engine/vr-template-in-unreal-engine). Test a tiny scene on your target hardware before importing a whole building.
3. Reduce model complexity, prepare materials and add deliberate navigation/collision. Unreal does not turn an arbitrary floor-plan image into a finished accurate property automatically.
4. Compare the real room or plan against the walkthrough. Package for the supported device, then test on that device with a fresh user.
5. Check [Epic’s current license](https://www.unrealengine.com/license): free learning and qualifying small-business use do not mean every commercial deployment is free.

Floor Tour and Walkthrough in Alex’s talk are examples of the plan-to-human-scale idea. The talk does not promise a free public release or price for either product. Rebuild the basic idea as a small learning exercise with the verified routes above.


---

# Price a useful experience
Idea sparked by Matt Michalski’s PMRE 2026 day-1 product/package discussion. This is an original scope worksheet; no confidential pricing/adoption dataset is reproduced.

Keep your core photography, film, aerials, plans and tours. Add the next service only when it answers a client question.

| Tier | Added production | Client value | Your quote |
| --- | --- | --- | --- |
| Splat tour | Overlap coverage, reconstruction, cleanup, hosting | Revisit the captured place | |
| VR walkthrough | Viewer/template, scale, navigation, headset QA, guided session | Judge layout at human scale | |
| MR on site | Alignment, design options, safety and session host | Compare options in the actual room | |
| Full Unreal premium | Modeling, materials, lighting, optimization, interaction, device deployment | Experience an unbuilt property | |

Do not price only the extra button press. Include capture time, processing, cleanup, revisions, travel, hosting term, device support, licensing, accessibility/fallbacks and the decision being supported. Reuse can reduce setup effort; reliable delivery is still work.

Scope / exclusions:
One included revision means:
Hosting term / renewal:
Hardware and staff supplied by:
Client acceptance test:
Total / payment terms to agree privately:


---

# One experiment, one lesson

Date / property:
Question:
Tool and official source:
Plan / free-tier limit checked:
Input and permission:
Prediction:
What I actually tried:
What the viewer/client actually saw:
Device / browser:
What worked:
What failed:
Next experiment (change one thing):
Keep / change / stop:

Link this to the property brief and delivery evidence. Keep observed facts separate from a guess or a vendor promise.
