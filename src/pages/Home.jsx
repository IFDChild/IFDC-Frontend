import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import cyberbullyingNews from "../assets/images/Cyberbullying News.png";
import youthSummit from "../assets/images/coverImage1.jpg";
import Footer from '../components/Footer';
import digitalchild from '../assets/images/childwithlap.jpg'
import digitalChildren from '../assets/images/digital children.jpg'
import digitalSafetyNews from "../assets/images/digitalboy.jpg";
import digitalWellbeingBlog from "../assets/images/digitalboy.jpg";
import onlineSafetyBlog from '../assets/images/digital children.jpg'
import youthTechnologyBlog from "../assets/images/coverImage1.jpg";

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
        img: youthSummit,
        alt: "Empowering Every Child",
        title: <>Education for a Better <br /><span className="text-safety-yellow">Digital Future</span></>,
        body: "Providing the resources and training needed to equip the next generation with essential digital literacy skills.",
        ctas: [
            { label: "Learn More", variant: "primary" },

        ],
    },
    {
        img: digitalChildren,
        alt: "Fostering Digital Safety Communities",
        title: <>Education for a Better <br /><span className="text-safety-yellow">Digital Future</span></>,
        body: "Providing the resources and training needed to equip the next generation with essential digital literacy skills.",
        ctas: [{ label: "Learn More", variant: "primary" }],
    },
    {
        img: digitalchild,
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

            {/* <section className="bg-yellow-400 pt-10 pb-10"> <div className="max-w-7xl mx-auto px-margin-desktop"> <div className="grid grid-cols-2 md:grid-cols-5 gap-8"> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.children >= 1000 ? `${Math.floor(counts.children / 1000)}k+` : counts.children} </div> <div className="font-label-md text-deep-navy"> Children Reached </div> </div> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.teachers}+ </div> <div className="font-label-md text-deep-navy"> Teachers Trained </div> </div> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.schools}+ </div> <div className="font-label-md text-deep-navy"> Schools Engaged </div> </div> <div className="text-center p-4"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.advocates} </div> <div className="font-label-md text-deep-navy"> Youth Advocates </div> </div> <div className="text-center p-4 col-span-2 md:col-span-1"> <div className="text-deep-navy font-display-lg text-headline-lg mb-2"> {counts.initiatives} </div> <div className="font-label-md text-deep-navy"> Initiatives </div> </div> </div> </div> </section> */}

            <section className="bg-yellow-400 pt-10 pb-10">
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
            <section className="bg-[#0A3D64] px-[6vw] pt-[4.5rem] pb-20">

                <div className="max-w-[600px] mx-auto mb-12 text-center">
                    <h2 className="font-headline-lg text-[clamp(2rem,3.2vw,2.6rem)] leading-[1.15] tracking-[-0.01em] text-[#F4F7FA] mb-4">
                        Our Programmes
                    </h2>
                    <p className="text-[1.05rem] leading-[1.65] text-[#C3D2DE]">Four strategic pillars. One goal.</p>
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
                            <span className="relative z-10 w-[52px] h-[52px] rounded-full border-[1.5px] border-[#F4F7FA] bg-[#0A3D64] flex items-center justify-center mb-[1.6rem]">
                                <svg viewBox="0 0 24 24" fill="none" className="w-[22px] h-[22px] stroke-[#F4F7FA]" aria-hidden="true">
                                    {programme.icon}
                                </svg>
                            </span>

                            <h3 className="font-headline-md text-[1.08rem] leading-[1.34] text-[#F4F7FA] mb-[0.7rem] min-[901px]:max-w-[20ch]">
                                {programme.title}
                            </h3>
                            <p className="text-[0.92rem] leading-[1.62] text-[#93ABBB] min-[901px]:max-w-[27ch]">
                                {programme.description}
                            </p>
                            <span className="block w-[22px] h-[3px] rounded-sm bg-[#FEE502] mt-[1.2rem]" aria-hidden="true"></span>
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

                    <div className="relative z-10 w-fit mx-auto min-[901px]:-mt-0.5 text-center px-[1.6rem] py-[1.4rem] min-[901px]:px-[2.6rem] min-[901px]:py-[1.6rem] border-[1.5px] border-[#F4F7FA] rounded-[14px] bg-[#0A3D64]">
                        <span className="block text-[0.82rem] text-[#93ABBB] mb-[0.6rem]">Our shared goal</span>
                        <span className="block font-headline-md text-[1.05rem] min-[901px]:text-[1.25rem] leading-[1.35] whitespace-nowrap text-[#F4F7FA]">
                            Every child thrives online
                        </span>
                        <span className="block w-[26px] h-[3px] rounded-sm bg-[#FEE502] mt-[0.9rem] mx-auto" aria-hidden="true"></span>
                    </div>
                </div>
            </section>




            <section className="py-24 bg-yellow-200 section-fade-in visible">
                <div className="max-w-7xl mx-auto px-margin-desktop">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className="space-y-4">
                            <span className="text-primary font-label-md tracking-widest uppercase">
                                Updates
                            </span>

                            <h2 className="font-headline-lg text-headline-lg">
                                Latest from the Foundation
                            </h2>

                            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                                Stay updated with our latest news, events, initiatives, and stories
                                from the foundation.
                            </p>
                        </div>
                    </div>

                    {/* News Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Card 1 */}
                        <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">

                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={cyberbullyingNews}
                                    alt="Cyberbullying News"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-7 flex flex-col flex-1">

                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block px-4 py-1.5 bg-error-container text-on-error-container rounded-full text-caption">
                                        Digital Safety
                                    </span>

                                    <span className="text-sm text-on-surface-variant">
                                        June 18, 2024
                                    </span>
                                </div>

                                <h3 className="font-headline-md text-headline-md leading-tight group-hover:text-primary transition-colors">
                                    Combatting Cyberbullying in the Age of AI
                                </h3>

                                <p className="text-on-surface-variant leading-relaxed mt-4 line-clamp-3">
                                    As generative AI becomes more accessible, we explore new methods
                                    to protect teenagers from automated harassment and deepfakes.
                                </p>

                                <div className="mt-auto pt-6">
                                    <Link
                                        to="/news/1"
                                        className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all"
                                    >
                                        Read Full Article
                                        <span className="material-symbols-outlined text-[18px]">
                                            trending_flat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>


                        {/* Card 2 */}
                        <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">

                            <div className="overflow-hidden">
                                <img
                                    src={youthSummit}
                                    alt="Youth Summit"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-7 flex flex-col flex-1">

                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-caption">
                                        Event Recap
                                    </span>

                                    <span className="text-sm text-on-surface-variant">
                                        May 28, 2024
                                    </span>
                                </div>

                                <h3 className="font-headline-md text-headline-md leading-tight group-hover:text-primary transition-colors">
                                    Global Youth Summit 2024: Digital Rights
                                </h3>

                                <p className="text-on-surface-variant leading-relaxed mt-4 line-clamp-3">
                                    Highlights from our recent summit where over 500 youth leaders
                                    discussed the right to equitable and safe internet access worldwide.
                                </p>

                                <div className="mt-auto pt-6">
                                    <Link
                                        to="/news/2"
                                        className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all"
                                    >
                                        Read Full Article
                                        <span className="material-symbols-outlined text-[18px]">
                                            trending_flat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>


                        {/* Card 3 */}
                        <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">

                            <div className="overflow-hidden">
                                <img
                                    src={digitalSafetyNews}
                                    alt="Digital Safety Initiative"
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-7 flex flex-col flex-1">

                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container rounded-full text-caption">
                                        Initiative
                                    </span>

                                    <span className="text-sm text-on-surface-variant">
                                        April 12, 2024
                                    </span>
                                </div>

                                <h3 className="font-headline-md text-headline-md leading-tight group-hover:text-primary transition-colors">
                                    Building a Safer Digital Future for Young People
                                </h3>

                                <p className="text-on-surface-variant leading-relaxed mt-4 line-clamp-3">
                                    Discover how our latest digital wellbeing initiatives are helping
                                    young people navigate online spaces safely and confidently.
                                </p>

                                <div className="mt-auto pt-6">
                                    <Link
                                        to="/news/3"
                                        className="inline-flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all"
                                    >
                                        Read Full Article
                                        <span className="material-symbols-outlined text-[18px]">
                                            trending_flat
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </article>

                    </div>

                    {/* View All */}
                    <div className="flex justify-center mt-12">
                        <Link
                            to="/news"
                            className="inline-flex items-center gap-3 bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-label-md hover:bg-primary hover:text-on-primary transition-all duration-300"
                        >
                            View All Stories
                            <span className="material-symbols-outlined text-[20px]">
                                arrow_forward
                            </span>
                        </Link>
                    </div>

                </div>
            </section>

            {/* ================= BLOGS SECTION ================= */}
            <section className="py-24 bg-surface section-fade-in visible">
                <div className="max-w-7xl mx-auto px-margin-desktop">

                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">

                        <div className="space-y-4">
                            <span className="text-primary font-label-md tracking-widest uppercase">
                                Insights & Ideas
                            </span>

                            <h2 className="font-headline-lg text-headline-lg">
                                From Our Blog
                            </h2>

                            <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                                Explore ideas, stories, and practical insights about digital
                                wellbeing, online safety, technology, and youth empowerment.
                            </p>
                        </div>

                        <Link
                            to="/blogs"
                            className="hidden md:inline-flex items-center gap-2 text-primary font-label-md hover:gap-4 transition-all"
                        >
                            Explore All Blogs
                            <span className="material-symbols-outlined text-[20px]">
                                arrow_forward
                            </span>
                        </Link>

                    </div>


                    {/* Blog Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                        {/* ================= FEATURED BLOG ================= */}
                        <article className="lg:col-span-3 group">

                            <Link to="/blogs/1">

                                <div className="relative overflow-hidden rounded-[2rem] bg-surface-container">

                                    <img
                                        src={digitalWellbeingBlog}
                                        alt="Digital Wellbeing"
                                        className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                                    {/* Featured Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-white">

                                        <div className="flex flex-wrap items-center gap-3 mb-4">

                                            <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-sm">
                                                Digital Wellbeing
                                            </span>

                                            <span className="text-sm opacity-90">
                                                June 20, 2024
                                            </span>

                                        </div>

                                        <h3 className="font-headline-lg text-3xl md:text-4xl leading-tight max-w-2xl">
                                            Helping Young People Build a Healthier Digital Life
                                        </h3>

                                        <p className="mt-4 text-white/85 max-w-xl leading-relaxed">
                                            Understanding the relationship between young people and
                                            technology and discovering practical ways to create healthier,
                                            safer online experiences.
                                        </p>

                                        <div className="flex items-center gap-2 mt-6 font-label-md">
                                            Read Article
                                            <span className="material-symbols-outlined text-[20px] group-hover:translate-x-2 transition-transform">
                                                arrow_forward
                                            </span>
                                        </div>

                                    </div>

                                </div>

                            </Link>

                        </article>


                        {/* ================= SMALL BLOGS ================= */}
                        <div className="lg:col-span-2 flex flex-col gap-8">

                            {/* Blog 2 */}
                            <article className="group flex flex-col sm:flex-row lg:flex-row bg-surface-container-low rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-300">

                                <Link
                                    to="/blogs/2"
                                    className="flex flex-col sm:flex-row lg:flex-row w-full"
                                >

                                    <div className="sm:w-2/5 lg:w-2/5 overflow-hidden">

                                        <img
                                            src={onlineSafetyBlog}
                                            alt="Online Safety"
                                            className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                    </div>

                                    <div className="flex-1 p-6">

                                        <div className="flex items-center gap-3 mb-3">

                                            <span className="text-primary text-xs font-label-md uppercase tracking-wide">
                                                Online Safety
                                            </span>

                                            <span className="text-xs text-on-surface-variant">
                                                May 15, 2024
                                            </span>

                                        </div>

                                        <h3 className="font-headline-md text-xl leading-tight group-hover:text-primary transition-colors">
                                            7 Simple Ways to Stay Safe Online
                                        </h3>

                                        <p className="text-on-surface-variant text-sm leading-relaxed mt-3 line-clamp-3">
                                            Simple and practical habits that can help young people
                                            protect their privacy and stay safer while using the internet.
                                        </p>

                                        <div className="flex items-center gap-2 text-primary text-sm font-label-md mt-5">
                                            Read More
                                            <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </div>

                                    </div>

                                </Link>

                            </article>


                            {/* Blog 3 */}
                            <article className="group flex flex-col sm:flex-row lg:flex-row bg-surface-container-low rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-300">

                                <Link
                                    to="/blogs/3"
                                    className="flex flex-col sm:flex-row lg:flex-row w-full"
                                >

                                    <div className="sm:w-2/5 lg:w-2/5 overflow-hidden">

                                        <img
                                            src={youthTechnologyBlog}
                                            alt="Youth and Technology"
                                            className="w-full h-56 sm:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />

                                    </div>

                                    <div className="flex-1 p-6">

                                        <div className="flex items-center gap-3 mb-3">

                                            <span className="text-primary text-xs font-label-md uppercase tracking-wide">
                                                Youth & Technology
                                            </span>

                                            <span className="text-xs text-on-surface-variant">
                                                April 08, 2024
                                            </span>

                                        </div>

                                        <h3 className="font-headline-md text-xl leading-tight group-hover:text-primary transition-colors">
                                            How Technology Can Empower the Next Generation
                                        </h3>

                                        <p className="text-on-surface-variant text-sm leading-relaxed mt-3 line-clamp-3">
                                            Exploring how responsible technology can give young people
                                            new opportunities to learn, connect, and create positive change.
                                        </p>

                                        <div className="flex items-center gap-2 text-primary text-sm font-label-md mt-5">
                                            Read More
                                            <span className="material-symbols-outlined text-[17px] group-hover:translate-x-1 transition-transform">
                                                arrow_forward
                                            </span>
                                        </div>

                                    </div>

                                </Link>

                            </article>

                        </div>

                    </div>


                    {/* Mobile Explore Button */}
                    <div className="flex justify-center mt-10 md:hidden">

                        <Link
                            to="/blogs"
                            className="inline-flex items-center gap-3 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md hover:opacity-90 transition-all"
                        >
                            Explore All Blogs

                            <span className="material-symbols-outlined text-[20px]">
                                arrow_forward
                            </span>

                        </Link>

                    </div>

                </div>
            </section>

            {/* Donate */}
            <section className="py-24 px-margin-mobile md:px-margin-desktop">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2.5rem] overflow-hidden shadow-2xl">

                        {/* Image side */}
                        <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[520px]">
                            <img
                                src={digitalChildren}
                                alt="Three children each absorbed in their own screen at home"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <span className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-deep-navy/90 lg:from-transparent to-transparent lg:to-deep-navy" aria-hidden="true"></span>
                        </div>

                        {/* Content side */}
                        <div className="lg:col-span-7 bg-deep-navy text-white p-10 md:p-14 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                            <span className="absolute -top-24 -right-24 w-80 h-80 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true"></span>

                            <div className="relative">
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    Support our work
                                </span>

                                <h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-white mt-6 leading-tight">
                                    Your support changes lives.
                                </h2>

                                <span className="block w-20 h-1 bg-safety-yellow rounded-full my-6"></span>

                                <p className="font-body-lg text-body-lg text-white/75 leading-relaxed max-w-xl">
                                    Every donation helps us reach more children, families, and educators across Sri Lanka with the training and tools they need to stay safe online.
                                </p>

                                <ul className="mt-8 space-y-4">
                                    {[
                                        { icon: 'school', text: 'Resources for rural schools' },
                                        { icon: 'family_restroom', text: 'Safety workshops for parents' },
                                        { icon: 'diversity_3', text: 'Training for youth mentors' }
                                    ].map((item) => (
                                        <li key={item.text} className="flex items-center gap-4">
                                            <span className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-safety-yellow text-xl">{item.icon}</span>
                                            </span>
                                            <span className="font-body-md text-body-md text-white/85">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    to="/donate"
                                    className="inline-flex items-center gap-2 bg-safety-yellow text-deep-navy font-label-md text-label-md px-8 py-4 rounded-full mt-10 hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 shadow-lg"
                                >
                                    Donate now
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </>
    );
}
