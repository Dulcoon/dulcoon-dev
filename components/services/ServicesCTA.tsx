import React from "react";
import Link from "next/link";

const ServicesCTA = () => {
  return (
    <section className="px-8 pb-32">
      <div className="max-w-5xl mx-auto glass-panel p-16 rounded-xl text-center relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 blur-[80px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Ready to elevate your online presence?</h2>
        <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Join the ranks of successful digital brands. Let's discuss your project today and bring your vision to life.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <button className="bg-gradient-to-r from-primary to-secondary text-on-primary px-10 py-4 rounded-full font-black text-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-3">
            Start Your Journey
          </button>
          <a
            className="flex items-center justify-center gap-3 bg-surface-container-highest px-10 py-4 rounded-full font-bold hover:bg-surface-bright transition-colors border border-outline-variant/20"
            href="#"
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
