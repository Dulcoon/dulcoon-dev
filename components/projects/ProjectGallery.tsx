"use client";

import React, { useState, useEffect, useCallback } from "react";

interface ProjectGalleryProps {
  gallery: string[];
  projectTitle: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ gallery, projectTitle }) => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setSelectedIdx(null), []);

  const nextImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % gallery.length);
    }
  }, [selectedIdx, gallery.length]);

  const prevImage = useCallback(() => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + gallery.length) % gallery.length);
    }
  }, [selectedIdx, gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, closeLightbox, nextImage, prevImage]);

  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIdx]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="section" style={{ paddingTop: "20px" }}>
      <div className="wrap">
        <div className="section-head" data-reveal style={{ textAlign: "center", marginBottom: "40px" }}>
          <span className="section-tag">Visual Showcase</span>
          <h2 className="section-title">Project Screenshots</h2>
        </div>

        {/* Gallery Grid */}
        <div
          data-reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {gallery.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedIdx(i)}
              className="folio-card"
              style={{
                flex: "1 1 340px",
                maxWidth: "540px",
                cursor: "pointer",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--border)",
                background: "var(--bg-soft)",
                transition: "all 0.3s var(--ease)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxHeight: "420px",
                  overflow: "hidden",
                  background: "var(--surface-2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px",
                }}
              >
                <img
                  alt={`${projectTitle} screenshot ${i + 1}`}
                  src={img}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "380px",
                    objectFit: "contain",
                    borderRadius: "var(--radius-sm)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    transition: "transform 0.5s var(--ease)",
                  }}
                  className="gallery-thumb-img"
                />
                {/* Hover overlay icon */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--accent-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.3s var(--ease)",
                  }}
                  className="folio-hover-overlay"
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      color: "var(--accent-ink)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg className="icon" viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }}>
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: "14px 18px",
                  borderTop: "1px solid var(--border)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                  }}
                >
                  Screenshot 0{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                  }}
                >
                  Expand ↗
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(12px)",
            }}
            onClick={closeLightbox}
          />

          {/* Close Button */}
          <button
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              zIndex: 1001,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={closeLightbox}
            aria-label="Close modal"
          >
            <svg className="icon" viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Nav arrows */}
          {gallery.length > 1 && (
            <>
              <button
                style={{
                  position: "absolute",
                  left: "24px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1001,
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={prevImage}
                aria-label="Previous image"
              >
                <svg className="icon" viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }}>
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                style={{
                  position: "absolute",
                  right: "24px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1001,
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
                onClick={nextImage}
                aria-label="Next image"
              >
                <svg className="icon" viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }}>
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </>
          )}

          {/* Image Container */}
          <div
            style={{
              position: "relative",
              zIndex: 1000,
              maxWidth: "90vw",
              maxHeight: "85vh",
              background: "var(--bg-soft)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "16px",
              boxShadow: "var(--shadow)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[selectedIdx]}
              alt={`${projectTitle} screenshot`}
              style={{
                maxWidth: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                borderRadius: "var(--radius-md)",
              }}
            />
            <div
              style={{
                marginTop: "12px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                display: "flex",
                gap: "6px",
              }}
            >
              <span style={{ color: "var(--accent)" }}>{selectedIdx + 1}</span> / {gallery.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
