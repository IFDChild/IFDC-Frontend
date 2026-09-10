import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import fellowshipHero from '../assets/images/Youth Summit.png';

/**
 * Honorary Expert Panel.
 *
 * To add a portrait:
 *   1. Drop the file into  src/assets/images/experts/
 *   2. Import it at the top of this file, e.g.
 *        import emmanuelAdinkra from '../assets/images/experts/emmanuel-adinkra.jpg';
 *   3. Set  photo: emmanuelAdinkra  on the matching entry below.
 * Entries with photo: null fall back to an initials avatar, so the page
 * works with any mix of photos supplied and still missing.
 */
const EXPERTS = [
    {
        name: 'Emmanuel Adinkra',
        role: 'President, Ghana Internet Safety Foundation (GISF), Ghana/USA',
        photo: null,
        bio: 'Emmanuel Adinkra is a leading expert in child online protection, cybersecurity, and trust and safety in Africa. As President of the Ghana Internet Safety Foundation and Founder of the Trust and Safety Africa Academy, he works with governments, educators, and international partners to strengthen digital safety, combat online child exploitation, and promote responsible technology use. He is a recognised speaker at international trust and safety conferences and actively contributes to global discussions on cybersecurity, online child protection, and digital resilience. His work focuses on building institutional capacity, strengthening policy frameworks, and empowering communities to create safer digital environments.'
    },
    {
        name: 'Dr. Mandy Sanchez',
        role: 'Director of Programming, Culture Reframed, USA',
        photo: null,
        bio: 'Dr. Mandy Sanchez is an internationally recognised researcher and educator specialising in the impact of pornography, hypersexualised media, and digital culture on children and young people. With more than two decades of experience, she develops trauma-informed, evidence-based programmes that support parents, educators, and communities in promoting healthy digital development. Her research explores the intersection of trauma, gender, violence, and youth wellbeing, with a particular focus on prevention through education and public awareness. She is widely respected for translating complex research into practical resources that help families and professionals safeguard children in the digital age.'
    },
    {
        name: 'Nicolas Makharashvili',
        role: 'Director, Safe Futures Hub: Solutions to End Childhood Sexual Violence, USA',
        photo: null,
        bio: 'Nicolas Makharashvili is a public health specialist with extensive experience in preventing violence against children. He has worked closely with global organisations including WHO, UNICEF, the World Bank, and Columbia University to advance evidence-based child protection programmes and strengthen systems that safeguard children from sexual violence. His expertise spans programme design, systems strengthening, implementation science, and cross-sector collaboration to improve child protection outcomes. Through his leadership, he continues to support governments and organisations in translating research into effective policies and sustainable interventions.'
    },
    {
        name: 'Arti Mohan',
        role: 'Lead Technical Specialist, Safe Futures Hub: Solutions to End Childhood Sexual Violence, India',
        photo: null,
        bio: 'Arti Mohan is a child protection specialist and former lawyer with expertise in restorative justice and trauma-informed practice. She has worked extensively with child survivors of abuse and has trained legal professionals, government agencies, and frontline practitioners on child protection, restorative justice, and survivor-centred approaches. Her work focuses on creating justice systems that prioritise healing, participation, and the rights of children. She also contributes to international research and capacity-building initiatives that strengthen child protection responses around the world.'
    },
    {
        name: 'Zoe de Melo',
        role: 'Thematic Programme Manager – Sexual Exploitation of Children, Terre des Hommes Netherlands',
        photo: null,
        bio: 'Zoe de Melo is a child rights specialist focusing on the prevention of online child sexual exploitation and abuse across Asia. Her work centres on policy reform, social and behaviour change, private sector engagement, child participation, and integrating mental health approaches into child protection programmes. She has supported regional initiatives in South and Southeast Asia that strengthen child safeguarding systems and improve collaboration among governments, civil society, and the private sector. Her expertise bridges policy development, programme implementation, and child-centred advocacy.'
    },
    {
        name: 'Dr. Sumudu Mallawaarachchi',
        role: 'Research Fellow, ARC Centre of Excellence for the Digital Child, University of Wollongong, Australia',
        photo: null,
        bio: "Dr. Sumudu Mallawaarachchi is a researcher specialising in children's digital lives and developmental outcomes. Her work examines how digital technologies influence child development, self-regulation, and psychosocial wellbeing through longitudinal and evidence-based research. She has published extensively on digital childhoods and is recognised for her contributions to understanding children's interactions with technology. Her research helps inform policies and practices that support healthy digital development and positive outcomes for children."
    },
    {
        name: 'Anil Raghuvanshi',
        role: 'Founder and President, ChildSafeNet, Nepal',
        photo: null,
        bio: "Anil Raghuvanshi is a regional leader in child online protection and digital safety with more than three decades of international development experience. Through ChildSafeNet, he promotes safer internet initiatives, digital literacy, and evidence-based child protection policies across South Asia. He has collaborated with leading international organisations, including UNICEF, ILO, ECPAT International, and Plan International, to strengthen child protection systems and digital safety initiatives. His work continues to inspire regional collaboration on children's rights and online safety."
    },
    {
        name: 'Pratishtha Arora',
        role: 'Chief Executive Officer, Social & Media Matters, India',
        photo: null,
        bio: 'Pratishtha Arora is a digital safety and gender specialist dedicated to creating safer and more inclusive online environments. She develops innovative training programmes and policy initiatives that address online safety, gender equality, and the digital wellbeing of children and young people. Her work focuses on empowering communities through digital literacy and promoting gender-responsive approaches to online safety. She is an advocate for inclusive digital policies that ensure technology remains safe, accessible, and equitable for all.'
    },
    {
        name: 'Dr. M. C. Rasmin',
        role: 'Founder, International Foundation for Digital Child (IFDC), Sri Lanka',
        photo: null,
        bio: 'Dr. M. C. Rasmin is a researcher and practitioner specialising in child online safety, digital mental health, internet psychology, and media literacy. His work focuses on preventing online child sexual exploitation, promoting digital wellbeing, and advancing evidence-based policies and interventions that protect children in the digital environment. He has led numerous national and international initiatives on digital rights, child protection, and media literacy while working closely with governments, international organisations, and civil society partners. His research continues to explore the relationship between technology, child development, and mental wellbeing.'
    },
    {
        name: 'Dr. Nayana Perera',
        role: 'Medical Doctor and Clinical Health Psychologist, Sri Lanka',
        photo: null,
        bio: "Dr. Nayana Perera is a medical doctor and clinical health psychologist with expertise in child health, psychology, and digital mental wellbeing. Her multidisciplinary background enables her to bridge medicine and psychology in supporting children's healthy development and emotional wellbeing in an increasingly digital world. She has extensive experience working with children and families in both clinical and community settings, integrating psychological care with medical practice. Her interests include child development, mental health promotion, and strengthening family resilience in the digital age."
    }
];

