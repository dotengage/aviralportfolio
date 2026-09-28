// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: https://dotengage.github.io/aviralportfolio/
  // (if a custom domain is added later, set `site` to it and remove `base`)
  site: 'https://dotengage.github.io',
  base: '/aviralportfolio',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  build: { inlineStylesheets: 'auto' },
});
