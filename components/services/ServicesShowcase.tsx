"use client";

import Image from "next/image";

type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ServiceImages = {
  dark: ServiceImage;
  light: ServiceImage;
};

const serviceDetails: Array<{
  image: ServiceImages;
  title: string;
  description: string;
  features: string[];
  reverse: boolean;
}> = [
  {
    image: {
      dark: {
        src: "/services/Dark Business Dashboard UI Mockup.png",
        alt: "Dark business website dashboard mockup",
        width: 1774,
        height: 887,
      },
      light: {
        src: "/services/Light Mode Website Analytics Mockup.png",
        alt: "Light business website analytics mockup",
        width: 1774,
        height: 887,
      },
    },
    title: "Business Website",
    description:
      "High-performance, SEO-optimized websites designed to convert visitors into customers. We blend clean aesthetics with technical precision.",
    features: ["Speed Focused", "SEO Optimized", "Custom CMS", "Fully Responsive"],
    reverse: false,
  },
  {
    image: {
      dark: {
        src: "/services/Dark Mode Smartphone UI Showcase.png",
        alt: "Dark mode smartphone app interface showcase",
        width: 1774,
        height: 887,
      },
      light: {
        src: "/services/Modern Mobile App Dashboard Mockup.png",
        alt: "Light mode smartphone app interface showcase",
        width: 1774,
        height: 887,
      },
    },
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
    image: {
      dark: {
        src: "/services/Dark Dashboard Hero Mockup.png",
        alt: "Dark e-commerce orders dashboard mockup",
        width: 1774,
        height: 887,
      },
      light: {
        src: "/services/Light Mode Orders Dashboard Mockup.png",
        alt: "Light e-commerce orders dashboard mockup",
        width: 1774,
        height: 887,
      },
    },
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
    image: {
      dark: {
        src: "/services/Dark Glassmorphism Booking Calendar.png",
        alt: "Dark booking and reservation calendar interface",
        width: 1536,
        height: 1024,
      },
      light: {
        src: "/services/Light Booking Calendar UI Mockup.png",
        alt: "Light booking and reservation calendar interface",
        width: 1536,
        height: 1024,
      },
    },
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

const ServicesShowcase = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
      {serviceDetails.map(({ image, title, description, features, reverse }, idx) => (
        <div
          key={title}
          data-reveal
          className={`service-showcase-row${reverse ? " reverse" : ""}${idx % 2 === 0 ? " service-showcase-row--highlight" : ""}${idx === 3 ? " service-showcase-row--booking" : ""}`}
        >
          <div className="service-showcase-content">
            <span className="section-tag">Service 0{idx + 1}</span>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              {title}
            </h2>
            <p className="section-sub">{description}</p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginTop: "24px" }}>
              {features.map((feature) => (
                <li
                  key={feature}
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
                  {feature}
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

          <div className="service-showcase-visual">
            {(["dark", "light"] as const).map((theme) => (
              <Image
                key={theme}
                src={image[theme].src}
                alt={image[theme].alt}
                width={image[theme].width}
                height={image[theme].height}
                sizes="(max-width: 899px) 100vw, 50vw"
                className={`service-showcase-image service-showcase-image--${theme}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesShowcase;
