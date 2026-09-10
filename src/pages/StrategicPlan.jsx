import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Categorical accents grouping the priorities, carried over from the source plan.
const ACCENT = {
  teal: '#2F6F62',
  ochre: '#A9741F',
  plum: '#5B4B8A',
  berry: '#9C3F5E',
  slate: '#4B5A63'
};

const BASELINE_STATS = [
  { num: '9', cap: 'Programmes delivered' },
  { num: '4', cap: 'Strategic pillars' },
  { num: '471+', cap: 'Confirmed direct participants' },
  { num: '25', cap: 'Schools reached (flagship)' },
  { num: '6', cap: 'Partner & government bodies' }
];

const PRIORITIES = [
  {
    num: '01',
    accent: ACCENT.berry,
    title: 'Digital wellbeing & community support',
    desc: 'Build a community-based support network helping children, young people, and families develop healthier relationships with technology.',
    target: '5,000+ children & young people reached · support network established'
  },
  {
    num: '02',
    accent: ACCENT.teal,
    title: 'Online child safety & prevention of OCSEA',
    desc: 'Strengthen capacity to prevent, identify, and respond to online child sexual exploitation and abuse.',
    target: '100+ programmes · national safety education programme'
  },
  {
    num: '03',
    accent: ACCENT.teal,
    title: 'Artificial intelligence & the future of child safety',
    desc: 'Respond proactively to emerging risks and opportunities created by AI and other fast-moving technologies.',
    target: '50+ schools reached · AI working group by 2027'
  },
  {
    num: '04',
    accent: ACCENT.plum,
    title: 'Research, knowledge & evidence',
    desc: "Build IFDC's capacity as a research-informed organisation and contribute evidence to policy and practice.",
    target: 'research group & 3-year research agenda established'
  },
  {
    num: '05',
    accent: ACCENT.berry,
    title: 'Digital solutions for children & families',
    desc: 'Develop practical, child-friendly digital tools for prevention, self-assessment, and access to help.',
    target: 'self-assessment & referral tools developed / piloted'
  },
  {
    num: '06',
    accent: ACCENT.plum,
    title: 'International advisory network & capacity',
    desc: 'Strengthen technical capacity through a network of national and international experts and mentors.',
    target: 'advisory board established · annual fellowship programme'
  },
  {
    num: '07',
    accent: ACCENT.berry,
    title: 'New programmes on emerging digital & relationship risks',
    desc: "Address sexuality education, healthy relationships, digital consent, and online pornography's impact.",
    target: 'evidence-informed programmes with specialist partners'
  },
  {
    num: '08',
    accent: ACCENT.ochre,
    title: 'University, technology & innovation partnerships',
    desc: 'Build a national innovation ecosystem connecting child protection expertise with technology talent.',
    target: 'partnerships expanded — SLIIT, UoM, NIBM, NSBM & more'
  },
  {
    num: '09',
    accent: ACCENT.plum,
    title: 'National & international partnerships',
    desc: "Grow a partnership ecosystem that increases IFDC's reach, credibility, and long-term sustainability.",
    target: 'stable national & international partner network'
  },
  {
    num: '10',
    accent: ACCENT.slate,
    title: 'Organisational development & sustainability',
    desc: 'Transform IFDC into a well-structured, transparent organisation able to deliver long-term programmes.',
    target: 'sustainability & MEL systems fully operational by 2029'
  }
];

const ROADMAP = [
  {
    year: '2027 — Build',
    accent: ACCENT.teal,
    body: 'Foundation & system building — working groups, research agenda, university partnerships.'
  },
  {
    year: '2028 — Expand',
    accent: ACCENT.plum,
    body: 'Programme expansion — advocate cadre, digital tools, international partnerships.'
  },
  {
    year: '2029 — Sustain & scale',
    accent: ACCENT.ochre,
    body: 'Consolidation — targets met, impact evaluated, next plan developed.'
  }
];

const HEADLINE_TARGETS = [
  { num: '5,000+', cap: 'Children reached through digital wellbeing programmes' },
  { num: '100+', cap: 'Online child safety programmes delivered' },
  { num: '50+', cap: 'Schools reached through AI & child online safety education' },
  { num: '10', cap: 'Strategic priorities driving the 2027–2029 plan' }
];

export default function StrategicPlan() {
  return (
    <>
      <Navbar />

      <main>

        {/* Header */}
        <section className="relative bg-deep-navy text-white overflow-hidden px-margin-mobile md:px-margin-desktop py-stack-lg">
          <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto">
            <p className="font-label-md text-label-md text-white/60 uppercase tracking-widest mb-6">
              IFDC — International Foundation for Digital Child
            </p>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white leading-tight max-w-4xl">
              Strategic Plan <span className="text-safety-yellow">2027–2029</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/70 mt-5 max-w-2xl">
              Strategic priorities and targets — an overview of where we stand and where we're headed.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#priorities"
                className="inline-flex items-center gap-2 bg-safety-yellow text-deep-navy font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 shadow-lg"
              >
                Ten priorities
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-200 active:scale-95"
              >
                Three-year roadmap
              </a>
            </div>
          </div>
        </section>

        {/* Baseline */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
          <div className="max-w-container-max mx-auto">
            <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-6">
              Where we stand — 2025/26 baseline
            </p>
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-outline-variant/40">
              {BASELINE_STATS.map((stat) => (
                <div key={stat.cap} className="border-r border-b border-outline-variant/40 px-4 py-7 text-center">
                  <dt className="font-display-lg text-headline-md text-deep-navy">{stat.num}</dt>
                  <dd className="font-caption text-caption text-on-surface-variant mt-2 leading-snug">{stat.cap}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Priorities */}
        <section id="priorities" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface-container-low scroll-mt-24">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy">Ten strategic priorities, 2027–2029</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-3 max-w-3xl">
              Each priority sits under one of our four programme pillars — DigitalWise, Kidsression, Voice4Kids, and TechCare — plus one cross-cutting priority for organisational strength.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-stack-md">
              {PRIORITIES.map((item) => (
                <article
                  key={item.num}
                  className="bg-white rounded-2xl border border-outline-variant/30 p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  style={{ borderTopWidth: '4px', borderTopColor: item.accent }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display-lg text-headline-md shrink-0" style={{ color: item.accent }}>
                      {item.num}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-deep-navy leading-snug">{item.title}</h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{item.desc}</p>
                  <p className="mt-5 pt-4 border-t border-outline-variant/40 font-caption text-caption" style={{ color: item.accent }}>
                    <b className="font-semibold">2029 target —</b> {item.target}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section id="roadmap" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface scroll-mt-24">
          <div className="max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-deep-navy">Three-year roadmap</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-stack-md">
              {ROADMAP.map((step) => (
                <div
                  key={step.year}
                  className="bg-white rounded-2xl border border-outline-variant/30 p-7 shadow-sm"
                  style={{ borderLeftWidth: '4px', borderLeftColor: step.accent }}
                >
                  <p className="font-headline-md text-headline-md" style={{ color: step.accent }}>{step.year}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Headline targets */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-deep-navy relative overflow-hidden">
          <div className="absolute -top-40 left-1/3 w-96 h-96 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-white">Headline 2029 targets</h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/15 mt-stack-md">
              {HEADLINE_TARGETS.map((target) => (
                <div key={target.cap} className="border-r border-b border-white/15 px-5 py-8 text-center">
                  <dt className="font-display-lg text-headline-lg text-safety-yellow">{target.num}</dt>
                  <dd className="font-body-md text-body-md text-white/70 mt-3 leading-snug">{target.cap}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
