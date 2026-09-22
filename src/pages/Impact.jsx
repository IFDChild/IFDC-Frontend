import React from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Footer from '../components/Footer';
import impactHero from '../assets/images/pexels-cottonbro-7014778.jpg';

/* Headline findings of the fellowship impact analysis, January to April 2025. */
const HEADLINE_STATS = [
    { value: '70+', label: 'Unique individuals reached', icon: 'groups' },
    { value: '204', label: 'Total feedback responses', icon: 'fact_check' },
    { value: '95%+', label: 'Rated sessions good or excellent', icon: 'star' },
    { value: '100%', label: 'Attended 4 of 6 advocate sessions', icon: 'event_available' }
];

const FELLOWSHIP_STATS = [
    { value: '117', label: 'Session evaluations', note: 'Ambassador Programme, Jan–Feb 2025' },
    { value: '92.4%', label: 'Rated excellent or good', note: 'only 2 of 117 rated very poor' },
    { value: '73.8%', label: 'Attended 5 or 6 sessions', note: 'of the Advocates Programme' },
    { value: '68', label: 'Want to be digital counsellors', note: 'the most chosen next step' }
];

const PROGRAMME_TOPICS = [
    { icon: 'psychology_alt', label: 'Online grooming', note: 'Spotting the patterns early' },
    { icon: 'gpp_maybe', label: 'Sextortion', note: 'Responding without blame' },
    { icon: 'family_restroom', label: 'Digital parenting', note: 'Guiding families at home' },
    { icon: 'smart_toy', label: 'AI risks', note: 'New harms, new safeguards' },
    { icon: 'gavel', label: "Children's digital rights", note: 'The rules that protect them' }
];

const FELLOW_BACKGROUNDS = ['Students', 'NGO staff', 'Counsellors', 'Teachers', 'Social workers'];

const FELLOW_OUTCOMES = [
    { icon: 'school', title: 'Community educators', text: 'Running sessions in their own schools and neighbourhoods.' },
    { icon: 'support_agent', title: 'Digital counsellors', text: 'Supporting children and families after online harm.' },
    { icon: 'campaign', title: 'Local advocates', text: 'Pressing for safer online spaces where they live.' }
];

const SESSION_RATINGS = [
    { label: 'Excellent', percent: 56, count: 65, color: '#2F6F62' },
    { label: 'Good', percent: 37, count: 43, color: '#0b3d6e' },
    { label: 'Neutral', percent: 6, count: 7, color: '#A9741F' },
    { label: 'Very poor', percent: 2, count: 2, color: '#9C3F5E' }
];

const FELLOW_PROFILE = [
    { icon: 'cake', label: 'Average age', value: '28 years (range 17–51)' },
    { icon: 'wc', label: 'Gender', value: 'Female 66% · Male 34%' },
    { icon: 'translate', label: 'Languages', value: 'Tamil 55% · Sinhala 29% · English 15%' },
    { icon: 'work', label: 'Occupation', value: '45% students · 21% NGO staff · rest public/private sector & self-employed' },
    { icon: 'location_on', label: 'Top districts', value: 'Ampara, Batticaloa, Colombo, Gampaha' }
];

const LEARNING_COLOURS = ['#2F6F62', '#A9741F', '#5B4B8A', '#9C3F5E', '#0b3d6e'];

const FELLOW_LEARNINGS = [
    {
        title: 'Spotting grooming, sextortion & CSAM warning signs',
        body: 'The most-cited takeaway: recognising the manipulation tactics predators use and the red flags that precede abuse.'
    },
    {
        title: "Sri Lanka's reporting channels & legal protections",
        body: 'Which authorities to contact, how cases are handled, and what the law provides for affected children.'
    },
    {
        title: 'Digital parenting & family conversations',
        body: 'Practical ways to help parents set screen-time limits, use parental controls, and talk openly with children.'
    },
    {
        title: 'Mental-health impact of online abuse',
        body: "How grooming and exploitation affect a child's trust, self-worth, and long-term wellbeing — and where to refer support."
    },
    {
        title: "AI risks and children's digital rights",
        body: 'Emerging AI-enabled threats, policy gaps, and the responsible use of technology to protect children online.'
    }
];


