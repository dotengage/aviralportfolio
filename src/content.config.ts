import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Case studies: one markdown file per case in src/content/cases, edited from Pages CMS. */
const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    brand: z.string().default(''),
    /** references to src/content/filters/*.json — stored as paths by the dashboard; we keep the file slug */
    filters: z
      .array(z.string())
      .nullish()
      .transform((v) => (v ?? []).map((f) => f.split(/[\/]/).pop()!.replace(/\.json$/, '')).filter(Boolean)),
    year: z.coerce.string().default(''),
    order: z.coerce.number().default(99),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    placeholder: z.boolean().default(false),
    summary: z.string().default(''),
    cover: z.string().nullish(),
    gallery: z.array(z.string()).nullish().transform((v) => v ?? []),
    shorts: z.array(z.string()).nullish().transform((v) => v ?? []),
    role: z.array(z.string()).nullish().transform((v) => v ?? []),
    deliverables: z.array(z.string()).nullish().transform((v) => v ?? []),
    results: z
      .array(z.object({ value: z.coerce.string(), label: z.string().default('') }))
      .nullish()
      .transform((v) => v ?? []),
    link: z
      .object({ label: z.string().nullish(), href: z.string().nullish() })
      .nullish(),
    /** optional client feedback shown at the end of the case study */
    testimonial: z
      .object({
        quote: z.string().nullish(),
        name: z.string().nullish(),
        role: z.string().nullish(),
        screenshots: z.array(z.string()).nullish(),
      })
      .nullish(),
  }),
});

/** Work-page filters (niches, agency vs personal…) — one JSON file each, managed in the dashboard. */
const filters = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/filters' }),
  schema: z.object({
    name: z.string(),
    order: z.coerce.number().default(99),
  }),
});

export const collections = { cases, filters };
