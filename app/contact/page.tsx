"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Best way to reach me. Fast response for quick inquiries and project discussions.",
    tag: "Fastest Response",
    link: "https://wa.me/6282253400079?text=Halo%2C%20saya%20ingin%20mendiskusikan%20proyek%20baru.",
    linkText: "Chat on WhatsApp",
    isPrimary: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Email",
    description: "For detailed project briefs and formal inquiries.",
    link: "mailto:dulcoon.dev@gmail.com",
    linkText: "dulcoon.dev@gmail.com",
    isPrimary: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "GitHub",
    description: "Explore my open-source work and code repositories.",
    link: "https://github.com/dulcoon",
    linkText: "github.com/dulcoon",
    isPrimary: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    title: "Instagram",
    description: "Follow for design insights, project showcases, and updates.",
    link: "https://instagram.com/dulcoon",
    linkText: "@dulcoon",
    isPrimary: false,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
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
      `Halo, nama saya ${form.name} (${form.email}).\n\n${form.message}`
    );
    window.open(`https://wa.me/6282253400079?text=${msg}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <Navbar />
      <main className="relative" style={{ minHeight: "100vh", paddingTop: "68px" }}>
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none dot-grid" />

        {/* Hero */}
        <section className="relative z-10 max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24 py-14 md:py-20 text-center">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#a8e600", letterSpacing: "2px" }}
          >
            Get in Touch
          </span>
          <h1
            className="font-syne text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4"
            style={{ letterSpacing: "-1px" }}
          >
            Let&apos;s Build{" "}
            <span style={{ color: "#a8e600" }}>Something</span> Great.
          </h1>
          <p className="text-base md:text-lg max-w-lg mx-auto" style={{ color: "#9aaa9a" }}>
            Ready to start your project? I&apos;d love to hear about it. Reach out via any of the channels below.
          </p>
        </section>

        {/* Contact methods */}
        <section className="max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Primary (WhatsApp) */}
            <div
              className="md:col-span-2 rounded-xl p-8 flex flex-col justify-between gap-6 relative overflow-hidden"
              style={{ background: "#111411", border: "1px solid rgba(168,230,0,0.25)", minHeight: "200px" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 70% at 0% 100%, rgba(168,230,0,0.06) 0%, transparent 60%)" }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  {contactMethods[0].icon}
                  {contactMethods[0].tag && (
                    <span
                      className="text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full"
                      style={{ background: "rgba(168,230,0,0.12)", color: "#a8e600" }}
                    >
                      {contactMethods[0].tag}
                    </span>
                  )}
                </div>
                <h3 className="font-syne text-2xl font-bold mb-2">{contactMethods[0].title}</h3>
                <p className="text-sm" style={{ color: "#9aaa9a" }}>{contactMethods[0].description}</p>
              </div>
              <a
                href={contactMethods[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 btn-primary self-start"
                style={{ padding: "12px 24px" }}
              >
                {contactMethods[0].linkText}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Secondary cards */}
            {contactMethods.slice(1).map((method) => (
              <a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-6 flex flex-col justify-between gap-4 transition-all duration-200 group bg-[#141714] border border-[#222822] hover:border-[rgba(168,230,0,0.3)]"
              >
                <div>
                  {method.icon}
                  <h3 className="font-syne text-lg font-bold mt-4 mb-1">{method.title}</h3>
                  <p className="text-xs" style={{ color: "#9aaa9a" }}>{method.description}</p>
                </div>
                <div
                  className="text-sm font-bold flex items-center gap-1 transition-colors duration-200"
                  style={{ color: "#6a7a6a" }}
                >
                  {method.linkText}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24 pb-24">
          <div
            className="rounded-xl p-8 md:p-12 relative overflow-hidden"
            style={{ background: "#111411", border: "1px solid #222822" }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 50% 60% at 100% 0%, rgba(168,230,0,0.04) 0%, transparent 60%)" }}
            />

            <div className="relative z-10 grid md:grid-cols-2 gap-12">
              {/* Left: Info */}
              <div>
                <span className="section-eyebrow mb-4">Send a Message</span>
                <h2
                  className="font-syne text-3xl font-extrabold mb-4"
                  style={{ letterSpacing: "-1px" }}
                >
                  Tell me about <br />
                  <span style={{ color: "#a8e600" }}>your project.</span>
                </h2>
                <p className="text-sm leading-relaxed mb-8" style={{ color: "#9aaa9a" }}>
                  Fill out the form and your message will be sent directly to my WhatsApp for the fastest response possible.
                </p>

                {/* Stats */}
                <div className="flex flex-col gap-4">
                  {[
                    ["&lt; 2 Hours", "Average response time"],
                    ["50+ Projects", "Successfully delivered"],
                    ["100%", "Client satisfaction"],
                  ].map(([val, lbl]) => (
                    <div key={lbl} className="flex items-center gap-4">
                      <div
                        className="font-syne text-xl font-extrabold"
                        style={{ color: "#a8e600" }}
                        dangerouslySetInnerHTML={{ __html: val }}
                      />
                      <div className="text-sm" style={{ color: "#9aaa9a" }}>{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6a7a6a" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all focus:border-[rgba(168,230,0,0.4)]"
                    style={{
                      background: "#0b0d0b",
                      border: "1px solid #222822",
                      color: "#f5f5f5",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6a7a6a" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="hello@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all focus:border-[rgba(168,230,0,0.4)]"
                    style={{ background: "#0b0d0b", border: "1px solid #222822", color: "#f5f5f5" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#6a7a6a" }}>
                    Project Details
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell me about your project, goals, and timeline..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all resize-none focus:border-[rgba(168,230,0,0.4)]"
                    style={{ background: "#0b0d0b", border: "1px solid #222822", color: "#f5f5f5" }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary justify-center"
                  style={{ padding: "14px 28px", fontSize: "15px" }}
                >
                  {sent ? "✓ Message Sent!" : "Send via WhatsApp"}
                  {!sent && (
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
