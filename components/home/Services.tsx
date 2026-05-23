import React from "react";
import Link from "next/link";

const serviceData = [
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    title: "Business Website",
    description: "High-conversion landing pages and corporate sites built for performance, SEO, and aesthetics.",
  },
  {
    icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
    title: "Web Application",
    description: "Scalable full-stack web apps with secure backends, REST APIs, and dynamic user experiences.",
  },
  {
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>,
    title: "Mobile App Development",
    description: "Native-feel iOS & Android apps using Flutter with smooth performance and clean UI.",
  },
  {
    icon: <><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></>,
    title: "UI/UX Design",
    description: "Modern, intuitive interfaces designed around user behavior to maximize engagement and conversions.",
  },
  {
    icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
    title: "E-Commerce Solutions",
    description: "Full online stores with product management, payment integration, and admin dashboards.",
  },
  {
    icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></>,
    title: "Maintenance & Support",
    description: "Ongoing technical support, bug fixes, and feature updates to keep your product running smoothly.",
  },
];

const Services = () => (
  <section style={{ padding: "80px 0" }}>
    <div className="max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">

        {/* Left: Heading */}
        <div>
          <span className="section-eyebrow mb-4">What I Do</span>
          <h2
            className="font-syne text-3xl md:text-4xl font-extrabold leading-tight mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Solutions that drive growth &{" "}
            <span style={{ color: "#a8e600" }}>results.</span>
          </h2>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "#9aaa9a" }}>
            End-to-end digital solutions tailored to your business — from concept and design to deployment and support.
          </p>
          <Link href="/services" className="btn-ghost">
            Explore All Services
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right: 2-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {serviceData.map(({ icon, title, description }) => (
            <div
              key={title}
              className="card-dark p-5 md:p-7 transition-all duration-250 cursor-default group hover:border-[rgba(168,230,0,0.35)] hover:-translate-y-[3px]"
              style={{ borderRadius: "12px" }}
            >
              {/* Icon box */}
              <div
                className="mb-4 flex items-center justify-center transition-colors duration-250"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  border: "1px solid rgba(168,230,0,0.2)",
                  background: "rgba(168,230,0,0.06)",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
                  {icon}
                </svg>
              </div>
              <h3 className="font-syne text-sm font-bold mb-1.5">{title}</h3>
              <p className="text-xs leading-relaxed hidden sm:block" style={{ color: "#9aaa9a" }}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Services;
