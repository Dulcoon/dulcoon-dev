"use client";

import React from "react";

const testimonials = [
  {
    quote:
      "Our booking platform launched on time and hasn't had a single hiccup since. Communication throughout was clear and direct.",
    name: "Alex Rivers",
    role: "CEO, LuxStay Bali",
    initials: "AR",
  },
  {
    quote:
      "The codebase we inherited is genuinely clean. Our internal team was able to extend it without any friction.",
    name: "Sarah Jenkins",
    role: "CTO, CloudScale",
    initials: "SJ",
  },
  {
    quote:
      "From the first call it was clear this wasn't a template job. Every screen was thought through for our actual users.",
    name: "Marco Rossi",
    role: "Founder, ArtDirect",
    initials: "MR",
  },
];

const StarIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head" data-reveal>
          <span className="section-tag">Client Reviews</span>
          <h2 className="section-title">What clients say.</h2>
        </div>

        <div className="test-grid" data-reveal>
          {testimonials.map((t, idx) => (
            <div key={idx} className="test-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p>&ldquo;{t.quote}&rdquo;</p>
              <div className="test-person">
                <div className="avatar">{t.initials}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
