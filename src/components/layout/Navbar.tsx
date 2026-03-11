"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, User } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Do not show Navbar on admin pages
    if (pathname?.startsWith("/admin")) return null;

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Properties", href: "/properties" },
        { name: "About", href: "/#about" },
        { name: "Testimonials", href: "/#testimonials" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-surface/80 backdrop-blur-md border-b border-border py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    {/* Logo / Agent Name */}
                    <span className="font-serif text-2xl font-medium tracking-tight text-foreground">
                        A<span className="text-gold-500">.</span> REID
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-gold-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <Link
                        href="#contact"
                        className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-background px-6 py-2.5 rounded-none font-medium text-sm transition-all duration-300"
                    >
                        <Phone size={16} />
                        Let's Talk
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border animate-fade-in">
                    <div className="flex flex-col px-6 py-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="flex items-center justify-center gap-2 bg-gold-500 text-background px-6 py-3 mt-4 rounded-none font-medium transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Phone size={18} />
                            Contact Me
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
