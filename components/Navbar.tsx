"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-surface-container-highest/40 backdrop-blur-xl rounded-full mt-4 mx-auto max-w-5xl border border-outline-variant/15 shadow-[0_8px_32px_0_rgba(98,54,255,0.1)] font-inter tracking-tight">
      <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        dulcoon.dev
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname?.startsWith(item.href + '/');

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`transition-all duration-300 ${isActive
                  ? "text-primary relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary-container after:rounded-full"
                  : "text-white/70 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <Link href="/contact" className="bg-gradient-to-r from-primary-container to-secondary-container px-6 py-2 rounded-full text-on-primary-container font-semibold hover:scale-95 transition-all duration-200">
        Get in Touch
      </Link>
    </nav>
  );
};

export default Navbar;
