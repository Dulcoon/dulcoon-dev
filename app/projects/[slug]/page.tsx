import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  const whatsappUrl = `https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20serupa%20untuk%20proyek%20${encodeURIComponent(project.title)}.`;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: "110px", paddingBottom: "100px" }}>

        {/* ── Hero Section ── */}
        <section className="section wrap project-detail-hero">
          {/* Breadcrumb */}
          <div style={{ marginBottom: "24px" }} data-reveal>
            <Link
              href="/projects"
              className="btn-ghost"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                fontSize: "0.82rem",
                fontFamily: "var(--font-mono)",
              }}
            >
              <svg className="icon" viewBox="0 0 24 24" style={{ width: "14px", height: "14px" }}>
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to All Projects
            </Link>
          </div>

          <div className="project-detail-head" style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "800px" }} data-reveal>
            {/* Category tag */}
            <span className="badge" style={{ alignSelf: "flex-start" }}>
              {project.category}
            </span>

            <h1 className="project-detail-title">
              {project.title}
            </h1>

            <p className="project-detail-sub">
              {project.shortDescription}
            </p>

            {/* Tags row */}
            <div className="project-detail-tags" style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}>
              {project.tags.map((tag) => (
                <span key={tag.name} className="badge">
                  {tag.name}
                </span>
              ))}
            </div>

            {/* Demo & Action buttons */}
            <div className="project-detail-actions">
              {project.demoLink ? (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary magnetic"
                >
                  <svg className="icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
                  </svg>
                  View Live Demo
                </a>
              ) : (
                <span
                  className="btn btn-ghost"
                  style={{ color: "var(--text-faint)", cursor: "default" }}
                >
                  <svg className="icon" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0110 0v4" />
                  </svg>
                  Private Repository
                </span>
              )}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost magnetic"
              >
                Discuss Similar Project →
              </a>
            </div>
          </div>

          {/* Hero Banner Image */}
          <div
            className="project-detail-banner"
            data-reveal
            style={{
              marginTop: "48px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              aspectRatio: "16/9",
              position: "relative",
              background: "var(--surface-2)",
              boxShadow: "var(--shadow)",
            }}
          >
            <img
              alt={project.title}
              src={project.heroImage}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, var(--bg-soft) 0%, transparent 60%)",
                opacity: 0.4,
              }}
            />
          </div>
        </section>

        {/* ── Overview & Impact Grid ── */}
        <section className="section wrap project-overview-grid" style={{ paddingTop: "20px" }}>
          {/* Left: Overview text & metadata */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }} data-reveal>
            <span className="section-tag">Project Overview</span>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {project.overviewText.map((text, i) => (
                <p
                  key={i}
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "1rem",
                    lineHeight: 1.8,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>

            {/* Mission & Client info cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <div
                style={{
                  background: "var(--bg-soft)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span className="section-tag" style={{ marginBottom: 0 }}>The Mission</span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {project.mission}
                </p>
              </div>

              <div
                style={{
                  background: "var(--bg-soft)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span className="section-tag" style={{ marginBottom: 0 }}>The Client</span>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {project.client}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Impact metric card */}
          <div data-reveal>
            <div
              className="project-impact-card"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "48px 32px",
                textAlign: "center",
                background: "var(--bg-soft)",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(ellipse 80% 80% at 50% 50%, var(--accent-soft) 0%, transparent 70%)",
                }}
              />
              <span className="section-tag" style={{ marginBottom: 0, position: "relative" }}>Key Result</span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3.5rem, 8vw, 5rem)",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                  position: "relative",
                  letterSpacing: "-0.03em",
                }}
              >
                {project.impactMetric.value}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  position: "relative",
                  color: "var(--text)",
                }}
              >
                {project.impactMetric.label}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  position: "relative",
                  maxWidth: "260px",
                  lineHeight: 1.5,
                }}
              >
                {project.impactMetric.subtext}
              </p>
            </div>
          </div>
        </section>

        {/* ── Core Features ── */}
        <section className="section" style={{ paddingTop: "20px" }}>
          <div className="wrap">
            <div className="section-head" data-reveal style={{ textAlign: "center", marginBottom: "40px" }}>
              <span className="section-tag">Key Features</span>
              <h2 className="section-title">Engineered For Performance</h2>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
              }}
              data-reveal
            >
              {project.features.map((feat) => (
                <div
                  key={feat.title}
                  style={{
                    flex: "1 1 300px",
                    maxWidth: "360px",
                    background: "var(--bg-soft)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "32px 28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    transition: "border-color 0.3s var(--ease)",
                  }}
                  className="test-card"
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "var(--accent-soft)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent)",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        fontSize: "26px",
                        color: "var(--accent)",
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      {feat.icon}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--text)",
                    }}
                  >
                    {feat.title}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.88rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tech Stack Section (Refactored for Clean Design) ── */}
        <section className="section" style={{ paddingTop: "20px", paddingBottom: "40px" }}>
          <div className="wrap">
            <div
              data-reveal
              style={{
                background: "var(--bg-soft)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "40px 32px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                <span className="section-tag" style={{ marginBottom: 0 }}>Infrastructure & Tools</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--text)" }}>
                  Tech Stack Utilized
                </h2>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", maxWidth: "700px" }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.82rem",
                      padding: "8px 18px",
                      borderRadius: "100px",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      color: "var(--text)",
                      fontWeight: 500,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--accent)",
                      }}
                    />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <ProjectGallery gallery={project.gallery} projectTitle={project.title} />

        {/* ── Bottom CTA ── */}
        <section className="section" style={{ paddingTop: "20px" }}>
          <div className="wrap">
            <div className="cta-box" data-reveal>
              <h2>Want a similar solution for your business?</h2>
              <p style={{ color: "var(--text-muted)", marginBottom: "32px", maxWidth: "520px", margin: "0 auto 32px", lineHeight: 1.6 }}>
                I build bespoke digital products tailored to your specific business goals, performance targets, and audience.
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary magnetic"
                >
                  Start Your Project
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <Link href="/projects" className="btn btn-ghost">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
