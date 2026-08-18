import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import articleimage from '../assets/images/Youth Summit.png';

export default function ArticleDetail() {
  return (
    <>


      <Navbar />
      <main className="pt-24 pb-stack-lg">

        <div className="max-w-container-max mx-auto px-margin-desktop py-stack-sm">
          <nav className="flex items-center gap-2 text-caption font-caption text-on-surface-variant">
            <Link className="hover:text-primary flex items-center gap-1" to="/">
              <span className="material-symbols-outlined text-[16px]">home</span> Home
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <Link className="hover:text-primary" to="/news">News &amp; Blog</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-primary font-semibold truncate max-w-[200px] md:max-w-none">Empowering Children in the Digital Age</span>
          </nav>
        </div>

        <section className="max-w-container-max mx-auto px-margin-desktop mb-stack-md">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg group">
            <img alt="Children using digital technology safely" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={articleimage} />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
              <span className="inline-block px-3 py-1 bg-safety-yellow text-deep-navy font-label-md text-label-md rounded-lg mb-4">Digital Literacy</span>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg leading-tight mb-4 max-w-4xl">Empowering Children in the Digital Age: Strategies for Safe Online Exploration</h1>
            </div>
          </div>
        </section>

        <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">

          <article className="lg:col-span-8">

            <div className="flex flex-wrap items-center justify-between gap-gutter border-b border-outline-variant pb-stack-sm mb-stack-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-tint">
                  <img className="w-full h-full object-cover" data-alt="A professional headshot of Dr. Elena Rostova, a middle-aged woman with a friendly, intelligent expression, wearing a navy blazer in a modern, brightly lit office environment with soft-focus books in the background. The style is clean, corporate, and trustworthy, fitting a modern light-mode non-profit brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ3xynBTPMZet4UIiVumyJUxmJ-cNpWqruTh_nzlQ94Cg0UcbCur7MrZipFEVO7jdxGRUzKXzPYTN6WQcfBNmBNGmXRD2HRDTU8rDbv7q7vO3Ga7Hyc-eHmQtupUoU74Ihk-AmZgo3Bk1j4kP0H54G4iXdz7t3uESjvga1AQPF7rtyC_zUwdNk_lvutUFNKiBixM_Lgn0fMgR2w7KD2SnXDrpFjrQWzrEJjzGvV62s4Aw4hWFFeztF" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary">Dr. Elena Rostova</p>
                  <p className="font-caption text-caption text-on-surface-variant">Lead Child Psychologist • May 24, 2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-sky-tint text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container hover:bg-sky-tint text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">bookmark</span>
                </button>
              </div>
            </div>

            <div className="prose max-w-none text-on-surface space-y-6">
              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                As we navigate an increasingly digital landscape, the safety of our children online has never been more paramount. While technology offers unprecedented opportunities for learning and connection, it also presents complex challenges that require a proactive and compassionate approach.
              </p>
              <h2 className="font-headline-md text-headline-md text-deep-navy pt-4">Building a Foundation of Trust</h2>
              <p className="">The first step in digital safety isn't a software filter—it's a conversation. Children need to feel that they can come to their parents or guardians without fear of judgment or having their devices confiscated. When trust is established, safety follows.</p>
              <ul className="list-none space-y-3 pl-4 border-l-2 border-sky-tint">
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="">Set clear, age-appropriate boundaries together.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="">Explore digital spaces alongside your child.</span>
                </li>
                <li className="flex gap-3">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="">Teach them to recognize the "gut feeling" when something feels wrong online.</span>
                </li>
              </ul>
              <blockquote className="">
                "Digital safety is not about restriction, but about equipping children with the critical thinking skills to navigate the web with confidence and resilience."
              </blockquote>
              <h3 className="font-headline-md text-headline-md text-deep-navy pt-4">The Role of Digital Literacy</h3>
              <p className="">Literacy in the 21st century extends beyond reading and writing. It includes understanding privacy settings, recognizing misinformation, and understanding the permanent nature of a digital footprint. We must shift from being "gatekeepers" to being "guides."</p>
              <div className="glass-card p-6 rounded-xl my-8">
                <h4 className="font-label-md text-label-md text-primary uppercase tracking-wider mb-2">Pro-Tip for Parents</h4>
                <p className="text-on-surface-variant">Create a 'Family Media Agreement' that outlines acceptable behaviors, screen-time limits, and reporting protocols for all family members. Lead by example!</p>
              </div>
              <p className="">In conclusion, the Digital Child Safety Foundation remains committed to providing the resources and advocacy needed to protect our most vulnerable users. Together, we can create a digital world where every child can thrive safely.</p>
            </div>

            <div className="mt-12 pt-8 border-t border-outline-variant flex flex-col md:flex-row md:items-center justify-between gap-stack-sm">
              <div className="flex items-center gap-3">
                <span className="font-label-md text-label-md text-on-surface-variant">Share this article:</span>
                <div className="flex gap-2">
                  <Link className="w-10 h-10 rounded-full bg-deep-navy text-white flex items-center justify-center hover:bg-primary transition-colors" to="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </Link>
                  <Link className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity" to="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                  </Link>
                  <Link className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity" to="#">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.2225 0z" /></svg>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                <span className="bg-sky-tint text-primary px-3 py-1 rounded-full text-caption font-caption">#ChildSafety</span>
                <span className="bg-sky-tint text-primary px-3 py-1 rounded-full text-caption font-caption">#DigitalLiteracy</span>
                <span className="bg-sky-tint text-primary px-3 py-1 rounded-full text-caption font-caption">#CyberBullying</span>
              </div>
            </div>
          </article>

          <aside className="lg:col-span-4 space-y-stack-md">
            <div className="sticky top-28">

              <div className="bg-deep-navy text-white rounded-[1.5rem] p-8 shadow-xl relative overflow-hidden group">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-safety-yellow rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"></div>
                <h3 className="font-headline-md text-headline-md mb-4 relative z-10">Join our Mission</h3>
                <p className="font-body-md text-body-md text-white/80 mb-6 relative z-10">Stay updated with the latest digital safety trends and resources for your family.</p>
                <form className="space-y-4 relative z-10">
                  <input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-safety-yellow transition-all" placeholder="Email Address" type="email" />
                  <button className="w-full bg-safety-yellow text-deep-navy font-bold py-3 rounded-xl hover:bg-white transition-colors active:scale-95" type="submit">Subscribe Now</button>
                </form>
              </div>

              <div className="glass-card rounded-[1.5rem] p-8 mt-stack-md">
                <h3 className="font-headline-md text-headline-md text-primary mb-2">Help Protect Children</h3>
                <p className="text-on-surface-variant mb-6">Your donations directly fund online safety programs and victim support services.</p>
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <button className="border border-sky-tint rounded-lg py-2 hover:bg-sky-tint hover:text-primary transition-colors">$25</button>
                  <button className="border border-sky-tint rounded-lg py-2 hover:bg-sky-tint hover:text-primary transition-colors">$50</button>
                  <button className="border border-sky-tint rounded-lg py-2 bg-primary text-white">$100</button>
                </div>
                <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-container transition-colors shadow-lg">Make a Donation</button>
              </div>

              <div className="bg-soft-canary border-2 border-safety-yellow rounded-xl p-6 mt-stack-md flex gap-4">
                <span className="material-symbols-outlined text-deep-navy text-[32px]" style={{ "fontVariationSettings": "'FILL' 1" }}>warning</span>
                <div>
                  <h4 className="font-label-md text-label-md text-deep-navy">Need Help Now?</h4>
                  <p className="text-caption text-on-surface-variant mb-2">If you need to report an online safety incident immediately.</p>
                  <Link className="text-primary font-bold hover:underline" to="/annual-report">Report Incident →</Link>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg">
          <div className="flex items-center justify-between mb-stack-md">
            <h2 className="font-headline-lg text-headline-lg text-primary">Related Articles</h2>
            <Link className="text-primary font-label-md hover:underline flex items-center gap-1" to="#">View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="glass-card rounded-[1.5rem] overflow-hidden flex flex-col group cursor-pointer h-full">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A futuristic, vibrant digital landscape representing the metaverse, with soft blue and violet tones, glowing interface elements, and stylized human avatars interacting in a friendly, open virtual park. Modern digital art style, bright and inviting, clean composition for a child safety context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tGy0Dd6NIIlVKl_b2sRpkanWAfXzoO1xqwAJPMrREMuaf1lFvpuqNPQdQv6qvwRhYckH8KqdW9XKhUy_OLc1x3iO-GBBm12bG2OpaPqG8EtUIsD_4WDfisfBesa5NK5LMhNnJG0InGu7iT7wliTYH0TUPYBULXUkmlSc5nEk6aCmUBfDupMtRz4iUuwLfahVNRiknYJD7_HzCmoaPRaGEhbAMzYvYfgCOc133_x-yLWAKX6G3gHS" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-caption text-primary font-bold uppercase tracking-widest mb-2">Future Tech</span>
                <h3 className="font-headline-md text-headline-md mb-3 line-clamp-2">Navigating the Metaverse: A Parent's Guide</h3>
                <p className="text-on-surface-variant text-body-md line-clamp-3 flex-grow">What every parent needs to know about the next generation of social interaction and immersive gaming.</p>
                <div className="mt-4 pt-4 border-t border-sky-tint flex items-center justify-between">
                  <span className="text-caption text-on-surface-variant">5 min read</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[1.5rem] overflow-hidden flex flex-col group cursor-pointer h-full">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A peaceful living room setting with a warm morning sunlight streaming in. A smartphone lies on a clean white coffee table next to a small green succulent plant, symbolizing balance and digital wellness. Minimalist, high-end photography, bright light-mode aesthetic, serene and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXabcKrGbIMpmJIR-o-fqu8OEQsze_NZNCDEJWS0RZ3CCqpVc-AFvGs7FHOsAusGPPTx0LtPDEJKKCF6ZcEASV7UgX1XM_8--fbu2lNy7jXev9UQv8tywOT0PA07-lCDAISYkCI_Wn3VSIdaOCE7WBQ4XFBbBE-PmVOQ5eoQRKu_b7O_5qJf8PQ2IGbB-at9_-XKI2IFnxudejyRW7-VVQta0FzPO_aSCBqM8AwINmuOZn_44YAnwr" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-caption text-primary font-bold uppercase tracking-widest mb-2">Wellness</span>
                <h3 className="font-headline-md text-headline-md mb-3 line-clamp-2">The Impact of Screen Time on Childhood Development</h3>
                <p className="text-on-surface-variant text-body-md line-clamp-3 flex-grow">Recent studies highlight the importance of high-quality content over mere quantity in early years.</p>
                <div className="mt-4 pt-4 border-t border-sky-tint flex items-center justify-between">
                  <span className="text-caption text-on-surface-variant">8 min read</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[1.5rem] overflow-hidden flex flex-col group cursor-pointer h-full">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A detailed, macro shot of a sleek, silver laptop keyboard with a soft yellow light reflecting off the surface. A small, stylized padlock icon is placed elegantly next to the 'Enter' key, representing cyber security. Clean, modern corporate style, soft-focus background, professional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkhqXCrNuDOu4hmojBAiMxaF75_qs_YCMCokFewyOif5v0jt29GWQbvsAmAf2dztUrsE_qUkirjhRvZF1nKn6UYL_VJw0ZMJv5HeV1_Nt7MVfoqumm8z0XttoWTh__HF6b7UfoIEOJPsqFEP1d2RdC8CX-REnwoDSWQfTuRA5zMc-CK839J9SzXJzaLVTMy5-IB-7cThZLWhMyyWX_CgSNjR51rktDh8-ROfhP_D-KZ3eq5dON9B9v" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-caption text-primary font-bold uppercase tracking-widest mb-2">Privacy</span>
                <h3 className="font-headline-md text-headline-md mb-3 line-clamp-2">5 Privacy Settings Every Teen Should Enable</h3>
                <p className="text-on-surface-variant text-body-md line-clamp-3 flex-grow">Simple, actionable steps to lock down social media profiles and protect personal data.</p>
                <div className="mt-4 pt-4 border-t border-sky-tint flex items-center justify-between">
                  <span className="text-caption text-on-surface-variant">4 min read</span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
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
