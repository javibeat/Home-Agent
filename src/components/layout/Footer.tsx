"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    // Do not show Footer on admin pages
    if (pathname?.startsWith("/admin")) return null;

    return (
        <footer className="bg-surface pt-16 pb-8 border-t border-border">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="inline-block mb-4">
                            <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
                                A<span className="text-gold-500">.</span> REID
                            </span>
                        </Link>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                            Exclusive luxury properties and off-plan investments in the heart of Dubai. Your trusted partner for premium real estate.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-gold-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-gold-500 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-serif text-lg mb-4">Properties</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#properties" className="text-foreground/60 hover:text-gold-500 text-sm transition-colors">
                                    Off-Plan Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="#properties" className="text-foreground/60 hover:text-gold-500 text-sm transition-colors">
                                    Luxury Villas
                                </Link>
                            </li>
                            <li>
                                <Link href="#properties" className="text-foreground/60 hover:text-gold-500 text-sm transition-colors">
                                    Penthouses
                                </Link>
                            </li>
                            <li>
                                <Link href="#properties" className="text-foreground/60 hover:text-gold-500 text-sm transition-colors">
                                    Downtown Dubai
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h4 className="font-serif text-lg mb-4">Contact Me</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-gold-500 shrink-0 mt-0.5" />
                                <span className="text-foreground/60 text-sm">
                                    Boulevard Plaza Tower 1, <br />
                                    Downtown Dubai, UAE
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-gold-500 shrink-0" />
                                <a href="tel:+971501234567" className="text-foreground/60 hover:text-gold-500 text-sm transition-colors">
                                    +971 50 123 4567
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-gold-500 shrink-0" />
                                <a href="mailto:info@truelovecreative.es" className="text-foreground/60 hover:text-gold-500 text-sm transition-colors">
                                    info@truelovecreative.es
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-foreground/40 text-xs">
                        &copy; {currentYear} A. Reid Real Estate. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-foreground/40 hover:text-foreground/80 text-xs transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-foreground/40 hover:text-foreground/80 text-xs transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
