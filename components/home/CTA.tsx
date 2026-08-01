"use client";

import React from "react";

const whatsappNumber = "6282253400079";
const message = encodeURIComponent(
  "Halo, saya tertarik untuk mendiskusikan proyek digital baru dengan Anda. Apakah kita bisa mengatur waktu untuk berbicara mengenai detailnya?"
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

const CTA = () => (
  <section className="section" id="contact">
    <div className="wrap">
      <div className="cta-box" data-reveal>
        <h2>Ready to turn your ideas into digital solutions?</h2>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary magnetic"
        >
          Chat on WhatsApp
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
