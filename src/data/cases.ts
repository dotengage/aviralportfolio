/**
 * CASE STUDIES — the single source for the Work page, the home work rail
 * and every case-study dialog.
 *
 * HOW TO FILL ONE IN
 * 1. Copy an entry, give it a unique `slug` (lowercase-with-dashes).
 * 2. Pick a `category`:  'personal' | 'dotengage' | 'personal-ugc' | 'other'
 * 3. `shorts`: paste YouTube Shorts IDs — for youtube.com/shorts/AbC123xyz the ID is AbC123xyz
 * 4. `cover` (optional): put an image in src/assets/cases/ and import it at the top.
 * 5. Set `placeholder: false` (or delete the line) once it's real.
 * `featured: true` puts it on the home page rail (only dotengage / personal-ugc show there).
 */

export type CaseCategory = 'personal' | 'dotengage' | 'personal-ugc' | 'other';

export const categories: { id: CaseCategory; label: string }[] = [
  { id: 'dotengage', label: 'Dot Engage' },
  { id: 'personal-ugc', label: 'Personal UGC' },
  { id: 'personal', label: 'Personal' },
  { id: 'other', label: 'Other' },
];

export const categoryLabel = (c: CaseCategory) => categories.find((x) => x.id === c)?.label ?? c;

export interface CaseStudy {
  slug: string;
  title: string;
  brand: string;
  category: CaseCategory;
  year: string;
  role: string[];
  deliverables: string[];
  summary: string;
  challenge: string;
  strategy: string;
  creativeDirection: string;
  results: { value: string; label: string }[];
  shorts: string[];
  cover?: ImageMetadata;
  link?: { label: string; href: string };
  featured?: boolean;
  placeholder?: boolean;
}

const template = (n: number, category: CaseCategory, featured = true): CaseStudy => ({
  slug: `case-${String(n).padStart(2, '0')}`,
  title: `Case study ${String(n).padStart(2, '0')}`,
  brand: 'Brand name',
  category,
  year: '2025',
  role: ['Strategy', 'Creative direction'],
  deliverables: ['UGC ads', 'Scripts & hooks'],
  summary: 'One line on what you did and the outcome. Shown on the card.',
  challenge: 'What was the brand struggling with? Who were they trying to reach? (2–3 lines)',
  strategy: 'Your plan: angles, hooks, creator selection, platforms, testing approach. (3–5 lines)',
  creativeDirection:
    'How you directed the creators: brief, tone, shot list, pacing, edits. What made it stop the scroll?',
  results: [
    { value: '0x', label: 'ROAS / result metric' },
    { value: '0', label: 'Videos delivered' },
    { value: '0%', label: 'Hook rate / CTR' },
  ],
  shorts: [],
  featured,
  placeholder: true,
});

export const cases: CaseStudy[] = [
  template(1, 'dotengage'),
  template(2, 'dotengage'),
  template(3, 'personal-ugc'),
  template(4, 'dotengage'),
  template(5, 'personal-ugc'),
  template(6, 'dotengage'),
  template(7, 'personal-ugc'),
  template(8, 'personal', false),
  template(9, 'personal', false),
  template(10, 'other', false),
];
