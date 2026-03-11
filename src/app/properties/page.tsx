"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bed, Bath, Square, ChevronRight, SlidersHorizontal } from "lucide-react";

const ALL_PROPERTIES = [
    {
        id: 1,
        title: "Sky Penthouse Reserve",
        location: "Palm Jumeirah",
        price: "AED 45,000,000",
        specs: { beds: 5, baths: 6, sqft: "12,500" },
        image: "/images/dubai_property_1_1773034763770.png",
        category: "Secondary Market",
        type: "Penthouse",
    },
    {
        id: 2,
        title: "Contemporary Golf Villa",
        location: "Dubai Hills Estate",
        price: "AED 32,500,000",
        specs: { beds: 6, baths: 7, sqft: "9,800" },
        image: "/images/dubai_property_2_1773034777003.png",
        category: "Exclusive Listed",
        type: "Villa",
    },
    {
        id: 3,
        title: "Waterfront Mansion",
        location: "Emirates Hills",
        price: "AED 85,000,000",
        specs: { beds: 7, baths: 9, sqft: "18,000" },
        image: "/images/dubai_property_3_1773035155386.png",
        category: "Secondary Market",
        type: "Mansion",
    },
    {
        id: 4,
        title: "Burj View Signature Apartment",
        location: "Downtown Dubai",
        price: "AED 18,500,000",
        specs: { beds: 3, baths: 4, sqft: "4,200" },
        image: "/images/dubai_property_4_1773035171013.png",
        category: "Off-Plan",
        type: "Apartment",
    },
];

export default function PropertiesPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filters = ["All", "Off-Plan", "Secondary Market", "Exclusive Listed"];

    const filteredProperties = activeFilter === "All"
        ? ALL_PROPERTIES
        : ALL_PROPERTIES.filter(p => p.category === activeFilter);

    return (
        <div className="min-h-screen bg-background pb-24">

            {/* Page Header */}
            <section className="pt-12 pb-16 bg-surface border-b border-border">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
                        <Link href="/" className="hover:text-gold-500 transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <span className="text-foreground">Properties</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif mb-6">
                        Exclusive <span className="italic text-gold-500">Inventory</span>
                    </h1>
                    <p className="max-w-2xl text-lg text-foreground/70 font-light leading-relaxed">
                        A curated selection of Dubai's finest real estate. From off-plan master developments offering high ROI to ready-to-move-in ultra-luxury mansions.
                    </p>
                </div>
            </section>

            {/* Catalog Section */}
            <section className="pt-16">
                <div className="container mx-auto px-6 max-w-7xl">

                    {/* Filters Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                        <div className="flex items-center gap-2 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar">
                            <div className="flex items-center gap-2 text-foreground/50 mr-2 shrink-0">
                                <SlidersHorizontal size={18} />
                                <span className="font-medium text-sm tracking-wide uppercase">Filter</span>
                            </div>

                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`shrink-0 px-6 py-2.5 rounded-none text-sm font-medium transition-all duration-300 ${activeFilter === filter
                                            ? "bg-gold-500 text-background"
                                            : "bg-surface border border-border text-foreground/70 hover:border-gold-500/50"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="text-sm text-foreground/60 font-medium">
                            Showing {filteredProperties.length} {filteredProperties.length === 1 ? 'Property' : 'Properties'}
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {filteredProperties.map((prop) => (
                            <div key={prop.id} className="group cursor-pointer">
                                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6">
                                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                                        <div className="bg-surface/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium tracking-wide border border-border">
                                            {prop.category}
                                        </div>
                                        <div className="bg-gold-500/90 text-background backdrop-blur-md px-3 py-1.5 text-xs font-medium tracking-wide">
                                            {prop.type}
                                        </div>
                                    </div>
                                    <Image
                                        src={prop.image}
                                        alt={prop.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div>
                                        <h3 className="text-2xl font-serif mb-2 group-hover:text-gold-500 transition-colors">{prop.title}</h3>
                                        <p className="text-foreground/60 text-sm mb-4">{prop.location}</p>

                                        <div className="flex items-center gap-4 sm:gap-6 text-foreground/70 text-sm">
                                            <div className="flex items-center gap-1.5 border-r border-border pr-4 sm:pr-6">
                                                <Bed size={16} className="text-gold-500" />
                                                <span>{prop.specs.beds} Beds</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 border-r border-border pr-4 sm:pr-6">
                                                <Bath size={16} className="text-gold-500" />
                                                <span>{prop.specs.baths} Baths</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Square size={16} className="text-gold-500" />
                                                <span>{prop.specs.sqft}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:text-right mt-2 sm:mt-0">
                                        <p className="text-xl font-serif text-gold-400">{prop.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProperties.length === 0 && (
                        <div className="py-24 text-center">
                            <h3 className="text-2xl font-serif text-foreground/50 mb-4">No properties found</h3>
                            <p className="text-foreground/60">Try adjusting your filters to see more results.</p>
                            <button
                                onClick={() => setActiveFilter("All")}
                                className="mt-8 text-gold-500 hover:text-gold-400 underline underline-offset-4"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}

                </div>
            </section>
        </div>
    );
}
