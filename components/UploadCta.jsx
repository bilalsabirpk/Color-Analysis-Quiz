'use client';

import Link from 'next/link';

// Bottom-of-homepage call to action (replaces the old demo newsletter).
// The button opens the quiz's own file picker (#fileInput in
// lib/quiz-markup.js) directly, so the existing quiz-logic.js change handler
// processes the photo exactly like the in-quiz "Upload Image" button, and
// scrolls the quiz into view so the next step is visible straight away.
export default function UploadCta() {
  function openUpload() {
    const quiz = document.getElementById('quiz');
    const input = document.getElementById('fileInput');
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    quiz?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    if (input) {
      // Must be called synchronously inside the click for the browser to
      // allow opening the file dialog.
      input.click();
    } else {
      window.location.hash = 'quiz';
    }
  }

  return (
    <section className="upload-cta-section" aria-labelledby="uploadCtaHeading">
      <div className="container">
        <div className="upload-cta">
          <div className="upload-cta-text">
            <h2 id="uploadCtaHeading">Not sure which color season you are?</h2>
            <p>
              Take the free color analysis quiz and find out in seconds. Your photo never leaves your device.
            </p>
          </div>
          <div className="upload-cta-actions">
            <button type="button" className="btn btn-primary" onClick={openUpload}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 8.5A2.5 2.5 0 016.5 6h1.6l1.2-1.8A1.5 1.5 0 0110.55 3.5h2.9a1.5 1.5 0 011.25.7L15.9 6h1.6A2.5 2.5 0 0120 8.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 014 16.5v-8z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.8" />
              </svg>
              Upload photo
            </button>
            <Link href="/#undertone-test" className="upload-cta-alt">
              No photo? Take the quick check
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
