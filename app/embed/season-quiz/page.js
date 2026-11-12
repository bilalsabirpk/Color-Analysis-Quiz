import UndertoneCheck from '@/components/UndertoneCheck';
import EmbedFrame from '@/components/EmbedFrame';

// Embeddable "What season am I?" quiz, shown inside an iframe on other
// websites (see /embed-widget). Not indexed: the real page is /what-season-am-i.
export const metadata = {
  title: 'Color Season Quiz Widget',
  robots: { index: false, follow: true },
  alternates: { canonical: '/what-season-am-i' },
};

export default function EmbedSeasonQuiz() {
  return (
    <EmbedFrame widget="season-quiz">
      <UndertoneCheck
        id="season-quiz"
        heading="What's My Color Season?"
        sub="Six quick questions, no photo needed."
        className="embed-section"
        newTab
      />
    </EmbedFrame>
  );
}
