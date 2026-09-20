import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { organisationSchema } from '../lib/seo';
import { Link } from 'react-router-dom';
import heroClassroom from "../assets/images/hero/hero-classroom-computers.jpg";
import heroKidsTablet from "../assets/images/hero/hero-kids-tablet.jpg";
import Footer from '../components/Footer';
import LatestNews from '../components/LatestNews';
import FromOurBlog from '../components/FromOurBlog';
import SupportOurWork from '../components/SupportOurWork';
import digitalChildren from '../assets/images/digital children.jpg'

const PROGRAMMES = [
    {
        title: 'Building healthy digital lives',
        description: 'Digital literacy, online safety, online child protection, critical thinking, and healthy technology habits for children, parents, and educators.',
        icon: (
            <path d="M12 3.5L19 6V11.5C19 16 16 19.3 12 20.5C8 19.3 5 16 5 11.5V6L12 3.5Z" strokeWidth="1.5" strokeLinejoin="round" />
        )
    },
    {
        title: 'Empowering young digital creators',
        description: 'Self-expression through storytelling, filmmaking, photography, podcasting, and other creative media.',
        icon: (
            <>
                <path d="M3.5 8.5C3.5 7.4 4.4 6.5 5.5 6.5H8L9 5H15L16 6.5H18.5C19.6 6.5 20.5 7.4 20.5 8.5V16.5C20.5 17.6 19.6 18.5 18.5 18.5H5.5C4.4 18.5 3.5 17.6 3.5 16.5V8.5Z" strokeWidth="1.5" strokeLinejoin="round" />
                <circle cx="12" cy="12.5" r="3.4" strokeWidth="1.5" />
            </>
        )
    },
    {
        title: 'Research, advocacy & child rights',
        description: "Research and advocacy that strengthen child protection, influence policy, and amplify children's voices online.",
        icon: (
            <>
                <path d="M3.5 10.2V14.3C3.5 14.9 3.9 15.3 4.5 15.3H6.3L12.5 19V5.5L6.3 9.2H4.5C3.9 9.2 3.5 9.6 3.5 10.2Z" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M15.6 8.4C16.7 9.3 17.3 10.6 17.3 12C17.3 13.4 16.7 14.7 15.6 15.6" strokeWidth="1.5" strokeLinecap="round" />
            </>
        )
    },
    {
        title: 'Digital mental health & wellbeing',
        description: "Healthy relationships with technology, supporting children's and young people's digital resilience.",
        icon: (
            <path d="M12 19.3C12 19.3 4 14.6 4 9.1C4 6.4 6.1 4.3 8.6 4.3C10.1 4.3 11.4 5 12 6.3C12.6 5 13.9 4.3 15.4 4.3C17.9 4.3 20 6.4 20 9.1C20 14.6 12 19.3 12 19.3Z" strokeWidth="1.5" strokeLinejoin="round" />
        )
    }
];

