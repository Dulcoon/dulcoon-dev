import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsFeatured from '@/components/projects/ProjectsFeatured';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="relative flex-1">
        <ProjectsHero />
        <ProjectsFeatured />
        <ProjectsGrid />
        <ProjectsCTA />
      </main>
      <Footer />
    </div>
  );
}
