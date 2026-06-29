# duongnhatthang.github.io

Personal research portfolio for **Thang Duong** — PhD candidate in Computer Science (RL, multi-armed bandits, LLM reasoning) at the University of Arizona.

Built with **[Astro](https://astro.build)** + **[Tailwind CSS](https://tailwindcss.com)**, deployed to **GitHub Pages** via GitHub Actions.

## Develop

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Edit content

All site content lives in two typed data files — no need to touch markup:

- `src/data/site.ts` — profile, value-prop badges, about, selected research (with figures + links), experience, education, skills, BibTeX.
- `src/data/publications.ts` — the full publication list.

Static assets (headshot, paper PDFs, result figures, resume) live in `public/`.

To **add a publication**: append an entry to `src/data/publications.ts` (and, if it's a highlight, to `research` in `src/data/site.ts`).

## Deploy

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it. Repository **Settings → Pages → Source** must be set to
**GitHub Actions**.

## History

The previous Jekyll version of this site is preserved on the `jekyll-backup` branch.
