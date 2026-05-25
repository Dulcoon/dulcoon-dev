"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import type { ProjectData } from '@/lib/projects';

const FILTERS = ['All', 'Website', 'Mobile App', 'System'];

const ProjectsGrid = ({ projects }: { projects: ProjectData[] }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filterTag === activeFilter);

  return (
    <section className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24 pb-20">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
        <div>
          <span className="section-eyebrow mb-2">All Projects</span>
          <h2 className="font-syne text-3xl font-extrabold" style={{ letterSpacing: "-1px" }}>
            Browse Portfolio
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-5 py-2 rounded-full text-xs font-bold transition-all duration-200"
              style={{
                background: activeFilter === f ? "#a8e600" : "rgba(255,255,255,0.04)",
                color: activeFilter === f ? "#0b0d0b" : "#9aaa9a",
                border: activeFilter === f ? "1px solid #a8e600" : "1px solid #222822",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.slug}
            className="group rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-[#a8e600]"
            style={{ background: "#141714", border: "1px solid #222822" }}
          >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.heroImage}
                style={{ opacity: 0.75 }}
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(168,230,0,0.08)" }}
              >
                <span
                  className="font-syne font-bold text-sm px-5 py-2 rounded-full"
                  style={{ background: "#a8e600", color: "#0b0d0b" }}
                >
                  View Project
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-syne text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "#9aaa9a" }}>
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.name}
                    className="text-xs px-2 py-1 rounded-md font-medium"
                    style={{ background: "rgba(168,230,0,0.06)", color: "#a8e600", border: "1px solid rgba(168,230,0,0.15)" }}
                  >
                    {tag.name}
                  </span>
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
