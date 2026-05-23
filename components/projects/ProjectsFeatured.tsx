import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/lib/projects';

const ProjectsFeatured = () => {
  const featured = projectsData[0];

  return (
    <section className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24 py-16">
      <div
        className="rounded-xl overflow-hidden grid lg:grid-cols-2"
        style={{ background: "#141714", border: "1px solid #222822" }}
      >
        {/* Image */}
        <div className="relative min-h-[380px] group overflow-hidden">
          <img
            alt={featured.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={featured.heroImage}
            style={{ opacity: 0.8 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, transparent 60%, #141714 100%)" }}
          />
        </div>

        {/* Content */}
        <div className="p-10 md:p-14 flex flex-col justify-center">
          <span
            className="text-xs font-bold uppercase tracking-widest mb-4 block"
            style={{ color: "#a8e600", letterSpacing: "2px" }}
          >
            Featured Case Study
          </span>
          <h2
            className="font-syne text-3xl font-extrabold mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            {featured.title}
          </h2>
          <p className="text-sm leading-relaxed mb-7" style={{ color: "#9aaa9a" }}>
            {featured.overviewText[0]?.slice(0, 180)}...
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {featured.tags.map((tag) => (
              <span
                key={tag.name}
                className="px-3 py-1 text-xs rounded-full font-medium"
                style={{ background: "rgba(168,230,0,0.08)", border: "1px solid rgba(168,230,0,0.18)", color: "#a8e600" }}
              >
                {tag.name}
              </span>
            ))}
          </div>

          <Link
            href={`/projects/${featured.slug}`}
            className="btn-primary self-start"
            style={{ padding: "12px 24px" }}
          >
            View Case Study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatured;
