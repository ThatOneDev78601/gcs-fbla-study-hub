---
title: "Mobile app development: platforms, screens, data, and device testing"
summary: "Choose a supported platform, build screens with navigation and state, store data on the device, handle permissions and small-screen accessibility, test on a real phone, and document the app."
sourceIds: ["android-dev","apple-hig","wcag"]
reviewed: "2026-11-02"
---

## Choose a platform

The captured Mobile Application Development guide still names Windows Phone, which Microsoft no longer supports. Check the current national guidance for accepted platforms before choosing, and confirm the decision with your adviser.

Native development builds separately for each platform with its own tools. Cross-platform frameworks share one codebase across iOS and Android. Beginners can prototype with block-based tools such as MIT App Inventor.

| Option | Language | Builds for | Notes |
| --- | --- | --- | --- |
| SwiftUI (native) | Swift | iOS | Requires a Mac with Xcode; free personal provisioning allows testing on your own iPhone |
| Jetpack Compose (native) | Kotlin | Android | Android Studio runs on Windows, macOS, and Linux |
| Flutter | Dart | iOS, Android, web | One codebase; iOS builds still need a Mac |
| React Native | JavaScript or TypeScript | iOS, Android | Familiar to web developers |
| MIT App Inventor | Blocks | Android (and iOS companion) | Fast prototyping; limited for complex apps |

## Screens, navigation, state, and storage

Sketch every screen and the path between them before coding: a home screen, list screens, detail screens, forms, and settings. Mobile navigation is usually a stack (push a detail screen, then go back) plus tabs for top-level sections. Keep the back behavior predictable.

State is the data the screen shows, such as the list of items and whether a form is valid. When state changes, the framework redraws the affected parts of the screen. Store data that must survive closing the app on the device: key-value storage for small settings, and a local database such as SQLite (Room on Android, Core Data or SwiftData on iOS) for lists of records. If the app syncs to the internet, decide what happens offline.

> **Example**
>
> Plan the screens for a fictional plant-watering reminder app.
>
> 1. Tab 1, My Plants: a list showing each plant's name, photo, and days until watering. Tapping a plant opens Plant Detail.
> 2. Plant Detail: watering schedule, last watered date, and a large "Watered today" button.
> 3. Add Plant form: name (required), watering interval in days (1 to 30), optional photo.
> 4. Tab 2, Settings: reminder time and notification permission status.
> 5. Storage: a local database table of plants; reminders scheduled with the operating system's notification service.
>
> Each screen has one main job, the form validates the interval, and the data stays on the device, so the app works offline. Notification permission is requested only when the user turns reminders on, with an explanation.

## Small screens, touch, permissions, and errors

Design for one hand and small screens. Touch targets should be at least 44 by 44 points on iOS and 48 by 48 density-independent pixels on Android. Support the system text size setting, keep contrast high, label icons for screen readers (VoiceOver on iOS, TalkBack on Android), and avoid information conveyed only by color or gesture.

Request permissions such as location, camera, or notifications at the moment they are needed, with a short explanation of why, and keep the app usable if the user says no. Handle errors visibly: show a clear message when the network is unavailable, keep entered data when a save fails, and offer a retry.

## Test on devices and document

Emulators are useful, but test on a real phone before judging. Check different screen sizes, landscape orientation if supported, slow or no network, low battery mode, the app being closed and reopened, and large text. Watch for crashes and record them with steps to reproduce. Measure launch time and scrolling smoothness on an older device if possible.

Build a requirement-by-requirement checklist from the current guide and mark where the app meets each one. Write a README, list every library and asset with its license, and prepare a demonstration that installs or runs the app on a device, shows each required feature, and explains design and code choices.

> **Try it yourself**
>
> Write five test cases for the plant app's Add Plant form, each with input and expected result.

<details>
<summary>Check your answer</summary>

1. Name "Fern," interval 7: saves and appears in the list showing 7 days. 2. Name blank: shows "Enter a plant name" and does not save. 3. Interval 0: shows "Choose 1 to 30 days." 4. Interval 31: same message. 5. Valid plant entered with airplane mode on: saves locally and appears after the app is closed and reopened. Strong answers include boundary values (1 and 30) and an offline case.

</details>

## Key terms

**Native app.** An app built with a platform's own language and tools.

**Cross-platform framework.** A tool that builds apps for several platforms from one codebase.

**Navigation stack.** A pattern where screens are pushed on top of each other and removed when the user goes back.

**Touch target.** The tappable area of a control.

**Emulator.** Software that imitates a phone on a computer for testing.
