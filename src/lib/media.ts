/**
 * Images uploaded through the dashboard (Pages CMS) live in src/assets/uploads and are
 * stored in content as repo paths like "src/assets/uploads/cases/cover.jpg".
 * This turns those strings into optimisable Astro images.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/uploads/**/*.{png,jpg,jpeg,webp,avif,gif,svg,PNG,JPG,JPEG,WEBP}',
  { eager: true },
);

export function media(path?: string | null): ImageMetadata | undefined {
  if (!path) return undefined;
  const key = '/' + path.trim().replace(/^\/+/, '');
  const hit = images[key];
  if (!hit) console.warn(`[media] image not found: ${path}`);
  return hit?.default;
}

/** Pull the video ID out of any YouTube / Shorts link (or accept a bare ID). */
export function youtubeId(input: string): string | undefined {
  const s = input.trim();
  if (/^[\w-]{11}$/.test(s)) return s;
  const m = s.match(/(?:shorts\/|youtu\.be\/|[?&]v=|embed\/|live\/)([\w-]{11})/);
  return m?.[1];
}
