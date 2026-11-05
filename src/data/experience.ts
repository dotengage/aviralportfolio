/**
 * Experience / About page content — edited in the dashboard (src/content/about.json).
 * The stats row and the three languages stay in code.
 */
import about from '../content/about.json';
import { media } from '../lib/media';

export interface Milestone {
  when: string;
  title: string;
  place?: string;
  points: string[];
  kind: 'life' | 'education' | 'work' | 'build';
}

export interface Role {
  company: string;
  title: string;
  dates: string;
  duration: string;
  location?: string;
  summary: string;
  skills: string[];
  url?: string;
}

const list = <T,>(v: T[] | null | undefined): T[] => (Array.isArray(v) ? v : []);

export const aboutIntro = {
  headline: about.headline as string,
  bio: about.bio as string,
  photo: media(about.photo),
  photoBadge: (about.photoBadge as string) || '',
  timelinePhoto: media(about.timelinePhoto),
};

export const journey: Milestone[] = list(about.journey as Milestone[]).map((m) => ({ ...m, points: list(m.points) }));
export const roles: Role[] = list(about.roles as Role[]).map((r) => ({ ...r, skills: list(r.skills) }));
export const education = list(about.education as { school: string; degree: string; dates: string }[]);
export const skillGroups = list(about.skillGroups as { title: string; items: string[] }[]).map((g) => ({
  ...g,
  items: list(g.items),
}));
export const certifications = list(about.certifications as string[]);
export const posts = list(about.posts as { hook: string; excerpt: string; stats: string; link?: string }[]);

export const languages = [
  { name: 'Hindi', word: 'नमस्ते' },
  { name: 'English', word: 'Hello' },
  { name: 'Bhopali', word: 'क्या लाइन?' },
];

export const stats = [
  { value: 30, suffix: '+', label: 'Brands worked with' },
  { value: 200, suffix: '+', label: 'Ad videos made' },
];
