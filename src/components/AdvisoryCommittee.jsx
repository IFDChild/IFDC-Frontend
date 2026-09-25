import React, { useEffect, useRef, useState } from 'react';

// Portraits are picked up automatically from src/assets/images/advisory/<slug>.<ext>
const PORTRAITS = import.meta.glob(
  '../assets/images/advisory/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,Jpg,Jpeg,Png}',
  { eager: true, import: 'default' }
);

const portraitFor = (slug) => {
  const entry = Object.entries(PORTRAITS).find(
    ([path]) => path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase() === slug
  );
  return entry ? entry[1] : null;
};

const initialsFor = (name) =>
  name
    .replace(/^(Prof\.|Dr\.)\s+/i, '')
    .replace(/,.*$/, '')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

const ADVISORS = [
  {
    slug: 'peter-borges',
    name: 'Prof. Peter Floriano Borges',
    role: 'Assistant Professor of Social Work',
    specialism: 'Child Rights, Child Protection & Digital Safety Expert',
    country: 'India',
    organisation: 'Goa University',
    bio: [
      "Peter Floriano Borges is a child rights advocate, social work academic, and child protection specialist with over two decades of experience in child safeguarding, online safety, digital wellbeing, and public policy. He is Assistant Professor of Social Work at Goa University, teaching Social Work Practice with Children, Digital Technology and Children's/Youth Wellbeing, and Law and Public Policy. As former Chairperson of the Goa State Commission for Protection of Child Rights, he led reforms including child protection policy development, capacity building for Child Welfare Police Officers, and training over 6,000 school teachers in personal safety education.",
      'As Founder-President of the Human Touch Foundation, he designs evidence-based programmes on OCSEA, cyberbullying, image-based abuse, and AI-enabled harms. He collaborates with governments, UN agencies, and international partners, including the Google Safety Engineering Centre–CyberPeace Kids & Family Symposium.'
    ],
    expertise: ['Child Rights and Child Protection', 'Online Child Safety and OCSEA Prevention', 'Digital Wellbeing and Digital Citizenship', 'Child Safeguarding', 'Public Policy', 'Capacity Building', 'Research and Programme Development']
  },
  // {
  //   slug: 'vidhya',
  //   name: 'Dr. S. Vidhya',
  //   role: 'Researcher',
  //   specialism: 'Child Rights, Digital Safety & Digital Wellbeing Specialist',
  //   country: 'India',
  //   organisation: 'Dharrmam Charitable Trust',
  //   bio: [
  //     'Dr. S. Vidhya is a researcher, learning and development strategist, and nonprofit leader specializing in child rights, online safety, digital wellbeing, and organizational development. As Managing Trustee of Dharrmam Charitable Trust, she leads evidence-based programmes on child protection, youth empowerment, and digital resilience through partnerships with educational institutions, government agencies, and NGOs. Holding a Ph.D. in Management, she has designed online safety and cyberbullying awareness initiatives for children, parents, and educators.',
  //     'She completed the Child Rights and Protection Learning Programme (IYAP), with a capstone project on Online Safety and Cyberbullying Awareness, and has delivered leadership and employability programmes to hundreds of students and professionals, contributing to relevant Sustainable Development Goals.'
  //   ],
  //   expertise: ['Child Rights and Protection', 'Online Child Safety', 'Digital Wellbeing', 'Digital Citizenship', 'Cyberbullying Prevention', 'Capacity Building', 'Programme Design and Evaluation', 'Organizational Development']
  // },
  {
    slug: 'stefanos-alevizos',
    name: 'Dr. Stefanos Alevizos',
    role: 'Child Protection Psychologist',
    specialism: 'International Child Rights, Mental Health & Safeguarding Expert',
    country: 'Greece',
    organisation: 'IASIS / HORIZON',
    bio: [
      'Dr. Stefanos Alevizos is a child protection psychologist and international consultant with nearly two decades of experience advancing child rights, mental health, and violence prevention across Europe. He holds a Ph.D. from Panteion University, Athens (on child removal due to abuse), and is completing postdoctoral research on the Best Interests of the Child principle through a forensic psychology lens. He currently serves as Scientific Advisor for IASIS and HORIZON, Greece, on EU-funded child protection and mental health initiatives.',
      'He previously coordinated the Greek National Center for Missing and Exploited Children at The Smile of the Child, supervising helpline, emergency intervention, and school prevention teams, and represented Greece in Child Helpline International, Missing Children Europe, ISPCAN, and the European Anti-Bullying Network.'
    ],
    expertise: ['Child Protection and Child Rights', 'Child Abuse and Neglect Prevention', 'Mental Health and Psychological Wellbeing', 'Safeguarding', 'School Violence and Bullying Prevention', 'Forensic Psychology', 'Child Protection Policy', 'Research and Capacity Building']
  },
  {
    slug: 'gabriel-wahl',
    name: 'Gabriel Wahl',
    role: 'Child Online Safety Researcher',
    specialism: 'Digital Citizenship & Child Rights Advocate',
    country: 'Sweden',
    organisation: 'The Salvation Army Sweden',
    bio: [
      'Gabriel Wahl is an emerging leader in child online safety, digital citizenship, and safeguarding education. Since 2018 he has served as Project Manager for Child Online Safety at The Salvation Army in Sweden, leading Kylskåpsradion, a leading child-focused media platform that has produced over 800 podcast episodes, reached four million-plus listeners, responded to about 20,000 messages from children, and delivered 100+ live school and youth-camp programmes. He also sits on the steering committee of In Safe Hands and chairs the Swedish NGO Friends of Chitaba, supporting education in Zambia.',
      "His research examines child online safety globally, including a master's study on children's TikTok experiences during armed conflict, and contributions to the EU-funded ARENAS project on extremist narratives and digital communication."
    ],
    expertise: ['Child Online Safety', 'Digital Citizenship', 'Digital Literacy', 'Child Rights', 'Safeguarding', 'Online Resilience', 'Media Communication', 'Child Participation']
  },
  {
    slug: 'rebecca-reichel',
    name: 'Rebecca Maja Reichel',
    role: 'Legal and Investigative Forensic Psychologist',
    specialism: 'Researcher in Online Child Sexual Exploitation & Child Protection',
    country: 'Germany',
    organisation: 'Medical School Berlin',
    bio: [
      'Rebecca Maja Reichel is a forensic psychologist researching online child sexual exploitation, digital offending, and investigative interviewing. She is a Ph.D. researcher and Research Assistant at Medical School Berlin, contributing to the Safe Online-funded WRITE (Written Risk Indicators Triggering Exploitation) project. Her earlier work on the EU-funded ARICA (Assessing Risk Indicators of Child Sexual Abuse) project advanced understanding of CSAM, offender behaviour, and digital forensic risk assessment.',
      'She has published in journals including Child Abuse & Neglect, Trauma Violence & Abuse, Victims & Offenders, Sexual Abuse, and Humanities and Social Sciences Communications (Nature), and presents regularly at international conferences, collaborating with law enforcement and child protection networks worldwide.'
    ],
    expertise: ['Online Child Sexual Exploitation and Abuse (OCSEA)', 'Child Protection Research', 'Investigative Forensic Psychology', 'Digital Forensics', 'Online Harms', 'Child Abuse Prevention', 'Risk Assessment', 'Evidence-Based Child Protection Policy']
  },
  {
    slug: 'emmanuel-adinkrah',
    name: 'Emmanuel Adinkrah',
    role: 'Trust & Safety Leader',
    specialism: 'Digital Rights & Child Online Protection Advocate',
    country: 'Ghana / United States',
    organisation: 'Ghana Internet Safety Foundation',
    bio: [
      'Emmanuel Adinkrah is a Trust & Safety leader and digital rights advocate with over a decade of experience in policy, technology governance, and digital literacy. As Founder and President of the Ghana Internet Safety Foundation (GISF), he has equipped more than 10,000 students, parents, and educators with digital safety skills, and works with law enforcement, policymakers, and tech companies including Meta on child protection frameworks. His programmes include the ShieldHer Initiative for abuse survivors, the CyberSafety Ambassadors and Fellowship Programme, and Trust & Safety Hackathons.',
      'He also serves as Lead Trust & Safety and Digital Risk Consultant at the Trust and Safety Africa Academy, and is pursuing doctoral research in cybersecurity focused on Trust & Safety policy and platform ethics. He is a frequent speaker at Safer Internet Day, TrustCon, and c0c0n, and advises Safe Standard AI, Digital Space Africa, and TSPA.'
    ],
    expertise: ['Trust & Safety Strategy', 'Child Online Protection (COP)', 'CSAM Prevention', 'Digital Rights and Digital Citizenship', 'Cyberbullying and Sextortion Prevention', 'Platform Trust & Safety', 'Digital Risk Assessment', 'Cybersecurity Policy and Governance'],
    positions: [
      'Founder & President, Ghana Internet Safety Foundation (GISF)',
      'Lead Trust & Safety & Digital Risk Consultant, Trust and Safety Africa Academy',
      'Senior IT Systems & Infrastructure Specialist, Santa Clarita Water Agency / Resurgence IT',
      'Board Member, Safe Standard AI',
      'Advisory Board Member, Digital Space Africa',
      'Member, Trust and Safety Professional Association (TSPA)'
    ]
  }
];

