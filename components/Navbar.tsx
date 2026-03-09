"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Hire Me", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center
          px-5 sm:px-8 md:px-12 py-4 md:py-5 transition-all duration-500
          ${scrolled || menuOpen
            ? "bg-[rgba(6,6,18,0.95)] backdrop-blur-xl border-b border-[rgba(0,255,224,0.12)]"
            : "bg-transparent"}`}
      >
        <Link
          href="#hero"
          onClick={closeMenu}
          className="font-syne font-black text-xl tracking-widest text-[var(--neon)] hover:opacity-80 transition-opacity z-10"
        >
          SM<span className="text-[var(--accent)]">.</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[var(--muted)] text-[0.68rem] tracking-[2px] uppercase no-underline
                  transition-colors duration-200 relative group hover:text-[var(--neon)]"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--neon)] transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden z-10 flex flex-col justify-center items-center gap-[5px] w-9 h-9 bg-transparent border-none p-1"
          style={{ cursor: "pointer" }}
        >
          <span className={`block h-[1.5px] bg-[var(--neon)] transition-all duration-300 origin-center ${menuOpen ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"}`} />
          <span className={`block h-[1.5px] bg-[var(--neon)] transition-all duration-300 ${menuOpen ? "w-0 opacity-0" : "w-4"}`} />
          <span className={`block h-[1.5px] bg-[var(--neon)] transition-all duration-300 origin-center ${menuOpen ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"}`} />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center
          bg-[rgba(6,6,18,0.98)] backdrop-blur-2xl transition-all duration-500 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <span className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent" />
        <ul className="flex flex-col items-start gap-1 list-none w-full px-8">
          {links.map((l, i) => (
            <li key={l.href} className="w-full">
              <a
                href={l.href}
                onClick={closeMenu}
                className="flex items-center gap-4 py-4 font-syne font-black text-[1.8rem] sm:text-[2.2rem]
                  text-[var(--muted)] no-underline transition-all duration-200
                  border-b border-[rgba(255,255,255,0.05)] hover:text-[var(--neon)] hover:pl-3"
                style={{
                  transform: menuOpen ? "translateX(0)" : "translateX(-24px)",
                  opacity: menuOpen ? 1 : 0,
                  transition: `color 0.2s, padding 0.2s, transform 0.45s ease ${i * 70}ms, opacity 0.45s ease ${i * 70}ms`,
                }}
              >
                <span className="font-mono text-xs text-[var(--neon)] tracking-widest w-6">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-12 text-center px-6">
          <p className="text-[0.6rem] tracking-[3px] text-[var(--muted)] uppercase mb-3">Get in touch</p>
          <a href="mailto:sarthakpravin08@gmail.com" className="text-[var(--neon)] text-sm no-underline break-all">
            sarthakpravin08@gmail.com
          </a>
        </div>
        <span className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      </div>
    </>
  );
}
