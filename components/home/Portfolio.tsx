import React from "react";
import Link from "next/link";
import { projectsData } from "@/lib/projects";

const Portfolio = () => {
  const recentProjects = projectsData.slice(0, 4);

  return (
    <section id="recent-projects" className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl font-bold tracking-tight">Recent Projects</h2>
          <p className="text-on-surface-variant mt-2">A showcase of technical excellence and creative design.</p>
        </div>
        <Link href="/projects" className="text-primary-fixed underline underline-offset-8 font-bold hover:text-primary transition-colors">
          View All Case Studies
        </Link>
      </div>
      <div className="grid md:grid-cols-12 gap-8">
        {recentProjects.map((project, index) => {
          const isLarge = index === 0;
          const isMedium = index === 3;
          const isSmall = index === 1 || index === 2;

          let colSpan = "md:col-span-4";
          let aspect = "";
          
          if (isLarge) {
            colSpan = "md:col-span-8";
            aspect = "aspect-[16/9]";
          } else if (isMedium) {
            colSpan = "md:col-span-8";
            aspect = "aspect-[21/9]";
          }

          return (
            <Link 
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`${colSpan} group relative rounded-xl overflow-hidden glass-panel ${aspect} block`}
            >
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                alt={project.title}
                src={project.heroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 md:p-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag.name} className={`px-3 py-1 bg-surface-container-highest/60 backdrop-blur-md text-xs rounded-full border border-white/10 ${tag.colorClass}`}>
                      {tag.name}
                    </span>
                  ))}
                </div>
                <h4 className={`${isSmall ? 'text-xl' : 'text-2xl md:text-3xl'} font-bold mb-2 text-white`}>{project.title}</h4>
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  View Case Study <span className="material-symbols-outlined text-sm">north_east</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
