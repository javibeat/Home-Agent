import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bed, Bath, Square } from "lucide-react";

export default function FeaturedProperties() {
    const properties = [
        {
            id: 1,
            title: "Sky Penthouse Reserve",
            location: "Palm Jumeirah",
            price: "AED 45,000,000",
            specs: { beds: 5, baths: 6, sqft: "12,500" },
            image: "/images/dubai_property_1_1773034763770.png",
            tag: "Secondary Market",
        },
        {
            id: 2,
            title: "Contemporary Golf Villa",
            location: "Dubai Hills Estate",
            price: "AED 32,500,000",
            specs: { beds: 6, baths: 7, sqft: "9,800" },
            image: "/images/dubai_property_2_1773034777003.png",
            tag: "Exclusive Listed",
        },
    ];

    return (
        <section id="properties" className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-[1px] bg-gold-500"></div>
                            <span className="text-gold-500 text-sm font-medium tracking-widest uppercase">Portfolio</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-serif">
                            Featured <span className="italic text-gold-500">Listings</span>
                        </h2>
                    </div>
                    <Link href="/properties" className="hidden md:flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold-500 transition-colors group">
                        View Full Inventory
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Properties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {properties.map((prop) => (
                        <div key={prop.id} className="group cursor-pointer">
                            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6">
                                <div className="absolute top-4 left-4 z-10 bg-surface/80 backdrop-blur-md px-3 py-1.5 text-xs font-medium tracking-wide border border-border">
                                    {prop.tag}
                                </div>
                                <Image
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-serif mb-2 group-hover:text-gold-500 transition-colors">{prop.title}</h3>
                                    <p className="text-foreground/60 text-sm mb-4">{prop.location}</p>

                                    <div className="flex items-center gap-6 text-foreground/70 text-sm">
                                        <div className="flex items-center gap-1.5 border-r border-border pr-6">
                                            <Bed size={16} className="text-gold-500" />
                                            <span>{prop.specs.beds} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 border-r border-border pr-6">
                                            <Bath size={16} className="text-gold-500" />
                                            <span>{prop.specs.baths} Baths</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Square size={16} className="text-gold-500" />
                                            <span>{prop.specs.sqft} sq.ft</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-xl font-serif text-gold-400">{prop.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
