# Aviral Jain — Portfolio

Astro + GSAP static site, hosted on GitHub Pages: https://dotengage.github.io/aviralportfolio/

```bash
npm install
npm run dev      # http://localhost:4321/aviralportfolio/
npm run build    # static output in dist/
```

## Editing content — the dashboard

Open **https://app.pagescms.org**, sign in with GitHub and pick `dotengage/aviralportfolio`.
Every save commits to `main`, and the site redeploys in about a minute.

| Dashboard section | Stored in |
| --- | --- |
| Case studies (rich text, cover, gallery, YouTube Shorts, results, show-on-home, draft) | `src/content/cases/*.md` |
| Testimonials | `src/content/testimonials.json` |
| Brand logos | `src/content/brands.json` |
| About & experience (bio, photos, timeline, roles, education, skills, certifications, posts) | `src/content/about.json` |
| Resume PDF | `src/content/settings.json` → file in `public/uploads/` |

Uploaded images go to `src/assets/uploads/` and are optimised (WebP, responsive sizes) at build time.
The dashboard is configured in `.pages.yml`.

Still in code: site basics (`src/data/site.ts`), SaaS projects (`src/data/projects.ts`), homepage stats and
languages (`src/data/experience.ts`).

## Contact form

Uses [Web3Forms](https://web3forms.com) — the access key and the "What do you need?" options are in the
dashboard → Contact form.

### Google Sheets (optional)

Every enquiry can also be added as a row in a Google Sheet. Follow the steps at the top of
`tools/google-sheet-script.gs`, then paste the web-app URL into the dashboard → Contact form → Google Sheet link.

## Custom domain

1. Add the repo variable `CUSTOM_DOMAIN` (e.g. `aviral.in`) — same place as above.
2. Settings → Pages → Custom domain → enter the domain, and add the DNS records GitHub shows at your registrar.
3. Re-run the "Deploy to GitHub Pages" workflow. The `/aviralportfolio` base path drops away automatically.
