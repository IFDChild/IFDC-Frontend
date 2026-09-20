import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Footer from '../components/Footer';
import FellowReflections from '../components/FellowReflections';
import FellowshipInterest from '../components/FellowshipInterest';
import fellowshipHero from '../assets/images/Youth Summit.png';

/**
 * Portraits are picked up automatically from src/assets/images/experts/.
 *
 * Name the file after the person's `slug` below — e.g. emmanuel-adinkra.jpg —
 * and it appears on their card with no code change. Accepted extensions:
 * .jpg .jpeg .png .webp. Anyone without a matching file keeps the initials
 * avatar, so the page works with any mix of supplied and missing photos.
 */
const PORTRAITS = import.meta.glob(
    '../assets/images/experts/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP,Jpg,Jpeg,Png}',
    { eager: true, import: 'default' }
);

const portraitFor = (slug) => {
    const entry = Object.entries(PORTRAITS).find(
        ([path]) => path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase() === slug
    );

    return entry ? entry[1] : null;
};
const EXPERTS = [
    {
        name: 'Emmanuel Adinkra',
        role: 'President, Ghana Internet Safety Foundation (GISF), Ghana/USA',
        slug: 'emmanuel-adinkra',
        bio: 'Emmanuel Adinkra is a leading expert in child online protection, cybersecurity, and trust and safety in Africa. As President of the Ghana Internet Safety Foundation and Founder of the Trust and Safety Africa Academy, he works with governments, educators, and international partners to strengthen digital safety, combat online child exploitation, and promote responsible technology use. He is a recognised speaker at international trust and safety conferences and actively contributes to global discussions on cybersecurity, online child protection, and digital resilience. His work focuses on building institutional capacity, strengthening policy frameworks, and empowering communities to create safer digital environments.'
    },
    {
        name: 'Dr. Mandy Sanchez',
        role: 'Director of Programming, Culture Reframed, USA',
        slug: 'mandy-sanchez',
        bio: 'Dr. Mandy Sanchez is an internationally recognised researcher and educator specialising in the impact of pornography, hypersexualised media, and digital culture on children and young people. With more than two decades of experience, she develops trauma-informed, evidence-based programmes that support parents, educators, and communities in promoting healthy digital development. Her research explores the intersection of trauma, gender, violence, and youth wellbeing, with a particular focus on prevention through education and public awareness. She is widely respected for translating complex research into practical resources that help families and professionals safeguard children in the digital age.'
    },
    {
        name: 'Nicolas Makharashvili',
        role: 'Director, Safe Futures Hub: Solutions to End Childhood Sexual Violence, USA',
        slug: 'nicolas-makharashvili',
        bio: 'Nicolas Makharashvili is a public health specialist with extensive experience in preventing violence against children. He has worked closely with global organisations including WHO, UNICEF, the World Bank, and Columbia University to advance evidence-based child protection programmes and strengthen systems that safeguard children from sexual violence. His expertise spans programme design, systems strengthening, implementation science, and cross-sector collaboration to improve child protection outcomes. Through his leadership, he continues to support governments and organisations in translating research into effective policies and sustainable interventions.'
    },
    {
        name: 'Arti Mohan',
        role: 'Lead Technical Specialist, Safe Futures Hub: Solutions to End Childhood Sexual Violence, India',
        slug: 'arti-mohan',
        bio: 'Arti Mohan is a child protection specialist and former lawyer with expertise in restorative justice and trauma-informed practice. She has worked extensively with child survivors of abuse and has trained legal professionals, government agencies, and frontline practitioners on child protection, restorative justice, and survivor-centred approaches. Her work focuses on creating justice systems that prioritise healing, participation, and the rights of children. She also contributes to international research and capacity-building initiatives that strengthen child protection responses around the world.'
    },
    {
        name: 'Zoe de Melo',
        role: 'Thematic Programme Manager – Sexual Exploitation of Children, Terre des Hommes Netherlands',
        slug: 'zoe-de-melo',
        bio: 'Zoe de Melo is a child rights specialist focusing on the prevention of online child sexual exploitation and abuse across Asia. Her work centres on policy reform, social and behaviour change, private sector engagement, child participation, and integrating mental health approaches into child protection programmes. She has supported regional initiatives in South and Southeast Asia that strengthen child safeguarding systems and improve collaboration among governments, civil society, and the private sector. Her expertise bridges policy development, programme implementation, and child-centred advocacy.'
    },
    {
        name: 'Dr. Sumudu Mallawaarachchi',
        role: 'Research Fellow, ARC Centre of Excellence for the Digital Child, University of Wollongong, Australia',
        slug: 'sumudu-mallawaarachchi',
        bio: "Dr. Sumudu Mallawaarachchi is a researcher specialising in children's digital lives and developmental outcomes. Her work examines how digital technologies influence child development, self-regulation, and psychosocial wellbeing through longitudinal and evidence-based research. She has published extensively on digital childhoods and is recognised for her contributions to understanding children's interactions with technology. Her research helps inform policies and practices that support healthy digital development and positive outcomes for children."
    },
    {
        name: 'Anil Raghuvanshi',
        role: 'Founder and President, ChildSafeNet, Nepal',
        slug: 'anil-raghuvanshi',
        bio: "Anil Raghuvanshi is a regional leader in child online protection and digital safety with more than three decades of international development experience. Through ChildSafeNet, he promotes safer internet initiatives, digital literacy, and evidence-based child protection policies across South Asia. He has collaborated with leading international organisations, including UNICEF, ILO, ECPAT International, and Plan International, to strengthen child protection systems and digital safety initiatives. His work continues to inspire regional collaboration on children's rights and online safety."
    },
    {
        name: 'Pratishtha Arora',
        role: 'Chief Executive Officer, Social & Media Matters, India',
        slug: 'pratishtha-arora',
        bio: 'Pratishtha Arora is a digital safety and gender specialist dedicated to creating safer and more inclusive online environments. She develops innovative training programmes and policy initiatives that address online safety, gender equality, and the digital wellbeing of children and young people. Her work focuses on empowering communities through digital literacy and promoting gender-responsive approaches to online safety. She is an advocate for inclusive digital policies that ensure technology remains safe, accessible, and equitable for all.'
    },
    {
        name: 'Dr. M. C. Rasmin',
        role: 'Founder, International Foundation for Digital Child (IFDC), Sri Lanka',
        slug: 'mc-rasmin',
        bio: 'Dr. M. C. Rasmin is a researcher and practitioner specialising in child online safety, digital mental health, internet psychology, and media literacy. His work focuses on preventing online child sexual exploitation, promoting digital wellbeing, and advancing evidence-based policies and interventions that protect children in the digital environment. He has led numerous national and international initiatives on digital rights, child protection, and media literacy while working closely with governments, international organisations, and civil society partners. His research continues to explore the relationship between technology, child development, and mental wellbeing.'
    },
    {
        name: 'Dr. Nayana Perera',
        role: 'Medical Doctor and Clinical Health Psychologist, Sri Lanka',
        slug: 'nayana-perera',
        bio: "Dr. Nayana Perera is a medical doctor and clinical health psychologist with expertise in child health, psychology, and digital mental wellbeing. Her multidisciplinary background enables her to bridge medicine and psychology in supporting children's healthy development and emotional wellbeing in an increasingly digital world. She has extensive experience working with children and families in both clinical and community settings, integrating psychological care with medical practice. Her interests include child development, mental health promotion, and strengthening family resilience in the digital age."
    }
];

