import { adsenseClientId } from '@/lib/site-config';

// Only serves a real ads.txt once NEXT_PUBLIC_ADSENSE_CLIENT is set (see
// lib/site-config.js / README.md). Serving an ads.txt with a placeholder
// publisher ID before you actually have one can confuse AdSense's crawler,
// so until then this route intentionally 404s.
export async function GET() {
  if (!adsenseClientId) {
    return new Response('Not found', { status: 404 });
  }

  const body = `google.com, ${adsenseClientId}, DIRECT, f08c47fec0942fa0\n`;

  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
