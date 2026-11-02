import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';
import { getGuide, getCompareBlock, guidesWithCompareImage } from '@/lib/palette-image';

// Third Pinterest design (1000x1500): two seasons side by side, 6 colors each.

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return guidesWithCompareImage().map((g) => ({ file: `${g.slug}.png` }));
}

function textOn(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#241536' : '#ffffff';
}

export async function GET(_req, { params }) {
  const { file } = await params;
  const guide = getGuide(String(file).replace(/\.png$/, ''));
  const block = getCompareBlock(guide);
  if (!block) return new Response('Not found', { status: 404 });

  const host = new URL(siteConfig.url).host;
  const sides = block.sides.slice(0, 2);

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#ffffff', padding: '60px 56px 46px' }}>
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: '#7b2ff7', letterSpacing: 3, textTransform: 'uppercase' }}>
          Seasonal Color Analysis
        </div>
        <div style={{ display: 'flex', fontSize: 68, fontWeight: 800, color: '#241536', lineHeight: 1.05, marginTop: 14, letterSpacing: -1 }}>
          {sides[0].name} vs {sides[1].name}
        </div>
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 600, color: '#5b4b70', marginTop: 8 }}>{block.tagline}</div>
        <div style={{ display: 'flex', flex: 1, marginTop: 36 }}>
          {sides.map((s, i) => (
            <div key={s.name} style={{ display: 'flex', flexDirection: 'column', flex: 1, marginLeft: i ? 14 : 0, marginRight: i ? 0 : 14 }}>
              <div style={{ display: 'flex', fontSize: 34, fontWeight: 800, color: '#241536' }}>{s.name}</div>
              <div style={{ display: 'flex', fontSize: 24, color: '#5b4b70', marginBottom: 14 }}>{s.note}</div>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1, borderRadius: 22, overflow: 'hidden' }}>
                {s.colors.slice(0, 6).map((c) => (
                  <div
                    key={c.hex + c.name}
                    style={{ display: 'flex', flex: 1, background: c.hex, alignItems: 'flex-end', justifyContent: 'space-between', padding: '0 18px 12px', color: textOn(c.hex) }}
                  >
                    <div style={{ display: 'flex', fontSize: 26, fontWeight: 700 }}>{c.name}</div>
                    <div style={{ display: 'flex', fontSize: 20, opacity: 0.85 }}>{c.hex}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, fontSize: 28, color: '#5b4b70' }}>
          <div style={{ display: 'flex' }}>Free color analysis quiz</div>
          <div style={{ display: 'flex', fontWeight: 700, color: '#241536' }}>{host}</div>
        </div>
      </div>
    ),
    { width: 1000, height: 1500 }
  );
}
