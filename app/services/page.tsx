import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesShowcase from '@/components/services/ServicesShowcase';
import ServicesCTA from '@/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative pt-32 flex-1">
        <ServicesHero />
        <ServicesShowcase />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
