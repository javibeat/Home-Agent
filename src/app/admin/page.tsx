"use client";

import {
    Building2,
    Users,
    TrendingUp,
    Wallet,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";

export default function AdminOverview() {
    const stats = [
        {
            label: "Total Portfolio Value",
            value: "AED 181.5M",
            trend: "+12.5%",
            isPositive: true,
            icon: Wallet
        },
        {
            label: "Active Listings",
            value: "24",
            trend: "+3",
            isPositive: true,
            icon: Building2
        },
        {
            label: "New Leads (30d)",
            value: "148",
            trend: "-2.4%",
            isPositive: false,
            icon: Users
        },
        {
            label: "Viewings Scheduled",
            value: "12",
            trend: "+18%",
            isPositive: true,
            icon: TrendingUp
        },
    ];

    const recentActivity = [
        { id: 1, action: "New Lead", detail: "James D. inquired about Sky Penthouse", time: "2 hours ago", type: "lead" },
        { id: 2, action: "Property Update", detail: "Price reduced for Contemporary Golf Villa", time: "5 hours ago", type: "property" },
        { id: 3, action: "Viewing Scheduled", detail: "Tomorrow at 10:00 AM - Waterfront Mansion", time: "1 day ago", type: "meeting" },
        { id: 4, action: "New Listing", detail: "Burj View Signature Apartment published", time: "2 days ago", type: "property" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-serif mb-2">Welcome back, Alex</h1>
                <p className="text-foreground/60">Here is what's happening with your portfolio today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <div key={i} className="bg-surface border border-border p-6 rounded-lg">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-background rounded-md">
                                    <Icon size={20} className="text-gold-500" />
                                </div>
                                <div className={`flex items-center gap-1 text-xs font-medium ${stat.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                                    {stat.trend}
                                    {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                </div>
                            </div>
                            <h3 className="text-3xl font-serif mb-1">{stat.value}</h3>
                            <p className="text-sm text-foreground/50 tracking-wide">{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Chart Placement (Simulated) */}
                <div className="lg:col-span-2 bg-surface border border-border rounded-lg p-6">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-serif text-xl">Portfolio Value Trend</h2>
                        <select className="bg-background border border-border text-sm px-3 py-1.5 rounded-md outline-none focus:border-gold-500 text-foreground/70">
                            <option>Last 30 Days</option>
                            <option>This Quarter</option>
                            <option>This Year</option>
                        </select>
                    </div>
                    <div className="h-64 flex items-end justify-between gap-2 px-2">
                        {/* Simulated bar chart */}
                        {[40, 55, 45, 70, 65, 80, 75, 90, 85, 100, 95, 110].map((h, i) => (
                            <div key={i} className="w-full bg-gold-500/20 hover:bg-gold-500/40 transition-colors rounded-t-sm relative group cursor-pointer" style={{ height: `${h}%` }}>
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-background border border-border px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    AED {h}M
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-surface border border-border rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="font-serif text-xl">Recent Activity</h2>
                        <button className="text-xs text-gold-500 hover:text-gold-400">View All</button>
                    </div>
                    <div className="space-y-6">
                        {recentActivity.map((activity) => (
                            <div key={activity.id} className="flex gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-gold-500 shrink-0"></div>
                                <div>
                                    <p className="font-medium text-sm mb-0.5">{activity.action}</p>
                                    <p className="text-xs text-foreground/60 leading-relaxed mb-1">{activity.detail}</p>
                                    <p className="text-[10px] text-foreground/40 uppercase tracking-wider">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
