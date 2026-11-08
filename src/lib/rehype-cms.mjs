/**
 * Small fixes for markdown written in the Pages CMS rich-text editor:
 *  - `++text++` (the editor's underline syntax) → <u>text</u>, even around bold/italic
 *  - links typed without a protocol ("www.instagram.com") → https://…
 *  - external links open in a new tab
 */
const isText = (n) => n && n.type === 'text';
const SKIP = new Set(['code', 'pre', 'script', 'style']);

function underline(node) {
  if (!node.children || SKIP.has(node.tagName)) return;
  node.children.forEach(underline);

  // 1. split text nodes so every "++" becomes its own marker
  const parts = [];
  for (const child of node.children) {
    if (isText(child) && child.value.includes('++')) {
      child.value.split('++').forEach((seg, i) => {
        if (i > 0) parts.push({ type: 'marker' });
        if (seg) parts.push({ type: 'text', value: seg });
      });
    } else parts.push(child);
  }
  if (!parts.some((p) => p.type === 'marker')) return;

  // 2. pair markers in order; everything between a pair becomes <u>…</u>
  const out = [];
  let open = -1;
  for (const p of parts) {
    if (p.type !== 'marker') out.push(p);
    else if (open === -1) {
      open = out.length;
      out.push(p);
    } else {
      const inner = out.splice(open + 1);
      out.pop(); // the opening marker
      out.push({ type: 'element', tagName: 'u', properties: {}, children: inner });
      open = -1;
    }
  }
  // an unpaired "++" is just text
  node.children = out.map((p) => (p.type === 'marker' ? { type: 'text', value: '++' } : p));
}

function links(node) {
  if (node.type === 'element' && node.tagName === 'a' && typeof node.properties?.href === 'string') {
    let href = node.properties.href.trim();
    if (/^www\./i.test(href)) href = `https://${href}`;
    node.properties.href = href;
    if (/^https?:\/\//i.test(href)) {
      node.properties.target = '_blank';
      node.properties.rel = ['noopener'];
    }
  }
  node.children?.forEach(links);
}

export default function rehypeCms() {
  return (tree) => {
    underline(tree);
    links(tree);
  };
}
