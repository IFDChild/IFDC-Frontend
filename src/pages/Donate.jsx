import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Donate() {
  const [amount, setAmount] = useState('50');
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-stack-lg pb-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden bg-deep-navy text-on-primary">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy to-transparent"></div>
          
          <div className="max-w-container-max mx-auto relative z-10 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-safety-yellow/20 rounded-full text-safety-yellow font-label-md text-label-md mx-auto">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              Support Our Mission
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg max-w-3xl mx-auto">
              Your contribution creates a <span className="text-safety-yellow">safer digital world</span>
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl mx-auto">
              Every donation helps us develop better tools, advocate for stronger policies, and educate communities to protect children online.
            </p>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-stack-lg px-margin-mobile md:px-margin-desktop relative -mt-16 z-20">
          <div className="max-w-3xl mx-auto glass-card bg-surface-container-lowest shadow-xl rounded-3xl p-6 md:p-10 border border-outline-variant/30">
            
            {/* Toggle Frequency */}
            <div className="flex bg-surface-container-low rounded-xl p-1 mb-8 w-full max-w-md mx-auto">
              <button 
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-3 rounded-lg font-label-md text-label-md transition-all duration-200 ${isMonthly ? 'bg-surface-container-lowest text-deep-navy shadow-sm' : 'text-on-surface-variant hover:text-deep-navy'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-3 rounded-lg font-label-md text-label-md transition-all duration-200 ${!isMonthly ? 'bg-surface-container-lowest text-deep-navy shadow-sm' : 'text-on-surface-variant hover:text-deep-navy'}`}
              >
                One-time
              </button>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['25', '50', '100', '250'].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`py-4 rounded-xl font-headline-md text-headline-md transition-all duration-200 border-2 ${amount === val ? 'border-deep-navy bg-sky-tint text-deep-navy' : 'border-outline-variant text-on-surface-variant hover:border-deep-navy/50'}`}
                >
                  ${val}
                </button>
              ))}
            </div>

            <div className="relative mb-10">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 font-headline-md text-headline-md text-on-surface-variant">$</span>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-xl border-2 border-outline-variant focus:border-deep-navy focus:ring-0 h-16 pl-10 pr-4 font-headline-md text-headline-md text-deep-navy transition-colors bg-transparent"
                placeholder="Custom Amount"
              />
            </div>

            <div className="space-y-4 mb-10">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center group-hover:border-deep-navy transition-colors bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-[16px] text-transparent">check</span>
                </div>
                <span className="font-body-md text-body-md text-on-surface-variant">Dedicate this donation in honor or memory of someone</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="w-5 h-5 rounded border border-outline-variant flex items-center justify-center group-hover:border-deep-navy transition-colors bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-[16px] text-transparent">check</span>
                </div>
                <span className="font-body-md text-body-md text-on-surface-variant">Yes, I would like to cover the processing fees</span>
              </label>
            </div>

            <button className="w-full py-4 rounded-xl bg-safety-yellow text-deep-navy font-headline-md text-headline-md hover:bg-secondary-fixed transition-all duration-200 shadow-md active:scale-[0.99] flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              Donate ${amount || '0'} {isMonthly ? 'Monthly' : ''}
            </button>
            
            <p className="text-center font-caption text-caption text-on-surface-variant mt-6">
              Secure payment processed by Stripe. IFDC is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent of the law.
            </p>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-stack-md bg-surface-container-lowest border-t border-surface-variant">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <h3 className="font-label-md text-label-md text-outline mb-6 uppercase tracking-wider">Trusted by Organizations Worldwide</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="font-display-lg text-2xl font-bold">TechForGood</span>
              <span className="font-display-lg text-2xl font-bold">SafeNet Alliance</span>
              <span className="font-display-lg text-2xl font-bold">Global Child Defend</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
