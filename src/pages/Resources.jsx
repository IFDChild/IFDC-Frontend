import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import heroImage from '../assets/images/childwith Tab.jpg';
import { fileUrl, getResources, registerResourceDownload } from '../lib/api';

/** Icon + accent per audience; unknown audiences fall back to the first. */
const AUDIENCE_STYLE = {
    'Parents & Caregivers': { icon: 'family_restroom', accent: '#2F6F62' },
    'Educators & Schools': { icon: 'school', accent: '#A9741F' },
    'Policymakers & Research': { icon: 'gavel', accent: '#5B4B8A' },
    'Journalists & Media': { icon: 'newspaper', accent: '#9C3F5E' },
    'Children & Young People': { icon: 'child_care', accent: '#0b3d6e' }
};

const styleFor = (audience) =>
    AUDIENCE_STYLE[audience] || { icon: 'folder', accent: '#4B5A63' };

const formatBytes = (bytes) => {
    if (!bytes || bytes < 1024) return `${bytes || 0} B`;
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

function PdfPreview({ resource, onClose }) {
    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') onClose(); };
        document.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const href = fileUrl(resource.file_url);

    return (
        <div
            className="fixed inset-0 z-[100] bg-deep-navy/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview of ${resource.title}`}
        >
            <div
                className="relative bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-outline-variant/40 shrink-0">
                    <h2 className="font-headline-md text-body-lg text-primary truncate">{resource.title}</h2>

                    <div className="flex items-center gap-2 shrink-0">
                        <a
                            href={href}
                            download
                            onClick={() => registerResourceDownload(resource.id)}
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

                <iframe src={href} title={`${resource.title} preview`} className="w-full flex-1" />
            </div>
        </div>
    );
}

function ResourceCard({ resource, onPreview, eager = false }) {
    const href = fileUrl(resource.file_url);
    const thumb = resource.thumbnail_url ? fileUrl(resource.thumbnail_url) : null;
    const { icon, accent } = styleFor(resource.audience);

    return (
        <article className="group bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col">

            {/* Cover */}
            <button
                type="button"
                onClick={() => onPreview(resource)}
                className="relative block w-full aspect-[3/4] bg-surface-container overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-safety-yellow"
                aria-label={`Preview ${resource.title}`}
            >
                {thumb ? (
                    <img
                        src={thumb}
                        alt=""
                        loading={eager ? 'eager' : 'lazy'}
                        fetchPriority={eager ? 'high' : 'auto'}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <span className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: `${accent}14` }}>
                        <span className="material-symbols-outlined text-6xl" style={{ color: accent }}>picture_as_pdf</span>
                    </span>
                )}

                {/* Hover overlay */}
                <span className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/45 transition-colors duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-safety-yellow text-deep-navy font-label-md text-label-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                        Preview
                    </span>
                </span>

                {/* Format chip */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 text-caption font-bold tracking-wide" style={{ color: accent }}>
                    PDF
                </span>

                {resource.category && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-caption font-semibold text-white" style={{ backgroundColor: accent }}>
                        {resource.category}
                    </span>
                )}
            </button>

            {/* Body */}
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-headline-md text-body-lg text-deep-navy leading-snug mb-2">{resource.title}</h3>

                {resource.description && (
                    <p className="text-on-surface-variant text-body-md leading-relaxed mb-4 flex-grow line-clamp-3">
                        {resource.description}
                    </p>
                )}

                <div className="flex items-center gap-3 text-caption text-outline mb-4">
                    <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm" style={{ color: accent }}>{icon}</span>
                        {formatBytes(resource.file_size)}
                    </span>
                    {resource.downloads > 0 && (
                        <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">download</span>
                            {resource.downloads}
                        </span>
                    )}
                </div>

                <div className="flex gap-2 mt-auto">
                    <a
                        href={href}
                        download
                        onClick={() => registerResourceDownload(resource.id)}
                        className="flex-1 px-4 py-2.5 rounded-lg font-label-md text-label-md text-white flex items-center justify-center gap-2 transition-transform active:scale-95"
                        style={{ backgroundColor: accent }}
                    >
                        <span className="material-symbols-outlined text-sm">download</span>
                        Download
                    </a>
                    <button
                        onClick={() => onPreview(resource)}
                        className="px-4 py-2.5 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-sky-tint transition-colors"
                    >
                        Preview
                    </button>
                </div>
            </div>
        </article>
    );
}

