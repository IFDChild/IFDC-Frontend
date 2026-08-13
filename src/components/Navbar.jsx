import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/IDFC Logo.png'

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const linkClass = (route) =>
    path === route
      ? 'font-body-md text-primary border-b-2 border-primary pb-1'
      : 'font-body-md text-on-surface-variant hover:text-primary transition-colors';

  return (
    <header className="sticky top-0 w-full bg-surface-container-lowest shadow-sm z-50">
      <div className="flex justify-between items-center h-20 px-margin-desktop max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              alt="IDFC Logo"
              className="h-10 md:h-12 w-auto object-contain"
              src={Logo}

            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link className={linkClass('/')} to="/">Home</Link>
          <Link className={linkClass('/about')} to="/about">About</Link>
          <Link className={linkClass('/news')} to="/news">Blogs & News</Link>
          <Link className={linkClass('/resources')} to="/resources">Resources</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative group hidden md:block">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md flex items-center gap-2 transition-all active:scale-95">
              Join Us
              <span className="material-symbols-outlined text-[18px]">expand_more</span>
            </button>
            <div className="absolute right-0 mt-4 w-64 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 overflow-hidden">
              <ul className="py-2">
                <li>
                  <Link className="flex items-center px-6 py-4 hover:bg-safety-yellow hover:text-deep-navy transition-colors text-label-md group/item" to="/volunteer">
                    <span className="flex-1">Volunteer</span>
                    <span className="material-symbols-outlined text-[18px] opacity-0 group-hover/item:opacity-100 transition-opacity">chevron_right</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center px-6 py-4 hover:bg-safety-yellow hover:text-deep-navy transition-colors text-label-md group/item" to="/advocate">
                    <span className="flex-1">Advocate</span>
                    <span className="material-symbols-outlined text-[18px] opacity-0 group-hover/item:opacity-100 transition-opacity">chevron_right</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center px-6 py-4 hover:bg-safety-yellow hover:text-deep-navy transition-colors text-label-md group/item" to="/partner">
                    <span className="flex-1">Partner With Us</span>
                    <span className="material-symbols-outlined text-[18px] opacity-0 group-hover/item:opacity-100 transition-opacity">chevron_right</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined text-[32px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
