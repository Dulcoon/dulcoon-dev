"use client";

import dynamic from "next/dynamic";

// Lazy-load Three.js canvas client-side only — keeps it out of the critical JS bundle
const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), {
  ssr: false,
});

export default function ThreeCanvasWrapper() {
  return <ThreeCanvas />;
}
