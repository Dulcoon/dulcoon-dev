"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { ProjectData } from "@/lib/projects";

const FILTERS = ["All", "Website", "Mobile App", "System"];

const ProjectsGrid = ({ projects }: { projects: ProjectData[] }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.filterTag === activeFilter);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        {/* Header + Filters */}
        <div
          data-reveal
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginBottom: "40px",
          }}
          className="projects-header"
        >
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
            <div>
              <span className="section-tag">All Projects</span>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Browse Portfolio</h2>
            </div>

            {/* Filter pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={activeFilter === f ? "btn btn-primary" : "btn btn-ghost"}
                  style={{ padding: "8px 18px", fontSize: "0.78rem", fontFamily: "var(--font-mono)" }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          className="folio-grid"
          data-reveal
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))" }}
        >
          {filtered.map((project, idx) => {
            const techItems = (
              project.techStack?.length
                ? project.techStack
                : project.tags?.map((t) => t.name) || []
            ).slice(0, 3);

            return (
              <Link
                href={`/projects/${project.slug}`}
                key={project.slug}
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
                      <img
                        alt={project.title}
                        src={project.heroImage}
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
                      {techItems.map((tech) => (
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

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>No projects found for &ldquo;{activeFilter}&rdquo;</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