const PROGRAMMES = [
    {
        id: 'ocsa-2024',
        title: 'Online Child Safety Advocates Fellowship',
        period: '2024–2025',
        intro: [
            "The inaugural Online Child Safety Advocates Fellowship was designed to build a national network of advocates equipped to prevent online child sexual exploitation and promote children's digital wellbeing. The two-month virtual programme combined expert-led learning, practical mentoring, and community action, providing participants with both technical knowledge and leadership skills to address emerging online risks.",
            'The fellowship attracted nearly 220 applications, from which 125 participants were selected to complete six mandatory online learning sessions. Upon successful completion of the programme, 20 fellows were selected to implement voluntary community projects, including school seminars, awareness campaigns, youth workshops, film screenings, performing arts initiatives, and the establishment of DigitalWise community clubs.'
        ],
        stats: [
            { num: '220', cap: 'Applications received' },
            { num: '125', cap: 'Participants selected' },
            { num: '6', cap: 'Mandatory sessions' },
            { num: '20', cap: 'Community projects' }
        ],
        pillars: [
            {
                title: 'Understanding Online Child Sexual Exploitation',
                body: 'Participants developed a comprehensive understanding of online child sexual exploitation and abuse (OCSEA), including online grooming, child sexual abuse material (CSAM), sextortion, the live streaming of child sexual abuse, and emerging forms of technology-facilitated abuse. The programme explored global trends, offender behaviour, legal frameworks, reporting pathways, and evidence-based prevention strategies.'
            },
            {
                title: "Digital Safety, Children's Rights, and Responsible Technology Use",
                body: "The fellowship strengthened participants' understanding of children's digital rights, online privacy, cybersecurity, digital hygiene, safe internet practices, and responsible technology use. Participants also examined the implications of artificial intelligence, digital evidence collection, reporting mechanisms, and strategies for protecting children in increasingly complex digital environments."
            },
            {
                title: 'Digital Mental Health and Child Wellbeing',
                body: "Recognising the growing psychological impact of technology, the programme explored digital addiction, excessive screen use, online trauma, harmful digital experiences, and the relationship between internet use and children's mental health. Fellows learned practical approaches to strengthening resilience, promoting healthy digital habits, and supporting the psychological wellbeing of children affected by online harms."
            },
            {
                title: 'Prevention, Community Engagement, and Advocacy',
                body: 'Participants gained practical skills to develop awareness campaigns, engage parents, educators, and communities, and advocate for stronger child protection systems. The fellowship introduced evidence-based prevention strategies and emphasised multi-sector collaboration to strengthen safeguarding mechanisms at family, school, community, and policy levels.'
            },
            {
                title: 'Leadership and Community Action',
                body: 'The fellowship encouraged participants to become local champions for online child safety by designing and implementing voluntary projects within their communities. Fellows organised seminars, workshops, youth engagement activities, DigitalWise Clubs, awareness campaigns, and creative initiatives that promoted safer and healthier digital environments while expanding the national movement for child online protection.'
            }
        ]
    },
    {
        id: 'admh-2025',
        title: 'Asian Digital Mental Health Advocates Fellowship',
        period: '2025–2026',
        intro: [
            'Building on the success of the inaugural programme, IFDC launched the Asian Digital Mental Health Advocates Fellowship to strengthen regional collaboration on digital mental health and child online safety across Asia.',
            'The four-month virtual fellowship brought together psychologists, educators, researchers, journalists, child protection professionals, policymakers, and civil society leaders to examine the relationship between technology, mental wellbeing, and child protection through a multidisciplinary lens. Participants engaged in six expert-led learning sessions delivered by internationally recognised specialists from Asia, Africa, Australia, Europe, and North America.',
            'The programme attracted more than 120 applications, from which participants completed six mandatory learning sessions before submitting concept proposals for community initiatives. Following the evaluation process, 10 fellows were selected to implement small-scale projects addressing digital mental health challenges among children and young people in their respective communities.'
        ],
        stats: [
            { num: '120+', cap: 'Applications received' },
            { num: '4', cap: 'Months, virtual' },
            { num: '6', cap: 'Expert-led sessions' },
            { num: '10', cap: 'Fellows funded' }
        ],
        pillars: [
            {
                title: 'Digital Mental Health and Youth Wellbeing',
                body: 'Participants explored the psychological impact of digital technologies on children and young people, including digital addiction, problematic social media use, gaming disorder, loneliness, anxiety, depression, sleep disruption, and healthy digital habits. The fellowship promoted evidence-based approaches to strengthening resilience and supporting positive mental wellbeing.'
            },
            {
                title: 'Child Online Safety and Digital Protection',
                body: 'The programme examined the evolving landscape of online child protection, including cyberbullying, online grooming, child sexual exploitation, CSAM, sextortion, and the live streaming of child sexual abuse. Participants explored prevention strategies, safeguarding mechanisms, and trauma-informed approaches to protecting children online.'
            },
            {
                title: 'Technology, AI, and Digital Governance',
                body: "Participants developed an understanding of persuasive technology, algorithmic systems, artificial intelligence, platform accountability, digital rights, and ethical technology governance. Discussions highlighted how emerging technologies influence children's behaviour, safety, and overall wellbeing."
            },
            {
                title: 'Prevention, Research, and Policy',
                body: "The fellowship strengthened participants' capacity to design evidence-based interventions, contribute to research, advocate for policy reform, and promote collaborative approaches involving education, health, child protection, and technology sectors. Participants learned how research and evidence can influence national and regional responses to digital challenges."
            },
            {
                title: 'Regional Leadership and Community Innovation',
                body: 'The fellowship fostered a growing network of Digital Mental Health Advocates across Asia by encouraging cross-country collaboration, knowledge sharing, and community innovation. Fellows translated their learning into practical initiatives that promoted digital wellbeing, strengthened local partnerships, and demonstrated scalable approaches to addressing digital mental health within diverse cultural contexts.'
            }
        ]
    }
];

