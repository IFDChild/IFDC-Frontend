import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { submitContactMessage } from '../lib/api';

const SUBJECTS = [
    'General enquiry',
    'Report a concern',
    'Media enquiry',
    'Partnerships',
    'Volunteering',
    'Training & workshops'
];

const CHANNELS = [
    {
        icon: 'mail',
        label: 'Email',
        value: 'info@ifdchild.org',
        href: 'mailto:info@ifdchild.org'
    },
    {
        icon: 'call',
        label: 'Phone',
        value: '+94 77 366 7530',
        href: 'tel:+94773667530'
    },
    {
        icon: 'handshake',
        label: 'Partnerships',
        value: 'partnerships@ifdchild.org',
        href: 'mailto:partnerships@ifdchild.org'
    }
];

const OFFICES = [
    {
        icon: 'location_city',
        name: 'Head Office',
        place: 'Nawala',
        address: '110/24, Ranaviru Prabath Cooray Mawatha, Nawala, Sri Lanka'
    },
    { icon: 'corporate_fare', name: 'Northern Office', place: 'Jaffna' },
    { icon: 'apartment', name: 'Eastern Office', place: 'Kantale' }
];

const EMPTY_FORM = { name: '', email: '', phone: '', subject: SUBJECTS[0], message: '' };

const inputClass =
    'w-full px-4 py-3 rounded-xl border border-outline-variant/50 bg-white text-on-surface focus:border-deep-navy focus:ring-2 focus:ring-deep-navy/20 outline-none transition-all disabled:opacity-60';

