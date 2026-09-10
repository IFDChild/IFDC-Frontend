import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/IDFC Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faTiktok,
  faInstagram,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';

const SOCIAL_LINKS = [
  { label: 'Facebook', icon: faFacebookF, href: 'https://www.facebook.com/people/IFDC/100094071740393/' },
  { label: 'X', icon: faXTwitter, href: 'https://x.com/IFDchild' },
  { label: 'LinkedIn', icon: faLinkedinIn, href: 'https://www.linkedin.com/company/international-foundation-for-digital-child' },
  { label: 'TikTok', icon: faTiktok, href: 'https://www.tiktok.com/@ifdc_lk' },
  { label: 'Instagram', icon: faInstagram, href: 'https://www.instagram.com/ifdchild/' }
];

const ORGANIZATION_LINKS = [
  { label: 'Annual Report', path: '/annual-report' },
  { label: 'Strategic Plan', path: '/strategic-plan' },
  { label: 'Policies & Governance', path: '/policies' },
  // { label: 'Our Impact Stories', path: '/impact' }
];

const RESOURCE_LINKS = [
  { label: 'Resource Center', path: '/resources' },
  { label: 'Partner With Us', path: '/partner' },
  { label: 'Become a Volunteer', path: '/volunteer' },
  { label: 'News & Blog', path: '/news' }
];

const linkClass = 'text-white/70 hover:text-safety-yellow transition-colors font-body-md text-body-md';

const headingClass = 'text-safety-yellow text-xs font-semibold uppercase tracking-widest mb-5';

export default function Footer() {
  return (
    <footer className="relative bg-deep-navy text-white overflow-hidden">
      {/* Accent rule + ambient glow */}
      <div className="h-1 w-full bg-gradient-to-r from-safety-yellow via-safety-yellow/40 to-transparent"></div>
      <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-10">

        {/* Call to action */}
        <div className="py-10 md:py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-white">Ready to make a difference?</h2>
            <p className="font-body-md text-body-md text-white/70 mt-1">
              Join the people helping children stay safe online.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/volunteer"
              className="inline-flex items-center justify-center gap-2 bg-safety-yellow text-deep-navy font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 shadow-lg"
            >
              Become a Volunteer
            </Link>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-200 active:scale-95"
            >
              Partner With Us
            </Link>
          </div>
        </div>

        {/* Main columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-14">

          {/* Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-flex bg-white rounded-xl px-4 py-3 shadow-sm">
              <img alt="IFDC Logo" className="h-9 w-auto object-contain" src={Logo} />
            </div>
            <p className="text-white/70 font-body-md text-body-md leading-6 max-w-sm">
              Protecting and empowering children in the digital landscape through education, advocacy, and innovation.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map(({ label, icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`IFDC on ${label}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-safety-yellow hover:text-deep-navy hover:border-safety-yellow transition-all duration-200"
                >
                  <FontAwesomeIcon icon={icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div className="lg:col-span-2">
            <h4 className={headingClass}>Organization</h4>
            <ul className="space-y-3">
              {ORGANIZATION_LINKS.map((item) => (
                <li key={item.path}>
                  <Link className={linkClass} to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2">
            <h4 className={headingClass}>Resources</h4>
            <ul className="space-y-3">
              {RESOURCE_LINKS.map((item) => (
                <li key={item.path}>
                  <Link className={linkClass} to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-4">
            <h4 className={headingClass}>Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-safety-yellow text-xl mt-0.5">mail</span>
                <a className={linkClass} href="mailto:info@ifdchild.org">info@ifdchild.org</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-safety-yellow text-xl mt-0.5">call</span>
                <a className={linkClass} href="tel:+94773667530">+94 77 366 7530</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-safety-yellow text-xl mt-0.5">location_on</span>
                <span className="text-white/70 font-body-md text-body-md">
                  110/24, Ranaviru Prabath Cooray Mawatha, Nawala, Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-caption text-caption text-white/50 text-center md:text-left">
            © 2026 International Digital Foundation for Children (IFDC). All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link className="font-caption text-caption text-white/50 hover:text-safety-yellow transition-colors" to="/policies">Privacy Policy</Link>
            <Link className="font-caption text-caption text-white/50 hover:text-safety-yellow transition-colors" to="/policies">Terms of Service</Link>
            <Link className="font-caption text-caption text-white/50 hover:text-safety-yellow transition-colors" to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
