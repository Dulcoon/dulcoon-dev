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

    // 2. Geometry: Particle Wave Grid
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

    const isLightInitial = document.documentElement.getAttribute("data-theme") === "light";
    const material = new THREE.PointsMaterial({
      size: 1.8,
      color: isLightInitial ? new THREE.Color(0x4f46e5) : new THREE.Color(0x38bdf8),
      transparent: true,
      opacity: isLightInitial ? 0.48 : 0.4,
      blending: isLightInitial ? THREE.NormalBlending : THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 3. Mouse & Scroll interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - window.innerWidth / 2) * 0.4;
      targetMouseY = (e.clientY - window.innerHeight / 2) * 0.4;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Theme Change Observer
    const observer = new MutationObserver(() => {
      applyThemeSettings();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // 4. Animation loop
    let animationFrameId: number;
    let step = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      step += 0.03;

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      camera.position.x = mouseX * 0.5;
      camera.position.y = 150 + -mouseY * 0.3;
      camera.lookAt(0, 0, 0);

      // Animate wave positions
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArr = posAttr.array as Float32Array;

      let idx = 0;
      for (let ix = 0; ix < numX; ix++) {
        for (let iz = 0; iz < numZ; iz++) {
          // Double sine wave pattern
          posArr[idx + 1] =
            Math.sin((ix + step) * 0.3) * 14 +
            Math.cos((iz + step) * 0.3) * 14;
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

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
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
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
