'use client';

import { useEffect, useId, useState } from 'react';
import Link from 'next/link';

// "Was this tool useful?" 1–5 star rating. The rating is sent to Google
// Analytics as a `tool_rating` event (only if GA is configured) so we can
// see which tools work. Nothing is shown publicly and no AggregateRating
// schema is added, because there is no stored, verifiable average.

const LABELS = ['Not useful', 'Slightly useful', 'Useful', 'Very useful', 'Extremely useful'];

export default function RatingBox({ tool, className = '' }) {
  const uid = useId();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const key = `caq-rated:${tool}`;

  // Remember a rating for this browser session, so a refresh does not ask again.
  useEffect(() => {
    try {
      const saved = Number(sessionStorage.getItem(key));
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restoring from storage after hydration
      if (saved >= 1 && saved <= 5) setRating(saved);
    } catch {
      /* storage blocked: ask again */
    }
  }, [key]);

  function rate(n) {
    setRating(n);
    try {
      sessionStorage.setItem(key, String(n));
    } catch {
      /* ignore */
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'tool_rating', { tool_path: tool, rating: n });
    }
  }

  const shown = hover || rating;

  return (
    <div className={`rating-box ${className}`}>
      {rating ? (
        <p className="rating-thanks" role="status">
          <span aria-hidden="true">💜</span> Thanks for rating this tool {rating} out of 5.
          {rating <= 3 && (
            <>
              {' '}
              <Link href="/contact">Tell us what would make it better</Link>.
            </>
          )}
        </p>
      ) : (
        <div className="rating-field">
          <p className="rating-q" id={`${uid}-l`}>How useful was this tool?</p>
          <div className="rating-stars" role="group" aria-labelledby={`${uid}-l`} onMouseLeave={() => setHover(0)}>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                className={n <= shown ? 'is-on' : ''}
                onMouseEnter={() => setHover(n)}
                onFocus={() => setHover(n)}
                onBlur={() => setHover(0)}
                onClick={() => rate(n)}
                aria-label={`Rate ${n} out of 5: ${LABELS[n - 1]}`}
              >
                <span aria-hidden="true">★</span>
              </button>
            ))}
          </div>
          <span className="rating-hint" aria-hidden="true">
            {shown ? LABELS[shown - 1] : 'Tap a star'}
          </span>
        </div>
      )}
    </div>
  );
}
