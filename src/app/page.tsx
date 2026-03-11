import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProperties />
      <Testimonials />
      <Contact />
    </>
  );
}
