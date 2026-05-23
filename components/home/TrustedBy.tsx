"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const trustedClients = [
  { name: "HomeLiving", icon: <><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></> },
  { name: "Holiday Bali Villa", icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></> },
  { name: "PaulusConnect", icon: <><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></> },
  { name: "StriveToHigh", icon: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></> },
  { name: "LuxStay Bali", icon: <><path d="M5 3l14 9-14 9V3z"/></> },
  { name: "CloudScale", icon: <><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></> },
];

const TrustedBy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!trackRef.current) return;
    
    // Animate the track moving completely to the left (by 50% since we duplicate content)
    const marquee = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 35, // Adjust for speed
      repeat: -1,
    });

    // Slow down on hover
    const handleMouseEnter = () => gsap.to(marquee, { timeScale: 0.15, duration: 0.8 });
    const handleMouseLeave = () => gsap.to(marquee, { timeScale: 1, duration: 0.8 });

    const track = trackRef.current;
    track.addEventListener("mouseenter", handleMouseEnter);
    track.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      track.removeEventListener("mouseenter", handleMouseEnter);
      track.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      style={{
        padding: "32px 0",
        background: "#000000",
        borderTop: "1px solid #1a1a1a",
        borderBottom: "1px solid #1a1a1a",
      }}
      className="overflow-hidden relative"
    >
      <p
        className="text-center mb-8 text-xs uppercase tracking-widest"
        style={{ color: "#6a7a6a", letterSpacing: "1px" }}
      >
        Trusted by businesses across industries
      </p>

      {/* Edge fade gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10" style={{ background: "linear-gradient(to right, #000000, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 pointer-events-none z-10" style={{ background: "linear-gradient(to left, #000000, transparent)" }} />

      {/* The Track Container that overflows */}
      <div className="flex w-full overflow-hidden">
        {/* The moving track containing duplicated content for infinite loop */}
        <div ref={trackRef} className="flex shrink-0 items-center" style={{ width: "200%" }}>

          {/* First Set */}
          <div className="flex items-center gap-8 md:gap-16 px-8 md:px-16" style={{ width: "50%" }}>
            {trustedClients.map(({ name, icon }, i) => (
              <div
                key={`set1-${name}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 transition-opacity duration-300 cursor-default opacity-50 hover:opacity-100"
                style={{ color: "#9aaa9a", fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 600 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {icon}
                </svg>
                {name}
              </div>
            ))}
          </div>

          {/* Second Set (Duplicate) */}
          <div className="flex items-center gap-8 md:gap-16 px-8 md:px-16" style={{ width: "50%" }}>
            {trustedClients.map(({ name, icon }, i) => (
              <div
                key={`set2-${name}-${i}`}
                className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 transition-opacity duration-300 cursor-default opacity-50 hover:opacity-100"
                style={{ color: "#9aaa9a", fontFamily: "var(--font-syne)", fontSize: "14px", fontWeight: 600 }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {icon}
                </svg>
                {name}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
