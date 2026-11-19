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
