import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Policies() {
    return (
        <>

            <Navbar />
            {/* <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-md border-b border-white/20 shadow-sm transition-all duration-300 ease-in-out"><div className="flex items-center gap-2"><img alt="IFDC Logo" className="h-10 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuQJn_86eqpwfyllC7phtk3kKJYoJlU3r8eWqN9_PeP8kzGl2Jy6jQGlYFu70M9lokXDVXq1J8Kkiukc50uYNKatCEegxgfQFfVW33-nWGOa4Ri20KHJV2slKbdh9VE45-ke57UZo1hd8LiczRTEiV5XcLBaeJx_CD8dK_gcTH3FjOoIU_CfwgronA4Bfymlut_ui9x8pgQrG78jWObf1-NbB_PPMo6wx8-sXz9qlEpCfCCA2q3c5BwvByk6Y51FpcOw"/></div><div className="hidden md:flex items-center gap-8"><Link className="font-body-md text-body-md text-on-surface-variant hover:text-deep-navy transition-opacity" to="/">Home</Link><Link className="font-body-md text-body-md text-deep-navy font-bold border-b-2 border-safety-yellow pb-1 transition-opacity" to="/about">About</Link><Link className="font-body-md text-body-md text-on-surface-variant hover:text-deep-navy transition-opacity" to="/news">Blogs &amp; News</Link><Link className="font-body-md text-body-md text-on-surface-variant hover:text-deep-navy transition-opacity" to="/resources">Resources</Link></div><div className="flex items-center gap-4"><div className="relative group"><button className="bg-deep-navy text-white px-6 py-2 rounded-full font-label-md text-label-md flex items-center gap-2 hover:opacity-90 transition-opacity">Join Us <span className="material-symbols-outlined text-sm">expand_more</span></button></div></div></nav> */}
            <main className="pt-24 pb-stack-lg">

                <section className="px-margin-desktop max-w-container-max mx-auto pt-16 pb-12">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <span className="bg-sky-tint text-deep-navy px-4 py-1 rounded-lg text-label-md font-label-md inline-block">Governance &amp; Transparency</span>
                            <h1 className="font-display-lg text-display-lg text-primary">Operating with Integrity</h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                                Our foundation is built on trust. We maintain rigorous standards for child privacy, data protection, and organizational branding to ensure our mission of a safer digital world for every child remains uncompromising.
                            </p>
                        </div>
                        <div className="flex-1 w-full relative">
                            <div className="absolute inset-0 bg-secondary-container opacity-10 blur-3xl -z-10 rounded-full"></div>
                            <div className="glass-card p-4 rounded-3xl overflow-hidden">
                                <img className="w-full h-80 object-cover rounded-2xl" data-alt="A professional and clean overhead shot of a modern office space with light-filled windows, featuring high-quality minimalist furniture and a soft focus on a digital tablet displaying privacy icons. The scene uses a bright, high-key lighting aesthetic with a palette of deep navy blues and clean whites to communicate institutional trust and modern digital safety." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhRdVsNepN2Tx_-shErWPoTmfg1Pbs3H-njpKQJx6T7ROWA9yD5nzNy1WS454cxD32qBC8qY4pHk-bhEn_pnA3pP1sOhNbgYRBGdei2pRsTouU9VYGwTq3-bw4OFs7wm-nWzCdl2ppqPa-qxFDOQ5Yx83fTl_1ku_WYHZoKlSgmapoSOiRAU6hi-kZACq_RAlHjxhBPSF1jkfm-4kc4L4xYcIygko60CpRwhVKwhs2lGUanzWvhhOD" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-margin-desktop max-w-container-max mx-auto mb-12">
                    <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="relative w-full md:w-96">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                            <input className="w-full pl-12 pr-4 py-3 bg-white border border-sky-tint rounded-xl focus:ring-2 focus:ring-deep-navy focus:outline-none" placeholder="Search policies..." type="text" />
                        </div>
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            <span className="bg-deep-navy text-white px-4 py-2 rounded-full text-label-md font-label-md cursor-pointer whitespace-nowrap">All Policies</span>
                            <span className="bg-sky-tint text-deep-navy px-4 py-2 rounded-full text-label-md font-label-md cursor-pointer hover:bg-soft-canary transition-colors whitespace-nowrap">Privacy</span>
                            <span className="bg-sky-tint text-deep-navy px-4 py-2 rounded-full text-label-md font-label-md cursor-pointer hover:bg-soft-canary transition-colors whitespace-nowrap">Operations</span>
                            <span className="bg-sky-tint text-deep-navy px-4 py-2 rounded-full text-label-md font-label-md cursor-pointer hover:bg-soft-canary transition-colors whitespace-nowrap">Legal</span>
                        </div>
                    </div>
                </section>

                <section className="px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter">

                    <div className="md:col-span-8 glass-card p-8 rounded-[1.5rem] flex flex-col justify-between group hover:border-safety-yellow/50 transition-all">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="bg-soft-canary p-3 rounded-xl">
                                    <span className="material-symbols-outlined text-secondary text-3xl">child_care</span>
                                </div>
                                <span className="text-caption font-caption text-outline">Last Updated: Oct 2024</span>
                            </div>
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Child Privacy Policy</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-xl">
                                Our comprehensive framework for protecting the digital footprint of minors. This policy details how we minimize data collection and ensure parental consent for all youth-oriented digital interactions.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link className="bg-deep-navy text-white px-6 py-3 rounded-full flex items-center gap-2 font-label-md hover:opacity-90 transition-all" to="#">
                                <span className="material-symbols-outlined text-lg">download</span>
                                Download PDF
                            </Link>
                            <Link className="text-deep-navy border border-deep-navy px-6 py-3 rounded-full flex items-center gap-2 font-label-md hover:bg-deep-navy hover:text-white transition-all" to="#">
                                <span className="material-symbols-outlined text-lg">visibility</span>
                                Read Online
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-4 glass-card p-8 rounded-[1.5rem] flex flex-col group hover:border-safety-yellow/50 transition-all">
                        <div className="bg-sky-tint p-3 rounded-xl w-fit mb-6">
                            <span className="material-symbols-outlined text-deep-navy text-3xl">security</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Data Protection Guidelines</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-auto">
                            Technical and administrative safeguards for managing sensitive donor and beneficiary information.
                        </p>
                        <div className="pt-8">
                            <Link className="flex items-center justify-between text-deep-navy font-label-md group-hover:translate-x-1 transition-transform" to="#">
                                <span className="">View Protocols</span>
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:col-span-4 glass-card p-8 rounded-[1.5rem] group hover:border-safety-yellow/50 transition-all">
                        <div className="bg-secondary-container/20 p-3 rounded-xl w-fit mb-6">
                            <span className="material-symbols-outlined text-on-secondary-container text-3xl">brand_family</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Branding Policy</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            Guidelines for partners and media on correctly utilizing our identity.
                        </p>
                        <Link className="inline-flex items-center gap-2 text-deep-navy font-label-md hover:underline" to="#">
                            <span className="material-symbols-outlined">file_download</span>
                            Logo Assets &amp; Guidelines
                        </Link>
                    </div>

                    <div className="md:col-span-4 glass-card p-8 rounded-[1.5rem] group hover:border-safety-yellow/50 transition-all">
                        <div className="bg-surface-container-high p-3 rounded-xl w-fit mb-6">
                            <span className="material-symbols-outlined text-on-surface-variant text-3xl">gavel</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Terms of Service</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            The legal agreement governing your use of our digital platforms and tools.
                        </p>
                        <Link className="inline-flex items-center gap-2 text-deep-navy font-label-md hover:underline" to="#">
                            <span className="material-symbols-outlined">description</span>
                            View Legal Agreement
                        </Link>
                    </div>

                    <div className="md:col-span-4 glass-card p-8 rounded-[1.5rem] group hover:border-safety-yellow/50 transition-all">
                        <div className="bg-error-container/20 p-3 rounded-xl w-fit mb-6">
                            <span className="material-symbols-outlined text-error text-3xl">diversity_3</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Code of Conduct</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                            Defining the ethical behavior expected from our staff, volunteers, and partners.
                        </p>
                        <Link className="inline-flex items-center gap-2 text-deep-navy font-label-md hover:underline" to="#">
                            <span className="material-symbols-outlined">verified</span>
                            Ethical Framework
                        </Link>
                    </div>
                </section>

                <section className="px-margin-desktop max-w-container-max mx-auto mt-stack-lg">
                    <div className="bg-safety-yellow p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="bg-deep-navy text-white p-4 rounded-full">
                                <span className="material-symbols-outlined text-4xl">notification_important</span>
                            </div>
                            <div>
                                <h4 className="font-headline-md text-headline-md text-deep-navy mb-1">Compliance Reporting</h4>
                                <p className="font-body-md text-body-md text-on-secondary-container">Have you spotted a policy violation or have a privacy concern? Report it immediately.</p>
                            </div>
                        </div>
                        <button className="bg-deep-navy text-white px-8 py-4 rounded-full font-label-md text-label-md whitespace-nowrap shadow-lg hover:scale-105 transition-transform">
                            Emergency Reporting Link
                        </button>
                    </div>
                </section>

                <section className="px-margin-desktop max-w-container-max mx-auto mt-stack-lg border-t border-outline-variant/30 pt-stack-lg">
                    <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        <details className="group bg-white p-6 rounded-2xl border border-sky-tint cursor-pointer">
                            <summary className="flex justify-between items-center font-label-md text-label-md text-deep-navy list-none">
                                How often are these policies reviewed?
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Our governance board reviews all organizational policies annually, or more frequently if there are significant changes in international digital safety laws such as COPPA or GDPR-K.
                            </p>
                        </details>
                        <details className="group bg-white p-6 rounded-2xl border border-sky-tint cursor-pointer">
                            <summary className="flex justify-between items-center font-label-md text-label-md text-deep-navy list-none">
                                Can educational institutions license your branding?
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Yes, non-profit educational institutions can apply for a branding license to use our materials in classroom settings. Please refer to our Branding Policy for the application process.
                            </p>
                        </details>
                        <details className="group bg-white p-6 rounded-2xl border border-sky-tint cursor-pointer">
                            <summary className="flex justify-between items-center font-label-md text-label-md text-deep-navy list-none">
                                Is my donation data secure?
                                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                            </summary>
                            <p className="mt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                We use bank-level encryption and secure processing through certified gateways. We never store credit card information on our servers. See our Data Protection Guidelines for full details.
                            </p>
                        </details>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
}
