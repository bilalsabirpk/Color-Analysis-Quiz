'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/site-config';

// Wraps an embedded widget: tells the host page how tall the content is
// (so the iframe can resize without scrollbars) and shows a small
// attribution link. Used only by the /embed/... routes.
export default function EmbedFrame({ widget, children }) {
  useEffect(() => {
    if (window.parent === window) return;
    const send = () =>
      window.parent.postMessage(
        { type: 'caq-embed-height', widget, height: Math.ceil(document.documentElement.scrollHeight) },
        '*'
      );
    send();
    const ro = new ResizeObserver(send);
    ro.observe(document.body);
    return () => ro.disconnect();
  }, [widget]);

  return (
    <main id="main" className="embed-main">
      {children}
      <p className="embed-credit">
        Free tool by{' '}
        <a href={`${siteConfig.url}/?utm_source=embed&utm_medium=widget&utm_campaign=${widget}`} target="_blank" rel="noopener">
          {siteConfig.name}
        </a>
      </p>
    </main>
  );
}
