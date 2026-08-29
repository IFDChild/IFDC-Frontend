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




            <section className="py-stack-lg px-margin-desktop bg-surface-container-low -mt-8 relative z-20 rounded-t-[3rem]">
                <div className="max-w-container-max mx-auto">

                    {/* Section Heading */}
                    <div className="text-center max-w-3xl mx-auto mb-14">
                        <span className="font-label-md text-primary uppercase tracking-wider font-bold">
                            Our Programmes
                        </span>

                        <h2 className="font-headline-lg text-headline-lg text-deep-navy mt-3 mb-4">
                            Creating Safer Digital Futures
                        </h2>

                        <p className="font-body-md text-on-surface-variant leading-relaxed">
                            Our programmes empower children, families, educators, and communities
                            to navigate the digital world safely, creatively, and confidently.
                        </p>
                    </div>

                    {/* 2 × 2 Programme Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* ================= DIGITALWISE ================= */}
                        <div className="group bg-primary rounded-[2rem] p-8 lg:p-10 shadow-xl
                            hover:-translate-y-2 transition-all duration-300">

                            {/* Icon + Number */}
                            <div className="flex items-start justify-between mb-8">

                                <div className="w-20 h-20 rounded-2xl bg-yellow-300
                                    flex items-center justify-center
                                    shadow-md">
                                    <span className="material-symbols-outlined text-[48px] text-primary">
                                        security
                                    </span>
                                </div>

                                <span className="text-yellow-400 font-bold text-lg">
                                    01
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-headline-md text-headline-md
                               text-yellow-400 mb-4">
                                #DIGITALWISE
                            </h3>

                            {/* Subheading */}
                            <div className="inline-block bg-yellow-400 text-deep-navy
                                px-4 py-2 rounded-lg mb-5">
                                <h4 className="font-headline-sm text-headline-sm font-bold">
                                    Building Healthy Digital Lives
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="font-body-md text-white leading-relaxed">
                                Helps children, parents, and educators develop digital literacy,
                                online safety, critical thinking, and healthy technology habits.
                            </p>

                        </div>


                        {/* ================= KIDSPRESSION ================= */}
                        <div className="group bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl
                            border border-slate-100
                            hover:-translate-y-2 transition-all duration-300">

                            {/* Icon + Number */}
                            <div className="flex items-start justify-between mb-8">

                                <div className="w-20 h-20 rounded-2xl bg-primary
                                    flex items-center justify-center
                                    shadow-md">
                                    <span className="material-symbols-outlined text-[48px] text-white">
                                        auto_stories
                                    </span>
                                </div>

                                <span className="text-primary font-bold text-lg">
                                    02
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-headline-md text-headline-md
                               text-deep-navy mb-4">
                                #KIDSPRESSION
                            </h3>

                            {/* Subheading */}
                            <div className="inline-block bg-sky-tint text-primary
                                px-4 py-2 rounded-lg mb-5">
                                <h4 className="font-headline-sm text-headline-sm font-bold">
                                    Empowering Young Digital Creators
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="font-body-md text-on-surface-variant leading-relaxed">
                                Encourages children to express themselves through storytelling,
                                filmmaking, photography, podcasting, and other creative media.
                            </p>

                        </div>


                        {/* ================= VOICE4KIDS ================= */}
                        <div className="group bg-white rounded-[2rem] p-8 lg:p-10 shadow-xl
                            border border-slate-100
                            hover:-translate-y-2 transition-all duration-300">

                            {/* Icon + Number */}
                            <div className="flex items-start justify-between mb-8">

                                <div className="w-20 h-20 rounded-2xl bg-yellow-400
                                    flex items-center justify-center
                                    shadow-md">
                                    <span className="material-symbols-outlined text-[48px] text-deep-navy">
                                        campaign
                                    </span>
                                </div>

                                <span className="text-primary font-bold text-lg">
                                    03
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-headline-md text-headline-md
                               text-deep-navy mb-4">
                                #VOICE4KIDS
                            </h3>

                            {/* Subheading */}
                            <div className="inline-block bg-primary text-white
                                px-4 py-2 rounded-lg mb-5">
                                <h4 className="font-headline-sm text-headline-sm font-bold">
                                    Research, Advocacy & Child Rights
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="font-body-md text-on-surface-variant leading-relaxed">
                                Uses research and advocacy to strengthen child protection,
                                influence policy, and amplify children's voices in the digital world.
                            </p>

                        </div>


                        {/* ================= TECHCARE ================= */}
                        <div className="group bg-primary rounded-[2rem] p-8 lg:p-10 shadow-xl
                            hover:-translate-y-2 transition-all duration-300">

                            {/* Icon + Number */}
                            <div className="flex items-start justify-between mb-8">

                                <div className="w-20 h-20 rounded-2xl bg-yellow-400
                                    flex items-center justify-center
                                    shadow-md">
                                    <span className="material-symbols-outlined text-[48px] text-deep-navy">
                                        psychology
                                    </span>
                                </div>

                                <span className="text-yellow-400 font-bold text-lg">
                                    04
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-headline-md text-headline-md
                               text-yellow-400 mb-4">
                                #TECHCARE
                            </h3>

                            {/* Subheading */}
                            <div className="inline-block bg-yellow-400 text-deep-navy
                                px-4 py-2 rounded-lg mb-5">
                                <h4 className="font-headline-sm text-headline-sm font-bold">
                                    Digital Mental Health & Wellbeing
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="font-body-md text-white leading-relaxed">
                                Promotes healthy relationships with technology and supports
                                children's and young people's digital wellbeing and resilience.
                            </p>

                        </div>

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
                                    <Link to="/donate" >
                                        Donate Now
                                    </Link>
                                </button>
                                <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-label-md text-lg hover:bg-white/20 transition-all active:scale-95">
                                    <Link to="/volunteer" >
                                        Become a Volunteer
                                    </Link>
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
