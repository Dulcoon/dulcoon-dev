import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-surface-container-low rounded-t-[3rem] font-inter text-sm text-white/50">
      <div className="flex flex-col items-center md:items-start gap-2">
        <div className="text-lg font-bold text-white">dulcoon.dev</div>
        <div className="opacity-80 hover:opacity-100 transition-colors">
          © 2024 dulcoon.dev. All rights reserved.
        </div>
      </div>
      <div className="flex gap-8">
        <a className="text-white/50 hover:text-tertiary-fixed-dim transition-colors" href="#">
          Terms
        </a>
        <a className="text-white/50 hover:text-tertiary-fixed-dim transition-colors" href="#">
          Privacy
        </a>
        <a className="text-white/50 hover:text-tertiary-fixed-dim transition-colors" href="#">
          WhatsApp
        </a>
        <a className="text-white/50 hover:text-tertiary-fixed-dim transition-colors" href="#">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
