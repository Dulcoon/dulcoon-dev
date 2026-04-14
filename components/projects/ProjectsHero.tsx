import React from 'react';

const ProjectsHero = () => {
  return (
    <section className="relative min-h-[819px] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_0%_0%,#6236ff_0%,transparent_50%),radial-gradient(circle_at_100%_0%,#d80478_0%,transparent_50%),radial-gradient(circle_at_100%_100%,#4cd6ff_0%,transparent_50%),radial-gradient(circle_at_0%_100%,#5d2ffa_0%,transparent_50%)] bg-[#0b1326] -z-10"></div>
      <div className="container relative z-10 px-6 mx-auto text-center">
        <div className="glass-panel inline-block px-12 py-16 rounded-xl border-white/10 mb-8 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Selected Works
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Crafting high-end digital experiences for innovators and premium brands. Our portfolio showcases the intersection of architectural precision and fluid design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