// Short card summary: the opening sentence of the profile. Titles and
// initials ("Dr.", "Prof.", "S.", "Ph.D.") are not treated as sentence ends.
const ABBREVIATION = /(?:^|\s)(?:Dr|Prof|Mr|Mrs|Ms|St|Ph\.D|[A-Z])$/;

const summaryFor = (advisor) => {
  const text = advisor.bio[0];
  for (const match of text.matchAll(/[.!?](?=\s+[A-Z]|$)/g)) {
    if (!ABBREVIATION.test(text.slice(0, match.index))) {
      return text.slice(0, match.index + 1);
    }
  }
  return text;
};

function Portrait({ advisor, size }) {
  const src = portraitFor(advisor.slug);
  const shape = size === 'lg'
    ? 'w-28 h-28 text-[30px] rounded-full ring-4 ring-safety-yellow/80'
    : 'w-24 h-24 text-[26px] rounded-2xl ring-4 ring-white shadow-md';

  return (
    <span className={`${shape} shrink-0 overflow-hidden bg-sky-tint flex items-center justify-center`}>
      {src ? (
        <img src={src} alt={`Portrait of ${advisor.name}`} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        <span className="font-bold text-deep-navy" aria-hidden="true">{initialsFor(advisor.name)}</span>
      )}
    </span>
  );
}

