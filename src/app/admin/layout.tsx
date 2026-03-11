"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Building2,
    LayoutDashboard,
    MessageSquare,
    Settings,
    LogOut,
    Bell,
    Menu,
    Search
} from "lucide-react";
import { useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const navigation = [
        { name: "Overview", href: "/admin", icon: LayoutDashboard },
        { name: "Properties", href: "/admin/properties", icon: Building2 },
        { name: "Leads", href: "#", icon: MessageSquare },
        { name: "Settings", href: "#", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-background font-sans selection:bg-gold-500 selection:text-background flex text-foreground">

            {/* Sidebar - Desktop */}
            <aside className="hidden md:flex flex-col w-64 bg-surface border-r border-border h-screen sticky top-0 shrink-0">
                <div className="h-20 flex items-center px-8 border-b border-border shrink-0">
                    <span className="font-serif text-xl tracking-tight">
                        A.<span className="text-gold-500 italic">Reid</span> Portal
                    </span>
                </div>

                <div className="flex flex-col flex-1 py-8 px-4 gap-2">
                    <p className="px-4 text-xs font-medium tracking-widest text-foreground/40 uppercase mb-2">Main Menu</p>
                    {navigation.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${isActive
                                        ? "bg-gold-500/10 text-gold-500"
                                        : "text-foreground/60 hover:text-foreground hover:bg-white/5"
                                    }`}
                            >
                                <Icon size={18} />
                                <span className="text-sm font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>

                <div className="p-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-3 px-4 py-3 text-foreground/50 hover:text-red-400 transition-colors cursor-pointer rounded-md hover:bg-white/5">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Log out</span>
                    </div>
                </div>
            </aside>

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0">

                {/* Top Header */}
                <header className="h-20 bg-surface/50 backdrop-blur-md border-b border-border sticky top-0 z-40 flex items-center justify-between px-6 md:px-10">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden text-foreground/60 hover:text-foreground"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                        >
                            <Menu size={24} />
                        </button>
                        <div className="relative hidden sm:block">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                            <input
                                type="text"
                                placeholder="Search leads, properties..."
                                className="w-64 bg-background border border-border rounded-full pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold-500 transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative text-foreground/60 hover:text-gold-500 transition-colors">
                            <Bell size={20} />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center gap-3 border-l border-border pl-6">
                            <div className="w-8 h-8 rounded-full bg-surface border border-border overflow-hidden bg-[url('/images/dubai_agent_portrait_1773034750171.png')] bg-cover bg-top"></div>
                            <span className="text-sm font-medium hidden sm:block">Alex Reid</span>
                        </div>
                    </div>
                </header>

                {/* Mobile Sidebar Overlay */}
                {isMobileOpen && (
                    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden flex">
                        <aside className="w-64 bg-surface border-r border-border h-full flex flex-col relative w-full max-w-[80vw]">
                            <button onClick={() => setIsMobileOpen(false)} className="absolute top-6 right-6 text-foreground/50 hover:text-foreground"><LogOut size={20} /></button>
                            <div className="h-20 flex items-center px-8 border-b border-border shrink-0">
                                <span className="font-serif text-xl tracking-tight">
                                    A.<span className="text-gold-500 italic">Reid</span>
                                </span>
                            </div>
                            <div className="flex flex-col flex-1 py-8 px-4 gap-2">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ${isActive
                                                    ? "bg-gold-500/10 text-gold-500"
                                                    : "text-foreground/60 hover:text-foreground active:bg-white/5"
                                                }`}
                                        >
                                            <Icon size={18} />
                                            <span className="text-sm font-medium">{item.name}</span>
                                        </Link>
                                    );
                                })}
                                <Link href="/" className="mt-8 text-sm text-gold-500 px-4">← Back to Live Site</Link>
                            </div>
                        </aside>
                        <div className="flex-1" onClick={() => setIsMobileOpen(false)}></div>
                    </div>
                )}

                {/* Page Content */}
                <main className="flex-1 p-6 md:p-10 hide-scrollbar overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
