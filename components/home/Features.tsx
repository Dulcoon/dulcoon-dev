import React from "react";

const FeatureCard = ({ icon, title, description, colorClass }: { icon: string, title: string, description: string, colorClass: string }) => (
  <div className="space-y-4">
    <span className={`material-symbols-outlined text-4xl ${colorClass}`}>{icon}</span>
    <h4 className="text-lg font-bold">{title}</h4>
    <p className="text-on-surface-variant text-sm">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: "verified_user",
      title: "Secure by Design",
      description: "Enterprise-grade security protocols in every line of code.",
      colorClass: "text-primary",
    },
    {
      icon: "speed",
      title: "Blazing Performance",
      description: "Optimized for sub-second load times and 100/100 Lighthouse scores.",
      colorClass: "text-secondary",
    },
    {
      icon: "psychology",
      title: "AI Integrated",
      description: "Leveraging smart automation to future-proof your workflows.",
      colorClass: "text-tertiary",
    },
    {
      icon: "support_agent",
      title: "Dedicated Support",
      description: "Direct access to the developer for continuous improvements.",
      colorClass: "text-primary",
    },
  ];

  return (
    <section className="glass-panel p-12 md:p-20 rounded-xl grid md:grid-cols-4 gap-12 text-center md:text-left">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </section>
  );
};

export default Features;
