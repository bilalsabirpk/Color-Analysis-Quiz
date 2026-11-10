// Share links for tool results. The link always points to the homepage
// quiz (canonical "/"), tagged with UTM parameters so Google Analytics can
// show how many visits came from shared results.

const SITE = 'https://coloranalyzerquiz.com';

export function shareUrl(campaign) {
  return `${SITE}/?utm_source=share&utm_medium=social&utm_campaign=${encodeURIComponent(campaign || 'result')}`;
}

export function shareLinks(text, url) {
  const t = encodeURIComponent(text);
  const u = encodeURIComponent(url);
  return [
    { key: 'whatsapp', label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}` },
    { key: 'facebook', label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { key: 'x', label: 'X', href: `https://twitter.com/intent/tweet?text=${t}&url=${u}` },
    {
      key: 'pinterest',
      label: 'Pinterest',
      href: `https://www.pinterest.com/pin/create/button/?url=${u}&media=${encodeURIComponent(`${SITE}/opengraph-image`)}&description=${t}`,
    },
  ];
}

export function trackShare(method, campaign) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'share', { method, content_type: 'result', item_id: campaign || 'result' });
  }
}
