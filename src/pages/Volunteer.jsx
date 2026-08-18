import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Volunteer() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        <section className="relative pt-stack-lg pb-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-tint/30 to-background -z-10"></div>
          <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-6 space-y-stack-md z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-tint rounded-full text-deep-navy font-label-md text-label-md">
                <span className="material-symbols-outlined text-sm" style={{ "fontVariationSettings": "'FILL' 1" }}>favorite</span>
                Join Our Mission
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-deep-navy">
                Protecting digital futures, <span className="text-surface-tint">together.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                Become a volunteer and help us create a safer online world for children. Whether you have technical skills, community organizing experience, or simply a passion for our cause, there's a place for you here.
              </p>
              <div className="flex flex-wrap gap-gutter pt-4">
                <Link className="inline-flex items-center justify-center bg-safety-yellow text-deep-navy font-label-md text-label-md px-8 py-3.5 rounded-full hover:bg-secondary-fixed-dim transition-all duration-200 active:scale-95 shadow-md" to="#">
                  Apply Now
                </Link>
                <Link className="inline-flex items-center justify-center bg-transparent border-2 border-deep-navy text-deep-navy font-label-md text-label-md px-8 py-3.5 rounded-full hover:bg-sky-tint transition-all duration-200 active:scale-95" to="#">
                  View Roles
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 relative z-10">
              <div className="glass-card rounded-[2rem] p-4 ambient-glow relative overflow-hidden group">
                <div className="bg-cover bg-center w-full h-[400px] md:h-[500px] rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105" data-alt="A diverse group of volunteers working collaboratively in a modern, bright office setting. They are looking at digital tablets and laptops, engaged in a discussion about digital safety. The lighting is soft and optimistic, utilizing a modern light-mode aesthetic with subtle sky blue and navy accents." style={{ "backgroundImage": "url('https" }}></div>

                <div className="absolute bottom-8 left-8 right-8 glass-card rounded-xl p-4 flex justify-between items-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <div>
                    <p className="font-caption text-caption text-on-surface-variant">Active Volunteers</p>
                    <p className="font-headline-md text-headline-md text-deep-navy">2,500+</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-safety-yellow flex items-center justify-center">
                    <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="roles">
          <div className="max-w-container-max mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-4">How You Can Help</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">We are looking for passionate individuals across various disciplines. Explore our current open volunteer roles below.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[250px]">

              <div className="md:col-span-8 glass-card rounded-xl p-6 flex flex-col justify-between group hover:border-surface-tint transition-colors cursor-pointer ambient-glow">
                <div className="flex justify-between items-start">
                  <div className="h-12 w-12 rounded-lg bg-sky-tint flex items-center justify-center">
                    <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>admin_panel_settings</span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-safety-yellow/20 text-secondary font-caption text-caption">High Priority</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Content Moderator</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 max-w-xl">Help us review and manage digital content to ensure safe environments across our partner platforms. Training provided.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-surface-variant rounded-lg font-caption text-caption text-on-surface">Remote</span>
                    <span className="px-3 py-1 bg-surface-variant rounded-lg font-caption text-caption text-on-surface">5-10 hrs/week</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-4 glass-card rounded-xl p-6 flex flex-col justify-between group hover:border-surface-tint transition-colors cursor-pointer ambient-glow">
                <div className="h-12 w-12 rounded-lg bg-sky-tint flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>campaign</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Community Advocate</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">Represent our mission in your local community schools and events.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-surface-variant rounded-lg font-caption text-caption text-on-surface">Local</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 glass-card rounded-xl p-6 flex flex-col justify-between group hover:border-surface-tint transition-colors cursor-pointer ambient-glow">
                <div className="h-12 w-12 rounded-lg bg-sky-tint flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-deep-navy" style={{ "fontVariationSettings": "'FILL' 1" }}>code</span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-deep-navy mb-2">Tech Support &amp; Dev</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">Assist in maintaining our reporting tools and educational websites.</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-surface-variant rounded-lg font-caption text-caption text-on-surface">Remote</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-cover bg-center w-full h-full transition-transform duration-700 group-hover:scale-105" data-alt="Close up of hands typing on a laptop with a soft blue glowing screen, overlaid with subtle digital security shield icons. The background is slightly blurred indicating a modern office or cafe setting, conveying a sense of tech-forward volunteer work for child safety." style={{ "backgroundImage": "url('https" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-headline-md text-headline-md text-white mb-2">Use your skills for good.</h3>
                  <Link className="inline-flex items-center text-safety-yellow font-label-md text-label-md hover:underline" to="#">
                    Start application <span className="material-symbols-outlined ml-1 text-sm" style={{ "fontVariationSettings": "'FILL' 0" }}>arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative" id="application-form">

          <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-tint/20 rounded-l-[100px] -z-10 hidden lg:block"></div>
          <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-stack-md ambient-glow">
            <div className="mb-8">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-deep-navy mb-2">Volunteer Application</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Takes about 5 minutes. We're excited to learn more about you!</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-label-md text-label-md text-deep-navy">Step 1 of 3: Basics</span>
                <span className="font-caption text-caption text-on-surface-variant">33%</span>
              </div>
              <div className="w-full bg-sky-tint rounded-full h-2">
                <div className="bg-deep-navy h-2 rounded-full transition-all duration-500" style={{ "width": "33%" }}></div>
              </div>
            </div>
            <form action="#" className="space-y-6" method="POST">

              <div className="space-y-4" id="step1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block font-label-md text-label-md text-deep-navy" htmlFor="firstName">First Name</label>
                    <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="firstName" name="firstName" required="" type="text" />
                  </div>
                  <div className="space-y-1">
                    <label className="block font-label-md text-label-md text-deep-navy" htmlFor="lastName">Last Name</label>
                    <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="lastName" name="lastName" required="" type="text" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-deep-navy" htmlFor="email">Email Address</label>
                  <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="email" name="email" required="" type="email" />
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-deep-navy" htmlFor="phone">Phone Number (Optional)</label>
                  <input className="w-full rounded-lg border-outline-variant bg-surface-container-lowest text-on-surface shadow-sm focus:border-deep-navy focus:ring-deep-navy sm:text-body-md h-12 px-4 transition-colors" id="phone" name="phone" type="tel" />
                </div>
              </div>

              <div className="pt-6 border-t border-surface-variant flex justify-end gap-4">
                <button className="px-6 py-2.5 rounded-full font-label-md text-label-md text-deep-navy hover:bg-sky-tint transition-colors focus:outline-none focus:ring-2 focus:ring-deep-navy" type="button">
                  Save for Later
                </button>
                <button className="px-8 py-2.5 rounded-full bg-deep-navy text-on-primary font-label-md text-label-md hover:bg-surface-tint transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy shadow-sm inline-flex items-center" type="button">
                  Next Step
                  <span className="material-symbols-outlined ml-2 text-sm" style={{ "fontVariationSettings": "'FILL' 0" }}>arrow_forward</span>
                </button>
              </div>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm" style={{ "fontVariationSettings": "'FILL' 1" }}>lock</span>
              <span className="font-caption text-caption">Your information is secure and will never be shared.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />



    </>
  );
}
