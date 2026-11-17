import LipstickFinder from '@/components/LipstickFinder';
import EmbedFrame from '@/components/EmbedFrame';

// Embeddable lipstick shade finder, shown inside an iframe on other websites
// (see /embed-widget). Not indexed: the real page is /lipstick-color-finder.
export const metadata = {
  title: 'Lipstick Shade Finder Widget',
  robots: { index: false, follow: true },
  alternates: { canonical: '/lipstick-color-finder' },
};

export default function EmbedLipstickFinder() {
  return (
    <EmbedFrame widget="lipstick-finder">
      <LipstickFinder id="lipstick-finder" heading="What Lipstick Color Suits Me?" className="embed-section" newTab />
    </EmbedFrame>
  );
}
