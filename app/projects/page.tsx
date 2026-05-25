import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsFeatured from '@/components/projects/ProjectsFeatured';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import { getProjectsData } from '@/lib/projects';

export default async function ProjectsPage() {
  const projects = await getProjectsData();

  return (
    <div className="min-h-screen flex flex-col">
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
