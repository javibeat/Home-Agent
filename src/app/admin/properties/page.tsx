"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Search, MoreVertical, Edit2, Trash2, Eye } from "lucide-react";

export default function AdminProperties() {
    const [searchQuery, setSearchQuery] = useState("");

    // Simulated database for the admin panel
    const properties = [
        {
            id: "PROP-001",
            title: "Sky Penthouse Reserve",
            location: "Palm Jumeirah",
            price: "AED 45,000,000",
            status: "Active",
            views: 1240,
            leads: 14,
            image: "/images/dubai_property_1_1773034763770.png",
            dateAdded: "Oct 12, 2025"
        },
        {
            id: "PROP-002",
            title: "Contemporary Golf Villa",
            location: "Dubai Hills Estate",
            price: "AED 32,500,000",
            status: "Active",
            views: 890,
            leads: 8,
            image: "/images/dubai_property_2_1773034777003.png",
            dateAdded: "Nov 05, 2025"
        },
        {
            id: "PROP-003",
            title: "Waterfront Mansion",
            location: "Emirates Hills",
            price: "AED 85,000,000",
            status: "Under Offer",
            views: 2100,
            leads: 32,
            image: "/images/dubai_property_3_1773035155386.png",
            dateAdded: "Jan 18, 2026"
        },
        {
            id: "PROP-004",
            title: "Burj View Signature Apartment",
            location: "Downtown Dubai",
            price: "AED 18,500,000",
            status: "Active",
            views: 340,
            leads: 5,
            image: "/images/dubai_property_4_1773035171013.png",
            dateAdded: "Mar 01, 2026"
        },
    ];

    const filteredProperties = properties.filter(p =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-serif mb-2">Property Management</h1>
                    <p className="text-foreground/60">Manage your exclusive inventory and track performance.</p>
                </div>
                <button className="bg-gold-500 hover:bg-gold-400 text-background px-6 py-2.5 rounded-sm font-medium transition-colors flex items-center gap-2">
                    <Plus size={18} />
                    <span>Add New Listing</span>
                </button>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between bg-surface border border-border p-4 rounded-lg">
                <div className="relative w-full sm:w-96">
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
                    <input
                        type="text"
                        placeholder="Search by title or location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:border-gold-500 transition-colors"
                    />
                </div>
                <div className="flex gap-2">
                    <select className="bg-background border border-border text-sm px-4 py-2 rounded-md outline-none focus:border-gold-500 text-foreground">
                        <option>All Statuses</option>
                        <option>Active</option>
                        <option>Under Offer</option>
                        <option>Sold</option>
                    </select>
                </div>
            </div>

            {/* Data Table */}
            <div className="bg-surface border border-border rounded-lg overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-max">
                    <thead>
                        <tr className="border-b border-border bg-background/50">
                            <th className="px-6 py-4 font-medium text-sm text-foreground/70 tracking-wide uppercase">Property</th>
                            <th className="px-6 py-4 font-medium text-sm text-foreground/70 tracking-wide uppercase">Status</th>
                            <th className="px-6 py-4 font-medium text-sm text-foreground/70 tracking-wide uppercase">Price (AED)</th>
                            <th className="px-6 py-4 font-medium text-sm text-foreground/70 tracking-wide uppercase text-center">Performance</th>
                            <th className="px-6 py-4 font-medium text-sm text-foreground/70 tracking-wide uppercase text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {filteredProperties.map((prop) => (
                            <tr key={prop.id} className="hover:bg-background/40 transition-colors group">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-12 relative rounded overflow-hidden shrink-0 border border-border/50">
                                            <Image src={prop.image} alt={prop.title} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-serif text-lg text-gold-500 hover:text-gold-400 cursor-pointer">{prop.title}</p>
                                            <p className="text-xs text-foreground/60">{prop.location} • {prop.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${prop.status === 'Active' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'
                                        }`}>
                                        {prop.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="font-medium text-sm">{prop.price}</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <div className="flex justify-center gap-6">
                                        <div className="text-center">
                                            <p className="text-sm font-medium">{prop.views}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-foreground/50">Views</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-sm font-medium text-gold-500">{prop.leads}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-foreground/50">Leads</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-2 text-foreground/50 hover:text-foreground hover:bg-white/5 rounded"><Eye size={16} /></button>
                                        <button className="p-2 text-foreground/50 hover:text-gold-500 hover:bg-gold-500/10 rounded"><Edit2 size={16} /></button>
                                        <button className="p-2 text-foreground/50 hover:text-red-500 hover:bg-red-500/10 rounded"><Trash2 size={16} /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredProperties.length === 0 && (
                    <div className="p-12 text-center text-foreground/50">
                        No properties found matching your search.
                    </div>
                )}
            </div>

        </div>
    );
}
