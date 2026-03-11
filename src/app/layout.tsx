import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Real Estate | Dubai",
  description: "Exclusive properties and off-plan investments in Dubai. Discover your dream luxury home with our tailored real estate services.",
  keywords: ["Dubai Real Estate", "Luxury Properties", "Off-plan Dubai", "Buy Property Dubai", "Real Estate Agent Dubai"],
  openGraph: {
    title: "Premium Real Estate | Dubai",
    description: "Exclusive properties and off-plan investments in Dubai.",
    type: "website",
    locale: "en_AE",
    siteName: "Dubai Premium Real Estate",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
