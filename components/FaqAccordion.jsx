'use client';

import { useState } from 'react';

// Modern FAQ accordion: white cards, round gradient "Q" badge, animated
// chevron, question turns purple when open. Each question is a heading
// wrapping a button (WAI-ARIA accordion pattern) so screen-reader users can
// jump question to question. Shared by /faq and the homepage FAQ preview.
export default function FaqAccordion({ items, idPrefix = 'faq', headingLevel = 'h3' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const Heading = headingLevel;

  return (
    <div className="faq-list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const trigId = `${idPrefix}-trig-${i}`;
        return (
          <div className={`faq-card${isOpen ? ' is-open' : ''}`} key={item.q}>
            <Heading className="faq-q">
              <button
                type="button"
                className="faq-trigger"
                id={trigId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="faq-badge" aria-hidden="true">
                  Q
                </span>
                <span className="faq-q-text">{item.q}</span>
                <svg
                  className="faq-chev"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Heading>
            <div
              className="faq-panel"
              id={panelId}
              role="region"
              aria-labelledby={trigId}
              aria-hidden={!isOpen}
            >
              <div className="faq-panel-clip">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