const PILLAR_COLOURS = ['#2F6F62', '#A9741F', '#5B4B8A', '#9C3F5E', '#4B5A63'];

const PROGRAMMES = [
    {
        id: 'ocsa-2024',
        title: 'Online Child Safety Advocates Fellowship',
        period: '2024–2025',
        accent: '#2F6F62',
        summary:
            'A two-month virtual programme building a national network of advocates against online child sexual exploitation, combining expert-led learning, mentoring, and community action.',
        stats: [
            { num: '220', cap: 'Applications' },
            { num: '125', cap: 'Participants' },
            { num: '6', cap: 'Sessions' },
            { num: '20', cap: 'Community projects' }
        ],
        pillars: [
            {
                title: 'Understanding online child sexual exploitation',
                body: 'OCSEA, grooming, CSAM, sextortion and live-streamed abuse — global trends, legal frameworks, and prevention.'
            },
            {
                title: "Digital safety and children's rights",
                body: 'Digital rights, privacy, cybersecurity, AI implications, evidence collection, and reporting mechanisms.'
            },
            {
                title: 'Digital mental health and wellbeing',
                body: 'Digital addiction, screen use, online trauma, and building resilience and healthy habits.'
            },
            {
                title: 'Prevention, community engagement, advocacy',
                body: 'Awareness campaigns, engaging parents and educators, and multi-sector safeguarding collaboration.'
            },
            {
                title: 'Leadership and community action',
                body: 'Fellow-led seminars, workshops, DigitalWise Clubs, and campaigns in their own communities.'
            }
        ]
    },
    {
        id: 'admh-2025',
        title: 'Asian Digital Mental Health Advocates Fellowship',
        period: '2025–2026',
        accent: '#5B4B8A',
        summary:
            'A four-month regional fellowship bringing psychologists, educators, researchers, journalists, and policymakers across Asia together to examine technology, mental wellbeing, and child protection.',
        stats: [
            { num: '120+', cap: 'Applications' },
            { num: '4', cap: 'Months' },
            { num: '6', cap: 'Expert sessions' },
            { num: '10', cap: 'Funded fellows' }
        ],
        pillars: [
            {
                title: 'Digital mental health and youth wellbeing',
                body: 'Digital addiction, problematic social media use, gaming disorder, anxiety, sleep, and resilience.'
            },
            {
                title: 'Child online safety and digital protection',
                body: 'Cyberbullying, grooming, exploitation, CSAM and sextortion — prevention and trauma-informed response.'
            },
            {
                title: 'Technology, AI, and digital governance',
                body: 'Persuasive technology, algorithms, AI, platform accountability, and ethical governance.'
            },
            {
                title: 'Prevention, research, and policy',
                body: 'Evidence-based interventions, research contribution, and policy reform across sectors.'
            },
            {
                title: 'Regional leadership and community innovation',
                body: 'Cross-country collaboration, knowledge sharing, and scalable community initiatives across Asia.'
            }
        ]
    }
];

