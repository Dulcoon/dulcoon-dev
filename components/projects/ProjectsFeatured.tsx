import React from "react";
import Link from "next/link";
import type { ProjectData } from "@/lib/projects";

const ProjectsFeatured = ({ projects }: { projects: ProjectData[] }) => {
  const featured = projects[0];
  if (!featured) return null;

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div
          data-reveal
          style={{
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr",
            background: "var(--bg-soft)",
          }}
          className="featured-project-card"
        >
          {/* Image */}
          <div
            style={{
              position: "relative",
              minHeight: "320px",
              overflow: "hidden",
              background: "var(--surface-2)",
            }}
          >
            {featured.heroImage && (
              <img
                alt={featured.title}
                src={featured.heroImage}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.8,
                  transition: "transform 0.7s var(--ease)",
                }}
                className="featured-img"
              />
            )}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, transparent 40%, var(--bg-soft) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div style={{ padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
            <span className="section-tag">Featured Case Study</span>
            <h2 className="section-title">{featured.title}</h2>
            <p className="section-sub">
              {featured.overviewText?.[0]?.slice(0, 200)}...
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {featured.tags.map((tag) => (
                <span key={tag.name} className="badge">
                  {tag.name}
                </span>
              ))}
            </div>

            <div style={{ marginTop: "8px" }}>
              <Link href={`/projects/${featured.slug}`} className="btn btn-primary magnetic">
                View Case Study
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFeatured;
