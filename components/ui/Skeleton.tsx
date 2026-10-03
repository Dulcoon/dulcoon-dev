import React from "react";

export function SkeletonBone({
  className = "",
  style = {},
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`sk-bone ${className}`}
      style={style}
      aria-hidden="true"
      {...props}
    />
  );
}

export function NavbarSkeleton() {
  return (
    <header className="nav" aria-hidden="true">
      <div className="nav-inner">
        {/* Brand Logo Skeleton */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <SkeletonBone style={{ width: "28px", height: "28px", borderRadius: "8px" }} />
          <SkeletonBone style={{ width: "95px", height: "18px", borderRadius: "4px" }} />
        </div>

        {/* Center Nav Links Skeleton */}
        <div className="nav-links" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <SkeletonBone style={{ width: "60px", height: "30px", borderRadius: "100px" }} />
          <SkeletonBone style={{ width: "70px", height: "30px", borderRadius: "100px" }} />
          <SkeletonBone style={{ width: "70px", height: "30px", borderRadius: "100px" }} />
          <SkeletonBone style={{ width: "65px", height: "30px", borderRadius: "100px" }} />
        </div>

        {/* Right CTA & Toggle Skeleton */}
        <div className="nav-right" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <SkeletonBone style={{ width: "38px", height: "38px", borderRadius: "50%" }} />
          <SkeletonBone className="nav-cta" style={{ width: "170px", height: "38px", borderRadius: "100px" }} />
        </div>
      </div>
    </header>
  );
}

export function FolioCardSkeleton({ index = 1 }: { index?: number }) {
  return (
    <div className="folio-card" aria-hidden="true" style={{ cursor: "default", pointerEvents: "none" }}>
      {/* Top Meta Strip */}
      <div className="folio-card-meta">
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <SkeletonBone style={{ width: "20px", height: "12px", borderRadius: "3px" }} />
          <span style={{ color: "var(--text-faint)", fontSize: "0.72rem" }}>/</span>
          <SkeletonBone style={{ width: "60px", height: "12px", borderRadius: "3px" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--border-strong)" }} />
          <SkeletonBone style={{ width: "45px", height: "12px", borderRadius: "3px" }} />
        </div>
      </div>

      {/* Framed Viewport Showcase */}
      <div className="folio-frame">
        <div className="folio-frame-chrome">
          <div className="folio-dots">
            <span />
            <span />
            <span />
          </div>
          <SkeletonBone style={{ width: "95px", height: "10px", borderRadius: "3px" }} />
        </div>
        <div className="folio-thumb">
          <SkeletonBone style={{ width: "100%", height: "100%", borderRadius: "0" }} />
        </div>
      </div>

      {/* Body Content */}
      <div className="folio-body">
        <div className="folio-body-content">
          <SkeletonBone style={{ width: "80%", height: "24px", borderRadius: "6px", marginBottom: "12px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
            <SkeletonBone style={{ width: "100%", height: "14px", borderRadius: "4px" }} />
            <SkeletonBone style={{ width: "75%", height: "14px", borderRadius: "4px" }} />
          </div>
        </div>

        {/* Footer */}
        <div className="folio-footer">
          <div className="folio-tech-list">
            <SkeletonBone style={{ width: "50px", height: "22px", borderRadius: "6px" }} />
            <SkeletonBone style={{ width: "60px", height: "22px", borderRadius: "6px" }} />
            <SkeletonBone style={{ width: "54px", height: "22px", borderRadius: "6px" }} />
          </div>

          <SkeletonBone style={{ width: "85px", height: "28px", borderRadius: "100px" }} />
        </div>
      </div>
    </div>
  );
}
