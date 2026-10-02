'use client';

import { useState } from 'react';

// "Share: Copy link" row. Uses the native share sheet on phones when
// available, otherwise copies the current URL to the clipboard.
export default function ShareLink({ title }) {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href;
    try {
      if (navigator.share && window.matchMedia('(pointer: coarse)').matches) {
        await navigator.share({ title, url });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user cancelled the share sheet or clipboard blocked: nothing to do */
    }
  }

  return (
    <div className="share-row">
      <span className="share-label">Share</span>
      <button type="button" className="share-btn" onClick={share}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
          <path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 00-5.66-5.66l-1 1" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
          <path d="M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 005.66 5.66l1-1" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        </svg>
        <span aria-live="polite">{copied ? 'Link copied!' : 'Copy link'}</span>
      </button>
    </div>
  );
}
