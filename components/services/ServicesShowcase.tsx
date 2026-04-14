import React from "react";

const ServicesShowcase = () => {
  return (
    <section className="px-8 pb-32">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Service 1: Business Website */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="glass-panel p-10 rounded-xl relative overflow-hidden group">
              <img
                alt="Business Website"
                className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdAIJuVCuKSRt4vfj6J4LQxpTNzu-TazZ8AggA14VPrTO7wN2yfZDXXc5ff2SdaSK5fb3ZFiEhrlGCwkYRc2TvvN3rEAhEaWM20Ydl33VLnXX7jAK2ZNQY9zctYbLRPmyNiWFk80bx3usv3cnb_m2_pEjGqmB3zFLhcOsK6cjg5WpvgfTt0J3lf-5aZJdaLzw2VbCGH2rSxvbDVqYmI3IDPUVKo2zOlM-trQeitnFUhIOflMt-FgQehndytEqz4g0Qd6S4MqqYs2Nl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">web</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Business Website</h2>
            </div>
            <p className="text-lg text-on-surface-variant">
              High-performance, SEO-optimized sites designed to be your most powerful sales tool. We blend aesthetic excellence with technical precision.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary">bolt</span>
                <span className="text-sm font-medium">Speed Focused</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary">search</span>
                <span className="text-sm font-medium">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary">edit_note</span>
                <span className="text-sm font-medium">Custom CMS</span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-surface-container-low border border-outline-variant/10">
                <span className="material-symbols-outlined text-tertiary">devices</span>
                <span className="text-sm font-medium">Fully Responsive</span>
              </div>
            </div>
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Start Project <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Service 2: Booking System */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary text-4xl">calendar_month</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Booking System</h2>
            </div>
            <p className="text-lg text-on-surface-variant">
              Automated scheduling engines built for luxury rentals, boutiques, and high-end service providers. Real-time sync across all your channels.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">check_circle</span>
                <div>
                  <h4 className="font-bold">Real-time Availability</h4>
                  <p className="text-sm text-on-surface-variant">Instant booking confirmation with zero double-booking risk.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">sync</span>
                <div>
                  <h4 className="font-bold">Multi-channel Sync</h4>
                  <p className="text-sm text-on-surface-variant">Seamlessly connect with Airbnb, Booking.com, and local platforms.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary mt-1">encrypted</span>
                <div>
                  <h4 className="font-bold">Secure Payments</h4>
                  <p className="text-sm text-on-surface-variant">Integrated deposit handling and automated invoicing systems.</p>
                </div>
              </li>
            </ul>
            <button className="bg-secondary/10 text-secondary border border-secondary/20 px-8 py-3 rounded-full font-bold hover:bg-secondary hover:text-on-secondary transition-all">
              View Demo
            </button>
          </div>
          <div>
            <div className="glass-panel p-1 rounded-xl shadow-2xl relative">
              <img
                alt="Booking System Dashboard"
                className="w-full h-auto rounded-lg"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRnAWP_eceDNvtaXRVCAQM1VXlKd-t6it0B4HwVy48mz8EJlWMUOhxGhWe8JgUclj_Uz24g55iTcN6XksTggLipjkdEvCsNHf1DrTejMdZ91HWnqAt7mPwsEnFsJjCC_GUcZWLzv8FvpoBpaBNvzBQpMsmBV8K8JkqwIyHdUgfUPa0_4B4QlwUFkNF14BRFsukMBGwP8rvkbKpPhtBZGJcuZPrDfPu7Q4aRSL-isPJfANpmXqNBk7u0LB49P5oTePgR4bagLsyA6Q0"
              />
            </div>
          </div>
        </div>

        {/* Service 3: E-commerce */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-tertiary/20 blur-2xl rounded-full"></div>
              <div className="glass-panel p-8 rounded-xl relative">
                <img
                  alt="E-commerce Store"
                  className="w-full h-auto rounded-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5iyQ3IzwtcWDNTpwr4UN9fvhIOSdPQiVcYopIz9PqbeYWjZNdTf-8J8DVTO9AlSaWR8e0R5JaAj6ezY6KKca9ZHfz6xrYQ-12El4muS1BACoPpUQ7hA1jziQtnzokfBZ0EygGhN2i7Q1wnxlI8DwrTOJIW9I-uPRnKgxKuSFri9DkYKdgIgQujTpoLq676gK9KK0BjkWZYzEWh-YNlQJBHcVDhgvvpdCqt0yuQZLFTsZeru1cE-utTuvExiyPKUpMsq0k8DxKhvOx"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-tertiary text-4xl">shopping_bag</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">E-commerce</h2>
            </div>
            <p className="text-lg text-on-surface-variant">
              Scalable online stores that provide a frictionless shopping journey. We prioritize conversion while maintaining your brand's premium identity.
            </p>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">inventory_2</span>
                  Inventory Tracking
                </h4>
                <p className="text-sm text-on-surface-variant">Automated stock management and low-inventory alerts across your entire catalog.</p>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">payments</span>
                  Global Payments
                </h4>
                <p className="text-sm text-on-surface-variant">Support for Stripe, PayPal, Crypto, and local gateways with regional pricing.</p>
              </div>
              <div className="p-6 rounded-xl bg-surface-container-high/50 border border-outline-variant/10">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary">analytics</span>
                  Deep Analytics
                </h4>
                <p className="text-sm text-on-surface-variant">Understand customer behavior with heatmaps and integrated marketing tools.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service 4: Mobile App Dev */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary text-4xl">smartphone</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Mobile App Dev</h2>
            </div>
            <p className="text-lg text-on-surface-variant">
              Native-feel iOS and Android applications crafted with micro-interactions that delight users and keep them engaged.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">layers</span>
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wider text-primary">Performance</h5>
                  <p className="text-xs text-on-surface-variant">60fps animations and instant load times.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-tertiary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary">cloud</span>
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-wider text-tertiary">Cloud Sync</h5>
                  <p className="text-xs text-on-surface-variant">Real-time data persistence across devices.</p>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <div className="glass-panel px-6 py-4 rounded-full inline-flex flex-wrap items-center gap-4">
                <span className="text-sm font-bold opacity-60">Tech Stack:</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs">React Native</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs">Flutter</span>
                <span className="px-3 py-1 bg-surface-container-highest rounded-full text-xs">Firebase</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-64 h-[500px] glass-panel rounded-[3rem] p-4 relative z-10 border-4 border-outline-variant/30 overflow-hidden">
              <img
                alt="Mobile App Interface"
                className="w-full h-full object-cover rounded-[2rem]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZpJ3gR_IVogr5ckDtVVG0VQS3CUG4uJYnJbNxpG3Q2-1a0zQhKs0Aq0Adhzcd7LnGGTTRiCn-CZ-bZbY679mC87d2Ev46JmrBU4QEdVBZRSuZSmX0F2wwcvq4U6Ny__e-6XW8lZphqvYkqF2XrICcPlZqQGDpZTQPOmZ2vBsZb45P6R9ox85slXR8yh0zQAo5PQx4GcTqUuHY79ZevhbY6CnsZ6wbIoMQn8-Z35-8oX8baySWYcQ1-eFKhWWU_bZHCPHZtHSGrPUO"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
