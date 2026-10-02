'use client';

import Script from 'next/script';

// Loads public/quiz-logic.js and (re)runs its init function via onReady.
// onReady fires after the very first load AND after every later remount of
// this component — which is what happens when the user client-side
// navigates away from "/" and back again (Next.js's <Script> only loads a
// given src once per app lifetime, but the homepage's DOM gets torn down
// and rebuilt fresh on each visit). Without this, event listeners from the
// first mount would be attached to DOM nodes that no longer exist, and
// clicking the (new) upload button/dropzone would silently do nothing.
export default function QuizScriptLoader() {
  return (
    <Script
      src="/quiz-logic.js"
      strategy="afterInteractive"
      onReady={() => {
        if (typeof window !== 'undefined' && typeof window.initColorQuizApp === 'function') {
          window.initColorQuizApp();
        }
      }}
    />
  );
}
