import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>


      <Navbar />
      <main className="flex-grow">

        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-stack-lg">
            <h1 className="font-display-lg text-display-lg text-deep-navy mb-base">Contact Us</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">We are here to support, listen, and act. Reach out for general inquiries, or use our emergency channels for immediate concerns.</p>
          </div>

          <div className="bg-safety-yellow rounded-xl p-6 mb-stack-lg flex flex-col md:flex-row items-center justify-between gap-6 shadow-md shadow-deep-navy/10">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-deep-navy text-4xl" data-icon="emergency" data-weight="fill" style={{ "fontVariationSettings": "'FILL' 1" }}>emergency</span>
              <div>
                <h2 className="font-headline-md text-headline-md text-deep-navy">Immediate Safety Concern?</h2>
                <p className="font-body-md text-body-md text-deep-navy/80">If a child is in immediate danger, contact emergency services or use our dedicated reporting line.</p>
              </div>
            </div>
            <Link className="whitespace-nowrap bg-deep-navy text-white px-8 py-3 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-deep-navy" to="/annual-report">
              Report an Incident
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

            <div className="lg:col-span-7 glass-card rounded-xl p-stack-md">
              <h3 className="font-headline-md text-headline-md text-deep-navy mb-stack-sm">Send us a Message</h3>
              <form action="#" className="space-y-4" method="POST">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-label-md text-label-md text-deep-navy mb-1" htmlFor="first_name">First Name</label>
                    <input className="form-input w-full p-3 font-body-md text-body-md text-on-surface" id="first_name" name="first_name" placeholder="Jane" type="text" />
                  </div>
                  <div>
                    <label className="block font-label-md text-label-md text-deep-navy mb-1" htmlFor="last_name">Last Name</label>
                    <input className="form-input w-full p-3 font-body-md text-body-md text-on-surface" id="last_name" name="last_name" placeholder="Doe" type="text" />
                  </div>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-deep-navy mb-1" htmlFor="email">Email Address</label>
                  <input className="form-input w-full p-3 font-body-md text-body-md text-on-surface" id="email" name="email" placeholder="jane@example.com" type="email" />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-deep-navy mb-1" htmlFor="subject">Subject</label>
                  <select className="form-input w-full p-3 font-body-md text-body-md text-on-surface" id="subject" name="subject">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Media Request</option>
                    <option>Volunteer Information</option>
                  </select>
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-deep-navy mb-1" htmlFor="message">Message</label>
                  <textarea className="form-input w-full p-3 font-body-md text-body-md text-on-surface" id="message" name="message" placeholder="How can we help you?" rows="4"></textarea>
                </div>
                <button className="w-full bg-deep-navy text-white px-6 py-3 rounded-full font-label-md text-label-md hover:bg-opacity-90 transition-all mt-4" type="submit">Send Message</button>
              </form>
            </div>

            <div className="lg:col-span-5 space-y-gutter">

              <div className="glass-card rounded-xl p-stack-md flex gap-4">
                <span className="material-symbols-outlined text-deep-navy bg-sky-tint p-3 rounded-lg h-fit" data-icon="location_city">location_city</span>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-1">Head Office (Nawala)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-2">123 Safety Avenue, Nawala, Sri Lanka</p>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-[20px]" data-icon="call">call</span> +94 11 234 5678</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-stack-md flex gap-4">
                <span className="material-symbols-outlined text-deep-navy bg-sky-tint p-3 rounded-lg h-fit" data-icon="corporate_fare">corporate_fare</span>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-1">Northern Office (Jaffna)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-2">45 Point Pedro Road, Jaffna, Sri Lanka</p>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-[20px]" data-icon="call">call</span> +94 21 234 5678</p>
                </div>
              </div>

              <div className="glass-card rounded-xl p-stack-md flex gap-4">
                <span className="material-symbols-outlined text-deep-navy bg-sky-tint p-3 rounded-lg h-fit" data-icon="apartment">apartment</span>
                <div>
                  <h4 className="font-headline-md text-headline-md text-deep-navy mb-1">Eastern Office (Kantale)</h4>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-2">78 Main Street, Kantale, Sri Lanka</p>
                  <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-2"><span className="material-symbols-outlined text-[20px]" data-icon="call">call</span> +94 26 234 5678</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-stack-lg glass-card rounded-xl p-2 overflow-hidden h-[400px] relative">
            <img className="w-full h-full object-cover rounded-lg opacity-80" data-alt="A highly detailed top-down stylized map illustration of Sri Lanka focusing on Nawala, Jaffna, and Kantale. The map uses a clean, light-mode modern corporate aesthetic with subtle glassmorphic elements. The color palette features pristine white backgrounds, soft sky-tint oceans, and deep navy markers for the office locations. The overall mood is professional, clear, and geographically informative, fitting for a digital safety organization." data-location="Sri Lanka" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJC1ZapkPZJTGMuvJTXjj1c2MFg9Kb0yjcZ0mYhV6LGxNFM6YT1CfSnIpB08H9b7taxaA6CuybdEiQN7mqLYvV6siC4AzsS_VNKHdn--ZtHYo3usM5b_YMEzl4KI1W12dJhvygxZ3myrlpTjdfuDTZKN3P98Z9aWw7mjsnVS1P-spez09p33SRFUpKP4jeNJ_HKbeOAhze6zU19SvR9wyU9m0f2zPpstFTosAlstOqecFzhqnAGA8e" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-label-md text-label-md text-deep-navy shadow-sm">Interactive Map Placeholder</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}
