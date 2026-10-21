import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';
import { getGuide, getPaletteBlock, guidesWithPaletteImage } from '@/lib/palette-image';

// Pinterest-friendly 2:3 palette chart (1000x1500) for each sub-season guide.
// Prerendered at build time, so it is a plain static PNG.

export const dynamic = 'force-static';
export const dynamicParams = false;

export function generateStaticParams() {
  return guidesWithPaletteImage().map((g) => ({ file: `${g.slug}.png` }));
}

// Dark text on light swatches, white text on dark swatches.
function textOn(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#241536' : '#ffffff';
}

export async function GET(_req, { params }) {
  const { file } = await params;
  const guide = getGuide(String(file).replace(/\.png$/, ''));
  const block = getPaletteBlock(guide);
  if (!block) return new Response('Not found', { status: 404 });

  const season = guide.title.split(' Color Palette')[0];
  const colors = block.colors.slice(0, 12);
  const host = new URL(siteConfig.url).host;

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', background: '#ffffff', padding: '64px 56px 48px' }}>
        <div style={{ display: 'flex', fontSize: 30, fontWeight: 700, color: '#7b2ff7', letterSpacing: 3, textTransform: 'uppercase' }}>
          Seasonal Color Analysis
        </div>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, color: '#241536', lineHeight: 1.05, marginTop: 14, letterSpacing: -1 }}>
          {season}
        </div>
        <div style={{ display: 'flex', fontSize: 48, fontWeight: 700, color: '#5b4b70', marginTop: 4 }}>Color Palette</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 44, marginLeft: -8, marginRight: -8, flex: 1 }}>
          {colors.map((c) => (
            <div key={c.hex + c.name} style={{ width: '33.333%', height: '25%', padding: 8, display: 'flex' }}>
              <div
                style={{
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', width: '100%', height: '100%',
                  background: c.hex, borderRadius: 22, padding: '18px 20px', color: textOn(c.hex),
                  border: '2px solid rgba(0,0,0,0.06)',
                }}
              >
                <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, lineHeight: 1.15 }}>{c.name}</div>
                <div style={{ display: 'flex', fontSize: 24, marginTop: 4, opacity: 0.85 }}>{c.hex.toUpperCase()}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 34, fontSize: 28, color: '#5b4b70' }}>
          <div style={{ display: 'flex' }}>Free color analysis quiz</div>
          <div style={{ display: 'flex', fontWeight: 700, color: '#241536' }}>{host}</div>
        </div>
      </div>
    ),
    { width: 1000, height: 1500 }
  );
}
