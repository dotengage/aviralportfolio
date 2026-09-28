# Aviral Jain — Portfolio

Astro + GSAP static site. Zero framework runtime; ~65 KB gzipped JS in total.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

Everything lives in `src/data/` — no code changes needed.

| What | File |
| --- | --- |
| Email, socials, tagline, greeting words, nav | `src/data/site.ts` |
| Brand strip (add `logo` imports to switch names → logos) | `src/data/brands.ts` |
| SaaS projects (CAT Monitor, Creator OS) | `src/data/projects.ts` |
| **Case studies + YouTube Shorts** | `src/data/cases.ts` (instructions at the top) |
| Testimonials | `src/data/testimonials.ts` |
| Timeline, experience, education, skills, posts, stats | `src/data/experience.ts` |

- **Resume:** drop the PDF at `public/resume.pdf`.
- **Photos:** `src/assets/photos/` (transparent PNG cut-outs; Astro converts them to WebP automatically).
- **Case study covers:** put images in `src/assets/cases/` and import them in `cases.ts`.

## Contact form

Uses [Web3Forms](https://web3forms.com). Create a free access key for `aviral@dotengage.in`, then set
`PUBLIC_WEB3FORMS_KEY` in `.env` (local) and in Vercel → Project → Settings → Environment Variables.

## Deploy (Vercel)

Import the repo on Vercel — it auto-detects Astro. Update `site` in `astro.config.mjs` once the domain is live.
