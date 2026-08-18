import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import cyberbullyingNews from "../assets/images/Cyberbullying News.png";
import youthSummit from "../assets/images/Youth Summit.png";
import Footer from '../components/Footer';
import digitalboy from '../assets/images/digitalboy.jpg'

const SLIDES = [
    {
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBT1lzP0vjoJMZq-EZIGa89xAGcgVxForLe9R-P5y5lpxEGgLTztRFhMR8npV4lnN80ypIJFnktorAmOWb6jDvroIPmQeMBvRXLTDzOq0pkDEMxBvcoPs9jRIwRm1sj-lt1lwdv5cgG08hSFY_qO7nprx9ylx5WD4GqcL_N3L-5O_8Fx55wiFHWkwNhK2e8CSAIQndpv6x0I6FtfICjzWwleWWo5AffQxZ1V4Zus41pu352xg6xJyUW",
        alt: "Empowering Every Child",
        title: <>Empowering Every Child <br /><span className="text-safety-yellow">Through Digital safety</span></>,
        body: "We bridge the digital divide while ensuring every child can explore the online world safely, confidently, and with the support they deserve.",
        ctas: [
            { label: "Learn More", variant: "primary" },

        ],
    },
    {
        img: digitalboy,
        alt: "Fostering Digital Safety Communities",
        title: <>Fostering Digital <br /><span className="text-safety-yellow">Safety Communities</span></>,
        body: "Join our network of advocates and educators working together to create a secure online environment for our youth.",
        ctas: [{ label: "Learn More", variant: "primary" }],
    },
    {
        img: youthSummit,
        alt: "Education for a Better Digital Future",
        title: <>Education for a Better <br /><span className="text-safety-yellow">Digital Future</span></>,
        body: "Providing the resources and training needed to equip the next generation with essential digital literacy skills.",
        ctas: [{ label: "Join Our Mission", variant: "primary" }],
    },
];

