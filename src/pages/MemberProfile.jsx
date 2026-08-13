import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function MemberProfile() {
  return (
    <>


<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto bg-surface/80 backdrop-blur-md dark:bg-surface-container/80 border-b border-white/20 dark:border-outline-variant shadow-sm dark:shadow-none">
<div className="flex items-center gap-2">
<div className="h-10 w-auto">
<img alt="IFDC Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Op9zfREzJ3l1KT1qzDbBRDieCKSVsqLK7XmNgTsDs4GKZFMH5uKe-bn4eRw0tgbIuTjekfzjL3i5vf84Lqia3SISudMksq_vvmkPfxHLLjHnUZvltQHD3t6FTI5yhApljSVIb2T5-37QPPHnfpDfnLDZHJycRQghvJ2Y6uZGrinTkmFAU5X3WAAsjRud2ytpQ6OhYGATJ8VrOZ-iM35iaP7i9JxcoSlIehq-YNfARhRZVSzZo1JFRMZFOv5pCPuCBg"/>
</div>
</div>

<div className="hidden md:flex items-center gap-8">
<Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim hover:opacity-90 transition-opacity active:scale-95 duration-200" to="/">Home</Link>
<Link className="font-body-md text-body-md text-primary dark:text-primary-fixed-dim font-bold border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:opacity-90 transition-opacity active:scale-95 duration-200" to="/about">About</Link>
<Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim hover:opacity-90 transition-opacity active:scale-95 duration-200" to="/news">Blogs &amp; News</Link>
<Link className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-fixed-dim hover:text-primary dark:hover:text-primary-fixed-dim hover:opacity-90 transition-opacity active:scale-95 duration-200" to="/resources">Resources</Link>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-md hover:bg-primary-container transition-all active:scale-95 flex items-center gap-2">
Join Us
<span className="material-symbols-outlined text-sm">expand_more</span>
</button>
</div>

<button className="md:hidden text-primary">
<span className="material-symbols-outlined">menu</span>
</button>
</nav>
<main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-stack-lg space-y-stack-lg pt-24">

<section className="flex flex-col md:flex-row gap-stack-md items-start">
<div className="w-full md:w-1/3 flex-shrink-0">
<div className="relative w-full aspect-square rounded-[1.5rem] overflow-hidden border-4 border-white shadow-lg shadow-deep-navy/5">
<img className="object-cover w-full h-full" data-alt="A professional headshot portrait of a confident woman, Dr. Elena Rossi, with a warm but serious expression. She is in a modern office setting with soft, natural lighting. The color palette is composed of crisp whites and subtle blues, reflecting a modern, tech-forward and trustworthy aesthetic. High quality, photorealistic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCChv1lV6yQ7KopxyZltIKEeaGZu17yjJYeE6qa6w6c2N3PL_MIiR8aTs44URc-wJ8yx9DB6Z81GF5MrBFdnA15vnwarBSnpj7yYvJiItnmGB7WGHoqiXNY7t-H2ZPprB5TQjE9x4unjKBM7gy7Yy1fkQtLKr0ffXCgI1F-V1-VmG7nz9WJNrJVsiYW1rF9NCyN8UxmoWB3a58EEBgPtRQmUInQG7k6RNvjg3cgcT6Jm5X-CtOIGGv8"/>
</div>
</div>
<div className="w-full md:w-2/3 space-y-stack-sm flex flex-col justify-center py-4">
<div>
<h1 className="font-display-lg text-display-lg text-deep-navy">Dr. Elena Rossi</h1>
<p className="font-headline-md text-headline-md text-on-surface-variant mt-2">Executive Director &amp; Lead Advocate</p>
</div>
<div className="flex gap-4">
<Link aria-label="LinkedIn" className="p-2 rounded-full bg-surface-container-low text-deep-navy hover:bg-sky-tint transition-colors" to="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>work</span>
</Link>
<Link aria-label="Twitter" className="p-2 rounded-full bg-surface-container-low text-deep-navy hover:bg-sky-tint transition-colors" to="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>forum</span>
</Link>
<Link aria-label="Email" className="p-2 rounded-full bg-surface-container-low text-deep-navy hover:bg-sky-tint transition-colors" to="#">
<span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 1"}}>mail</span>
</Link>
</div>
<div className="pt-4 flex gap-4">
<button className="bg-deep-navy text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-deep-navy/90 transition-colors shadow-md shadow-deep-navy/20">
                        Connect with Elena
                    </button>
<button className="bg-transparent border-2 border-deep-navy text-deep-navy font-label-md text-label-md px-6 py-3 rounded-full hover:bg-sky-tint/20 transition-colors">
                        Inquire for Speaking
                    </button>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-stack-md">

<div className="md:col-span-2 bg-white/70 backdrop-blur-[12px] rounded-[1.5rem] border border-white p-stack-md shadow-[0_4px_24px_rgba(11,61,110,0.05)]">
<h2 className="font-headline-lg text-headline-lg text-deep-navy mb-stack-sm flex items-center gap-2">
<span className="material-symbols-outlined text-safety-yellow" style={{"fontVariationSettings":"'FILL' 1"}}>person</span>
                    Biography
                </h2>
<div className="font-body-md text-body-md text-on-surface-variant space-y-4">
<p className="">
                        With over 15 years of experience at the intersection of developmental psychology and digital policy, Dr. Elena Rossi has dedicated her career to ensuring the digital world is a safe and enriching environment for children.
                    </p>
<p className="">
                        Before joining the Digital Child Safety Foundation as Executive Director, Dr. Rossi served as a lead researcher for international cyber-safety coalitions, advising tech giants on implementing robust, privacy-first age assurance mechanisms.
                    </p>
<p className="">
                        Her approach is grounded in the belief that protection should not come at the cost of digital participation. She champions "Safety by Design," advocating for intuitive UI patterns and systemic policy changes that protect young users inherently, rather than relying solely on parental intervention.
                    </p>
</div>
</div>

<div className="md:col-span-1 bg-surface-container-low rounded-[1.5rem] p-stack-md border border-sky-tint/50">
<h2 className="font-headline-md text-headline-md text-deep-navy mb-stack-sm">Key Expertise</h2>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 bg-sky-tint text-deep-navy font-label-md text-label-md px-3 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-sm">gavel</span> Policy Advocacy
                    </span>
<span className="inline-flex items-center gap-1 bg-sky-tint text-deep-navy font-label-md text-label-md px-3 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-sm">school</span> Digital Literacy
                    </span>
<span className="inline-flex items-center gap-1 bg-sky-tint text-deep-navy font-label-md text-label-md px-3 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-sm">psychology</span> Cyber-Psychology
                    </span>
<span className="inline-flex items-center gap-1 bg-sky-tint text-deep-navy font-label-md text-label-md px-3 py-1.5 rounded-lg">
<span className="material-symbols-outlined text-sm">shield</span> Privacy by Design
                    </span>
</div>
</div>
</section>

<section className="space-y-stack-md">
<h2 className="font-headline-lg text-headline-lg text-deep-navy flex items-center gap-2">
<span className="material-symbols-outlined text-safety-yellow" style={{"fontVariationSettings":"'FILL' 1"}}>article</span>
                Recent Contributions
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-stack-md">

<article className="bg-white/80 backdrop-blur-md rounded-[1.5rem] border border-white shadow-[0_4px_24px_rgba(11,61,110,0.05)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="h-40 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A modern, abstract digital illustration representing data privacy and children. Soft glowing nodes connected by lines over a clean white and deep navy background. The style is tech-forward but approachable, using soft edges and bright accents of safety yellow. High quality, vector-style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX_wjuu6pD5OJQ7QD3sd7V6pO1CQKl3yiBCPmivEQUFnybkZwtASXM6qb8D4bC7_rHlOViXSCYBd0KExv-UrG-frQylFoJV9hw68IqyzSRiUQgattlbtU8OGyhXSX_BED2_6H72JgxHYnUGFf0QEPF5Kwm5NALtGICCPoWqkrCBaqF4HbNXQx6GcWCE_57CV6FZplOp6EhmYNnDakEfZ5sZrCByj98BtX-LYy7NXyJn4qrq-SnRh_y"/>
</div>
<div className="p-stack-sm space-y-3">
<span className="inline-block bg-safety-yellow/20 text-deep-navy font-caption text-caption px-2 py-1 rounded">White Paper</span>
<h3 className="font-headline-md text-headline-md text-deep-navy leading-tight">Implementing Age-Appropriate Design Codes</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
                            A comprehensive guide for developers on adhering to global standards for child data privacy and interface design.
                        </p>
<Link className="inline-flex items-center gap-1 text-deep-navy font-label-md text-label-md hover:underline decoration-safety-yellow decoration-2 underline-offset-4 pt-2" to="/annual-report">
                            Read Full Report <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</article>

<article className="bg-white/80 backdrop-blur-md rounded-[1.5rem] border border-white shadow-[0_4px_24px_rgba(11,61,110,0.05)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="h-40 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A photograph of a diverse group of teenagers looking thoughtfully at a tablet screen in a bright, modern classroom setting. The lighting is optimistic and clear. The color grading emphasizes clean whites, gentle blues, and warm skin tones, conveying an atmosphere of safe digital learning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuACBgFk0Yd5T-Mwew_2rhyftTd80D_MLPRpc2qQINKdCTUWLCjxXt3OSqzoMmIrs6Cx_hUB9_hKe_80ezrYF-CAe0F-bg1nEyJOudiUrNOHQELv5E5q-YE7OSuRDQSj6T-teuVhyOqznPDXdfHgPl3H_nhNt-RqkEJ3kcYvuYSNfwlqq5mJDRVwrrtzZdZNgaEaMGROATuoXkCf03PHMb4xeL6uI5aLDYxjh4WNYwqehHGHYjINibuu"/>
</div>
<div className="p-stack-sm space-y-3">
<span className="inline-block bg-sky-tint text-deep-navy font-caption text-caption px-2 py-1 rounded">Blog Post</span>
<h3 className="font-headline-md text-headline-md text-deep-navy leading-tight">The Myth of the 'Digital Native'</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
                            Why growing up with technology doesn't equate to understanding digital safety, and how we must bridge the gap.
                        </p>
<Link className="inline-flex items-center gap-1 text-deep-navy font-label-md text-label-md hover:underline decoration-safety-yellow decoration-2 underline-offset-4 pt-2" to="#">
                            Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</article>

<article className="bg-white/80 backdrop-blur-md rounded-[1.5rem] border border-white shadow-[0_4px_24px_rgba(11,61,110,0.05)] overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="h-40 w-full bg-deep-navy flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{"backgroundImage":"radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)","backgroundSize":"20px 20px"}}></div>
<span className="material-symbols-outlined text-6xl text-safety-yellow relative z-10" style={{"fontVariationSettings":"'FILL' 1"}}>play_circle</span>
</div>
<div className="p-stack-sm space-y-3">
<span className="inline-block bg-surface-variant text-deep-navy font-caption text-caption px-2 py-1 rounded">Keynote Speech</span>
<h3 className="font-headline-md text-headline-md text-deep-navy leading-tight">Tech Summit 2024: Designing for Vulnerability</h3>
<p className="font-body-md text-body-md text-on-surface-variant line-clamp-2 text-sm">
                            Dr. Rossi's opening keynote address on the ethical responsibilities of platforms serving young audiences.
                        </p>
<Link className="inline-flex items-center gap-1 text-deep-navy font-label-md text-label-md hover:underline decoration-safety-yellow decoration-2 underline-offset-4 pt-2" to="#">
                            Watch Video <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</article>
</div>
</section>
</main>

<footer className="bg-surface-container-high border-t border-outline-variant pt-20 pb-10">
<div className="max-w-7xl mx-auto px-margin-desktop">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<img alt="IDFC Logo" className="h-12 w-auto object-contain brightness-0 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGbHU2Lrf041JntGcRYpZYFkco4D7zK5Y5fHv5uf-0wWDqbcYnsL9Vu7R6TKDtuNmqdnzQCSCKahmB7L2aSpc0D-RXhRpvRfBZiPMbiVO4Vtgq9xCb-IDDRhCxmCAzNHR1GsVdbTIqNcflToy3FdEf19EG75m0LOyCMHmeCWeDoCfP7S_FddGK-dZoL76l9z3URQ9JSuT7htk7421K-6a57bTa0oivgTI72MS3krehk2SWrNssoqYUyOVAxbJpsuBcJg"/>
<p className="text-on-surface-variant font-body-md">Protecting and empowering children in the digital landscape through education, advocacy, and innovation.</p>
<div className="flex gap-4">
<Link className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-white transition-all" to="#">
<span className="material-symbols-outlined text-[20px]">language</span>
</Link>
<Link className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-white transition-all" to="#">
<span className="material-symbols-outlined text-[20px]">public</span>
</Link>
<Link className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-white transition-all" to="#">
<span className="material-symbols-outlined text-[20px]">chat</span>
</Link>
</div>
</div>

<div><h4 className="font-label-md text-primary uppercase tracking-widest mb-6">Organization</h4><ul className="space-y-4"><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/annual-report">Annual Report</Link></li><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/strategic-plan">Strategic Plan</Link></li><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/policies">Policies</Link></li><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/impact">Our Impact Stories</Link></li></ul></div>

<div><h4 className="font-label-md text-primary uppercase tracking-widest mb-6">Resources</h4><ul className="space-y-4"><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="#">Parents</Link></li><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="#">Teachers</Link></li><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="#">Children</Link></li><li className=""><Link className="text-on-surface-variant hover:text-primary transition-colors" to="#">Policy Makers</Link></li></ul></div>

<div>
<h4 className="font-label-md text-primary uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">mail</span>
<span className="text-on-surface-variant">info@idfc.org</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">call</span>
<span className="text-on-surface-variant">+1 (555) 000-SAFE</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary">location_on</span>
<span className="text-on-surface-variant">123 Safety Ave, Digital District, CA 94105</span>
</li>
</ul>
</div>
</div>
<div className="pt-10 border-t border-outline-variant flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-caption text-on-surface-variant">© 2024 Digital Child Safety Foundation. All rights reserved.</p>
<div className="flex gap-8">
<Link className="text-caption text-on-surface-variant hover:underline" to="#">Privacy Policy</Link>
<Link className="text-caption text-on-surface-variant hover:underline" to="#">Terms of Service</Link>
</div>
</div>
</div>
</footer>

    </>
  );
}
