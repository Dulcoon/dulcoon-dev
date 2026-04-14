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
      <h2 className="text-3xl font-bold text-white mb-12">Project Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((img, i) => (
          <div 
            key={i} 
            className="aspect-square rounded-xl overflow-hidden glass-panel p-3 group cursor-pointer"
            onClick={() => setSelectedIdx(i)}
          >
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <img 
                alt={`${projectTitle} screenshot ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={img} 
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-500">
                <span className="material-symbols-outlined text-white text-4xl">zoom_in</span>
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
            className="absolute inset-0 bg-surface-container-lowest/90 backdrop-blur-2xl"
            onClick={closeLightbox}
          ></div>

          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 z-[110] p-3 rounded-full glass-panel text-white hover:bg-white/10 transition-all active:scale-90"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>

          {/* Navigation */}
          {gallery.length > 1 && (
            <>
              <button 
                className="absolute left-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full glass-panel text-white hover:bg-white/10 transition-all active:scale-75 hidden md:flex items-center justify-center"
                onClick={prevImage}
              >
                <span className="material-symbols-outlined text-4xl">arrow_back_ios_new</span>
              </button>
              <button 
                className="absolute right-8 top-1/2 -translate-y-1/2 z-[110] p-4 rounded-full glass-panel text-white hover:bg-white/10 transition-all active:scale-75 hidden md:flex items-center justify-center"
                onClick={nextImage}
              >
                <span className="material-symbols-outlined text-4xl">arrow_forward_ios</span>
              </button>
            </>
          )}

          {/* Large Image Container */}
          <div 
            className="relative z-[105] max-w-full max-h-full glass-panel p-2 rounded-2xl shadow-[0_0_100px_rgba(201,191,255,0.2)] overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={gallery[selectedIdx]} 
              alt={`${projectTitle} full screenshot`} 
              className="max-w-full max-h-[85vh] object-contain rounded-lg" 
            />
            
            {/* Image Indicator/Caption */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-surface-container-highest/60 backdrop-blur-md px-6 py-2 rounded-full border border-outline-variant/20 text-on-surface-variant font-medium text-sm flex items-center gap-2">
              <span className="text-white">{selectedIdx + 1}</span>
              <span className="opacity-40">/</span>
              <span>{gallery.length}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
