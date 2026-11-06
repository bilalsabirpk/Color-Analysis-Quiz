'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { siteConfig } from '@/lib/site-config';

// Lets a site owner pick a widget, preview it live and copy the embed code.
// The code is a plain iframe + a visible credit link + a tiny optional
// script that resizes the iframe to its content (via postMessage).

export const WIDGETS = [
  {
    id: 'season-quiz',
    label: 'Color Season Quiz',
    title: 'Color season quiz',
    height: 980,
    creditHref: '/what-season-am-i',
    creditText: 'color season quiz',
  },
  {
    id: 'undertone-test',
    label: 'Undertone Test',
    title: 'Skin undertone test',
    height: 980,
    creditHref: '/undertone-test',
    creditText: 'skin undertone test',
  },
  {
    id: 'lipstick-finder',
    label: 'Lipstick Shade Finder',
    title: 'Lipstick shade finder',
    height: 1100,
    creditHref: '/lipstick-color-finder',
    creditText: 'lipstick shade finder',
  },
];

export function embedCode(w) {
  const base = siteConfig.url;
  return [
    `<iframe src="${base}/embed/${w.id}" title="${w.title}" width="100%" height="${w.height}" style="border:0;max-width:980px;display:block;margin:0 auto;" loading="lazy"></iframe>`,
    `<p style="text-align:center;font-size:13px;">Free <a href="${base}${w.creditHref}">${w.creditText}</a> by <a href="${base}/">${siteConfig.name}</a></p>`,
    `<script>window.addEventListener("message",function(e){if(e.origin!=="${base}"||!e.data||e.data.type!=="caq-embed-height")return;var f=document.querySelectorAll('iframe[src^="${base}/embed/'+e.data.widget+'"]');for(var i=0;i<f.length;i++){f[i].style.height=e.data.height+"px";}});</script>`,
  ].join('\n');
}

export default function EmbedCodeBox() {
  const uid = useId();
  const [active, setActive] = useState(WIDGETS[0].id);
  const [copied, setCopied] = useState(false);
  const [heights, setHeights] = useState({});
  const areaRef = useRef(null);
  const w = WIDGETS.find((x) => x.id === active);
  const code = embedCode(w);
  const height = heights[active] ?? w.height;

  useEffect(() => {
    function onMsg(e) {
      if (e.origin !== window.location.origin || e.data?.type !== 'caq-embed-height') return;
      setHeights((h) => ({ ...h, [e.data.widget]: e.data.height }));
    }
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      areaRef.current?.select();
      document.execCommand?.('copy');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="embed-box">
      <div className="embed-tabs" role="radiogroup" aria-label="Choose a widget">
        {WIDGETS.map((x) => (
          <button
            key={x.id}
            type="button"
            role="radio"
            aria-checked={active === x.id}
            className={`embed-tab${active === x.id ? ' is-active' : ''}`}
            onClick={() => setActive(x.id)}
          >
            {x.label}
          </button>
        ))}
      </div>

      <label htmlFor={`${uid}-code`} className="embed-code-label">Embed code</label>
      <textarea
        id={`${uid}-code`}
        ref={areaRef}
        className="embed-code"
        readOnly
        value={code}
        rows={6}
        onFocus={(e) => e.target.select()}
      />
      <div className="embed-actions">
        <button type="button" className="btn btn-primary btn-sm" onClick={copy}>
          {copied ? 'Copied ✓' : 'Copy embed code'}
        </button>
        <span className="visually-hidden" aria-live="polite">{copied ? 'Embed code copied' : ''}</span>
      </div>

      <p className="embed-preview-label">Live preview</p>
      <div className="embed-preview">
        <iframe
          key={active}
          src={`/embed/${active}`}
          title={`${w.label} preview`}
          style={{ height }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
