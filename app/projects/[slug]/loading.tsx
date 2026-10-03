import React from "react";
import { NavbarSkeleton, SkeletonBone } from "@/components/ui/Skeleton";

export default function ProjectDetailLoading() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      aria-busy="true"
      aria-label="Loading project details..."
    >
      <NavbarSkeleton />

      <main style={{ flex: 1, paddingTop: "110px", paddingBottom: "100px" }}>
        {/* Hero Section Skeleton */}
        <section className="section wrap project-detail-hero">
          {/* Breadcrumb skeleton */}
          <div style={{ marginBottom: "24px" }}>
            <SkeletonBone style={{ width: "165px", height: "36px", borderRadius: "100px" }} />
          </div>

          <div
            className="project-detail-head"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              maxWidth: "800px",
            }}
          >
            {/* Category tag */}
            <SkeletonBone style={{ width: "95px", height: "24px", borderRadius: "100px" }} />

            {/* Title */}
            <SkeletonBone style={{ width: "85%", height: "48px", borderRadius: "10px" }} />

            {/* Short description */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <SkeletonBone style={{ width: "100%", height: "16px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "75%", height: "16px", borderRadius: "4px" }} />
            </div>

            {/* Tags row */}
            <div
              className="project-detail-tags"
              style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "4px" }}
            >
              <SkeletonBone style={{ width: "75px", height: "24px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "85px", height: "24px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "65px", height: "24px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "90px", height: "24px", borderRadius: "100px" }} />
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
              <SkeletonBone style={{ width: "155px", height: "44px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "190px", height: "44px", borderRadius: "100px" }} />
            </div>
          </div>

          {/* Hero Banner Showcase Skeleton */}
          <div
            className="project-detail-banner"
            style={{
              marginTop: "48px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              aspectRatio: "16/9",
              position: "relative",
              background: "var(--surface-2)",
              boxShadow: "var(--shadow)",
            }}
          >
            <SkeletonBone style={{ width: "100%", height: "100%", borderRadius: 0 }} />
          </div>
        </section>

        {/* Overview & Impact Grid Skeleton */}
        <section className="section wrap project-overview-grid" style={{ paddingTop: "20px" }}>
          {/* Left Column: Overview and Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <SkeletonBone style={{ width: "130px", height: "18px", borderRadius: "4px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <SkeletonBone style={{ width: "100%", height: "16px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "96%", height: "16px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "82%", height: "16px", borderRadius: "4px" }} />
            </div>

            {/* Mission & Client info cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                marginTop: "12px",
              }}
            >
              <div
                style={{
                  background: "var(--bg-soft)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <SkeletonBone style={{ width: "90px", height: "14px", borderRadius: "4px" }} />
                <SkeletonBone style={{ width: "100%", height: "14px", borderRadius: "4px" }} />
                <SkeletonBone style={{ width: "70%", height: "14px", borderRadius: "4px" }} />
              </div>

              <div
                style={{
                  background: "var(--bg-soft)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <SkeletonBone style={{ width: "80px", height: "14px", borderRadius: "4px" }} />
                <SkeletonBone style={{ width: "100%", height: "14px", borderRadius: "4px" }} />
                <SkeletonBone style={{ width: "60%", height: "14px", borderRadius: "4px" }} />
              </div>
            </div>
          </div>

          {/* Right Column: Impact Metric Card Skeleton */}
          <div>
            <div
              className="project-impact-card"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)",
                padding: "48px 32px",
                textAlign: "center",
                background: "var(--bg-soft)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "14px",
                boxShadow: "var(--shadow)",
              }}
            >
              <SkeletonBone style={{ width: "54px", height: "54px", borderRadius: "50%" }} />
              <SkeletonBone style={{ width: "130px", height: "40px", borderRadius: "8px" }} />
              <SkeletonBone style={{ width: "120px", height: "16px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "180px", height: "12px", borderRadius: "4px" }} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