const MODEL_INPUTS = [
    { title: 'Virtual seminars', sub: 'Expert-led' },
    { title: 'Discussions', sub: 'Interactive' },
    { title: 'Mentoring', sub: 'One-on-one guidance' },
    { title: 'Collaborative', sub: 'Peer learning' }
];

const MODEL_FOCUS = ['Child online safety', 'Digital wellbeing', 'Digital mental health'];

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

    return (
        <article className="bg-white rounded-2xl border border-outline-variant/30 p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
                {expert.photo ? (
                    <img
                        src={expert.photo}
                        alt={expert.name}
                        className="w-20 h-20 rounded-2xl object-cover shrink-0 ring-2 ring-safety-yellow"
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

function ProgrammeAccordion({ programme, isOpen, onToggle }) {
    return (
        <div className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-safety-yellow shadow-xl' : 'border-outline-variant/30 shadow-sm'}`}>
            <h3>
                <button
                    type="button"
                    onClick={onToggle}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${programme.id}`}
                    id={`accordion-${programme.id}`}
                    className="w-full flex items-center justify-between gap-4 text-left p-6 md:p-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-navy rounded-2xl"
                >
                    <span>
                        <span className="block font-label-md text-label-md text-primary uppercase tracking-wider mb-1">
                            {programme.period}
                        </span>
                        <span className="block font-headline-md text-headline-md text-deep-navy leading-snug">
                            {programme.title}
                        </span>
                    </span>
                    <span
                        className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-safety-yellow rotate-180' : 'bg-sky-tint'}`}
                    >
                        <span className="material-symbols-outlined text-deep-navy">expand_more</span>
                    </span>
                </button>
            </h3>

            <div
                id={`panel-${programme.id}`}
                role="region"
                aria-labelledby={`accordion-${programme.id}`}
                hidden={!isOpen}
                className="px-6 md:px-8 pb-8"
            >
                <div className="space-y-4 border-t border-outline-variant/40 pt-6">
                    {programme.intro.map((para) => (
                        <p key={para.slice(0, 40)} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                            {para}
                        </p>
                    ))}
                </div>

                <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    {programme.stats.map((stat) => (
                        <div key={stat.cap} className="bg-sky-tint/40 rounded-xl px-4 py-5 text-center">
                            <dt className="font-display-lg text-headline-md text-deep-navy">{stat.num}</dt>
                            <dd className="font-caption text-caption text-on-surface-variant mt-1">{stat.cap}</dd>
                        </div>
                    ))}
                </dl>

                <h4 className="font-headline-md text-headline-md text-deep-navy mt-10 mb-5">Fellowship Learning Pillars</h4>
                <ol className="divide-y divide-outline-variant/40 border-t border-outline-variant/40">
                    {programme.pillars.map((pillar, index) => (
                        <li key={pillar.title} className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 py-6">
                            <div className="sm:col-span-1">
                                <span className="font-display-lg text-headline-md text-safety-yellow leading-none">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="sm:col-span-11">
                                <h5 className="font-headline-md text-headline-md text-deep-navy mb-2 leading-snug">{pillar.title}</h5>
                                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{pillar.body}</p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default function Advocate() {
    const [openProgramme, setOpenProgramme] = useState(PROGRAMMES[0].id);

    return (
        <>
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

                {/* Fellowship model */}
                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-stack-md">
                            <span className="inline-flex items-center gap-2 bg-deep-navy text-safety-yellow px-4 py-1.5 rounded-full text-label-md font-bold uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                                Our Fellowship Model
                            </span>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto my-6"></span>
                            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                The IFDC fellowship follows a practice-oriented learning model that combines academic knowledge with real-world application. Participants engage in expert-led virtual seminars, interactive discussions, mentoring, and collaborative learning while developing practical solutions for challenges affecting children in the digital environment.
                            </p>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4">
                                Beyond completing the learning programme, fellows are encouraged to translate knowledge into action by designing and implementing community-based initiatives that promote child online safety, digital wellbeing, and digital mental health. This approach enables fellows to build leadership skills while creating measurable impact within their own schools, organisations, and communities.
                            </p>
                        </div>

                        {/* Practice-oriented learning model */}
                        <div className="bg-surface-container-low rounded-[2rem] p-6 md:p-10">
                            <p className="text-center font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-8">
                                Practice-oriented learning model
                            </p>

                            <div className="flex flex-col items-center gap-0">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                                    {MODEL_INPUTS.map((item) => (
                                        <div key={item.title} className="bg-sky-tint/60 border border-primary/20 rounded-xl px-5 py-4 text-center">
                                            <p className="font-headline-md text-body-lg font-bold text-deep-navy">{item.title}</p>
                                            <p className="font-caption text-caption text-primary mt-1">{item.sub}</p>
                                        </div>
                                    ))}
                                </div>

                                <span className="w-0.5 h-8 bg-outline-variant" aria-hidden="true"></span>

                                <div className="w-full max-w-xl bg-deep-navy rounded-xl px-6 py-5 text-center shadow-lg">
                                    <p className="font-headline-md text-headline-md text-white">Learning programme</p>
                                    <p className="font-body-md text-body-md text-white/70 mt-1">Academic knowledge meets practice</p>
                                </div>

                                <span className="w-0.5 h-6 bg-outline-variant" aria-hidden="true"></span>
                                <p className="font-caption text-caption text-on-surface-variant italic py-1">Translating knowledge into action</p>
                                <span className="w-0.5 h-6 bg-outline-variant" aria-hidden="true"></span>

                                <div className="w-full max-w-xl bg-safety-yellow rounded-xl px-6 py-5 text-center shadow-lg">
                                    <p className="font-headline-md text-headline-md text-deep-navy">Community-based initiatives</p>
                                    <p className="font-body-md text-body-md text-deep-navy/70 mt-1">Designed and implemented by fellows</p>
                                </div>

                                <span className="w-0.5 h-8 bg-outline-variant" aria-hidden="true"></span>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                                    {MODEL_FOCUS.map((focus) => (
                                        <div key={focus} className="bg-white border border-outline-variant/40 rounded-xl px-5 py-4 text-center">
                                            <p className="font-body-lg text-body-lg font-semibold text-deep-navy">{focus}</p>
                                        </div>
                                    ))}
                                </div>

                                <span className="w-0.5 h-8 bg-outline-variant" aria-hidden="true"></span>

                                <div className="w-full max-w-2xl bg-white border-2 border-deep-navy rounded-xl px-6 py-5 text-center">
                                    <p className="font-headline-md text-headline-md text-deep-navy">Leadership skills and measurable impact</p>
                                    <p className="font-body-md text-body-md text-on-surface-variant mt-1">Within schools, organisations, communities</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Previous programmes */}
                <section id="programmes" className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-sky-tint/30 scroll-mt-24">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-stack-md">
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy">Previous Fellowship Programmes</h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto mt-5"></span>
                        </div>

                        <div className="space-y-5 max-w-5xl mx-auto">
                            {PROGRAMMES.map((programme) => (
                                <ProgrammeAccordion
                                    key={programme.id}
                                    programme={programme}
                                    isOpen={openProgramme === programme.id}
                                    onToggle={() =>
                                        setOpenProgramme((current) => (current === programme.id ? null : programme.id))
                                    }
                                />
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

                {/* Join form */}
                <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative" id="advocate-form">
                    <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-secondary-fixed/10 rounded-tr-[100px] -z-10 hidden lg:block"></div>

                    <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 md:p-12 ambient-glow">
                        <div className="mb-10 text-center">
                            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-3">Join the Advocacy Network</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Fill out the form below to become an official IFDC Advocate.</p>
                        </div>

                        <form action="#" className="space-y-6" method="POST">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block font-label-md text-label-md text-deep-navy" htmlFor="firstName">First Name</label>
                                    <input className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="firstName" name="firstName" required type="text" placeholder="Jane" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block font-label-md text-label-md text-deep-navy" htmlFor="lastName">Last Name</label>
                                    <input className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="lastName" name="lastName" required type="text" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block font-label-md text-label-md text-deep-navy" htmlFor="email">Email Address</label>
                                <input className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="email" name="email" required type="email" placeholder="jane@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="block font-label-md text-label-md text-deep-navy" htmlFor="interest">Area of Interest</label>
                                <select className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors appearance-none cursor-pointer" id="interest" name="interest">
                                    <option value="policy">Policy &amp; Legislative Reform</option>
                                    <option value="education">Community Education</option>
                                    <option value="digital">Digital Campaigns</option>
                                    <option value="general">General Advocacy</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block font-label-md text-label-md text-deep-navy" htmlFor="message">Why do you want to join?</label>
                                <textarea className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md p-4 transition-colors" id="message" name="message" rows="4" placeholder="Share your motivation..."></textarea>
                            </div>

                            <div className="pt-6 text-center">
                                <button className="w-full md:w-auto px-10 py-3.5 rounded-full bg-deep-navy text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all duration-200 shadow-md inline-flex items-center justify-center" type="button">
                                    Submit Application
                                    <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
