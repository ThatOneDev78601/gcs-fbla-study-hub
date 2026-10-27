---
name: GCS FBLA Study Hub
description: A calm school study handbook for focused reading and recall.
colors:
  paper: "#f8f7f3"
  surface: "#fff"
  ink: "#182d37"
  muted: "#52666c"
  line: "#d9ded9"
  teal: "#136c61"
  pale: "#e9f2ed"
  navy: "#183845"
  amber: "#775022"
  teal-hover: "#0d574e"
  focus: "#147d71"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "3.65rem"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-.025em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-.025em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: ".75rem"
    fontWeight: 600
rounded:
  badge: "4px"
  field: "5px"
  button: "6px"
  search: "7px"
  panel: "8px"
  flashcard: "10px"
  pill: "100px"
spacing:
  button-gap: "8px"
  action-gap: "10px"
  row-padding: "21px"
  panel-padding: "23px 25px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.surface}"
    rounded: "{rounded.button}"
    padding: "11px 17px"
  button-primary-hover:
    backgroundColor: "{colors.teal-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "11px 17px"
  stage-panel:
    backgroundColor: "{colors.pale}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-padding}"
  filter-chip-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: GCS FBLA Study Hub

## Overview

**Creative North Star: "The School Study Handbook"**

Warm paper, navy typography and restrained teal actions make long lessons approachable. The interface is quiet and purposeful: serif headings establish a reading hierarchy, while compact sans-serif controls support finding material and checking recall. This records the approved handbook direction and implemented styles in `src/styles/global.css`.

**Key Characteristics:**

- Generous reading space and clear typographic hierarchy.
- Thin rules and alphabetical rows for dense directories.
- Flat surfaces, restrained rounding and functional color.
- Keyboard-visible controls, responsive reading and printable lessons.

## Colors

The palette pairs warm neutrals with deep blue-green text and a restrained teal accent. Frontmatter values are normative.

### Primary

- **Study Teal** (`teal`): primary actions, text links, selected stage tabs and directional arrows. `teal-hover` deepens filled actions on hover.
- **Handbook Navy** (`navy`): the shield-shaped brand mark, selected preparation chips and the conference note's top rule.

### Secondary

- **Pale Sage** (`pale`): stage panels, lesson callouts, selected answers and feedback.
- **Warm Amber** (`amber`): state-only status text and advisory content, supported by warm pale backgrounds.

### Neutral

- **Warm Paper** (`paper`): the page canvas and header.
- **White Surface** (`surface`): search, answer choices and flashcards.
- **Deep Ink** (`ink`): primary text.
- **Muted Slate** (`muted`): summaries, metadata and supporting labels.
- **Soft Rule** (`line`): divisions, secondary control borders and table rules.

**The Functional Accent Rule.** Reserve stronger color for actions, selection, navigation and meaningful status.

## Typography

**Display Font:** Source Serif 4, with Georgia and serif fallbacks.

**Body Font:** DM Sans, with sans-serif fallback.

The serif adds an academic editorial character; the sans-serif keeps controls and dense event information legible. Reading paragraphs use an unusually open line height.

### Hierarchy

- **Display:** homepage title uses the frontmatter display role; standard page titles are slightly smaller (3.4rem), event headings (3rem) and lesson titles (2.9rem).
- **Headline:** section headings use the headline role; lesson section headings narrow to (1.85rem).
- **Title:** sans-serif subsection and event titles; event rows use a medium-bold variant (1rem, 600).
- **Body:** lesson prose uses the body role and a maximum measure (72ch); general paragraphs use a tighter line height (1.75).
- **Label:** compact filter labels; badges use a smaller size (.7rem). Navigation uses (.88rem).

**The Reading Hierarchy Rule.** Use serif for reading titles and major headings; keep navigation, metadata and controls in DM Sans.

## Layout

The central container has a maximum width (1320px) and fluid side padding (4.5vw). Large screens above (1450px) use fixed container padding (45px). Directory filters occupy a narrow column (188px) beside ruled event rows, with a gap (35px).

