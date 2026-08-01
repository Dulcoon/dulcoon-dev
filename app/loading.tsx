import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative py-20 px-6">
      {/* Top indicator bar */}
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-8 opacity-60 animate-pulse">
        <div className="h-6 w-32 bg-[var(--border-strong)] rounded-full mx-auto" />
        <div className="h-12 w-3/4 max-w-xl bg-[var(--border-strong)] rounded-xl mx-auto" />
        <div className="h-4 w-1/2 max-w-md bg-[var(--border)] rounded-md mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="h-64 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-4">
            <div className="h-6 w-1/3 bg-[var(--border-strong)] rounded-md" />
            <div className="h-4 w-5/6 bg-[var(--border)] rounded-md" />
            <div className="h-4 w-4/6 bg-[var(--border)] rounded-md" />
            <div className="mt-auto h-10 w-28 bg-[var(--border-strong)] rounded-lg" />
          </div>
          <div className="h-64 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 flex flex-col gap-4">
            <div className="h-6 w-1/3 bg-[var(--border-strong)] rounded-md" />
            <div className="h-4 w-5/6 bg-[var(--border)] rounded-md" />
            <div className="h-4 w-4/6 bg-[var(--border)] rounded-md" />
            <div className="mt-auto h-10 w-28 bg-[var(--border-strong)] rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}
