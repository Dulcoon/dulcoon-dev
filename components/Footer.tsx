import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const services = [
    { name: "Business Website", href: "/services" },
    { name: "Web Application", href: "/services" },
    { name: "Mobile App Development", href: "/services" },
    { name: "UI/UX Design", href: "/services" },
    { name: "E-Commerce", href: "/services" },
    { name: "Maintenance & Support", href: "/services" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "#",
      icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    },
    {
      label: "GitHub",
      href: "#",
      icon: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>,
    },
    {
      label: "Instagram",
      href: "#",
      icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6282253400079",
      icon: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></>,
    },
  ];

  return (
    <footer style={{ background: "#111411", borderTop: "1px solid #222822" }}>
      <div className="max-w-[1900px] mx-auto px-8 md:px-16 xl:px-24">

        {/* Top grid */}
        <div
          className="grid gap-10 py-16"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
        >
          {/* Brand */}
          <div className="col-span-full lg:col-span-1" style={{ maxWidth: "220px" }}>
            <div className="font-syne text-lg font-extrabold mb-4" style={{ letterSpacing: "-0.5px" }}>
              dulcoon<span style={{ color: "#a8e600" }}>.dev</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#9aaa9a" }}>
              I help businesses transform ideas into powerful digital solutions through technology and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-syne text-sm font-bold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 text-[#9aaa9a] hover:text-[#a8e600]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-syne text-sm font-bold mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {services.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-sm transition-colors duration-200 text-[#9aaa9a] hover:text-[#a8e600]"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-syne text-sm font-bold mb-5">Contact</h4>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "#9aaa9a" }}>
              <span>dulcoon.dev@gmail.com</span>
              <span>+62 822-5340-0079</span>
              <span className="mt-1">Indonesia</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-2 mt-6">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center transition-all duration-200 border border-[#222822] bg-[rgba(255,255,255,0.03)] text-[#9aaa9a] hover:border-[#a8e600] hover:bg-[rgba(168,230,0,0.08)]"
                  style={{
                    width: "34px",
                    height: "34px",
                    borderRadius: "6px",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-5"
          style={{ borderTop: "1px solid #222822" }}
        >
          <p className="text-xs" style={{ color: "#6a7a6a" }}>
            © {year} dulcoon.dev. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[["Privacy Policy", "#"], ["Terms of Service", "#"]].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs transition-colors duration-200 text-[#6a7a6a] hover:text-[#a8e600]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
