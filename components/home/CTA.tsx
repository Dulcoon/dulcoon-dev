import React from "react";

const whatsappNumber = "6282253400079";
const message = encodeURIComponent("Halo, saya tertarik untuk mendiskusikan proyek digital baru dengan Anda. Apakah kita bisa mengatur waktu untuk berbicara mengenai detailnya?");
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

const CTA = () => (
  <section id="cta" style={{ padding: "0 0 80px" }}>
    <div className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24">
      <div
        className="relative overflow-hidden"
        style={{
          border: "1px solid #222822",
          borderRadius: "16px",
          padding: "52px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
        }}
      >
        {/* Left glow */}
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

        {/* Text */}
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

        {/* Button */}
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
    </div>
  </section>
);

export default CTA;
