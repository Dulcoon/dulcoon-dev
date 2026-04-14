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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto flex-1 w-full">

        {/* Hero */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-3xl">
              <span className="inline-block bg-surface-container-highest/40 px-3 py-1 rounded-full text-[0.6875rem] font-bold tracking-[0.05em] text-primary uppercase border border-outline-variant/20 mb-4">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                {project.shortDescription}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag.name} className={`px-4 py-2 glass-panel rounded-full text-sm font-medium ${tag.colorClass}`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center">
            <div className={!project.demoLink ? 'cursor-not-allowed inline-block' : 'inline-block'}>
              <a
                href={project.demoLink || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all ${!project.demoLink
                    ? 'bg-surface-container-highest/40 text-on-surface-variant/40 pointer-events-none border border-outline-variant/10 select-none'
                    : 'bg-gradient-to-r from-primary to-secondary text-on-primary hover:shadow-[0_0_30px_rgba(201,191,255,0.4)] active:scale-95'
                  }`}
              >
                <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {project.demoLink ? 'rocket_launch' : 'block'}
                </span>
                {project.demoLink ? 'View Live Demo' : 'Live Demo Offline'}
              </a>
            </div>

            {!project.demoLink && (
              <div className="flex items-center gap-2 text-on-surface-variant/50 text-sm italic">
                <span className="material-symbols-outlined text-sm">info</span>
                This project is currently private or restricted.
              </div>
            )}
          </div>

          <div className="relative w-full aspect-video rounded-xl overflow-hidden glass-panel p-4 shadow-[0_0_80px_-20px_rgba(201,191,255,0.15)]">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-surface-container-low relative">
              <img alt={project.title} className="w-full h-full object-cover" src={project.heroImage} />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Overview & Impact */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
              {project.overviewText.map((text, i) => (
                <p key={i} className="text-on-surface-variant text-lg leading-relaxed mt-4 first:mt-0">{text}</p>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-xl glass-panel">
                <h3 className="text-tertiary font-bold mb-2">The Mission</h3>
                <p className="text-on-surface-variant">{project.mission}</p>
              </div>
              <div className="p-8 rounded-xl glass-panel">
                <h3 className="text-secondary font-bold mb-2">The Client</h3>
                <p className="text-on-surface-variant">{project.client}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="p-10 rounded-xl bg-gradient-to-br from-primary-container to-surface-container-highest relative overflow-hidden flex flex-col justify-center items-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/20 blur-3xl rounded-full"></div>
              <span className="text-6xl font-black text-white mb-4 tracking-tighter">{project.impactMetric.value}</span>
              <h3 className="text-xl font-bold text-on-primary-container mb-2">{project.impactMetric.label}</h3>
              <p className="text-on-primary-container/80 text-sm">{project.impactMetric.subtext}</p>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Ecosystem Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.features.map((feat) => (
              <div key={feat.title} className={`${feat.colSpan === 2 ? 'md:col-span-2' : ''} p-10 rounded-xl glass-panel flex flex-col justify-between min-h-[200px]`}>
                <span className={`material-symbols-outlined text-5xl ${feat.textColor} mb-6`} style={{ fontVariationSettings: "'FILL' 1" }}>{feat.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feat.title}</h3>
                  <p className="text-on-surface-variant max-w-md">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-24 py-12 border-y border-outline-variant/10 flex flex-col items-center">
          <h2 className="text-sm font-bold tracking-widest text-outline mb-8 uppercase">The Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xl font-bold text-white">{tech}</span>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <ProjectGallery gallery={project.gallery} projectTitle={project.title} />

        {/* Back Link */}
        <div className="flex justify-start mb-24">
          <Link href="/projects" className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors group">
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            <span className="font-bold">Back to Portfolio</span>
          </Link>
        </div>

        {/* CTA */}
        <section className="relative p-12 md:p-20 rounded-xl glass-panel overflow-hidden text-center">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-tertiary/10 blur-[100px] rounded-full pointer-events-none"></div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Want a similar system for your business?</h2>
          <p className="text-on-surface-variant text-lg max-w-2xl mx-auto mb-10">
            We specialize in building bespoke digital ecosystems for high-end brands worldwide.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-primary to-secondary text-on-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(201,191,255,0.4)] transition-all active:scale-95">
              Start Your Project
            </button>
            <button className="bg-surface-container-highest/60 text-white px-10 py-4 rounded-full font-bold text-lg border border-outline-variant/30 hover:bg-surface-container-highest transition-all active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined">chat</span>
              Contact via WhatsApp
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
