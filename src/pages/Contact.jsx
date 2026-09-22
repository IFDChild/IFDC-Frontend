import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Footer from '../components/Footer';

const mailto = (address, subject, body) =>
    `mailto:${address}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

const EMAIL_TOPICS = [
    {
        icon: 'forum',
        title: 'General enquiries',
        text: 'Questions about our work, programmes, resources, or training and workshops.',
        address: 'info@ifdchild.org',
        href: mailto('info@ifdchild.org', 'General enquiry - IFDC website')
    },
    {
        icon: 'shield_person',
        title: 'Raise a concern',
        text: "Concerns about a child's safety online, or about any of our policies or activities.",
        address: 'info@ifdchild.org',
        href: mailto(
            'info@ifdchild.org',
            'Concern - IFDC website',
            'Hello IFDC team,\n\nI would like to raise a concern.\n\nWhat happened:\n\nWhen and where:\n\nHow we can contact you (optional):\n\n'
        ),
        highlight: true
    },
    {
        icon: 'handshake',
        title: 'Partnerships',
        text: 'Organizations interested in working with us on child online safety.',
        address: 'info@ifdchild.org',
        href: mailto('info@ifdchild.org', 'Partnership enquiry - IFDC')
    },
    {
        icon: 'newspaper',
        title: 'Media enquiries',
        text: 'Interviews, press information, and comment on children and digital safety.',
        address: 'info@ifdchild.org',
        href: mailto('info@ifdchild.org', 'Media enquiry - IFDC website')
    }
];

export default function Contact() {
    return (
        <>
            <Seo
              title="Contact us"
              description="Get in touch with IFDC by email about programmes, partnerships, media enquiries or safeguarding concerns."
            />
            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-deep-navy text-white px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/15 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                        <div className="lg:col-span-7">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>forum</span>
                                Get in Touch
                            </span>
                            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mt-6 leading-tight">
                                Contact <span className="text-safety-yellow">Us</span>
                            </h1>
                            <p className="font-body-lg text-body-lg text-white/75 mt-5 max-w-2xl leading-relaxed">
                                Whether you have a question, want to work with us, or have a concern about a child&rsquo;s safety online, email us and our team will get back to you.
                            </p>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-6 md:p-7">
                                <p className="text-[13px] font-semibold uppercase tracking-wider text-white/60">Email us at</p>
                                <a href="mailto:info@ifdchild.org" className="mt-2 flex items-center gap-3 text-[1.35rem] md:text-[1.5rem] font-bold text-white hover:text-safety-yellow transition-colors break-all">
                                    <span className="material-symbols-outlined text-safety-yellow shrink-0" style={{ fontSize: 28 }} aria-hidden="true">mail</span>
                                    info@ifdchild.org
                                </a>
                                <p className="mt-3 text-[0.92rem] text-white/65 leading-relaxed">
                                    We read every message and reply by email.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Email topics */}
                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
                    <div className="max-w-container-max mx-auto">
                        <div className="text-center max-w-2xl mx-auto mb-stack-md">
                            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy">How can we help?</h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto my-5" aria-hidden="true"></span>
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                Choose a topic to open your email app with a ready-made message, or write to us directly.
                            </p>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none p-0 m-0">
                            {EMAIL_TOPICS.map((topic) => (
                                <li key={topic.title} className="h-full">
                                    <article
                                        className={`h-full flex flex-col rounded-3xl p-6 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                                            topic.highlight ? 'bg-safety-yellow border-safety-yellow' : 'bg-white border-outline-variant/30'
                                        }`}
                                    >
                                        <span className={`w-14 h-14 rounded-2xl flex items-center justify-center ${topic.highlight ? 'bg-deep-navy' : 'bg-sky-tint'}`} aria-hidden="true">
                                            <span className={`material-symbols-outlined ${topic.highlight ? 'text-safety-yellow' : 'text-primary'}`} style={{ fontSize: 30 }}>
                                                {topic.icon}
                                            </span>
                                        </span>
                                        <h3 className="font-headline-md text-[1.15rem] font-bold text-deep-navy mt-5">{topic.title}</h3>
                                        <p className={`mt-2 text-[0.92rem] leading-relaxed flex-1 ${topic.highlight ? 'text-deep-navy/80' : 'text-on-surface-variant'}`}>
                                            {topic.text}
                                        </p>
                                        <p className={`mt-4 text-[0.88rem] font-semibold break-all ${topic.highlight ? 'text-deep-navy' : 'text-primary'}`}>
                                            {topic.address}
                                        </p>
                                        <a
                                            href={topic.href}
                                            className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-bold text-[0.92rem] transition-colors ${
                                                topic.highlight
                                                    ? 'bg-deep-navy text-white hover:bg-primary'
                                                    : 'bg-deep-navy/5 text-deep-navy hover:bg-deep-navy hover:text-white'
                                            }`}
                                        >
                                            <span className="material-symbols-outlined" style={{ fontSize: 20 }} aria-hidden="true">send</span>
                                            Email us
                                        </a>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Office + get involved */}
                <section className="px-margin-mobile md:px-margin-desktop pb-stack-lg bg-surface">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-3xl p-7 border border-outline-variant/30 shadow-sm flex gap-5">
                            <span className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center shrink-0" aria-hidden="true">
                                <span className="material-symbols-outlined text-primary" style={{ fontSize: 30 }}>location_city</span>
                            </span>
                            <div>
                                <h2 className="font-headline-md text-[1.15rem] font-bold text-deep-navy">Head Office &middot; Nawala</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                                    110/24, Ranaviru Prabath Cooray Mawatha, Nawala, Sri Lanka
                                </p>
                            </div>
                        </div>

                        <div className="bg-sky-tint/50 rounded-3xl p-7 flex gap-5 items-center">
                            <span className="w-14 h-14 rounded-2xl bg-deep-navy flex items-center justify-center shrink-0" aria-hidden="true">
                                <span className="material-symbols-outlined text-safety-yellow" style={{ fontSize: 30 }}>volunteer_activism</span>
                            </span>
                            <p className="font-body-md text-body-md text-deep-navy">
                                Looking to get involved?{' '}
                                <Link to="/volunteer" className="font-bold underline hover:text-primary">Volunteer</Link>
                                {' '}or{' '}
                                <Link to="/partner" className="font-bold underline hover:text-primary">partner with us</Link>.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
