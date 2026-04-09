"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sun,
  Moon,
  Menu as MenuIcon,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav
        className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between gap-6"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 text-xl font-bold shrink-0 group"
          aria-label="MedCare Clinic home"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-amber-500 group-hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="24"
              height="24"
              rx="6"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="14"
              y1="8"
              x2="14"
              y2="20"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <line
              x1="8"
              y1="14"
              x2="20"
              y2="14"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className={cn(scrolled ? "text-foreground" : "text-white")}>
            Med<span className="text-primary">Care</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 hover:text-amber-500 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]",
                  scrolled ? "text-muted" : "text-white/70 hover:text-amber-400"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Mobile hamburger */}
          <button
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors",
              scrolled
                ? "text-foreground hover:bg-surface-alt"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border">
          <ul className="flex flex-col py-4 px-6 gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 px-4 text-sm font-medium text-foreground/80 hover:text-amber-500 hover:bg-amber-500/5 rounded-2xl transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
