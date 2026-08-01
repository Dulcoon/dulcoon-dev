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
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
        >
          {filtered.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.slug}
              className="folio-card"
            >
              {/* Thumb */}
              <div className="folio-thumb">
                {project.heroImage && (
                  <img
                    alt={project.title}
                    src={project.heroImage}
                    className="w-full h-full object-cover"
                    style={{ opacity: 0.85, transition: "transform 0.7s var(--ease)", width: "100%", height: "100%" }}
                  />
                )}
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s var(--ease)",
                    zIndex: 2,
                  }}
                  className="folio-hover-overlay"
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.82rem",
                      padding: "8px 18px",
                      borderRadius: "100px",
                      background: "var(--accent)",
                      color: "var(--accent-ink)",
                    }}
                  >
                    View Project
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="folio-body">
                <div>
                  <span className="folio-tag">{project.category}</span>
                  <h3 style={{ marginTop: "6px" }}>{project.title}</h3>
                  {project.shortDescription && (
                    <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "6px" }}>
                      {project.shortDescription}
                    </p>
                  )}
                  {/* Tech tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag.name}
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.65rem",
                            padding: "3px 8px",
                            borderRadius: "100px",
                            border: "1px solid var(--border)",
                            color: "var(--text-faint)",
                          }}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
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
