# PHYS1101 Midterm Study Site — Worklog

A record of the requirements, decisions, content provenance and implementation. This page is rendered directly from `docs/WORKLOG.md`.

## 1. Starting point

The user supplied the CHEM1012 worklog, a PHYS1101 Detailed Study Summary, and the MATH1014 full compressed PDF. The PDF’s worklog was extracted and read to inherit its conventions: self-grading, missed-question review, hash routes, visible storage failures and JSON backups. This repository was initially empty apart from a README.

The website is English to match the supplied study content. It is a multi-file Vite + React + TypeScript application suitable for Vercel, not a standalone HTML export.

## 2. Content restoration and limits

The supplied summary contained blank spaces where equations and numerical values had been removed. Standard equations were restored in KaTeX, including kinematics, Newton’s laws, work-energy, impulse-momentum, circular motion, torque, calorimetry, radiation, ideal gases, latent heat and electrostatics.

Nine topic guides include definitions, governing equations with validity conditions, solution methods, application discussions and common mistakes. The exam-focused checklist supplies eight habits. The two-day plan contains twelve tasks.

**Missing numerical values and figures were not invented.** Original midterm and lecture examples are presented symbolically with explicit limitations. This includes the planetary graph, spring pull, ice friction, bullet-block motion, centrifuge, turns, calorimetry, radiation and missing spool figure. Typical constants are labeled as standard approximations, not recovered course values. Use any value specified by the exam in preference to defaults.

## 3. Study kit

- 9 topic guides and a searchable topic index.
- Printable formula sheet with assumptions and constants.
- 36 active-recall cards; topic decks, flip, shuffle, known/review marks and keyboard controls.
- 18 original short-answer practice questions with worked solutions (two per topic). These are new illustrative problems, **not official sample questions**.
- Self-grading: reveal solution, mark correct or needs review. No automatic grading.
- Review missed questions and retry them as a frozen session list, so grading does not remove the current question mid-session.
- Chapter read marks, exam checklist, common-mistake checks and two-day tracker.

## 4. Architecture and storage safety

React with a small hash router; no host rewrites needed. KaTeX is bundled from npm with its fonts; no CDN is required. Responsive sidebar, reading layout and print stylesheet. All assets are local.

Progress lives under `phys1101-progress-v1` in localStorage. It includes reading marks, checkboxes, card marks, question grades and last card/session position. JSON backups include a version and are validated before import; replacement requires confirmation. If reading stored data fails, autosave is paused to avoid silently overwriting unreadable progress. A warning offers export or explicit resume. Write failures retain in-memory progress and display a persistent warning. Scratch working is deliberately not persisted and is labeled accordingly.

No Supabase account or project was provided for this Physics build. Authentication and shared attempts sync are not implemented. The historical Chemistry integration is not assumed to authorize a new Physics integration.

## 5. File map

- `src/content/course.ts` — typed notes, equations, flashcards, questions, checklist and plan.
- `src/lib/progress.ts` — progress schema, backup validation and loading.
- `src/main.tsx` — shell, routing, study pages, sessions and backup controls.
- `src/styles.css` — responsive light theme and print stylesheet.
- `scripts/audit.ts` — content, math and backup validation checks.
- `docs/WORKLOG.md` — this worklog, imported directly by the app.

## 6. Decisions and rejected alternatives

- Native typesetting, not PDF crops: source Physics content is text, not a supplied equation PDF.
- Self-grading, not automatic answer judgment: partial credit and alternate methods matter.
- No invented official numerical examples or guessed spool directions.
- Browser-local progress with explicit backups, not an unconfigured cloud sync.
- No single-file export or deployment secrets in the source.

## 7. Commands and deployment

```
npm install
npm run dev
npm run typecheck
npm test
npm run build
npm run preview
```

Vercel: import the repository, choose Vite, build `npm run build`, output `dist`. No environment variables or rewrite configuration are required. The development server binds to `0.0.0.0`. A deployment is not automatically created by building locally.

## 8. Next candidates

Supply the original Physics lecture/sample materials to verify course-specific constants and recover missing figures and numerical values. Add further original or official practice with stable unique IDs. Optional future work: spaced repetition, timing and explicitly configured shared-account attempts sync.

## 9. Verification

`npm run build` (TypeScript and production bundle) and `npm test` pass. The content audit checks topic/card/question counts, unique stable IDs, referenced topics, all 213 inline/display math expressions with strict KaTeX parsing, and valid/invalid backup schemas. Browser automation was attempted but Chromium download was blocked by the sandbox’s outbound network restrictions; full browser interaction and print-layout verification remain manual checks, not claimed automated passes.

## 10. Vercel fix, shared Supabase and pull request

User reported Vercel `404 NOT_FOUND` and requested shared Supabase sync plus a PR. Added `vercel.json` with explicit Vite build/output and app-route fallback. The initial application was still uncommitted; a deployment of the prior README-only branch cannot serve it. No production URL, deployment logs or GitHub deployment/check records were available to verify a specific production failure. README documents root-directory, dashboard overrides and domain checks.

Added optional public-key-configured Supabase client for the existing shared project, PKCE magic links, explicit callback exchange, session restore, sign-out and a visible login/sync panel. The earlier statement that sync is not implemented describes the initial version; this session implements it. No password/anonymous fallback or service-role key is used.

