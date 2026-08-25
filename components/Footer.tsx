"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const isHome = pathname === "/";

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          {/* BRAND */}
          <div className="foot-brand">
            <Link href="/" className="logo-brand" aria-label="dulcoon.dev homepage">
              <img
                src="/logo-putih.png"
                alt="dulcoon.dev logo"
                width={36}
                height={36}
                className="logo-img logo-img-dark"
              />
              <img
                src="/logo-hitam.png"
                alt="dulcoon.dev logo"
                width={36}
                height={36}
                className="logo-img logo-img-light"
              />
              <span className="logo-text">dulcoon.dev</span>
            </Link>
            <p>
              Full-stack developer &amp; IT solutions studio based in Indonesia, building high-performance products for businesses that want to move fast.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="foot-col">
            <h3 className="foot-col-title">Quick Links</h3>
            <Link href={isHome ? "#home" : "/"}>Home</Link>
            <Link href={isHome ? "#services" : "/services"}>Services</Link>
            <Link href={isHome ? "#projects" : "/projects"}>Projects</Link>
            <Link href={isHome ? "#contact" : "/contact"}>Contact</Link>
          </div>

          {/* CONTACT */}
          <div className="foot-col">
            <h3 className="foot-col-title">Contact</h3>
            <a href="mailto:dulcoon.dev@gmail.com">dulcoon.dev@gmail.com</a>
            <a href="https://wa.me/6282253400079" target="_blank" rel="noopener noreferrer">
              +62 822-5340-0079
            </a>
            <span style={{ color: "var(--text-muted)", fontSize: "0.92rem", display: "block", paddingTop: "6px" }}>
              Indonesia
            </span>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="foot-bottom">
          <p>© {year} dulcoon.dev — All rights reserved.</p>
          <div className="social-row">
            <a
              href="https://github.com/dulcoon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="icon" viewBox="0 0 24 24" strokeWidth="1.6">
                <path d="M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1-1.5-1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.6-.1-.3-.5-1.3.1-2.7 0 0 .8-.3 2.7 1a9 9 0 014.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.6 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 2v3c0 .3.2.6.7.5A10 10 0 0012 2z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/dulcoon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg className="icon" viewBox="0 0 24 24" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" />
              </svg>
            </a>
            <a
              href="https://wa.me/6282253400079"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <svg className="icon" viewBox="0 0 24 24" strokeWidth="1.6">
                <path d="M4 20l1.3-3.9A8 8 0 1112 20a8 8 0 01-4.9-1.7z" />
                <path d="M9 9c0 3 2 5 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
