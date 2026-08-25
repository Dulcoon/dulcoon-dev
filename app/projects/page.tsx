import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsFeatured from '@/components/projects/ProjectsFeatured';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import { getProjectsData } from '@/lib/projects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dulcoon-dev.web.id';

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies — Production Web & Mobile Projects',
  description:
    'Explore production-grade web applications, cross-platform mobile apps, and enterprise IT platforms engineered by dulcoon.dev.',
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: 'Portfolio & Case Studies | dulcoon.dev',
    description:
      'Explore production-grade web applications, cross-platform mobile apps, and enterprise IT platforms engineered by dulcoon.dev.',
    url: `${siteUrl}/projects`,
    images: ['/og-image-new.png'],
  },
};

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'dulcoon.dev Software Engineering Portfolio',
    description: 'Collection of web, mobile, and custom IT projects delivered by dulcoon.dev',
    url: `${siteUrl}/projects`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((p, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: p.title,
        url: `${siteUrl}/projects/${p.slug}`,
        description: p.shortDescription,
        image: p.heroImage,
      })),
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <Navbar />
      <main className="relative flex-1">
        <ProjectsHero />
        <ProjectsFeatured projects={projects} />
        <ProjectsGrid projects={projects} />
        <ProjectsCTA />
      </main>
      <Footer />
    </div>
  );
}
