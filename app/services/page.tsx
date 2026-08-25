import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesShowcase from '@/components/services/ServicesShowcase';
import ServicesCTA from '@/components/services/ServicesCTA';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dulcoon-dev.web.id';

export const metadata: Metadata = {
  title: 'Services & Solutions — Web, Mobile, & IT Engineering',
  description:
    'Comprehensive software engineering services: full-stack web applications, cross-platform mobile apps, cloud infrastructure, and enterprise IT consulting.',
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: 'Services & Solutions | dulcoon.dev',
    description:
      'Comprehensive software engineering services: full-stack web applications, cross-platform mobile apps, cloud infrastructure, and enterprise IT consulting.',
    url: `${siteUrl}/services`,
    images: ['/logo-putih.png'],
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex-1">
        <ServicesHero />
        <ServicesShowcase />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
}
