# Design — portfolio site rebuild (2026)

**Goal:** a clean, employer-facing research portfolio that maximizes hireability
at AI labs / big tech / quant, and doubles as a "portfolio URL" for applications.

**Audience priority:** industry employers first; research depth supports it.

## Decisions

- **Stack:** Astro + Tailwind CSS, static, deployed to GitHub Pages via the
  official `withastro/action`. User page → served at root (no `base`).
- **Layout:** single page with sticky anchor nav, dark-mode toggle, responsive.
  Order: Hero → quick-signal badges → About → Selected Research → Interactive
  demo → Publications → Experience/Education/Skills → Contact.
- **Impact-first framing:** each research card states the impact *before* the
  venue.

## Integrity rules (held throughout)

- **Affiliation:** "Qualcomm (formerly VinAI Research)" everywhere, for
  consistency with the résumé; VinAI mentors retained for credibility.
- **Under-review papers** (LORO/UAI, BRESS/ICML): listed as *Under review*,
  summary only — **no PDF, no figures, no code link** while under double-blind
  review.
- **Figures:** only real result figures from *public* repos/arXiv
  (NeurIPS/BOSS, RLC/meta-bandit).
- **Interactive demo:** a live in-browser bandit simulation, explicitly labeled
  a pedagogical illustration — **not** paper data.
- No fabricated metrics; every claim traces to the résumé, a public repo, or arXiv.

## Content sources

- `src/data/site.ts`, `src/data/publications.ts` — all copy.
- `public/` — headshot, paper PDFs, résumé, result figures.

## Rollback

Previous Jekyll site preserved on branch `jekyll-backup`.
