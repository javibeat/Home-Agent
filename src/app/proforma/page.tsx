import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Web Proposal — A. Reid | Luxury Real Estate",
    description: "Bespoke web development proposal for Dubai real estate professionals.",
};

export default function ProformaPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-gold-500 selection:text-background pb-32">

            {/* Top Banner (Header) */}
            <div className="w-full bg-surface py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between md:items-center gap-4 border-b border-border">
                <div>
                    <h1 className="text-2xl font-serif">A. Reid</h1>
                    <h2 className="text-xl font-serif text-foreground/80 mt-1">Luxury Real Estate Portfolio</h2>
                    <p className="text-foreground/60 mt-4 max-w-xl font-light">
                        Design and development of a professional web platform with high-end property catalog capabilities for independent real estate agents.
                    </p>
                    <p className="text-foreground/50 text-sm mt-4">
                        March 2026 · Custom Proposal
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <Link href="/" className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-gold-500 text-background hover:bg-gold-400 px-6 py-3 transition-colors">
                        View Public Home
                    </Link>
                    <Link href="/admin" className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-surface border border-border text-foreground hover:border-gold-500/50 px-6 py-3 transition-colors">
                        Explore Agent Portal
                    </Link>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 mt-12">
                <div className="bg-gold-500/5 border border-gold-500/20 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-lg font-serif mb-1">Interactive Prototypes</h3>
                        <p className="text-sm text-foreground/60 font-light">Explore the live implementation of the proposed architecture.</p>
                    </div>
                    <div className="flex gap-4">
                        <Link href="/" className="text-xs uppercase tracking-widest font-bold text-gold-500 hover:text-gold-400 underline underline-offset-8">Public Website</Link>
                        <Link href="/admin" className="text-xs uppercase tracking-widest font-bold text-gold-500 hover:text-gold-400 underline underline-offset-8">Agent Dashboard</Link>
                    </div>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-6 mt-16 space-y-32">

                {/* 01 — Landing Page */}
                <section>
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">01 — Landing Page</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">First Impression</h2>
                        <p className="text-foreground/80 font-light leading-relaxed max-w-2xl">
                            A full-screen luxury hero section combining hyper-realistic 3D rendering or premium photography with a commanding message. Elegant "glassmorphism" navigation elements frame a direct call-to-action for immediate WhatsApp access.
                        </p>
                    </div>
                    <div className="relative aspect-video w-full border border-border">
                        <Image
                            src="/images/dubai_hero_bg_1773034735520.png"
                            alt="First Impression"
                            fill
                            className="object-cover"
                        />
                    </div>
                </section>

                {/* 02 — Metodología / The Agent */}
                <section>
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">02 — Personal Brand</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">The Agent Persona</h2>
                        <p className="text-foreground/80 font-light leading-relaxed max-w-2xl">
                            A dedicated section architected to build immediate trust. We highlight your localized Dubai expertise, multi-million dirham sales volume, and career trajectory. Crucially, it incorporates a testimonial framework designed specifically around international High-Net-Worth Individuals.
                        </p>
                    </div>
                </section>

                {/* 03 — Servicios y Precios / Properties */}
                <section>
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">03 — Property Catalog</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">Exclusive Inventory</h2>
                        <p className="text-foreground/80 font-light leading-relaxed max-w-2xl">
                            A visually commanding listing system. Properties are presented in refined, magazine-style cards detailing critical data points (Price, Location, Beds, SqFt). The engine allows buyers to filter dynamically between Off-Plan launches, Secondary Market, or Exclusive Listings.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-12">
                        <div className="relative aspect-[4/3] border border-border">
                            <Image src="/images/dubai_property_1_1773034763770.png" alt="Property 1" fill className="object-cover" />
                        </div>
                        <div className="relative aspect-[4/3] border border-border">
                            <Image src="/images/dubai_property_2_1773034777003.png" alt="Property 2" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* 04 — Agent Portal / CRM */}
                <section>
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">04 — Agent Portal (CRM)</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">Your Command Center</h2>
                        <p className="text-foreground/80 font-light leading-relaxed max-w-2xl">
                            A private, high-performance back-office designed for the modern agent. Monitor your portfolio value in real-time, track leads as they come in, and manage your entire inventory through an intuitive, data-driven dashboard. No more messy spreadsheets—just pure business intelligence.
                        </p>
                    </div>
                    <div className="bg-surface border border-border p-8 rounded-lg overflow-hidden relative group">
                        <div className="flex justify-between items-center mb-6">
                            <div className="h-2 w-24 bg-gold-500/20 rounded-full"></div>
                            <div className="h-2 w-12 bg-gold-500/20 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="aspect-video bg-background border border-border/50 rounded flex items-center justify-center">
                                    <div className="h-1 w-8 bg-gold-500/20 rounded-full"></div>
                                </div>
                            ))}
                        </div>
                        <div className="h-32 bg-background border border-border/50 rounded flex items-end p-4">
                            <div className="w-full h-full flex items-end gap-1">
                                {[40, 70, 50, 90, 60, 80, 100].map((h, i) => (
                                    <div key={i} className="flex-1 bg-gold-500/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                                ))}
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                    </div>
                    <p className="text-xs text-foreground/40 mt-4 italic font-light">
                        * Dashboard includes: Real-time traffic analytics, property performance metrics, and automated lead sorting.
                        <Link href="/admin" className="ml-2 text-gold-500 hover:underline">Explore Portal Demo →</Link>
                    </p>
                </section>

                {/* 05 — Lead Generation / Contact */}
                <section>
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">05 — Lead Generation</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-6">Instant Conversion</h2>
                        <p className="text-foreground/80 font-light leading-relaxed max-w-2xl">
                            A high-conversion inquiry interface seamlessly integrated into the site fabric. Beyond standard email capture, it features direct, one-click WhatsApp routing—the undisputed primary communication channel for real estate in the UAE.
                        </p>
                    </div>
                </section>

                {/* 06 — Características incluidas */}
                <section>
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">06 — Technical Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-12">Built to Perform</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                        <div>
                            <h4 className="text-xl font-serif mb-2 text-gold-500">Fluid Responsiveness</h4>
                            <p className="text-foreground/70 font-light text-sm">Engineered precision for mobile, tablet, and desktop views. Your portfolio retains its luxury appeal across every device your clients use.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif mb-2 text-gold-500">Blazing Speed</h4>
                            <p className="text-foreground/70 font-light text-sm">Developed natively with React and Next.js App Router. Instantaneous load times—eliminating the severe performance bottlenecks common in legacy platforms like WordPress.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif mb-2 text-gold-500">AI-Ready SEO</h4>
                            <p className="text-foreground/70 font-light text-sm">Advanced semantic structuring, strict meta-tagging, and JSON-LD Schema Markup. Optimized not just for Google ranking, but to be explicitly understood and recommended by AI engines like ChatGPT and Perplexity.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif mb-2 text-gold-500">I18n Architecture</h4>
                            <p className="text-foreground/70 font-light text-sm">Built with English as the primary business default, with the underlying architecture prepared for seamless multi-language integration (Russian, Arabic, Chinese) for specific investor demographics.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif mb-2 text-gold-500">VIP Interactions</h4>
                            <p className="text-foreground/70 font-light text-sm">Delicate motion design, smooth page transitions, and subtle hover micro-interactions that elevate the digital experience to match a high-end physical viewing.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-serif mb-2 text-gold-500">Global Edge Deployment</h4>
                            <p className="text-foreground/70 font-light text-sm">Hosted on modern Edge infrastructure (e.g., Vercel) ensuring secure, globally distributed payload delivery and infinite scaling capabilities as your inventory expands.</p>
                        </div>
                    </div>
                </section>

                {/* 07 — Presupuesto */}
                <section className="pb-32">
                    <div className="mb-8">
                        <span className="text-foreground/60 text-sm tracking-widest uppercase">07 — Pricing Breakdown</span>
                        <h2 className="text-4xl md:text-5xl font-serif mt-2 mb-8">The Investment</h2>
                        <p className="text-foreground/80 font-light leading-relaxed max-w-2xl mb-8">
                            A comprehensive breakdown of the project scope. This quotation covers the end-to-end development of the bespoke real estate platform outlined in this proposal.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="md:col-span-2 bg-surface border border-border p-8">
                                <p className="text-sm font-medium uppercase tracking-widest text-gold-500 mb-6">Phase 1: Bespoke Development</p>
                                <div className="flex items-baseline gap-2 mb-8">
                                    <span className="text-5xl font-serif">AED 18,000</span>
                                    <span className="text-foreground/40 text-sm">One-time Investment</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm font-medium uppercase tracking-widest text-foreground/50">Included Scope:</p>
                                    <ul className="text-sm text-foreground/70 font-light space-y-2 list-disc pl-4">
                                        <li>Luxury UX/UI Design & Frontend Development</li>
                                        <li>Full Property Catalog with Unlimited Listings</li>
                                        <li>Agent Portal (CRM) & Portfolio Dashboard</li>
                                        <li>Advanced SEO & AI-Ready Metadata</li>
                                        <li>Vercel Edge Deployment Setup</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="bg-gold-500/10 border border-gold-500/30 p-8 shadow-sm">
                                <p className="text-sm font-medium uppercase tracking-widest text-gold-500 mb-6 font-bold">Exclusive Bonus</p>
                                <div className="flex flex-col gap-2 mb-8">
                                    <span className="text-3xl font-serif">1 Year Free</span>
                                    <span className="text-foreground/40 text-xs font-medium uppercase tracking-widest">Concierge Support</span>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-xs font-medium uppercase tracking-widest text-foreground/50">Maintenance Benefits:</p>
                                    <ul className="text-xs text-foreground/70 font-light space-y-2">
                                        <li>• Priority Content Updates</li>
                                        <li>• 24/7 Uptime Monitoring</li>
                                        <li>• Quarterly Performance Audits</li>
                                        <li>• Technical SEO Maintenance</li>
                                    </ul>
                                </div>
                                <p className="mt-8 text-[10px] text-gold-500/60 uppercase tracking-tighter">* Valued at AED 14,400/year</p>
                            </div>
                        </div>

                        <div className="bg-surface border border-border p-8 mb-8">
                            <div className="flex flex-col sm:flex-row gap-8">
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-widest text-foreground/50 mb-2">Delivery Timeline</p>
                                    <p className="text-sm text-foreground/70 font-light">2–3 Business Weeks (commencing upon receipt of all required assets).</p>
                                </div>
                                <div>
                                    <p className="text-sm font-medium uppercase tracking-widest text-foreground/50 mb-2">Payment Terms</p>
                                    <p className="text-sm text-foreground/70 font-light">50% upfront retainer, 50% remainder upon final live deployment.</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-foreground/40 leading-relaxed italic">
                            * This quotation corresponds exclusively to the structure detailed in this proposal as a "Single Agent Portfolio". Should the scope evolve into a Multi-Agency Platform (complex multi-agent CRM, multi-tenant databases), it will require an independent technological phase and re-evaluation.
                        </p>

                        <div className="mt-16 text-center md:text-left">
                            <a
                                href="mailto:info@truelovecreative.es"
                                className="inline-block bg-gold-500 hover:bg-gold-400 text-background px-10 py-5 font-medium tracking-wide transition-colors"
                            >
                                Approve Proposal
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}
