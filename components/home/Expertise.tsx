import React from "react";

const Expertise = () => {
  return (
    <section className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold tracking-tight">
          Expertise in Modern <br />
          <span className="text-primary">Digital Engineering</span>
        </h2>
        <p className="text-on-surface-variant leading-relaxed text-lg">
          With a focus on performance and aesthetics, we bridge the gap between complex engineering and user-centric design. Our solutions are built to scale and impress.
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <div>
              <h4 className="font-bold">Web Development</h4>
              <p className="text-on-surface-variant text-sm">Next-gen web apps using React, Next.js, and Laravel.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <span className="material-symbols-outlined text-secondary">smartphone</span>
            </div>
            <div>
              <h4 className="font-bold">Mobile Apps</h4>
              <p className="text-on-surface-variant text-sm">Native-feel cross-platform experiences with Flutter.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="p-3 bg-tertiary/10 rounded-lg">
              <span className="material-symbols-outlined text-tertiary">database</span>
            </div>
            <div>
              <h4 className="font-bold">System Architecture</h4>
              <p className="text-on-surface-variant text-sm">Robust backends and complex API integrations.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-xl overflow-hidden glass-panel border-0 shadow-2xl">
          <img
            className="w-full h-full object-cover opacity-80"
            alt="Modern dark coding environment"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzeSY5TdZZmWNe0JuPazwq_gzBQZfuL76eIg5jFba3SxjYwFXDA05bOhit_bN3-MX4QKq9WwYtOU8Jy7Y3_Cc4HFyLIKc4XMLoI3uOIVYEqTVryiLe9ZgqQpD3kbWkGI-EhFkQavz6blDvk3LrTYvcPa95uAS8u1H762oRB5zGf8zCssctrWjj5jI3e6FmlKkxfTHSgjGxSmqU-882QUUdsCQUIKvKFWnDI5kcCg_AxRZXFOCJyn3CUVJb2cA_OxefSon3pqgKkUD0"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-lg animate-bounce">
          <div className="text-3xl font-bold text-primary">50+</div>
          <div className="text-xs uppercase tracking-widest text-on-surface-variant">Projects Delivered</div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
