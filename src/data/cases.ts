/**
 * CASE STUDIES — read from src/content/cases/*.md (edited in the Pages CMS dashboard).
 * Single source for the Work page, the home work rail and every case-study dialog.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { media, youtubeId } from '../lib/media';

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
  results: { value: string; label: string }[];
  /** YouTube video IDs, parsed from whatever link was pasted */
  shorts: string[];
  cover?: ImageMetadata;
  gallery: ImageMetadata[];
  link?: { label: string; href: string };
  featured: boolean;
  placeholder: boolean;
  entry: CollectionEntry<'cases'>;
}

let cache: CaseStudy[] | undefined;

export async function getCases(): Promise<CaseStudy[]> {
  if (cache) return cache;
  const entries = await getCollection('cases', ({ data }) => !data.draft);
  cache = entries
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title))
    .map((entry) => {
      const d = entry.data;
      return {
        slug: entry.id,
        title: d.title,
        brand: d.brand,
        category: d.category,
        year: d.year,
        role: d.role,
        deliverables: d.deliverables,
        summary: d.summary,
        results: d.results.filter((r) => r.value || r.label),
        shorts: d.shorts.map(youtubeId).filter((id): id is string => !!id),
        cover: media(d.cover),
        gallery: d.gallery.map(media).filter((img): img is ImageMetadata => !!img),
        link: d.link?.href ? { label: d.link.label || 'View project', href: d.link.href } : undefined,
        featured: d.featured,
        placeholder: d.placeholder,
        entry,
      };
    });
  return cache;
}
