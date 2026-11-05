'use client';

import { usePathname } from 'next/navigation';

// Embeddable widgets (/embed/...) run inside an iframe on other websites,
// so they must not show the site header/footer or load ads and analytics.
// Wrap any site "chrome" in this to drop it on embed routes.
export default function HideOnEmbed({ children }) {
  const pathname = usePathname() || '';
  if (pathname.startsWith('/embed/')) return null;
  return children;
}
