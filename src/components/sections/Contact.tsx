"use client";

import { useState } from "react";
import { Send, MessageSquare } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "buying",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        alert("Thank you for your inquiry. Alexander will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", interest: "buying", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 bg-surface border-t border-border">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Text Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-gold-500"></div>
                            <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">Consultation</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                            Let's Discuss Your <br />
                            <span className="italic text-gold-500">Next Move</span>
                        </h2>

                        <p className="text-foreground/70 text-lg mb-10 leading-relaxed font-light">
                            Whether you are looking to acquire a signature property, sell an exclusive asset, or explore high-yield off-plan investments in Dubai, I am here to guide you with discretion and expertise.
                        </p>

                        <div className="bg-background p-8 border border-border">
                            <h3 className="font-serif text-xl mb-4 text-gold-500">Direct Contact</h3>
                            <p className="text-foreground/80 mb-6">For immediate assistance or highly confidential inquiries.</p>

                            <a
                                href="https://wa.me/971501234567"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-none font-medium transition-colors w-full sm:w-auto"
                            >
                                <MessageSquare size={18} />
                                WhatsApp Alexander
                            </a>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-background p-8 md:p-12 border border-border shadow-2xl relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 -z-10"></div>
                        <h3 className="font-serif text-2xl mb-8">Schedule a Private Viewing</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="interest" className="text-sm font-medium text-foreground/80">Primary Interest</label>
                                <select
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                                >
                                    <option value="buying">Buying Property</option>
                                    <option value="selling">Selling Property</option>
                                    <option value="investment">Off-plan Investment</option>
                                    <option value="other">Other Inquiry</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full bg-surface border border-border px-4 py-3 text-foreground focus:outline-none focus:border-gold-500 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gold-500 hover:bg-gold-400 text-background px-6 py-4 rounded-none font-medium transition-colors flex items-center justify-center gap-2 group"
                            >
                                Send Request
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
