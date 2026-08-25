"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";

const defaultProjects = [
  { slug: "luxstay-bali", title: "LuxStay Bali", category: "Booking System", image: "" },
  { slug: "homeliving-store", title: "HomeLiving Store", category: "E-Commerce", image: "" },
  { slug: "paulusconnect", title: "PaulusConnect", category: "Mobile App", image: "" },
  { slug: "cloudscale", title: "CloudScale", category: "Corporate Website", image: "" },
];

const Portfolio = ({ projects }: { projects?: ProjectData[] }) => {
  const displayProjects = projects && projects.length > 0 ? projects.slice(0, 4) : [];

  return (
    <section className="section" id="projects">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="section-tag">Recent Work</span>
          <h2 className="section-title">A few things I&apos;ve shipped.</h2>
          <p className="section-sub">
            Selected projects across web, mobile, and commerce.
          </p>
        </div>

        <div className="folio-grid" data-reveal>
          {displayProjects.length > 0
            ? displayProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="folio-card"
                >
                  <div className="folio-thumb">
                    {project.heroImage && (
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="folio-body">
                    <div>
                      <span className="folio-tag">{project.category}</span>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="folio-arrow">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))
            : defaultProjects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/projects`}
                  className="folio-card"
                >
                  <div className="folio-thumb"></div>
                  <div className="folio-body">
                    <div>
                      <span className="folio-tag">{p.category}</span>
                      <h3>{p.title}</h3>
                    </div>
                    <div className="folio-arrow">
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
