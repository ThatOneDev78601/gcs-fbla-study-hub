# GCS FBLA Study Hub

A reading-first 2026–2027 study site for Glenelg Country School, Maryland Central District. Built with Astro, React, TypeScript, Tailwind, shadcn/ui and Pagefind.

## Run

Install with npm install, then npm run dev. Run npm run build for validated static output and full-text search. npm run preview serves the built site, including search. npm test runs regression checks. npm run check:content validates editorial references and coverage.

## Content

The three src/data/*-content.json packs contain original lessons, glossaries and questions. Edit those source packs, not generated Markdown. scripts/prepare-content.mjs produces src/content/lessons/, modules.json and research/coverage.json. Event-specific metadata and stage rules live in src/data/events.json. Source URLs and access requirements live in sources.json.

Build checks verify 76 events, at least four lessons/event, 20 questions/test event, source references, mapped knowledge areas, and valid answers. A coverage mapping records editorial association; it is not proof of competition readiness. Lessons are focused explanations, and external textbooks are optional further reading. Source changes require editorial review and redeployment.

Event practice now uses official FBLA CONNECT sample tests. `research/official-practice-links.json` records course links observed on October 31, 2026; `scripts/prepare-resources.mjs` maps 43 tests to 44 events in `src/data/official-practice.json`. The parliamentary events share a test; Introduction to FBLA was not listed and uses a clearly labeled course fallback. CONNECT sends `X-Frame-Options: DENY` and `frame-ancestors 'self'`, so tests open in their own tab. Never proxy authenticated pages, copy member credentials, or treat old local quiz scores as official results. Independent lesson checks and flashcards remain study aids; the former generated event-quiz interface has been removed.

## Data & privacy

Progress lives only in browser localStorage. My Study supports versioned JSON export/import; importing replaces local data. No accounts, cloud database, private Drive credentials, or analytics. Restricted official practice materials are linked, not copied. The original historical Drive is linked with an explicit age/access label.

## Rules

Checked October 27, 2026. Maryland district and state rules can differ from NLC rules. Known source inconsistencies are shown on event pages. Confirm eligibility, topic details, dates and submissions with the current official guide and adviser. This is an independent student resource; no score or placement guarantees.

## Publication

The Sites project identity is in .openai/hosting.json. dist/ is the static deployment directory. Never commit credentials or .research/ (raw research working data). Use the Sites source helper for publication provenance.

