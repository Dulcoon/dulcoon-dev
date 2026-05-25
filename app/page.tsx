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
import { getProjectsData } from "@/lib/projects";

export default async function Home() {
  const projects = await getProjectsData();

  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Process />
      <Portfolio projects={projects} />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
