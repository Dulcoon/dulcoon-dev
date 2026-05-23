"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const GlobalBackground = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const showMarquee = pathname ? (pathname.startsWith("/services") || pathname.startsWith("/projects")) : false;

  useEffect(() => {
    if (!showMarquee || !marqueeRef.current) return;
    const anim = gsap.to(marqueeRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 40,
      repeat: -1,
    });
    return () => { anim.kill(); };
  }, [showMarquee]);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#0b0d0b] overflow-hidden">
      {/* Scrolling background text */}
      {showMarquee && (
        <div className="absolute inset-0 flex items-start pt-[20vh] overflow-hidden pointer-events-none select-none">
          <div
            ref={marqueeRef}
            className="flex items-center shrink-0"
            style={{ willChange: "transform" }}
          >
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="font-syne font-extrabold whitespace-nowrap"
                style={{
                  fontSize: "clamp(80px, 14vw, 180px)",
                  letterSpacing: "-4px",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.22)",
                  lineHeight: 1,
                  paddingLeft: "60px",
                  paddingRight: "60px",
                }}
              >
                DULCOON.DEV
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main ambient glows — tight corners only */}
      {!showMarquee && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle var(--ambient-radius) at 0% 0%, rgba(255,255,255,0.18) 0%, transparent 100%),
              radial-gradient(circle var(--ambient-radius) at 100% 100%, rgba(255,255,255,0.10) 0%, transparent 100%)
            `
          }}
        />
      )}

      {/* Subtle grain — only inside ambient zones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          opacity: 0.08,
          maskImage: `
            radial-gradient(circle var(--ambient-radius) at 0% 0%, black 0%, transparent 100%),
            radial-gradient(circle var(--ambient-radius) at 100% 100%, black 0%, transparent 100%)
          `,
          WebkitMaskImage: `
            radial-gradient(circle var(--ambient-radius) at 0% 0%, black 0%, transparent 100%),
            radial-gradient(circle var(--ambient-radius) at 100% 100%, black 0%, transparent 100%)
          `,
        }}
      />

      {/* Grid — only visible inside the ambient highlight zones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "120px 120px",
          maskImage: `
            radial-gradient(circle var(--ambient-radius) at 0% 0%, black 0%, transparent 100%),
            radial-gradient(circle var(--ambient-radius) at 100% 100%, black 0%, transparent 100%)
          `,
          WebkitMaskImage: `
            radial-gradient(circle var(--ambient-radius) at 0% 0%, black 0%, transparent 100%),
            radial-gradient(circle var(--ambient-radius) at 100% 100%, black 0%, transparent 100%)
          `,
        }}
      />
    </div>
  );
};

export default GlobalBackground;
