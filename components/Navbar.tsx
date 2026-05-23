"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { 
      name: "Home", 
      href: "/",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    },
    { 
      name: "Services", 
      href: "/services",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    },
    { 
      name: "Projects", 
      href: "/projects",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-16 xl:px-24"
        style={{
          height: "68px",
          background: "rgba(11, 13, 11, 0.45)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(168, 230, 0, 0.12)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-syne text-2xl font-extrabold tracking-tight"
          style={{ letterSpacing: "-0.5px" }}
        >
          dulcoon<span style={{ color: "#a8e600" }}>.dev</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname?.startsWith(item.href + "/");
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="transition-colors duration-200 text-[15px] font-semibold"
                  style={{
                    color: isActive ? "#a8e600" : "#9aaa9a",
                    fontFamily: "var(--font-dm)",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 btn-primary text-[15px] font-semibold"
          >
            Get a Free Consultation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile Bottom Navbar (Glassmorphism) */}
      <nav
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center justify-between w-[92%] max-w-[340px] px-4 py-2.5 rounded-full"
        style={{
          background: "rgba(16, 18, 16, 0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(168, 230, 0, 0.12)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
        }}
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href || pathname?.startsWith(item.href + "/");
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center w-14 h-12 transition-colors duration-300 ${
                isActive ? "text-[#a8e600]" : "text-[#7a8a7a] hover:text-[#f5f5f5]"
              }`}
            >
              {item.icon}
              <span className="text-[11px] font-bold mt-1 tracking-wider">{item.name}</span>
            </Link>
          );
        })}
        {/* Contact CTA in bottom nav */}
        <Link
          href="/contact"
          className={`relative flex flex-col items-center justify-center w-14 h-12 transition-colors duration-300 ${
            pathname === "/contact" ? "text-[#a8e600]" : "text-[#7a8a7a] hover:text-[#f5f5f5]"
          }`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span className="text-[11px] font-bold mt-1 tracking-wider">Contact</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
