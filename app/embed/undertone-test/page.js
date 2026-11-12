import UndertoneTest from '@/components/UndertoneTest';
import EmbedFrame from '@/components/EmbedFrame';

// Embeddable undertone test, shown inside an iframe on other websites
// (see /embed-widget). Not indexed: the real page is /undertone-test.
export const metadata = {
  title: 'Undertone Test Widget',
  robots: { index: false, follow: true },
  alternates: { canonical: '/undertone-test' },
};

export default function EmbedUndertoneTest() {
  return (
    <EmbedFrame widget="undertone-test">
      <UndertoneTest id="undertone-quiz" heading="Warm, Cool or Neutral Undertone?" className="embed-section" newTab />
    </EmbedFrame>
  );
}
