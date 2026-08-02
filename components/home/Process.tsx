"use client";

import React, { useState, useEffect, useRef } from "react";

interface Step {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  deliverables: string[];
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discover",
    subtitle: "Understanding & Strategy",
    description:
      "We dive deep into your business goals, target audience, technical constraints, and key success metrics before writing a single line of code.",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    deliverables: ["Business Goals", "Problem Analysis", "Scope Alignment"],
  },
  {
    num: "02",
    title: "Plan",
    subtitle: "Architecture & Roadmap",
    description:
      "Mapping out technical architecture, database schemas, UI wireframes, and exact project timelines to eliminate guesswork.",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    deliverables: ["Tech Stack Selection", "System Architecture", "Milestone Roadmap"],
  },
  {
    num: "03",
    title: "Design & Build",
    subtitle: "Execution & Engineering",
    description:
      "Crafting high-performance frontend interfaces paired with robust, scalable backend APIs built with clean code standards.",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6" />
        <polyline points="8,6 2,12 8,18" />
      </svg>
    ),
    deliverables: ["Pixel-Perfect UI", "Clean Codebase", "Scalable APIs"],
  },
  {
    num: "04",
    title: "Test & Deliver",
    subtitle: "Quality Assurance",
    description:
      "Rigorous cross-device testing, security auditing, and speed optimization before a smooth, zero-downtime production launch.",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22,4 12,14 9,11" />
      </svg>
    ),
    deliverables: ["Cross-Device QA", "Speed Audit", "Smooth Launch"],
  },
  {
    num: "05",
    title: "Support & Grow",
    subtitle: "Scaling & Maintenance",
    description:
      "Post-launch monitoring, proactive security updates, and continuous optimization to ensure your digital product keeps thriving.",
    icon: (
      <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
        <polyline points="17,6 23,6 23,12" />
      </svg>
    ),
    deliverables: ["Active Monitoring", "Regular Updates", "Iterative Scaling"],
  },
];

const Process = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // Distance scrolled into this section (0 to 1)
      const scrolled = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      setScrollProgress(rawProgress);

      // Map progress (0 to 1) to step index (0 to 4)
      const calculatedIndex = Math.min(
        steps.length - 1,
        Math.floor(rawProgress * steps.length)
      );
      setActiveIdx(calculatedIndex);
    };

    if (containerRef.current) {
      containerRef.current.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("in-view"));
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleStageJump = (idx: number) => {
    setActiveIdx(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const totalScrollable = rect.height - window.innerHeight;
    const targetProgress = (idx + 0.2) / steps.length;
    const targetScrollY = window.scrollY + rect.top + targetProgress * totalScrollable;

    window.scrollTo({ top: targetScrollY, behavior: "smooth" });
  };

  const currentStep = steps[activeIdx];

  return (
    <section className="process-pin-container" ref={containerRef} id="process">
      <div className="process-sticky-wrapper">
        <div className="wrap">
          {/* Section Header */}
          <div className="section-head" style={{ textAlign: "center", marginBottom: "28px" }} data-reveal>
            <span className="section-tag">How It Works</span>
            <h2 className="section-title">A process built for clarity.</h2>
            <p className="section-sub">
              Five structured stages from initial vision to post-launch growth — scroll down to progress through the pipeline.
            </p>
          </div>

          {/* Master Interactive Showcase Canvas */}
          <div className="process-master-card" data-reveal>
            {/* Top Stepper Track with 100% Realtime Progress Line */}
            <div className="process-top-tracker">
              <div className="process-tracker-line">
                <div
                  className="process-tracker-fill"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>

              <div className="process-tracker-nodes">
                {steps.map((step, idx) => {
                  const nodeThreshold = idx / (steps.length - 1);
                  const isActive = idx === activeIdx;
                  const isPassed = scrollProgress >= nodeThreshold || idx < activeIdx;

                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => handleStageJump(idx)}
                      className={`process-track-node ${isActive ? "active" : ""} ${isPassed ? "passed" : ""}`}
                    >
                      <div className="process-track-circle">
                        <span>{step.num}</span>
                        {isActive && <span className="process-track-ping" />}
                      </div>
                      <span className="process-track-title">{step.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Stage Showcase Main Content */}
            <div className="process-showcase-body" key={activeIdx}>
              <div className="process-showcase-top">
                <div className="process-showcase-badge">
                  <span className="process-pulse-dot" />
                  STAGE {currentStep.num} OF 05
                </div>

                {/* Step indicator pills */}
                <div className="process-step-pills">
                  {steps.map((s, i) => (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => handleStageJump(i)}
                      className={`process-step-pill ${i === activeIdx ? "active" : ""}`}
                      aria-label={`Go to stage ${s.num}`}
                    />
                  ))}
                </div>
              </div>

              <div className="process-showcase-main">
                <div className="process-showcase-icon-box">
                  {currentStep.icon}
                </div>

                <div className="process-showcase-info">
                  <span className="process-showcase-sub">{currentStep.subtitle}</span>
                  <h3 className="process-showcase-title">
                    {currentStep.num}. {currentStep.title}
                  </h3>
                  <p className="process-showcase-desc">{currentStep.description}</p>

                  <div className="process-showcase-deliverables">
                    <span className="process-deliverables-heading">Key Deliverables:</span>
                    <div className="process-deliverables-pills">
                      {currentStep.deliverables.map((item) => (
                        <span key={item} className="process-deliverable-chip">
                          <svg className="icon" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Realtime Progress Footbar */}
            <div className="process-footbar">
              <span className="process-footbar-text">
                SCROLL TO CONTINUE ({activeIdx + 1}/5)
              </span>
              <div className="process-footbar-bar">
                <div
                  className="process-footbar-fill"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
