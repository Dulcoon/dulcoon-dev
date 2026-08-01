import React from "react";

const whatsappUrl =
  "https://wa.me/6282253400079?text=Halo%2C%20saya%20tertarik%20untuk%20mendiskusikan%20proyek%20baru.";

const ProjectsCTA = () => (
  <section className="section" style={{ paddingTop: 0 }}>
    <div className="wrap">
      <div className="cta-box" data-reveal>
        <h2>Have a project in mind? Let&apos;s build it together.</h2>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary magnetic"
          >
            Start a Project
            <svg className="icon" viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="/services" className="btn btn-ghost">
            View Services
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectsCTA;
