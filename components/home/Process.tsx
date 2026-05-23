"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "1",
    title: "Discover",
    description: "I listen to your business goals, challenges, and target audience to understand what you truly need.",
    icon: <><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></>,
  },
  {
    num: "2",
    title: "Plan",
    description: "Together we define the scope, tech stack, timeline, and a clear roadmap before a single line of code is written.",
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
  },
  {
    num: "3",
    title: "Design & Build",
    description: "I design clean interfaces and build scalable, secure, and high-performance solutions with precision.",
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
  },
  {
    num: "4",
    title: "Test & Deliver",
    description: "Thorough QA testing across devices before a smooth, on-time deployment. No surprises.",
    icon: <><polyline points="20 6 9 17 4 12"/></>,
  },
  {
    num: "5",
    title: "Support & Grow",
    description: "Post-launch support, feature improvements, and direct access to me — not a ticket system.",
    icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
  },
];

const Process = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Text Mask Reveal (Apple Style)
    tl.from(".reveal-text", {
      y: "120%", // Starts below the clipping mask
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.1,
    });

    // Stagger in the steps
    tl.from(".process-step", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    }, "-=0.8"); // Start earlier to overlap smoothly
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden"
      style={{
        padding: "120px 0",
      }}
    >
      <div className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24 text-center">
        {/* Eyebrow - Overflow hidden wrapper for mask reveal */}
        <div style={{ overflow: "hidden", display: "inline-block" }} className="mb-3">
          <span className="section-eyebrow reveal-text inline-block">My Workflow</span>
        </div>
        
        {/* Header - Overflow hidden wrapper */}
        <div style={{ overflow: "hidden", paddingBottom: "10px" }} className="mb-16">
          <h2
            className="font-syne text-4xl md:text-5xl font-extrabold reveal-text"
            style={{ letterSpacing: "-1.5px" }}
          >
            How I Work
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-0 md:gap-0">
          {steps.map((step, idx) => (
            <div key={step.num} className="process-step flex-1 text-center relative px-4 mb-12 md:mb-0">
              {/* Arrow connector */}
              {idx < steps.length - 1 && (
                <div
                  className="hidden md:block absolute text-xl"
                  style={{ top: "28px", right: "-12px", color: "#6a7a6a", transform: "translateY(-50%)", fontSize: "18px" }}
                >
                  →
                </div>
              )}

              {/* Icon circle */}
              <div className="relative inline-flex items-center justify-center mb-4">
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    border: "1.5px solid rgba(168,230,0,0.3)",
                    background: "rgba(168,230,0,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
                    {step.icon}
                  </svg>
                </div>
                {/* Step number badge */}
                <span
                  className="absolute font-bold flex items-center justify-center"
                  style={{
                    top: "-4px",
                    right: "-4px",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: "#111411",
                    border: "1px solid rgba(168,230,0,0.3)",
                    fontSize: "9px",
                    color: "#a8e600",
                  }}
                >
                  {step.num}
                </span>
              </div>

              <h4 className="font-syne text-base font-bold mb-2">{step.title}</h4>
              <p
                className="text-xs leading-relaxed mx-auto"
                style={{ color: "#9aaa9a", maxWidth: "160px" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
