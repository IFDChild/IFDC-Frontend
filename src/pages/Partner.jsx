import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Partner() {
    return (
        <>
            <Navbar />

            <main className="pt-20">

                <section className="relative py-stack-lg md:py-24 overflow-hidden">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-stack-lg items-center">
                        <div className="z-10">
                            <span className="inline-block bg-sky-tint text-deep-navy font-label-md px-4 py-1 rounded-full mb-4">Strategic Partnerships</span>
                            <h1 className="font-display-lg text-display-lg md:text-headline-lg-mobile text-deep-navy leading-tight mb-6">
                                Partner with Us to Protect the <span className="text-secondary">Digital Frontier</span>
                            </h1>
                            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                                Join a global network of organizations dedicated to creating a safer, more transparent, and child-centered digital world. Together, we can build the future our children deserve.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link className="bg-deep-navy text-on-primary font-bold px-8 py-4 rounded-full text-center hover:bg-opacity-95 transition-all" to="#">Inquire Now</Link>
                                <Link className="bg-white border-2 border-deep-navy text-deep-navy font-bold px-8 py-4 rounded-full text-center hover:bg-sky-tint transition-all" to="#">Learn More</Link>
                            </div>
                        </div>
                        <div className="relative">

                            <div className="glass-card rounded-3xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500" style={{ "-MouseX": "320.33929443359375px", "-MouseY": "179.27548217773438px" }}>
                                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl" data-alt="A diverse group of professionals—including developers, educators, and policy makers—collaborating in a high-tech, bright, glass-walled boardroom. The lighting is soft and natural, emphasizing a trustworthy and professional atmosphere. The color palette features deep navy blues, soft whites, and vibrant yellow accents, reflecting a modern non-profit aesthetic dedicated to digital technology and safety." style={{ "backgroundImage": "url('https" }}></div>
                            </div>

                            <div className="absolute -top-10 -right-10 w-48 h-48 bg-safety-yellow opacity-20 blur-3xl rounded-full"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-deep-navy opacity-10 blur-3xl rounded-full"></div>
                        </div>
                    </div>
                </section>

                <section className="py-stack-lg bg-surface-container-low" id="benefits">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center mb-16">
                        <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-4">Why Partner With Us?</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                            We combine technical expertise with advocacy to create systemic change. Our partners gain access to a unique ecosystem of digital safety resources.
                        </p>
                    </div>
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-8">

                        <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300" style={{ "-MouseX": "331px", "-MouseY": "254.45751953125px" }}>
                            <div className="w-16 h-16 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 text-deep-navy group-hover:bg-safety-yellow transition-colors">
                                <span className="material-symbols-outlined text-4xl">public</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Global Reach</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Leverage our network across 50+ countries to scale your impact and reach millions of families, educators, and children worldwide.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300" style={{ "-MouseX": "157px", "-MouseY": "239px" }}>
                            <div className="w-16 h-16 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 text-deep-navy group-hover:bg-safety-yellow transition-colors">
                                <span className="material-symbols-outlined text-4xl">verified_user</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Expert Resources</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Gain exclusive access to our research, proprietary educational modules, and real-time threat intelligence reports on digital safety.
                            </p>
                        </div>

                        <div className="glass-card p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-300" style={{ "-MouseX": "131px", "-MouseY": "57px" }}>
                            <div className="w-16 h-16 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 text-deep-navy group-hover:bg-safety-yellow transition-colors">
                                <span className="material-symbols-outlined text-4xl">campaign</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Strategic Advocacy</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Collaborate on high-level policy initiatives that shape the regulatory landscape of the digital economy for child protection.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-stack-lg relative" id="inquiry-form">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-5 gap-stack-lg">
                        <div className="lg:col-span-2">
                            <div className="sticky top-28">
                                <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-6">Start a Conversation</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                                    Our team is ready to explore how your organization can contribute to a safer digital frontier. Fill out the form, and a partnership director will contact you within 48 hours.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-safety-yellow p-2 rounded-lg text-deep-navy">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-deep-navy">Email Us</h4>
                                            <p className="text-on-surface-variant">partnerships@childsafety.org</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="bg-safety-yellow p-2 rounded-lg text-deep-navy">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-deep-navy">Headquarters</h4>
                                            <p className="text-on-surface-variant">1200 Safety Plaza, Tech District, San Francisco</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <form className="glass-card p-8 md:p-12 rounded-[2rem] shadow-xl space-y-6" style={{ "-MouseX": "336.80206298828125px", "-MouseY": "158.6666259765625px" }}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-label-md font-bold text-deep-navy mb-2">Organization Name</label>
                                        <input className="w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all" placeholder="e.g., Global Tech Inc." type="text" />
                                    </div>
                                    <div>
                                        <label className="block text-label-md font-bold text-deep-navy mb-2">Contact Person</label>
                                        <input className="w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all" placeholder="Jane Doe" type="text" />
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-label-md font-bold text-deep-navy mb-2">Email Address</label>
                                        <input className="w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all" placeholder="jane@organization.com" type="email" />
                                    </div>
                                    <div>
                                        <label className="block text-label-md font-bold text-deep-navy mb-2">Website</label>
                                        <input className="w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all" placeholder="https://www.website.com" type="url" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-label-md font-bold text-deep-navy mb-2">Partnership Type</label>
                                    <select className="w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all">
                                        <option>Corporate</option>
                                        <option>NGO</option>
                                        <option>Government</option>
                                        <option>Educational</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-label-md font-bold text-deep-navy mb-2">How would you like to collaborate?</label>
                                    <textarea className="w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all" placeholder="Tell us about your mission and goals..." rows="4"></textarea>
                                </div>
                                <div className="pt-4">
                                    <button className="w-full bg-deep-navy text-on-primary font-bold py-4 rounded-xl hover:shadow-lg transform active:scale-[0.98] transition-all" type="submit">
                                        Submit Inquiry
                                    </button>
                                    <p className="text-caption text-on-surface-variant mt-4 text-center">
                                        By submitting, you agree to our <Link className="underline" to="#">Privacy Policy</Link> regarding your data.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="py-stack-lg border-t border-sky-tint">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                        <p className="text-center font-label-md text-label-md text-on-surface-variant mb-10 uppercase tracking-widest">Trusted By Leaders In Industry</p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
                            <span className="font-headline-md font-extrabold text-deep-navy">TECH GIANT</span>
                            <span className="font-headline-md font-extrabold text-deep-navy">GLOBAL NGO</span>
                            <span className="font-headline-md font-extrabold text-deep-navy">EDU-NET</span>
                            <span className="font-headline-md font-extrabold text-deep-navy">NATION GOV</span>
                            <span className="font-headline-md font-extrabold text-deep-navy">CLOUD SYNC</span>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />


        </>
    );
}