const SLIDES = [
    {
        img: heroClassroom,
        alt: "A teacher helping children use a computer in a classroom",
        position: "55% 35%",
        title: <>Education for a Better <br /><span className="text-safety-yellow">Digital Future</span></>,
        body: "Providing the resources and training needed to equip the next generation with essential digital literacy skills.",
        ctas: [
            { label: "Learn More", variant: "primary" },

        ],
    },
    {
        img: digitalChildren,
        alt: "Children using phones and tablets together on a sofa",
        position: "50% 45%",
        title: <>Education for a Better <br /><span className="text-safety-yellow">Digital Future</span></>,
        body: "Providing the resources and training needed to equip the next generation with essential digital literacy skills.",
        ctas: [{ label: "Learn More", variant: "primary" }],
    },
    {
        img: heroKidsTablet,
        alt: "Two children looking at a tablet together",
        position: "58% 38%",
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

    const [counts, setCounts] = useState({
        children: 0,
        teachers: 0,
        schools: 0,
        advocates: 0,
        initiatives: 0,
    });

    useEffect(() => {
        const targets = {
            children: 10000,
            teachers: 100,
            schools: 80,
            advocates: 321,
            initiatives: 25,
        };

        const duration = 2000; // 2 seconds
        const intervalTime = 20;
        const steps = duration / intervalTime;

        let step = 0;

        const interval = setInterval(() => {
            step++;

            const progress = Math.min(step / steps, 1);

            setCounts({
                children: Math.floor(targets.children * progress),
                teachers: Math.floor(targets.teachers * progress),
                schools: Math.floor(targets.schools * progress),
                advocates: Math.floor(targets.advocates * progress),
                initiatives: Math.floor(targets.initiatives * progress),
            });

            if (progress === 1) {
                clearInterval(interval);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    }, []);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => goTo(current + 1), 5000);
        return () => clearInterval(timer);
    }, [current, goTo]);

    return (
        <>
            <Seo
              title="Digital safety and wellbeing for every child"
              description="IFDC protects and empowers children in the digital world through education, advocacy and research in Sri Lanka and beyond. Explore our programmes, impact and ways to support."
             structuredData={organisationSchema}
            />
            <Navbar />

            {/* ── Hero Carousel ── */}
            <section className="relative w-full overflow-hidden bg-deep-navy h-[440px] md:h-[400px]" id="hero-carousel">
                {SLIDES.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`absolute inset-0 transition-opacity duration-1000 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 to-transparent z-10" />
                        <img
                            alt={slide.alt}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: slide.position }}
                            src={slide.img}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            fetchPriority={idx === 0 ? 'high' : 'auto'}
                            decoding="async"
                        />
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full">
                                <div className={`max-w-2xl space-y-4 md:space-y-stack-md text-on-primary ${idx === current ? 'animate-slide-up' : ''}`}>
                                    <h1 className="font-display-lg text-[2.1rem] leading-[1.15] sm:text-[2.75rem] md:text-[3.5625rem] drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="font-body-lg text-[1rem] leading-relaxed md:text-[1.125rem] text-white/90 max-w-lg drop-shadow-md">
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

            {/* <section className="bg-yellow-400 pt-10 pb-10"> <div className="max-w-7xl mx-auto px-margin-desktop"> <div className="grid grid-cols-2 md:grid-cols-5 gap-8"> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.children >= 1000 ? `${Math.floor(counts.children / 1000)}k+` : counts.children} </div> <div className="font-label-md text-deep-navy"> Children Reached </div> </div> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.teachers}+ </div> <div className="font-label-md text-deep-navy"> Teachers Trained </div> </div> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.schools}+ </div> <div className="font-label-md text-deep-navy"> Schools Engaged </div> </div> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.advocates} </div> <div className="font-label-md text-deep-navy"> Youth Advocates </div> </div> <div className="text-center p-4 col-span-2 md:col-span-1"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.initiatives} </div> <div className="font-label-md text-deep-navy"> Initiatives </div> </div> </div> </div> </section> */}

            <section className="bg-safety-yellow pt-10 pb-10">
                <div className="max-w-7xl mx-auto px-margin-desktop">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

                        <div className="text-center p-4">
                            <div className="text-deep-navy font-display-lg text-headline-lg mb-2">
                                {counts.children >= 1000
                                    ? `${Math.floor(counts.children / 1000)}k+`
                                    : counts.children}
                            </div>
                            <div className="font-label-md text-deep-navy">
                                Children Reached
                            </div>
                        </div>

                        <div className="text-center p-4">
                            <div className="text-deep-navy font-display-lg text-headline-lg mb-2">
                                {counts.teachers}+
                            </div>
                            <div className="font-label-md text-deep-navy">
                                Teachers Trained
                            </div>
                        </div>

                        <div className="text-center p-4">
                            <div className="text-deep-navy font-display-lg text-headline-lg mb-2">
                                {counts.schools}+
                            </div>
                            <div className="font-label-md text-deep-navy">
                                Schools Engaged
                            </div>
                        </div>

                        <div className="text-center p-4">
                            <div className="text-deep-navy font-display-lg text-headline-lg mb-2">
                                {counts.advocates}
                            </div>
                            <div className="font-label-md text-deep-navy">
                                Youth Advocates
                            </div>
                        </div>

                        <div className="text-center p-4 col-span-2 md:col-span-1">
                            <div className="text-deep-navy font-display-lg text-headline-lg mb-2">
                                {counts.initiatives}
                            </div>
                            <div className="font-label-md text-deep-navy">
                                Initiatives
                            </div>
                        </div>

                    </div>
                </div>
            </section>




            {/* Our Programmes */}
            <section className="bg-deep-navy px-[6vw] pt-[4.5rem] pb-20">

                <div className="max-w-[600px] mx-auto mb-12 text-center">
                    <h2 className="font-headline-lg text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.15] tracking-[-0.01em] text-[#F4F7FA] mb-4">
                        Our Programmes
                    </h2>
                    <p className="inline-flex items-center gap-3 text-[1.2rem] md:text-[1.35rem] font-semibold tracking-[0.01em] leading-[1.5] text-safety-yellow">
                        <span className="w-8 h-0.5 bg-safety-yellow/60 rounded-full" aria-hidden="true"></span>
                        Four strategic pillars. One goal.
                        <span className="w-8 h-0.5 bg-safety-yellow/60 rounded-full" aria-hidden="true"></span>
                    </p>
                </div>

                <div className="relative max-w-[420px] min-[901px]:max-w-[1180px] mx-auto grid grid-cols-1 min-[901px]:grid-cols-4 gap-[2.4rem] min-[901px]:gap-0">
                    {/* Horizontal connector behind the icons (desktop) */}
                    <span className="hidden min-[901px]:block absolute top-[26px] left-[12.5%] right-[12.5%] h-px bg-[#F4F7FA]/20 z-0" aria-hidden="true"></span>

                    {PROGRAMMES.map((programme, index) => (
                        <div
                            key={programme.title}
                            className={`relative pb-[2.4rem] last:pb-0 min-[901px]:pb-0 min-[901px]:pr-[2.2rem] ${
                                index > 0
                                    ? 'border-t border-[#F4F7FA]/20 pt-[2.4rem] min-[901px]:border-t-0 min-[901px]:pt-0 min-[901px]:border-l min-[901px]:pl-[2.2rem]'
                                    : ''
                            }`}
                        >
                            <span className="relative z-10 w-[52px] h-[52px] rounded-full border-[1.5px] border-[#F4F7FA] bg-deep-navy flex items-center justify-center mb-[1.6rem]">
                                <svg viewBox="0 0 24 24" fill="none" className="w-[24px] h-[24px] stroke-[#FFE100]" aria-hidden="true">
                                    {programme.icon}
                                </svg>
                            </span>

                            <h3 className="font-headline-md text-[1.22rem] leading-[1.32] text-[#F4F7FA] mb-[0.75rem] min-[901px]:max-w-[20ch]">
                                {programme.title}
                            </h3>
                            <p className="text-[1.02rem] leading-[1.65] text-[#93ABBB] min-[901px]:max-w-[28ch]">
                                {programme.description}
                            </p>
                            <span className="block w-[22px] h-[3px] rounded-sm bg-[#FFE100] mt-[1.2rem]" aria-hidden="true"></span>
                        </div>
                    ))}
                </div>

                {/* Converging outcome */}
                <div className="relative max-w-[1180px] mx-auto pt-[1.6rem] min-[901px]:pt-0">
                    <span className="min-[901px]:hidden absolute top-0 left-1/2 w-px h-[1.6rem] bg-[#F4F7FA]/20" aria-hidden="true"></span>

                    <svg className="hidden min-[901px]:block w-full h-14" viewBox="0 0 100 32" preserveAspectRatio="none" aria-hidden="true">
                        {[12.5, 37.5, 62.5, 87.5].map((x) => (
                            <path key={x} d={`M${x} 0 L50 32`} fill="none" stroke="rgba(244,247,250,0.2)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
                        ))}
                    </svg>

                    <div className="relative z-10 w-fit mx-auto min-[901px]:-mt-0.5 text-center px-[1.6rem] py-[1.4rem] min-[901px]:px-[2.6rem] min-[901px]:py-[1.6rem] border-[1.5px] border-[#F4F7FA] rounded-[14px] bg-deep-navy">
                        <span className="block text-[0.82rem] text-[#93ABBB] mb-[0.6rem]">Our shared goal</span>
                        <span className="block font-headline-md text-[1.05rem] min-[901px]:text-[1.25rem] leading-[1.35] whitespace-nowrap text-[#F4F7FA]">
                            Every child thrives online
                        </span>
                        <span className="block w-[26px] h-[3px] rounded-sm bg-[#FFE100] mt-[0.9rem] mx-auto" aria-hidden="true"></span>
                    </div>
                </div>
            </section>




            <LatestNews />

            <FromOurBlog />

            <SupportOurWork />

            <Footer />

        </>
    );
}