On sign-in and session restore, known local question IDs backfill to `attempts` with `course=phys1101`; later self-grades and imports also trigger sync. SELECT-before-INSERT plus per-user in-memory dedupe and server unique-key race handling prevent repeat points, provided the existing composite unique key is present. Errors remain retryable and visible; local saving is independent. This records attempts, not two-way sync of local grades, notes or checklists.

No access to live Supabase schema or public key was available. Database policies, unique keys and allowance for `phys1101` must be verified in the existing shared project. Required Vercel variables and Supabase redirect URLs are documented in README and `.env.example`. No live database changes were attempted.

Six mocked sync tests cover concurrent dedupe, existing rows, unique-key races, failed-write retries, user isolation, unknown imported IDs and failed reads. These supplement the content/math/backup audit; they do not claim an end-to-end live login or database test.

## 11. Detailed formula guides and diversified practice (18 → 108)

Request: make study notes more detailed, especially variable definitions, formula meaning and examples; substantially expand and diversify the question bank.

### Notes and formula sheet

All **38 formula groups** now have a physical interpretation, a symbol/meaning/unit table, explicit selection and validity guidance, an original numerical worked example with at least two steps, and a concluding sign/unit/limiting-case check. The nine topics gain **27 deeper concept explanations** covering graph slopes/areas, signs versus slowing, incline forces, system boundaries, energy bookkeeping, radial axes, calorimetry thresholds, absolute pressure, molecular statistics, heating curves and electric-field interpretation. Equation jump buttons make long notes easier to navigate. Notes search includes the new formula details.

The formula sheet shares the symbol tables and assumptions, with links to the full examples in notes. Example calculations are new instructional content and are labeled **Original worked example**; original course examples with missing data remain symbolic and explicitly limited. No missing official values or figures are guessed.

### Question expansion

Each of the nine topics receives ten new questions: **12 per topic, 108 total** (90 new). The six question styles are calculation, concept, comparison, explain the error, text-described graph interpretation and multi-stage problems. Practice provides style-based sessions in addition to topic/all/missed sessions; the current question shows its style. All prompts remain self-graded with worked explanations. Counts are derived from data throughout the dashboard and practice UI.

Existing q1/q2 IDs and content are preserved. New IDs are q3–q12 in each topic, so local grades and shared attempts keep their meaning. Expanded IDs are automatically accepted by the existing Supabase recording/backfill logic. No auth or database schema changes are required for this expansion. Scratch text is reset on question change, and keyboard shortcuts ignore the scratch textarea.

### Files

- `src/content/formulaDetails.ts`: typed explanations, symbol tables and 38 worked examples keyed by the existing formula labels.
- `src/content/concepts.ts`: the 27 additional conceptual explanations.
- `src/content/expandedQuestions.ts`: 90 new typed original questions and solutions.
- `src/content/course.ts`: aggregates content without changing existing stable IDs.
- `src/main.tsx` / `src/styles.css`: formula guides, responsive symbol tables, equation jumps, question-style sessions and dynamic counts.
- `scripts/audit.ts`: checks every formula has definitions, units and worked examples; validates 108 unique IDs, 12 per topic, six styles and strict KaTeX parsing of **956 math expressions**.
- `scripts/browser-smoke.mjs`: reproducible Playwright smoke test (see README).

### Verification

`npm test` passes the expanded content/backup audit and seven mocked attempts-sync tests, including newly appended question IDs. `npm run build` passes TypeScript and production bundling. A real headless Chromium smoke run passes: all 38 worked examples and symbol tables render; all 108 questions and nine topic counts appear; style filtering works; a seeded legacy grade survives; new grading and missed-question retry work; scratch typing does not invoke navigation shortcuts; the formula sheet renders to a print PDF; notes and practice have no page-level horizontal overflow at 390px. Desktop, formula-example and mobile screenshots were inspected. No live Supabase sign-in or production deployment is claimed by these tests.

The default browser downloader remains restricted in this environment. For this session, Chromium was obtained via an npm-distributed binary and run with its matching shared libraries; browser binaries, temporary PDFs and screenshots are not committed.

## 12. Frictional melting: explicit thermal stages

User identified that the frictional-melting treatment hid its stages in one equation. Removed the combined melting-mass shortcut from the notes and formula sheet. The shared guide now displays four explicit stages: determine heat retained by the ice; warm the entire block and test the threshold; use only surplus heat for latent melting; warm liquid only after complete melting. The guide handles no melting, partial melting, full melting and the limit before boiling.

The thermal model is now explicit: uniform equilibration requires warming the entire mass before melting. Selective local surface melting is a different heat-distribution model; kinetic-energy loss alone cannot determine it. A retained-heat fraction accounts for losses to the contact surface/surroundings. The former 2 kg, −10 °C, 10 m/s example yields 100 J, much less than the 42000 J needed to reach melting: under the stated uniform model **no ice melts**, and the temperature becomes −9.98 °C. A separate worked example demonstrates subtracting warming energy before partial melting.

Existing question IDs, grades and cloud attempts are unchanged. Formula-group count remains 38, with 39 worked examples. The audit now validates additional examples and stage formulas (982 math expressions). `npm test` passes seven existing sync tests plus three new staged-melting regression tests; `npm run build` passes. The browser smoke script is updated to expect both melting examples and four stage panels in notes/print view; it has not been rerun in this session.
