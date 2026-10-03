import React from "react";
import { NavbarSkeleton, SkeletonBone, FolioCardSkeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col relative" aria-busy="true" aria-label="Loading page...">
      <NavbarSkeleton />

      {/* Hero Section Skeleton */}
      <section className="hero" id="home">
        <div className="wrap hero-grid">
          {/* Left Column Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {/* Live Eyebrow Pill */}
            <SkeletonBone style={{ width: "260px", height: "30px", borderRadius: "100px" }} />

            {/* Massive Hero Title */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "10px" }}>
              <SkeletonBone style={{ width: "88%", height: "54px", borderRadius: "12px" }} />
              <SkeletonBone style={{ width: "68%", height: "54px", borderRadius: "12px" }} />
            </div>

            {/* Subtitle */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "8px", maxWidth: "480px" }}>
              <SkeletonBone style={{ width: "100%", height: "16px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "75%", height: "16px", borderRadius: "4px" }} />
            </div>

            {/* Actions CTA */}
            <div style={{ display: "flex", gap: "14px", marginTop: "18px", flexWrap: "wrap" }}>
              <SkeletonBone style={{ width: "140px", height: "46px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "130px", height: "46px", borderRadius: "100px" }} />
            </div>

            {/* Badges row */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "22px" }}>
              <SkeletonBone style={{ width: "140px", height: "30px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "130px", height: "30px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "125px", height: "30px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "135px", height: "30px", borderRadius: "100px" }} />
            </div>
          </div>

          {/* Right Column 3D Laptop Stage */}
          <div className="hero-visual">
            <div className="device-stack" style={{ animation: "none" }}>
              <div
                className="sk-card"
                style={{
                  width: "100%",
                  aspectRatio: "16 / 10",
                  borderRadius: "20px",
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Simulated MacBook notch & screen header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: "6px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--border-strong)" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--border-strong)" }} />
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--border-strong)" }} />
                  </div>
                  <SkeletonBone style={{ width: "80px", height: "12px", borderRadius: "4px" }} />
                </div>
                {/* Screen viewport */}
                <SkeletonBone style={{ flex: 1, width: "100%", borderRadius: "12px" }} />
              </div>

              {/* Floating chips skeleton */}
              <div className="float-chip c1" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--border-strong)" }} />
                <SkeletonBone style={{ width: "70px", height: "12px", borderRadius: "4px" }} />
              </div>

              <div className="float-chip c2" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
                <SkeletonBone style={{ width: "14px", height: "14px", borderRadius: "4px" }} />
                <SkeletonBone style={{ width: "80px", height: "12px", borderRadius: "4px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Preview Skeleton below */}
      <section className="section" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="section-head" style={{ marginBottom: "36px" }}>
            <SkeletonBone style={{ width: "100px", height: "18px", borderRadius: "100px", marginBottom: "12px" }} />
            <SkeletonBone style={{ width: "320px", height: "36px", borderRadius: "8px", marginBottom: "8px" }} />
            <SkeletonBone style={{ width: "240px", height: "16px", borderRadius: "4px" }} />
          </div>

          <div className="folio-grid">
            <FolioCardSkeleton index={1} />
            <FolioCardSkeleton index={2} />
            <FolioCardSkeleton index={3} />
            <FolioCardSkeleton index={4} />
          </div>
        </div>
      </section>
    </div>
  );
}
