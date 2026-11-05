/** Brands in the logo strip — edited in the dashboard (src/content/brands.json). */
import raw from '../content/brands.json';
import { media } from '../lib/media';

export interface Brand {
  name: string;
  logo: ImageMetadata;
  /** display height in px — wide wordmarks sit shorter than stacked marks */
  h: number;
}

export const brands: Brand[] = (raw as { name: string; logo?: string; height?: number }[])
  .map((b) => ({ name: b.name, logo: media(b.logo), h: Number(b.height) || 36 }))
  .filter((b): b is Brand => !!b.logo);
