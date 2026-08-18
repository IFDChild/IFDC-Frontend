import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/IDFC Logo.png'

export default function Footer() {
  return (
    <footer className="bg-yellow-100 border-t border-[#c3c6d0] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <img
              alt="IDFC Logo"
              className="h-12 w-auto object-contain opacity-100"
              src={Logo}
            />
            <p className="text-[#43474f] text-base leading-6">
              Protecting and empowering children in the digital landscape through education, advocacy, and innovation.
            </p>
            <div className="flex gap-3">
              {['language', 'public', 'chat'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#e2e2e2] flex items-center justify-center hover:bg-[#00274c] hover:text-white transition-all text-[#43474f]"
                >
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <h4 className="text-[#00274c] text-xs font-semibold uppercase tracking-widest mb-6">Organization</h4>
            <ul className="space-y-4">
              {[
                { label: 'Annual Report', path: '/annual-report' },
                { label: 'Strategic Plan', path: '/strategic-plan' },
                { label: 'Policies & Governance', path: '/policies' },
                { label: 'Our Impact Stories', path: '/impact' },
              ].map((l) => (
                <li key={l.path}>
                  <Link className="text-[#43474f] hover:text-[#00274c] transition-colors text-base" to={l.path}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#00274c] text-xs font-semibold uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                { label: 'Resource Center', path: '/resources' },
                { label: 'Partner With Us', path: '/partner' },
                { label: 'Become a Volunteer', path: '/volunteer' },
                { label: 'News & Blog', path: '/news' },
              ].map((l) => (
                <li key={l.path}>
                  <Link className="text-[#43474f] hover:text-[#00274c] transition-colors text-base" to={l.path}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support / Contact */}
          <div>
            <h4 className="text-[#00274c] text-xs font-semibold uppercase tracking-widest mb-6">Support</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#00274c] text-xl mt-0.5">mail</span>
                <span className="text-[#43474f]"> info@ifdchild.org</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#00274c] text-xl mt-0.5">call</span>
                <span className="text-[#43474f]">+94 773667530</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#00274c] text-xl mt-0.5">location_on</span>
                <span className="text-[#43474f]">110/24, Ranaviru Prabath Cooray Mawatha, Nawala, Sri Lanka </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#c3c6d0] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-[#43474f]">
            © 2026 International Digital Foundation for Children (IDFC). All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link className="text-xs text-[#43474f] hover:underline" to="/policies">Privacy Policy</Link>
            <Link className="text-xs text-[#43474f] hover:underline" to="/policies">Terms of Service</Link>
            <Link className="text-xs text-[#43474f] hover:underline" to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
