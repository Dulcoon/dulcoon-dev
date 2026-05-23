import React from "react";

const ServicesHero = () => (
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
        What I Offer
      </span>
      <h1
        className="font-syne text-5xl md:text-6xl font-extrabold mb-4"
        style={{ letterSpacing: "-2px" }}
      >
        Digital Solutions That{" "}
        <span style={{ color: "#a8e600" }}>Deliver Results.</span>
      </h1>
      <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#9aaa9a" }}>
        End-to-end IT services tailored for businesses that want to grow — from concept and design to deployment and support.
      </p>
    </div>
  </section>
);

export default ServicesHero;
