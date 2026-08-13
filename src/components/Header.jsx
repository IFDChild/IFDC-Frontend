import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'News & Blog', path: '/news' },
  { label: 'Resources', path: '/resources' },
];

const JOIN_LINKS = [
  { label: 'Become a Volunteer', path: '/volunteer' },
  { label: 'Become a Child Advocate', path: '/advocate' },
  { label: 'Partner With Us', path: '/partner' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setJoinOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-md py-3'
          : 'bg-white/80 backdrop-blur-xl border-b border-[#E5EAF3] shadow-sm py-0'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-5 md:px-10 max-w-[1200px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            alt="IDFC Logo"
            className="h-10 md:h-12 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJXAGLtAMhUVZwy1Z_R-gPE49T4JAE1SS3b-fl4LWX0xDfQF4Vf5ZJwXpn9OskHSN8KspREcshezwdyk1sstvxpUMcy2g6U9UVT9OuWfRMjJChJtaM341jF-NXLXlUZb4NLOpJj8eNu2uXaqxJkQ_msr_wrwnVMEcSfamGAzIkggQBWhv6fSEuHw2dpRfG2g08UEGU1__Q4R0r8lMrOHLWfxiYvt14q8R_p1HNsfq0LGnYib3mJMuFlpashx5u8nzvBA"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold text-sm tracking-wide transition-colors ${
                location.pathname === link.path
                  ? 'text-[#0B3D6E] border-b-2 border-[#FFE100] pb-0.5'
                  : 'text-[#43474f] hover:text-[#0B3D6E]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setJoinOpen(!joinOpen)}
              className="bg-[#0B3D6E] text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide flex items-center gap-1.5 hover:bg-opacity-90 transition-all"
            >
              Join Us
              <span className="material-symbols-outlined text-base">expand_more</span>
            </button>
            {joinOpen && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-[#E5EAF3] overflow-hidden w-52 z-50">
                {JOIN_LINKS.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className="block px-5 py-3 text-sm text-[#1a1c1c] hover:bg-[#E5EAF3] hover:text-[#0B3D6E] transition-colors font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/contact"
            className="bg-[#FFE100] text-[#0B3D6E] px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:brightness-105 transition-all shadow-sm"
          >
            Donate
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#0B3D6E] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5EAF3] shadow-lg">
          <div className="px-5 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 font-semibold text-sm tracking-wide border-b border-[#E5EAF3] ${
                  location.pathname === link.path ? 'text-[#0B3D6E]' : 'text-[#43474f]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {JOIN_LINKS.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="block py-3 font-semibold text-sm tracking-wide border-b border-[#E5EAF3] text-[#43474f]"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 flex gap-3">
              <Link
                to="/contact"
                className="flex-1 text-center bg-[#0B3D6E] text-white py-2.5 rounded-full text-sm font-semibold"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
