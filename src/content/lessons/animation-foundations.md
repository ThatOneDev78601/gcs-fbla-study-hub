---
title: "Animation foundations: principles, timing, tools, and production"
summary: "Apply the principles of animation, plan timing with keyframes and interpolation, choose a technique, move from storyboard to animatic, sync sound, export, and document the work."
sourceIds: ["adobe","copyright-visual","copyright-fair-use"]
reviewed: "2026-11-02"
---

## Principles of movement

Animation creates the illusion of motion by showing slightly different images in quick sequence. The classic principles, described by Disney animators Frank Thomas and Ollie Johnston, help movement feel believable and appealing.

| Principle | What it does | Quick example |
| --- | --- | --- |
| Squash and stretch | Shows weight and flexibility | A ball flattens on impact and stretches as it falls |
| Anticipation | Prepares the viewer for an action | A character crouches before jumping |
| Staging | Makes the main idea clear | Silhouette and camera angle focus attention |
| Straight ahead and pose to pose | Two ways to draw a sequence | Draw every frame in order, or key poses first |
| Follow through and overlapping action | Parts keep moving after the main body stops | A ponytail swings after a character stops running |
| Slow in and slow out (easing) | Motion speeds up and slows down naturally | A car accelerates from a stop |
| Arcs | Natural movement follows curved paths | An arm swings in an arc |
| Secondary action | Supports the main action | Whistling while walking |
| Timing | Number of frames sets speed and mood | Fewer frames feel fast and light |
| Exaggeration | Pushes action for clarity | Eyes widen dramatically in surprise |
| Solid drawing | Gives forms weight and volume | Consistent three-dimensional shapes |
| Appeal | Makes characters engaging | Clear, readable designs |

## Timing, keyframes, and interpolation

Frame rate sets how many images appear per second. Film animation commonly uses 24 frames per second. Animating "on twos" means each drawing is held for two frames, so 12 drawings make one second; this is common in hand-drawn work. A 2-second action at 24 fps lasts 48 frames, which means 24 drawings on twos.

Keyframes mark the important poses or values at specific frames. In-betweens fill the frames between them. In digital tools, the software can calculate in-betweens, called tweening or interpolation. Linear interpolation moves at a constant speed and looks mechanical. Ease in and ease out slow the start and end. Bezier curves in a graph editor give precise control over acceleration.

> **Example**
>
> A logo should slide in from the left over 1 second, pause for 2 seconds, then fade out over half a second, at 24 fps.
>
> Keyframe 1 at frame 0: logo off-screen left. Keyframe 2 at frame 24: logo centered, with ease out so it slows as it arrives. Keyframe 3 at frame 72: still centered at 100% opacity (2 seconds = 48 frames later). Keyframe 4 at frame 84: 0% opacity (half a second = 12 frames). Total length is 84 frames, or 3.5 seconds.

## Choose a technique and tools

Choose the technique that fits the story, the time available, and your skills. A short explanation of a process may work best as clean motion graphics; a character story may suit 2D. Hardware matters too: 3D rendering needs a capable computer and time, so plan render tests early.

| Technique | Strengths | Tools (examples) |
| --- | --- | --- |
| 2D frame-by-frame | Expressive, full control | Krita, OpenToonz, Adobe Animate |
| 2D cutout or rigged | Faster reuse of character parts | Adobe Animate, Toon Boom, Moho |
| Stop-motion | Tactile, handmade look; needs steady camera and lighting | Stop Motion Studio, Dragonframe |
| 3D | Realistic lighting and camera moves; steep learning curve | Blender (free), Maya |
| Motion graphics | Text, shapes, and data in motion; great for explaining | After Effects, Blender |

## From storyboard to export

Keep a production record with dated drafts, the animatic, revision notes and reasons, the software and hardware used, and a source log with permissions for every asset and sound. In a presentation, show the final piece, then a few key drafts, and explain decisions using animation terms such as timing, easing, staging, and anticipation.

1. Concept: one-sentence idea and audience.
2. Script or outline, including any narration or dialogue.
3. Storyboard: panels for each scene with action, camera, and timing notes.
4. Animatic: the storyboard timed to the scratch audio, which shows pacing problems before animation begins.
5. Design: characters, backgrounds, and color palette; build assets.
6. Animation: block key poses, then refine timing and in-betweens.
7. Sound: record voice and effects, choose licensed or original music, and sync. For lip sync, match mouth shapes to sounds and place keyframes on audio peaks.
8. Render and export at the required settings, often MP4 (H.264) at 1920 x 1080, then watch the full file.

> **Try it yourself**
>
> Plan a 6-second bouncing-ball test at 24 fps with three bounces that get lower. How many frames is it? Name three principles you will show and where.

<details>
<summary>Check your answer</summary>

6 x 24 = 144 frames. Principles: squash on each impact and stretch as the ball falls fast; slow in and slow out, with the ball slowing at the top of each arc and speeding up near the ground; arcs, with the ball's path curving between bounces. Timing shortens each bounce as height decreases, which shows the loss of energy.

</details>

## Key terms

**Keyframe.** A frame that defines an important pose or value in an animation.

**Tweening.** Generating in-between frames between keyframes.

**Animatic.** A storyboard edited to a timed soundtrack to test pacing.

**Easing.** Gradual acceleration and deceleration in motion.

**On twos.** Holding each drawing for two frames.
