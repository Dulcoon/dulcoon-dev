"use client";

import React from "react";

/* ===== 01. BUSINESS WEBSITE + MOBILE — overlapping composition ===== */
const WebsiteMockup = () => (
  <div className="svc-scene">
    {/* Floating badge: top-left */}
    <div className="svc-badge svc-badge--tl">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
        <path d="M20 6L9 17l-5-5" />
      </svg>
      Build passing
    </div>

    {/* Browser window — behind */}
    <div className="svc-browser">
      <div className="svc-browser-bar">
        <span className="svc-dot" style={{ background: "#ff5f56" }} />
        <span className="svc-dot" style={{ background: "#ffbd2e" }} />
        <span className="svc-dot" style={{ background: "#27c93f" }} />
        <div className="svc-browser-url">dulcoon.dev</div>
      </div>
      <div className="svc-browser-body">
        <div className="svc-sk svc-sk--w60 svc-sk--h8 svc-sk--accent" />
        <div className="svc-sk svc-sk--w90 svc-sk--h5" />
        <div className="svc-sk svc-sk--w75 svc-sk--h5" />
        <div className="svc-sk svc-sk--w85 svc-sk--h5" />
        <div className="svc-browser-card" />
      </div>
    </div>

    {/* Phone — overlapping front-right */}
    <div className="svc-phone">
      <div className="svc-phone-notch" />
      <div className="svc-sk svc-sk--w55 svc-sk--h5 svc-sk--mx" />
      <div className="svc-sk svc-sk--w40 svc-sk--h5 svc-sk--mx" />
      <div className="svc-phone-card" />
      <div className="svc-phone-btn" />
    </div>

    {/* Floating badge: bottom-left */}
    <div className="svc-badge svc-badge--bl">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
      99 Perf. Score
    </div>
  </div>
);

/* ===== 02. MOBILE APP — phone front-center with floating stats ===== */
const MobileAppMockup = () => (
  <div className="svc-scene svc-scene--center">
    {/* Floating card: top-right */}
    <div className="svc-float-card svc-float-card--tr">
      <div className="svc-float-label">Active Users</div>
      <div className="svc-float-val">48,290 <span className="svc-float-up">+14.2%</span></div>
      <div className="svc-mini-bars">
        <span style={{ height: "40%" }} />
        <span style={{ height: "65%" }} />
        <span style={{ height: "45%" }} />
        <span style={{ height: "90%", background: "var(--accent)" }} />
        <span style={{ height: "70%" }} />
      </div>
    </div>

    {/* Center phone */}
    <div className="svc-phone svc-phone--lg">
      <div className="svc-phone-notch" />
      <div className="svc-phone-header">
        <div className="svc-avatar" />
        <div>
          <div className="svc-sk svc-sk--w50 svc-sk--h5" />
          <div className="svc-sk svc-sk--w35 svc-sk--h4" style={{ marginTop: 4 }} />
        </div>
      </div>
      <div className="svc-phone-card" style={{ height: 70 }} />
      <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
        <div className="svc-phone-chip">⚡ Fast</div>
        <div className="svc-phone-chip">🔒 Auth</div>
        <div className="svc-phone-chip">📲 Push</div>
      </div>
      <div className="svc-phone-btn" />
    </div>

    {/* Floating toast: bottom-right */}
    <div className="svc-toast">
      <span>✨</span>
      <div>
        <div className="svc-toast-title">Push Sent</div>
        <div className="svc-toast-sub">60fps Smooth</div>
      </div>
    </div>
  </div>
);

/* ===== 03. E-COMMERCE — dashboard with revenue + product row ===== */
const ECommerceMockup = () => (
  <div className="svc-scene">
    {/* Floating badge: top-left */}
    <div className="svc-badge svc-badge--tl">
      <span className="svc-live-dot" />
      Live Dashboard
    </div>

    {/* Main dashboard card */}
    <div className="svc-dashboard">
      <div className="svc-dashboard-header">
        <div>
          <div className="svc-sk svc-sk--w40 svc-sk--h5" />
          <div className="svc-sk svc-sk--w70 svc-sk--h10 svc-sk--accent" style={{ marginTop: 6 }} />
        </div>
        <div className="svc-dashboard-badge">Stripe</div>
      </div>

      <div className="svc-dashboard-divider" />

      {/* Product row */}
      <div className="svc-product-row">
        <div className="svc-product-thumb">🛍️</div>
        <div style={{ flex: 1 }}>
          <div className="svc-sk svc-sk--w70 svc-sk--h5" />
          <div className="svc-sk svc-sk--w50 svc-sk--h4" style={{ marginTop: 5 }} />
        </div>
        <div className="svc-paid-tag">Paid ✓</div>
      </div>
      <div className="svc-product-row">
        <div className="svc-product-thumb">📦</div>
        <div style={{ flex: 1 }}>
          <div className="svc-sk svc-sk--w55 svc-sk--h5" />
          <div className="svc-sk svc-sk--w40 svc-sk--h4" style={{ marginTop: 5 }} />
        </div>
        <div className="svc-paid-tag" style={{ opacity: 0.5 }}>Pending</div>
      </div>
    </div>

    {/* Floating metric bottom-right */}
    <div className="svc-badge svc-badge--br">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
      +32% Revenue
    </div>
  </div>
);

