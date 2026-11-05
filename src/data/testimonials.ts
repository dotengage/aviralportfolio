/** Testimonials — edited in the dashboard (src/content/testimonials.json). */
import raw from '../content/testimonials.json';
import { media } from '../lib/media';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: ImageMetadata;
}

export const testimonials: Testimonial[] = (
  raw as { quote?: string; name?: string; role?: string; company?: string; photo?: string }[]
)
  .filter((t) => t.quote && t.name)
  .map((t) => ({
    quote: t.quote!,
    name: t.name!,
    role: t.role ?? '',
    company: t.company ?? '',
    photo: media(t.photo),
  }));