export default function Contact() {
    const [form, setForm] = useState(EMPTY_FORM);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isSubmitting) return;

        setIsSubmitting(true);
        setError('');

        try {
            await submitContactMessage({
                name: form.name,
                email: form.email,
                phone: form.phone || null,
                subject: form.subject,
                message: form.message
            });
            setIsSent(true);
        } catch (err) {
            setError(
                err instanceof TypeError
                    ? 'We could not reach the server. Please try again, or email us directly.'
                    : err.message
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}
                <section className="relative overflow-hidden bg-deep-navy text-white px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="absolute -top-32 -right-24 w-96 h-96 bg-safety-yellow/15 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-sky-tint/10 blur-3xl rounded-full pointer-events-none"></div>

                    <div className="relative max-w-container-max mx-auto">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md">
                            <span className="material-symbols-outlined text-sm">forum</span>
                            Get in Touch
                        </span>
                        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-white mt-6 leading-tight">
                            Contact <span className="text-safety-yellow">Us</span>
                        </h1>
                        <p className="font-body-lg text-body-lg text-white/75 mt-5 max-w-2xl leading-relaxed">
                            Whether you have a question, want to work with us, or need to raise a concern about a child&rsquo;s safety online, we&rsquo;re here to listen.
                        </p>
                    </div>
                </section>

                {/* Form + details */}
                <section className="px-margin-mobile md:px-margin-desktop py-stack-lg">
                    <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                        {/* Form */}
                        <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-10 border border-outline-variant/30 shadow-sm">
                            {isSent ? (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-safety-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    </div>
                                    <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-3">Message sent</h2>
                                    <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                                        Thank you for getting in touch. A member of our team will reply to you by email.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => { setIsSent(false); setForm(EMPTY_FORM); }}
                                        className="mt-8 px-8 py-3 rounded-full bg-deep-navy text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="font-headline-md text-headline-md text-deep-navy">Send us a message</h2>
                                    <p className="font-body-md text-body-md text-on-surface-variant mt-1 mb-8">
                                        Fields marked <span className="text-secondary">*</span> are required.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="c-name">
                                                    Full name<span className="text-secondary">*</span>
                                                </label>
                                                <input id="c-name" name="name" value={form.name} onChange={handleChange} required disabled={isSubmitting} className={inputClass} placeholder="Your name" type="text" />
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="c-email">
                                                    Email<span className="text-secondary">*</span>
                                                </label>
                                                <input id="c-email" name="email" value={form.email} onChange={handleChange} required disabled={isSubmitting} className={inputClass} placeholder="you@example.com" type="email" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="c-phone">
                                                    Phone (optional)
                                                </label>
                                                <input id="c-phone" name="phone" value={form.phone} onChange={handleChange} disabled={isSubmitting} className={inputClass} placeholder="+94 ..." type="tel" />
                                            </div>
                                            <div>
                                                <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="c-subject">
                                                    Subject<span className="text-secondary">*</span>
                                                </label>
                                                <select id="c-subject" name="subject" value={form.subject} onChange={handleChange} required disabled={isSubmitting} className={inputClass}>
                                                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        {form.subject === 'Report a concern' && (
                                            <p className="flex items-start gap-2 rounded-xl bg-safety-yellow/20 border border-safety-yellow/60 px-4 py-3 font-body-md text-body-md text-deep-navy">
                                                <span className="material-symbols-outlined text-sm mt-0.5">info</span>
                                                <span>
                                                    If a child is in danger right now, please call <a className="font-bold underline" href="tel:119">119</a> or <a className="font-bold underline" href="tel:1929">1929</a> instead of using this form.
                                                </span>
                                            </p>
                                        )}

                                        <div>
                                            <label className="block font-label-md text-label-md text-deep-navy mb-2" htmlFor="c-message">
                                                Message<span className="text-secondary">*</span>
                                            </label>
                                            <textarea id="c-message" name="message" value={form.message} onChange={handleChange} required disabled={isSubmitting} className={inputClass} placeholder="How can we help?" rows="6"></textarea>
                                        </div>

                                        {error && (
                                            <div role="alert" className="flex items-start gap-3 rounded-lg border border-error/40 bg-error/10 px-4 py-3">
                                                <span className="material-symbols-outlined text-error text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                                                <p className="font-body-md text-body-md text-error whitespace-pre-line">{error}</p>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-deep-navy text-on-primary font-label-md text-label-md px-10 py-4 rounded-full hover:bg-surface-tint transition-all active:scale-95 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                                        >
                                            {isSubmitting ? 'Sending…' : 'Send message'}
                                            <span className={`material-symbols-outlined text-sm ${isSubmitting ? 'animate-spin' : ''}`}>
                                                {isSubmitting ? 'progress_activity' : 'send'}
                                            </span>
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>

                        {/* Details */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-deep-navy rounded-2xl p-7 text-white relative overflow-hidden">
                                <span className="absolute -top-20 -right-16 w-64 h-64 bg-safety-yellow/10 blur-3xl rounded-full pointer-events-none" aria-hidden="true"></span>
                                <div className="relative">
                                    <h2 className="font-headline-md text-headline-md text-white mb-5">Reach us directly</h2>
                                    <ul className="space-y-4">
                                        {CHANNELS.map((c) => (
                                            <li key={c.label}>
                                                <a href={c.href} className="flex items-center gap-4 group">
                                                    <span className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:bg-safety-yellow transition-colors">
                                                        <span className="material-symbols-outlined text-safety-yellow group-hover:text-deep-navy transition-colors">{c.icon}</span>
                                                    </span>
                                                    <span>
                                                        <span className="block font-caption text-caption text-white/60 uppercase tracking-widest">{c.label}</span>
                                                        <span className="block font-body-md text-body-md text-white group-hover:text-safety-yellow transition-colors break-all">{c.value}</span>
                                                    </span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-7 border border-outline-variant/30 shadow-sm">
                                <h2 className="font-headline-md text-headline-md text-deep-navy mb-5">Our offices</h2>
                                <ul className="space-y-5">
                                    {OFFICES.map((o) => (
                                        <li key={o.place} className="flex gap-4">
                                            <span className="w-11 h-11 rounded-xl bg-sky-tint flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined text-primary">{o.icon}</span>
                                            </span>
                                            <div>
                                                <p className="font-label-md text-label-md text-deep-navy">
                                                    {o.name} &middot; {o.place}
                                                </p>
                                                {o.address && (
                                                    <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">{o.address}</p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-sky-tint/40 rounded-2xl p-6">
                                <p className="font-body-md text-body-md text-deep-navy">
                                    Looking to get involved?{' '}
                                    <Link to="/volunteer" className="font-bold underline hover:text-primary">Volunteer</Link>
                                    {' '}or{' '}
                                    <Link to="/partner" className="font-bold underline hover:text-primary">partner with us</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
