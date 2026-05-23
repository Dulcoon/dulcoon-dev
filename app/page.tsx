import Navbar from "@/components/Navbar";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Pricing from "@/components/home/Pricing";
import CTA from "@/components/home/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
