import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import volunteerHero from '../assets/images/childTeach.jpg';
import { submitVolunteerApplication, uploadDocument } from '../lib/api';

const HERO_HIGHLIGHTS = [
  { icon: 'group', label: '2,500+ volunteers', detail: 'Active across our programmes' },
  { icon: 'schedule', label: 'Flexible hours', detail: 'Remote or in your community' },
  { icon: 'school', label: 'Training provided', detail: 'No prior experience needed' }
];

const STEP_TITLES = { 1: 'Basics', 2: 'About You', 3: 'Your Motivation' };

const DESCRIBES_OPTIONS = [
  'Student',
  'Working Professional',
  'Researcher / Academic',
  'Community Volunteer',
  'NGO / Civil Society Worker',
  'Other'
];

const INTEREST_OPTIONS = [
  'Digital Wellbeing',
  'Child Online Safety',
  'Awareness & Education',
  'Research & Data Collection',
  'Social Media & Communications',
  'Community Outreach',
  'Event Support',
  'Content Creation',
  'Other'
];

const EMPTY_FORM = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  describes: '',
  interests: [],
  socialMedia: '',
  motivation: '',
  cv: null
};

const inputClass = "w-full rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors";

const textareaClass = "w-full rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md p-4 transition-colors";

export default function Volunteer() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState(EMPTY_FORM);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files?.[0] ?? null });
  };

  const toggleInterest = (value) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(item => item !== value)
        : [...prev.interests, value]
    }));
  };

  const canProceed = () => {
    if (step === 1) {
      return formData.firstName.trim() && formData.lastName.trim() && formData.email.trim() && formData.address.trim();
    }
    if (step === 2) {
      return formData.describes && formData.interests.length > 0;
    }
    return true;
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      let cvUrl = null;

      if (formData.cv) {
        cvUrl = await uploadDocument(formData.cv);
      }

      await submitVolunteerApplication({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        address: formData.address,
        describes: formData.describes,
        interests: formData.interests,
        social_media: formData.socialMedia || null,
        motivation: formData.motivation,
        cv_url: cvUrl
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

  return (
    <>
      <Seo
        title="Volunteer with IFDC"
        description="Join our volunteers and help deliver digital safety education, research and advocacy for children."
      />
      <Navbar />

      <main className="min-h-screen">
        <section className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: `url(${volunteerHero})` }}
            role="img"
            aria-label="A volunteer mentor helping two children at a classroom computer."
          ></div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-deep-navy/90 via-deep-navy/85 to-deep-navy/75 md:bg-gradient-to-r md:from-deep-navy/95 md:via-deep-navy/85 md:to-deep-navy/40"></div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-deep-navy/95 to-transparent"></div>
          <div className="absolute -top-24 -left-24 -z-10 w-96 h-96 bg-safety-yellow/20 blur-3xl rounded-full"></div>

          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-20 pb-10 md:pt-28 md:pb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-safety-yellow/15 border border-safety-yellow/40 rounded-full text-safety-yellow font-label-md text-label-md backdrop-blur-sm">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                Join Our Mission
              </div>

              <h1 className="mt-6 font-display-lg text-headline-lg-mobile md:text-display-lg text-white leading-tight">
                Give a few hours.<br />
                <span className="text-safety-yellow">Change a child's digital life.</span>
              </h1>

              <p className="mt-6 font-body-lg text-body-lg text-white/80 max-w-2xl">
                Become a volunteer and help us create a safer online world for children. Whether you have technical skills, community organizing experience, or simply a passion for our cause, there's a place for you here.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <a className="inline-flex items-center justify-center gap-2 bg-safety-yellow text-deep-navy font-label-md text-label-md px-8 py-3.5 rounded-full hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 shadow-lg" href="#application-form">
                  Apply Now
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_downward</span>
                </a>
                <Link className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-label-md text-label-md px-8 py-3.5 rounded-full hover:bg-white hover:text-deep-navy transition-all duration-200 active:scale-95 backdrop-blur-sm" to="/contact">
                  Talk to our team
                </Link>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/15 rounded-2xl overflow-hidden border border-white/15">
              {HERO_HIGHLIGHTS.map(item => (
                <div key={item.label} className="flex items-center gap-4 bg-deep-navy/50 backdrop-blur-sm px-6 py-5">
                  <span className="material-symbols-outlined text-safety-yellow" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  <div>
                    <p className="font-label-md text-label-md text-white">{item.label}</p>
                    <p className="font-caption text-caption text-white/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative" id="application-form">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-tint/20 rounded-l-[100px] -z-10 hidden lg:block"></div>
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-stack-md ambient-glow">
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-20 h-20 bg-safety-yellow/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-4">Application Submitted!</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto">
                  Thank you for stepping up to make a difference. We have received your application and will be in touch with you shortly regarding the next steps.
                </p>
                <button onClick={() => { setIsSubmitted(false); setStep(1); setFormData(EMPTY_FORM); setSubmitError(''); }} className="mt-8 px-8 py-3 rounded-full bg-deep-navy text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all">
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-2">Volunteer Application</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Takes about 5 minutes. We're excited to learn more about you!</p>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="font-label-md text-label-md text-deep-navy">
                      Step {step} of 3: {STEP_TITLES[step]}
                    </span>
                    <span className="font-caption text-caption text-on-surface-variant">{Math.round((step / 3) * 100)}%</span>
                  </div>
                  <div className="w-full bg-sky-tint rounded-full h-2">
                    <div className="bg-deep-navy h-2 rounded-full transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="block font-label-md text-label-md text-deep-navy" htmlFor="firstName">
                            First Name<span className="text-secondary">*</span>
                          </label>
                          <input required id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className={inputClass} type="text" />
                        </div>
                        <div className="space-y-1">
                          <label className="block font-label-md text-label-md text-deep-navy" htmlFor="lastName">
                            Last Name<span className="text-secondary">*</span>
                          </label>
                          <input required id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className={inputClass} type="text" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-deep-navy" htmlFor="email">
                          Email Address<span className="text-secondary">*</span>
                        </label>
                        <input required id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" className={inputClass} type="email" />
                      </div>
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-deep-navy" htmlFor="phone">Phone Number (Optional)</label>
                        <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className={inputClass} type="tel" />
                      </div>
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-deep-navy" htmlFor="address">
                          Postal Address<span className="text-secondary">*</span>
                        </label>
                        <textarea required id="address" name="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Enter your postal address" className={textareaClass} />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <fieldset className="space-y-3">
                        <legend className="font-label-md text-label-md text-deep-navy mb-1">
                          What best describes you?<span className="text-secondary">*</span>
                        </legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {DESCRIBES_OPTIONS.map(option => (
                            <label key={option} className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${formData.describes === option ? 'border-deep-navy bg-sky-tint/50' : 'border-outline-variant bg-surface-container-lowest hover:bg-sky-tint/30'}`}>
                              <input
                                type="radio"
                                name="describes"
                                value={option}
                                checked={formData.describes === option}
                                onChange={handleChange}
                                className="w-5 h-5 border-outline-variant text-deep-navy focus:ring-deep-navy"
                              />
                              <span className="font-body-md text-body-md text-on-surface">{option}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <fieldset className="space-y-3">
                        <legend className="font-label-md text-label-md text-deep-navy">
                          Which areas are you interested in volunteering in?<span className="text-secondary">*</span>
                        </legend>
                        <p className="font-caption text-caption text-on-surface-variant">Select all that apply.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {INTEREST_OPTIONS.map(option => (
                            <label key={option} className={`flex items-center gap-3 rounded-lg border px-4 py-3 cursor-pointer transition-colors ${formData.interests.includes(option) ? 'border-deep-navy bg-sky-tint/50' : 'border-outline-variant bg-surface-container-lowest hover:bg-sky-tint/30'}`}>
                              <input
                                type="checkbox"
                                name="interests"
                                value={option}
                                checked={formData.interests.includes(option)}
                                onChange={() => toggleInterest(option)}
                                className="w-5 h-5 rounded border-outline-variant text-deep-navy focus:ring-deep-navy"
                              />
                              <span className="font-body-md text-body-md text-on-surface">{option}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-deep-navy" htmlFor="socialMedia">Social Media Handle(s) (Optional)</label>
                        <input id="socialMedia" name="socialMedia" value={formData.socialMedia} onChange={handleChange} placeholder="Facebook / Instagram / LinkedIn / X" className={inputClass} type="text" />
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-deep-navy" htmlFor="motivation">
                          Why would you like to volunteer with us, and what do you hope to contribute or learn through this experience?<span className="text-secondary">*</span>
                        </label>
                        <textarea required id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} rows="6" placeholder="Please share your response" className={textareaClass} />
                      </div>

                      <div className="space-y-1">
                        <label className="block font-label-md text-label-md text-deep-navy" htmlFor="cv">Attach CV (Optional)</label>
                        <label htmlFor="cv" className="flex items-center gap-3 rounded-lg border border-dashed border-outline-variant bg-surface-container-lowest px-4 py-6 cursor-pointer hover:bg-sky-tint/30 transition-colors">
                          <span className="material-symbols-outlined text-deep-navy" style={{ fontVariationSettings: "'FILL' 0" }}>upload_file</span>
                          <span className="font-body-md text-body-md text-on-surface-variant">
                            {formData.cv ? formData.cv.name : 'Upload your CV — PDF, DOC or DOCX'}
                          </span>
                        </label>
                        <input id="cv" name="cv" type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="sr-only" />
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div role="alert" className="flex items-start gap-3 rounded-lg border border-error/40 bg-error/10 px-4 py-3">
                      <span className="material-symbols-outlined text-error text-sm mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
                      <p className="font-body-md text-body-md text-error whitespace-pre-line">{submitError}</p>
                    </div>
                  )}

                  <div className="pt-6 border-t border-surface-variant flex justify-between gap-4">
                    {step > 1 ? (
                      <button type="button" onClick={prevStep} className="px-6 py-2.5 rounded-full font-label-md text-label-md text-deep-navy hover:bg-sky-tint transition-colors focus:outline-none focus:ring-2 focus:ring-deep-navy border border-outline-variant">
                        Back
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {step < 3 ? (
                      <button type="button" onClick={nextStep} disabled={!canProceed()} className="px-8 py-2.5 rounded-full bg-deep-navy text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy shadow-sm inline-flex items-center ml-auto disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-deep-navy disabled:active:scale-100">
                        Next Step
                        <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                      </button>
                    ) : (
                      <button type="submit" disabled={isSubmitting} className="px-8 py-2.5 rounded-full bg-safety-yellow text-deep-navy font-label-md text-label-md hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy shadow-md inline-flex items-center ml-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100">
                        {isSubmitting ? 'Submitting…' : 'Submit Application'}
                        <span className={`material-symbols-outlined ml-2 text-sm ${isSubmitting ? 'animate-spin' : ''}`} style={{ fontVariationSettings: "'FILL' 1" }}>
                          {isSubmitting ? 'progress_activity' : 'check_circle'}
                        </span>
                      </button>
                    )}
                  </div>
                </form>

                <div className="mt-8 flex items-center justify-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                  <span className="font-caption text-caption">Your information is secure and will never be shared.</span>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
