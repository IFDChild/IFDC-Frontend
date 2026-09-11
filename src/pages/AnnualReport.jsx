import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Annual reports live in public/annualreports/.
 * To add next year's: drop the PDF and its cover image in that folder,
 * then add an entry at the top of this list.
 */
const REPORTS = [
    {
        year: '2025–2026',
        title: 'Annual Report 2025–2026',
        summary:
            "A full account of the year's programmes, partnerships, and financial stewardship across IFDC's work for children in the digital world.",
        file: '/annualreports/annual-report-2025-2026.pdf',
        cover: '/annualreports/annual-report-2025-2026-cover.jpg',
        pages: 16,
        size: '3.8 MB'
    },
    {
        year: '2024–2025',
        title: 'Annual Report 2024–2025',
        summary:
            'Our programmes, reach, and financial statements for the 2024–2025 reporting year.',
        file: '/annualreports/annual-report-2024-2025.pdf',
        cover: '/annualreports/annual-report-2024-2025-cover.jpg',
        pages: 15,
        size: '3.4 MB'
    }
];

function PdfPreview({ report, onClose }) {
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
            aria-label={`Preview of ${report.title}`}
        >
            <div
                className="relative bg-white w-full max-w-5xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between gap-4 px-5 py-3 border-b border-outline-variant/40 shrink-0">
                    <h2 className="font-headline-md text-body-lg text-primary truncate">{report.title}</h2>
                    <div className="flex items-center gap-2 shrink-0">
                        <a
                            href={report.file}
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
                <iframe src={report.file} title={`${report.title} preview`} className="w-full flex-1" />
            </div>
        </div>
    );
}

function ReportMeta({ report, tone = 'light' }) {
    const muted = tone === 'dark' ? 'text-white/60' : 'text-on-surface-variant';

    return (
        <div className={`flex flex-wrap items-center gap-x-5 gap-y-2 font-caption text-caption ${muted}`}>
            <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">description</span>
                PDF
            </span>
            <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">auto_stories</span>
                {report.pages} pages
            </span>
            <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">hard_drive</span>
                {report.size}
            </span>
        </div>
    );
}

export default function AnnualReport() {
    const [preview, setPreview] = useState(null);
    const [latest, ...previous] = REPORTS;

    return (
        <>
            {preview && <PdfPreview report={preview} onClose={() => setPreview(null)} />}

            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-deep-navy text-white px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/15 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative max-w-container-max mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                            <span className="material-symbols-outlined text-sm">bar_chart</span>
                            Accountability
                        </span>

                        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mt-6 leading-tight max-w-3xl">
                            Annual <span className="text-safety-yellow">Reports</span>
                        </h1>

                        <p className="font-body-lg text-body-lg text-white/75 mt-5 max-w-2xl leading-relaxed">
                            A yearly account of our programmes, partnerships, and finances — published in full so anyone can see how IFDC works and where its support goes.
                        </p>
                    </div>
                </section>

                {/* Latest report */}
                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-surface">
                    <div className="max-w-container-max mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                            <div className="lg:col-span-5">
                                <button
                                    type="button"
                                    onClick={() => setPreview(latest)}
                                    className="group relative block w-full rounded-2xl overflow-hidden shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-safety-yellow"
                                    aria-label={`Preview ${latest.title}`}
                                >
                                    <img
                                        src={latest.cover}
                                        alt={`Cover of ${latest.title}`}
                                        className="w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/45 transition-colors duration-300 flex items-center justify-center">
                                        <span className="flex items-center gap-2 px-6 py-3 rounded-full bg-safety-yellow text-deep-navy font-label-md text-label-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                                            <span className="material-symbols-outlined text-sm">visibility</span>
                                            Read online
                                        </span>
                                    </span>
                                </button>
                            </div>

                            <div className="lg:col-span-7">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-safety-yellow text-deep-navy font-label-md text-label-md">
                                    Latest report
                                </span>

                                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mt-5">
                                    {latest.title}
                                </h2>

                                <span className="block w-20 h-1 bg-safety-yellow rounded-full my-5"></span>

                                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
                                    {latest.summary}
                                </p>

                                <ReportMeta report={latest} />

                                <div className="flex flex-wrap gap-3 mt-8">
                                    <a
                                        href={latest.file}
                                        download
                                        className="inline-flex items-center gap-2 bg-deep-navy text-on-primary font-label-md text-label-md px-7 py-3.5 rounded-full hover:bg-surface-tint transition-all active:scale-95 shadow-lg"
                                    >
                                        <span className="material-symbols-outlined text-sm">download</span>
                                        Download PDF
                                    </a>
                                    <button
                                        onClick={() => setPreview(latest)}
                                        className="inline-flex items-center gap-2 border-2 border-deep-navy text-deep-navy font-label-md text-label-md px-7 py-3.5 rounded-full hover:bg-sky-tint transition-all active:scale-95"
                                    >
                                        <span className="material-symbols-outlined text-sm">visibility</span>
                                        Read online
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Previous reports */}
                {previous.length > 0 && (
                    <section className="px-margin-mobile md:px-margin-desktop py-stack-lg bg-sky-tint/30">
                        <div className="max-w-container-max mx-auto">
                            <div className="flex items-center gap-4 mb-stack-md">
                                <h2 className="font-headline-md text-headline-md text-deep-navy shrink-0">Previous reports</h2>
                                <span className="flex-grow h-px bg-deep-navy/15"></span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {previous.map((report) => (
                                    <article
                                        key={report.file}
                                        className="group bg-white rounded-2xl overflow-hidden border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setPreview(report)}
                                            className="relative block w-full aspect-[3/4] overflow-hidden focus:outline-none focus-visible:ring-4 focus-visible:ring-safety-yellow"
                                            aria-label={`Preview ${report.title}`}
                                        >
                                            <img
                                                src={report.cover}
                                                alt={`Cover of ${report.title}`}
                                                loading="lazy"
                                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <span className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/45 transition-colors duration-300 flex items-center justify-center">
                                                <span className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-safety-yellow text-deep-navy font-label-md text-label-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                                                    <span className="material-symbols-outlined text-sm">visibility</span>
                                                    Read online
                                                </span>
                                            </span>
                                            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-deep-navy text-safety-yellow text-caption font-bold">
                                                {report.year}
                                            </span>
                                        </button>

                                        <div className="p-5 flex flex-col flex-grow">
                                            <h3 className="font-headline-md text-body-lg text-deep-navy mb-2">{report.title}</h3>
                                            <p className="text-on-surface-variant text-body-md leading-relaxed mb-4 flex-grow line-clamp-3">
                                                {report.summary}
                                            </p>

                                            <div className="mb-4">
                                                <ReportMeta report={report} />
                                            </div>

                                            <div className="flex gap-2 mt-auto">
                                                <a
                                                    href={report.file}
                                                    download
                                                    className="flex-1 px-4 py-2.5 bg-deep-navy text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors"
                                                >
                                                    <span className="material-symbols-outlined text-sm">download</span>
                                                    Download
                                                </a>
                                                <button
                                                    onClick={() => setPreview(report)}
                                                    className="px-4 py-2.5 border border-outline-variant rounded-lg font-label-md text-label-md text-primary hover:bg-sky-tint transition-colors"
                                                >
                                                    Read
                                                </button>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </>
    );
}
