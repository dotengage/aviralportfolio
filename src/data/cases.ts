/**
 * CASE STUDIES — read from src/content/cases/*.md (edited in the Pages CMS dashboard).
 * Single source for the Work page, the home work rail and every case-study dialog.
 *
 * FILTERS — src/content/filters/*.json, also managed in the dashboard. A case study can
 * belong to any number of them; filters with no (visible) case studies are hidden on the site.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import { media, youtubeId } from '../lib/media';

export interface Filter {
  id: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  brand: string;
  /** filter ids, in the site-wide filter order */
  filters: string[];
  /** the first filter's name — shown as the tag on cards */
  label: string;
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
  /** client feedback for this project — text, screenshots, or both */
  testimonial?: { quote: string; name: string; role: string; screenshots: ImageMetadata[] };
  featured: boolean;
  placeholder: boolean;
  entry: CollectionEntry<'cases'>;
}

type RawTestimonial = CollectionEntry<'cases'>['data']['testimonial'];

function toTestimonial(t: RawTestimonial): CaseStudy['testimonial'] {
  if (!t) return undefined;
  const quote = t.quote?.trim() ?? '';
  const screenshots = (t.screenshots ?? []).map(media).filter((img): img is ImageMetadata => !!img);
  if (!quote && !screenshots.length) return undefined; // nothing filled in → no section
  return { quote, name: t.name?.trim() ?? '', role: t.role?.trim() ?? '', screenshots };
}

let filterCache: Filter[] | undefined;
let caseCache: CaseStudy[] | undefined;

/** Every filter defined in the dashboard, in its sort order. */
export async function getFilters(): Promise<Filter[]> {
  filterCache ??= (await getCollection('filters'))
    .sort((a, b) => a.data.order - b.data.order || a.data.name.localeCompare(b.data.name))
    .map((f) => ({ id: f.id, label: f.data.name }));
  return filterCache;
}

/** Only the filters that at least one of `items` uses, with counts — what the filter chips show. */
export async function filtersFor(items: CaseStudy[]) {
  return (await getFilters())
    .map((f) => ({ ...f, count: items.filter((c) => c.filters.includes(f.id)).length }))
    .filter((f) => f.count > 0);
}

export async function getCases(): Promise<CaseStudy[]> {
  if (caseCache) return caseCache;
  const filters = await getFilters();
  const rank = new Map(filters.map((f, i) => [f.id, i]));
  const name = new Map(filters.map((f) => [f.id, f.label]));
  const entries = await getCollection('cases', ({ data }) => !data.draft);

  caseCache = entries
    .sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title))
    .map((entry) => {
      const d = entry.data;
      // ignore filters that were deleted in the dashboard; keep the remaining ones in filter order
      const ids = [...new Set(d.filters.map((f) => f.toLowerCase()))]
        .filter((f) => rank.has(f))
        .sort((x, y) => rank.get(x)! - rank.get(y)!);
      return {
        slug: entry.id,
        title: d.title,
        brand: d.brand,
        filters: ids,
        label: ids.length ? name.get(ids[0])! : '',
        year: d.year,
        role: d.role,
        deliverables: d.deliverables,
        summary: d.summary,
        results: d.results.filter((r) => r.value || r.label),
        shorts: d.shorts.map(youtubeId).filter((id): id is string => !!id),
        cover: media(d.cover),
        gallery: d.gallery.map(media).filter((img): img is ImageMetadata => !!img),
        link: d.link?.href ? { label: d.link.label || 'View project', href: d.link.href } : undefined,
        testimonial: toTestimonial(d.testimonial),
        featured: d.featured,
        placeholder: d.placeholder,
        entry,
      };
    });
  return caseCache;
}

/** Filter names for one case study, e.g. "Dot Engage, Fashion". */
export async function filterNames(c: CaseStudy) {
  const all = await getFilters();
  return c.filters.map((id) => all.find((f) => f.id === id)?.label ?? id);
}
