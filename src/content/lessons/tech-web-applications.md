---
title: "How web applications work"
summary: "Understand web structure, browser behavior, accessibility and responsible data handling."
sourceIds: ["mdn"]
reviewed: "2026-10-27"
---

## Follow a request from browser to server

A browser uses a URL to identify a resource and sends an HTTP request to a server. The server responds with a status, headers and usually content. HTML gives a page semantic structure, CSS controls presentation and JavaScript adds behavior. These roles cooperate rather than replacing one another. Client-side code runs in the user’s browser, while server-side code runs on infrastructure controlled by the application operator. Browser code is visible to the user, so private API keys and access decisions cannot safely depend on keeping it secret. An API defines an interface through which software exchanges data or requests operations.

## Build a usable, resilient interface

Semantic headings, real buttons, labels and meaningful link text help people and assistive technology understand a page. Keyboard users need a visible focus indicator and a sensible interaction order. Responsive layouts adapt to available space without hiding required content. Forms should explain constraints and show specific errors beside the relevant fields. Validate on the server as well as in the browser, because browser checks can be bypassed. Handle loading, empty and failure states explicitly. A useful interface remains understandable when a request fails; it does not silently discard a student’s work.

> **Work through an example**
>
> A registration form marks errors only by turning field borders red.
>
> Add a written error message associated with each field and preserve entered values. Color alone does not explain the correction and may be inaccessible.

## Storage, security and common mistakes

Cookies, local storage and server databases serve different purposes. Local storage persists in one browser but can be unavailable or cleared; it is unsuitable as the sole home of important shared records. Treat user input as untrusted, encode output for its context and use parameterized database queries. Authentication and authorization must protect sensitive server operations. Cache static resources thoughtfully and measure performance on constrained devices. Common mistakes include using clickable generic elements instead of buttons, trusting hidden form fields, assuming a successful network response means valid business data, and promising cross-device synchronization when information exists only in one browser.

## Key terms to remember

**HTML.** Markup describing the semantic structure of a web document.

**API.** A defined interface for software interactions.

**Responsive design.** Layout behavior that adapts to different available screen sizes.
