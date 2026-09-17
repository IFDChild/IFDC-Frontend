import React from 'react';

const INTEREST_EMAIL = 'info@ifdchild.org';

const INTEREST_MAILTO =
  `mailto:${INTEREST_EMAIL}` +
  '?subject=' + encodeURIComponent('Interest in the next IFDC Advocate Fellowship') +
  '&body=' + encodeURIComponent(
    'Hello IFDC team,\n\nI am interested in the next call for the Advocate Fellowship.\n\nName: \nOrganisation / Role: \nCountry: \n\nThank you.'
  );

/** Advocate page: "Interested in our next call for the Advocate Fellowship?" email prompt. */
export default function FellowshipInterest() {
  return (
    <section id="fellowship-interest" aria-labelledby="fellowship-interest-heading" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-sky-tint/60 scroll-mt-24">
      <div className="relative max-w-container-max mx-auto overflow-hidden rounded-[2rem] bg-deep-navy text-white px-6 py-10 md:px-14 md:py-14 shadow-xl">
        <span className="absolute -top-24 -right-20 w-72 h-72 rounded-full border-[36px] border-safety-yellow/10 pointer-events-none" aria-hidden="true"></span>
        <span className="absolute -bottom-32 -left-24 w-80 h-80 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true"></span>

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-yellow/15 border border-safety-yellow/40 text-safety-yellow text-label-md font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">school</span>
              Advocate Fellowship
            </span>
            <h2 id="fellowship-interest-heading" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mt-5 leading-tight">
              Interested in our next call for the <span className="text-safety-yellow">Advocate Fellowship?</span>
            </h2>
            <p className="mt-4 text-body-lg text-white/75 leading-relaxed max-w-2xl">
              Email us to register your interest and we&apos;ll let you know as soon as applications open for the next cohort of online child safety advocates.
            </p>
            <a href="#programmes" className="mt-6 inline-flex items-center gap-1.5 text-white/85 font-semibold hover:text-safety-yellow transition-colors">
              See our previous fellowship programmes
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_upward</span>
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-6 md:p-7">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-white/60">Email us at</p>
              <a href={`mailto:${INTEREST_EMAIL}`} className="mt-2 flex items-center gap-3 text-[1.35rem] md:text-[1.5rem] font-bold text-white hover:text-safety-yellow transition-colors break-all">
                <span className="material-symbols-outlined text-safety-yellow text-[28px] shrink-0" aria-hidden="true">mail</span>
                {INTEREST_EMAIL}
              </a>
              <a
                href={INTEREST_MAILTO}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-safety-yellow text-deep-navy px-6 py-3.5 rounded-full font-bold hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
              >
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
                Register my interest
              </a>
              <p className="mt-3 text-center text-caption text-white/55">Opens your email app with a ready-made message.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
