import React from "react";

const ServiceCard = ({ icon, title, description, colorClass }: { icon: string, title: string, description: string, colorClass: string }) => (
  <div className="glass-panel p-8 rounded-xl group hover:-translate-y-2 transition-all duration-300">
    <span className={`material-symbols-outlined text-4xl ${colorClass} mb-6 block`}>{icon}</span>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">{description}</p>
    <a className={`${colorClass} font-semibold flex items-center gap-2 group-hover:gap-4 transition-all`} href="#">
      Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </a>
  </div>
);

const Services = () => {
  const serviceData = [
    {
      icon: "web",
      title: "Business Website",
      description: "High-conversion landing pages and corporate sites built for performance.",
      colorClass: "text-primary",
    },
    {
      icon: "event_available",
      title: "Booking System",
      description: "Automated scheduling and reservation systems for luxury services.",
      colorClass: "text-secondary",
    },
    {
      icon: "shopping_bag",
      title: "E-commerce",
      description: "Scalable online stores with seamless payment and inventory management.",
      colorClass: "text-tertiary",
    },
    {
      icon: "developer_mode",
      title: "Mobile App Dev",
      description: "iOS and Android applications that provide a native premium feel.",
      colorClass: "text-primary",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
        <p className="text-on-surface-variant">Tailored digital solutions for every business need.</p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {serviceData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
