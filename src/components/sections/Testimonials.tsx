"use client";

import { Quote } from "lucide-react";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            quote: "Alexander found us an incredible off-plan investment in Downtown Dubai before it even hit the public market. His network and discretion are unmatched. A true professional who understands the ultra-luxury segment.",
            author: "James D.",
            role: "Private Investor, UK",
        },
        {
            id: 2,
            quote: "Relocating our family to Dubai was daunting, but Alexander made the process seamless. He didn't just sell us a villa in Emirates Hills; he curated a lifestyle that perfectly fit our needs. Exceptional service from start to finish.",
            author: "Elena & Marcus T.",
            role: "Business Owners, Switzerland",
        },
        {
            id: 3,
            quote: "I've worked with many brokers over the years, but A. Reid stands in a league of his own. His market insights, negotiation skills, and ability to close complex multi-million dirham transactions quietly is exactly what high-net-worth clients require.",
            author: "Omar S.",
            role: "CEO, UAE",
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-surface border-t border-border">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 justify-center">
                        <div className="w-8 h-[1px] bg-gold-500"></div>
                        <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">Client Voices</span>
                        <div className="w-8 h-[1px] bg-gold-500"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif">
                        Trusted by the <br />
                        <span className="italic text-gold-500">Exceptional</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((test) => (
                        <div
                            key={test.id}
                            className="bg-background p-10 border border-border relative hover:border-gold-500/30 transition-colors group"
                        >
                            <Quote size={40} className="text-gold-500/20 absolute top-8 left-8" />

                            <div className="relative z-10 pt-8 flex flex-col h-full">
                                <p className="text-foreground/80 leading-relaxed font-light mb-8 italic flex-grow">
                                    "{test.quote}"
                                </p>

                                <div>
                                    <p className="font-serif text-lg text-gold-500 mb-1">{test.author}</p>
                                    <p className="text-sm text-foreground/50 tracking-wide uppercase">{test.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
