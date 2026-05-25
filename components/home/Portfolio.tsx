"use client";

import React, { useRef } from "react";
import Link from "next/link";
import type { ProjectData } from "@/lib/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Portfolio = ({ projects }: { projects: ProjectData[] }) => {
  const containerRef = useRef<HTMLElement>(null);
  const recentProjects = projects.slice(0, 4);

  useGSAP(() => {
    const images = gsap.utils.toArray(".parallax-image") as HTMLImageElement[];
    
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: img.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, { scope: containerRef });

  if (recentProjects.length === 0) return null;

  return (
    <section ref={containerRef} style={{ padding: "100px 0" }}>
      <div className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <span className="section-eyebrow mb-3">Portfolio</span>
            <h2
              className="font-syne text-4xl font-extrabold"
              style={{ letterSpacing: "-1px" }}
            >
              Recent Projects
            </h2>
            <p className="text-sm mt-2" style={{ color: "#9aaa9a" }}>
              A showcase of technical excellence and creative design.
            </p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-bold transition-colors duration-200 underline underline-offset-4"
            style={{ color: "#a8e600" }}
          >
            View All Case Studies →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-12 gap-5">
          {recentProjects.map((project, index) => {
            const isLarge = index === 0;
            const isMedium = index === 3;
            const isSmall = index === 1 || index === 2;

            let colSpan = "md:col-span-4";
            let aspect = "";
            if (isLarge) { colSpan = "md:col-span-8"; aspect = "aspect-[16/9]"; }
            else if (isMedium) { colSpan = "md:col-span-8"; aspect = "aspect-[21/9]"; }

            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className={`${colSpan} group relative rounded-xl overflow-hidden block`}
                style={{ border: "1px solid #222822", background: "#141714" }}
              >
                {/* Parallax Image Wrapper */}
                <div className="w-full h-full overflow-hidden absolute inset-0">
                  <img
                    className="parallax-image w-full h-full object-cover transition-transform duration-700"
                    style={{ opacity: 0.65, scale: 1.15 }}
                    alt={project.title}
                    src={project.heroImage}
                  />
                </div>

                {/* Always-visible overlay */}
                <div
                  className="relative inset-0 flex flex-col justify-end h-full z-10 transition-colors duration-500 group-hover:bg-black/20"
                  style={{
                    background: "linear-gradient(to top, rgba(11,13,11,0.92) 0%, rgba(11,13,11,0.25) 50%, transparent 100%)",
                    padding: isSmall ? "20px" : "28px",
                    minHeight: isSmall ? "280px" : "400px"
                  }}
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag.name}
                        className="px-2.5 py-1 text-xs rounded-full font-medium"
                        style={{ background: "rgba(168,230,0,0.1)", border: "1px solid rgba(168,230,0,0.2)", color: "#a8e600" }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h4
                    className={`font-syne font-bold mb-2 text-white ${isSmall ? "text-lg" : "text-2xl md:text-3xl"}`}
                  >
                    {project.title}
                  </h4>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-sm font-bold transition-colors duration-300"
                    style={{ color: "rgba(168,230,0,0.6)" }}
                  >
                    View Case Study
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
