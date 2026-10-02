import { ImageResponse } from 'next/og';
import { siteConfig } from '@/lib/site-config';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #7b2ff7 0%, #e114c9 100%)',
          padding: 80,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 14,
            marginBottom: 36,
          }}
        >
          {['#f97316', '#eab308', '#22c55e', '#06b6d4', '#7b2ff7', '#e114c9'].map((c) => (
            <div
              key={c}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: c,
              }}
            />
          ))}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            letterSpacing: -1,
          }}
        >
          What Is My Color Season?
        </div>
        <div
          style={{
            fontSize: 30,
            color: 'rgba(255,255,255,0.9)',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          Free color analysis quiz · 100% private, in your browser
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255,255,255,0.75)',
            marginTop: 44,
            fontWeight: 700,
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size }
  );
}
