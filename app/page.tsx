import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import Expertise from "@/components/home/Expertise";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Pricing from "@/components/home/Pricing";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto space-y-32 overflow-x-hidden">
        <Expertise />
        <Services />
        <Portfolio />
        <Pricing />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
