import SeasonShadeFinder from '@/components/SeasonShadeFinder';
import EmbedFrame from '@/components/EmbedFrame';

// Embeddable hijab color finder, shown inside an iframe on other websites
// (see /embed-widget). Not indexed: the real page is /hijab-color-finder.
export const metadata = {
  title: 'Hijab Color Finder Widget',
  robots: { index: false, follow: true },
  alternates: { canonical: '/hijab-color-finder' },
};

export default function EmbedHijabFinder() {
  return (
    <EmbedFrame widget="hijab-finder">
      <SeasonShadeFinder kind="hijab" id="hijab-finder" heading="What Hijab Color Suits Me?" className="embed-section" newTab />
    </EmbedFrame>
  );
}
