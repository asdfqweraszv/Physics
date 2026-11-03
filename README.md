# PHYS1101 Study Companion

English, knowledge-first midterm study website built with React, TypeScript, Vite and bundled KaTeX.

## Run

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

Deploy on Vercel using the Vite preset, build `npm run build`, output `dist`. Hash routing needs no rewrites. No backend or environment variables required.

Includes nine topic guides, a printable formula sheet, 36 flashcards, 18 original self-graded questions, missed-question retries, an exam checklist and a two-day plan. Progress is device-local, with JSON export/import and storage-failure warnings. Scratch working is not saved.

Original numerical data and figures missing from the supplied summary are not guessed. New practice problems are labeled as original, not official exam questions. See [docs/WORKLOG.md](docs/WORKLOG.md) for provenance, limitations and file map.

## Vercel 404 / deployment setup

`vercel.json` explicitly selects Vite, builds with `npm run build`, serves `dist`, and falls back to `index.html` for application routes. Ensure Vercel's **Root Directory is the repository root** (blank / `.`), not `src` or `dist`. Remove conflicting dashboard build/output overrides, deploy a commit that contains this application, and redeploy after merging this PR. Before this PR, the application's files had not been committed/pushed; a deployment of the old README-only commit cannot serve the app.

If the domain itself is disconnected or the deployment was deleted, source rewrites cannot fix that: check that the production domain points at a successful current deployment. No production URL or Vercel deployment logs were available during implementation.

## Supabase: shared attempts sync

Uses existing project `https://dumwemqyukzzlwjslkss.supabase.co` and PKCE email magic links. No new project, passwords, anonymous users or service-role credentials.

1. In Vercel → Settings → Environment Variables set `VITE_SUPABASE_ANON_KEY` to this project's **public anon/publishable key** for Production and Preview. Optionally set `VITE_SUPABASE_URL` (defaults to the shared project above). Redeploy: Vite embeds these public variables at build time. Never set a service-role key.
2. In that project's Supabase Authentication settings enable email sign-in and add the exact production/preview origin with trailing `/` to **Redirect URLs** (and `http://localhost:5173/` for development). Open emailed links in the browser that requested them; PKCE requires its verifier stored on that browser.
3. Sign in using the same email/account as the other study sites. The login/sync panel is below the page content. Existing locally graded attempts backfill on sign-in/session restore. New self-grades and imported local attempts also sync. Failures are visible and retryable; reconnecting the network also retries.

### Required existing table contract (verify in the shared database)

`public.attempts` must accept `user_id` (auth user UUID), `course` (text, allowing `phys1101`), and `question_id` (text). Other required columns must have defaults. It needs a **unique constraint/index on `(user_id, course, question_id)`** and RLS SELECT/INSERT policies restricted to `auth.uid() = user_id`, with authenticated SELECT/INSERT privileges. Existing Chemistry/Math policies and rows must be preserved. If course is an enum or has a CHECK restriction, explicitly allow `phys1101` as well.

No database migrations were run against the shared project: the live schema and credentials were unavailable. If this contract differs from your current schema, adjust it in the existing project, not a new database. Do not disable RLS to work around an error. The UI reports policy/schema/network failures without losing local progress.

The application checks for an existing row and inserts only if missing; database code `23505` is treated as an idempotent race. In-flight and completed writes are deduped per user. Only valid question IDs are accepted. Unique server keys are essential to avoid duplicate points across tabs/devices. Grades are not uploaded and re-attempting does not create another point.

This is **cross-site attempts recording**, matching the provided Chemistry worklog, not two-way cloud backup of all study progress. Reading marks, card marks, grades and checklists remain local; keep using JSON export/import for those.
