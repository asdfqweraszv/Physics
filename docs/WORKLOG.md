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
