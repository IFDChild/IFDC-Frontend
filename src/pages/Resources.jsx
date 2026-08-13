import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function Resources() {
  return (
    <>


      <Navbar />
      <main className="pt-20">

        <section className="relative overflow-hidden pt-xxl pb-stack-lg px-margin-mobile md:px-margin-desktop">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1 bg-sky-tint text-primary rounded-full font-label-md mb-stack-sm">Education Hub</span>
              <h1 className="font-display-lg text-display-lg md:text-display-lg text-primary mb-stack-md">Digital Safety Resources</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-stack-lg">
                Empowering children, families, and educators with free, evidence-based tools to foster a safer, more positive digital world. Discover our collection of guides, curriculum, and toolkits.
              </p>
              <div className="flex flex-wrap gap-stack-sm">
                <Link className="px-8 py-4 bg-primary text-on-primary rounded-full font-label-md hover:bg-deep-navy transition-all ambient-glow" to="#">Explore Library</Link>
                <Link className="px-8 py-4 border-2 border-primary text-primary rounded-full font-label-md hover:bg-sky-tint transition-all" to="#">Newest Updates</Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-safety-yellow/20 rounded-full blur-3xl"></div>
              <div className="glass-card rounded-xl overflow-hidden ambient-glow transform rotate-1">
                <img className="w-full h-[400px] object-cover" data-alt="A diverse group of cheerful elementary students and a teacher in a bright, modern technology lab using tablets and large touch screens. The lighting is soft and warm, reflecting a protective and optimistic educational environment with primary colors like deep blue and soft canary yellow. The style is clean, modern corporate with soft illustration-like quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgU8rk5-RnqUpCb422ukY-Yc5vrmz2WmOyUtgATqrkQWBhbQRJ9-09zT8QOFVrorW5pWyVpvTBtj2z3OFwFxR6q4tWKXId-ftsElCmRf-ZePKbRLy-Banw16SYGq6iOhQtTs_rDr9IsilL430_b6ZxpSh-ogyCHS-J0CqahGTEmm0Uoua8o76B3L3CHvBEyeRA9-0jSG61v28jTsQP8MdDaDr11Lxn2MzXxKlRC_UFCip7PE7Qzhcs" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-stack-md rounded-xl ambient-glow hidden md:block">
                <div className="flex items-center gap-base">
                  <div className="w-10 h-10 rounded-full bg-safety-yellow flex items-center justify-center">
                    <span className="material-symbols-outlined text-deep-navy">download</span>
                  </div>
                  <div>
                    <p className="font-label-md text-primary">50k+ Downloads</p>
                    <p className="text-caption text-on-surface-variant">This month alone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="bg-surface-container-low py-stack-md px-margin-mobile md:px-margin-desktop sticky top-20 z-40 border-y border-outline-variant/30" id="browse">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-stack-md">
              <div className="w-full lg:max-w-md relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full pl-12 pr-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary font-body-md" placeholder="Search by topic, keyword, or title..." type="text" />
              </div>
              <div className="flex flex-wrap items-center gap-base">
                <span className="text-caption text-on-surface-variant font-semibold uppercase tracking-wider mr-2">Filter by:</span>
                <button className="px-4 py-2 bg-primary text-on-primary rounded-full font-label-md">All</button>
                <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full font-label-md hover:bg-sky-tint transition-all">Parents</button>
                <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full font-label-md hover:bg-sky-tint transition-all">Teachers</button>
                <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full font-label-md hover:bg-sky-tint transition-all">Children</button>
                <button className="px-4 py-2 bg-white text-on-surface-variant border border-outline-variant rounded-full font-label-md hover:bg-sky-tint transition-all">Policymakers</button>
              </div>
              <div className="flex items-center gap-stack-sm ml-auto">
                <select className="bg-white border border-outline-variant rounded-lg px-4 py-2 font-label-md focus:ring-primary">
                  <option>Newest</option>
                  <option>Most Downloaded</option>
                  <option>Alphabetical</option>
                </select>
                <div className="hidden sm:block text-caption text-on-surface-variant">
                  Showing <span className="font-bold text-primary">124</span> Resources
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-xxl px-margin-mobile md:px-margin-desktop">
          <div className="max-w-7xl mx-auto space-y-xxl">

            <div className="space-y-stack-md">
              <div className="flex items-center gap-base pb-base border-b-2 border-primary w-fit">
                <span className="material-symbols-outlined text-primary" style={{ "fontVariationSettings": "'FILL' 1" }}>family_restroom</span>
                <h2 className="font-headline-md text-headline-md text-primary">Parents &amp; Caregivers</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

                <div className="group bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-stack-sm">
                    <div className="w-12 h-12 bg-sky-tint rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>picture_as_pdf</span>
                    </div>
                    <span className="px-2 py-1 bg-surface-container text-caption rounded font-semibold text-on-surface-variant uppercase">New</span>
                  </div>
                  <h3 className="font-headline-md text-body-lg text-primary mb-2">2024 Online Safety Guide</h3>
                  <p className="text-on-surface-variant text-body-md mb-stack-md line-clamp-2">Complete toolkit for managing screen time, setting boundaries, and talking about digital privacy with your children.</p>
                  <div className="flex items-center gap-stack-sm text-caption text-outline mb-stack-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">description</span> PDF</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">hard_drive</span> 2.4 MB</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Oct 2023</span>
                  </div>
                  <div className="flex gap-base">
                    <Link className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md flex items-center justify-center gap-base hover:bg-deep-navy" download="" to="#">
                      <span className="material-symbols-outlined text-sm">download</span> Download
                    </Link>
                    <button className="px-4 py-2 border border-outline-variant text-primary rounded-lg font-label-md hover:bg-sky-tint">Preview</button>
                  </div>
                </div>

                <div className="group bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-stack-sm">
                    <div className="w-12 h-12 bg-sky-tint rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>picture_as_pdf</span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-body-lg text-primary mb-2">Social Media &amp; Mental Health</h3>
                  <p className="text-on-surface-variant text-body-md mb-stack-md line-clamp-2">Research-backed advice on recognizing signs of digital exhaustion and fostering healthy self-esteem in teens.</p>
                  <div className="flex items-center gap-stack-sm text-caption text-outline mb-stack-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">description</span> PDF</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">hard_drive</span> 1.8 MB</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Aug 2023</span>
                  </div>
                  <div className="flex gap-base">
                    <Link className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md flex items-center justify-center gap-base hover:bg-deep-navy" download="" to="#">
                      <span className="material-symbols-outlined text-sm">download</span> Download
                    </Link>
                    <button className="px-4 py-2 border border-outline-variant text-primary rounded-lg font-label-md hover:bg-sky-tint">Preview</button>
                  </div>
                </div>

                <div className="group bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-stack-sm">
                    <div className="w-12 h-12 bg-sky-tint rounded-lg flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>picture_as_pdf</span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-body-lg text-primary mb-2">Gaming Privacy Settings</h3>
                  <p className="text-on-surface-variant text-body-md mb-stack-md line-clamp-2">Step-by-step instructions for the most popular gaming consoles to ensure a private and secure play environment.</p>
                  <div className="flex items-center gap-stack-sm text-caption text-outline mb-stack-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">description</span> PDF</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">hard_drive</span> 3.1 MB</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> June 2023</span>
                  </div>
                  <div className="flex gap-base">
                    <Link className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md flex items-center justify-center gap-base hover:bg-deep-navy" download="" to="#">
                      <span className="material-symbols-outlined text-sm">download</span> Download
                    </Link>
                    <button className="px-4 py-2 border border-outline-variant text-primary rounded-lg font-label-md hover:bg-sky-tint">Preview</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-stack-md">
              <div className="flex items-center gap-base pb-base border-b-2 border-secondary-container w-fit">
                <span className="material-symbols-outlined text-secondary" style={{ "fontVariationSettings": "'FILL' 1" }}>school</span>
                <h2 className="font-headline-md text-headline-md text-secondary">Educators &amp; Schools</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

                <div className="group bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-stack-sm">
                    <div className="w-12 h-12 bg-soft-canary rounded-lg flex items-center justify-center text-secondary">
                      <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>picture_as_pdf</span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-body-lg text-primary mb-2">Cyber-Citizenship Curriculum</h3>
                  <p className="text-on-surface-variant text-body-md mb-stack-md line-clamp-2">A 12-week modular curriculum for grades 1-5 focusing on digital ethics and empathy.</p>
                  <div className="flex items-center gap-stack-sm text-caption text-outline mb-stack-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">description</span> PDF</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">hard_drive</span> 12.5 MB</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Sept 2023</span>
                  </div>
                  <div className="flex gap-base">
                    <Link className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md flex items-center justify-center gap-base hover:bg-deep-navy" download="" to="#">
                      <span className="material-symbols-outlined text-sm">download</span> Download
                    </Link>
                    <button className="px-4 py-2 border border-outline-variant text-primary rounded-lg font-label-md hover:bg-sky-tint">Preview</button>
                  </div>
                </div>

              </div>
            </div>

            <div className="space-y-stack-md">
              <div className="flex items-center gap-base pb-base border-b-2 border-tertiary w-fit">
                <span className="material-symbols-outlined text-tertiary" style={{ "fontVariationSettings": "'FILL' 1" }}>policy</span>
                <h2 className="font-headline-md text-headline-md text-tertiary">Policymakers &amp; Research</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

                <div className="group bg-surface-container-lowest p-stack-md rounded-xl border border-outline-variant/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="flex justify-between items-start mb-stack-sm">
                    <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-tertiary">
                      <span className="material-symbols-outlined" style={{ "fontVariationSettings": "'FILL' 1" }}>picture_as_pdf</span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-body-lg text-primary mb-2">2023 Impact Report</h3>
                  <p className="text-on-surface-variant text-body-md mb-stack-md line-clamp-2">Comprehensive data on digital safety trends and our foundation's global advocacy achievements.</p>
                  <div className="flex items-center gap-stack-sm text-caption text-outline mb-stack-md">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">description</span> PDF</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">hard_drive</span> 4.2 MB</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> Dec 2023</span>
                  </div>
                  <div className="flex gap-base">
                    <Link className="flex-1 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-md flex items-center justify-center gap-base hover:bg-deep-navy" download="" to="#">
                      <span className="material-symbols-outlined text-sm">download</span> Download
                    </Link>
                    <button className="px-4 py-2 border border-outline-variant text-primary rounded-lg font-label-md hover:bg-sky-tint">Preview</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary text-on-primary py-xxl px-margin-mobile">
          <div className="max-w-4xl mx-auto text-center space-y-stack-md">
            <h2 className="font-headline-lg text-headline-lg">Stay Informed, Stay Safe</h2>
            <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto">Subscribe to our monthly resource digest and get the latest digital safety tips and research delivered straight to your inbox.</p>
            <form className="flex flex-col sm:flex-row gap-base max-w-lg mx-auto">
              <input className="flex-1 px-6 py-3 rounded-full text-on-surface border-none focus:ring-safety-yellow" placeholder="Your email address" type="email" />
              <button className="px-8 py-3 bg-safety-yellow text-primary font-label-md rounded-full hover:bg-white transition-all" type="submit">Subscribe</button>
            </form>
            <p className="text-caption text-on-primary-container">We value your privacy. No spam, ever.</p>
          </div>
        </section>
      </main>

      <Footer />





    </>
  );
}
