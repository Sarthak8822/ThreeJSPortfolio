"use client";

import { useReveal } from "@/hooks/useReveal";

const contacts = [
  { icon: "✉", label: "sarthakpravin08@gmail.com", href: "mailto:sarthakpravin08@gmail.com" },
  { icon: "in", label: "LinkedIn", href: "https://linkedin.com/in/sarthakmodhe" },
  { icon: "⌥", label: "GitHub", href: "https://github.com/Sarthak8822" },
  { icon: "☏", label: "+91-7415623383", href: "tel:+917415623383" },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center
        py-20 sm:py-24 px-5 sm:px-8 md:px-12 text-center"
    >
      <div className="max-w-2xl w-full reveal-child">
        <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] block mb-5 sm:mb-6">
          06 — Contact
        </span>
        <h2
          className="font-syne font-black leading-[1.1] mb-5 sm:mb-6"
          style={{ fontSize: "clamp(2.2rem, 7vw, 4.5rem)" }}
        >
          Let&apos;s Build<br />
          <span style={{
            background: "linear-gradient(90deg, #00ffe0, #00b4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Something Great
          </span>
        </h2>
        <p className="text-[var(--muted)] text-[0.78rem] sm:text-[0.82rem] leading-[1.9] mb-3 sm:mb-4 px-2 sm:px-0">
          Open to exciting opportunities. Challenging problems, bold ideas, or just want
          to talk microservices at 3am — I&apos;m your guy.
        </p>
        <p className="text-[var(--yellow)] italic text-[0.75rem] sm:text-[0.8rem] mb-8 sm:mb-10">
          ⚡ I respond to emails faster than my APIs respond to requests.
        </p>

        {/* Contact links — each item on one row, no overflow */}
        <div className="flex flex-col gap-3 items-center">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 w-full max-w-sm
                px-5 py-3.5 border border-[var(--border)]
                bg-[rgba(255,255,255,0.03)] text-[var(--text)] no-underline
                transition-all duration-200
                hover:border-[var(--neon)] hover:text-[var(--neon)]
                hover:bg-[rgba(0,255,224,0.06)] hover:-translate-y-1
                active:scale-95"
            >
              <span className="text-base leading-none shrink-0 w-5 text-center text-[var(--neon)]">
                {c.icon}
              </span>
              <span className="text-[0.72rem] tracking-[0.5px] leading-tight text-left truncate">
                {c.label}
              </span>
              <span className="ml-auto text-[0.6rem] text-[var(--muted)] group-hover:text-[var(--neon)] transition-colors">
                →
              </span>
            </a>
          ))}
        </div>

        {/* Location tag */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 text-[0.65rem] tracking-[2px] uppercase text-[var(--muted)]">
          <span className="w-2 h-2 rounded-full bg-[var(--neon)] inline-block animate-pulse" />
          Based in Pune, India • Open to Remote
        </div>
      </div>
    </section>
  );
}
