"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const visualRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "6282253400079";
  const message = encodeURIComponent(
    "Halo, saya tertarik untuk mendiskusikan proyek digital baru. Bisa kita atur waktu untuk bicara?"
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  useEffect(() => {
    const visual = visualRef.current;
    const stack = stackRef.current;
    if (!visual || !stack) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover:hover)").matches;

    if (!hasHover || reduceMotion) return;

    // Soft-clamp: tanh keeps rotation feeling natural even at screen edges
    const softClamp = (v: number, scale: number) => Math.tanh(v) * scale;

    const handleMouseMove = (e: MouseEvent) => {
      const r = visual.getBoundingClientRect();
      // Centre of the element in viewport coordinates
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      // Normalise distance: 1.0 = one element-width/height away from centre
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;

      const rotY = softClamp(dx * 1.4, 22); // ±22° max on Y
      const rotX = softClamp(-dy * 1.2, 16); // ±16° max on X

      stack.style.animation = "none";
      stack.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg)`;
    };

    // Resume idle float only when cursor fully leaves the viewport
    const handleWindowLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 || e.clientX <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight) {
        stack.style.animation = "float 6s ease-in-out infinite";
        stack.style.transform = "";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleWindowLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleWindowLeave);
    };
  }, []);

  return (
    <section className="hero" id="home">
      {/* Theme & Device Responsive Background Backdrop */}
      <div className="hero-backdrop" aria-hidden="true">
        {/* Desktop: Moody Modern Architecture in Shadow for both Dark and Light themes */}
        <Image
          src="/hero/Moody Modern Architecture in Shadow.png"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 100vw, 1px"
          className="hero-bg-img hero-bg--desktop"
        />
        {/* Mobile Dark: Cinematic Sunlit Concrete Interior */}
        <Image
          src="/hero/Cinematic Sunlit Concrete Interior.png"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 1px"
          className="hero-bg-img hero-bg--mobile-dark"
        />
        {/* Mobile Light: Sunlit Minimalist Stone Stair Lobby */}
        <Image
          src="/hero/Sunlit Minimalist Stone Stair Lobby.png"
          alt=""
          fill
          priority
          sizes="(max-width: 767px) 100vw, 1px"
          className="hero-bg-img hero-bg--mobile-light"
        />
        <div className="hero-backdrop-scrim" />
      </div>

      <div className="wrap hero-grid stagger-in" id="heroStagger">
        {/* ===== LEFT CONTENT ===== */}
        <div>
          <span className="eyebrow stagger-item" style={{ ["--i" as any]: 0 }}>
            <span className="dot-live"></span>
            Full-Stack Developer · Based in Indonesia
          </span>

          <h1
            className="hero-title stagger-item"
            style={{ marginTop: "20px", ["--i" as any]: 1 }}
          >
            <span className="text-dim">Your Digital</span>
            <br />
            <span className="accent-text">Success</span>{" "}
            <span className="text-dim">Partner.</span>
          </h1>

          <p
            className="hero-sub stagger-item"
            style={{ ["--i" as any]: 2 }}
          >
            I build high-performance web apps, mobile apps, and custom IT solutions that help businesses grow in the digital era.
          </p>

          <div
            className="hero-actions stagger-item"
            style={{ ["--i" as any]: 3 }}
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary magnetic"
            >
              Get Started
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>

            <Link href="#projects" className="btn btn-text">
              View My Work →
            </Link>
          </div>

          <div
            className="hero-badges stagger-item"
            style={{ ["--i" as any]: 4 }}
          >
            <span className="badge">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
              </svg>
              Modern Tech Stack
            </span>

            <span className="badge">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              On-Time Delivery
            </span>

            <span className="badge">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />
              </svg>
              Clean Codebase
            </span>

            <span className="badge">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M14.7 6.3a4 4 0 01-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 015.4-5.4l-3 3-3-3z" />
              </svg>
              Dedicated Support
            </span>
          </div>
        </div>

        {/* ===== RIGHT 3D DEVICE STACK ===== */}
        <div
          ref={visualRef}
          className="hero-visual stagger-item"
          id="heroVisual"
          style={{ ["--i" as any]: 2 }}
        >
          <div ref={stackRef} className="device-stack" id="deviceStack">
            <div className="hero-laptop-wrap">
              <Image
                src="/hero/Space Gray Laptop with Dark Dashboard.png"
                alt="dulcoon.dev production dashboard on Space Gray MacBook"
                width={1536}
                height={1024}
                priority
                className="hero-laptop-img"
                sizes="(max-width: 640px) 96vw, (max-width: 960px) 85vw, (max-width: 1200px) 52vw, 760px"
              />
              <div className="hero-laptop-glow" aria-hidden="true" />
            </div>

            <div className="float-chip c1">
              <span className="chip-dot" />
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span>Build passing</span>
            </div>

            <div className="float-chip c2">
              <svg className="icon" viewBox="0 0 24 24">
                <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
              </svg>
              <span>99 Perf. Score</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
