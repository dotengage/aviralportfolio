/** SaaS projects on the home page — edited in the dashboard (src/content/projects.json). */
import raw from '../content/projects.json';
import { media } from '../lib/media';

export interface Project {
  slug: string;
  name: string;
  kind: string;
  oneLiner: string;
  description: string;
  features: string[];
  builtFor: string;
  url: string;
  image?: ImageMetadata;
  tags: string[];
}

type RawProject = Partial<Record<'name' | 'kind' | 'oneLiner' | 'description' | 'builtFor' | 'url' | 'image', string>> & {
  features?: string[] | null;
  tags?: string[] | null;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'project';

const seen = new Set<string>();

/** "dotengage.in/app" → "https://dotengage.in/app"; also the short form shown in the fake browser bar */
const normaliseUrl = (u = '') => {
  const s = u.trim();
  if (!s) return '';
  return /^https?:\/\//i.test(s) ? s : `https://${s}`;
};
export const displayUrl = (u: string) => {
  try {
    const { host, pathname } = new URL(u);
    return host + (pathname === '/' ? '' : pathname);
  } catch {
    return u;
  }
};

export const projects: Project[] = (raw as RawProject[])
  .filter((p) => p.name?.trim())
  .map((p) => {
    // unique, stable id for the expand/collapse controls
    let slug = slugify(p.name!);
    while (seen.has(slug)) slug += '-2';
    seen.add(slug);
    return {
      slug,
      name: p.name!.trim(),
      kind: p.kind?.trim() ?? '',
      oneLiner: p.oneLiner?.trim() ?? '',
      description: p.description?.trim() ?? '',
      features: (p.features ?? []).map((f) => f.trim()).filter(Boolean),
      builtFor: p.builtFor?.trim() ?? '',
      url: normaliseUrl(p.url),
      image: media(p.image),
      tags: (p.tags ?? []).map((t) => t.trim()).filter(Boolean),
    };
  });
