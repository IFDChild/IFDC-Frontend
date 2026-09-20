import React, { useState } from 'react';
import { submitDonationInterest } from '../lib/api';

const IMPACT = [
  {
    title: 'Building healthy digital lives',
    text: 'Digital literacy, online safety, critical thinking, and healthy technology habits for children, parents, and educators.',
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" strokeWidth="1.6" />
        <path d="M8 15C8 12.2 9.8 10 12 10C14.2 10 16 12.2 16 15" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.6 12.4C10.3 11.6 11.1 11.2 12 11.2C12.9 11.2 13.7 11.6 14.4 12.4" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="15" r="0.9" fill="#FFE100" stroke="none" />
      </>
    )
  },
  {
    title: 'Empowering young digital creators',
    text: 'Self-expression through storytelling, filmmaking, photography, podcasting, and other creative media.',
    icon: (
      <>
        <rect x="3.5" y="7" width="12" height="10" rx="1.8" strokeWidth="1.6" />
        <path d="M15.5 10.5L20 8V16L15.5 13.5" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="8" cy="12" r="2" strokeWidth="1.6" />
      </>
    )
  },
  {
    title: 'Research, advocacy & child rights',
    text: "Research and advocacy that strengthen child protection, influence policy, and amplify children's voices online.",
    icon: (
      <>
        <path d="M4 11V15H7L12.5 19V7L7 11H4Z" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M16 9.5C16.9 10.3 17.4 11.3 17.4 12.5C17.4 13.7 16.9 14.7 16 15.5" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M18.3 7.2C19.8 8.6 20.6 10.4 20.6 12.5C20.6 14.6 19.8 16.4 18.3 17.8" strokeWidth="1.6" strokeLinecap="round" />
      </>
    )
  },
  {
    title: 'Digital mental health & wellbeing',
    text: "Healthy relationships with technology, supporting children's and young people's digital resilience.",
    icon: (
      <>
        <path d="M12 19C12 19 4.5 14.6 4.5 9.4C4.5 6.9 6.5 5 8.8 5C10.2 5 11.4 5.7 12 6.9C12.6 5.7 13.8 5 15.2 5C17.5 5 19.5 6.9 19.5 9.4C19.5 14.6 12 19 12 19Z" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.5 11H10.3L11.4 9L12.8 13L13.7 11H15.5" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    )
  }
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Faint route motif from the design, as a background image.
const ROUTE_MOTIF = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'%3E%3Cpath d='M-20 650 C 150 600, 220 500, 180 400 S 60 220, 200 150 S 480 60, 560 -20' stroke='%230B3D6E' stroke-opacity='0.07' stroke-width='2' fill='none'/%3E%3C/svg%3E\")";

/** Home page "Support our work" - visitors leave their email to say they're willing to donate. */
export default function SupportOurWork() {
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState(''); // honeypot
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = email.trim();

    if (!EMAIL_PATTERN.test(value)) {
      setStatus('error');
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setError('');

    try {
      await submitDonationInterest({ email: value, website });
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(
        err instanceof TypeError
          ? 'We couldn’t reach the server. Please check your connection and try again.'
          : err.message
      );
    }
  };

  return (
    <section
      id="support-our-work"
      aria-labelledby="support-heading"
      className="relative overflow-hidden px-[6vw] py-12 md:py-16 mb-10 md:mb-14 border-y border-[#0B3D6E]/10"
      style={{
        background:
          'radial-gradient(ellipse 900px 500px at 85% -10%, rgba(255,225,0,0.16), transparent 60%), #E5EAF3'
      }}
    >
      <span
        className="absolute inset-0 pointer-events-none bg-no-repeat"
        style={{ backgroundImage: ROUTE_MOTIF, backgroundPosition: 'right -60px top -40px', backgroundSize: '640px' }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1160px] mx-auto grid grid-cols-1 min-[861px]:grid-cols-[1.05fr_0.95fr] gap-8 min-[861px]:gap-16 items-center">
        {/* Intro + sign-up */}
        <div className="motion-safe:animate-[support-rise_0.7s_cubic-bezier(.2,.7,.3,1)_both]">
          <svg className="w-9 h-9 mb-4" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M20 33C20 33 6 24.8 6 15.6C6 10.9 9.7 7.2 14.2 7.2C16.7 7.2 19 8.4 20 10.4C21 8.4 23.3 7.2 25.8 7.2C30.3 7.2 34 10.9 34 15.6C34 24.8 20 33 20 33Z" stroke="#0B3D6E" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>

          <h2 id="support-heading" className="font-headline-lg text-deep-navy text-[clamp(2.1rem,3.4vw,2.9rem)] leading-[1.12] tracking-[-0.01em] mb-3">
            Support our work
          </h2>
          <p className="text-[1.2rem] font-medium text-deep-navy mb-[0.9rem]">Your support changes lives.</p>
          <p className="text-[1.02rem] leading-[1.6] text-[#4B5C6B] max-w-[46ch] mb-6">
            Every donation funds the four programs behind our work — helping children build digital literacy, express themselves creatively, have their voices heard, and grow up with a healthy relationship to technology.
          </p>

          {status === 'success' ? (
            <div role="status" className="max-w-[460px] rounded-md border border-[#0B3D6E]/15 bg-white p-5 flex gap-4 shadow-sm">
              <span className="w-10 h-10 shrink-0 rounded-full bg-[#FFE100] text-[#072B47] flex items-center justify-center" aria-hidden="true">
                <span className="material-symbols-outlined text-[22px]">check</span>
              </span>
              <div>
                <p className="font-semibold text-deep-navy">Thank you for your generosity!</p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-[#4B5C6B]">
                  We’ve received your details. A member of our team will email <strong className="text-deep-navy break-all">{email.trim()}</strong> soon about how you can donate.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="max-w-[460px]">
              <label htmlFor="donor-email" className="block text-[0.95rem] font-medium text-deep-navy mb-2">
                Leave your email and we’ll be in touch
              </label>

              {/* Honeypot - hidden from people, filled by bots */}
              <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label htmlFor="donor-website">Website</label>
                <input id="donor-website" type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="donor-email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  aria-invalid={status === 'error'}
                  aria-describedby={status === 'error' ? 'donor-email-error' : 'donor-email-hint'}
                  className={`flex-1 min-w-0 rounded-[3px] bg-white border px-4 py-[0.95rem] text-deep-navy placeholder:text-[#8A98A6] outline-none transition-colors focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/15 ${
                    status === 'error' ? 'border-[#B3261E]' : 'border-[#0B3D6E]/20'
                  }`}
                />
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex items-center justify-center gap-2.5 rounded-[3px] bg-[#FFE100] px-6 py-[0.95rem] font-semibold text-[#072B47] whitespace-nowrap transition-[background,transform] duration-200 hover:bg-[#E6CB00] hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-deep-navy disabled:opacity-70 disabled:cursor-progress disabled:hover:translate-y-0"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin" aria-hidden="true">progress_activity</span>
                      Sending…
                    </>
                  ) : (
                    <>
                      I’m willing to donate
                      <svg className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-[3px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              {status === 'error' ? (
                <p id="donor-email-error" role="alert" className="mt-2.5 text-[0.9rem] text-[#B3261E] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">error</span>
                  {error}
                </p>
              ) : (
                <p id="donor-email-hint" className="mt-2.5 text-[0.85rem] text-[#5C6B7A]">
                  No payment now — our team will contact you personally with ways to give. We’ll only use your email for this.
                </p>
              )}
            </form>
          )}
        </div>

        {/* Impact list */}
        <ul className="relative list-none p-0 m-0">
          {IMPACT.map((item, index) => (
            <li
              key={item.title}
              className={`relative grid grid-cols-[44px_1fr] items-start gap-4 py-3.5 motion-safe:animate-[support-rise_0.6s_cubic-bezier(.2,.7,.3,1)_both] ${index > 0 ? 'border-t border-[#0B3D6E]/12' : ''}`}
              style={{ animationDelay: `${0.15 + index * 0.17}s` }}
            >
              {/* Connector from this icon's centre to the next icon's centre */}
              {index < IMPACT.length - 1 && (
                <span className="absolute left-[21px] top-[36px] h-full w-px bg-[#0B3D6E]/15 origin-top motion-safe:animate-[support-drawline_0.5s_ease_both]" style={{ animationDelay: `${0.4 + index * 0.2}s` }} aria-hidden="true" />
              )}
              <span className="relative z-10 w-11 h-11 rounded-full bg-deep-navy border border-[#FFE100]/60 flex items-center justify-center" aria-hidden="true">
                <svg className="w-5 h-5 stroke-[#FFE100]" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
              </span>
              <div>
                <h3 className="font-headline-md text-[1.08rem] leading-[1.3] text-deep-navy mt-0.5 mb-0.5">{item.title}</h3>
                <p className="text-[0.95rem] leading-[1.5] text-[#5C6B7A] m-0">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
