import React from 'react';

const ProjectsCTA = () => {
  return (
    <section className="container px-6 mx-auto py-32">
      <div className="glass-panel rounded-xl p-12 md:p-24 relative overflow-hidden text-center">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">Ready to build your project?</h2>
          <p className="text-lg md:text-xl text-on-surface-variant mb-12">
            Let's collaborate to transform your vision into a premium digital experience that commands attention and drives growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-gradient-to-r from-primary to-secondary text-on-primary px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(98,54,255,0.3)] transition-all">
              Start a Project
            </button>
            <button className="text-white font-bold flex items-center gap-2 group hover:text-primary transition-colors">
              Book a Strategy Session
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;
