'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { TOOLS, TOOL_GROUPS } from '@/lib/tools';

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
  const [toolsOpen, setToolsOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);
  const toolsRef = useRef(null);
  const toolsBtnRef = useRef(null);

  function closeAll() {
    setOpen(false);
    setToolsOpen(false);
  }

  useEffect(() => {
    function onKeydown(e) {
      if (e.key !== 'Escape') return;
      if (toolsOpen) {
        setToolsOpen(false);
        toolsBtnRef.current?.focus();
      } else if (open) {
        setOpen(false);
        burgerRef.current?.focus();
      }
    }
    function onClickOutside(e) {
      if (toolsOpen && toolsRef.current && !toolsRef.current.contains(e.target)) {
        setToolsOpen(false);
      }
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
  }, [open, toolsOpen]);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link href="/" className="logo">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>
            Color Analysis
            <small>Free Color Season Analysis</small>
          </span>
        </Link>
        <nav
          className={`main-nav${open ? ' open' : ''}`}
          id="mainNav"
          aria-label="Primary"
          ref={navRef}
        >
          {NAV_LINKS.slice(0, 1).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeAll}>
              {link.label}
            </Link>
          ))}
          <div className={`nav-tools${toolsOpen ? ' is-open' : ''}`} ref={toolsRef}>
            <button
              type="button"
              className="nav-tools-btn"
              ref={toolsBtnRef}
              aria-expanded={toolsOpen}
              aria-controls="toolsMenu"
              onClick={() => setToolsOpen((v) => !v)}
            >
              Tools
              <svg viewBox="0 0 20 20" width="14" height="14" aria-hidden="true" focusable="false">
                <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="nav-tools-menu" id="toolsMenu" hidden={!toolsOpen}>
              {TOOL_GROUPS.map((g) => (
                <div key={g.key} className="nt-group">
                  <p className="nt-group-label" id={`nt-${g.key}`}>{g.label}</p>
                  <ul aria-labelledby={`nt-${g.key}`}>
                    {TOOLS.filter((t) => t.group === g.key).map((t) => (
                      <li key={t.href}>
                        <Link href={t.href} onClick={closeAll}>
                          <span className="nt-icon" aria-hidden="true">{t.icon}</span>
                          <span className="nt-text">
                            <strong>{t.title}</strong>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href="/tools" className="nt-all" onClick={closeAll}>
                See all {TOOLS.filter((t) => t.href !== '/embed-widget').length} free tools →
              </Link>
            </div>
          </div>
          {NAV_LINKS.slice(1).map((link) => (
            <Link key={link.href} href={link.href} onClick={closeAll}>
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
