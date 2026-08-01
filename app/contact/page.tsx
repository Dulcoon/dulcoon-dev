"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    title: "WhatsApp Direct",
    description: "Fastest response for immediate inquiries, quotes, and project timelines.",
    tag: "Recommended · < 1h Response",
    link: "https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20proyek%20digital.",
    linkText: "Start WhatsApp Chat",
    isPrimary: true,
    icon: (
      <svg className="icon" viewBox="0 0 24 24" style={{ width: "22px", height: "22px" }}>
        <path d="M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4.9-1.7z" />
        <path d="M9 9c0 3 2 5 5 5" />
      </svg>
    ),
  },
  {
    title: "Email Inquiry",
    description: "Send detailed project briefs, RFP documentation, or formal partnership proposals.",
    link: "mailto:dulcoon.dev@gmail.com",
    linkText: "dulcoon.dev@gmail.com",
    isPrimary: false,
    icon: (
      <svg className="icon" viewBox="0 0 24 24" style={{ width: "22px", height: "22px" }}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 6l10 7 10-7" />
      </svg>
    ),
  },
  {
    title: "GitHub Profile",
    description: "Explore open-source repositories, code quality, and engineering activity.",
    link: "https://github.com/dulcoon",
    linkText: "github.com/dulcoon",
    isPrimary: false,
    icon: (
      <svg className="icon" viewBox="0 0 24 24" style={{ width: "22px", height: "22px" }}>
        <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.6-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 014.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.6 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0012 2z" />
      </svg>
    ),
  },
  {
    title: "Instagram Showcase",
    description: "Follow for design highlights, ongoing project teasers, and tech insights.",
    link: "https://instagram.com/dulcoon",
    linkText: "@dulcoon",
    isPrimary: false,
    icon: (
      <svg className="icon" viewBox="0 0 24 24" style={{ width: "22px", height: "22px" }}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Halo, nama saya ${form.name} (${form.email}).\n\nDetail Proyek:\n${form.message}`
    );
    window.open(`https://wa.me/6282253400079?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "100px" }}>
        {/* ===== HERO SECTION ===== */}
        <section className="contact-hero-section wrap" data-reveal>
          <span className="eyebrow" style={{ margin: "0 auto 16px auto" }}>
            <span className="dot-live" />
            Available for New Projects · Q3/Q4 2026
          </span>
          <h1 className="section-title" style={{ fontSize: "clamp(2.4rem, 5vw, 4.2rem)", margin: "0 auto 16px auto" }}>
            Let&apos;s Build <span className="accent-text">Something Great</span> Together.
          </h1>
          <p className="section-sub" style={{ maxWidth: "620px", margin: "0 auto" }}>
            Have a project in mind, need technical consultation, or looking for a long-term development partner? Choose your preferred communication channel below.
          </p>
        </section>

        {/* ===== MAIN 2-COLUMN SPLIT GRID ===== */}
        <section className="wrap" style={{ marginTop: "40px" }} data-reveal>
          <div className="contact-split-grid">
            {/* LEFT COLUMN: Contact Channels */}
            <div className="contact-channels-wrapper">
              <span className="section-tag" style={{ marginBottom: "8px" }}>Direct Channels</span>
              <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginBottom: "16px" }}>
                Reach Out Directly
              </h2>

              {/* Channel Cards */}
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-card ${method.isPrimary ? "featured" : ""}`}
                >
                  <div>
                    <div className="contact-card-header">
                      <div className="contact-icon-box">{method.icon}</div>
                      {method.tag && <span className="badge">{method.tag}</span>}
                    </div>

                    <h3 className="contact-card-title">{method.title}</h3>
                    <p className="contact-card-desc">{method.description}</p>
                  </div>

                  <div className="contact-card-link">
                    {method.linkText}
                    <svg className="icon" viewBox="0 0 24 24" style={{ width: 14, height: 14 }}>
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div>
              <span className="section-tag" style={{ marginBottom: "8px" }}>Quick Brief</span>
              <h2 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text)", marginBottom: "16px" }}>
                Send a Project Brief
              </h2>

              <div className="contact-form-box">
                <div>
                  <h3 className="font-display" style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)", marginBottom: "6px" }}>
                    Tell me about your project
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                    Fill in the details below to instantly start a structured conversation via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Project Details & Goals</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Describe your project, desired deliverables, target timeline, or budget..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="form-textarea"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary magnetic" style={{ width: "100%", justifyContent: "center", marginTop: "8px" }}>
                    {sent ? "✓ Redirecting to WhatsApp..." : "Send Brief via WhatsApp"}
                    {!sent && (
                      <svg className="icon" viewBox="0 0 24 24">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    )}
                  </button>
                </form>

                {/* Trust Guarantee Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg className="icon" viewBox="0 0 24 24" style={{ width: 12, height: 12, color: "var(--accent)" }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Fast Response (&lt; 2h)
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg className="icon" viewBox="0 0 24 24" style={{ width: 12, height: 12, color: "var(--accent)" }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>

                    Free Consultation
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px" }}>
                    <svg className="icon" viewBox="0 0 24 24" style={{ width: 12, height: 12, color: "var(--accent)" }}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>

                    NDA Protected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
