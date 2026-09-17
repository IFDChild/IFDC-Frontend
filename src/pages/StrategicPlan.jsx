import React, { useRef, useState } from 'react';
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
  { num: '9', cap: 'Programmes delivered', icon: 'school', iconBg: '#FFE100', iconColor: '#0B3D6E', bg: '#0B3D6E', numColor: '#FFE100', capColor: 'rgba(255,255,255,0.8)' },
  { num: '4', cap: 'Strategic pillars', icon: 'account_tree', iconBg: '#0B3D6E', iconColor: '#FFE100', bg: '#FFE100', numColor: '#0B3D6E', capColor: 'rgba(11,61,110,0.8)' },
  { num: '471+', cap: 'Confirmed direct participants', icon: 'groups', iconBg: '#FFFFFF', iconColor: '#1F5FA6', bg: '#1F5FA6', numColor: '#FFFFFF', capColor: 'rgba(255,255,255,0.82)' },
  { num: '25', cap: 'Schools reached (flagship)', icon: 'apartment', iconBg: '#0B3D6E', iconColor: '#FFE100', bg: '#D4E3FF', numColor: '#0B3D6E', capColor: 'rgba(11,61,110,0.78)' },
  { num: '6', cap: 'Partner & government bodies', icon: 'handshake', iconBg: '#FFE100', iconColor: '#00274C', bg: '#00274C', numColor: '#FFE100', capColor: 'rgba(255,255,255,0.8)' }
];

// Priorities grouped under the four programme pillars, in IFDC theme colours.
// `accent` is used for text/icons on white; `bg`/`fg` for the selected tab.
const PRIORITY_PILLARS = [
  {
    hashtag: '#DIGITALWISE',
    name: 'Building Healthy Digital Lives',
    icon: 'auto_stories',
    accent: '#1F5FA6',
    bg: '#1F5FA6',
    fg: '#FFFFFF',
    intro: 'Helps children, parents, and educators develop digital literacy, online safety, critical thinking, and healthy technology habits.',
    items: [
      { num: '02', title: 'Online child safety & prevention of OCSEA', desc: 'Strengthen capacity to prevent, identify, and respond to online child sexual exploitation and abuse.', target: '100+ programmes · national safety education programme' },
      { num: '03', title: 'Artificial intelligence & the future of child safety', desc: 'Respond proactively to emerging risks and opportunities created by AI and other fast-moving technologies.', target: '50+ schools reached · AI working group by 2027' },
      { num: '05', title: 'Digital solutions for children & families', desc: 'Develop practical, child-friendly digital tools for prevention, self-assessment, and access to help.', target: 'Self-assessment & referral tools developed / piloted' }
    ]
  },
  {
    hashtag: '#KIDSPRESSION',
    name: 'Empowering Young Digital Creators',
    icon: 'campaign',
    accent: '#7A6200',
    bg: '#FFE100',
    fg: '#0B3D6E',
    intro: 'Encourages children to express themselves through storytelling, filmmaking, photography, podcasting, and other creative media.',
    items: [
      { num: '08', title: 'University, technology & innovation partnerships', desc: 'Build a national innovation ecosystem connecting child protection expertise with technology talent.', target: 'Partnerships expanded — SLIIT, UoM, NIBM, NSBM & more' }
    ]
  },
  {
    hashtag: '#VOICE4KIDS',
    name: 'Research, Advocacy & Child Rights',
    icon: 'psychology',
    accent: '#0B3D6E',
    bg: '#0B3D6E',
    fg: '#FFFFFF',
    intro: "Uses research and advocacy to strengthen child protection, influence policy, and amplify children's voices in the digital world.",
    items: [
      { num: '04', title: 'Research, knowledge & evidence', desc: "Build IFDC's capacity as a research-informed organisation and contribute evidence to policy and practice.", target: 'Research group & 3-year research agenda established' },
      { num: '06', title: 'International advisory network & capacity', desc: 'Strengthen technical capacity through a network of national and international experts and mentors.', target: 'Advisory board established · annual fellowship programme' },
      { num: '09', title: 'National & international partnerships', desc: "Grow a partnership ecosystem that increases IFDC's reach, credibility, and long-term sustainability.", target: 'Stable national & international partner network' },
      { num: '10', title: 'Organisational development & sustainability', desc: 'Transform IFDC into a well-structured, transparent organisation able to deliver long-term programmes.', target: 'Sustainability & MEL systems fully operational by 2029' }
    ]
  },
  {
    hashtag: '#TECHCARE',
    name: 'Digital Mental Health & Wellbeing',
    icon: 'self_improvement',
    accent: '#2C6FB7',
    bg: '#D4E3FF',
    fg: '#0B3D6E',
    intro: "Promotes healthy relationships with technology and supports children's and young people's digital wellbeing and resilience.",
    items: [
      { num: '01', title: 'Digital wellbeing & community support', desc: 'Build a community-based support network helping children, young people, and families develop healthier relationships with technology.', target: '5,000+ children & young people reached · support network established' },
      { num: '07', title: 'New programmes on emerging digital & relationship risks', desc: "Address sexuality education, healthy relationships, digital consent, and online pornography's impact.", target: 'Evidence-informed programmes with specialist partners' }
    ]
  }
];

