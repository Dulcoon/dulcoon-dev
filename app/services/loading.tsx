import React from "react";
import { NavbarSkeleton, SkeletonBone } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <div
      className="min-h-screen flex flex-col relative"
      aria-busy="true"
      aria-label="Loading services..."
    >
      <NavbarSkeleton />

      <main className="relative flex-1">
        {/* Services Hero Skeleton */}
        <section className="section" style={{ paddingTop: "160px", paddingBottom: "60px" }}>
          <div className="wrap">
            <div style={{ maxWidth: "720px", marginBottom: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <SkeletonBone style={{ width: "110px", height: "24px", borderRadius: "100px" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <SkeletonBone style={{ width: "95%", height: "48px", borderRadius: "10px" }} />
                <SkeletonBone style={{ width: "70%", height: "48px", borderRadius: "10px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "600px", marginTop: "4px" }}>
                <SkeletonBone style={{ width: "100%", height: "16px", borderRadius: "4px" }} />
                <SkeletonBone style={{ width: "80%", height: "16px", borderRadius: "4px" }} />
              </div>
            </div>
          </div>
        </section>

        {/* Services Showcase Skeleton */}
        <section className="section wrap" style={{ paddingTop: "0px", paddingBottom: "100px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
            {/* Service Item 1 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <SkeletonBone style={{ width: "70%", height: "36px", borderRadius: "8px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <SkeletonBone style={{ width: "100%", height: "16px", borderRadius: "4px" }} />
                  <SkeletonBone style={{ width: "90%", height: "16px", borderRadius: "4px" }} />
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
                  <SkeletonBone style={{ width: "110px", height: "32px", borderRadius: "100px" }} />
                  <SkeletonBone style={{ width: "120px", height: "32px", borderRadius: "100px" }} />
                  <SkeletonBone style={{ width: "100px", height: "32px", borderRadius: "100px" }} />
                </div>
              </div>
              <div
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <SkeletonBone style={{ width: "100%", height: "100%", borderRadius: 0 }} />
              </div>
            </div>

            {/* Service Item 2 */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <SkeletonBone style={{ width: "100%", height: "100%", borderRadius: 0 }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <SkeletonBone style={{ width: "75%", height: "36px", borderRadius: "8px" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <SkeletonBone style={{ width: "100%", height: "16px", borderRadius: "4px" }} />
                  <SkeletonBone style={{ width: "85%", height: "16px", borderRadius: "4px" }} />
                </div>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
                  <SkeletonBone style={{ width: "130px", height: "32px", borderRadius: "100px" }} />
                  <SkeletonBone style={{ width: "115px", height: "32px", borderRadius: "100px" }} />
                  <SkeletonBone style={{ width: "125px", height: "32px", borderRadius: "100px" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
