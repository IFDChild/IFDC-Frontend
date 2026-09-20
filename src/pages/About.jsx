import React from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Footer from '../components/Footer';
import AdvisoryCommittee from '../components/AdvisoryCommittee';
import ChildSafetyAdvocates from '../components/ChildSafetyAdvocates';
import childTeach from '../assets/images/digitalchild.jpg';
import WeProtectLogo from '../assets/images/weprotect-global-alliance.svg';

const HERO_FACTS = [
  { label: 'Founded', value: '2022', icon: 'flag' },
  { label: 'Based in', value: 'Sri Lanka', icon: 'public' },
  { label: 'Member of', value: 'WeProtect Global Alliance', icon: 'handshake' }
];

const MISSION_PILLARS = [
  {
    icon: 'verified_user',
    bg: '#1F5FA6', text: '#FFFFFF', iconBg: 'rgba(255,255,255,0.18)', iconColor: '#FFE100',
    title: 'Building digital literacy and safety',
    body: 'We mentor children, parents, and educators to understand and navigate technology responsibly, teaching safe and balanced use of social media, smartphones, gaming platforms, and the internet, so every child can lead a healthy digital life.'
  },
  {
    icon: 'movie_edit',
    bg: '#FFE100', text: '#0B3D6E', iconBg: 'rgba(11,61,110,0.12)', iconColor: '#0B3D6E',
    title: 'Nurturing young creators',
    body: 'We give children the tools and confidence to tell their own stories, through film, photography, podcasting, and other creative media, helping them shape their identities, express their views, and be heard on issues that affect them.'
  },
  {
    icon: 'campaign',
    bg: '#D4E3FF', text: '#0B3D6E', iconBg: '#0B3D6E', iconColor: '#FFE100',
    title: "Advocating for children's rights",
    body: "We conduct research, engage policymakers, and work alongside journalists and media producers to produce ethical, child-centered content that puts children's voices at the center of the conversation and strengthens protections for children across Sri Lanka."
  },
  {
    icon: 'self_improvement',
    bg: '#00274C', text: '#FFFFFF', iconBg: 'rgba(255,225,0,0.16)', iconColor: '#FFE100',
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


const MILESTONE_GROUPS = [...new Set(MILESTONES.map((item) => item.year))].map((year) => ({
  year,
  items: MILESTONES.filter((item) => item.year === year)
}));

const YEAR_ACCENTS = {
  '2022': '#1B8A9E',
  '2023': '#2E7D5B',
  '2024': '#C98A0B',
  '2025': '#C0476B',
  '2026': '#5B5BD6'
};

function JourneyTimeline() {
  let position = 0;

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Central spine: left edge on mobile, centred from md up */}
      <span
        className="absolute top-0 bottom-0 left-[19px] md:left-1/2 md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-safety-yellow via-white/25 to-safety-yellow"
        aria-hidden="true"
      ></span>

      <ol className="relative space-y-10 md:space-y-12">
        {MILESTONE_GROUPS.map((group, groupIndex) => {
          const isLatest = groupIndex === MILESTONE_GROUPS.length - 1;

          return (
            <li key={group.year}>
              {/* Year badge on the spine */}
              <div className="relative flex md:justify-center mb-6">
                <span
                  className={`relative z-10 inline-flex items-center gap-2 rounded-full pl-1.5 pr-5 py-1.5 font-bold shadow-lg ${
                    isLatest
                      ? 'bg-safety-yellow text-deep-navy'
                      : 'bg-white text-deep-navy'
                  }`}
                >
                  <span className="w-7 h-7 rounded-full bg-deep-navy text-safety-yellow flex items-center justify-center" aria-hidden="true">
                    <span className="material-symbols-outlined text-[16px]">{isLatest ? 'flag' : 'event'}</span>
                  </span>
                  <span className="text-[20px] leading-none">{group.year}</span>
                </span>
              </div>

              <ul className="space-y-5 md:space-y-4">
                {group.items.map((milestone) => {
                  const onRight = position % 2 === 1;
                  position += 1;

                  return (
                    <li
                      key={milestone.title}
                      className={`relative pl-14 md:pl-0 md:w-1/2 ${
                        onRight ? 'md:ml-auto md:pl-12' : 'md:pr-12'
                      }`}
                    >
                      {/* Dot on the spine */}
                      <span
                        className={`absolute top-6 left-[13px] w-3.5 h-3.5 rounded-full bg-deep-navy border-[3px] border-safety-yellow z-10 ${
                          onRight ? 'md:left-0 md:-translate-x-1/2' : 'md:left-auto md:right-0 md:translate-x-1/2'
                        }`}
                        aria-hidden="true"
                      ></span>
                      {/* Connector from dot to card */}
                      <span
                        className={`hidden md:block absolute top-[30px] h-px w-10 bg-safety-yellow/50 ${
                          onRight ? 'left-2' : 'right-2'
                        }`}
                        aria-hidden="true"
                      ></span>

                      <article
                        className={`relative overflow-hidden rounded-2xl bg-white p-5 pl-6 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30 ${
                          onRight ? '' : 'md:text-right md:pl-5 md:pr-6'
                        }`}
                      >
                        {/* Accent bar on the side facing the spine */}
                        <span
                          className={`absolute top-0 bottom-0 left-0 w-[5px] ${onRight ? '' : 'md:left-auto md:right-0'}`}
                          style={{ backgroundColor: YEAR_ACCENTS[milestone.year] }}
                          aria-hidden="true"
                        ></span>
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-caption font-bold tracking-wider text-white"
                          style={{ backgroundColor: YEAR_ACCENTS[milestone.year] }}
                        >
                          {milestone.year}
                        </span>
                        <h3 className="mt-2 font-headline-md text-[18px] leading-snug text-deep-navy">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-relaxed text-on-surface-variant">
                          {milestone.body}
                        </p>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}


export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description="Who we are, our mission and journey since 2022, our child safety advocates and international advisory committee, and our membership of the WeProtect Global Alliance."
      />
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

        {/* Mission - navy statement card plus four colour tiles */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
          <div className="max-w-5xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr] items-center gap-6 md:gap-8 bg-deep-navy text-white rounded-3xl px-6 py-7 md:px-10 md:py-9 mb-8 shadow-xl shadow-deep-navy/15">
              <div
                className="hidden sm:flex w-24 h-24 rounded-full border-[1.5px] border-white/40 items-center justify-center text-center rotate-[8deg] shrink-0"
                aria-hidden="true"
              >
                <span className="font-bold text-[11px] leading-tight tracking-[0.08em] text-white/75">
                  IFDC<br />
                  <span className="text-safety-yellow">SRI LANKA</span>
                </span>
              </div>
              <div>
                <p className="text-label-md font-bold text-safety-yellow mb-2">Our mission</p>
                <h2 className="font-headline-lg text-[1.75rem] md:text-[2.25rem] leading-tight text-white mb-3">
                  Protect, empower, and amplify children's voices
                </h2>
                <p className="text-body-md md:text-body-lg leading-relaxed text-white/80 max-w-[62ch]">
                  IFDC Sri Lanka exists to protect, empower, and amplify the voices of children in the digital age.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <h3 className="font-headline-md text-[1.05rem] font-bold text-deep-navy whitespace-nowrap">We do this by</h3>
              <span className="flex-1 h-px bg-deep-navy/15" aria-hidden="true"></span>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MISSION_PILLARS.map((pillar) => (
                <li
                  key={pillar.title}
                  className="flex flex-col gap-3 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: pillar.bg, color: pillar.text }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: pillar.iconBg }}
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-[22px]" style={{ color: pillar.iconColor }}>{pillar.icon}</span>
                    </span>
                    <h4 className="font-headline-md text-[1.15rem] font-bold leading-snug">{pillar.title}</h4>
                  </div>
                  <p className="text-body-md leading-relaxed" style={{ opacity: 0.88 }}>{pillar.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative py-stack-lg px-margin-mobile md:px-margin-desktop bg-deep-navy overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

          <div className="relative max-w-container-max mx-auto">
            <div className="text-center mb-10 xl:mb-12">
              <span className="bg-safety-yellow/15 border border-safety-yellow/40 text-safety-yellow px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-wider">Timeline</span>
              <h2 className="font-headline-lg text-headline-lg text-white mt-4">Our Journey Through Time</h2>
              <p className="font-body-lg text-body-lg text-white/70 mt-3 max-w-2xl mx-auto">
                From our founding in 2022 to joining the global movement — every milestone at a glance.
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

        {/* Global membership */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
          <div className="max-w-container-max mx-auto">
            <div className="bg-white border border-outline-variant/40 rounded-[1.5rem] shadow-sm p-7 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-center">
              <a
                href="https://www.weprotect.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center bg-sky-tint/40 border border-outline-variant/40 rounded-2xl px-7 py-6 transition-transform hover:-translate-y-0.5"
              >
                <img src={WeProtectLogo} alt="WeProtect Global Alliance" className="h-12 md:h-14 w-auto object-contain" />
              </a>

              <div>
                <span className="inline-block bg-safety-yellow/20 border border-safety-yellow/50 text-deep-navy px-3 py-1 rounded-full text-label-md font-bold uppercase tracking-wider text-[0.72rem]">
                  Global membership
                </span>
                <h2 className="font-headline-md text-[1.6rem] md:text-[2rem] leading-tight text-deep-navy mt-4 mb-3">
                  A member of the WeProtect Global Alliance
                </h2>
                <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-[62ch]">
                  IFDC has been granted global membership of the WeProtect Global Alliance — a movement of more than
                  300 governments, companies and civil society organisations working to end online child sexual
                  exploitation and abuse. Membership connects our work in Sri Lanka to global research, standards
                  and practice, and holds us to them.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ChildSafetyAdvocates />

        <AdvisoryCommittee />

      </main>


      <Footer />



    </>
  );
}