export default function Resources() {
    const [resources, setResources] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [previewResource, setPreviewResource] = useState(null);
    const [activeAudience, setActiveAudience] = useState('All');
    const [query, setQuery] = useState('');

    useEffect(() => {
        let cancelled = false;

        getResources()
            .then((data) => { if (!cancelled) setResources(data); })
            .catch((err) => {
                if (cancelled) return;
                setError(
                    err instanceof TypeError
                        ? 'We could not reach the server. Please try again shortly.'
                        : err.message
                );
            })
            .finally(() => { if (!cancelled) setIsLoading(false); });

        return () => { cancelled = true; };
    }, []);

    const closePreview = useCallback(() => setPreviewResource(null), []);

    const audiences = useMemo(
        () => [...new Set(resources.map((item) => item.audience))],
        [resources]
    );

    const counts = useMemo(() => {
        const tally = {};
        resources.forEach((r) => { tally[r.audience] = (tally[r.audience] || 0) + 1; });
        return tally;
    }, [resources]);

    const visible = useMemo(() => {
        const term = query.trim().toLowerCase();

        return resources.filter((item) => {
            if (activeAudience !== 'All' && item.audience !== activeAudience) return false;
            if (!term) return true;
            return `${item.title} ${item.description || ''} ${item.category || ''}`
                .toLowerCase()
                .includes(term);
        });
    }, [resources, activeAudience, query]);

    return (
        <>
            {previewResource && <PdfPreview resource={previewResource} onClose={closePreview} />}

            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-deep-navy text-white px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/15 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-1/3 opacity-20 hidden lg:block">
                        <img src={heroImage} alt="" className="w-full h-full object-cover" />
                        <span className="absolute inset-0 bg-gradient-to-r from-deep-navy to-transparent"></span>
                    </div>

                    <div className="relative max-w-7xl mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                            Education Hub
                        </span>

                        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mt-6 max-w-3xl leading-tight">
                            Digital Safety <span className="text-safety-yellow">Resources</span>
                        </h1>

                        <p className="font-body-lg text-body-lg text-white/75 mt-5 max-w-2xl leading-relaxed">
                            Free, evidence-based guides and toolkits for children, families, educators and journalists — every one free to preview and download.
                        </p>

                        {/* Live stats */}
                        <div className="flex flex-wrap gap-8 mt-10">
                            <div>
                                <p className="font-display-lg text-headline-lg text-safety-yellow leading-none">
                                    {isLoading ? '—' : resources.length}
                                </p>
                                <p className="font-caption text-caption text-white/60 mt-2 uppercase tracking-widest">Documents</p>
                            </div>
                            <div>
                                <p className="font-display-lg text-headline-lg text-safety-yellow leading-none">
                                    {isLoading ? '—' : audiences.length}
                                </p>
                                <p className="font-caption text-caption text-white/60 mt-2 uppercase tracking-widest">Audiences</p>
                            </div>
                            <div>
                                <p className="font-display-lg text-headline-lg text-safety-yellow leading-none">Free</p>
                                <p className="font-caption text-caption text-white/60 mt-2 uppercase tracking-widest">Always</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter bar */}
                <section className="md:sticky md:top-20 z-40 bg-surface-container-low/95 backdrop-blur border-y border-outline-variant/30 px-margin-mobile md:px-margin-desktop py-4">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-4">
                        <div className="flex flex-wrap gap-2 flex-grow">
                            {['All', ...audiences].map((name) => {
                                const active = activeAudience === name;
                                const accent = name === 'All' ? '#0b3d6e' : styleFor(name).accent;

                                return (
                                    <button
                                        key={name}
                                        onClick={() => setActiveAudience(name)}
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
                                            {name === 'All' ? resources.length : counts[name]}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        <label className="relative lg:w-72 shrink-0">
                            <span className="sr-only">Search resources</span>
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
                            <input
                                type="search"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search resources…"
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-outline-variant/50 bg-white text-body-md focus:border-deep-navy focus:ring-1 focus:ring-deep-navy outline-none"
                            />
                        </label>
                    </div>
                </section>

                {/* Library */}
                <section className="py-stack-lg px-margin-mobile md:px-margin-desktop" id="library">
                    <div className="max-w-7xl mx-auto">

                        {error && (
                            <div role="alert" className="flex items-start gap-3 rounded-lg border border-error/40 bg-error/10 px-4 py-3 mb-stack-md">
                                <span className="material-symbols-outlined text-error text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                                <p className="font-body-md text-body-md text-error">{error}</p>
                            </div>
                        )}

                        {isLoading && (
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <div key={i} className="rounded-2xl overflow-hidden border border-outline-variant/30">
                                        <div className="aspect-[3/4] bg-surface-container animate-pulse"></div>
                                        <div className="p-5 space-y-3">
                                            <div className="h-4 bg-surface-container rounded animate-pulse"></div>
                                            <div className="h-3 bg-surface-container rounded w-2/3 animate-pulse"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {!isLoading && visible.length === 0 && (
                            <p className="text-center py-20 text-on-surface-variant font-body-lg">
                                {resources.length === 0
                                    ? 'No resources published yet. Check back soon.'
                                    : 'Nothing matches your search.'}
                            </p>
                        )}

                        {!isLoading && (() => { let shown = 0; return audiences.map((audience) => {
                            const items = visible.filter((item) => item.audience === audience);
                            if (items.length === 0) return null;

                            const { icon, accent } = styleFor(audience);

                            return (
                                <div key={audience} className="mb-stack-lg">
                                    <div className="flex items-center gap-4 mb-stack-md">
                                        <span
                                            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                                            style={{ backgroundColor: `${accent}1A`, color: accent }}
                                        >
                                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                                        </span>
                                        <div>
                                            <h2 className="font-headline-md text-headline-md text-deep-navy leading-tight">{audience}</h2>
                                            <p className="font-caption text-caption text-on-surface-variant">
                                                {items.length} {items.length === 1 ? 'document' : 'documents'}
                                            </p>
                                        </div>
                                        <span className="flex-grow h-px" style={{ backgroundColor: `${accent}33` }}></span>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                        {items.map((item) => {
                                            const eager = shown < 4;
                                            shown += 1;
                                            return (
                                                <ResourceCard
                                                    key={item.id}
                                                    resource={item}
                                                    onPreview={setPreviewResource}
                                                    eager={eager}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        }); })()}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
