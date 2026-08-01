"use client";

import React from "react";

const serviceData = [
  {
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
      </svg>
    ),
    title: "Business Website",
    description: "Landing pages and corporate sites built for speed, SEO, and conversion.",
  },
  {
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
      </svg>
    ),
    title: "Web Application",
    description: "Full-stack systems with secure backends and well-documented REST APIs.",
  },
  {
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M11 18h2" />
      </svg>
    ),
    title: "Mobile App Development",
    description: "Native-feel iOS & Android apps built with Flutter with high performance.",
  },
  {
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <circle cx="9" cy="10" r="1" />
        <circle cx="14" cy="8.5" r="1" />
        <circle cx="16.5" cy="12.5" r="1" />
        <path d="M12 21a2 2 0 010-4h1a2 2 0 002-2 2 2 0 012-2h1" />
      </svg>
    ),
    title: "UI/UX Design",
    description: "Modern interfaces designed around clarity, user engagement, and conversion.",
  },
  {
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.6a2 2 0 002-1.6L23 6H6" />
      </svg>
    ),
    title: "E-Commerce Solutions",
    description: "Online stores with inventory, payments, and analytics built directly in.",
  },
  {
    icon: (
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M14.7 6.3a4 4 0 01-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 015.4-5.4l-3 3-3-3z" />
      </svg>
    ),
    title: "Maintenance & Support",
    description: "Ongoing help after launch, direct access without ticketing hurdles.",
  },
];

const Services = () => (
  <section className="section" id="services">
    <div className="wrap">
      <div className="section-head" data-reveal>
        <span className="section-tag">What I Do</span>
        <h2 className="section-title">Solutions that drive growth &amp; results.</h2>
        <p className="section-sub">
          Six focused capabilities covering everything from a landing page to a full commerce platform.
        </p>
      </div>

      <div className="services-grid" data-reveal>
        {serviceData.map(({ icon, title, description }) => (
          <div key={title} className="service-card">
            <div className="service-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
