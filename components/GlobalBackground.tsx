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
    <div className="fixed inset-0 z-[-1] overflow-hidden" style={{ background: "var(--bg)", transition: "background 0.4s var(--ease)" }}>
      {/* Scrolling background text for subpages */}
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
                className="font-display font-extrabold whitespace-nowrap"
                style={{
                  fontSize: "clamp(80px, 14vw, 180px)",
                  letterSpacing: "-4px",
                  color: "transparent",
                  WebkitTextStroke: "1px var(--border-strong)",
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

      {/* Main ambient glows */}
      {!showMarquee && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle var(--ambient-radius, 600px) at 0% 0%, var(--accent-soft) 0%, transparent 100%),
              radial-gradient(circle var(--ambient-radius, 600px) at 100% 100%, var(--accent-soft) 0%, transparent 100%)
            `
          }}
        />
      )}
    </div>
  );
};

export default GlobalBackground;
