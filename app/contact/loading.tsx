import React from "react";
import { NavbarSkeleton, SkeletonBone } from "@/components/ui/Skeleton";

export default function ContactLoading() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      aria-busy="true"
      aria-label="Loading contact..."
    >
      <NavbarSkeleton />

      <main style={{ minHeight: "100vh", paddingTop: "120px", paddingBottom: "100px" }}>
        {/* Contact Hero Skeleton */}
        <section className="contact-hero-section wrap" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <SkeletonBone style={{ width: "240px", height: "28px", borderRadius: "100px", marginBottom: "16px" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", width: "100%", maxWidth: "700px" }}>
            <SkeletonBone style={{ width: "85%", height: "48px", borderRadius: "10px" }} />
            <SkeletonBone style={{ width: "65%", height: "48px", borderRadius: "10px" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", maxWidth: "600px", marginTop: "16px", width: "100%" }}>
            <SkeletonBone style={{ width: "90%", height: "16px", borderRadius: "4px" }} />
            <SkeletonBone style={{ width: "70%", height: "16px", borderRadius: "4px" }} />
          </div>
        </section>

        {/* Split Grid Skeleton */}
        <section className="wrap" style={{ marginTop: "40px" }}>
          <div className="contact-split-grid">
            {/* Left: Direct Channels */}
            <div className="contact-channels-wrapper" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <SkeletonBone style={{ width: "120px", height: "18px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "220px", height: "28px", borderRadius: "6px", marginBottom: "8px" }} />

              {/* 4 Cards */}
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="contact-card"
                  style={{
                    cursor: "default",
                    pointerEvents: "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    minHeight: "130px",
                  }}
                >
                  <div>
                    <div className="contact-card-header" style={{ marginBottom: "12px" }}>
                      <SkeletonBone style={{ width: "42px", height: "42px", borderRadius: "10px" }} />
                      {i === 1 && <SkeletonBone style={{ width: "130px", height: "22px", borderRadius: "100px" }} />}
                    </div>
                    <SkeletonBone style={{ width: "140px", height: "20px", borderRadius: "4px", marginBottom: "8px" }} />
                    <SkeletonBone style={{ width: "90%", height: "14px", borderRadius: "4px" }} />
                  </div>
                  <SkeletonBone style={{ width: "110px", height: "14px", borderRadius: "4px", marginTop: "12px" }} />
                </div>
              ))}
            </div>

            {/* Right: Contact Form Skeleton */}
            <div>
              <SkeletonBone style={{ width: "100px", height: "18px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "240px", height: "28px", borderRadius: "6px", marginBottom: "16px" }} />

              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <div>
                  <SkeletonBone style={{ width: "90px", height: "14px", borderRadius: "4px", marginBottom: "8px" }} />
                  <SkeletonBone style={{ width: "100%", height: "48px", borderRadius: "10px" }} />
                </div>
                <div>
                  <SkeletonBone style={{ width: "110px", height: "14px", borderRadius: "4px", marginBottom: "8px" }} />
                  <SkeletonBone style={{ width: "100%", height: "48px", borderRadius: "10px" }} />
                </div>
                <div>
                  <SkeletonBone style={{ width: "130px", height: "14px", borderRadius: "4px", marginBottom: "8px" }} />
                  <SkeletonBone style={{ width: "100%", height: "120px", borderRadius: "10px" }} />
                </div>
                <SkeletonBone style={{ width: "100%", height: "50px", borderRadius: "100px", marginTop: "10px" }} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
