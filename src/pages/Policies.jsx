import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Policy documents live in public/policies/ as PDFs, each with a
 * matching <name>-cover.jpg rendered from page 1.
 * To add one: drop both files in that folder and add an entry here.
 */
const CATEGORIES = [
    { name: 'Governance', icon: 'account_balance', accent: '#0b3d6e' },
    { name: 'Child Protection', icon: 'shield_person', accent: '#2F6F62' },
    { name: 'People & Equality', icon: 'diversity_3', accent: '#5B4B8A' },
    { name: 'Finance & Procurement', icon: 'payments', accent: '#A9741F' }
];

const POLICIES = [
    {
        slug: 'constitution',
        title: 'Constitution',
        description: 'The founding document setting out IFDC’s purpose, structure, and governance.',
        category: 'Governance',
        pages: 9
    },
    {
        slug: 'code-of-conduct',
        title: 'Code of Conduct (CoC)',
        description: 'The standards of behaviour expected of everyone representing IFDC.',
        category: 'Governance',
        pages: 7
    },
    {
        slug: 'conflict-of-interest-policy',
        title: 'Conflict of Interest Policy (CIP)',
        description: 'How conflicts of interest are declared, recorded, and managed.',
        category: 'Governance',
        pages: 6
    },
    {
        slug: 'whistleblowing-policy',
        title: 'Whistleblowing Policy',
        description: 'How to raise concerns about wrongdoing safely, and how those reports are handled.',
        category: 'Governance',
        pages: 5
    },
    {
        slug: 'child-privacy-statement',
        title: 'Child Privacy Statement (CPS)',
        description: 'How we handle children’s personal data and protect their privacy.',
        category: 'Child Protection',
        pages: 4
    },
    {
        slug: 'anti-terrorism-anti-trafficking-policy',
        title: 'Anti-Terrorism & Anti-Trafficking Policy (ATATP)',
        description: 'Our safeguards against terrorism financing and human trafficking.',
        category: 'Child Protection',
        pages: 4
    },
    {
        slug: 'human-resource-policy',
        title: 'Human Resource Policy (HRP)',
        description: 'Recruitment, employment terms, and staff conduct and welfare.',
        category: 'People & Equality',
        pages: 7
    },
    {
        slug: 'gender-equality-policy',
        title: 'Gender Equality Policy (GEP)',
        description: 'Our commitment to gender equality across programmes and the organisation.',
        category: 'People & Equality',
        pages: 5
    },
    {
        slug: 'financial-management-policy',
        title: 'Financial Management Policy (FMP)',
        description: 'Controls governing budgeting, accounting, and financial reporting.',
        category: 'Finance & Procurement',
        pages: 8
    },
    {
        slug: 'procurement-policy',
        title: 'Procurement Policy',
        description: 'How goods and services are sourced, evaluated, and awarded.',
        category: 'Finance & Procurement',
        pages: 6
    },
    {
        slug: 'sole-source-procurement-policy',
        title: 'Sole Source Procurement Policy (SSPP)',
        description: 'When a single supplier may be used without competitive tender.',
        category: 'Finance & Procurement',
        pages: 3
    }
];

const fileFor = (slug) => `/policies/${slug}.pdf`;
const coverFor = (slug) => `/policies/${slug}-cover.jpg`;

const styleFor = (category) =>
    CATEGORIES.find((c) => c.name === category) || CATEGORIES[0];

