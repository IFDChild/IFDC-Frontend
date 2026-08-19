import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import childTeach from '../assets/images/digitalchild.jpg';


export default function About() {
  return (
    <>
      {/* <Navbar /> */}


      <header className="sticky top-0 w-full bg-surface-container-lowest shadow-sm z-50"><div className="flex justify-between items-center h-20 px-margin-desktop max-w-7xl mx-auto"><div className="flex items-center gap-4"><img alt="IDFC Logo" className="h-10 md:h-12 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClz6GzbxPxgKR6ES6LeUxKiXeSzg9-ai8JDCukrWFn3FceTxMqS2ypHoj-ytT6iHHWrSU_PaovfT-UUfG-7rgVGfe6unbirrdwurgtmr4B3VW1Al2jnz-Hk6cMoPavpF00u4AzWcYlbjjJIS1S05FIqep5Az1sWWzCwe50SUthk05AQAEaUfhxPJIivGyfyD5ev_PWN-NbphP70vGY645rywqLHk-lNGjjCeZYoIVCAqV6dQCE-Poqy9d_hpuj4LPCdw" /></div><nav className="hidden md:flex items-center gap-8"><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link><Link className="font-body-md text-primary border-b-2 border-primary pb-1" to="/">About</Link><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Blogs &amp; News</Link><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">Resources</Link></nav><div className="flex items-center gap-4"><div className="relative group hidden md:block"><button className="bg-deep-navy text-white px-6 py-2 rounded-full font-label-md flex items-center gap-2 transition-all active:scale-95 hover:bg-primary">Join Us<span className="material-symbols-outlined text-[18px]">expand_more</span></button><div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50"><ul className="py-2"><li className=""><Link className="block px-4 py-2 hover:bg-surface-container-low transition-colors text-label-md" to="/">Volunteer</Link></li><li className=""><Link className="block px-4 py-2 hover:bg-surface-container-low transition-colors text-label-md" to="/">Advocate</Link></li><li className=""><Link className="block px-4 py-2 hover:bg-surface-container-low transition-colors text-label-md" to="/">Partner With Us</Link></li></ul></div></div><button className="md:hidden text-primary"><span className="material-symbols-outlined text-[32px]">menu</span></button></div></div></header>
      <main className="">

        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Hero Image" className="w-full  object-cover" src={childTeach} />
            <div className="absolute inset-0 bg-gradient-to-r from-deep-navy via-deep-navy/80 to-transparent "></div>
          </div>
          <div className="max-w-container-max mx-auto w-full px-margin-desktop relative z-10 py-stack-lg mt-4">
            <div className="max-w-2xl space-y-stack-md reveal active">
              <h1 className="font-display-lg text-display-lg text-white leading-tight">
                Protecting the Next Generation in a <span className="text-safety-yellow">Digital World</span>
              </h1>
              <p className="font-body-lg text-body-lg text-inverse-primary max-w-xl">
                The International Digital Foundation for Children (IDFC) is committed to building a safer, more inclusive online environment where every child can explore, learn, and grow without fear.
              </p>
              {/* <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-safety-yellow text-deep-navy px-8 py-3 rounded-full font-label-md font-bold hover:scale-105 transition-transform shadow-lg">Our Strategy</button>
                <button className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-label-md hover:bg-white/10 transition-colors backdrop-blur-sm">Watch Film</button>
              </div> */}
            </div>
          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface-container-low -mt-8 relative z-20 rounded-t-[3rem]">
          <div className="max-w-container-max mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <div className="bg-white p-8 rounded-[2rem] shadow-xl border-t-4 border-sky-tint hover:-translate-y-2 transition-transform duration-300 reveal active">
              <div className="w-14 h-14 rounded-2xl bg-sky-tint flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Our Vision</h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">A nation where every child is born and raised in a healthy, safe environment, and educated to be successful citizens in the digital world.</p>
            </div>

            <div className="bg-deep-navy p-8 rounded-[2rem] shadow-xl border-t-4 border-safety-yellow hover:-translate-y-2 transition-transform duration-300 reveal active">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">diversity_3</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-4">Mentor Children</h3>
              <p className="font-body-md text-body-md text-inverse-primary leading-relaxed">Engaging children through need-based training and mentoring for healthy internet and media use.</p>
            </div>

            <div className="bg-deep-navy p-8 rounded-[2rem] shadow-xl border-t-4 border-safety-yellow hover:-translate-y-2 transition-transform duration-300 reveal active">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">school</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-4">Train the Kids</h3>
              <p className="font-body-md text-body-md text-inverse-primary leading-relaxed">Equipping children with the necessary tools to navigate the digital world safely and responsibly.</p>
            </div>

            <div className="bg-deep-navy p-8 rounded-[2rem] shadow-xl border-t-4 border-safety-yellow hover:-translate-y-2 transition-transform duration-300 reveal active">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-safety-yellow text-3xl">movie_edit</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-white mb-4">Media Production</h3>
              <p className="font-body-md text-body-md text-inverse-primary leading-relaxed">Producing child-friendly media narratives that foster children’s rights and empower them as creators.</p>
            </div>
          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto lg:grid-cols-2">
            <div className="text-center mb-stack-lg">
              <span className="bg-sky-tint text-primary px-4 py-1 rounded-full text-label-md font-bold uppercase tracking-wider">Timeline</span>
              <h2 className="font-headline-lg text-headline-lg text-deep-navy mt-4">Our Journey Through Time</h2>
            </div>
            <div className="relative max-w-4xl mx-auto space-y-stack-lg">

              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-outline-variant/30 -translate-x-1/2"></div>

              <div className="relative flex flex-col md:flex-row items-center gap-8 reveal active">
                <div className="md:w-1/2 text-left md:text-right">
                  <div className="glass-card p-6 rounded-2xl inline-block md:block shadow-md">
                    <h4 className="text-primary font-bold text-headline-md">2015</h4>
                    <p className="font-bold text-on-surface">The Inception</p>
                    <p className="text-on-surface-variant text-body-md">Founded in Geneva by a group of child psychologists and cybersecurity experts.</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 -translate-x-1/2"></div>
                <div className="md:w-1/2"></div>
              </div>

              <div className="relative flex flex-col md:flex-row-reverse items-center gap-8 reveal active" style={{ "transitionDelay": "100ms" }}>
                <div className="md:w-1/2 text-left">
                  <div className="glass-card p-6 rounded-2xl inline-block md:block shadow-md">
                    <h4 className="text-primary font-bold text-headline-md">2018</h4>
                    <p className="font-bold text-on-surface">Going Global</p>
                    <p className="text-on-surface-variant text-body-md">Expanded operations to 45 countries, partnering with UN agencies for regional advocacy.</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-safety-yellow rounded-full border-4 border-background z-10 -translate-x-1/2"></div>
                <div className="md:w-1/2"></div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-8 reveal active" style={{ "transitionDelay": "200ms" }}>
                <div className="md:w-1/2 text-left md:text-right">
                  <div className="glass-card p-6 rounded-2xl inline-block md:block shadow-md">
                    <h4 className="text-primary font-bold text-headline-md">2023</h4>
                    <p className="font-bold text-on-surface">Innovation Era</p>
                    <p className="text-on-surface-variant text-body-md">Launched AI-driven safety companion for students and revamped teacher training modules.</p>
                  </div>
                </div>
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 -translate-x-1/2"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto lg:grid-cols-2">
            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-deep-navy">Our Approach</h2>
              <p className="text-on-surface-variant mt-2 max-w-2xl mx-auto text-body-lg">A nation where every child is born and raised in a healthy, safe environment, and educated to be successful citizens in the digital world.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group reveal active">
                <div className="w-14 h-14 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl block">menu_book</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Digital Literacy</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">Curating age-appropriate curricula that teach children critical thinking in digital spaces.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group reveal active" style={{ "transitionDelay": "50ms" }}>
                <div className="w-14 h-14 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl block">verified_user</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Child Online Safety</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">Implementing technical guardrails and reporting mechanisms for harmful content.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group reveal active" style={{ "transitionDelay": "100ms" }}>
                <div className="w-14 h-14 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl block">groups</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Community Engagement</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">Working with local leaders to build safety nets within neighborhood networks.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group reveal active" style={{ "transitionDelay": "150ms" }}>
                <div className="w-14 h-14 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl block">school</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Teacher Capacity</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">Training educators to identify and respond to digital harassment and cyberbullying.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group reveal active" style={{ "transitionDelay": "200ms" }}>
                <div className="w-14 h-14 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl block">rocket_launch</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Youth Empowerment</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">Empowering peer-to-peer safety advocates through leadership workshops.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group reveal active" style={{ "transitionDelay": "250ms" }}>
                <div className="w-14 h-14 bg-sky-tint rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-primary text-3xl block">policy</span>
                </div>
                <h4 className="font-headline-md text-headline-md text-deep-navy mb-3">Policy Advocacy</h4>
                <p className="text-on-surface-variant text-body-md leading-relaxed">Collaborating with governments to strengthen legal frameworks for child protection.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface">
          <div className="max-w-container-max mx-auto">

            {/* SECTION HEADER */}
            <div className="text-center mb-stack-lg">

              <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-tint text-primary rounded-full text-caption font-semibold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-[16px]">
                  verified
                </span>
                Our Advocates
              </span>

              <h2 className="font-headline-lg text-headline-lg text-deep-navy">
                Our Child Safety Advocates
              </h2>

              <p className="text-on-surface-variant mt-3 max-w-2xl mx-auto text-body-lg">
                A nation where every child is born and raised in a healthy, safe
                environment, and educated to be successful citizens in the digital world.
              </p>

            </div>


            {/* CAROUSEL */}
            <div className="auto-carousel" id="advocates-carousel">

              <div className="auto-carousel-track">


                {/* =========================
            SARAH JENKINS
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="Sarah Jenkins"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      {/* ROLE BADGE */}
                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Digital Rights Advocate

                        </span>

                      </div>

                    </div>


                    {/* CONTENT */}
                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        Sarah Jenkins
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Specializing in international human rights law and digital
                        privacy for minors.
                      </p>

                      {/* DIVIDER */}
                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            DAVID MILLER
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="David Miller"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Child Online Safety Expert

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        David Miller
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Working to create safer and more inclusive digital spaces
                        for children around the world.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            AMINA YUSUF
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="Amina Yusuf"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Child Protection Advocate

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        Amina Yusuf
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Advocating for children's rights, protection and wellbeing
                        in the digital environment.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            JAMES WILSON
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="James Wilson"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Digital Safety Specialist

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        James Wilson
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Helping organisations develop effective digital safety
                        policies and child protection programmes.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            MICHAEL BROWN
        ========================== */}
                <div className="auto-carousel-item">

                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md hover:shadow-2xl transition-all duration-500 group h-full">

                    <div className="relative h-[280px] overflow-hidden">

                      <img
                        alt="Michael Brown"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 via-transparent to-transparent opacity-80">
                      </div>

                      <div className="absolute bottom-4 left-4">

                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">

                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>

                          Online Safety Advocate

                        </span>

                      </div>

                    </div>

                    <div className="p-6">

                      <h5 className="font-bold text-deep-navy text-[20px] mb-2">
                        Michael Brown
                      </h5>

                      <p className="text-on-surface-variant text-[13px] leading-relaxed line-clamp-3 mb-5">
                        Promoting responsible technology use and positive online
                        experiences for children.
                      </p>

                      <div className="border-t border-outline-variant/30 pt-4">

                        <button className="w-full flex items-center justify-between text-primary text-[12px] font-bold uppercase tracking-wider group/button">

                          <span>
                            View Profile
                          </span>

                          <span className="w-9 h-9 rounded-full bg-sky-tint flex items-center justify-center transition-all duration-300 group-hover/button:bg-primary group-hover/button:text-white">

                            <span className="material-symbols-outlined text-[18px]">
                              arrow_forward
                            </span>

                          </span>

                        </button>

                      </div>

                    </div>

                  </div>

                </div>


                {/* =========================
            DUPLICATES FOR CAROUSEL
        ========================== */}

                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="Sarah Jenkins"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Digital Rights Advocate
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        Sarah Jenkins
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Digital Rights Advocate
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="David Miller"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Child Online Safety Expert
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        David Miller
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Child Online Safety Expert
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="Amina Yusuf"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Child Protection Advocate
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        Amina Yusuf
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Child Protection Advocate
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="James Wilson"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Digital Safety Specialist
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        James Wilson
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Digital Safety Specialist
                      </p>
                    </div>

                  </div>
                </div>


                <div className="auto-carousel-item">
                  <div className="w-[300px] bg-white rounded-[1.5rem] overflow-hidden border border-outline-variant/20 shadow-md h-full">

                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        alt="Michael Brown"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/70 to-transparent"></div>

                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1.5 bg-white/95 rounded-full text-primary text-[10px] font-bold uppercase tracking-wider">
                          Online Safety Advocate
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h5 className="font-bold text-deep-navy text-[20px]">
                        Michael Brown
                      </h5>

                      <p className="text-primary text-[11px] uppercase tracking-wider mt-2">
                        Online Safety Advocate
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>


        <section className="py-stack-lg px-margin-desktop bg-surface-container-low">
          <div className="max-w-container-max mx-auto">

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-stack-lg gap-4">

              <div>
                <h2 className="font-headline-lg text-headline-lg text-deep-navy">
                  Leadership Team
                </h2>

                <p className="text-on-surface-variant mt-2 text-body-lg">
                  The visionaries steering IDFC towards a safer horizon.
                </p>
              </div>

              <button className="text-primary font-bold flex items-center gap-2 hover:text-deep-navy hover:translate-x-1 transition-all">
                Join Our Team
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </button>

            </div>

            <div className="auto-carousel" id="leadership-carousel">

              <div className="auto-carousel-track">

                {/* Dr. Elena Rossi */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Elena Rossi"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Dr. Elena Rossi
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Executive Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        20+ years in international child protection policy and
                        clinical psychology.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Jameson Vance */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Jameson Vance"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Jameson Vance
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Deputy Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Leading strategic partnerships and international
                        child-safety initiatives.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Sarah Al-Mansour */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Sarah Al-Mansour"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Sarah Al-Mansour
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Program Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Developing programmes that empower children and families
                        to navigate the digital world safely.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Marcus Chen */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Marcus Chen"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOJgd2pv26AcqsbW-LreWpxPB-Ef2SwTKwhKqfv7J7GUPGywuffPCPupJH2rhkkUm3T5PX461YwJ1oBlMr2Aflhg_-i1k9CzAZv8LA-C6Rwy3C6uIwGoYTHu55GCIZq1UM2ykBDwC1FMDk7aifXr6ZcrpSsw5u4ucdsvwdH8wkSWtQtyi8ya-ody43uSkKYw5By2V79xt7PHTFZl5Pqmz3Y5gtSevc7adQS8a2w6kA7Pw-Xf0d--k"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Marcus Chen
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Technology Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Driving technology innovation and responsible digital
                        solutions for child safety.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Fifth Leader */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300 h-full">

                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Michael Anderson"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>

                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px] mb-1">
                        Dr. Michael Anderson
                      </h5>

                      <p className="text-primary font-label-md text-[10px] mb-1 uppercase tracking-wider">
                        Policy Director
                      </p>

                      <p className="text-on-surface-variant text-[10px] line-clamp-2 mb-2">
                        Supporting evidence-based policies that protect children
                        across digital environments.
                      </p>

                      <a
                        href="#"
                        className="text-primary hover:text-deep-navy transition-colors flex justify-center"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          link
                        </span>
                      </a>
                    </div>

                  </div>
                </div>

                {/* Duplicate 1 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Elena Rossi"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Dr. Elena Rossi
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Executive Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 2 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Jameson Vance"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCrOu_s99czX8l7Iu8BJN_PaB3_yeeGrQ3reV9m83VmZMnd1-UVSMUFPaRJcITMWmoaBd2Ccib_swPj96TyCjgV0LxvnLI42Ai5ULzZfEC4CoqgGqP33jnec_IaARn9zN2fT1475Y1WwQS6Ax6duw-ugppi5V6LnC3BsAg4QBshfGejbyfqLHobAwT5KT1a_0ZICqv12rX4IAIqNUikx52TsrnlxjdopfCMngChMoSECBs47l4o7tl"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Jameson Vance
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Deputy Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 3 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Sarah Al-Mansour"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9ceM1GaDXwhTQ3P7n0L5YKKJNldBwo9sFVzR9pr4GPD7LK0BP3UMXCJKpJJDX9wZGnQMhXRaa0jWbjm13qImLiD7i3Bfr9O_iQiRalCseq3zzjlAwXNVx9qxxjS1_12zwJfzcNle0RZBIv7ijq7DAo8miwur1qa2r4Qz1RAl2VR9F04KU5Mckf8fBbOrZ4d8Koe3q_CUp9N8IknQyARcGraF0RX9inDEktJBUBscqqs84ReeKNke4"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Sarah Al-Mansour
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Program Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 4 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Marcus Chen"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeOJgd2pv26AcqsbW-LreWpxPB-Ef2SwTKwhKqfv7J7GUPGywuffPCPupJH2rhkkUm3T5PX461YwJ1oBlMr2Aflhg_-i1k9CzAZv8LA-C6Rwy3C6uIwGoYTHu55GCIZq1UM2ykBDwC1FMDk7aifXr6ZcrpSsw5u4ucdsvwdH8wkSWtQtyi8ya-ody43uSkKYw5By2V79xt7PHTFZl5Pqmz3Y5gtSevc7adQS8a2w6kA7Pw-Xf0d--k"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Marcus Chen
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Technology Director
                      </p>
                    </div>
                  </div>
                </div>

                {/* Duplicate 5 */}
                <div className="auto-carousel-item">
                  <div className="bg-white rounded-[1.5rem] shadow-sm border border-outline-variant/20 overflow-hidden h-full">
                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden relative mx-auto mt-4">
                      <img
                        alt="Dr. Michael Anderson"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXzXDns4On2hGLAZXhYmDG2-eXcpjbuEN1tbQiADSnTOpKTW1SO5nv5NQMVf_3GahO_7K2MEnCvJ7Qnf8hmCUp2njVbkd8OunMcHpB7BeTGAaHfHP2w6YIh0SVqM5e1SQNuUOxBlQToSor50HoSld33Os_vFv6-FyYk9CJp9EGqG1JtMqnWOvZkNaF_qvaqx0p5gaauhprlHH1F-kUKKdiJLI0c6AsK8Jic6Ursp9vw0P7oxgWJgyu"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h5 className="font-bold text-deep-navy text-[14px]">
                        Dr. Michael Anderson
                      </h5>
                      <p className="text-primary text-[10px] uppercase tracking-wider">
                        Policy Director
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-deep-navy text-on-primary">
          <div className="max-w-container-max mx-auto">

            <div className="text-center mb-stack-lg">
              <h2 className="font-headline-lg text-headline-lg text-white">
                International Advisory Committee
              </h2>

              <p className="text-on-primary-container mt-2 text-body-lg">
                A nation where every child is born and raised in a healthy, safe
                environment, and educated to be successful citizens in the digital world.
              </p>
            </div>

            <div className="auto-carousel" id="advisory-carousel">

              <div className="auto-carousel-track">

                {/* Prof. David Sterling */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Prof. David Sterling"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Prof. David Sterling
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Digital Ethicist
                  </p>
                </div>

                {/* Ambassador Lima */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Ambassador Lima"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBS36rrp6DX_YfTSyvMbUFNd7p7Aogu7Xa8LYrg2PazaTe5HbrChGETzFlK_Sdi9ld1dqYzbK9fWL-CDGQmkKWQBI94qVq5CECxrWBPRpFTch7xfcQS3CCqmMmZGas5P-iTogbSF1Yy-Z3o4N0kRqDkKtNEMA5fCG2vZTbVwolIRKmJQFEGQNmsTa7J0YaXnKLdfjJEmeNeu6LzReB1Hs8p74LNsgHO8dVu8bDdIJFp7b2WcQz1wjx"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Ambassador Lima
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Human Rights Lead
                  </p>
                </div>

                {/* Kento Suzuki */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Kento Suzuki"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHcvgYsVQu2WUxnGnEF7qLVRwg-VNjSxJ8uX5XHdfSN1XJsd3vVYIEA-CYBgQZAdHC6F0VzSCvDbw_l5Ok8fstPwUKr3xm_bxJ1wOu7Xb7Ycgp8PGqfJnu0XpIxN-D-xpbTmYz88RSiOQFYI3gYyszm35npRTLhE4fp13GsH89Q72w2u3E_et2g0Dw3v_09e47iufdiWErrSOfaIn-y_SPFGt_x6pT3KjdYdGPdT1QkQqSCf0AUQq"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Kento Suzuki
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Privacy Advocate
                  </p>
                </div>

                {/* Dr. Maya Patel */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Dr. Maya Patel"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp_CIhJiMTZUeJRCin0URntjxRaaAu0JIsgqC6g3GQcGh0ADouyy8viu0b1yn2ZlQpTsnx-dBZ4NDAUwIcI0FTa-0NCoGv0TECcgBA7cnySh6L6ummOowLCJs7EpDrwl_UoASXqlvapIbPopC902kQ-kxGxSOaSlK1MVM-8i3JToQZPi1dMEznEkCv5_bcSHs0icPp6GuHAP_4r7nodpCsnMGtRXGe2yWavW_w-ZbNEvpnk9q93ouY"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Maya Patel
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Welfare Expert
                  </p>
                </div>

                {/* Fifth Advisor */}
                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden group-hover:scale-110 transition-transform mb-4">
                    <img
                      alt="Dr. Daniel Williams"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Daniel Williams
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Safety Researcher
                  </p>
                </div>

                {/* DUPLICATES */}

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Prof. David Sterling"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Prof. David Sterling
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Digital Ethicist
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Ambassador Lima"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBS36rrp6DX_YfTSyvMbUFNd7p7Aogu7Xa8LYrg2PazaTe5HbrChGETzFlK_Sdi9ld1dqYzbK9fWL-CDGQmkKWQBI94qVq5CECxrWBPRpFTch7xfcQS3CCqmMmZGas5P-iTogbSF1Yy-Z3o4N0kRqDkKtNEMA5fCG2vZTbVwolIRKmJQFEGQNmsTa7J0YaXnKLdfjJEmeNeu6LzReB1Hs8p74LNsgHO8dVu8bDdIJFp7b2WcQz1wjx"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Ambassador Lima
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Human Rights Lead
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Kento Suzuki"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOHcvgYsVQu2WUxnGnEF7qLVRwg-VNjSxJ8uX5XHdfSN1XJsd3vVYIEA-CYBgQZAdHC6F0VzSCvDbw_l5Ok8fstPwUKr3xm_bxJ1wOu7Xb7Ycgp8PGqfJnu0XpIxN-D-xpbTmYz88RSiOQFYI3gYyszm35npRTLhE4fp13GsH89Q72w2u3E_et2g0Dw3v_09e47iufdiWErrSOfaIn-y_SPFGt_x6pT3KjdYdGPdT1QkQqSCf0AUQq"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Kento Suzuki
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Privacy Advocate
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Dr. Maya Patel"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp_CIhJiMTZUeJRCin0URntjxRaaAu0JIsgqC6g3GQcGh0ADouyy8viu0b1yn2ZlQpTsnx-dBZ4NDAUwIcI0FTa-0NCoGv0TECcgBA7cnySh6L6ummOowLCJs7EpDrwl_UoASXqlvapIbPopC902kQ-kxGxSOaSlK1MVM-8i3JToQZPi1dMEznEkCv5_bcSHs0icPp6GuHAP_4r7nodpCsnMGtRXGe2yWavW_w-ZbNEvpnk9q93ouY"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Maya Patel
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Welfare Expert
                  </p>
                </div>

                <div className="auto-carousel-item text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full border-4 border-primary-container overflow-hidden mb-4">
                    <img
                      alt="Dr. Daniel Williams"
                      className="w-full h-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgk1tACFQctXtK-PxSXydD2tfAeeVoCKe_jRU7EzlLM30R1djyhY4cgm5ZJD66_KblL3-Zk2duhkC9UdGZmxdAXlxSFeTFDTfCEduFd1WUjGV_V1RaNkyGdgAeIVPQP3SQlyPAe-9-pLCwTX2Kq2Q954dXeL986ONiTJeNF_789leTrCQaCy2fswHvJY_ZOJGj95Bv5cosRhcGej50mzoADlaRhSgoVaYBcR2W9FITz1urVZ-A6kYS"
                    />
                  </div>

                  <h6 className="font-bold text-white text-base">
                    Dr. Daniel Williams
                  </h6>

                  <p className="text-safety-yellow text-xs mt-1">
                    Child Safety Researcher
                  </p>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section className="py-stack-lg px-margin-desktop bg-surface relative">
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/5 to-transparent h-1/2"></div>
          <div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-stack-lg text-center border border-outline-variant/20 shadow-xl relative z-10">
            <h2 className="font-display-lg text-headline-lg text-deep-navy mb-6">Ready to make a difference?</h2>
            <p className="text-body-lg text-on-surface-variant mb-stack-md max-w-2xl mx-auto">
              Support our mission to protect every child in the digital age. Your contribution fuels our global programs and advocacy efforts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-deep-navy text-white px-10 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Link to="/donate">
                  Donate Now
                </Link>
              </button>
              <button className="bg-safety-yellow text-deep-navy px-10 py-4 rounded-full font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Link to="/partner">

                  Partner With Us
                </Link>
              </button>
            </div>
          </div>
        </section>
      </main>


      <Footer />



    </>
  );
}
