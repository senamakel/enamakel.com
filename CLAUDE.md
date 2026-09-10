@AGENTS.md

# Working on this repo

## Git workflow

Work directly on `main`. Do not create worktrees, do not create feature
branches, and do not open pull requests. Commit and push straight to `main`.

This overrides the global worktree/PR preferences for this repo only.

Pushing to `main` deploys the live site, so make sure `pnpm lint` and
`pnpm build` both pass before pushing.

## What this is

The personal site at enamakel.com. Next.js App Router, Tailwind v4,
shadcn/ui, statically exported (`output: "export"`) and deployed to GitHub
Pages by `.github/workflows/deploy.yml` on every push to `main`.

DNS for enamakel.com sits behind Cloudflare, which proxies to GitHub Pages.

## Conventions

- All page copy lives in `src/lib/site.ts`, never inline in JSX. `**bold**`
  markers in the bio render through `RichText`.
- The design follows the Cognition blog: warm paper `#F7F6F5`, black ink,
  Source Serif 4 for body text, Geist for headings, Geist Mono for figures.
- The palette is strictly monochrome. The profile photo is the only colour on
  the page, so do not introduce an accent hue.
- No em dashes or en dashes in site copy.
- Brand glyphs are inlined Simple Icons paths in `social-icon.tsx`, because
  lucide-react no longer ships brand icons.
- Anything animated must render deterministically on the server first, then
  change after mount, or static export will throw a hydration mismatch.
