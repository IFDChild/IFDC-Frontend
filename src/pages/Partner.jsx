import React from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import Footer from '../components/Footer';
import Hand from '../assets/images/handshake.jpg';

const REASONS = [
    {
        icon: 'groups',
        title: 'Proven reach',
        body: 'Direct access to children, parents, and educators through #DigitalWise, #Kidsression, and #Voice4Kids.'
    },
    {
        icon: 'travel_explore',
        title: 'Ground-level insight',
        body: 'Grounded in Sri Lanka, informed by real research and advocacy work.'
    },
    {
        icon: 'balance',
        title: 'Rights-based approach',
        body: 'Programmes built on child rights and gender equity, not just awareness content.'
    },
    {
        icon: 'insights',
        title: 'Measurable impact',
        body: 'Trained advocates, produced media, and policy engagement you can point to.'
    }
];

const WAYS_TO_PARTNER = [
    {
        icon: 'corporate_fare',
        title: 'Corporate & CSR Partners',
        body: "Support our programmes through funding, in-kind resources, or employee volunteering. Help us reach more children, parents, and educators with digital safety training, while strengthening your organization's commitment to child rights and digital responsibility."
    },
    {
        icon: 'account_balance',
        title: 'Government & Policy Partners',
        body: "Work with us to shape child-safe digital policy, strengthen national child protection frameworks, and ensure children's voices are represented in decisions about the digital world they're growing up in."
    },
    {
        icon: 'school',
        title: 'Schools & Educators',
        body: 'Bring #DigitalWise training, mentoring, and creative media programmes into your classrooms. We equip teachers and students with practical tools for digital literacy, online safety, and healthy tech habits.'
    },
    {
        icon: 'movie_edit',
        title: 'Media & Creative Partners',
        body: "Collaborate with us to produce ethical, child-centered media — documentaries, films, and campaigns — that amplify children's voices and advocate for their rights, in line with our #Kidsression and #Voice4Kids programmes."
    },
    {
        icon: 'public',
        title: 'NGOs & International Organizations',
        body: 'Join us in research, advocacy, and capacity-building efforts to strengthen child protection systems in Sri Lanka and beyond. Together, we can drive stronger policy, better data, and greater accountability.'
    },
    {
        icon: 'volunteer_activism',
        title: 'Individual Donors & Volunteers',
        body: 'Every contribution — big or small — helps us reach more children and families. Whether through donations, expertise, or time, you can be part of building a safer digital future for children.'
    }
];

const PARTNERSHIP_EMAIL = 'partnerships@ifdchild.org';

const PARTNERSHIP_MAILTO =
    `mailto:${PARTNERSHIP_EMAIL}` +
    '?subject=' + encodeURIComponent('Partnership enquiry - IFDC') +
    '&body=' + encodeURIComponent(
        'Hello IFDC team,\n\nWe are interested in partnering with the International Foundation for Digital Child.\n\n' +
        'Organization: \nContact person: \nWebsite: \nType of partnership: \n\nHow we would like to collaborate:\n\n\nThank you.'
    );

