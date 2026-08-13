import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function StrategicPlan() {
    return (
        <>

            <div className="fixed inset-0 doc-texture z-50"></div>



            <Navbar />
            <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 grid grid-cols-4 md:grid-cols-12 gap-gutter">

                <section className="col-span-4 md:col-span-12 mb-24 grid grid-cols-4 md:grid-cols-12 gap-gutter items-center">
                    <div className="col-span-4 md:col-span-7 pr-0 md:pr-12 transition-all duration-700 ease-out opacity-100 translate-y-0">
                        <span className="font-label-md text-label-md text-primary mb-4 block uppercase tracking-widest">Strategic Vision 2025–2030</span>
                        <h1 className="font-display-lg text-display-lg text-primary mb-6">Securing the Digital Frontier for the Next Generation.</h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl">
                            Our five-year roadmap focuses on scaling global digital literacy, advancing legislative protections, and fostering resilient online communities. We are committed to building an internet where children can explore, learn, and connect without fear.
                        </p>
                        <div className="flex gap-4">
                            <Link className="bg-primary text-on-primary font-label-md text-label-md px-6 py-3 rounded flex items-center justify-center gap-2 hover:bg-surface-tint transition-colors" to="#">
                                View Roadmap <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                            </Link>
                            <Link className="bg-surface text-primary border border-outline font-label-md text-label-md px-6 py-3 rounded flex items-center justify-center gap-2 hover:border-primary transition-colors" to="#">
                                Download PDF
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-4 md:col-span-5 relative mt-12 md:mt-0 transition-all duration-700 ease-out opacity-100 translate-y-0">
                        <div className="absolute inset-0 bg-surface-container-high rounded-xl -rotate-2 scale-105 origin-bottom-right z-0 border border-outline-variant"></div>
                        <div className="relative z-10 bg-surface p-2 rounded-xl border border-outline shadow-[0_12px_40px_-12px_rgba(0,39,76,0.15)]">
                            <img className="w-full h-[400px] object-cover rounded-lg filter contrast-125" data-alt="A diverse group of children engaging safely with educational technology in a modern, well-lit classroom. The scene is bright and optimistic, reflecting a modern corporate aesthetic with a sturdy, professional tone. The lighting is soft and even, highlighting the clean lines of the classroom and the focus on the children's faces. The color palette emphasizes deep navy blues, crisp whites, and vibrant yellow accents to signify safety and learning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRRV6H81zywwTqM0z8QYyfrr6bCGB2lOOj-_xty7f4vukL2u_ytey4nQpp-AAv-buP43zYL42hZoFcpvewh7RGiiclvlb-w4x2V6E1I5LR3Cm5SKRtWcvHPlrwJ8QF-XjV-BQBQAp-Q62t1Cke1iPoWsLSb38QkkG6zV2Mv83b2FNQ2mTyI9t6TNPSt2pdFhuraKy1gLJuGOKhTvMX0yhL0eQm6DlT2-3unxsIKkamfh24IG-I-k_C" />

                            <div className="absolute -bottom-6 -left-6 bg-surface border border-outline p-6 rounded shadow-[0_12px_24px_-8px_rgba(0,39,76,0.1)] w-64">
                                <div className="font-label-md text-label-md text-on-surface-variant mb-1">Target 2030 Metric</div>
                                <div className="font-data-num text-data-num text-primary text-3xl mb-2">50M+</div>
                                <div className="font-body-md text-body-md text-on-surface leading-tight">Children protected via global legislation.</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="col-span-4 md:col-span-12 h-px bg-primary w-full mb-24"></div>

                <section className="col-span-4 md:col-span-12 mb-24">
                    <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter mb-12 transition-all duration-700 ease-out opacity-100 translate-y-0">
                        <div className="col-span-4 md:col-span-4">
                            <h2 className="font-headline-lg text-headline-lg text-primary">Core Strategic Pillars</h2>
                        </div>
                        <div className="col-span-4 md:col-span-8">
                            <p className="font-body-lg text-body-lg text-on-surface-variant">
                                Our approach is structured around four interlocking pillars designed to address immediate threats while building long-term systemic resilience.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter transition-all duration-700 ease-out opacity-100 translate-y-0">

                        <div className="bg-surface border border-outline-variant p-6 flex flex-col h-full hover:border-primary transition-colors group relative overflow-hidden rounded">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-6 relative z-10 fill" data-icon="school">school</span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3 relative z-10">Digital Literacy</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow relative z-10">
                                Equipping children, parents, and educators with critical thinking skills to navigate online environments safely and responsibly.
                            </p>
                            <div className="mt-6 pt-4 border-t border-outline-variant flex justify-between items-center relative z-10">
                                <span className="font-label-md text-label-md text-on-surface">Initiative Alpha</span>
                                <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                            </div>
                        </div>

                        <div className="bg-surface border border-outline-variant p-6 flex flex-col h-full hover:border-primary transition-colors group relative overflow-hidden rounded">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-6 relative z-10 fill" data-icon="gavel">gavel</span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3 relative z-10">Safety Advocacy</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow relative z-10">
                                Driving policy changes at the governmental level to ensure tech platforms are held accountable for child safety by design.
                            </p>
                            <div className="mt-6 pt-4 border-t border-outline-variant flex justify-between items-center relative z-10">
                                <span className="font-label-md text-label-md text-on-surface">Policy Framework</span>
                                <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                            </div>
                        </div>

                        <div className="bg-surface border border-outline-variant p-6 flex flex-col h-full hover:border-primary transition-colors group relative overflow-hidden rounded">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-6 relative z-10 fill" data-icon="diversity_3">diversity_3</span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3 relative z-10">Community Engagement</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow relative z-10">
                                Fostering grassroots networks of parents and local leaders to create supportive, vigilant communities against cyber threats.
                            </p>
                            <div className="mt-6 pt-4 border-t border-outline-variant flex justify-between items-center relative z-10">
                                <span className="font-label-md text-label-md text-on-surface">Local Networks</span>
                                <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                            </div>
                        </div>

                        <div className="bg-surface border border-outline-variant p-6 flex flex-col h-full hover:border-primary transition-colors group relative overflow-hidden rounded">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-surface-container-low rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                            <span className="material-symbols-outlined text-primary text-4xl mb-6 relative z-10 fill" data-icon="biotech">biotech</span>
                            <h3 className="font-headline-md text-headline-md text-primary mb-3 relative z-10">Global Research</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant flex-grow relative z-10">
                                Funding independent studies on the psychological impacts of digital exposure to inform evidence-based interventions.
                            </p>
                            <div className="mt-6 pt-4 border-t border-outline-variant flex justify-between items-center relative z-10">
                                <span className="font-label-md text-label-md text-on-surface">Data Consortium</span>
                                <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />



            <div id="snapdom-sandbox" data-snapdom-sandbox="true" aria-hidden="true" style={{ "position": "absolute", "left": "-9999px", "top": "-9999px", "width": "0px", "height": "0px", "overflow": "hidden" }}></div>
        </>
    );
}
