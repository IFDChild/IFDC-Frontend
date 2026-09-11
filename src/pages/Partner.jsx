import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Hand from '../assets/images/handshake.jpg';
import { submitPartnerInquiry } from '../lib/api';

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

const EMPTY_INQUIRY = {
    organizationName: '',
    contactPerson: '',
    email: '',
    website: '',
    partnershipType: WAYS_TO_PARTNER[0].title,
    message: ''
};

const inputClass =
    'w-full px-4 py-3 rounded-xl border-sky-tint bg-white/50 focus:ring-2 focus:ring-deep-navy focus:border-deep-navy transition-all disabled:opacity-60';

function PartnerInquiryForm() {
    const [formData, setFormData] = useState(EMPTY_INQUIRY);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);
        setSubmitError('');

        try {
            await submitPartnerInquiry({
                organization_name: formData.organizationName,
                contact_person: formData.contactPerson,
                email: formData.email,
                website: formData.website || null,
                partnership_type: formData.partnershipType,
                message: formData.message
            });

            setIsSubmitted(true);
        } catch (error) {
            setSubmitError(
                error instanceof TypeError
                    ? 'We could not reach the server. Please check your connection and try again.'
                    : error.message
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className="glass-card p-8 md:p-12 rounded-[2rem] shadow-xl text-center">
                <div className="w-20 h-20 bg-safety-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                    </span>
                </div>
                <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-4">
                    Inquiry received
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
                    Thank you for reaching out. A partnership director will contact you within 48 hours.
                </p>
                <button
                    type="button"
                    onClick={() => { setIsSubmitted(false); setFormData(EMPTY_INQUIRY); setSubmitError(''); }}
                    className="mt-8 px-8 py-3 rounded-full bg-deep-navy text-on-primary font-bold hover:bg-surface-tint transition-all"
                >
                    Send another inquiry
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-[2rem] shadow-xl space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-label-md font-bold text-deep-navy mb-2" htmlFor="orgName">
                        Organization Name<span className="text-secondary">*</span>
                    </label>
                    <input
                        id="orgName"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={inputClass}
                        placeholder="e.g., Global Tech Inc."
                        type="text"
                    />
                </div>
                <div>
                    <label className="block text-label-md font-bold text-deep-navy mb-2" htmlFor="contactPerson">
                        Contact Person<span className="text-secondary">*</span>
                    </label>
                    <input
                        id="contactPerson"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={inputClass}
                        placeholder="Jane Doe"
                        type="text"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-label-md font-bold text-deep-navy mb-2" htmlFor="partnerEmail">
                        Email Address<span className="text-secondary">*</span>
                    </label>
                    <input
                        id="partnerEmail"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className={inputClass}
                        placeholder="jane@organization.com"
                        type="email"
                    />
                </div>
                <div>
                    <label className="block text-label-md font-bold text-deep-navy mb-2" htmlFor="website">
                        Website (Optional)
                    </label>
                    <input
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={inputClass}
                        placeholder="https://www.website.com"
                        type="url"
                    />
                </div>
            </div>

            <div>
                <label className="block text-label-md font-bold text-deep-navy mb-2" htmlFor="partnershipType">
                    Partnership Type<span className="text-secondary">*</span>
                </label>
                <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                >
                    {WAYS_TO_PARTNER.map((way) => (
                        <option key={way.title} value={way.title}>{way.title}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-label-md font-bold text-deep-navy mb-2" htmlFor="collaborate">
                    How would you like to collaborate?<span className="text-secondary">*</span>
                </label>
                <textarea
                    id="collaborate"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className={inputClass}
                    placeholder="Tell us about your mission and goals..."
                    rows="4"
                ></textarea>
            </div>

            {submitError && (
                <div role="alert" className="flex items-start gap-3 rounded-lg border border-error/40 bg-error/10 px-4 py-3">
                    <span className="material-symbols-outlined text-error text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                    <p className="font-body-md text-body-md text-error whitespace-pre-line">{submitError}</p>
                </div>
            )}

            <div className="pt-4">
                <button
                    className="w-full bg-deep-navy text-on-primary font-bold py-4 rounded-xl hover:shadow-lg transform active:scale-[0.98] transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100 inline-flex items-center justify-center gap-2"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting…' : 'Submit Inquiry'}
                    {isSubmitting && (
                        <span className="material-symbols-outlined text-sm animate-spin">progress_activity</span>
                    )}
                </button>
                <p className="text-caption text-on-surface-variant mt-4 text-center">
                    By submitting, you agree to our <Link className="underline hover:text-primary" to="/policies">Privacy Policy</Link> regarding your data.
                </p>
            </div>
        </form>
    );
}

export default function Partner() {
    return (
        <>
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
                                <a className="bg-deep-navy text-on-primary font-bold px-8 py-4 rounded-full text-center hover:bg-opacity-95 transition-all active:scale-95 shadow-lg" href="#inquiry-form">
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

                {/* Start a conversation */}
                <section className="py-stack-lg relative bg-surface-container-low scroll-mt-24" id="inquiry-form">
                    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid lg:grid-cols-5 gap-stack-lg">
                        <div className="lg:col-span-2">
                            <div className="lg:sticky lg:top-28">
                                <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-6">Start a Conversation</h2>
                                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
                                    Our team is ready to explore how your organization can contribute to a safer digital frontier. Fill out the form, and a partnership director will contact you within 48 hours.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-safety-yellow p-2 rounded-lg text-deep-navy shrink-0">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-deep-navy">Email Us</h3>
                                            <a className="text-on-surface-variant hover:text-primary transition-colors" href="mailto:partnerships@ifdchild.org">
                                                partnerships@ifdchild.org
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-safety-yellow p-2 rounded-lg text-deep-navy shrink-0">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-deep-navy">Headquarters</h3>
                                            <p className="text-on-surface-variant">
                                                10/24, Ranaviru Prabath Cooray Mawatha, Nawala, Sri Lanka
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <PartnerInquiryForm />
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