function ProfileDialog({ advisor, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (advisor && !dialog.open) dialog.showModal();
    if (!advisor && dialog.open) dialog.close();
  }, [advisor]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        // Clicking the backdrop (the dialog element itself) closes it.
        if (event.target === dialogRef.current) onClose();
      }}
      aria-labelledby="advisor-dialog-name"
      className="m-auto w-[calc(100%-2rem)] max-w-3xl max-h-[88vh] rounded-3xl p-0 bg-white shadow-2xl backdrop:bg-deep-navy/70 backdrop:backdrop-blur-sm"
    >
      {advisor && (
        <div className="relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white hover:text-deep-navy flex items-center justify-center transition-colors"
            aria-label="Close profile"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <header className="bg-deep-navy text-white px-6 md:px-10 pt-10 pb-8 flex flex-col sm:flex-row sm:items-center gap-6">
            <Portrait advisor={advisor} size="lg" />
            <div className="min-w-0 pr-8">
              <h3 id="advisor-dialog-name" className="font-headline-md text-[1.6rem] md:text-[1.9rem] font-bold leading-tight">
                {advisor.name}
                {advisor.credential && <span className="block text-base font-semibold text-white/70 mt-1">{advisor.credential}</span>}
              </h3>
              <p className="mt-2 text-safety-yellow font-semibold">{advisor.role}</p>
              <p className="text-white/75 text-body-md">{advisor.specialism}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-caption font-semibold">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">public</span>
                  {advisor.country}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-caption font-semibold">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">apartment</span>
                  {advisor.organisation}
                </span>
              </div>
            </div>
          </header>

          <div className="px-6 md:px-10 py-8 space-y-7">
            <div className="space-y-4 text-body-md leading-relaxed text-on-surface-variant">
              {advisor.bio.map((paragraph) => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
            </div>

            <div>
              <h4 className="font-label-md text-label-md font-bold uppercase tracking-wider text-deep-navy mb-3">Areas of expertise</h4>
              <ul className="flex flex-wrap gap-2">
                {advisor.expertise.map((area) => (
                  <li key={area} className="rounded-full bg-sky-tint text-deep-navy px-3 py-1.5 text-caption font-semibold">{area}</li>
                ))}
              </ul>
            </div>

            {advisor.positions && (
              <div>
                <h4 className="font-label-md text-label-md font-bold uppercase tracking-wider text-deep-navy mb-3">Current positions</h4>
                <ul className="space-y-2">
                  {advisor.positions.map((position) => (
                    <li key={position} className="flex gap-2.5 text-body-md text-on-surface-variant">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-safety-yellow shrink-0 ring-2 ring-deep-navy/20" aria-hidden="true"></span>
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}

export default function AdvisoryCommittee() {
  const [selected, setSelected] = useState(null);
  const countries = new Set(ADVISORS.flatMap((advisor) => advisor.country.split(' / ')));

  return (
    <section id="advisory-committee" className="relative overflow-hidden py-stack-lg px-margin-mobile md:px-margin-desktop bg-deep-navy scroll-mt-24">
      <div className="absolute -top-40 -right-32 w-96 h-96 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-stack-md">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 bg-safety-yellow/15 border border-safety-yellow/40 text-safety-yellow px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">diversity_3</span>
              Global expertise
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mt-4">
              International Advisory Committee
            </h2>
            <p className="text-body-lg text-white/70 mt-3 max-w-2xl">
              Child protection and online safety experts from around the world who guide IFDC's programmes, research, and advocacy with evidence and experience.
            </p>
          </div>
          <dl className="lg:col-span-5 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <dt className="text-caption text-white/60">Advisors</dt>
              <dd className="font-bold text-[2rem] leading-none text-safety-yellow mt-1">{ADVISORS.length}</dd>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
              <dt className="text-caption text-white/60">Countries represented</dt>
              <dd className="font-bold text-[2rem] leading-none text-safety-yellow mt-1">{countries.size}</dd>
            </div>
          </dl>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ADVISORS.map((advisor) => (
            <li key={advisor.slug} className="flex">
              <article className="group relative flex flex-col w-full bg-white overflow-hidden rounded-tl-[2.5rem] rounded-br-[2.5rem] rounded-tr-lg rounded-bl-lg shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {/* Header band */}
                <div className="relative h-24 bg-gradient-to-br from-primary to-[#1F5FA6] overflow-hidden" aria-hidden="true">
                  <span className="absolute -right-8 -top-10 w-32 h-32 rounded-full border-[18px] border-safety-yellow/25" />
                  <span className="absolute left-5 top-4 inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-[12px] font-semibold text-white">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {advisor.country}
                  </span>
                </div>

                <div className="relative px-6 pb-6 -mt-12 flex flex-col flex-1">
                  <Portrait advisor={advisor} />
                  <h3 className="mt-4 font-headline-md text-[1.1rem] font-bold leading-snug text-deep-navy">{advisor.name}</h3>
                  <p className="text-caption font-semibold text-primary mt-1 leading-snug">{advisor.role}</p>

                  <p className="mt-3 text-[0.88rem] leading-relaxed text-on-surface-variant flex-1">{summaryFor(advisor)}</p>

                  <ul className="flex flex-wrap gap-1.5 mt-4">
                    {advisor.expertise.slice(0, 2).map((area) => (
                      <li key={area} className="rounded-md bg-sky-tint text-deep-navy px-2.5 py-1 text-[11.5px] font-semibold">{area}</li>
                    ))}
                    {advisor.expertise.length > 2 && (
                      <li className="rounded-md bg-safety-yellow/40 text-deep-navy px-2.5 py-1 text-[11.5px] font-bold">
                        +{advisor.expertise.length - 2} more
                      </li>
                    )}
                  </ul>

                  <button
                    type="button"
                    onClick={() => setSelected(advisor)}
                    className="mt-5 self-start inline-flex items-center gap-2 rounded-full bg-deep-navy text-white pl-4 pr-1.5 py-1.5 text-label-md font-bold hover:bg-primary transition-colors cursor-pointer"
                  >
                    View full profile
                    <span className="w-7 h-7 rounded-full bg-safety-yellow text-deep-navy flex items-center justify-center transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </span>
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <ProfileDialog advisor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
