"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type PlanFeature = string;

interface Plan {
  name: string;
  price: string;
  oldPrice?: string;
  priceNote?: string;
  subtitle: string;
  features: PlanFeature[];
  ctaText: string;
  ctaHref: string;
  highlighted: boolean;
  badge?: string;
  checkColor: string;
}

const plans: Plan[] = [
  {
    name: "Basic",
    price: "Rp 1.85m",
    oldPrice: "Rp 2.9m",
    subtitle: "Perfect for micro-businesses & conversion landing pages",
    features: [
      "1-3 Premium Pages",
      "Responsive Design",
      "Contact / WhatsApp Form",
      "Basic SEO Setup",
      "14 Days Support",
    ],
    ctaText: "Choose Plan",
    ctaHref: "https://wa.me/6282253400079?text=Saya%20tertarik%20dengan%20paket%20Basic%20Rp1.85m",
    highlighted: false,
    checkColor: "#a8e600",
  },
  {
    name: "Standard",
    price: "Rp 3.85m",
    oldPrice: "Rp 5.9m",
    subtitle: "For businesses that need a professional web presence",
    features: [
      "Up to 5 Pages",
      "Custom UI Design",
      "Dynamic Content / CMS",
      "Advanced SEO Optimization",
      "Premium Animations",
      "30 Days Support",
    ],
    ctaText: "Start Project",
    ctaHref: "https://wa.me/6282253400079?text=Saya%20tertarik%20dengan%20paket%20Standard%20Rp3.85m",
    highlighted: true,
    badge: "Most Popular",
    checkColor: "#a8e600",
  },
  {
    name: "Premium",
    price: "Rp 7.9m",
    oldPrice: "Rp 9.9m",
    priceNote: "Starting from",
    subtitle: "For custom systems, apps, and e-commerce platforms",
    features: [
      "E-commerce / Booking / Dashboard",
      "API & Payment Integration",
      "Admin Panel Included",
      "Advanced Custom Features",
      "Priority Support",
    ],
    ctaText: "Consult Now",
    ctaHref: "https://wa.me/6282253400079?text=Saya%20tertarik%20dengan%20paket%20Premium%20Rp7.9m",
    highlighted: false,
    checkColor: "#a8e600",
  },
];

const Pricing = () => {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // 3D Tilt Cascade Reveal for Cards
    gsap.from(".pricing-card", {
      y: 100,
      opacity: 0,
      rotateX: -15, // Subtle 3D tilt
      transformPerspective: 1000,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%", // Trigger when top of container hits 75% of viewport height
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative overflow-hidden" style={{ padding: "80px 0 100px" }}>
      <div className="relative z-10 max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="section-eyebrow mb-3">Pricing</span>
          <h2
            className="font-syne text-3xl md:text-4xl font-extrabold"
            style={{ letterSpacing: "-1px" }}
          >
            Transparent Pricing
          </h2>
          <p className="text-sm mt-3" style={{ color: "#9aaa9a" }}>
            The right solution for every stage of your growth.
          </p>
        </div>

        {/* Plans — vertical on mobile, horizontal on md+ */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-0 items-stretch md:items-center max-w-5xl mx-auto" style={{ perspective: "1500px" }}>
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`pricing-card relative flex flex-col transition-colors duration-200 ${
                plan.highlighted
                  ? "py-12 px-7 md:py-14 md:px-8 md:-mx-4 md:z-10 shadow-2xl md:scale-105"
                  : "py-9 px-7 md:py-10 md:px-8"
              } ${
                index === 0 ? "md:rounded-l-3xl md:rounded-r-none md:border-r-0 rounded-3xl" :
                index === 2 ? "md:rounded-r-3xl md:rounded-l-none md:border-l-0 rounded-3xl" :
                "rounded-3xl"
              }`}
              style={{
                background: plan.highlighted
                  ? "#a8e600"
                  : index === 0
                    ? "radial-gradient(circle at top left, #222822 0%, #0b0d0b 100%)"
                    : "radial-gradient(circle at bottom right, #222822 0%, #0b0d0b 100%)",
                border: plan.highlighted ? "none" : "1px solid #222822",
                boxShadow: plan.highlighted ? "0 20px 50px rgba(0,0,0,0.5)" : "none",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute font-bold uppercase tracking-widest text-center"
                  style={{
                    top: "-15px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#0b0d0b",
                    color: "#a8e600",
                    padding: "6px 20px",
                    borderRadius: "99px",
                    fontSize: "11px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name + subtitle */}
              <div className="mb-6">
                <h3
                  className="font-syne text-lg font-bold mb-1"
                  style={{ color: plan.highlighted ? "#0b0d0b" : "#f5f5f5" }}
                >
                  {plan.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: plan.highlighted ? "#222822" : "#6a7a6a" }}>
                  {plan.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8 flex flex-col justify-end min-h-[80px]">
                {plan.priceNote && (
                  <div className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: plan.highlighted ? "#222822" : "#6a7a6a" }}>
                    {plan.priceNote}
                  </div>
                )}
                {plan.oldPrice && (
                  <div className="text-sm font-medium line-through opacity-60 mb-1" style={{ color: plan.highlighted ? "#0b0d0b" : "#9aaa9a", textDecorationThickness: "1px" }}>
                    {plan.oldPrice}
                  </div>
                )}
                <div className="font-sans font-extrabold flex items-baseline" style={{ color: plan.highlighted ? "#0b0d0b" : "#f5f5f5" }}>
                  <span className={`tracking-tight leading-none ${plan.highlighted ? "text-4xl" : "text-3xl"}`}>
                    {plan.price}
                  </span>
                  <span className="text-xs font-normal ml-2" style={{ color: plan.highlighted ? "#333b33" : "#6a7a6a" }}>/project</span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: plan.highlighted ? "#111411" : "#9aaa9a" }}>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke={plan.highlighted ? "#0b0d0b" : plan.checkColor} strokeWidth="2.5"
                      className="flex-shrink-0 mt-0.5"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center py-3 rounded-lg text-sm font-bold transition-all duration-200 block ${plan.highlighted
                  ? "bg-[#0b0d0b] text-[#a8e600] hover:bg-[#1c211c]"
                  : "bg-transparent border border-[#222822] text-[#f5f5f5] hover:border-[#a8e600] hover:bg-[rgba(168,230,0,0.05)]"
                  }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
