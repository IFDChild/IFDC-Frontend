import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/IDFC Logo.png';

const MAIN_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/advocate', label: 'Advocate Programmes', short: 'Advocate' },
  { to: '/news', label: 'Blogs & News' },
  { to: '/resources', label: 'Resources' }
];

const JOIN_LINKS = [
  { to: '/volunteer', label: 'Volunteer', icon: 'volunteer_activism' },
  { to: '/partner', label: 'Partner With Us', icon: 'handshake' }
];

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  // Escape closes the menu; the page behind does not scroll while it is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const isActive = (route) => (route === '/' ? path === '/' : path === route || path.startsWith(`${route}/`));

  const linkClass = (route) =>
    isActive(route)
      ? 'font-sans font-bold text-primary border-b-2 border-primary pb-1'
      : 'font-sans font-bold text-on-surface-variant hover:text-primary transition-colors';

  return (
    <header className="sticky top-0 w-full bg-surface-container-lowest shadow-sm z-50">
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              alt="IDFC Logo"
              className="h-10 md:h-12 w-auto object-contain"
              src={Logo}
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 font-['Poppins']" aria-label="Main">
          {MAIN_LINKS.map((link) => (
            <Link key={link.to} className={`${linkClass(link.to)} whitespace-nowrap`} to={link.to}>
              {link.short ? (
                <>
                  {/* Full label from lg up; shortened on tablet so the bar does not wrap */}
                  <span className="lg:hidden">{link.short}</span>
                  <span className="hidden lg:inline">{link.label}</span>
                </>
              ) : (
                link.label
              )}
            </Link>
          ))}
        </nav>

        {/* Join Us */}
        <div className="flex items-center gap-4">

          <div className="relative group hidden md:block">

            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-sans font-bold flex items-center gap-2 transition-all active:scale-95">
              Join Us

              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>

            <div className="absolute right-0 mt-4 w-64 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <ul className="py-2">
                {JOIN_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      className="flex items-center px-6 py-4 hover:bg-safety-yellow hover:text-deep-navy transition-colors font-sans font-semibold"
                      to={link.to}
                    >
                      <span className="flex-1">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden w-11 h-11 -mr-2 rounded-full flex items-center justify-center text-primary hover:bg-sky-tint transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 30 }}>
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>

        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="md:hidden fixed inset-0 top-20 bg-deep-navy/40 backdrop-blur-[2px] z-40 cursor-default"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile"
            className="md:hidden absolute left-0 right-0 top-20 z-50 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-surface-container-lowest border-t border-outline-variant/40 shadow-xl"
          >
            <ul className="px-margin-mobile py-3">
              {MAIN_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    aria-current={isActive(link.to) ? 'page' : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-[1.05rem] font-sans font-bold transition-colors ${
                      isActive(link.to) ? 'bg-sky-tint text-primary' : 'text-deep-navy hover:bg-surface-container-low'
                    }`}
                  >
                    {link.label}
                    <span className="material-symbols-outlined text-outline" style={{ fontSize: 20 }} aria-hidden="true">chevron_right</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="px-margin-mobile pb-6">
              <p className="px-4 pt-2 pb-3 text-[12px] font-bold uppercase tracking-widest text-on-surface-variant border-t border-outline-variant/40">
                Join Us
              </p>
              <div className="grid grid-cols-2 gap-3">
                {JOIN_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex flex-col items-start gap-2 rounded-2xl p-4 font-sans font-bold transition-colors ${
                      isActive(link.to) ? 'bg-safety-yellow text-deep-navy' : 'bg-deep-navy text-white hover:bg-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 26 }} aria-hidden="true">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/contact"
                className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-deep-navy px-4 py-3 font-sans font-bold text-deep-navy hover:bg-deep-navy hover:text-white transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden="true">mail</span>
                Contact Us
              </Link>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
