import React from "react";

const whatsappUrl =
  "https://wa.me/6282253400079?text=Halo%2C%20saya%20ingin%20mendiskusikan%20proyek%20baru.";

const ServicesCTA = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="wrap">
      <div className="cta-box" data-reveal>
        <h2>Ready to turn your ideas into digital solutions?</h2>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary magnetic"
          >
            Let&apos;s Talk
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="/projects" className="btn btn-ghost">
            View My Work
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesCTA;
