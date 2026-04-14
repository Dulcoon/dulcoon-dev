import React from "react";

const Pricing = () => {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Transparent Pricing</h2>
        <p className="text-on-surface-variant">The right solution for every stage of your growth.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
        {/* Basic */}
        <div className="glass-panel p-10 rounded-xl space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Basic</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">Perfect for small businesses / simple landing pages</p>
            </div>
            <div className="text-3xl font-extrabold text-white">
              Rp 2.9m<span className="text-sm font-normal text-on-surface-variant">/project</span>
            </div>
          </div>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Up to 3 Pages
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Responsive Design
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Contact / WhatsApp Form
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span> Basic SEO Setup
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span> 14 Days Support
            </li>
          </ul>
          <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all text-sm font-bold text-white">
            Choose Plan
          </button>
        </div>

        {/* Standard */}
        <div className="glass-panel p-12 rounded-xl space-y-8 relative scale-105 border-primary/50 shadow-[0_0_40px_rgba(98,54,255,0.2)] order-1 md:order-2">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary font-bold px-4 py-1 rounded-full text-[10px] tracking-widest uppercase">
            Most Popular
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-primary">Standard</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed text-on-primary-container/70">For businesses that need a more professional web presence</p>
            </div>
            <div className="text-4xl font-extrabold text-white">
              Rp 5.9m<span className="text-sm font-normal text-on-surface-variant">/project</span>
            </div>
          </div>
          <ul className="space-y-4 text-on-surface text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg fill-1">check_circle</span> Up to 7 Pages
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg fill-1">check_circle</span> Custom UI Design
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg fill-1">check_circle</span> Dynamic Content / CMS
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg fill-1">check_circle</span> SEO Optimization
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg fill-1">check_circle</span> Premium Animations
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-lg fill-1">check_circle</span> 30 Days Support
            </li>
          </ul>
          <button className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-on-primary font-bold hover:brightness-110 transition-all text-sm">
            Start Project
          </button>
        </div>

        {/* Premium */}
        <div className="glass-panel p-10 rounded-xl space-y-8 order-3 md:order-3">
          <div className="space-y-4">
            <div className="space-y-1">
              <h3 className="text-xl font-bold">Premium</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">For custom systems / apps / e-commerce</p>
            </div>
            <div className="text-3xl font-extrabold text-white">
              <span className="text-xs font-normal text-on-surface-variant block mb-1 uppercase tracking-tighter">Starting from</span>
              Rp 9.9m
            </div>
          </div>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> E-commerce / Booking / Dashboard
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> API / Payment Integration
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Admin Panel
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Advanced Custom Features
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Priority Support
            </li>
          </ul>
          <button className="w-full py-3 rounded-full border border-white/20 hover:bg-white/5 transition-all text-sm font-bold text-white">
            Consult Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
