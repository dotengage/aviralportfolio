import { gsap, ScrollTrigger, reduced } from './motion';

/**
 * Pin `section` and translate `track` horizontally while the user scrolls vertically.
 * Desktop only; on touch / small screens the track is a native swipeable scroller.
 */
export function horizontalScroll(section: HTMLElement, track: HTMLElement, onProgress?: (p: number) => void) {
  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px) and (hover: hover)', () => {
    if (reduced) return;
    section.classList.add('is-pinned');
    const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${distance()}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onUpdate: (st) => onProgress?.(st.progress),
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(track, { clearProps: 'transform' });
      section.classList.remove('is-pinned');
    };
  });

  if (onProgress) {
    track.addEventListener(
      'scroll',
      () => onProgress(track.scrollLeft / Math.max(1, track.scrollWidth - track.clientWidth)),
      { passive: true },
    );
  }
  return () => ScrollTrigger.refresh();
}
