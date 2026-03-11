import Image from "next/image";
import { Award, Building, Globe, Users } from "lucide-react";

export default function About() {
    const stats = [
        { icon: <Award size={24} />, value: "$120M+", label: "Sales Volume" },
        { icon: <Building size={24} />, value: "50+", label: "Exclusive Listings" },
        { icon: <Users size={24} />, value: "200+", label: "Happy Clients" },
        { icon: <Globe size={24} />, value: "10+", label: "Years in Dubai" },
    ];

    return (
        <section id="about" className="py-24 bg-surface relative overflow-hidden">
            {/* Decorative bg element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-background/50 rounded-l-[100px] -z-10"></div>

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Image Side */}
                    <div className="w-full lg:w-5/12 relative">
                        <div className="relative aspect-[3/4] w-full rounded-none overflow-hidden group">
                            <Image
                                src="/images/dubai_agent_portrait_1773034750171.png"
                                alt="Alexander Reid - Luxury Real Estate Agent"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gold-500/10 mix-blend-overlay"></div>
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-gold-500 text-background p-8 hidden md:block border max-w-[200px]">
                            <p className="font-serif text-4xl mb-1">10<span className="text-xl">+</span></p>
                            <p className="text-sm font-medium leading-tight">Years of Market Excellence</p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-7/12">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-gold-500"></div>
                            <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">The Agent</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                            Alexander <span className="italic text-gold-500">Reid</span>
                        </h2>

                        <p className="text-foreground/70 text-lg mb-6 leading-relaxed font-light">
                            As a dedicated luxury property advisor in Dubai, my mission is to connect discerning international clients with the most extraordinary homes in the UAE.
                        </p>

                        <p className="text-foreground/70 mb-10 leading-relaxed">
                            With over a decade of hands-on experience in both off-plan investments and the ultra-luxury secondary market, I offer unparalleled access to invisible inventory in Downtown Dubai, Palm Jumeirah, and Emirates Hills. My approach is rooted in discretion, sharp negotiation, and an uncompromising commitment to my clients' ultimate vision.
                        </p>

                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-border">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 bg-gold-500/5">
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <p className="font-serif text-2xl mb-1">{stat.value}</p>
                                        <p className="text-xs text-foreground/50 tracking-wide uppercase">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
