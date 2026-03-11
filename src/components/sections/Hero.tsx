import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/dubai_hero_bg_1773034735520.png"
                    alt="Luxury Dubai Mansion at Sunset"
                    fill
                    priority
                    className="object-cover object-center brightness-75 transition-transform duration-[20s] ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
            </div>

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">
                <div className="max-w-3xl animate-slide-up">
                    <div className="inline-block px-4 py-1.5 mb-6 border border-gold-500/30 bg-gold-500/10 backdrop-blur-sm text-gold-400 text-sm font-medium tracking-wide uppercase">
                        Dubai's Premier Real Estate
                    </div>
                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6 drop-shadow-lg">
                        Elevate Your <br />
                        <span className="text-gold-500 font-serif italic">Lifestyle</span> in Dubai.
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
                        Exclusive access to off-plan master developments and ultra-luxury secondary market properties in the UAE's most coveted neighborhoods.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#properties"
                            className="group flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-background px-8 py-4 rounded-none font-medium transition-all duration-300 transform hover:translate-y-[-2px]"
                        >
                            Explore Properties
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#contact"
                            className="flex items-center justify-center px-8 py-4 border border-white/30 hover:border-white hover:bg-white/5 backdrop-blur-sm text-white rounded-none font-medium transition-all duration-300"
                        >
                            Consult with Alexander
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2 opacity-60">
                <span className="text-xs tracking-widest uppercase writing-mode-vertical">Scroll</span>
                <div className="w-[1px] h-12 bg-gold-500"></div>
            </div>
        </section>
    );
}
