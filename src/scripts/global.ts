import { finePointer } from './motion';

/* ---------- clock ---------- */
document.querySelectorAll<HTMLElement>('[data-clock]').forEach((el) => {
  const fmt = new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: el.dataset.tz || 'Asia/Kolkata',
  });
  const tick = () => (el.textContent = fmt.format(new Date()));
  tick();
  setInterval(tick, 1000);
});

/* ---------- custom cursor: a single orange square ---------- */
if (finePointer) {
  const root = document.documentElement;
  const dot = document.querySelector<HTMLElement>('.cursor__dot');
  const label = document.querySelector<HTMLElement>('.cursor__label');

  if (dot && label) {
    root.classList.add('has-cursor', 'cursor-hidden');

    addEventListener(
      'pointermove',
      (e) => {
        if (e.pointerType !== 'mouse') return;
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        root.classList.remove('cursor-hidden');
      },
      { passive: true },
    );
    document.addEventListener('pointerleave', () => root.classList.add('cursor-hidden'));
    addEventListener('pointerdown', () => root.classList.add('cursor-down'));
    addEventListener('pointerup', () => root.classList.remove('cursor-down'));

    const INTERACTIVE = 'a, button, [role="tab"], [data-cursor], label, select, summary';
    document.addEventListener('pointerover', (e) => {
      const t = e.target as Element;
      const labelled = t.closest<HTMLElement>('[data-cursor]');
      root.classList.toggle('cursor-label', !!labelled?.dataset.cursor);
      label.textContent = labelled?.dataset.cursor ?? '';
      root.classList.toggle('cursor-hover', !!t.closest(INTERACTIVE));
    });
  }
}
