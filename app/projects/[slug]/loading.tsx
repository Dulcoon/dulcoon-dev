import React from "react";

export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
      {/* Back button skeleton */}
      <div className="h-9 w-36 bg-[var(--border-strong)] rounded-lg mb-8 animate-pulse" />

      {/* Header section skeleton */}
      <div className="flex flex-col gap-4 max-w-3xl mb-12 animate-pulse">
        <div className="h-6 w-24 bg-[var(--border-strong)] rounded-full" />
        <div className="h-14 w-full md:w-4/5 bg-[var(--border-strong)] rounded-2xl" />
        <div className="h-5 w-full md:w-3/4 bg-[var(--border)] rounded-md" />
        <div className="h-5 w-2/3 bg-[var(--border)] rounded-md" />
        <div className="flex gap-3 mt-4">
          <div className="h-11 w-36 bg-[var(--accent)] opacity-40 rounded-xl" />
          <div className="h-11 w-44 bg-[var(--border-strong)] rounded-xl" />
        </div>
      </div>

      {/* Gallery / Image showcase skeleton */}
      <div className="w-full h-80 md:h-[460px] bg-[var(--surface)] border border-[var(--border-strong)] rounded-3xl animate-pulse flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-2 border-[var(--border-strong)] border-t-[var(--accent)] animate-spin" />
      </div>
    </div>
  );
}
