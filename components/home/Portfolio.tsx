"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { ProjectData } from "@/lib/projects";

const defaultProjects = [
  {
    slug: "marme-villa-jogja",
    title: "Marme Villa Jogja Booking System",
    category: "Website",
    shortDescription: "Direct villa reservation platform with automated availability, dynamic pricing, and Midtrans payment integration.",
    techStack: ["React", "Laravel", "MySQL"],
    heroImage: "",
  },
  {
    slug: "temani-app",
    title: "TEMANI APP - Ai Companion for Scam Detection",
    category: "Website",
    shortDescription: "Intelligent scam detection platform with real-time text analysis, fraud database matching, and community reporting.",
    techStack: ["Next.js", "FastAPI", "Python"],
    heroImage: "",
  },
  {
    slug: "vicore-virtual-career",
    title: "ViCore (Virtual Career Orientation for SLB & Disabled Students)",
    category: "Website",
    shortDescription: "Inclusive virtual reality vocational orientation system built for special needs schools and disabled youth empowerment.",
    techStack: ["Next.js", "Three.js", "WebXR"],
    heroImage: "",
  },
  {
    slug: "sitika-himatika",
    title: "siTika - Sistem Informasi HIMATIKA",
    category: "Mobile App",
    shortDescription: "Centralized academic community application for university student organization management and notifications.",
    techStack: ["Flutter", "Dart", "Firebase"],
    heroImage: "",
  },
];

const Portfolio = ({ projects }: { projects?: ProjectData[] }) => {
  const displayProjects = projects && projects.length > 0 ? projects.slice(0, 4) : defaultProjects;

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
          {displayProjects.map((project, idx) => {
            const techItems = (
              project.techStack?.length
                ? project.techStack
                : (project as any).tags?.map((t: any) => t.name) || []
            ).slice(0, 3);

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="folio-card"
              >
                {/* Top Editorial Meta Strip */}
                <div className="folio-card-meta">
                  <span className="folio-index">
                    {String(idx + 1).padStart(2, "0")} <span className="folio-sep">/</span> {project.category}
                  </span>
                  <span className="folio-status">
                    <span className="folio-status-dot" />
                    Live Project
                  </span>
                </div>

                {/* Viewport Frame with Minimal Chrome */}
                <div className="folio-frame">
                  <div className="folio-frame-chrome">
                    <div className="folio-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="folio-frame-url">
                      {project.slug}.dulcoon.dev
                    </span>
                  </div>
                  <div className="folio-thumb">
                    {project.heroImage ? (
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 580px"
                        className="folio-img"
                      />
                    ) : (
                      <div className="folio-thumb-placeholder" />
                    )}
                  </div>
                </div>

                {/* Body Content */}
                <div className="folio-body">
                  <div className="folio-body-content">
                    <h3 className="folio-title">{project.title}</h3>
                    {project.shortDescription && (
                      <p className="folio-desc">{project.shortDescription}</p>
                    )}
                  </div>

                  {/* Footer with Tech Stack and Action Link */}
                  <div className="folio-footer">
                    <div className="folio-tech-list">
                      {techItems.map((tech: string) => (
                        <span key={tech} className="folio-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="folio-arrow-btn" aria-hidden="true">
                      <span className="folio-arrow-text">Explore</span>
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M7 17L17 7M7 7h10v10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Projects Shortcut */}
        <div data-reveal style={{ marginTop: "48px", display: "flex", justifyContent: "center" }}>
          <Link
            href="/projects"
            className="btn btn-ghost"
            style={{
              padding: "14px 32px",
              fontSize: "0.95rem",
              gap: "10px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <span>View All Projects</span>
            <svg
              className="icon"
              viewBox="0 0 24 24"
              style={{ width: "18px", height: "18px", transition: "transform 0.25s ease" }}
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
