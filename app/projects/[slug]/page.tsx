import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectGallery from '@/components/projects/ProjectGallery';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return notFound();

  const whatsappUrl = `https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20serupa%20untuk%20proyek%20${encodeURIComponent(project.title)}.`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24" style={{ paddingTop: "100px", paddingBottom: "80px" }}>

        {/* ── Hero ── */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div className="max-w-3xl">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                style={{ background: "rgba(168,230,0,0.1)", border: "1px solid rgba(168,230,0,0.2)", color: "#a8e600" }}
              >
                {project.category}
              </span>
              <h1
                className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                style={{ letterSpacing: "-1px" }}
              >
                {project.title}
              </h1>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "#9aaa9a" }}>
                {project.shortDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className="px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{ background: "rgba(168,230,0,0.08)", border: "1px solid rgba(168,230,0,0.18)", color: "#a8e600" }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Demo button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
            {project.demoLink ? (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "13px 28px" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>
                </svg>
                View Live Demo
              </a>
            ) : (
              <div
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid #222822", color: "#6a7a6a" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                Demo Offline (Private Project)
              </div>
            )}
          </div>

          {/* Hero image */}
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{ border: "1px solid #222822", aspectRatio: "16/9" }}
          >
            <img
              alt={project.title}
              className="w-full h-full object-cover"
              src={project.heroImage}
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(11,13,11,0.5) 0%, transparent 50%)" }}
            />
          </div>
        </section>

        {/* ── Overview & Impact ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <h2 className="font-syne text-2xl font-bold" style={{ letterSpacing: "-0.5px" }}>Overview</h2>
            {project.overviewText.map((text, i) => (
              <p key={i} className="text-base leading-relaxed" style={{ color: "#9aaa9a" }}>{text}</p>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="rounded-xl p-6" style={{ background: "#141714", border: "1px solid #222822" }}>
                <h3 className="font-syne text-sm font-bold mb-2" style={{ color: "#a8e600" }}>The Mission</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9aaa9a" }}>{project.mission}</p>
              </div>
              <div className="rounded-xl p-6" style={{ background: "#141714", border: "1px solid #222822" }}>
                <h3 className="font-syne text-sm font-bold mb-2" style={{ color: "#a8e600" }}>The Client</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9aaa9a" }}>{project.client}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="rounded-xl p-8 relative overflow-hidden flex flex-col justify-center items-center text-center"
              style={{ background: "#111411", border: "1px solid rgba(168,230,0,0.2)", minHeight: "180px" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(168,230,0,0.06) 0%, transparent 70%)" }}
              />
              <span
                className="font-syne font-extrabold mb-2 relative z-10"
                style={{ fontSize: "56px", color: "#a8e600", lineHeight: 1 }}
              >
                {project.impactMetric.value}
              </span>
              <h3 className="font-syne text-base font-bold mb-1 relative z-10">{project.impactMetric.label}</h3>
              <p className="text-xs relative z-10" style={{ color: "#9aaa9a" }}>{project.impactMetric.subtext}</p>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="mb-20">
          <h2 className="font-syne text-2xl font-bold mb-8 text-center" style={{ letterSpacing: "-0.5px" }}>Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.features.map((feat) => (
              <div
                key={feat.title}
                className={`${feat.colSpan === 2 ? 'md:col-span-2' : ''} p-8 rounded-xl flex flex-col gap-4`}
                style={{ background: "#141714", border: "1px solid #222822" }}
              >
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ color: "#a8e600", fontVariationSettings: "'FILL' 1" }}
                >
                  {feat.icon}
                </span>
                <div>
                  <h3 className="font-syne text-lg font-bold mb-2">{feat.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#9aaa9a" }}>{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Tech Stack ── */}
        <section
          className="mb-20 py-10 flex flex-col items-center"
          style={{ borderTop: "1px solid #222822", borderBottom: "1px solid #222822" }}
        >
          <h2 className="text-xs font-bold tracking-widest uppercase mb-7" style={{ color: "#6a7a6a" }}>
            Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{ background: "#141714", border: "1px solid #222822", color: "#9aaa9a" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── Gallery ── */}
        <ProjectGallery gallery={project.gallery} projectTitle={project.title} />

        {/* ── Back link ── */}
        <div className="flex justify-start mb-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 text-[#9aaa9a] hover:text-[#a8e600]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Portfolio
          </Link>
        </div>

        {/* ── Bottom CTA ── */}
        <section
          className="relative overflow-hidden rounded-xl text-center px-6 py-12 md:px-12 md:py-14"
          style={{
            background: "#111411",
            border: "1px solid #222822",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 50% 60% at 50% 0%, rgba(168,230,0,0.05) 0%, transparent 70%)" }}
          />
          <h2
            className="font-syne text-3xl md:text-4xl font-extrabold mb-3 relative z-10"
            style={{ letterSpacing: "-1px" }}
          >
            Want a similar solution for your business?
          </h2>
          <p className="text-sm mb-8 relative z-10" style={{ color: "#9aaa9a" }}>
            I build bespoke digital products tailored to your specific business goals and audience.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "14px 32px", fontSize: "15px" }}
            >
              Start Your Project
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <Link href="/projects" className="btn-ghost" style={{ padding: "14px 28px" }}>
              View More Projects
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
