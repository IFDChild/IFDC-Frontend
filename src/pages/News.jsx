import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import youthsummit from '../assets/images/Youth Summit.png'

export default function News() {
    return (
        <>


            <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop h-20 flex items-center justify-between">
                    <Link className="flex items-center gap-2 group" to="#">
                        <img alt="IFDC Logo" className="h-10 w-auto object-contain" src={youthsummit} />
                        <div className="flex flex-col hidden">
                            <span className="font-headline-md text-headline-md font-extrabold text-deep-navy leading-none tracking-tight">IFDC</span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">Digital Child Safety</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="#">Programs</Link>
                        <Link className="font-label-md text-label-md text-primary font-bold relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" to="/resources">Resources</Link>
                        <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/impact">Impact</Link>
                        <Link className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-deep-navy text-deep-navy font-label-md text-label-md hover:bg-deep-navy hover:text-white transition-all active:scale-95">
                            Get Involved
                        </button>
                        <button className="bg-safety-yellow text-deep-navy px-8 py-2.5 rounded-full font-label-md text-label-md shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95">
                            <Link to="/donate">

                                Donate
                            </Link>
                        </button>
                    </div>
                </div>
            </nav>

            <Navbar />

            <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-sm py-4 border-b border-outline-variant/30 px-margin-mobile md:px-margin-desktop">
                <div className="max-w-container-max mx-auto flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                        <button className="px-6 py-2 rounded-full bg-deep-navy text-white font-label-md text-label-md shadow-md category-chip">All</button>
                        <Link className="px-6 py-2 rounded-full bg-sky-tint text-deep-navy font-label-md text-label-md hover:bg-outline-variant/30 category-chip transition-colors" to="/news">News</Link>
                        <Link className="px-6 py-2 rounded-full bg-sky-tint text-deep-navy font-label-md text-label-md hover:bg-outline-variant/30 category-chip transition-colors" to="/news">Blogs</Link>
                        <button className="px-6 py-2 rounded-full bg-sky-tint text-deep-navy font-label-md text-label-md hover:bg-outline-variant/30 category-chip">Research</button>
                        <button className="px-6 py-2 rounded-full bg-sky-tint text-deep-navy font-label-md text-label-md hover:bg-outline-variant/30 category-chip">Press Releases</button>
                    </div>
                    <div className="relative group hidden sm:block">
                        <input className="pl-10 pr-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest focus:ring-2 focus:ring-deep-navy focus:border-transparent transition-all outline-none w-64" placeholder="Search articles..." type="text" />
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                    </div>
                </div>
            </section>
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg space-y-24">

                <section className="space-y-10 scroll-mt-32" id="latest-news">
                    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                        <h2 className="font-headline-lg text-headline-lg text-deep-navy">Latest News</h2>
                        <Link className="text-deep-navy font-label-md text-label-md hover:underline flex items-center gap-1" to="/news">View All News <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                    </div>

                    <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row ambient-glow">
                        <div className="lg:w-3/5 h-[300px] lg:h-[500px] overflow-hidden relative">
                            <img className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" data-alt="A poignant, high-quality photograph of a teenager sitting on their bed in a dimly lit room, looking distressed while holding a glowing smartphone. The lighting is moody with soft blue tones from the screen reflecting on their face, creating an atmosphere of isolation and digital vulnerability. The composition is artistic and clean, fitting a modern light-mode non-profit website aesthetic with professional photography standards." src={youthsummit} />
                            <div className="absolute top-6 left-6">
                                <span className="bg-safety-yellow text-deep-navy font-label-md text-label-md px-4 py-1.5 rounded-full shadow-lg">Featured News</span>
                            </div>
                        </div>
                        <div className="lg:w-2/5 p-stack-md lg:p-12 flex flex-col justify-center bg-white/40">
                            <div className="flex items-center gap-2 mb-4 text-on-surface-variant">
                                <span className="font-label-md text-label-md text-deep-navy uppercase tracking-wider text-[12px]">Press Release</span>
                                <span className="w-1 h-1 rounded-full bg-outline"></span>
                                <span className="font-caption text-caption">Oct 24, 2024</span>
                            </div>
                            <h3 className="font-headline-lg text-[28px] md:text-[36px] text-deep-navy mb-6 leading-tight font-bold">
                                IFDC Announces Global Initiative for Safer Social Media Algorithms
                            </h3>
                            <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-4">
                                In a landmark move, the International Foundation for Digital Child Safety has partnered with top tech companies to develop new standards for algorithm transparency, prioritizing the mental well-being of young users online.
                            </p>
                            <button className="self-start group flex items-center gap-2 font-label-md text-label-md text-deep-navy bg-safety-yellow px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95">
                                Read Full Release
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">

                        <article className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
                            <div className="relative aspect-video overflow-hidden">
                                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A modern, high-tech digital workspace or classroom environment showing children interacting with educational technology." src="https://lh3.googleusercontent.com/aida/AP1WRLtx7gyrVg5Wvv22GLWtxGWPg12XmJ-7xudrdWgGC_exQWeI3X09A8u6Nh0AoafNR1-POldaoJUgeQSWnHoukrHwEKbEgPLMPJxZBi2yU2lV0-MGaWTmwc3qjKAx7GXdAuDrJbE8NSiRNLos8D2JH7ZpsHmE21o9Ignq78GVDMIEyZUZ1-ncuTR-1RigmrFlt3g2XTtd7YbUjOul4vaD59p1lDkuBmbqqeBK331tHd5hjcVH9BurQpdebfs" />
                                <span className="absolute top-4 left-4 bg-sky-tint text-deep-navy px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider">Research</span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="font-caption text-caption text-on-surface-variant mb-2">October 12, 2024</span>
                                <h4 className="font-headline-md text-[20px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug">2024 State of Online Child Safety Report</h4>
                                <p className="font-body-md text-[15px] text-on-surface-variant mb-6 line-clamp-3">Our annual report highlights emerging trends in digital interactions and the impact of AI-driven moderation on platform safety for minors.</p>
                                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                                    <Link className="inline-flex items-center gap-2 text-deep-navy font-bold hover:underline text-[14px]" to="#">
                                        Read More
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        <article className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
                            <div className="relative aspect-video overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Community workshop setting." style={{ "backgroundImage": "url('https" }}></div>
                                <span className="absolute top-4 left-4 bg-sky-tint text-deep-navy px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider">Announcement</span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="font-caption text-caption text-on-surface-variant mb-2">September 28, 2024</span>
                                <h4 className="font-headline-md text-[20px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug">Expanding Our Reach: New Partnerships in 10 Countries</h4>
                                <p className="font-body-md text-[15px] text-on-surface-variant mb-6 line-clamp-3">The Foundation is proud to announce strategic alliances with international tech leaders to implement safety-by-design principles globally.</p>
                                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                                    <Link className="inline-flex items-center gap-2 text-deep-navy font-bold hover:underline text-[14px]" to="#">
                                        Read More
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        <article className="glass-card rounded-2xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
                            <div className="relative aspect-video overflow-hidden">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Stylized digital illustration of a shield." style={{ "backgroundImage": "url('https" }}></div>
                                <span className="absolute top-4 left-4 bg-sky-tint text-deep-navy px-3 py-1 rounded-full font-label-md text-[12px] uppercase tracking-wider">Press Release</span>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="font-caption text-caption text-on-surface-variant mb-2">September 15, 2024</span>
                                <h4 className="font-headline-md text-[20px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug">Foundation Launches "SafeClick" Browser Extension</h4>
                                <p className="font-body-md text-[15px] text-on-surface-variant mb-6 line-clamp-3">A new tool designed to provide real-time alerts and educational prompts for children as they navigate the web independently.</p>
                                <div className="mt-auto pt-4 border-t border-outline-variant/30">
                                    <Link className="inline-flex items-center gap-2 text-deep-navy font-bold hover:underline text-[14px]" to="#">
                                        Read More
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="space-y-10 scroll-mt-32" id="latest-blogs">
                    <div className="flex items-center justify-between border-b border-outline-variant/30 pb-4">
                        <h2 className="font-headline-lg text-headline-lg text-deep-navy">Latest Blogs &amp; Insights</h2>
                        <Link className="text-deep-navy font-label-md text-label-md hover:underline flex items-center gap-1" to="/news">View All Blogs <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-md">

                        <article className="glass-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-300">
                            <div className="sm:w-2/5 overflow-hidden relative min-h-[200px]">
                                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700" style={{ "backgroundImage": "url('https" }}></div>
                            </div>
                            <div className="sm:w-3/5 p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-safety-yellow/20 text-deep-navy px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Parent Guide</span>
                                    <span className="font-caption text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 5 min read</span>
                                </div>
                                <h3 className="font-headline-md text-[20px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug">Understanding Gaming Safety: Beyond the Basics</h3>
                                <p className="font-body-md text-[14px] text-on-surface-variant mb-6 line-clamp-2">Online gaming is a social hub for kids today. Learn how to manage in-game chat settings, recognize grooming patterns, and foster a positive gaming culture.</p>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/30">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-sky-tint flex items-center justify-center text-deep-navy font-bold text-xs">SA</div>
                                        <span className="font-caption text-[12px] font-semibold text-deep-navy">Sarah Anderson</span>
                                    </div>
                                    <Link className="text-deep-navy font-bold hover:underline flex items-center text-[13px]" to="#">
                                        Read Article
                                        <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        <article className="glass-card rounded-2xl overflow-hidden flex flex-col sm:flex-row group hover:shadow-2xl transition-all duration-300">
                            <div className="sm:w-2/5 overflow-hidden relative min-h-[200px] bg-sky-tint flex items-center justify-center">
                                <span className="material-symbols-outlined text-[64px] text-primary/30">psychology</span>
                            </div>
                            <div className="sm:w-3/5 p-6 flex flex-col">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="bg-sky-tint text-deep-navy px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-wider">Expert Insight</span>
                                    <span className="font-caption text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">schedule</span> 8 min read</span>
                                </div>
                                <h3 className="font-headline-md text-[20px] text-deep-navy mb-3 group-hover:text-primary transition-colors leading-snug">The Psychology of Screen Time in Early Childhood</h3>
                                <p className="font-body-md text-[14px] text-on-surface-variant mb-6 line-clamp-2">Delve into recent psychological studies on how prolonged exposure to fast-paced digital media affects attention spans and emotional regulation in toddlers.</p>
                                <div className="mt-auto flex items-center justify-between pt-4 border-t border-outline-variant/30">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs">DR</div>
                                        <span className="font-caption text-[12px] font-semibold text-deep-navy">Dr. Robert Chen</span>
                                    </div>
                                    <Link className="text-deep-navy font-bold hover:underline flex items-center text-[13px]" to="#">
                                        Read Article
                                        <span className="material-symbols-outlined text-[16px]">arrow_right_alt</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto">
                    <article className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:shadow-2xl transition-all duration-300">
                        <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-deep-navy text-white text-center md:text-left">
                            <div className="flex-shrink-0 bg-white/10 p-6 rounded-full">
                                <span className="material-symbols-outlined text-[64px] text-safety-yellow" style={{ "fontVariationSettings": "'FILL' 1" }}>emergency</span>
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-headline-md text-headline-md mb-2">Urgent: Emergency Resources Hub</h3>
                                <p className="font-body-md text-body-md text-white/80">If you or someone you know is in immediate danger or needs to report a specific incident, visit our vetted reporting resource center immediately.</p>
                            </div>
                            <button className="flex-shrink-0 bg-safety-yellow text-deep-navy font-bold px-8 py-4 rounded-full hover:bg-white hover:-translate-y-1 transition-all shadow-lg active:scale-95 whitespace-nowrap">Get Help Now</button>
                        </div>
                    </article>
                </section>

                <section className="relative rounded-[2.5rem] bg-sky-tint p-stack-md md:p-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-safety-yellow/40 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-deep-navy/5 rounded-full blur-2xl -ml-10 -mb-10"></div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Secure Their Digital Future</h2>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Join 50,000+ parents and educators receiving our weekly safety briefing. No spam, just actionable insights and policy updates.</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                                    <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
                                    Monthly expert safety workshops
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                                    <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
                                    New platform danger alerts
                                </li>
                                <li className="flex items-center gap-3 text-on-surface-variant font-body-md">
                                    <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>check_circle</span>
                                    Parenting guides &amp; checklists
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-white/40 shadow-xl">
                            <form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
                                <div className="space-y-2">
                                    <label className="font-label-md text-label-md text-deep-navy px-1">Email Address</label>
                                    <input className="w-full px-6 py-4 rounded-2xl border-none bg-white shadow-inner focus:ring-2 focus:ring-deep-navy outline-none text-body-md" placeholder="you@example.com" type="email" />
                                </div>
                                <div className="flex items-start gap-3 px-1">
                                    <input className="mt-1 rounded border-outline-variant text-deep-navy focus:ring-deep-navy" id="terms" type="checkbox" />
                                    <label className="font-caption text-caption text-on-surface-variant" htmlFor="terms">I agree to receive communications and accept the Privacy Policy.</label>
                                </div>
                                <button className="w-full bg-deep-navy text-white font-bold py-4 rounded-2xl hover:shadow-lg active:scale-[0.98] transition-all" type="submit">Subscribe to Safety Updates</button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />


        </>
    );
}
