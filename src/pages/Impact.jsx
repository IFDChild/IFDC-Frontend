import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FELLOWSHIP_STATS = [
    { value: '70', label: 'Fellows engaged', note: 'across programme touchpoints' },
    { value: '17', label: 'Districts represented', note: 'across Sri Lanka' },
    { value: '98%', label: 'Would recommend', note: 'the programme to others' },
    { value: '99%', label: 'Plan to continue', note: 'to the next session' }
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



            <Navbar />
            <main className="pt-24 overflow-hidden">

                <section className="relative px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto impact-gradient">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-soft-canary text-on-secondary-container font-label-md">
                                <span className="material-symbols-outlined text-sm" style={{ "fontVariationSettings": "'FILL' 1" }}>verified_user</span>
                                Impact Report 2024
                            </div>
                            <h1 className="font-display-lg text-display-lg text-deep-navy leading-tight">
                                Transforming Lives in the <span className="text-primary-container relative">Digital Frontier<span className="absolute bottom-1 left-0 w-full h-2 bg-safety-yellow/30 -z-10"></span></span>
                            </h1>
                            <p className="text-body-lg text-on-surface-variant max-w-xl">
                                Every child deserves a safe space to explore, learn, and grow online. Discover how our collective efforts are creating a more secure digital future for the next generation.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                                <div className="glass-card p-6 rounded-xl text-center">
                                    <div className="font-headline-lg text-headline-lg text-deep-navy" style={{ "opacity": "1", "transition": "opacity 1s ease-out" }}>500k+</div>
                                    <div className="text-caption text-on-surface-variant uppercase tracking-wider">Children Protected</div>
                                </div>
                                <div className="glass-card p-6 rounded-xl text-center">
                                    <div className="font-headline-lg text-headline-lg text-deep-navy" style={{ "opacity": "1", "transition": "opacity 1s ease-out" }}>1.2M</div>
                                    <div className="text-caption text-on-surface-variant uppercase tracking-wider">Resources Shared</div>
                                </div>
                                <div className="glass-card p-6 rounded-xl text-center col-span-2 md:col-span-1">
                                    <div className="font-headline-lg text-headline-lg text-deep-navy" style={{ "opacity": "0.5", "transition": "opacity 1s ease-out" }}>24/7</div>
                                    <div className="text-caption text-on-surface-variant uppercase tracking-wider">Active Support</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl rotate-3 relative z-10">
                                <img className="w-full h-full object-cover" data-alt="A warm, professional portrait of a diverse group of children and educators smiling together in a brightly lit, modern digital learning lab. The scene is filled with soft natural light, featuring a clean white-space heavy background that aligns with the glassmorphism aesthetic. Subtle tech-accents like glowing screens are visible in the soft-focus background, using the foundation's deep navy and safety yellow color palette." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4mQnEnlIp-KJma1vIHW7n47SFl4n9-3BplWiAF1KyS_u3bSOR__KaThHM7azRFXUhfYfeeDJ0D6fdhmEF9ya92EkrTLu1ZExkhlSgrdCbQYj5-GIUmPqoyPCeQSb6JGozpSkBmGUULQ9-0C04vpPWDTMqidZwJAA8QLXWox8Mc07zz8hIbAOFfSjcHoSQhyipmBFB-PvWzx58EIvMex-GZGyfL4iOrxb_169y_nzIbFIOCRYHgLqK" />
                            </div>

                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-safety-yellow rounded-full -z-0 opacity-20 blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-deep-navy rounded-full -z-0 opacity-10 blur-3xl"></div>
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
                                The IFDC Online Child Protection Advocates &amp; Ambassador Program equips young people and professionals across Sri Lanka with the knowledge and tools to protect children in digital spaces. Through expert-led sessions on online grooming, sextortion, digital parenting, AI risks, and children&rsquo;s digital rights, fellows build practical skills to recognize abuse, support families, and advocate for safer online environments in their own communities.
                            </p>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mt-4">
                                Since its launch, the program has engaged fellows from 17 districts across the island &mdash; students, NGO staff, counsellors, teachers, and social workers alike &mdash; with 98% saying they&rsquo;d recommend it to others and 99% continuing on to further sessions. Beyond the sessions themselves, fellows go on to become community educators, digital counsellors, and advocates, extending child protection awareness far beyond the program itself.
                            </p>
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

                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto text-center">
                    <div className="bg-deep-navy rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-safety-yellow rounded-full -mr-24 -mt-24 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-tint rounded-full -ml-24 -mb-24 blur-3xl"></div>
                        </div>
                        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                            <h2 className="font-display-lg text-display-lg text-white leading-tight">Be Part of the Next Success Story</h2>
                            <p className="text-body-lg text-sky-tint opacity-90">
                                Your support fuels our mission to protect and empower children in the digital world. Join us in making the internet a safer playground for everyone.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <button className="bg-safety-yellow text-deep-navy px-10 py-4 rounded-full font-label-md text-lg hover:scale-105 transition-transform">Start Monthly Donation</button>
                                <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-label-md text-lg hover:bg-white/10 transition-all">Volunteer Your Skills</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />



        </>
    );
}
