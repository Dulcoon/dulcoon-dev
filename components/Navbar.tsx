"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const currentTheme =
      (document.documentElement.getAttribute("data-theme") as "dark" | "light") || "dark";
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {}
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(href + "/");
  };

  return (
    <>
      {/* ===== DESKTOP / MAIN NAVBAR ===== */}
      <nav className="nav">
        <div className="nav-inner">
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

          <div className="nav-links">
            {navItems.map((item) => {
              const active = isLinkActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={active ? "active" : ""}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              type="button"
            >
              {/* Sun Icon for Light Mode */}
              <svg className="icon icon-sun" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
              {/* Moon Icon for Dark Mode */}
              <svg className="icon icon-moon" viewBox="0 0 24 24">
                <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
              </svg>
            </button>

            <Link href="/contact" className="btn btn-primary nav-cta">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE BOTTOM PILL NAV ===== */}
      <div className="mobile-tab">
        <Link
          href="/"
          className={pathname === "/" ? "active" : ""}
          aria-label="Home"
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3 11l9-8 9 8" />
            <path d="M5 10v10h14V10" />
          </svg>
        </Link>
        <Link
          href="/services"
          className={pathname?.startsWith("/services") ? "active" : ""}
          aria-label="Services"
        >
          <svg className="icon" viewBox="0 0 24 24">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
          </svg>
        </Link>
        <Link
          href="/projects"
          className={pathname?.startsWith("/projects") ? "active" : ""}
          aria-label="Projects"
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3 6a1 1 0 011-1h5l2 2h9a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1z" />
          </svg>
        </Link>
        <Link
          href="/contact"
          className={pathname?.startsWith("/contact") ? "active" : ""}
          aria-label="Contact"
        >
          <svg className="icon" viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 6l10 7 10-7" />
          </svg>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
