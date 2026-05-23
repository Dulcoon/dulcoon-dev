"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "6282253400079";
  const message = encodeURIComponent("Halo, saya tertarik untuk mendiskusikan proyek digital baru. Bisa kita atur waktu untuk bicara?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  useGSAP(() => {
    // 1. Reveal Animation on Load (Staggered & Elastic)
    const tl = gsap.timeline();
    
    // Set initial state before animation
    gsap.set(".gsap-reveal", { y: 30, opacity: 0 });
    gsap.set(imageContainerRef.current, { scale: 0.9, opacity: 0, rotate: -1.5 });

    tl.to(".gsap-reveal", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.12,
      ease: "power4.out",
    });

    tl.to(imageContainerRef.current, {
      scale: 1,
      opacity: 1,
      rotate: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.75)",
    }, "-=0.6");

    // 2. 3D Mouse Parallax Effect on Image Container
    const container = containerRef.current;
    const imageContainer = imageContainerRef.current;
    if (!container || !imageContainer) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the hero section (-0.5 to 0.5)
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      // Animate the image rotation and translation in 3D space
      gsap.to(imageContainer, {
        rotateY: x * 12,  // 12 degrees max horizontal tilt
        rotateX: -y * 12, // 12 degrees max vertical tilt
        x: x * 15,        // Subtle horizontal shift
        y: y * 15,        // Subtle vertical shift
        transformPerspective: 1200,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      // Return image to original position smoothly
      gsap.to(imageContainer, {
        rotateY: 0,
        rotateX: 0,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative flex items-center overflow-hidden hero-container pt-28 md:pt-[76px]"
      style={{
        paddingBottom: "0px",
      }}
    >

      <div className="relative z-10 w-full max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24 pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

          {/* ===== LEFT: Text Content ===== */}
          <div className="flex-1 min-w-0">
            {/* Eyebrow tag */}
            <p
              className="gsap-reveal inline-flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-widest"
              style={{ color: "#9aaa9a" }}
            >
              Full-Stack Developer · Based in Indonesia
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ background: "#a8e600" }} />
            </p>

            {/* Main Headline */}
            <h1
              className="gsap-reveal font-syne text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-5"
              style={{ letterSpacing: "-1px" }}
            >
              <span 
                style={{ 
                  background: "linear-gradient(90deg, #ffffff 20%, #333333 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                Your Digital
              </span><br />
              <span style={{ color: "#a8e600" }}>Success</span><br />
              <span 
                style={{ 
                  background: "linear-gradient(90deg, #333333 0%, #ffffff 80%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                Partner.
              </span>
            </h1>

            {/* Description */}
            <p
              className="gsap-reveal text-sm sm:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 max-w-md"
              style={{ color: "#9aaa9a" }}
            >
              I build high-performance web apps, mobile apps, and custom IT solutions that help businesses grow in the digital era.
            </p>

            {/* Badges */}
            <div className="gsap-reveal flex flex-wrap gap-3 mb-9">
              {[
                { icon: <><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83" /></>, label: "Modern Tech Stack" },
                { icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>, label: "On-Time Delivery" },
                { icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 9h6M9 12h6M9 15h4" /></>, label: "Clean Codebase" },
                { icon: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>, label: "Dedicated Support" },
              ].map(({ icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 text-[10px] md:text-xs font-semibold transition-all duration-200 cursor-default border border-[#222822] bg-white/2 text-[#9aaa9a] rounded-lg hover:border-[#a8e600] hover:text-[#f5f5f5]"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="1.8">
                    {icon}
                  </svg>
                  {label}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="gsap-reveal flex flex-wrap items-center gap-4 md:gap-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "13px 28px", fontSize: "15px" }}
              >
                Get Started
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 text-sm font-semibold transition-colors duration-200"
                style={{ color: "#f5f5f5", background: "transparent", border: "none", cursor: "pointer" }}
              >
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{ width: "36px", height: "36px", border: "1px solid #222822", background: "rgba(255,255,255,0.04)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#f5f5f5">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </span>
                View My Work
              </Link>
            </div>
          </div>

          {/* ===== RIGHT: Image ===== */}
          <div
            className="flex-1 relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0"
            style={{ minWidth: 0 }}
          >
            {/* Background Glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                height: "80%",
                background: "#a8e600",
                filter: "blur(100px)",
                opacity: 0.1,
                borderRadius: "50%",
                animation: "pulse-green 4s ease-in-out infinite",
              }}
            />

            {/* Image Container */}
            <div
              ref={imageContainerRef}
              className="relative z-10 w-[100%] lg:w-[110%] xl:w-[120%] max-w-none flex-shrink-0 hero-image-parallax"
              style={{
                marginRight: "-5%", // Bleed off right edge slightly
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src="/Gemini_Generated_Image_ghah8ghah8ghah8g-Photoroom.png"
                alt="Digital Solutions Preview"
                width={1600}
                height={1200}
                className="w-full h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
