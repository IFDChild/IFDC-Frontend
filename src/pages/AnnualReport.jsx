import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

export default function AnnualReport() {
    return (
        <>


            <Navbar />

            {/* <div className="bg-surface-container border-b border-outline-variant px-margin-desktop py-2 w-full max-w-container-max mx-auto flex justify-between items-center text-label-md font-label-md text-on-surface-variant">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">description</span> AR-2024-FINAL</span>
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">verified</span> Approved for Release</span>
                </div>
                <div>
                    <span className="">Generated: 2024-10-24 09:00:00 UTC</span>
                </div>
            </div> */}
            <main className="w-full max-w-container-max mx-auto px-margin-desktop wses space-y-24">

                <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center min-h-[614px]">
                    <div className="md:col-span-7 space-y-8 pr-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-fixed/20 border border-secondary-fixed text-secondary-fixed-dim font-label-md text-label-md rounded">
                            <span className="material-symbols-outlined text-[16px]">bar_chart</span>
                            <span className="">Annual Performance Report</span>
                        </div>
                        <h1 className="font-display-lg text-display-lg text-primary">
                            2024 Impact &amp;<br />Accountability
                        </h1>
                        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                            A comprehensive overview of our strategic initiatives, financial stewardship, and measurable progress in securing digital environments for vulnerable populations worldwide.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {/* <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded flex items-center gap-2 hover:bg-primary-container transition-colors shadow-[0_4px_12px_rgba(0,39,76,0.1)]">
                                <span className="material-symbols-outlined">download</span>
                                Download Full PDF
                            </button> */}
                            <a
                                href="/annualreports/Financial-Report.pdf"
                                download="Financial-Report.pdf"
                                className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded flex items-center gap-2 hover:bg-primary-container transition-colors shadow-[0_4px_12px_rgba(0,39,76,0.1)]"
                            >
                                <span className="material-symbols-outlined">download</span>
                                Download Full PDF
                            </a>

                        </div>
                    </div>
                    <div className="md:col-span-5 relative h-[500px] border border-outline-variant bg-surface-container-low rounded p-2 shadow-[0_8px_24px_rgba(0,39,76,0.05)]">

                        <div className="w-full h-full bg-surface relative overflow-hidden flex flex-col justify-end p-8 gap-4 border border-outline-variant/50">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00274c_1px,transparent_1px)] [background-size:20px_20px]"></div>
                            <div className="relative z-10 grid grid-cols-3 gap-4 h-48 items-end">
                                <div className="bg-primary/20 w-full h-[40%] rounded-t border-t border-primary/50 relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-label-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
                                </div>
                                <div className="bg-primary/40 w-full h-[65%] rounded-t border-t border-primary/60 relative group">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-label-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">Q2</div>
                                </div>
                                <div className="bg-secondary-fixed w-full h-[100%] rounded-t border-t border-secondary relative shadow-[0_-4px_12px_rgba(255,227,48,0.3)]">
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-label-md text-label-md text-on-surface font-bold">Target</div>
                                </div>
                            </div>
                            <div className="relative z-10 pt-4 border-t border-primary/20 font-label-md text-label-md text-on-surface-variant text-center">
                                Metric: Global Outreach Index (GOI)
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="border-outline-variant" />

                <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
                    <div className="md:col-span-4 sticky top-24">
                        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">A Message from our Executive Director</h2>
                        <div className="w-16 h-1 bg-secondary-fixed mb-6"></div>
                        <div className="flex items-center gap-4">
                            <img className="w-16 h-16 rounded-full object-cover border-2 border-surface-container" data-alt="A professional headshot of a middle-aged female executive with warm yet serious expression, wearing a navy blazer, standing in front of a subtly blurred, modern, well-lit office interior with glass walls. Corporate lighting, high resolution, sharp focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr5FyqXWy25ESE3eS6UDe-JkvOyvsgrnaiUQ6BeFIQGTDnCWjNWli1FshazIMOzGtvdHnG8re3ilKfsvTOs6IgA0L-gcrN2XFsVJPNS7KYLruO3QZMv61tII2sXK0B0SZzpu1gZIWhjTX7yLFUiCZ4YWBStZFrZl73mIve0xZuCrPhiRZ4MrMYiyIbDtGKsjI8tKTRI5yP41gj5K-JM94WJ9Jpc7EuRwhe6FYO_0h2JBE7VNAxlTqS" />
                            <div>
                                <div className="font-label-md text-label-md text-primary font-bold">Dr. Elena Rostova</div>
                                <div className="font-label-md text-label-md text-on-surface-variant text-[12px]">Executive Director, DCSF</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant p-8 md:p-12 shadow-[0_4px_12px_rgba(0,39,76,0.02)]">
                        <div className="space-y-6 font-body-lg text-body-lg text-on-surface">
                            <p className="first-letter:font-headline-lg first-letter:text-[64px] first-letter:text-primary first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                                This past year has tested the resilience of our digital infrastructure and the efficacy of our safety protocols. As internet penetration accelerates in developing regions, the vector for digital exploitation expands in tandem. Our 2024 strategy was built on a singular premise: anticipation over reaction.
                            </p>
                            <p className="">
                                We successfully deployed the Sentinel Framework across 14 new jurisdictions, training over 50,000 educators and law enforcement personnel. However, the proliferation of AI-generated synthetic media presents a novel and severe threat vector. Our focus moving forward must shift towards algorithmic accountability and robust legislative advocacy.
                            </p>
                            <p className="">
                                Financial stewardship remains our bedrock. This report details not just our impact, but our uncompromising commitment to transparency. Every dollar allocated is tracked, verified, and measured against rigorous key performance indicators. We invite you to scrutinize our methodology and stand with us in the work ahead.
                            </p>
                            <div className="pt-8 text-primary">
                                <img className="h-12 w-auto mix-blend-multiply opacity-80" data-alt="A stylized, clean vector signature graphic in deep navy ink, representing a formal sign-off for a corporate document. Smooth lines, authoritative aesthetic, transparent background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJzeII8b6x8El5a_FRDBrijvzOflOn5N9aMQ-tkQxXLzWW96Gml86j3mZVyBz8QAzeOZVMd50AEO_QgRXsxzxwxFpHWYB4UYRYui5CL1pOw2jv1liJvNYFmd8GNEUVEdPVQ0BRtdfvtGPxSSIHtt-1BaXcdxuQ1OLBjsNvG00HZLliTJD8xGf4dQwFXs17lcHq3HdYhKkr3AefIDIgoxvMwt_PxTAuuW5egXCwVzwNb3QO2Sx8LrKD" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section>
                    <div className="mb-12 flex justify-between items-end">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Impact by the Numbers</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Key operational metrics verified for Fiscal Year 2024.</p>
                        </div>
                        <div className="hidden md:block">
                            <span className="font-label-md text-label-md text-primary flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">update</span> Data accurate as of Dec 31, 2024
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

                        <div className="md:col-span-8 bg-primary text-on-primary border border-primary-container p-8 rounded flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
                            <div className="relative z-10 mb-12">
                                <span className="material-symbols-outlined text-[32px] text-secondary-fixed mb-4">group</span>
                                <h3 className="font-label-md text-label-md tracking-wider text-inverse-primary uppercase">Global Reach</h3>
                            </div>
                            <div className="relative z-10">
                                <div className="font-data-num text-[72px] leading-none mb-2">2.4<span className="text-secondary-fixed">M</span></div>
                                <p className="font-body-lg text-body-lg opacity-90 max-w-md">Children directly impacted through school-based digital literacy integrations.</p>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-surface-container border border-outline-variant p-8 rounded flex flex-col justify-between">
                            <div className="mb-12">
                                <span className="material-symbols-outlined text-[24px] text-primary mb-4">school</span>
                                <h3 className="font-label-md text-label-md text-on-surface-variant uppercase">Educators Certified</h3>
                            </div>
                            <div>
                                <div className="font-data-num text-[48px] text-primary leading-none mb-2">52,140</div>
                                <p className="font-body-md text-body-md text-on-surface-variant">+18% Year-over-Year</p>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded flex items-center gap-6">
                            <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">gavel</span>
                            </div>
                            <div>
                                <div className="font-data-num text-[28px] text-primary leading-none">14</div>
                                <div className="font-label-md text-label-md text-on-surface-variant">Policy Drafts Passed</div>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded flex items-center gap-6">
                            <div className="w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined">shield_locked</span>
                            </div>
                            <div>
                                <div className="font-data-num text-[28px] text-primary leading-none">99.8%</div>
                                <div className="font-label-md text-label-md text-on-surface-variant">Platform Uptime</div>
                            </div>
                        </div>

                        <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant p-6 rounded flex items-center gap-6">
                            <div className="w-12 h-12 bg-secondary-fixed/20 rounded-full flex items-center justify-center text-secondary-fixed-dim shrink-0">
                                <span className="material-symbols-outlined">public</span>
                            </div>
                            <div>
                                <div className="font-data-num text-[28px] text-primary leading-none">42</div>
                                <div className="font-label-md text-label-md text-on-surface-variant">Operating Countries</div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* 
                <section className="bg-surface-container-lowest border border-outline-variant rounded p-8 md:p-12">
                    <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-outline-variant pb-6">
                        <div>
                            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Financial Transparency</h2>
                            <p className="font-body-md text-body-md text-on-surface-variant">Audited statement of activities for the year ended December 31, 2024.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 border border-outline-variant rounded font-label-md text-label-md text-on-surface-variant hover:bg-surface-container transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">table_chart</span> CSV
                            </button>
                            <button className="px-4 py-2 border border-primary text-primary rounded font-label-md text-label-md hover:bg-primary-container hover:text-on-primary-container transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[18px]">article</span> Audit Report
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        <div className="lg:col-span-4 space-y-8">
                            <div>
                                <h4 className="font-label-md text-label-md text-on-surface-variant mb-6 uppercase">Allocation of Funds</h4>
                                <div className="relative w-full aspect-square max-w-[280px] mx-auto">

                                    <div className="absolute inset-0 rounded-full border-[32px] border-surface-container-highest" style={{ "clipPath": "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 0, 50% 0)" }}></div>
                                    <div className="absolute inset-0 rounded-full border-[32px] border-primary" style={{ "clipPath": "polygon(50% 50%, 50% 0, 100% 0, 100% 60%, 50% 50%)" }}></div>
                                    <div className="absolute inset-0 rounded-full border-[32px] border-secondary-fixed" style={{ "clipPath": "polygon(50% 50%, 100% 60%, 100% 100%, 80% 100%, 50% 50%)" }}></div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="font-data-num text-[32px] text-primary leading-none">82%</span>
                                        <span className="font-label-md text-label-md text-on-surface-variant text-[10px]">PROGRAMS</span>
                                    </div>
                                </div>
                            </div>
                            <ul className="space-y-3 font-label-md text-label-md">
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-primary rounded-sm"></div> Program Services</span>
                                    <span className="font-data-num">82%</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-surface-container-highest rounded-sm"></div> Admin &amp; General</span>
                                    <span className="font-data-num">11%</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span className="flex items-center gap-2"><div className="w-3 h-3 bg-secondary-fixed rounded-sm"></div> Fundraising</span>
                                    <span className="font-data-num">7%</span>
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-8 overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-primary text-on-primary font-label-md text-label-md">
                                        <th className="p-3 font-medium rounded-tl border-b-2 border-primary-container">Category</th>
                                        <th className="p-3 font-medium border-b-2 border-primary-container text-right">2024 Actual (USD)</th>
                                        <th className="p-3 font-medium rounded-tr border-b-2 border-primary-container text-right">2023 Actual (USD)</th>
                                    </tr>
                                </thead>
                                <tbody className="font-body-md text-body-md">

                                    <tr className="bg-surface-container-low border-b border-outline-variant">
                                        <td className="p-2 font-label-md text-label-md text-primary font-bold" colspan="3">REVENUE</td>
                                    </tr>
                                    <tr className="border-b border-surface-container-highest hover:bg-surface-bright transition-colors">
                                        <td className="p-3 text-on-surface">Institutional Grants</td>
                                        <td className="p-3 text-right font-data-num text-on-surface">12,450,000</td>
                                        <td className="p-3 text-right font-data-num text-on-surface-variant">10,200,000</td>
                                    </tr>
                                    <tr className="border-b border-surface-container-highest bg-surface-container-lowest hover:bg-surface-bright transition-colors">
                                        <td className="p-3 text-on-surface">Individual Contributions</td>
                                        <td className="p-3 text-right font-data-num text-on-surface">3,210,500</td>
                                        <td className="p-3 text-right font-data-num text-on-surface-variant">2,850,000</td>
                                    </tr>
                                    <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                                        <td className="p-3 text-on-surface">Corporate Sponsorships</td>
                                        <td className="p-3 text-right font-data-num text-on-surface">1,850,000</td>
                                        <td className="p-3 text-right font-data-num text-on-surface-variant">1,500,000</td>
                                    </tr>
                                    <tr className="bg-primary-container/10 border-b-2 border-primary">
                                        <td className="p-3 font-label-md text-label-md text-primary font-bold">Total Revenue</td>
                                        <td className="p-3 text-right font-data-num text-primary font-bold">17,510,500</td>
                                        <td className="p-3 text-right font-data-num text-primary font-bold">14,550,000</td>
                                    </tr>

                                    <tr className="bg-surface-container-low border-b border-outline-variant">
                                        <td className="p-2 font-label-md text-label-md text-primary font-bold mt-4" colspan="3">EXPENSES</td>
                                    </tr>
                                    <tr className="border-b border-surface-container-highest hover:bg-surface-bright transition-colors">
                                        <td className="p-3 text-on-surface">Program Services</td>
                                        <td className="p-3 text-right font-data-num text-on-surface">13,940,000</td>
                                        <td className="p-3 text-right font-data-num text-on-surface-variant">11,800,000</td>
                                    </tr>
                                    <tr className="border-b border-surface-container-highest bg-surface-container-lowest hover:bg-surface-bright transition-colors">
                                        <td className="p-3 text-on-surface">Management &amp; General</td>
                                        <td className="p-3 text-right font-data-num text-on-surface">1,870,000</td>
                                        <td className="p-3 text-right font-data-num text-on-surface-variant">1,650,000</td>
                                    </tr>
                                    <tr className="border-b border-outline-variant hover:bg-surface-bright transition-colors">
                                        <td className="p-3 text-on-surface">Fundraising</td>
                                        <td className="p-3 text-right font-data-num text-on-surface">1,190,000</td>
                                        <td className="p-3 text-right font-data-num text-on-surface-variant">950,000</td>
                                    </tr>
                                    <tr className="bg-primary-container/10">
                                        <td className="p-3 font-label-md text-label-md text-primary font-bold">Total Expenses</td>
                                        <td className="p-3 text-right font-data-num text-primary font-bold">17,000,000</td>
                                        <td className="p-3 text-right font-data-num text-primary font-bold">14,400,000</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="mt-4 text-right font-label-md text-label-md text-on-surface-variant text-[12px]">
                                *All figures in USD. Audited by PricewaterhouseCoopers LLP.
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
            <Footer />

        </>
    );
}