The lesson reader pairs sticky contents (210px) with an article column capped at (740px), separated by (65px). Prose is further constrained to (72ch). Event pages and guides use a main column with supporting source information at the side. Resources use a two-column ruled list.

At (1000px) and below, sidebars and gaps contract and lower-priority event metadata disappears. At (720px) and below, major layouts stack, filters become two columns, event format moves below its title, navigation wraps beneath the brand and the sticky contents becomes a native disclosure. Mobile page padding is (5vw). The homepage title becomes (2.85rem); lesson titles become (2.45rem).

Print styles remove navigation, practice and action controls, expand reading width and set prose to (11pt). Preserve this readable print path when extending lessons.

## Elevation & Depth

The system is flat: the implemented stylesheet uses no box shadows. Thin borders, spacing, white surfaces and pale sage panels convey grouping. Selected states use a border or tonal fill, without lifting controls off the page.

**The Flat Handbook Rule.** Use rules and tonal grouping for hierarchy; preserve the incumbent shadow-free treatment.

## Shapes

Small, gently curved corners belong to controls and callouts. Frontmatter records the observed radius vocabulary. Preparation chips are pill-shaped; event rows remain open, square-ended lines. The brand's small shield is the only prominent clipped silhouette. Avoid turning every content section into an enclosed card.

## Components

### Buttons

Compact and confident. Primary actions use teal with white text; outlined actions have transparent backgrounds and a soft rule border. Standard padding is defined in frontmatter; small buttons use (7px 11px). Primary hover deepens teal; outline and ghost hover use a muted neutral fill. Buttons transition background over (.15s). Disabled buttons retain their layout and reduce opacity (.5).

All buttons, links, fields and summaries receive a visible focus outline (3px) with an offset (4px). Reduced-motion preferences disable transitions and animation.

### Chips

Preparation-format chips have transparent backgrounds, soft borders, muted labels and pill corners. Selected chips use navy with white text. Preserve the `aria-pressed` state alongside the visual selection.

### Cards / Containers

Stage panels and feedback use pale sage; flashcards use white with a thin border. Stage panels use the frontmatter padding and radius; flashcards use more reading space (45px 28px) and a minimum height (240px). There is no shadow. Most directories and resource groups use ruled rows instead of cards.

### Inputs / Fields

Search is a white outlined container with gentle corners, an inline icon and padding (14px 17px). Its text input is transparent and borderless; the input retains the global visible keyboard focus outline. Selects use transparent fills, a thin neutral border, compact padding (9px 10px) and the field radius. Keep visible, associated labels.

### Navigation

The header is ruled along its bottom edge and uses compact sans-serif links. Current-page links turn teal, gain weight and receive a teal bottom border. At the mobile breakpoint the same navigation wraps to a full-width row. Lesson contents remain sticky on desktop; mobile uses a native summary/disclosure with teal anchor links.

### Event Rows and Practice Choices

Event rows use thin bottom rules, aligned metadata and a teal arrow. Hover introduces a very pale neutral fill. On phones the preparation badge moves below the title. Answer choices use white, thin borders and small corners, with sage and teal for selection/correctness; incorrect answers use warm red border and pale warm fill. Explanatory feedback remains visible in a separate tonal panel.

## Do's and Don'ts

### Do:

- **Do** preserve warm paper, navy text, teal actions and the serif/sans reading hierarchy.
- **Do** retain ruled lists, comfortable paragraph leading and constrained prose measures.
- **Do** keep visible focus, native anchor navigation, reduced-motion support and print readability.
- **Do** label statuses and selected states in text or semantics as well as color.

### Don't:

- **Don't** introduce decorative stock photography or a generic dashboard card grid into the approved handbook direction.
- **Don't** add shadows to the flat interface or enclose every text block.
- **Don't** use the serif face for dense controls or metadata.
- **Don't** remove mobile contents access or hide lesson text behind client-only rendering.