/* ===== 04. BOOKING — calendar grid with time slots ===== */
const BookingMockup = () => (
  <div className="svc-scene svc-scene--center">
    {/* Floating badge top-right */}
    <div className="svc-badge svc-badge--tr">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
      Auto Calendar
    </div>

    {/* Calendar card */}
    <div className="svc-calendar">
      <div className="svc-cal-header">
        <span className="svc-cal-month">August 2026</span>
        <div style={{ display: "flex", gap: 4 }}>
          <div className="svc-cal-nav">‹</div>
          <div className="svc-cal-nav">›</div>
        </div>
      </div>

      {/* Day labels */}
      <div className="svc-cal-days">
        {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => (
          <span key={d} className="svc-cal-dayname">{d}</span>
        ))}
      </div>

      {/* Date grid */}
      <div className="svc-cal-grid">
        {[...Array(31)].map((_, i) => (
          <span
            key={i}
            className={`svc-cal-cell${i + 1 === 14 ? " active" : ""}${[5, 6, 12, 13, 19, 20, 26, 27].includes(i) ? " dim" : ""}`}
          >
            {i + 1}
          </span>
        ))}
      </div>

      {/* Time slots */}
      <div className="svc-cal-slots">
        <span className="svc-slot">09:00 AM</span>
        <span className="svc-slot active">01:30 PM</span>
        <span className="svc-slot">04:00 PM</span>
      </div>
    </div>

    {/* Confirm badge bottom */}
    <div className="svc-toast svc-toast--success">
      <span>✅</span>
      <div>
        <div className="svc-toast-title">Slot Confirmed</div>
        <div className="svc-toast-sub">Email sent automatically</div>
      </div>
    </div>
  </div>
);

/* ===== SERVICE DATA ===== */
const serviceDetails = [
  {
    visual: <WebsiteMockup />,
    title: "Business Website",
    description:
      "High-performance, SEO-optimized websites designed to convert visitors into customers. We blend clean aesthetics with technical precision.",
    features: ["Speed Focused", "SEO Optimized", "Custom CMS", "Fully Responsive"],
    reverse: false,
  },
  {
    visual: <MobileAppMockup />,
    title: "Mobile App Development",
    description:
      "Native-feel iOS and Android applications built with Flutter. Smooth performance, beautiful UI, and real-time backend integration.",
    features: [
      "Cross-platform (iOS & Android)",
      "60fps Animations",
      "Firebase / API Integration",
      "Push Notifications",
    ],
    reverse: true,
  },
  {
    visual: <ECommerceMockup />,
    title: "E-Commerce Solutions",
    description:
      "Scalable online stores that provide a frictionless shopping experience. Inventory management, payments, and admin dashboard included.",
    features: [
      "Inventory Management",
      "Payment Integration (Stripe, Midtrans)",
      "Admin Dashboard",
      "Deep Analytics",
    ],
    reverse: false,
  },
  {
    visual: <BookingMockup />,
    title: "Booking & Reservation System",
    description:
      "Automated scheduling built for service businesses, villa rentals, and appointment-based companies. Real-time availability and secure payment.",
    features: [
      "Real-time Availability",
      "Automated Confirmation",
      "Secure Payment",
      "Admin Calendar View",
    ],
    reverse: true,
  },
];

/* ===== MAIN COMPONENT ===== */
const ServicesShowcase = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
      {serviceDetails.map(({ visual, title, description, features, reverse }, idx) => (
        <div
          key={title}
          data-reveal
          className={`service-showcase-row${reverse ? " reverse" : ""}`}
        >
          {/* Text content */}
          <div className="service-showcase-content">
            <span className="section-tag">Service 0{idx + 1}</span>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              {title}
            </h2>
            <p className="section-sub">{description}</p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
              {features.map((f) => (
                <li
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "var(--text-muted)",
                    fontSize: "0.92rem",
                  }}
                >
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    style={{ width: "14px", height: "14px", color: "var(--accent)", flexShrink: 0 }}
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: "32px" }}>
              <a
                href={`https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20${encodeURIComponent(title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary magnetic"
              >
                Discuss This Service
                <svg className="icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Visual area */}
          <div className="service-showcase-visual">
            <div className="service-visual-box">
              <span className="service-visual-num">0{idx + 1}</span>
              <div className="service-visual-content">{visual}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesShowcase;
