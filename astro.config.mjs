// @ts-check
import process from 'node:process';
import { defineConfig } from 'astro/config';

// Hosting: GitHub Pages. Today the site lives at https://dotengage.github.io/aviralportfolio/.
// To move to your own domain, set the repo variable CUSTOM_DOMAIN (e.g. aviral.in) under
// Settings → Secrets and variables → Actions → Variables, and add the same domain under
// Settings → Pages → Custom domain. The base path then drops away automatically.
const domain = process.env.CUSTOM_DOMAIN?.trim();

// https://astro.build/config
export default defineConfig({
  site: domain ? `https://${domain}` : 'https://dotengage.github.io',
  base: domain ? '/' : '/aviralportfolio',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
});
