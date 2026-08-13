import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

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

                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
                    <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-stack-md text-center md:text-left" style={{ "opacity": "0.5", "transition": "opacity 1s ease-out" }}>Spotlight on Success</h2>
                    <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col lg:flex-row group transition-all duration-500 hover:shadow-xl">
                        <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A close-up, high-quality image of a young student using a tablet responsibly in a cozy, sun-filled library. The lighting is golden and hopeful, focusing on the child's expression of discovery and safety. The composition follows the modern-corporate style with a slight cinematic blur on the background, emphasizing protection and empowerment in the digital age." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRPQsAcwpQsNSfNLIkFNS42AO8VmCNDW3zA5cNNtqkbGhpT4zlpVR7Ded89pb7rSMcyNIfV7oMqkcIaa924kTN_15H9dznlskRPhHhiYGzX7b91SPXUK8w7_pa2ff1v8L8rHSz19ZpcXZHoy5LX2Zhvz7WFkOX8XlH66HS7dH0YNDArnvU8Pxk63aRdxxNSAKgBld2LIcNmVwXvUjJ2EhfV2jCq2C4a9zblvbJwWOIPibynXNdWCXc" />
                        </div>
                        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-sky-tint text-deep-navy rounded-lg text-caption font-bold">CYBER-AWARENESS</span>
                            </div>
                            <h3 className="font-headline-lg text-headline-lg text-deep-navy" style={{ "opacity": "1", "transition": "opacity 1s ease-out" }}>Empowering Maya: A Journey from Vulnerability to Leadership</h3>
                            <p className="text-body-md text-on-surface-variant">
                                When 12-year-old Maya encountered aggressive cyberbullying, our rapid response team didn't just step in to help—they provided her with the tools to become a digital safety ambassador for her entire school. Today, her program reaches over 2,000 peers monthly.
                            </p>
                            <div>
                                <button className="bg-safety-yellow text-deep-navy px-8 py-3 rounded-full font-label-md flex items-center gap-2 hover:shadow-lg transition-all group/btn">
                                    Read Maya's Full Story
                                    <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-surface-container-lowest px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="max-w-container-max mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-stack-md gap-6">
                            <div>
                                <h2 className="font-headline-lg text-headline-lg text-deep-navy" style={{ "opacity": "1", "transition": "opacity 1s ease-out" }}>More Stories of Change</h2>
                                <p className="text-on-surface-variant max-w-lg mt-2 font-body-md">Real stories from the families, schools, and communities we serve every day across the globe.</p>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-4 py-2 bg-white border border-outline-variant rounded-lg text-label-md text-on-surface-variant hover:border-deep-navy transition-colors">All Stories</button>
                                <button className="px-4 py-2 bg-white border border-outline-variant rounded-lg text-label-md text-on-surface-variant hover:border-deep-navy transition-colors">Education</button>
                                <button className="px-4 py-2 bg-white border border-outline-variant rounded-lg text-label-md text-on-surface-variant hover:border-deep-navy transition-colors">Prevention</button>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

                            <div className="glass-card rounded-2xl overflow-hidden group">
                                <div className="h-56 overflow-hidden relative">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A vibrant digital illustration in a soft-edged, professional style showing two children playing a game on a laptop while a protective glowing shield symbol floats subtly in the air behind them. The color scheme is predominantly white, sky-tint, and deep navy with yellow accents, creating a sense of optimistic security." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRbn4m_7LSh_kezVCpuZ7OgSJimNF5TZ2HHfNL18Q-250Yc5DpB5b9-npa4FyiyRzKDRM7Rus47VssMZp9RHZjs-StrQDu3Y3FVn9ont94_11DfdQw-N-hr-iDC-4qyvomjkkRvOYyypED4GzYqtOfk5SrmTH62e09-abVIhu7B7C_lsYiPXnGkwwi3Lvj6VpU-1Wz4wQN_ktnLw-gBVxKY11s1eCdUOxlqt0mr-wKF03w7H3gpyQF" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-deep-navy rounded-lg text-caption font-bold">SUCCESS</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h4 className="font-headline-md text-headline-md text-deep-navy line-clamp-2">Securing the Smith Family's Digital Home</h4>
                                    <p className="text-body-md text-on-surface-variant line-clamp-3">
                                        Discover how a single consultation transformed one family's anxious relationship with technology into a journey of shared discovery.
                                    </p>
                                    <button className="text-deep-navy font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                        Read More <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl overflow-hidden group">
                                <div className="h-56 overflow-hidden relative">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A professional photograph of a teacher standing in front of a classroom using an interactive whiteboard that displays digital safety icons. The classroom is modern and filled with light, suggesting a transparent and open learning environment. The mood is empowering and educational, consistent with the foundation's corporate-modern visual style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTvmqapNIv7iNMeHYGYz2d1bGCJFXqtVx11odj8JhL1r6YK3KpXV33yR1CJPpBBcfj0Epq9a5l188oNVU1ImAqVjpKOuchj2nsS9uT70CQsZRVgPEoiztVB8SwK8T_ulv6Xw9CusjOmhFNHcqQrebUje6u1gPEUfWuPaPGGl98g62l6rcZ5DFgfpU35XQ5kO9Az4qLmIzricrOIvuOZOwfsZVDJUstHxRozhrEaX2P8bD4haVE8XHW" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-deep-navy rounded-lg text-caption font-bold">EDUCATION</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h4 className="font-headline-md text-headline-md text-deep-navy line-clamp-2">1,000 Classrooms: The Curriculum Project</h4>
                                    <p className="text-body-md text-on-surface-variant line-clamp-3">
                                        A retrospective on our most ambitious educational rollout yet, reaching underserved communities with critical digital literacy resources.
                                    </p>
                                    <button className="text-deep-navy font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                        Read More <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>

                            <div className="glass-card rounded-2xl overflow-hidden group">
                                <div className="h-56 overflow-hidden relative">
                                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A high-tech digital shield icon rendered in a 3D glassmorphic style, floating over a stylized motherboard pattern. The lighting is cool blue and deep navy, representing trust and technological prowess. This abstract visual represents the foundation's back-end work in child safety policy and technical prevention measures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGxn5QXrSf5zdE9P1Vh0HQ4CpEVdDhkbe34bl9IJOlbhiCrSqcioO2SfrjRg086k30KBuwqRjHzWsL95cr3pioR9r5EJ-FLMTOwOr8j6PbKctA6Wph8Z9GtzXLq9Jqbs6zofX4V2oU_3VPmiS9fchGTWdzLS2JqZsxuj6NSk4H5_S9vpaBiC19y0sX40tOfUF5lpp5-rr9zxjl7porB6F1oTnyCjGdoveZuQDjm2l-zaUk_dS1LtFM" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-deep-navy rounded-lg text-caption font-bold">TECH</div>
                                </div>
                                <div className="p-6 space-y-4">
                                    <h4 className="font-headline-md text-headline-md text-deep-navy line-clamp-2">Algorithm for Good: Preventing Harm Early</h4>
                                    <p className="text-body-md text-on-surface-variant line-clamp-3">
                                        How our new technical tool helped identify and mitigate digital threats before they could impact a vulnerable group of students.
                                    </p>
                                    <button className="text-deep-navy font-bold flex items-center gap-1 hover:gap-2 transition-all">
                                        Read More <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-stack-lg text-center">
                            <button className="border-2 border-deep-navy text-deep-navy px-12 py-4 rounded-full font-label-md hover:bg-deep-navy hover:text-white transition-all">
                                Load More Impact Stories
                            </button>
                        </div>
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