export default function Partner() {
    return (
        <>
            <Seo
              title="Partner with us"
              description="Work with IFDC on online child safety: research partnerships, programme delivery, funding and corporate collaboration."
            />
            <Navbar />

            <main>

                {/* Hero - full-height image column bleeding to the page edge */}
                <section className="relative overflow-hidden bg-surface-container-low">
                    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[44%]">
                        <img
                            src={Hand}
                            alt="Two people shaking hands across a desk to mark a partnership"
                            className="w-full h-72 sm:h-96 lg:h-full object-cover"
                            style={{ objectPosition: '50% 38%' }}
                        />
                        <div
                            className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent"
                            aria-hidden="true"
                        ></div>
                    </div>

                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-safety-yellow/20 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg lg:py-28">
                        <div className="lg:w-[52%]">
                            <span className="inline-flex items-center gap-2 bg-deep-navy text-safety-yellow font-label-md text-label-md px-4 py-1.5 rounded-full uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                                Strategic Partnerships
                            </span>

                            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-deep-navy leading-tight mt-6">
                                Partner With <span className="relative inline-block">
                                    <span className="relative z-10">Us</span>
                                    <span className="absolute left-0 right-0 bottom-1 h-3 md:h-4 bg-safety-yellow/60" aria-hidden="true"></span>
                                </span>
                            </h1>

                            <span className="block w-20 h-1 bg-safety-yellow rounded-full my-6"></span>

                            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                                No single organization can make the digital world safe for children alone. Protecting children online — and empowering them to thrive in it — takes governments, schools, tech platforms, media, businesses, and communities working together. We invite organizations and individuals who share this vision to partner with us.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <a className="bg-deep-navy text-on-primary font-bold px-8 py-4 rounded-full text-center hover:bg-opacity-95 transition-all active:scale-95 shadow-lg" href="#contact-partnerships">
                                    Start a conversation
                                </a>
                                <a className="bg-white border-2 border-deep-navy text-deep-navy font-bold px-8 py-4 rounded-full text-center hover:bg-sky-tint transition-all active:scale-95" href="#ways">
                                    Ways to partner
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why partner with us */}
                <section className="py-stack-lg bg-surface-container-low" id="benefits">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                        <div className="text-center max-w-3xl mx-auto mb-stack-md">
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy">Why Partner With Us</h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto mt-5"></span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {REASONS.map((reason) => (
                                <div
                                    key={reason.title}
                                    className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-safety-yellow"
                                >
                                    <span className="w-12 h-12 rounded-xl bg-deep-navy flex items-center justify-center mb-5 group-hover:bg-safety-yellow transition-colors duration-300">
                                        <span className="material-symbols-outlined text-safety-yellow group-hover:text-deep-navy transition-colors duration-300">
                                            {reason.icon}
                                        </span>
                                    </span>
                                    <h3 className="font-headline-md text-body-lg font-bold text-deep-navy mb-2">{reason.title}</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{reason.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ways to partner */}
                <section className="py-stack-lg bg-surface scroll-mt-24" id="ways">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                        <div className="text-center max-w-3xl mx-auto mb-stack-md">
                            <span className="inline-flex items-center gap-2 bg-deep-navy text-safety-yellow px-4 py-1.5 rounded-full text-label-md font-bold uppercase tracking-wider">
                                <span className="w-1.5 h-1.5 rounded-full bg-safety-yellow"></span>
                                Ways to Partner
                            </span>
                            <h2 className="font-headline-lg text-headline-lg text-deep-navy mt-5">
                                Six ways to work with us
                            </h2>
                            <span className="block w-20 h-1 bg-safety-yellow rounded-full mx-auto mt-5"></span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {WAYS_TO_PARTNER.map((way) => (
                                <article
                                    key={way.title}
                                    className="group relative bg-white rounded-2xl p-7 border border-outline-variant/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="absolute inset-x-0 top-0 h-1.5 bg-safety-yellow origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>

                                    <span className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-primary text-3xl">{way.icon}</span>
                                    </span>
                                    <h3 className="font-headline-md text-headline-md text-deep-navy mb-3 leading-snug">{way.title}</h3>
                                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{way.body}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Start a conversation - email */}
                <section className="py-stack-lg bg-surface-container-low scroll-mt-24" id="contact-partnerships">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                        <div className="relative overflow-hidden rounded-[2rem] bg-deep-navy text-white px-6 py-10 md:px-14 md:py-14 shadow-xl">
                            <span className="absolute -top-24 -right-20 w-72 h-72 rounded-full border-[36px] border-safety-yellow/10 pointer-events-none" aria-hidden="true"></span>
                            <span className="absolute -bottom-32 -left-24 w-80 h-80 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true"></span>

                            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                                <div className="lg:col-span-7">
                                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-safety-yellow/15 border border-safety-yellow/40 text-safety-yellow text-label-md font-bold uppercase tracking-wider">
                                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">handshake</span>
                                        Start a conversation
                                    </span>
                                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mt-5 leading-tight">
                                        Interested in <span className="text-safety-yellow">partnering with us?</span>
                                    </h2>
                                    <p className="mt-4 text-body-lg text-white/75 leading-relaxed max-w-2xl">
                                        Just email us. Tell us a little about your organization and how you&apos;d like to work together, and our team will get back to you to explore the partnership.
                                    </p>
                                    <ul className="mt-6 flex flex-wrap gap-2">
                                        {WAYS_TO_PARTNER.map((way) => (
                                            <li key={way.title} className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.08] border border-white/15 px-3 py-1.5 text-[13px] text-white/85">
                                                <span className="material-symbols-outlined text-[16px] text-safety-yellow" aria-hidden="true">{way.icon}</span>
                                                {way.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="lg:col-span-5">
                                    <div className="rounded-2xl bg-white/[0.06] border border-white/15 p-6 md:p-7">
                                        <p className="text-[13px] font-semibold uppercase tracking-wider text-white/60">Email us at</p>
                                        <a href={`mailto:${PARTNERSHIP_EMAIL}`} className="mt-2 flex items-center gap-3 text-[1.25rem] md:text-[1.4rem] font-bold text-white hover:text-safety-yellow transition-colors break-all">
                                            <span className="material-symbols-outlined text-safety-yellow text-[28px] shrink-0" aria-hidden="true">mail</span>
                                            {PARTNERSHIP_EMAIL}
                                        </a>
                                        <a
                                            href={PARTNERSHIP_MAILTO}
                                            className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-safety-yellow text-deep-navy px-6 py-3.5 rounded-full font-bold hover:bg-white hover:-translate-y-0.5 transition-all duration-200 shadow-lg"
                                        >
                                            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">send</span>
                                            Email us about a partnership
                                        </a>
                                        <p className="mt-3 text-center text-caption text-white/55">Opens your email app with a ready-made message.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
