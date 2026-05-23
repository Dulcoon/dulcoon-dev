import React from "react";

const serviceDetails = [
  {
    icon: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    title: "Business Website",
    description: "High-performance, SEO-optimized websites designed to convert visitors into customers. We blend clean aesthetics with technical precision.",
    features: ["Speed Focused", "SEO Optimized", "Custom CMS", "Fully Responsive"],
    imageUrl: "/services/website.png",
    reverse: false,
  },
  {
    icon: <><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></>,
    title: "Mobile App Development",
    description: "Native-feel iOS and Android applications built with Flutter. Smooth performance, beautiful UI, and real-time backend integration.",
    features: ["Cross-platform (iOS & Android)", "60fps Animations", "Firebase / API Integration", "Push Notifications"],
    imageUrl: "/services/mobile.png",
    reverse: true,
  },
  {
    icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
    title: "E-Commerce Solutions",
    description: "Scalable online stores that provide a frictionless shopping experience. Inventory management, payments, and admin dashboard included.",
    features: ["Inventory Management", "Payment Integration (Stripe, Midtrans)", "Admin Dashboard", "Deep Analytics"],
    imageUrl: "/services/ecommerce.png",
    reverse: false,
  },
  {
    icon: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    title: "Booking & Reservation System",
    description: "Automated scheduling built for service businesses, villa rentals, and appointment-based companies. Real-time availability and secure payment.",
    features: ["Real-time Availability", "Automated Confirmation", "Secure Payment", "Admin Calendar View"],
    imageUrl: "/services/booking.png",
    reverse: true,
  },
];

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="2.5" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ServicesShowcase = () => (
  <section style={{ padding: "60px 0 40px" }}>
    <div className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24 flex flex-col gap-28">
      {serviceDetails.map(({ icon, title, description, features, imageUrl, reverse }) => (
        <div
          key={title}
          className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
        >
          {/* Image */}
          <div style={{ direction: "ltr" }} className="lg:col-span-5">
            <div
              className="rounded-xl overflow-hidden max-w-[480px] mx-auto lg:max-w-none"
              style={{ border: "1px solid #222822", background: "#141714" }}
            >
              <img
                alt={title}
                className="w-full h-auto transition-transform duration-700 hover:scale-105"
                src={imageUrl}
              />
            </div>
          </div>

          {/* Content */}
          <div style={{ direction: "ltr" }} className="lg:col-span-7 flex flex-col gap-6">
            <div
              className="flex items-center justify-center"
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                border: "1px solid rgba(168,230,0,0.2)",
                background: "rgba(168,230,0,0.06)",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
                {icon}
              </svg>
            </div>

            <div>
              <h2
                className="font-syne text-3xl md:text-4xl font-extrabold mb-3"
                style={{ letterSpacing: "-1px" }}
              >
                {title}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#9aaa9a" }}>
                {description}
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#9aaa9a" }}>
                  {checkIcon}
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20ini."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary self-start"
              style={{ padding: "12px 24px" }}
            >
              Discuss This Service
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesShowcase;
