import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Advocate() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-stack-lg pb-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-surface-tint/10 via-background to-secondary-fixed/20 -z-10"></div>
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div className="space-y-stack-md z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-fixed rounded-full text-primary-container font-label-md text-label-md">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
                Become a Child Advocate
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-deep-navy">
                Speak up for those <span className="text-surface-tint">who can't.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Advocates are the frontline voices for child digital safety. By joining our advocacy network, you'll help shape policies, educate communities, and drive meaningful change for the next generation.
              </p>
              <div className="flex gap-4 pt-4">
                <Link className="inline-flex items-center justify-center bg-deep-navy text-on-primary font-label-md text-label-md px-8 py-3.5 rounded-full hover:bg-surface-tint transition-all duration-200 shadow-md" to="#advocate-form">
                  Join the Network
                </Link>
                <Link className="inline-flex items-center justify-center bg-surface text-deep-navy font-label-md text-label-md px-8 py-3.5 rounded-full border border-outline-variant hover:bg-surface-container-low transition-all duration-200" to="/resources">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative z-10 group">
              <div className="glass-card rounded-[2rem] p-4 ambient-glow">
                <div
                  className="bg-cover bg-center w-full h-[400px] md:h-[500px] rounded-[1.5rem] transition-transform duration-700 group-hover:scale-[1.02]"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop')" }}
                ></div>

                <div className="absolute bottom-10 left-10 glass-card rounded-2xl p-6 flex flex-col gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-secondary-fixed flex items-center justify-center">
                      <span className="material-symbols-outlined text-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                    </div>
                    <div>
                      <p className="font-headline-md text-headline-md text-deep-navy">150+</p>
                      <p className="font-caption text-caption text-on-surface-variant">Active Communities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-4">How Advocates Make a Difference</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Our advocates operate at local, state, and national levels to ensure child safety remains a top priority.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <div className="glass-card rounded-2xl p-8 hover:border-surface-tint transition-colors cursor-pointer group">
                <div className="h-14 w-14 rounded-xl bg-sky-tint flex items-center justify-center mb-6 group-hover:bg-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-deep-navy text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>gavel</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">Policy Reform</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Work alongside lawmakers to draft and promote legislation that holds tech platforms accountable for child safety.</p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-secondary-fixed transition-colors cursor-pointer group">
                <div className="h-14 w-14 rounded-xl bg-secondary-fixed/30 flex items-center justify-center mb-6 group-hover:bg-secondary-fixed transition-colors">
                  <span className="material-symbols-outlined text-secondary-container text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">Community Education</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Host workshops and training sessions for parents, teachers, and children on safe digital navigation.</p>
              </div>

              <div className="glass-card rounded-2xl p-8 hover:border-surface-tint transition-colors cursor-pointer group">
                <div className="h-14 w-14 rounded-xl bg-sky-tint flex items-center justify-center mb-6 group-hover:bg-primary-fixed-dim transition-colors">
                  <span className="material-symbols-outlined text-deep-navy text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-deep-navy mb-3">Digital Outreach</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Amplify our campaigns on social media and digital platforms to spread awareness and resources widely.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative" id="advocate-form">
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-secondary-fixed/10 rounded-tr-[100px] -z-10 hidden lg:block"></div>

          <div className="max-w-4xl mx-auto glass-card rounded-3xl p-6 md:p-12 ambient-glow">
            <div className="mb-10 text-center">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-3">Join the Advocacy Network</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Fill out the form below to become an official IFDC Advocate.</p>
            </div>

            <form action="#" className="space-y-6" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block font-label-md text-label-md text-deep-navy" htmlFor="firstName">First Name</label>
                  <input className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="firstName" name="firstName" required type="text" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="block font-label-md text-label-md text-deep-navy" htmlFor="lastName">Last Name</label>
                  <input className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="lastName" name="lastName" required type="text" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-deep-navy" htmlFor="email">Email Address</label>
                <input className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="email" name="email" required type="email" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-deep-navy" htmlFor="interest">Area of Interest</label>
                <select className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors appearance-none cursor-pointer" id="interest" name="interest">
                  <option value="policy">Policy & Legislative Reform</option>
                  <option value="education">Community Education</option>
                  <option value="digital">Digital Campaigns</option>
                  <option value="general">General Advocacy</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block font-label-md text-label-md text-deep-navy" htmlFor="message">Why do you want to join?</label>
                <textarea className="w-full rounded-xl border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md p-4 transition-colors" id="message" name="message" rows="4" placeholder="Share your motivation..."></textarea>
              </div>

              <div className="pt-6 text-center">
                <button className="w-full md:w-auto px-10 py-3.5 rounded-full bg-deep-navy text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all duration-200 shadow-md inline-flex items-center justify-center" type="button">
                  Submit Application
                  <span className="material-symbols-outlined ml-2 text-sm" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