const MODEL_STEPS = [
    {
        stage: 'Learn',
        tag: 'Learning programme',
        description: 'Expert-led virtual seminars, interactive discussions, and one-on-one mentoring alongside fellow peers.',
        chips: ['Seminars', 'Mentoring'],
        color: '#1F6F6B'
    },
    {
        stage: 'Apply',
        tag: 'Knowledge into action',
        description: 'Fellows design and run a community-based initiative on child online safety and digital wellbeing.',
        chips: ['Online safety', 'Digital wellbeing'],
        color: '#C9922E'
    },
    {
        stage: 'Lead',
        tag: 'Leadership and impact',
        description: 'Measurable impact within their own schools, organisations, and communities — and beyond.',
        chips: ['Schools', 'Communities'],
        color: '#B4384A'
    }
];

function FellowshipModel() {
    const ref = useRef(null);
    const [active, setActive] = useState(false);

    // Reveal the connecting track once, when the stepper scrolls into view.
    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion || !('IntersectionObserver' in window)) {
            setActive(true);
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                setActive(true);
                observer.disconnect();
            }
        }, { threshold: 0.4 });

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="fellowship-model" aria-labelledby="fm-heading" className="px-margin-mobile md:px-margin-desktop py-24 bg-[#FBF9F5]">
            <div className="max-w-[1080px] mx-auto">

                <div className="max-w-[62ch] mx-auto mb-16 md:mb-[72px] text-center">
                    <p className="text-[13.5px] font-semibold text-[#1F6F6B] mb-3.5 tracking-[0.01em]">Fellowship model</p>
                    <h2 id="fm-heading" className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy leading-tight">
                        How the fellowship works
                    </h2>
                    <p className="mt-[18px] text-[16.5px] leading-[1.75] text-[#5A6258]">
                        A practice-oriented model that combines academic knowledge with real-world application — fellows learn from experts, apply it in their own communities, and lead lasting change.
                    </p>
                </div>

                <div ref={ref} className="relative">
                    {/* Connecting track: horizontal on desktop, vertical on mobile */}
                    <div className="absolute z-0 bg-[#E1DCCC] top-0 bottom-0 left-[34px] w-0.5 md:top-[34px] md:bottom-auto md:left-[16.66%] md:right-[16.66%] md:w-auto md:h-0.5" aria-hidden="true">
                        {/* Mobile: grows downward */}
                        <div
                            className="md:hidden absolute top-0 left-0 w-full transition-[height] duration-[1100ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none"
                            style={{ background: 'linear-gradient(180deg, #1F6F6B, #C9922E, #B4384A)', height: active ? '100%' : '0%' }}
                        ></div>
                        {/* Desktop: grows left to right */}
                        <div
                            className="hidden md:block absolute top-0 left-0 h-full transition-[width] duration-[1100ms] ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none"
                            style={{ background: 'linear-gradient(90deg, #1F6F6B, #C9922E, #B4384A)', width: active ? '100%' : '0%' }}
                        ></div>
                    </div>

                    <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-[52px] md:gap-0 list-none m-0 p-0">
                        {MODEL_STEPS.map((step, index) => (
                            <li key={step.stage} className="relative z-10 pl-[88px] min-h-[68px] text-left md:pl-5 md:pr-5 md:text-center">
                                <div
                                    className="absolute left-0 top-0 md:static md:mx-auto md:mb-[22px] w-[68px] h-[68px] rounded-full bg-[#FBF9F5] border-2 flex items-center justify-center italic text-[22px] transition-all duration-500 motion-reduce:transition-none"
                                    style={{
                                        borderColor: active ? step.color : '#E1DCCC',
                                        color: active ? step.color : '#5A6258',
                                        transform: active ? 'scale(1.05)' : 'scale(1)',
                                        transitionDelay: `${0.05 + index * 0.3}s`
                                    }}
                                    aria-hidden="true"
                                >
                                    {index + 1}
                                </div>

                                <p className="text-[12.5px] font-semibold text-[#5A6258]">{step.tag}</p>
                                <h3 className="font-headline-md text-[20px] text-deep-navy mt-2 mb-2.5">{step.stage}</h3>
                                <p className="text-[14.5px] leading-[1.7] text-[#5A6258] md:max-w-[30ch] md:mx-auto">{step.description}</p>

                                <div className="mt-4 flex flex-wrap gap-2 justify-start md:justify-center">
                                    {step.chips.map((chip) => (
                                        <span key={chip} className="text-[12.5px] px-[11px] py-[5px] rounded-full border border-[#E1DCCC] text-[#5A6258] bg-white">
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-16 pt-8 border-t border-[#E1DCCC] max-w-[68ch] mx-auto text-center">
                    <p className="text-[15.5px] leading-[1.75] text-[#5A6258]">
                        <strong className="font-semibold text-deep-navy">Practice, not just theory.</strong> Every fellow leaves with more than a certificate — they leave having already run something real, with the skills to keep leading long after the fellowship ends.
                    </p>
                </div>
            </div>
        </section>
    );
}

const initials = (name) =>
    name
        .replace(/^Dr\.\s*/, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();

function ExpertCard({ expert }) {
    const [expanded, setExpanded] = useState(false);
    const photo = portraitFor(expert.slug);

    return (
        <article className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
                {photo ? (
                    <img
                        src={photo}
                        alt={expert.name}
                        className="w-20 h-20 rounded-2xl object-cover object-top shrink-0 ring-2 ring-safety-yellow"
                    />
                ) : (
                    <div
                        className="w-20 h-20 rounded-2xl bg-deep-navy text-safety-yellow flex items-center justify-center shrink-0 font-headline-md text-headline-md ring-2 ring-safety-yellow"
                        aria-hidden="true"
                    >
                        {initials(expert.name)}
                    </div>
                )}
                <div>
                    <h3 className="font-headline-md text-headline-md text-deep-navy leading-snug">{expert.name}</h3>
                    <p className="font-caption text-caption text-primary mt-1">{expert.role}</p>
                </div>
            </div>

            <p
                className={`font-body-md text-body-md text-on-surface-variant leading-relaxed ${expanded ? '' : 'line-clamp-4'}`}
            >
                {expert.bio}
            </p>

            <button
                type="button"
                onClick={() => setExpanded((open) => !open)}
                aria-expanded={expanded}
                className="mt-4 self-start inline-flex items-center gap-1 font-label-md text-label-md text-deep-navy hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-navy rounded"
            >
                {expanded ? 'Show less' : 'Read full bio'}
                <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}>
                    expand_more
                </span>
            </button>
        </article>
    );
}

function ProgrammeCard({ programme }) {
    return (
        <article className="rounded-[2rem] overflow-hidden shadow-xl bg-white">

            {/* Coloured header band */}
            <header className="px-6 md:px-10 py-8 relative overflow-hidden" style={{ backgroundColor: programme.accent }}>
                <span className="absolute -top-16 -right-10 w-56 h-56 bg-white/10 rounded-full pointer-events-none" aria-hidden="true"></span>

                <div className="relative">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-label-md text-label-md tracking-wider">
                        {programme.period}
                    </span>
                    <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mt-4 leading-snug">
                        {programme.title}
                    </h3>
                    <p className="font-body-md text-body-md text-white/85 mt-3 max-w-3xl leading-relaxed">
                        {programme.summary}
                    </p>
                </div>
            </header>

            <div className="p-6 md:p-10">

                {/* Stats */}
                <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {programme.stats.map((stat) => (
                        <div
                            key={stat.cap}
                            className="rounded-xl px-4 py-5 text-center"
                            style={{ backgroundColor: `${programme.accent}14` }}
                        >
                            <dt className="font-display-lg text-headline-md" style={{ color: programme.accent }}>
                                {stat.num}
                            </dt>
                            <dd className="font-caption text-caption text-on-surface-variant mt-1">{stat.cap}</dd>
                        </div>
                    ))}
                </dl>

                {/* Learning pillars */}
                <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mt-10 mb-5">
                    Learning pillars
                </p>

                <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {programme.pillars.map((pillar, index) => {
                        const colour = PILLAR_COLOURS[index % PILLAR_COLOURS.length];

                        return (
                            <li
                                key={pillar.title}
                                className="group flex gap-4 rounded-xl bg-surface p-5 border-l-4 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                                style={{ borderLeftColor: colour }}
                            >
                                <span
                                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-body-md text-white"
                                    style={{ backgroundColor: colour }}
                                    aria-hidden="true"
                                >
                                    {index + 1}
                                </span>
                                <div>
                                    <h4 className="font-headline-md text-body-lg font-bold text-deep-navy leading-snug mb-1">
                                        {pillar.title}
                                    </h4>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                        {pillar.body}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ol>

                <FellowReflections programmeId={programme.id} accent={programme.accent} />
            </div>
        </article>
    );
}

export default function Advocate() {

    return (
        <>
            <Seo
              title="Advocate programmes"
              description="Fellowships and training that prepare young people to lead on online child safety and digital mental health across Asia."
            />
            <Navbar />

            <main className="min-h-screen">

                {/* Hero */}
                <section className="relative px-margin-mobile md:px-margin-desktop py-stack-lg bg-deep-navy text-white overflow-hidden">
                    <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/15 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative max-w-container-max mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                            Fellowship Programs
                        </span>

                        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white leading-tight mt-6 max-w-4xl">
                            Building the Next Generation of <span className="text-safety-yellow">Online Child Safety Leaders</span>
                        </h1>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-10 items-start">
                            <div className="lg:col-span-7 space-y-5">
                                <p className="font-body-lg text-body-lg text-white/80 leading-relaxed">
                                    The IFDC Online Child Safety Advocates Fellowship is the flagship leadership and capacity-building programme of the International Foundation for Digital Child (IFDC). Designed as an annual fellowship, the programme equips emerging leaders, educators, researchers, psychologists, journalists, child protection practitioners, and civil society professionals with the knowledge, skills, and practical experience needed to create safer digital environments for children and young people.
                                </p>
                                <p className="font-body-md text-body-md text-white/70 leading-relaxed">
                                    The fellowship addresses the rapidly evolving challenges of the digital age, including online child sexual exploitation and abuse (OCSEA), child sexual abuse material (CSAM), online grooming, sextortion, the live streaming of child sexual abuse, cyberbullying, harmful online content, digital addiction, AI-enabled risks, and the growing impact of digital technologies on children's mental health and wellbeing. Through expert-led learning, mentoring, and community engagement, the programme empowers participants to become advocates who can influence policy, strengthen community awareness, and implement sustainable child protection initiatives.
                                </p>

                                <div className="flex flex-wrap gap-3 pt-3">
                                    <a
                                        href="#expert-panel"
                                        className="inline-flex items-center gap-2 bg-safety-yellow text-deep-navy font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 shadow-lg"
                                    >
                                        Meet the expert panel
                                        <span className="material-symbols-outlined text-sm">arrow_downward</span>
                                    </a>
                                    <a
                                        href="#programmes"
                                        className="inline-flex items-center gap-2 border border-white/40 text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-200 active:scale-95"
                                    >
                                        Previous programmes
                                    </a>
                                    <a
                                        href="#reflections-ocsa-2024"
                                        className="inline-flex items-center gap-2 border border-white/40 text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-200 active:scale-95"
                                    >
                                        Fellows' reflections
                                    </a>
                                </div>
                            </div>

                            <div className="lg:col-span-5 relative">
                                <span className="absolute -top-4 -right-4 w-2/3 h-2/3 bg-safety-yellow/20 rounded-[1.5rem] hidden sm:block" aria-hidden="true"></span>
                                <figure className="relative rounded-[1.5rem] overflow-hidden ring-1 ring-white/20 shadow-2xl">
                                    <img
                                        src={fellowshipHero}
                                        alt="A participant reading IFDC training material on a mobile phone during a session"
                                        className="w-full h-[240px] sm:h-[300px] object-cover"
                                    />
                                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep-navy/95 to-transparent px-5 pt-12 pb-4">
                                        <span className="font-caption text-caption text-white/85">
                                            Expert-led learning, mentoring, and community action.
                                        </span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                <FellowshipModel />

                {/* Previous programmes */}
                <section id="programmes" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-sky-tint/30 scroll-mt-24">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-stack-md">
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy">Previous Fellowship Programmes</h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto mt-5"></span>
                        </div>

                        <div className="space-y-8 max-w-5xl mx-auto">
                            {PROGRAMMES.map((programme) => (
                                <ProgrammeCard key={programme.id} programme={programme} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Honorary expert panel */}
                <section id="expert-panel" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface scroll-mt-24">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-stack-md">
                            <span className="inline-flex items-center gap-2 bg-deep-navy text-safety-yellow px-4 py-1.5 rounded-full text-label-md font-bold uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                                Honorary Expert Panel
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy mt-5">Our Honorary Expert Panel</h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto my-5"></span>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                The specialists who guide and deliver our fellowship programmes, drawn from Asia, Africa, Australia, Europe, and North America.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {EXPERTS.map((expert) => (
                                <ExpertCard key={expert.name} expert={expert} />
                            ))}
                        </div>
                    </div>
                </section>


                <FellowshipInterest />
            </main>
            <Footer />
        </>
    );
}
