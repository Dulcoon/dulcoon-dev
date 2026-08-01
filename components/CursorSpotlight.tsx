"use client";

import React, { useEffect, useState } from "react";

export default function CursorSpotlight() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    if (
      !window.matchMedia("(hover: hover)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let requestID: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(requestID);
      requestID = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestID);
    };
  }, []);

  if (!pos) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
        background: `radial-gradient(650px circle at ${pos.x}px ${pos.y}px, rgba(56, 189, 248, 0.07), transparent 80%)`,
        transition: "background 0.05s linear",
      }}
    />
  );
}
