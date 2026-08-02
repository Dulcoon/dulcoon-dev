"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check user preference for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 400;
    camera.position.y = 150;
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // 2. Geometry: Particle Grid
    const numX = 55;
    const numZ = 55;
    const count = numX * numZ;
    const spacing = 22;

    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    let i = 0;
    for (let ix = 0; ix < numX; ix++) {
      for (let iz = 0; iz < numZ; iz++) {
        positions[i] = (ix - numX / 2) * spacing; // X
        positions[i + 1] = 0;                     // Y
        positions[i + 2] = (iz - numZ / 2) * spacing; // Z
        scales[i / 3] = 1;
        i += 3;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // Particle texture & theme config
    const isLightInitial = document.documentElement.getAttribute("data-theme") === "light";
    const material = new THREE.PointsMaterial({
      size: 1.85,
      color: isLightInitial ? new THREE.Color(0x4f46e5) : new THREE.Color(0x38bdf8),
      transparent: true,
      opacity: isLightInitial ? 0.48 : 0.4,
      blending: isLightInitial ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const applyThemeSettings = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      if (isLight) {
        material.color = new THREE.Color(0x4f46e5);
        material.opacity = 0.48;
        material.blending = THREE.NormalBlending;
      } else {
        material.color = new THREE.Color(0x38bdf8);
        material.opacity = 0.4;
        material.blending = THREE.AdditiveBlending;
      }
      material.needsUpdate = true;
    };

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Mouse & Scroll state tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollProgress = 0;
    let targetScrollProgress = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.4;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.4;
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll > 0) {
        targetScrollProgress = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Theme Change Observer
    const observer = new MutationObserver(() => {
      applyThemeSettings();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // 4. Animation loop with Scroll-Driven Morphing
    let animationFrameId: number;
    let step = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      step += 0.025;

      // Smooth mouse & scroll interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.04;

      // Rotate 3D particle field smoothly as user scrolls
      particles.rotation.y = scrollProgress * Math.PI * 0.35;
      particles.rotation.x = Math.sin(scrollProgress * Math.PI) * 0.12;

      // Dynamic Camera depth & altitude based on scroll
      camera.position.x = mouseX * 0.5;
      camera.position.y = (150 - scrollProgress * 65) + -mouseY * 0.3;
      camera.position.z = 400 - scrollProgress * 110;
      camera.lookAt(0, 0, 0);

      // Morph particle positions based on scroll ratio
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;

      let idx = 0;
      for (let ix = 0; ix < numX; ix++) {
        for (let iz = 0; iz < numZ; iz++) {
          const baseX = (ix - numX / 2) * spacing;
          const baseZ = (iz - numZ / 2) * spacing;
          const distFromCenter = Math.sqrt(baseX * baseX + baseZ * baseZ);

          // Shape 1: Ambient 3D Wave (Hero)
          const waveY =
            Math.sin((ix + step * 1.2) * 0.3) * 14 +
            Math.cos((iz + step * 1.2) * 0.3) * 14;

          // Shape 2: Futuristic 3D Dome / Vault (Services & Process)
          const domeY =
            Math.max(0, 1 - distFromCenter / 450) * 85 +
            Math.sin(step * 1.5 + ix * 0.25) * 8;

          // Shape 3: Tunnel Orbital Vortex (Projects & Contact)
          const tunnelY =
            Math.sin(distFromCenter * 0.018 - step * 1.4) * 32 +
            Math.cos((ix + iz + step * 2) * 0.2) * 8;

          // Smooth interpolation between shapes based on scroll position
          let targetY = waveY;
          if (scrollProgress < 0.35) {
            const t = scrollProgress / 0.35;
            targetY = THREE.MathUtils.lerp(waveY, domeY, t);
          } else if (scrollProgress < 0.7) {
            const t = (scrollProgress - 0.35) / 0.35;
            targetY = THREE.MathUtils.lerp(domeY, tunnelY, t);
          } else {
            const t = (scrollProgress - 0.7) / 0.3;
            targetY = THREE.MathUtils.lerp(tunnelY, waveY, t);
          }

          posArr[idx + 1] = targetY;
          idx += 3;
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    // 5. Window Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.85,
        transition: "opacity 0.5s ease",
      }}
    />
  );
}
