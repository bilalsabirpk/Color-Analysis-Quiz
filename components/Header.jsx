'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

// Primary nav — mirrors the classic Home / Blog / About / Contact pattern.
// The quiz sections (#quiz, #seasons, #harmony, #undertone-test) only exist on
// the homepage, so anchor links are rooted at "/" and work correctly from
// any page (navigates home, then jumps to the section). Blog/About/Contact/
// FAQ are real standalone pages, not homepage anchors. Seasons/Harmony stay
// reachable by scrolling the homepage itself (and from the in-page stepper)
// rather than crowding the top bar.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#season-types', label: 'Seasons' },
  { href: '/guides', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    function onKeydown(e) {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        burgerRef.current?.focus();
      }
    }
    function onClickOutside(e) {
      if (
        open &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !burgerRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('keydown', onKeydown);
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeydown);
      document.removeEventListener('click', onClickOutside);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>
            Color Analysis
            <small>AI-Powered Color Analysis</small>
          </span>
        </Link>
        <nav
          className={`main-nav${open ? ' open' : ''}`}
          id="mainNav"
          aria-label="Primary"
          ref={navRef}
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <Link href="/#quiz" className="btn btn-primary btn-sm">
            Start Free Quiz
          </Link>
          <button
            className="hamburger"
            id="hamburgerBtn"
            ref={burgerRef}
            aria-expanded={open}
            aria-controls="mainNav"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
