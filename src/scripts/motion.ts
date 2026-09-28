import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

export const lenis: Lenis | null = reduced ? null : new Lenis({ lerp: 0.11, wheelMultiplier: 1 });

if (lenis) {
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

/** Resolves once the intro greeting has finished (or immediately if it was skipped). */
export const introDone = new Promise<void>((resolve) => {
  const el = document.getElementById('preloader');
  if (!el || document.documentElement.classList.contains('greeted') || reduced) return resolve();
  lenis?.stop();
  const finish = () => {
    el.remove();
    document.documentElement.classList.remove('preloading');
    try {
      sessionStorage.setItem('greeted', '1');
    } catch {}
    lenis?.start();
    resolve();
  };
  el.addEventListener('animationend', (e) => e.target === el && finish());
  setTimeout(finish, 3200); // safety net
});

function initReveals() {
  const els = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (reduced) return;
  ScrollTrigger.batch(els, {
    start: 'top 90%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.08, overwrite: true }),
  });
}

introDone.then(initReveals);

// Images/fonts can shift layout — keep trigger positions honest.
window.addEventListener('load', () => ScrollTrigger.refresh());

export { gsap, ScrollTrigger };
