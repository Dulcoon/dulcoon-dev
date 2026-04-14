import React from 'react';

const ServicesHero = () => {
  return (
    <section className="relative px-8 mb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(98,54,255,0.15)_0%,transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-1 rounded-full border border-outline-variant/20 bg-surface-container-highest/30 backdrop-blur-sm">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Innovation Redefined</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 bg-gradient-to-b from-on-surface to-on-surface-variant bg-clip-text text-transparent">
          Premium Digital Solutions
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed">
          We transform ambitious businesses through high-end technology, creating immersive digital experiences that resonate with the modern elite.
        </p>
        <div className="flex flex-wrap justify-center gap-4 relative">
          <div className="w-24 h-24 rounded-full bg-primary/10 blur-3xl absolute -left-10 top-20 pointer-events-none"></div>
          <div className="w-32 h-32 rounded-full bg-secondary/10 blur-3xl absolute -right-10 bottom-0 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