export default function Impact() {
    return (
        <>



            <Seo
              title="Our impact"
              description="Findings from 204 responses across three IFDC fellowship programmes, January to April 2025: reach across 17 districts, session ratings, learning outcomes and what fellows do next."
            />
            <Navbar />
            <main className="pt-24 overflow-hidden">

                <section className="relative px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto impact-gradient">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-soft-canary text-on-secondary-container font-label-md">
                                <span className="material-symbols-outlined text-sm" style={{ "fontVariationSettings": "'FILL' 1" }}>verified_user</span>
                                Impact analysis · January–April 2025
                            </div>
                            <h1 className="font-display-lg text-display-lg text-deep-navy leading-tight">
                                What the <span className="text-primary-container relative">fellowship changed<span className="absolute bottom-1 left-0 w-full h-2 bg-safety-yellow/30 -z-10"></span></span>
                            </h1>
                            <p className="text-body-lg text-on-surface-variant max-w-2xl">
                                Findings from Ambassador Programme evaluations, independent workshop feedback and the Online
                                Child Protection Advocates Programme — 204 responses collected between January and April 2025.
                            </p>

                            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
                                {HEADLINE_STATS.map((stat) => (
                                    <li key={stat.label} className="bg-white/80 border border-outline-variant/30 rounded-2xl p-5 shadow-sm">
                                        <span className="w-10 h-10 rounded-xl bg-safety-yellow/25 text-deep-navy flex items-center justify-center mb-3" aria-hidden="true">
                                            <span className="material-symbols-outlined" style={{ fontSize: 22 }}>{stat.icon}</span>
                                        </span>
                                        <span className="block font-display-lg text-headline-lg text-deep-navy leading-none">{stat.value}</span>
                                        <span className="block font-caption text-caption text-on-surface-variant mt-2 leading-snug">{stat.label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative">
                            <div className="w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl">
                                <img
                                    src={impactHero}
                                    alt="A child taking part in an online session at a desk"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: '60% 40%' }}
                                />
                            </div>
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-safety-yellow rounded-full -z-10 opacity-25 blur-2xl" aria-hidden="true"></div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-deep-navy rounded-full -z-10 opacity-10 blur-3xl" aria-hidden="true"></div>
                        </div>
                    </div>
                </section>

                {/* Fellowship programme impact */}
                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface-container-low">
                    <div className="max-w-container-max mx-auto">

                        <div className="max-w-3xl">
                            <span className="inline-flex items-center gap-2 bg-deep-navy text-safety-yellow px-4 py-1.5 rounded-full text-label-md font-bold uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                                Fellowship Impact
                            </span>
                            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mt-5">
                                Online Child Protection Advocates &amp; Ambassador Program
                            </h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full my-5"></span>
                            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                                Expert-led training that equips young people and professionals across Sri Lanka to recognise
                                online abuse, support families, and speak up for safer digital spaces in their own communities.
                            </p>
                        </div>

                        {/* What fellows learn */}
                        <div className="mt-stack-md">
                            <h3 className="font-label-md text-label-md font-bold uppercase tracking-wider text-deep-navy mb-4">
                                What fellows learn
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                {PROGRAMME_TOPICS.map((topic) => (
                                    <li key={topic.label} className="bg-white rounded-2xl border border-outline-variant/30 shadow-sm p-5">
                                        <span className="w-11 h-11 rounded-xl bg-safety-yellow/25 text-deep-navy flex items-center justify-center mb-3" aria-hidden="true">
                                            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>{topic.icon}</span>
                                        </span>
                                        <span className="block font-headline-md text-[1.02rem] leading-snug text-deep-navy">{topic.label}</span>
                                        <span className="block font-caption text-caption text-on-surface-variant mt-1.5">{topic.note}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Who takes part */}
                        <div className="mt-6 bg-deep-navy rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
                            <p className="flex items-baseline gap-3 shrink-0">
                                <span className="font-display-lg text-headline-lg text-safety-yellow leading-none">17</span>
                                <span className="font-label-md text-label-md text-white/85">districts<br />across the island</span>
                            </p>
                            <span className="hidden md:block w-px self-stretch bg-white/15" aria-hidden="true"></span>
                            <ul className="flex flex-wrap gap-2.5">
                                {FELLOW_BACKGROUNDS.map((background) => (
                                    <li key={background} className="border border-white/25 text-white/90 rounded-full px-4 py-1.5 font-caption text-caption">
                                        {background}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Where fellows go next */}
                        <div className="mt-6">
                            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                                <h3 className="font-label-md text-label-md font-bold uppercase tracking-wider text-deep-navy">
                                    Where fellows go next
                                </h3>
                                <p className="font-caption text-caption text-on-surface-variant">
                                    38 fellows have volunteered to organise the next cohort
                                </p>
                            </div>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {FELLOW_OUTCOMES.map((outcome) => (
                                    <li key={outcome.title} className="relative bg-white rounded-2xl border border-outline-variant/30 shadow-sm p-6 pl-7 overflow-hidden">
                                        <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-safety-yellow" aria-hidden="true"></span>
                                        <span className="material-symbols-outlined text-deep-navy" style={{ fontSize: 26 }} aria-hidden="true">{outcome.icon}</span>
                                        <span className="block font-headline-md text-[1.08rem] text-deep-navy mt-2">{outcome.title}</span>
                                        <span className="block font-body-md text-body-md text-on-surface-variant leading-relaxed mt-1.5">{outcome.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Headline numbers */}
                        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-stack-md">
                            {FELLOWSHIP_STATS.map((stat) => (
                                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-outline-variant/30 shadow-sm">
                                    <dt className="font-display-lg text-headline-lg text-deep-navy leading-none">{stat.value}</dt>
                                    <dd className="mt-3">
                                        <span className="block font-label-md text-label-md text-deep-navy">{stat.label}</span>
                                        <span className="block font-caption text-caption text-on-surface-variant mt-1">{stat.note}</span>
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        {/* Ratings + profile */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

                            <div className="bg-white rounded-2xl p-7 border border-outline-variant/30 shadow-sm">
                                <h3 className="font-headline-md text-headline-md text-deep-navy mb-1">How fellows rated session quality</h3>
                                <p className="font-caption text-caption text-on-surface-variant mb-6">
                                    Based on 117 Ambassador Program evaluations, Jan&ndash;Apr 2025
                                </p>

                                <ul className="space-y-4">
                                    {SESSION_RATINGS.map((rating) => (
                                        <li key={rating.label}>
                                            <div className="flex items-baseline justify-between mb-1.5">
                                                <span className="font-label-md text-label-md text-deep-navy">{rating.label}</span>
                                                <span className="font-caption text-caption text-on-surface-variant">
                                                    {rating.percent}% &middot; {rating.count}
                                                </span>
                                            </div>
                                            <div className="h-2.5 rounded-full bg-surface-container overflow-hidden">
                                                <div
                                                    className="h-full rounded-full"
                                                    style={{ width: `${rating.percent}%`, backgroundColor: rating.color }}
                                                ></div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <p className="font-body-md text-body-md text-on-surface-variant mt-6 pt-5 border-t border-outline-variant/40 leading-relaxed">
                                    Across 47 workshop feedback responses, 92% rated the content relevant to very relevant and 100% said they&rsquo;d recommend it. Fellows attended an average of 5 of 6 sessions &mdash; evidence of sustained, not one-off, engagement.
                                </p>
                            </div>

                            <div className="bg-deep-navy rounded-2xl p-7 text-white relative overflow-hidden">
                                <span className="absolute -top-20 -right-16 w-64 h-64 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true"></span>
                                <div className="relative">
                                    <h3 className="font-headline-md text-headline-md text-white mb-1">Who our fellows are</h3>
                                    <p className="font-caption text-caption text-white/60 mb-6">Demographic profile, 2025</p>

                                    <dl className="space-y-5">
                                        {FELLOW_PROFILE.map((row) => (
                                            <div key={row.label} className="flex gap-4">
                                                <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                                                    <span className="material-symbols-outlined text-safety-yellow text-xl">{row.icon}</span>
                                                </span>
                                                <div>
                                                    <dt className="font-caption text-caption text-white/60 uppercase tracking-widest">{row.label}</dt>
                                                    <dd className="font-body-md text-body-md text-white/90 mt-0.5">{row.value}</dd>
                                                </div>
                                            </div>
                                        ))}
                                    </dl>
                                </div>
                            </div>
                        </div>

                        {/* What fellows learned */}
                        <div className="mt-6 bg-white rounded-2xl p-7 md:p-9 border border-outline-variant/30 shadow-sm">
                            <h3 className="font-headline-md text-headline-md text-deep-navy mb-1">What fellows say they learned</h3>
                            <p className="font-caption text-caption text-on-surface-variant mb-7">
                                Most-cited takeaways from open-ended evaluation responses
                            </p>

                            <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                                {FELLOW_LEARNINGS.map((item, index) => (
                                    <li key={item.title} className="flex gap-4">
                                        <span
                                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 font-bold text-body-md text-white"
                                            style={{ backgroundColor: LEARNING_COLOURS[index % LEARNING_COLOURS.length] }}
                                            aria-hidden="true"
                                        >
                                            {index + 1}
                                        </span>
                                        <div>
                                            <h4 className="font-headline-md text-body-lg font-bold text-deep-navy leading-snug mb-1">{item.title}</h4>
                                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item.body}</p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <p className="font-caption text-caption text-on-surface-variant mt-6">
                            Source: IFDC Contact Information, Evaluation &amp; Feedback, and Workshop Feedback response forms, 2025 (n=117 and n=42).
                        </p>
                    </div>
                </section>

            </main>

            <Footer />



        </>
    );
}
