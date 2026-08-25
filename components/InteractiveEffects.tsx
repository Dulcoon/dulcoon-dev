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
      const total = h.scrollHeight - h.clientHeight;
      const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // 2. Continuous & Mutation-Aware IntersectionObserver for [data-reveal]
    const observedElements = new WeakSet<Element>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "150px 0px 150px 0px" }
    );

    const checkAndObserveReveals = () => {
      const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
      revealEls.forEach((el) => {
        if (el.classList.contains("in-view")) return;

        const rect = el.getBoundingClientRect();
        // If element is already in or near viewport, reveal immediately
        if (rect.top < window.innerHeight + 200 && rect.bottom > -200) {
          el.classList.add("in-view");
        } else if (!observedElements.has(el)) {
          observedElements.add(el);
          io.observe(el);
        }
      });
    };

    // Run immediate check
    checkAndObserveReveals();

    // 3. Magnetic buttons binder
    const boundMagnetics = new WeakSet<HTMLElement>();
    const magneticCleanups: Array<() => void> = [];

    const bindMagneticButtons = () => {
      if (!hasHover || reduceMotion) return;
      const magneticBtns = document.querySelectorAll<HTMLElement>(".btn-primary, .btn-ghost, .magnetic");
      magneticBtns.forEach((btn) => {
        if (boundMagnetics.has(btn)) return;
        boundMagnetics.add(btn);

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
    };

    bindMagneticButtons();

    // 4. 3D Holographic Parallax Card Tilt & Specular Light Sheen
    const boundTiltCards = new WeakSet<HTMLElement>();
    const tiltCleanups: Array<() => void> = [];

    const bindTiltCards = () => {
      if (!hasHover || reduceMotion) return;
      const tiltCards = document.querySelectorAll<HTMLElement>(
        ".folio-card, .test-card, .price-card, .service-card, .project-card"
      );
      tiltCards.forEach((card) => {
        if (boundTiltCards.has(card)) return;
        boundTiltCards.add(card);

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
    };

    bindTiltCards();

    // 5. Count-up numbers
    const boundCountEls = new WeakSet<HTMLElement>();
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

    const bindCountUp = () => {
      const countEls = document.querySelectorAll<HTMLElement>(".count-up");
      countEls.forEach((el) => {
        if (!boundCountEls.has(el)) {
          boundCountEls.add(el);
          countIO.observe(el);
        }
      });
    };

    bindCountUp();

    // 6. MutationObserver to handle Async / Dynamic Route Changes & Streaming RSC
    const mo = new MutationObserver(() => {
      checkAndObserveReveals();
      bindMagneticButtons();
      bindTiltCards();
      bindCountUp();
    });

    mo.observe(document.body, { childList: true, subtree: true });

    // Staggered interval safety passes for async Next.js Server Components
    const timers = [
      setTimeout(checkAndObserveReveals, 50),
      setTimeout(checkAndObserveReveals, 150),
      setTimeout(checkAndObserveReveals, 350),
      setTimeout(checkAndObserveReveals, 700),
      setTimeout(() => {
        // Guarantee all remaining data-reveal elements become visible
        document.querySelectorAll("[data-reveal]:not(.in-view)").forEach((el) => {
          el.classList.add("in-view");
        });
      }, 1000),
    ];

    // 7. Hero Entrance stagger trigger
    const heroStagger = document.getElementById("heroStagger");
    if (heroStagger) {
      requestAnimationFrame(() => {
        setTimeout(() => heroStagger.classList.add("stagger-in"), 80);
      });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      timers.forEach((t) => clearTimeout(t));
      mo.disconnect();
      io.disconnect();
      countIO.disconnect();
      magneticCleanups.forEach((fn) => fn());
      tiltCleanups.forEach((fn) => fn());
    };
  }, [pathname]);

  return null;
}
