import React from "react";
import { NavbarSkeleton, SkeletonBone, FolioCardSkeleton } from "@/components/ui/Skeleton";

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen flex flex-col relative" aria-busy="true" aria-label="Loading projects...">
      <NavbarSkeleton />

      <main className="relative flex-1">
        {/* Projects Hero Header Skeleton */}
        <section className="projects-hero wrap" style={{ paddingTop: "140px", paddingBottom: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "700px" }}>
            <SkeletonBone style={{ width: "120px", height: "26px", borderRadius: "100px" }} />
            <SkeletonBone style={{ width: "90%", height: "46px", borderRadius: "10px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <SkeletonBone style={{ width: "85%", height: "16px", borderRadius: "4px" }} />
              <SkeletonBone style={{ width: "65%", height: "16px", borderRadius: "4px" }} />
            </div>

            {/* Filter pills bar skeleton */}
            <div style={{ display: "flex", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
              <SkeletonBone style={{ width: "55px", height: "34px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "95px", height: "34px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "105px", height: "34px", borderRadius: "100px" }} />
              <SkeletonBone style={{ width: "85px", height: "34px", borderRadius: "100px" }} />
            </div>
          </div>
        </section>

        {/* Projects Grid Skeleton (4 cards matching the exact folio-card anatomy) */}
        <section className="section wrap" style={{ paddingTop: "20px", paddingBottom: "80px" }}>
          <div className="folio-grid">
            <FolioCardSkeleton index={1} />
            <FolioCardSkeleton index={2} />
            <FolioCardSkeleton index={3} />
            <FolioCardSkeleton index={4} />
          </div>
        </section>
      </main>
    </div>
  );
}
