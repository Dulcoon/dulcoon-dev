"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/projects';

const FILTERS = ['All', 'Website', 'Mobile App', 'System'];

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All' ? projectsData : projectsData.filter(p => p.filterTag === activeFilter);

  return (
    <section className="container px-6 mx-auto py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-sm text-tertiary-fixed-dim tracking-[0.2em] font-bold mb-2 block uppercase">Browse Gallery</span>
          <h2 className="text-4xl font-bold text-white tracking-tight">Our Projects</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeFilter === f ? 'bg-primary-container text-white' : 'glass-panel text-on-surface-variant hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="glass-panel rounded-lg overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
            <div className="relative h-64 overflow-hidden">
              <img alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={project.heroImage} />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="bg-white text-surface px-6 py-2 rounded-full font-bold">View Project</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag.name} className="text-[10px] uppercase tracking-wider font-black text-tertiary">{tag.name}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
