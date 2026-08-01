import React from "react";

const ProjectsHero = () => (
  <section className="section" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
    <div className="wrap">
      <div className="section-head" data-reveal style={{ maxWidth: "720px", marginBottom: "32px" }}>
        <span className="section-tag">Case Studies</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          <span className="text-dim">Projects That</span> <span className="accent-text">Deliver Impact.</span>
        </h1>
        <p className="section-sub">
          A curated collection of real client work — from concept to launch — built with precision and purpose.
        </p>
      </div>
    </div>
  </section>
);

export default ProjectsHero;
