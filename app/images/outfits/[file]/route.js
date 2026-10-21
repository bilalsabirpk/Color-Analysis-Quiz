import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';
import { getGuide, getOutfitCombos, guidesWithPaletteImage } from '@/lib/palette-image';

// Second Pinterest design (1000x1500): the guide's outfit color pairings.

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return guidesWithPaletteImage()
    .filter((g) => getOutfitCombos(g).length >= 3)
    .map((g) => ({ file: `${g.slug}.png` }));
}

export async function GET(_req, { params }) {
  const { file } = await params;
  const guide = getGuide(String(file).replace(/\.png$/, ''));
  const combos = guide ? getOutfitCombos(guide).slice(0, 4) : [];
  if (combos.length < 3) return new Response('Not found', { status: 404 });

  const season = guide.title.split(' Color Palette')[0];
  const host = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#faf7f2', padding: '60px 56px 46px' }}>
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: '#7b2ff7', letterSpacing: 3, textTransform: 'uppercase' }}>
          {season}
        </div>
        <div style={{ display: 'flex', fontSize: 70, color: '#241536', lineHeight: 1.05, marginTop: 12, letterSpacing: -1 }}>
          Outfit Color Combinations
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginTop: 36 }}>
          {combos.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', flex: 1, marginBottom: i < combos.length - 1 ? 22 : 0 }}>
              <div style={{ display: 'flex', flex: 1, borderRadius: 22, overflow: 'hidden', border: '2px solid rgba(0,0,0,0.06)' }}>
                {c.colors.map((col, j) => (
                  <div key={j} style={{ display: 'flex', flex: j === 0 ? 1.4 : 1, background: col.hex }} />
                ))}
              </div>
              <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: '#241536', marginTop: 12 }}>
                {c.colors.map((x) => x.name).join(' + ')}
              </div>
              <div style={{ display: 'flex', fontSize: 23, color: '#5b4b70', marginTop: 2 }}>{c.tip}</div>
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
