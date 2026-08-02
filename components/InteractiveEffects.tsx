"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function InteractiveEffects() {
  const pathname = usePathname();
  const isFirstMount = useRef(true);

  useEffect(() => {
    // Only scroll to top on actual client-side route navigation, NOT on page refresh
    if (!isFirstMount.current) {
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    }
    isFirstMount.current = false;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasHover = window.matchMedia("(hover:hover)").matches;

    // 1. Scroll progress bar
    const progressBar = document.getElementById("scrollProgress");
    const handleScroll = () => {
      if (!progressBar) return;
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      progressBar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. IntersectionObserver & immediate viewport check for [data-reveal]
    const revealEls = document.querySelectorAll("[data-reveal]");

    const revealAllInView = () => {
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Reveal elements within or near the current viewport
        if (rect.top < window.innerHeight + 150 && rect.bottom > -150) {
          el.classList.add("in-view");
        }
      });
    };

    revealAllInView();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "100px 0px 100px 0px" }
    );

    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        el.classList.add("in-view");
      } else {
        io.observe(el);
      }
    });

    // Fallback: reveal all hidden data-reveal elements after 300ms to guarantee zero blank pages
    const fallbackTimer = setTimeout(() => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("in-view");
      });
    }, 300);

    // 3. Hero Entrance stagger trigger
    const heroStagger = document.getElementById("heroStagger");
    if (heroStagger) {
      requestAnimationFrame(() => {
        setTimeout(() => heroStagger.classList.add("stagger-in"), 80);
      });
    }

    // 4. Magnetic buttons
    const magneticCleanups: Array<() => void> = [];
    if (hasHover && !reduceMotion) {
      const magneticBtns = document.querySelectorAll<HTMLElement>(".btn-primary, .btn-ghost, .magnetic");
      magneticBtns.forEach((btn) => {
        const handleMouseMove = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.25;
          const y = (e.clientY - r.top - r.height / 2) * 0.35;
          btn.style.transition = "transform .08s linear";
          btn.style.transform = `translate(${x}px, ${y}px)`;
        };
        const handleMouseLeave = () => {
          btn.style.transition = "transform .5s var(--ease)";
          btn.style.transform = "";
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);
        magneticCleanups.push(() => {
          btn.removeEventListener("mousemove", handleMouseMove);
          btn.removeEventListener("mouseleave", handleMouseLeave);
        });
      });
    }

    // 5. 3D Holographic Parallax Card Tilt & Specular Light Sheen
    const tiltCleanups: Array<() => void> = [];
    if (hasHover && !reduceMotion) {
      const tiltCards = document.querySelectorAll<HTMLElement>(
        ".folio-card, .test-card, .price-card, .service-card, .project-card"
      );
      tiltCards.forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;

          const rotateX = ((py - 0.5) * -12).toFixed(2);
          const rotateY = ((px - 0.5) * 12).toFixed(2);

          card.style.setProperty("--mx", `${(px * 100).toFixed(1)}%`);
          card.style.setProperty("--my", `${(py * 100).toFixed(1)}%`);
          card.style.transition = "transform .08s linear";
          card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        };

        const handleMouseLeave = () => {
          card.style.transition = "transform .5s var(--ease)";
          card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
          card.style.setProperty("--mx", "50%");
          card.style.setProperty("--my", "50%");
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
        tiltCleanups.push(() => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", handleMouseLeave);
        });
      });
    }

    // 6. Count-up numbers on pricing cards
    const countEls = document.querySelectorAll<HTMLElement>(".count-up");
    const countIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const target = parseFloat(el.dataset.target || "0");
          const prefix = el.dataset.prefix || "";
          const suffix = el.dataset.suffix || "";
          const duration = reduceMotion ? 0 : 900;
          const start = performance.now();

          function tick(now: number) {
            const t = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = prefix + (target * eased).toFixed(2) + suffix;
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          countIO.unobserve(el);
        });
      },
      { threshold: 0.3 }
    );
    countEls.forEach((el) => countIO.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(fallbackTimer);
      io.disconnect();
      countIO.disconnect();
      magneticCleanups.forEach((fn) => fn());
      tiltCleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
