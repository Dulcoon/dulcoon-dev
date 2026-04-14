import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/projects';

const ProjectsFeatured = () => {
  const featured = projectsData[0]; // Lumina as featured

  return (
    <section className="container px-6 mx-auto py-24">
      <div className="glass-panel rounded-xl overflow-hidden grid lg:grid-cols-2 gap-0">
        <div className="relative min-h-[400px] group overflow-hidden">
          <img alt={featured.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={featured.heroImage} />
          <div className="absolute inset-0 bg-surface-container-lowest/20 group-hover:bg-transparent transition-colors duration-500"></div>
        </div>
        <div className="p-12 md:p-16 flex flex-col justify-center">
          <span className="text-sm text-primary tracking-[0.2em] font-bold mb-4 uppercase">Featured Case Study</span>
          <h2 className="text-4xl font-bold tracking-tight text-white mb-6">{featured.title}</h2>
          <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">{featured.overviewText[0]?.slice(0, 180)}...</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {featured.tags.map((tag) => (
              <span key={tag.name} className="bg-surface-container-highest/60 text-secondary-fixed-dim px-4 py-1.5 rounded-full text-xs font-bold border border-outline-variant/20">{tag.name}</span>
            ))}
          </div>
          <div>
            <Link href={`/projects/${featured.slug}`} className="inline-flex bg-gradient-to-r from-primary to-secondary text-on-primary px-8 py-4 rounded-full font-bold hover:shadow-[0_0_20px_rgba(201,191,255,0.4)] transition-all items-center gap-2 group">
              View Case Study
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatured;
