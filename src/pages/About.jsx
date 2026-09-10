import React, { useEffect, useMemo, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import childTeach from '../assets/images/digitalchild.jpg';

const HERO_FACTS = [
  { label: 'Founded', value: '2022', icon: 'flag' },
  { label: 'Based in', value: 'Sri Lanka', icon: 'public' },
  { label: 'Member of', value: 'WeProtect Global Alliance', icon: 'handshake' }
];

const MISSION_PILLARS = [
  {
    icon: 'verified_user',
    title: 'Building digital literacy and safety',
    body: 'We mentor children, parents, and educators to understand and navigate technology responsibly, teaching safe and balanced use of social media, smartphones, gaming platforms, and the internet, so every child can lead a healthy digital life.'
  },
  {
    icon: 'movie_edit',
    title: 'Nurturing young creators',
    body: 'We give children the tools and confidence to tell their own stories, through film, photography, podcasting, and other creative media, helping them shape their identities, express their views, and be heard on issues that affect them.'
  },
  {
    icon: 'campaign',
    title: "Advocating for children's rights",
    body: "We conduct research, engage policymakers, and work alongside journalists and media producers to produce ethical, child-centered content that puts children's voices at the center of the conversation and strengthens protections for children across Sri Lanka."
  },
  {
    icon: 'self_improvement',
    title: 'Championing digital wellbeing',
    body: 'We support children and young people in building a healthy, balanced relationship with technology, promoting mental resilience and wellbeing in a world shaped by constant connectivity.'
  }
];

const MILESTONES = [
  { year: '2022', title: 'Where It Began', body: "IFDC was established with a vision to promote children's safety, wellbeing, rights, and participation in the digital world." },
  { year: '2023', title: 'Building the Foundation', body: 'IFDC was formally registered as a non-profit company limited by guarantee.' },
  { year: '2024', title: 'Going Global', body: 'IFDC participated in the Global Summit in Abu Dhabi, connecting with the international child online protection community.' },
  { year: '2024', title: 'Young Voices Rise', body: 'Launched the First National Young Online Child Protection Advocates Fellowship, empowering young people to champion online safety and child protection.' },
  { year: '2025', title: 'Connecting Across Asia', body: 'Participated in the Tech Coalition Asia-Pacific Briefing on Combating OCSEA in Singapore.' },
  { year: '2025', title: 'Nurturing Digital Wellbeing', body: 'Launched the Asian Young Fellowship on Digital Mental Wellbeing, expanding youth leadership across the region.' },
  { year: '2025', title: 'A Stronger Voice', body: "Established IFDC's first Independent Steering Committee to provide strategic guidance and oversight." },
  { year: '2025', title: 'Building Regional Bridges', body: 'Established a partnership with the Dr. Anamika Roy Memorial Trust, India, strengthening regional collaboration.' },
  { year: '2026', title: 'Empowering Our Fellows', body: 'Established an Independent Leadership Team to coordinate and support the IFDC Fellows network.' },
  { year: '2026', title: 'New Partnerships, New Possibilities', body: "Established a working relationship with Culture Re-Defined, strengthening collaboration around children's rights and digital wellbeing." },
  { year: '2026', title: 'Joining the Global Movement', body: 'IFDC became a member of the WeProtect Global Alliance, connecting its work with the global movement to end online child sexual exploitation and abuse.' },
  { year: '2026', title: 'Shaping the Future', body: "IFDC's Chairperson joined the Working Groups of the Task Force for Digital Transformation in Education through the Prime Minister's Office, strengthening IFDC's contribution to national policy dialogue." }
];

const APPROACHES = [
  {
    icon: 'balance',
    title: 'Children are rights-holders, not just beneficiaries',
    body: 'Children are equal citizens entitled to their rights in full — not passive recipients of care. This holds governments and institutions accountable to act at every level: legislative, cultural, and social.'
  },
  {
    icon: 'diversity_3',
    title: 'Child rights need gender equality',
    body: "Children can't thrive where gender inequality persists. Balanced power between girls and boys — and women and men — creates the conditions kids need to grow. Our programmes put gender equity at the core."
  },
  {
    icon: 'health_and_safety',
    title: 'Digital wellbeing is a right for every child',
    body: 'Every child has the right to a safe internet, not just access to one. Governments, parents, and the private sector share responsibility for preventing harm — and responding fast when it happens.'
  },
  {
    icon: 'child_care',
    title: "Technology shouldn't replace childhood",
    body: "Tech should expand a child's world, not shrink it. We help kids build a healthy relationship with technology while protecting the creativity and joy of the physical world too."
  }
];


const MILESTONE_YEARS = [...new Set(MILESTONES.map((item) => item.year))];

function JourneyTimeline() {
  const [activeYear, setActiveYear] = useState(MILESTONE_YEARS[0]);
  const tabRefs = useRef({});
  const railRef = useRef(null);

  // Keep the selected year visible in the horizontally scrolling rail on small screens.
  useEffect(() => {
    const tab = tabRefs.current[activeYear];
    const rail = railRef.current;

    if (!tab || !rail || rail.scrollWidth <= rail.clientWidth) return;

    // Measure against the rail itself - offsetLeft is relative to the nearest
    // positioned ancestor, which is not the rail when it is statically positioned.
    const tabRect = tab.getBoundingClientRect();
    const railRect = rail.getBoundingClientRect();
    const gutter = 16;
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

    if (tabRect.left < railRect.left) {
      rail.scrollBy({ left: tabRect.left - railRect.left - gutter, behavior });
    } else if (tabRect.right > railRect.right) {
      rail.scrollBy({ left: tabRect.right - railRect.right + gutter, behavior });
    }
  }, [activeYear]);

  const visible = useMemo(
    () => MILESTONES.filter((item) => item.year === activeYear),
    [activeYear]
  );

  const activeIndex = MILESTONE_YEARS.indexOf(activeYear);

  const goTo = (index) => {
    const next = MILESTONE_YEARS[(index + MILESTONE_YEARS.length) % MILESTONE_YEARS.length];
    setActiveYear(next);
    // preventScroll so the browser's focus scrolling does not fight the
    // rail positioning handled in the effect above.
    tabRefs.current[next]?.focus({ preventScroll: true });
  };

  const handleKeyDown = (event) => {
    const keys = {
      ArrowDown: activeIndex + 1,
      ArrowRight: activeIndex + 1,
      ArrowUp: activeIndex - 1,
      ArrowLeft: activeIndex - 1,
      Home: 0,
      End: MILESTONE_YEARS.length - 1
    };

    if (event.key in keys) {
      event.preventDefault();
      goTo(keys[event.key]);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

      {/* Year rail */}
      <div
        ref={railRef}
        role="tablist"
        aria-label="Milestone years"
        aria-orientation="vertical"
        onKeyDown={handleKeyDown}
        className="lg:col-span-3 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 lg:sticky lg:top-28"
      >
        {MILESTONE_YEARS.map((year) => {
          const isActive = year === activeYear;
          const count = MILESTONES.filter((item) => item.year === year).length;

          return (
            <button
              key={year}
              ref={(el) => { tabRefs.current[year] = el; }}
              role="tab"
              id={`year-tab-${year}`}
              aria-selected={isActive}
              aria-controls={`year-panel-${year}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveYear(year)}
              className={`shrink-0 flex items-center gap-3 rounded-2xl px-5 py-4 border text-left transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-safety-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-deep-navy ${
                isActive
                  ? 'bg-safety-yellow border-safety-yellow shadow-lg lg:translate-x-2'
                  : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-white/30'
              }`}
            >
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${isActive ? 'bg-deep-navy' : 'bg-safety-yellow/70'}`}></span>
              <span className="flex flex-col">
                <span className={`font-bold text-headline-md leading-none ${isActive ? 'text-deep-navy' : 'text-white'}`}>
                  {year}
                </span>
                <span className={`font-caption text-caption mt-1 whitespace-nowrap ${isActive ? 'text-deep-navy/70' : 'text-white/60'}`}>
                  {count} {count === 1 ? 'milestone' : 'milestones'}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Milestones */}
      <div className="lg:col-span-9">
        <div
          role="tabpanel"
          id={`year-panel-${activeYear}`}
          aria-labelledby={`year-tab-${activeYear}`}
          key={activeYear}
          className="relative space-y-4 animate-in fade-in slide-in-from-right-4 duration-500"
        >
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-white/15 hidden sm:block"></div>

          {visible.map((milestone, index) => (
            <article
              key={milestone.title}
              className="relative flex gap-5 bg-white rounded-2xl p-6 shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="hidden sm:flex w-14 h-14 shrink-0 rounded-xl bg-sky-tint items-center justify-center">
                <span className="font-bold text-primary text-body-lg">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-full bg-deep-navy text-safety-yellow font-bold text-caption">
                    {milestone.year}
                  </span>
                  <h4 className="font-headline-md text-headline-md text-deep-navy">{milestone.title}</h4>
                </div>
                <p className="text-on-surface-variant text-body-md leading-relaxed">{milestone.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between gap-4 mt-8">
          <button
            onClick={() => goTo(activeIndex - 1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white font-label-md text-label-md hover:bg-white hover:text-deep-navy transition-colors active:scale-95"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Previous
          </button>
          <p className="font-caption text-caption text-white/60 text-center">
            {activeIndex + 1} of {MILESTONE_YEARS.length}
          </p>
          <button
            onClick={() => goTo(activeIndex + 1)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white font-label-md text-label-md hover:bg-white hover:text-deep-navy transition-colors active:scale-95"
          >
            Next
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
}


export default function About() {
  return (
    <>
      <Navbar />


      {/* <header className="sticky top-0 w-full bg-surface-container-lowest shadow-sm z-50"><div className="flex justify-between items-center h-20 px-margin-desktop max-w-7xl mx-auto"><div className="flex items-center gap-4"><img alt="IDFC Logo" className="h-10 md:h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClz6GzbxPxgKR6ES6LeUxKiXeSzg9-ai8JDCukrWFn3FceTxMqS2ypHoj-ytT6iHHWrSU_PaovfT-UUfG-7rgVGfe6unbirrdwurgtmr4B3VW1Al2jnz-Hk6cMoPavpF00u4AzWcYlbjjJIS1S05FIqep5Az1sWWzCwe50SUthk05AQAEaUfhxPJIivGyfyD5ev_PWN-NbphP70vGY645rywqLHk-lNGjjCeZYoIVCAqV6dQCE-Poqy9d_hpuj4LPCdw" /></div><nav className="hidden md:flex items-center gap-8"><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link><Link className="font-body-md text-primary border-b-2 border-primary pb-1" to="/">About</Link><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Blogs &amp; News</Link><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Resources</Link></nav><div className="flex items-center gap-4"><div className="relative group hidden md:block"><button className="bg-deep-navy text-white px-6 py-2 rounded-full font-label-md flex items-center gap-2 transition-all active:scale-95 hover:bg-primary">Join Us<span className="material-symbols-outlined text-[18px]">expand_more</span></button><div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"><ul className="py-2"><li className=""><Link className="block px-4 py-2 hover:bg-surface-container-low transition-colors text-label-md" to="/">Volunteer</Link></li><li className=""><Link className="block px-4 py-2 hover:bg-surface-container-low transition-colors text-label-md" to="/">Advocate</Link></li><li className=""><Link className="block px-4 py-2 hover:bg-surface-container-low transition-colors text-label-md" to="/">Partner With Us</Link></li></ul></div></div><button className="md:hidden text-primary"><span className="material-symbols-outlined text-[32px]">menu</span></button></div></div></header> */}
      <main className="">

        {/* Hero */}
        <section className="relative overflow-hidden bg-surface-container-low pt-stack-lg pb-stack-lg px-margin-desktop">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-sky-tint/40 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-safety-yellow/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-stack-md lg:gap-stack-lg items-center">

            <div className="lg:col-span-7 space-y-6 reveal active">
              <span className="inline-flex items-center gap-2 bg-white border border-outline-variant/30 text-primary px-4 py-2 rounded-full text-label-md font-bold uppercase tracking-wider shadow-sm">
                <span className="w-2 h-2 rounded-full bg-safety-yellow"></span>
                About IFDC
              </span>

              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-deep-navy leading-tight">
                Protecting the Next Generation in a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Digital World</span>
                  <span className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-safety-yellow/60"></span>
                </span>
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                The International Digital Foundation for Children (IDFC) is committed to building a safer, more inclusive online environment where every child can explore, learn, and grow without fear.
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl">
                {HERO_FACTS.map((fact) => (
                  <div key={fact.label} className="bg-white rounded-2xl border border-outline-variant/20 p-4 shadow-sm">
                    <dt className="flex items-center gap-2 font-caption text-caption text-on-surface-variant uppercase tracking-wider">
                      <span className="material-symbols-outlined text-primary text-base">{fact.icon}</span>
                      {fact.label}
                    </dt>
                    <dd className="font-bold text-deep-navy text-body-lg mt-1 leading-snug">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-5 relative reveal active">
              <div className="absolute -top-5 -right-5 w-2/3 h-2/3 bg-safety-yellow rounded-[2rem] hidden sm:block"></div>
              <div className="absolute -bottom-5 -left-5 w-1/2 h-1/2 border-4 border-primary/20 rounded-[2rem] hidden sm:block"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  alt="Two young children watching a tablet together on a sofa"
                  className="w-full h-[320px] md:h-[460px] object-cover"
                  src={childTeach}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-navy/90 to-transparent p-6 pt-16">
                  <p className="text-white font-body-md text-body-md">
                    Screen time starts early. We help families across Sri Lanka make it safe and balanced.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision - full-width band */}
        <section className="relative px-margin-mobile md:px-margin-desktop py-stack-lg bg-sky-tint/40 overflow-hidden">
          <div className="absolute -top-24 right-10 w-80 h-80 bg-safety-yellow/20 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4">
                <span className="w-14 h-14 rounded-2xl bg-deep-navy flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-safety-yellow text-3xl">visibility</span>
                </span>
                <div>
                  <p className="font-label-md text-label-md text-primary uppercase tracking-widest">Our Vision</p>
                  <p className="font-caption text-caption text-on-surface-variant">Where we are heading</p>
                </div>
              </div>
              <span className="hidden lg:block w-16 h-1 bg-safety-yellow rounded-full mt-6"></span>
            </div>

            <div className="lg:col-span-8">
              <p className="font-display-lg text-[1.375rem] md:text-[2rem] text-deep-navy leading-snug">
                A Sri Lanka where every child grows up <span className="text-primary">safe, informed, and empowered</span> — equipped to navigate the digital world with confidence, creativity, and resilience, and to become a responsible citizen of the connected age.
              </p>
            </div>
          </div>
        </section>

        {/* Mission - statement plus four sub-sections */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3">Our Mission</p>
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-5">
                Protect, empower, and amplify children's voices
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                The International Foundation for Digital Child Safety (IFDC) Sri Lanka exists to protect, empower, and amplify the voices of children in the digital age.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 font-label-md text-label-md text-deep-navy bg-safety-yellow/30 border border-safety-yellow/60 rounded-full px-4 py-2">
                <span className="material-symbols-outlined text-sm">south_east</span>
                We do this by
              </p>
            </div>

            <ol className="lg:col-span-8 divide-y divide-outline-variant/40 border-t border-outline-variant/40">
              {MISSION_PILLARS.map((pillar, index) => (
                <li
                  key={pillar.title}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-8 transition-colors duration-300 hover:bg-sky-tint/25 rounded-xl sm:px-4 sm:-mx-4"
                >
                  <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-start gap-4">
                    <span className="font-display-lg text-headline-md text-deep-navy/20 group-hover:text-safety-yellow transition-colors duration-300 leading-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="w-12 h-12 rounded-xl bg-sky-tint flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary text-2xl">{pillar.icon}</span>
                    </span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">{pillar.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{pillar.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative py-stack-lg px-margin-desktop bg-deep-navy overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg">
              <span className="bg-safety-yellow/15 border border-safety-yellow/40 text-safety-yellow px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-wider">Timeline</span>
              <h2 className="font-headline-lg text-headline-lg text-white mt-4">Our Journey Through Time</h2>
              <p className="font-body-lg text-body-lg text-white/70 mt-3 max-w-2xl mx-auto">
                Select a year to see what we built along the way.
              </p>
            </div>
            <JourneyTimeline />
          </div>
        </section>

        <section className="relative py-stack-lg px-margin-desktop bg-sky-tint/30 overflow-hidden">
          <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/20 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto">
            <div className="text-center mb-stack-lg">
              <span className="inline-flex items-center gap-2 bg-deep-navy text-safety-yellow px-4 py-1.5 rounded-full text-label-md font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                Principles
              </span>
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mt-5">Our Approaches</h2>
              <p className="text-on-surface-variant mt-3 max-w-2xl mx-auto text-body-lg">
                The principles that shape how we work with children, families, and institutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {APPROACHES.map((approach, index) => (
                <div
                  key={approach.title}
                  className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden reveal active"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="absolute inset-x-0 top-0 h-1.5 bg-safety-yellow origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>

                  <div className="flex items-start gap-5">
                    <span className="w-14 h-14 rounded-2xl bg-deep-navy flex items-center justify-center shrink-0 group-hover:bg-safety-yellow transition-colors duration-300">
                      <span className="material-symbols-outlined text-safety-yellow group-hover:text-deep-navy text-3xl transition-colors duration-300">
                        {approach.icon}
                      </span>
                    </span>
                    <div>
                      <h3 className="font-headline-md text-headline-md text-deep-navy">{approach.title}</h3>
                      <span className="block w-10 h-0.5 bg-safety-yellow my-3 group-hover:w-20 transition-all duration-500"></span>
                      <p className="text-on-surface-variant text-body-md leading-relaxed">{approach.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto">

            {/* SECTION HEADER */}
            <div className="text-center mb-stack-lg">

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-tint text-primary rounded-full text-caption font-semibold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                Our Advocates
              </span>

              <h2 className="font-headline-lg text-headline-lg text-deep-navy">
                Our Child Safety Advocates
              </h2>

              <p className="text-on-surface-variant mt-3 max-w-2xl mx-auto text-body-lg">
                A nation where every child is born and raised in a healthy, safe
                environment, and educated to be successful citizens in the digital world.
              </p>

            </div>


            {/* CAROUSEL */}
            <div className="auto-carousel" id="advocates-carousel">

              <div className="auto-carousel-track">


                {/* =========================
            SARAH JENKINS
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="Sarah Jenkins"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      {/* ROLE BADGE */}
                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Digital Rights Advocate

                        </span>

                      </div>

                    </div>


                    {/* CONTENT */}
                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        Sarah Jenkins
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Specializing in international human rights law and digital
                        privacy for minors.
                      </p>

                      {/* DIVIDER */}
                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            DAVID MILLER
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="David Miller"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Child Online Safety Expert

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        David Miller
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Working to create safer and more inclusive digital spaces
                        for children around the world.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            AMINA YUSUF
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="Amina Yusuf"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Child Protection Advocate

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        Amina Yusuf
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Advocating for children's rights, protection and wellbeing
                        in the digital environment.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            JAMES WILSON
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="James Wilson"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Digital Safety Specialist

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        James Wilson
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Helping organisations develop effective digital safety
                        policies and child protection programmes.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            MICHAEL BROWN
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="Michael Brown"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Online Safety Advocate

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        Michael Brown
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Promoting responsible technology use and positive online
                        experiences for children.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            DUPLICATES FOR CAROUSEL
        ========================== */}

                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="Sarah Jenkins"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Digital Rights Advocate
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        Sarah Jenkins
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Digital Rights Advocate
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="David Miller"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Child Online Safety Expert
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        David Miller
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Child Online Safety Expert
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="Amina Yusuf"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Child Protection Advocate
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        Amina Yusuf
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Child Protection Advocate
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="James Wilson"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Digital Safety Specialist
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        James Wilson
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Digital Safety Specialist
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="Michael Brown"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Online Safety Advocate
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        Michael Brown
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Online Safety Advocate
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        <section className="py-stack-lg px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-4">

              <div>
                <h2 className="font-headline-lg text-headline-lg text-deep-navy">
                  Leadership Team
                </h2>

                <p className="text-on-surface-variant mt-2 text-body-lg">
                  The visionaries steering IDFC towards a safer horizon.
                </p>
              </div>

              <button className="text-primary font-bold flex items-center gap-2 hover:text-deep-navy hover:translate-x-1 transition-all">
                Join Our Team
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>

            </div>

            <div className="auto-carousel" id="leadership-carousel">

              <div className="auto-carousel-track">

                {/* Dr. Elena Rossi */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Elena Rossi"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Dr. Elena Rossi
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Executive Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        20+ years in international child protection policy and
                        clinical psychology.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Jameson Vance */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Jameson Vance"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Jameson Vance
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Deputy Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Leading strategic partnerships and international
                        child-safety initiatives.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Sarah Al-Mansour */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Sarah Al-Mansour"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Sarah Al-Mansour
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Program Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Developing programmes that empower children and families
                        to navigate the digital world safely.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Marcus Chen */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Marcus Chen"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOJgd2pv26AcqsbW-LreWpxPB-Ef2SwTKwhKqfv7J7GUPGywuffPCPupJH2rhkkUm3T5PX461YwJ1oBlMr2Aflhg_-i1k9CzAZv8LA-C6Rwy3C6uIwGoYTHu55GCIZq1UM2ykBDwC1FMDk7aifXr6ZcrpSsw5u4ucdsvwdH8wkSWtQtyi8ya-ody43uSkKYw5By2V79xt7PHTFZl5Pqmz3Y5gtSevc7adQS8a2w6kA7Pw-Xf0d--k"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Marcus Chen
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Technology Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Driving technology innovation and responsible digital
                        solutions for child safety.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Fifth Leader */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Michael Anderson"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Dr. Michael Anderson
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Policy Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Supporting evidence-based policies that protect children
                        across digital environments.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Duplicate 1 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Elena Rossi"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Dr. Elena Rossi
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Executive Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 2 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Jameson Vance"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Jameson Vance
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Deputy Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 3 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Sarah Al-Mansour"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Sarah Al-Mansour
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Program Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 4 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Marcus Chen"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOJgd2pv26AcqsbW-LreWpxPB-Ef2SwTKwhKqfv7J7GUPGywuffPCPupJH2rhkkUm3T5PX461YwJ1oBlMr2Aflhg_-i1k9CzAZv8LA-C6Rwy3C6uIwGoYTHu55GCIZq1UM2ykBDwC1FMDk7aifXr6ZcrpSsw5u4ucdsvwdH8wkSWtQtyi8ya-ody43uSkKYw5By2V79xt7PHTFZl5Pqmz3Y5gtSevc7adQS8a2w6kA7Pw-Xf0d--k"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Marcus Chen
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Technology Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 5 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Michael Anderson"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Dr. Michael Anderson
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Policy Director
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-deep-navy text-on-primary">
          <div className="max-w-container-max mx-auto">

            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-white">
                International Advisory Committee
              </h2>

              <p className="text-on-primary-container mt-2 text-body-lg">
                A nation where every child is born and raised in a healthy, safe
                environment, and educated to be successful citizens in the digital world.
              </p>
            </div>

            <div className="auto-carousel" id="advisory-carousel">

              <div className="auto-carousel-track">

                {/* Prof. David Sterling */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Prof. David Sterling"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Prof. David Sterling
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Digital Ethicist
                  </p>
                </div>

                {/* Ambassador Lima */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Ambassador Lima"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBS36rrp6DX_YfTSyvMbUFNd7p7Aogu7Xa8LYrg2PazaTe5HbrChGETzFlK_Sdi9ld1dqYzbK9fWL-CDGQmkKWQBI94qVq5CECxrWBPRpFTch7xfcQS3CCqmMmZGas5P-iTogbSF1Yy-Z3o4N0kRqDkKtNEMA5fCG2vZTbVwolIRKmJQFEGQNmsTa7J0YaXnKLdfjJEmeNeu6LzReB1Hs8p74LNsgHO8dVu8bDdIJFp7b2WcQz1wjx"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Ambassador Lima
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Human Rights Lead
                  </p>
                </div>

                {/* Kento Suzuki */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Kento Suzuki"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHcvgYsVQu2WUxnGnEF7qLVRwg-VNjSxJ8uX5XHdfSN1XJsd3vVYIEA-CYBgQZAdHC6F0VzSCvDbw_l5Ok8fstPwUKr3xm_bxJ1wOu7Xb7Ycgp8PGqfJnu0XpIxN-D-xpbTmYz88RSiOQFYI3gYyszm35npRTLhE4fp13GsH89Q72w2u3E_et2g0Dw3v_09e47iufdiWErrSOfaIn-y_SPFGt_x6pT3KjdYdGPdT1QkQqSCf0AUQq"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Kento Suzuki
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Privacy Advocate
                  </p>
                </div>

                {/* Dr. Maya Patel */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Dr. Maya Patel"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp_CIhJiMTZUeJRCin0URntjxRaaAu0JIsgqC6g3GQcGh0ADouyy8viu0b1yn2ZlQpTsnx-dBZ4NDAUwIcI0FTa-0NCoGv0TECcgBA7cnySh6L6ummOowLCJs7EpDrwl_UoASXqlvapIbPopC902kQ-kxGxSOaSlK1MVM-8i3JToQZPi1dMEznEkCv5_bcSHs0icPp6GuHAP_4r7nodpCsnMGtRXGe2yWavW_w-ZbNEvpnk9q93ouY"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Maya Patel
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Welfare Expert
                  </p>
                </div>

                {/* Fifth Advisor */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Dr. Daniel Williams"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Daniel Williams
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Safety Researcher
                  </p>
                </div>

                {/* DUPLICATES */}

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Prof. David Sterling"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Prof. David Sterling
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Digital Ethicist
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Ambassador Lima"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBS36rrp6DX_YfTSyvMbUFNd7p7Aogu7Xa8LYrg2PazaTe5HbrChGETzFlK_Sdi9ld1dqYzbK9fWL-CDGQmkKWQBI94qVq5CECxrWBPRpFTch7xfcQS3CCqmMmZGas5P-iTogbSF1Yy-Z3o4N0kRqDkKtNEMA5fCG2vZTbVwolIRKmJQFEGQNmsTa7J0YaXnKLdfjJEmeNeu6LzReB1Hs8p74LNsgHO8dVu8bDdIJFp7b2WcQz1wjx"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Ambassador Lima
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Human Rights Lead
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Kento Suzuki"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHcvgYsVQu2WUxnGnEF7qLVRwg-VNjSxJ8uX5XHdfSN1XJsd3vVYIEA-CYBgQZAdHC6F0VzSCvDbw_l5Ok8fstPwUKr3xm_bxJ1wOu7Xb7Ycgp8PGqfJnu0XpIxN-D-xpbTmYz88RSiOQFYI3gYyszm35npRTLhE4fp13GsH89Q72w2u3E_et2g0Dw3v_09e47iufdiWErrSOfaIn-y_SPFGt_x6pT3KjdYdGPdT1QkQqSCf0AUQq"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Kento Suzuki
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Privacy Advocate
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Dr. Maya Patel"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp_CIhJiMTZUeJRCin0URntjxRaaAu0JIsgqC6g3GQcGh0ADouyy8viu0b1yn2ZlQpTsnx-dBZ4NDAUwIcI0FTa-0NCoGv0TECcgBA7cnySh6L6ummOowLCJs7EpDrwl_UoASXqlvapIbPopC902kQ-kxGxSOaSlK1MVM-8i3JToQZPi1dMEznEkCv5_bcSHs0icPp6GuHAP_4r7nodpCsnMGtRXGe2yWavW_w-ZbNEvpnk9q93ouY"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Maya Patel
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Welfare Expert
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Dr. Daniel Williams"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Daniel Williams
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Safety Researcher
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface relative">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/5 to-transparent h-1/2"></div>
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-stack-lg text-center border border-outline-variant/20 shadow-xl relative z-10">
            <h2 className="font-display-lg text-headline-lg text-deep-navy mb-6">Ready to make a difference?</h2>
            <p className="text-body-lg text-on-surface-variant mb-stack-md max-w-2xl mx-auto">
              Support our mission to protect every child in the digital age. Your contribution fuels our global programs and advocacy efforts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-deep-navy text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Link to="/donate">
                  Donate Now
                </Link>
              </button>
              <button className="bg-safety-yellow text-deep-navy px-10 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Link to="/partner">

                  Partner With Us
                </Link>
              </button>
            </div>
          </div>
        </section>
      </main>


      <Footer />



    </>
  );
}
