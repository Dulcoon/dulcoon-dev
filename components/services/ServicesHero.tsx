import React from "react";

const ServicesHero = () => (
  <section className="section" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
    <div className="wrap">
      <div className="section-head" data-reveal style={{ maxWidth: "720px", marginBottom: "32px" }}>
        <span className="section-tag">What I Offer</span>
        <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          <span className="text-dim">Digital Solutions That</span> <span className="accent-text">Deliver Results.</span>
        </h1>
        <p className="section-sub">
          End-to-end IT services tailored for businesses that want to grow — from concept and design to deployment and support.
        </p>
      </div>
    </div>
  </section>
);

export default ServicesHero;
