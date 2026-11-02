import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';
import { GUIDES, getGuide } from '@/lib/guides-data';

// Share image for each guide (Pinterest, WhatsApp, Facebook, X) and the
// Article schema image: the guide's own palette swatches + its title.

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Color Analysis guide';

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  const title = guide?.title || siteConfig.name;
  const swatches = guide?.swatches?.length ? guide.swatches.slice(0, 6) : ['#7b2ff7', '#c026d3', '#f97316', '#22c55e'];
  const category = guide?.category || 'Guide';

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', background: '#ffffff' }}>
        <div style={{ display: 'flex', flexDirection: 'column', width: 300, height: '100%' }}>
          {swatches.map((c, i) => (
            <div key={`${c}-${i}`} style={{ flex: 1, background: c }} />
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
            padding: '60px 64px',
            background: 'linear-gradient(135deg, #faf5ff 0%, #ffffff 60%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              fontWeight: 700,
              color: '#7b2ff7',
              textTransform: 'uppercase',
              letterSpacing: 2,
              marginBottom: 22,
            }}
          >
            {category} · Color Analysis Guide
          </div>
          <div style={{ display: 'flex', fontSize: 60, fontWeight: 800, color: '#241536', lineHeight: 1.12, letterSpacing: -1 }}>
            {title}
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#5b4b70', marginTop: 34 }}>
            Free color analysis quiz · {new URL(siteConfig.url).host}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
