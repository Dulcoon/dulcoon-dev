import React from "react";

const CTA = () => {
  const whatsappNumber = "6282253400079";
  const message = encodeURIComponent("Halo, saya tertarik untuk mendiskusikan proyek digital baru dengan Anda. Apakah kita bisa mengatur waktu untuk berbicara mengenai detailnya?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section id="cta" className="glass-panel p-16 md:p-24 rounded-xl text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-50"></div>
      <div className="relative z-10 space-y-8">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">Let's Build Your Digital Presence</h2>
        <p className="text-on-surface-variant text-lg max-w-xl mx-auto">
          Ready to elevate your business with world-class engineering? We're just a message away.
        </p>
        <div className="flex justify-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,211,102,0.3)]"
          >
            <span className="material-symbols-outlined">chat</span>
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
