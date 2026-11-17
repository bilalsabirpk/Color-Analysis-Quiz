'use client';

import { useId, useState } from 'react';
import { shareLinks, shareUrl, trackShare } from '@/lib/share';

// "Share my result" for tool results. On phones it opens the native share
// sheet; elsewhere it shows WhatsApp / Facebook / X / Pinterest links and a
// copy button. Only the result text and a link to the site are shared:
// never the visitor's photo or answers.
export default function ShareResult({ text, campaign, label = 'Share my result' }) {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const url = shareUrl(campaign);

  async function onShare() {
    if (typeof navigator !== 'undefined' && navigator.share && window.matchMedia('(pointer: coarse)').matches) {
      try {
        await navigator.share({ text, url });
        trackShare('native', campaign);
      } catch {
        /* cancelled */
      }
      return;
    }
    setOpen((o) => !o);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setCopied(true);
      trackShare('copy', campaign);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <div className="share-result">
      <button
        type="button"
        className="btn btn-outline btn-sm share-result-btn"
        onClick={onShare}
        aria-expanded={open}
        aria-controls={`${uid}-panel`}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <circle cx="18" cy="5" r="2.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="6" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="18" cy="19" r="2.6" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.3 10.8l7.4-4.4M8.3 13.2l7.4 4.4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
        {label}
      </button>
      {open && (
        <ul id={`${uid}-panel`} className="share-panel" aria-label="Share on">
          {shareLinks(text, url).map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`share-chip share-${l.key}`}
                onClick={() => trackShare(l.key, campaign)}
              >
                {l.label}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
          <li>
            <button type="button" className="share-chip share-copy" onClick={copy}>
              <span aria-live="polite">{copied ? 'Copied!' : 'Copy link'}</span>
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
