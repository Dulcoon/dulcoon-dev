import React from "react";

const Hero = () => {
  return (
    <section className="relative flex h-screen min-h-[700px] flex-col items-center justify-center text-center px-6">
      <div className="glass-panel p-12 md:p-20 rounded-[2.5rem] max-w-5xl z-10 mt-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight mb-6">
          Build Your Business Online with <span className="hero-gradient-text">Premium Digital Solutions</span>
        </h1>
        <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 font-light">
          We create high-performance web and mobile experiences tailored for high-end brands and tech innovators.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <a href="#recent-projects" className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-on-primary font-bold shadow-[0_0_20px_rgba(201,191,255,0.3)] hover:scale-105 transition-all">
            View Recent Projects
          </a>
          <a href="#cta" className="glass-panel px-8 py-4 rounded-full text-white font-medium hover:bg-white/5 transition-all border-white/20">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
