import React from 'react';

const whatsappUrl = "https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20proyek%20baru.";

const ProjectsCTA = () => (
  <section className="max-w-[1900px] mx-auto px-5 md:px-16 xl:px-24 pb-24">
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        background: "#111411",
        border: "1px solid #222822",
        padding: "52px 56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "32px",
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: 0, right: 0, bottom: 0,
          background: "radial-gradient(ellipse 60% 100% at 0% 50%, rgba(168,230,0,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Dotted World Map Pattern (Right side) */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          top: 0, right: 0, bottom: 0, left: "30%",
          backgroundColor: "#a8e600",
          maskImage: "url('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/world.svg'), linear-gradient(to right, transparent, black 40%, black 100%)",
          WebkitMaskImage: "url('https://cdn.jsdelivr.net/gh/zedfar/assets@main/public/svg/map/world.svg'), linear-gradient(to right, transparent, black 40%, black 100%)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "right center",
          WebkitMaskPosition: "right center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
          opacity: 0.15
        }}
      />

      <div className="relative z-10">
        <h2
          className="font-syne text-3xl md:text-4xl font-extrabold mb-2"
          style={{ letterSpacing: "-1px", lineHeight: 1.15 }}
        >
          Ready to turn your ideas into{" "}
          <br className="hidden md:block" />
          <span style={{ color: "#a8e600" }}>digital solutions?</span>
        </h2>
        <p className="text-base" style={{ color: "#9aaa9a" }}>
          Let&apos;s build something great together.
        </p>
      </div>

      <div className="relative z-10 flex-shrink-0">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary transition-transform duration-200 hover:scale-105"
          style={{ padding: "16px 32px", fontSize: "16px", borderRadius: "8px" }}
        >
          Let&apos;s Talk
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "4px" }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default ProjectsCTA;
