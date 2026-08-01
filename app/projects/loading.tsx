import React from "react";

export default function ProjectsLoading() {
  return (
    <div className="min-h-screen flex flex-col pt-32 pb-20 px-6 max-w-6xl mx-auto w-full">
      {/* Header skeleton */}
      <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto mb-16 animate-pulse">
        <div className="h-6 w-28 bg-[var(--border-strong)] rounded-full" />
        <div className="h-12 w-3/4 bg-[var(--border-strong)] rounded-xl" />
        <div className="h-4 w-5/6 bg-[var(--border)] rounded-md" />
      </div>

      {/* Grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="h-80 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col justify-between animate-pulse"
          >
            <div className="h-44 w-full bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl" />
            <div className="flex flex-col gap-2 mt-4">
              <div className="h-5 w-1/3 bg-[var(--border-strong)] rounded-md" />
              <div className="h-6 w-2/3 bg-[var(--border-strong)] rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
