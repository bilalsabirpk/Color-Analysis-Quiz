import { LIPSTICK, BLUSH, EYESHADOW } from '@/lib/shade-data';

// Adds a "quick answers" FAQ to each of the 12 "<season>-makeup-palette"
// guides, built from the same shade data the lipstick, blush and eyeshadow
// finders use, so the guide, the tools and the FAQ schema always agree.
// It goes right before the closing "Not sure you are a ...?" section.

const names = (list) => {
  const n = list.map(([name]) => name.toLowerCase());
  return n.length > 1 ? `${n.slice(0, -1).join(', ')} and ${n[n.length - 1]}` : n[0] || '';
};

const lower = (s) => s.replace(/^./, (m) => m.toLowerCase());

function faqFor(season, slug) {
  const lip = LIPSTICK[slug];
  const blush = BLUSH[slug];
  const eye = EYESHADOW[slug];
  if (!lip || !blush || !eye) return null;
  return [
    {
      q: `What colours are in the ${season} makeup palette?`,
      a: `${season} makeup suits ${names([...lip.nude, ...lip.everyday])} lips, ${names(blush.shades)} blush, and ${names(eye.neutrals)} eyeshadow with ${names(eye.accents)} as accents.`,
    },
    {
      q: `What lipstick colors suit a ${season}?`,
      a: `Nude: ${names(lip.nude)}. Everyday: ${names(lip.everyday)}. Bold: ${names(lip.bold)}. ${lip.finish}`,
    },
    {
      q: `What blush color suits a ${season}?`,
      a: `${names(blush.shades).replace(/^./, (m) => m.toUpperCase())}. ${blush.finish}`,
    },
    {
      q: `What eyeshadow colors suit a ${season}?`,
      a: `Everyday neutrals: ${names(eye.neutrals)}. Accent colors: ${names(eye.accents)}. Best eyeliner: ${eye.liner.toLowerCase()}.`,
    },
    {
      q: `What makeup colors should a ${season} avoid?`,
      a: `Lipstick: ${lower(lip.avoid)} Blush: ${lower(blush.avoid)}`,
    },
  ];
}

export function withMakeupFaq(guide) {
  const m = guide.slug.match(/^(.+)-makeup-palette$/);
  if (!m || guide.body.some((b) => b.type === 'faq')) return guide;
  const slug = m[1];
  const season = slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
  const items = faqFor(season, slug);
  if (!items) return guide;
  const blocks = [
    { type: 'h2', text: `${season} makeup colours: quick answers` },
    { type: 'faq', items },
  ];
  const body = [...guide.body];
  const at = body.findIndex((b) => b.type === 'h2' && /^Not sure you are/i.test(b.text));
  body.splice(at >= 0 ? at : body.length, 0, ...blocks);
  return { ...guide, body };
}
