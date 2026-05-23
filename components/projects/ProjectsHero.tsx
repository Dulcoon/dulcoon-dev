import React from "react";

const ProjectsHero = () => (
  <section
    className="relative overflow-hidden text-center"
    style={{
      paddingTop: "120px",
      paddingBottom: "100px",
    }}
  >
    <div className="relative z-10 max-w-3xl mx-auto px-6">
      <span
        className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
        style={{ color: "#a8e600", letterSpacing: "2px" }}
      >
        Case Studies
      </span>
      <h1
        className="font-syne text-5xl md:text-6xl font-extrabold mb-4"
        style={{ letterSpacing: "-2px" }}
      >
        Projects That{" "}
        <span style={{ color: "#a8e600" }}>Deliver Impact.</span>
      </h1>
      <p
        className="text-base md:text-lg leading-relaxed"
        style={{ color: "#9aaa9a" }}
      >
        A curated collection of real client work — from concept to launch — built with precision and purpose.
      </p>
    </div>
  </section>
);

export default ProjectsHero;
