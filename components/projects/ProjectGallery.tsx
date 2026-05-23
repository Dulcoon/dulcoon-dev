"use client";

import React, { useState, useEffect, useCallback } from 'react';

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, closeLightbox, nextImage, prevImage]);

  // Lock body scroll
  useEffect(() => {
    if (selectedIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIdx]);

  if (gallery.length === 0) return null;

  return (
    <section className="mb-24">
      <h2 className="font-syne text-3xl font-extrabold mb-12" style={{ letterSpacing: "-1px" }}>Project Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((img, i) => (
          <div 
            key={i} 
            className="aspect-square rounded-xl overflow-hidden p-3 group cursor-pointer bg-[#141714] border border-[#222822] hover:border-[rgba(168,230,0,0.3)] transition-all duration-300"
            onClick={() => setSelectedIdx(i)}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#0b0d0b]">
              <img 
                alt={`${projectTitle} screenshot ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                src={img} 
              />
              <div className="absolute inset-0 bg-[#141714]/0 group-hover:bg-[#141714]/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#a8e600" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0b0d0b]/90 backdrop-blur-md"
            onClick={closeLightbox}
          />

          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 z-[110] p-3 rounded-full bg-[#141714] border border-[#222822] text-[#9aaa9a] hover:text-[#a8e600] hover:border-[#a8e600] transition-all active:scale-90"
            onClick={closeLightbox}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          {/* Navigation */}
          {gallery.length > 1 && (
            <>
              <button 
                className="absolute left-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-[#141714] border border-[#222822] text-[#9aaa9a] hover:text-[#a8e600] hover:border-[#a8e600] transition-all active:scale-75 hidden md:flex items-center justify-center"
                onClick={prevImage}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <button 
                className="absolute right-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full bg-[#141714] border border-[#222822] text-[#9aaa9a] hover:text-[#a8e600] hover:border-[#a8e600] transition-all active:scale-75 hidden md:flex items-center justify-center"
                onClick={nextImage}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
            </>
          )}

          {/* Large Image Container */}
          <div 
            className="relative z-[105] max-w-full max-h-full bg-[#111411] border border-[#222822] p-2 rounded-2xl shadow-[0_0_80px_rgba(168,230,0,0.05)] overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={gallery[selectedIdx]} 
              alt={`${projectTitle} full screenshot`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg" 
            />
            
            {/* Image Indicator/Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0b0d0b]/80 border border-[#222822] px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <span style={{ color: "#a8e600" }}>{selectedIdx + 1}</span>
              <span style={{ color: "#6a7a6a" }}>/</span>
              <span style={{ color: "#9aaa9a" }}>{gallery.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