function PriorityPillars() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef([]);
  const pillar = PRIORITY_PILLARS[active];

  const focusTab = (index) => {
    const next = (index + PRIORITY_PILLARS.length) % PRIORITY_PILLARS.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const handleKeyDown = (event) => {
    const moves = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: PRIORITY_PILLARS.length - 1 };
    if (event.key in moves) {
      event.preventDefault();
      focusTab(moves[event.key]);
    }
  };

  return (
    <>
      {/* Pillar tabs */}
      <div
        role="tablist"
        aria-label="Strategic pillars"
        onKeyDown={handleKeyDown}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-stack-md mb-8"
      >
        {PRIORITY_PILLARS.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.hashtag}
              ref={(el) => { tabRefs.current[index] = el; }}
              type="button"
              role="tab"
              id={`pillar-tab-${index}`}
              aria-selected={selected}
              aria-controls="pillar-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              className={`flex flex-col items-start gap-2.5 text-left rounded-2xl border p-[18px] cursor-pointer transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-deep-navy ${
                selected ? 'shadow-lg -translate-y-0.5' : 'bg-white border-outline-variant/40 hover:border-outline-variant hover:shadow-sm'
              }`}
              style={selected ? { backgroundColor: item.bg, borderColor: item.bg } : undefined}
            >
              <span
                className="w-[50px] h-[50px] rounded-[12px] flex items-center justify-center"
                style={{
                  backgroundColor: selected ? 'rgba(255,255,255,0.22)' : '#F3F5F9',
                  color: selected ? item.fg : item.accent
                }}
                aria-hidden="true"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 28 }}>{item.icon}</span>
              </span>
              <span
                className="text-[11.5px] font-bold tracking-[0.02em]"
                style={{ color: selected ? item.fg : item.accent, opacity: selected ? 0.8 : 1 }}
              >
                {item.hashtag}
              </span>
              <span
                className="font-headline-md text-[15px] font-bold leading-tight"
                style={{ color: selected ? item.fg : '#0B3D6E' }}
              >
                {item.name}
              </span>
              <span
                className="text-[12px] font-semibold"
                style={{ color: selected ? item.fg : '#6B7280', opacity: selected ? 0.75 : 1 }}
              >
                {item.items.length} {item.items.length === 1 ? 'priority' : 'priorities'}
              </span>
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id="pillar-panel" aria-labelledby={`pillar-tab-${active}`} key={pillar.hashtag}>
        {/* Group header */}
        <div className="flex flex-col sm:flex-row items-start gap-4 pb-6 mb-6 border-b border-outline-variant/40">
          <span
            className="w-[68px] h-[68px] rounded-[18px] flex items-center justify-center shrink-0 bg-white border border-outline-variant/30"
            style={{ color: pillar.accent }}
            aria-hidden="true"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 38 }}>{pillar.icon}</span>
          </span>
          <div>
            <p className="text-[12.5px] font-bold mb-1" style={{ color: pillar.accent }}>{pillar.hashtag}</p>
            <h3 className="font-headline-md text-[24px] font-bold text-deep-navy mb-2">{pillar.name}</h3>
            <p className="text-[15px] leading-relaxed text-on-surface-variant max-w-[70ch]">{pillar.intro}</p>
          </div>
        </div>

        {/* Priority cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillar.items.map((item) => (
            <article
              key={item.num}
              className="relative flex flex-col bg-white rounded-2xl border border-outline-variant/40 px-5 py-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: pillar.accent }} aria-hidden="true"></span>
              <span className="text-[12px] font-bold tracking-wider mb-2" style={{ color: pillar.accent }}>
                Priority {item.num}
              </span>
              <h4 className="font-headline-md text-[16.5px] font-bold leading-snug text-deep-navy mb-2.5">{item.title}</h4>
              <p className="text-[13.5px] leading-relaxed text-on-surface-variant mb-4 flex-1">{item.desc}</p>
              <div className="pt-3.5 border-t border-outline-variant/40 text-[12.5px] leading-normal text-on-surface-variant">
                <b className="block text-[12px] font-bold uppercase tracking-wider text-deep-navy mb-1">2029 target</b>
                {item.target}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

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
                <span className="material-symbols-outlined" style={{ fontSize: 20 }}>arrow_downward</span>
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
            <dl className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {BASELINE_STATS.map((stat) => (
                <div
                  key={stat.cap}
                  className="flex flex-col items-center justify-center rounded-2xl px-4 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl last:col-span-2 md:last:col-span-1"
                  style={{ backgroundColor: stat.bg }}
                >
                  <dt className="flex flex-col items-center font-display-lg text-headline-md" style={{ color: stat.numColor }}>
                    <span
                      className="mb-3 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md ring-4 ring-white/15"
                      style={{ backgroundColor: stat.iconBg, color: stat.iconColor }}
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: 34 }}>{stat.icon}</span>
                    </span>
                    {stat.num}
                  </dt>
                  <dd className="font-caption text-caption mt-2 leading-snug" style={{ color: stat.capColor }}>{stat.cap}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Priorities */}
        <section id="priorities" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface-container-low scroll-mt-24">
          <div className="max-w-container-max mx-auto">
            <div className="max-w-3xl">
              <p className="font-label-md text-label-md font-bold text-primary mb-3">IFDC Strategy 2027–2029</p>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy leading-tight">Ten strategic priorities, 2027–2029</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 max-w-[62ch]">
                Every priority sits under one of our four strategic pillars — each with its own set of programmes working toward our 2029 goals. Select a pillar to explore its priorities.
              </p>
            </div>

            <PriorityPillars />
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
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-sky-tint relative overflow-hidden">
          <div className="absolute -top-40 left-1/3 w-96 h-96 bg-safety-yellow/25 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto">
            <p className="font-label-md text-label-md font-bold text-primary mb-3">Where we're headed</p>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy">Headline 2029 targets</h2>

            <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-stack-md">
              {HEADLINE_TARGETS.map((target) => (
                <div
                  key={target.cap}
                  className="relative overflow-hidden bg-white rounded-2xl border border-deep-navy/10 px-6 py-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="absolute top-0 left-0 right-0 h-1.5 bg-safety-yellow" aria-hidden="true"></span>
                  <dt className="font-display-lg text-headline-lg text-deep-navy">{target.num}</dt>
                  <dd className="font-body-md text-body-md text-on-surface-variant mt-3 leading-snug">{target.cap}</dd>
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