function PdfPreview({ policy, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] bg-deep-navy/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview of ${policy.title}`}
        >
            <div
                className="relative bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-outline-variant/40 shrink-0">
                    <h2 className="font-headline-md text-body-lg text-primary truncate">{policy.title}</h2>
                    <div className="flex items-center gap-2 shrink-0">
                        <a
                            href={fileFor(policy.slug)}
                            download
                            className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md flex items-center gap-2 hover:bg-deep-navy transition-colors"
                        >
                            <span className="material-symbols-outlined text-sm">download</span>
                            Download
                        </a>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-container transition-colors"
                            aria-label="Close preview"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>
                </div>
                <iframe src={fileFor(policy.slug)} title={`${policy.title} preview`} className="w-full flex-1" />
            </div>
        </div>
    );
}

function PolicyCard({ policy, onPreview, eager }) {
    const { accent } = styleFor(policy.category);

    return (
        <article className="group bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">
            <button
                type="button"
                onClick={() => onPreview(policy)}
                className="relative block w-full aspect-[3/4] bg-surface-container overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-safety-yellow"
                aria-label={`Preview ${policy.title}`}
            >
                <img
                    src={coverFor(policy.slug)}
                    alt=""
                    loading={eager ? 'eager' : 'lazy'}
                    fetchPriority={eager ? 'high' : 'auto'}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/45 transition-colors duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-safety-yellow text-deep-navy font-label-md text-label-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        Preview
                    </span>
                </span>

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-caption font-bold" style={{ color: accent }}>
                    PDF
                </span>
            </button>

            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-headline-md text-body-lg text-deep-navy leading-snug mb-2">{policy.title}</h3>
                <p className="text-on-surface-variant text-body-md leading-relaxed mb-4 flex-grow">{policy.description}</p>

                <div className="flex items-center gap-3 text-caption text-outline mb-4">
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">auto_stories</span>
                        {policy.pages} pages
                    </span>
                </div>

                <div className="flex gap-2 mt-auto">
                    <a
                        href={fileFor(policy.slug)}
                        download
                        className="flex-1 px-4 py-2.5 rounded-lg font-label-md text-label-md text-white flex items-center justify-center gap-2 transition-transform active:scale-95"
                        style={{ backgroundColor: accent }}
                    >
                        <span className="material-symbols-outlined text-sm">download</span>
                        Download
                    </a>
                    <button
                        onClick={() => onPreview(policy)}
                        className="px-4 py-2.5 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-sky-tint transition-colors"
                    >
                        Read
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function Policies() {
    const [preview, setPreview] = useState(null);
    const [activeCategory, setActiveCategory] = useState('All');
    const [query, setQuery] = useState('');

    const counts = useMemo(() => {
        const tally = {};
        POLICIES.forEach((p) => { tally[p.category] = (tally[p.category] || 0) + 1; });
        return tally;
    }, []);

    const visible = useMemo(() => {
        const term = query.trim().toLowerCase();

        return POLICIES.filter((p) => {
            if (activeCategory !== 'All' && p.category !== activeCategory) return false;
            if (!term) return true;
            return `${p.title} ${p.description}`.toLowerCase().includes(term);
        });
    }, [activeCategory, query]);

    let shown = 0;

    return (
        <>
            {preview && <PdfPreview policy={preview} onClose={() => setPreview(null)} />}

            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-deep-navy text-white px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/15 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative max-w-container-max mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                            <span className="material-symbols-outlined text-sm">verified_user</span>
                            Governance &amp; Transparency
                        </span>

                        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mt-6 leading-tight max-w-3xl">
                            Policies &amp; <span className="text-safety-yellow">Governance</span>
                        </h1>

                        <p className="font-body-lg text-body-lg text-white/75 mt-5 max-w-2xl leading-relaxed">
                            The documents that govern how IFDC operates — published in full so partners, funders, and the public can read exactly how we work.
                        </p>

                        <div className="flex flex-wrap gap-8 mt-10">
                            <div>
                                <p className="font-display-lg text-headline-lg text-safety-yellow leading-none">{POLICIES.length}</p>
                                <p className="font-caption text-caption text-white/60 mt-2 uppercase tracking-widest">Documents</p>
                            </div>
                            <div>
                                <p className="font-display-lg text-headline-lg text-safety-yellow leading-none">{CATEGORIES.length}</p>
                                <p className="font-caption text-caption text-white/60 mt-2 uppercase tracking-widest">Areas</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter bar */}
                <section className="sticky top-20 z-40 bg-surface-container-low/95 backdrop-blur border-y border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-4">
                    <div className="max-w-container-max mx-auto flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex flex-wrap gap-2 flex-grow">
                            {['All', ...CATEGORIES.map((c) => c.name)].map((name) => {
                                const active = activeCategory === name;
                                const accent = name === 'All' ? '#0b3d6e' : styleFor(name).accent;

                                return (
                                    <button
                                        key={name}
                                        onClick={() => setActiveCategory(name)}
                                        className={`px-4 py-2 rounded-full font-label-md text-label-md border transition-all duration-200 flex items-center gap-2 ${
                                            active ? 'text-white border-transparent shadow-md' : 'bg-white text-on-surface-variant border-outline-variant/50 hover:bg-sky-tint'
                                        }`}
                                        style={active ? { backgroundColor: accent } : undefined}
                                    >
                                        {name !== 'All' && (
                                            <span className="material-symbols-outlined text-sm">{styleFor(name).icon}</span>
                                        )}
                                        {name}
                                        <span className={`text-caption ${active ? 'text-white/70' : 'text-outline'}`}>
                                            {name === 'All' ? POLICIES.length : counts[name]}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <label className="relative lg:w-72 shrink-0">
                            <span className="sr-only">Search policies</span>
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search policies…"
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-outline-variant/50 bg-white text-body-md focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none"
                            />
                        </label>
                    </div>
                </section>

                {/* Documents */}
                <section className="py-stack-lg px-margin-mobile md:px-margin-desktop">
                    <div className="max-w-container-max mx-auto">

                        {visible.length === 0 && (
                            <p className="text-center py-20 text-on-surface-variant font-body-lg">
                                No policies match your search.
                            </p>
                        )}

                        {CATEGORIES.map((category) => {
                            const items = visible.filter((p) => p.category === category.name);
                            if (items.length === 0) return null;

                            return (
                                <div key={category.name} className="mb-stack-lg">
                                    <div className="flex items-center gap-4 mb-stack-md">
                                        <span
                                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${category.accent}1A`, color: category.accent }}
                                        >
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                                                {category.icon}
                                            </span>
                                        </span>
                                        <div>
                                            <h2 className="font-headline-md text-headline-md text-deep-navy leading-tight">{category.name}</h2>
                                            <p className="font-caption text-caption text-on-surface-variant">
                                                {items.length} {items.length === 1 ? 'document' : 'documents'}
                                            </p>
                                        </div>
                                        <span className="flex-grow h-px" style={{ backgroundColor: `${category.accent}33` }}></span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {items.map((policy) => {
                                            const eager = shown < 4;
                                            shown += 1;
                                            return (
                                                <PolicyCard
                                                    key={policy.slug}
                                                    policy={policy}
                                                    onPreview={setPreview}
                                                    eager={eager}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
