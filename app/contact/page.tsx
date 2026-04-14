"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const ContactPage = () => {
  const contactMethods = [
    {
      title: "WhatsApp",
      description: "Best way to reach me for quick inquiries and project starts.",
      icon: "chat",
      tag: "Fast response",
      link: "https://wa.me/yournumber",
      linkText: "Chat on WhatsApp",
      color: "text-tertiary",
      bgColor: "bg-tertiary/10",
      gradient: "from-tertiary to-primary-container",
      isPrimary: true,
    },
    {
      title: "Instagram",
      description: "Connect on Instagram",
      icon: "photo_camera",
      link: "https://instagram.com/yourprofile",
      linkText: "Follow",
      color: "text-secondary",
    },
    {
      title: "Email",
      description: "Contact via email",
      icon: "alternate_email",
      link: "mailto:hello@dulcoon.dev",
      linkText: "Send Message",
      color: "text-primary",
    },
    {
      title: "LinkedIn",
      description: "Professional profile",
      icon: "person",
      link: "https://linkedin.com/in/yourprofile",
      linkText: "Connect",
      color: "text-primary-fixed",
    },
    {
      title: "GitHub",
      description: "Explore code repository",
      icon: "code",
      link: "https://github.com/yourprofile",
      linkText: "View",
      color: "text-on-surface",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="relative pt-44 pb-32 overflow-hidden px-6">
        {/* Floating Glass Shapes Decoration */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 glass-panel rounded-full blur-[100px] opacity-20 -z-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 glass-panel rounded-full blur-[100px] opacity-10 -z-10"></div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent italic px-4">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl mx-auto">
            Let's build something amazing together
          </p>
        </section>

        {/* Contact Methods Grid */}
        <section className="max-w-7xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className={`${index === 0 ? "md:col-span-2 p-10" : "p-8"} glass-panel rounded-[2rem] flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500 shadow-[0_0_40px_rgba(76,214,255,0.05)] border-t border-white/5`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`material-symbols-outlined ${index === 0 ? "text-4xl" : "text-3xl"} ${method.color}`}>
                      {method.icon}
                    </span>
                    {method.tag && (
                      <span className="bg-tertiary/10 text-tertiary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                        {method.tag}
                      </span>
                    )}
                  </div>
                  <h3 className={`${index === 0 ? "text-3xl" : "text-xl"} font-bold text-white mb-2`}>{method.title}</h3>
                  <p className="text-on-surface-variant text-sm md:text-base mb-8">
                    {method.description}
                  </p>
                </div>
                {index === 0 ? (
                  <Link
                    href={method.link}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-tertiary to-primary-container text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(76,214,255,0.3)] hover:shadow-[0_0_35px_rgba(76,214,255,0.5)] transition-all"
                  >
                    {method.linkText}
                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                  </Link>
                ) : (
                  <Link href={method.link} className={`${method.color} font-semibold hover:underline flex items-center gap-2 text-sm`}>
                    {method.linkText}{" "}
                    <span className="material-symbols-outlined text-[16px]">
                      {method.title === "GitHub" ? "terminal" : method.title === "Email" ? "mail" : "open_in_new"}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mx-auto mb-32 max-w-6xl">
          <div className="glass-panel p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10"></div>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-[0.2em] px-1">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-surface-container-highest/20 border-white/5 rounded-2xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/30 outline-none transition-all placeholder:text-white/20 border"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-white/50 uppercase tracking-[0.2em] px-1">Email</label>
                  <input
                    type="email"
                    placeholder="hello@example.com"
                    className="w-full bg-surface-container-highest/20 border-white/5 rounded-2xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/30 outline-none transition-all placeholder:text-white/20 border"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-white/50 uppercase tracking-[0.2em] px-1">Message</label>
                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface-container-highest/20 border-white/5 rounded-2xl px-6 py-4 text-on-surface focus:ring-2 focus:ring-primary/30 outline-none transition-all placeholder:text-white/20 resize-none border"
                ></textarea>
              </div>
              <div className="pt-4 flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary text-on-primary-fixed px-12 py-5 rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(201,191,255,0.3)] transition-all active:scale-95 group flex items-center justify-center gap-3"
                >
                  Send Message
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto text-center px-4">
          <div className="py-20 rounded-[3rem] bg-gradient-to-br from-surface-container-low to-surface border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 group-hover:scale-105 transition-transform duration-700"></div>
            <div className="relative z-10 p-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 tracking-tight leading-tight">
                Have a project in mind? <br className="hidden md:block" /> Let's discuss it.
              </h2>
              <button className="bg-white text-surface px-12 py-5 rounded-full font-black text-xl hover:bg-primary transition-colors active:scale-95 shadow-xl">
                Start Your Project
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