export default function Home() {
    const [current, setCurrent] = useState(0);

    const goTo = useCallback((idx) => {
        setCurrent((idx + SLIDES.length) % SLIDES.length);
    }, []);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => goTo(current + 1), 5000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    return (
        <>
            <Navbar />

            {/* ── Hero Carousel ── */}
            <section className="relative w-full overflow-hidden bg-deep-navy" style={{ height: '400px' }} id="hero-carousel">
                {SLIDES.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-transparent z-10" />
                        <img alt={slide.alt} className="w-full h-full object-cover" src={slide.img} />
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="max-w-7xl mx-auto px-margin-desktop w-full">
                                <div className={`max-w-2xl space-y-stack-md text-on-primary ${idx === current ? 'animate-slide-up' : ''}`}>
                                    <h1 className="font-display-lg text-display-lg leading-tight drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="font-body-lg text-body-lg text-white/90 max-w-lg drop-shadow-md">
                                        {slide.body}
                                    </p>
                                    {/* <div className="flex flex-wrap gap-gutter pt-4" >
                                        <a href='/about'
                                            {slide.ctas.map((cta, ci) => (
                                                cta.variant === 'primary'
                                                    ? <button key={ci} className="bg-safety-yellow text-deep-navy px-8 py-4 rounded-full font-label-md hover:brightness-110 transition-all active:scale-95 shadow-lg" >{cta.label}</button>
                                                    : ''
                                            ))}
                                        ></a>
                                    </div> */}
                                    <div className="flex pt-4">
                                        <Link
                                            to="/about"
                                            className="bg-safety-yellow text-deep-navy px-8 py-4 rounded-full font-label-md hover:brightness-110 transition-all active:scale-95 shadow-lg"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Prev / Next arrows */}
                <button
                    aria-label="Previous Slide"
                    onClick={() => goTo(current - 1)}
                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors border border-white/30 shadow-lg"
                >
                    <span className="material-symbols-outlined">arrow_back_ios_new</span>
                </button>
                <button
                    aria-label="Next Slide"
                    onClick={() => goTo(current + 1)}
                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-colors border border-white/30 shadow-lg"
                >
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>

                {/* Dot indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            aria-label={`Slide ${idx + 1}`}
                            onClick={() => goTo(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-safety-yellow scale-125' : 'bg-white/50 hover:bg-white/80'}`}
                        />
                    ))}
                </div>
            </section>

            <section className="bg-surface section-fade-in visible pt-10 pb-10">
                <div className="max-w-7xl mx-auto px-margin-desktop">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter">
                        <div className="text-center p-6 rounded-2xl glass-card border-sky-tint">
                            <div className="text-primary font-display-lg text-headline-lg mb-2">10k+</div>
                            <div className="font-label-md text-on-surface-variant">Children Reached</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-card border-sky-tint">
                            <div className="text-primary font-display-lg text-headline-lg mb-2">100+</div>
                            <div className="font-label-md text-on-surface-variant">Teachers Trained</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-card border-sky-tint">
                            <div className="text-primary font-display-lg text-headline-lg mb-2">80+</div>
                            <div className="font-label-md text-on-surface-variant">Schools Engaged</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-card border-sky-tint">
                            <div className="text-primary font-display-lg text-headline-lg mb-2">321</div>
                            <div className="font-label-md text-on-surface-variant">Youth Advocates</div>
                        </div>
                        <div className="text-center p-6 rounded-2xl glass-card border-sky-tint col-span-2 md:col-span-1">
                            <div className="text-primary font-display-lg text-headline-lg mb-2">25</div>
                            <div className="font-label-md text-on-surface-variant">Initiatives</div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-stack-lg px-margin-desktop bg-surface-container-low -mt-8 relative z-20 rounded-t-[3rem]">
                <div className="max-w-container-max mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    <div className="bg-primary p-8 rounded-[2rem] shadow-xl border-t-4 border-yellow-500 hover:-translate-y-2 transition-transform duration-300 reveal active">
                        <div className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-[32px]">health_and_safety</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md  mb-4 text-yellow-400">#DIGITALWISE</h3>
                        <h6 className="font-headline-sm text-headline-sm text-yellow-500 mb-2 ">Building Healthy Digital Lives</h6>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-white">DigitalWise equips children, parents, educators, and caregivers with the knowledge and skills to
                            use digital technologies safely, responsibly, and confidently. Through training, mentoring, and
                            awareness programmes, we promote digital literacy, online safety, digital wellbeing, critical
                            thinking, and healthy digital habits. The programme addresses major online threats, including
                            cyberbullying, online grooming, sextortion, child sexual abuse material (CSAM), child
                            sexual exploitation, the live streaming of child sexual abuse, harmful online content,
                            misinformation, privacy risks, digital addiction, and AI-enabled harms, helping families
                            build safer and healthier digital lives.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-4 border-yellow-500  hover:-translate-y-2 transition-transform duration-300 reveal active">
                        <div className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-[32px]">diversity_3</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">#KIDSPRESSION</h3>
                        <h6 className="font-headline-sm text-headline-sm text-deep-navy mb-2">Empowering Young Digital Creators</h6>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">KIDSPRESSION empowers children to become creative, confident, and responsible digital
                            citizens. Through digital storytelling, filmmaking, photography, podcasting, journalism, and
                            other creative media, the programme nurtures children&#39;s talents and voices. Guided by the
                            United Nations Convention on the Rights of the Child (UNCRC), it promotes children&#39;s
                            rights to access, participation, freedom of expression, information, and creativity, while
                            encouraging them to become active creators rather than passive consumers of digital content.</p>
                    </div>
                    <div className="bg-primary p-8 rounded-[2rem] shadow-xl border-t-4 border-yellow-500  hover:-translate-y-2 transition-transform duration-300 reveal active">
                        <div className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-[32px]">record_voice_over</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-yellow-400 mb-4">#VOICE4KIDS</h3>
                        <h6 className="font-headline-sm text-headline-sm text-yellow-500 mb-2">Research, Advocacy, and Child Rights</h6>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed text-white">Voice4Kids is IFDC&#39;s research and advocacy platform dedicated to advancing children&#39;s rights in
                            the digital environment. We generate evidence on issues such as cyberbullying, online
                            grooming, child sexual exploitation and abuse, CSAM, sextortion, the live streaming of
                            child sexual abuse, harmful online content, digital addiction, AI-related harms,
                            misinformation, and privacy risks to strengthen policy, improve child protection systems,
                            promote ethical media practices, and amplify children&#39;s voices in shaping a safer digital future.</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-4 border-yellow-500  hover:-translate-y-2 transition-transform duration-300 reveal active">
                        <div className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-[32px]">movie_creation</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">#TECHCARE</h3>
                        <h6 className="font-headline-sm text-headline-sm text-deep-navy mb-2">Advancing Digital Mental Health and Wellbeing</h6>
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">TECHCARE promotes digital mental health and healthy relationships with technology among
                            children, young people, parents, and educators. Through research, education, mentoring, and
                            evidence-based interventions, the programme addresses digital addiction, problematic social
                            media use, gaming disorder, unhealthy online relationships, cyberbullying, fear of missing
                            out (FoMO), anxiety, depression, loneliness, sleep disruption, problematic pornography
                            consumption, digital burnout, and AI-related psychological impacts. It promotes digital
                            resilience, healthy technology use, mindfulness, positive digital wellbeing, and balanced online
                            lives.</p>
                    </div>


                </div>
            </section>

            <section className="py-24 bg-yellow-200 section-fade-in visible ">
                <div className="  max-w-7xl mx-auto px-margin-desktop">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="space-y-4">
                            <span className="text-primary font-label-md tracking-widest uppercase">Updates</span>
                            <h2 className="font-headline-lg text-headline-lg">Latest from the Foundation</h2>
                        </div>
                        <button className="bg-surface-container-high text-on-surface px-8 py-3 rounded-full font-label-md hover:bg-primary hover:text-on-primary transition-all">
                            View All Stories
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        <article className="group">
                            <div className="overflow-hidden rounded-3xl mb-6 shadow-md">
                                <img alt="Cyberbullying News" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" src={cyberbullyingNews} />
                            </div>
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1 bg-error-container text-on-error-container rounded-full text-caption">Digital Safety</span>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary transition-colors">Combatting Cyberbullying in the Age of AI</h3>
                                <p className="text-on-surface-variant leading-relaxed">As generative AI becomes more accessible, we explore new methods to protect teenagers from automated harassment and deepfakes.</p>
                                <Link className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all" to="/news/1">
                                    Read Full Article <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                                </Link>
                            </div>
                        </article>

                        <article className="group">
                            <div className="overflow-hidden rounded-3xl mb-6 shadow-md">
                                <img alt="Youth Summit" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" src={youthSummit} />
                            </div>
                            <div className="space-y-4">
                                <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full text-caption">Event Recap</span>
                                <h3 className="font-headline-md text-headline-md group-hover:text-primary transition-colors">Global Youth Summit 2024: Digital Rights</h3>
                                <p className="text-on-surface-variant leading-relaxed">Highlights from our recent summit where over 500 youth leaders discussed the right to equitable and safe internet access worldwide.</p>
                                <Link className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all" to="/news/2">
                                    Read Full Article <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="py-24 px-margin-desktop">
                <div className="max-w-7xl mx-auto">
                    <div className="relative bg-primary-container rounded-[3rem] overflow-hidden p-12 md:p-24 text-center">

                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute -top-24 -left-24 w-96 h-96 bg-safety-yellow rounded-full blur-[100px]"></div>
                            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-tint rounded-full blur-[100px]"></div>
                        </div>
                        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                            <h2 className="font-display-lg text-headline-lg text-white">Your support changes lives. <br /> Help us secure their digital future.</h2>
                            <p className="text-on-primary-container font-body-lg text-lg">Every donation provides critical resources for rural schools, safety workshops for parents, and comprehensive training for youth mentors. Join us in building a safer digital world for every child.</p><div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-white/90 font-label-md"><div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10"><span className="text-safety-yellow text-headline-md mb-1">$25</span><span className="">One Safety Kit</span></div><div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10"><span className="text-safety-yellow text-headline-md mb-1">$50</span><span className="">Parent Workshop</span></div><div className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10"><span className="text-safety-yellow text-headline-md mb-1">$100</span><span className="">Youth Mentorship</span></div></div>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                                <button className="bg-safety-yellow text-primary px-10 py-5 rounded-full font-label-md text-lg shadow-xl hover:scale-105 transition-transform active:scale-95">
                                    Donate Now
                                </button>
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-label-md text-lg hover:bg-white/20 transition-all active:scale-95">
                                    Become a Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </>
    );
}
