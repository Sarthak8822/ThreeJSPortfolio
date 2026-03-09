"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>(".hero-anim");
    items.forEach((item, i) => {
      item.style.opacity = "0";
      item.style.transform = "translateY(30px)";
      item.style.transition = `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`;
      requestAnimationFrame(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative z-10 min-h-[100svh] flex flex-col justify-center
        pt-24 pb-16 px-5 sm:px-8 md:px-16 lg:px-28 xl:px-40"
    >
      {/* Badge */}
      <div className="hero-anim inline-block self-start mb-5 sm:mb-6">
        <span className="text-[0.6rem] sm:text-[0.68rem] tracking-[2px] sm:tracking-[3px] uppercase
          text-[var(--accent)] border border-[var(--accent)] bg-[rgba(255,77,109,0.1)]
          px-3 sm:px-4 py-1.5 sm:py-2 rounded-[2px] leading-none">
          Available for hire • Not available for bad coffee ☕
        </span>
      </div>

      {/* Name */}
      <h1
        className="hero-anim font-syne font-black leading-[0.95] tracking-[-1px] sm:tracking-[-2px] mb-5 sm:mb-6"
        style={{ fontSize: "clamp(3rem, 12vw, 8rem)" }}
      >
        <span className="block text-[var(--text)]">Sarthak</span>
        <span
          className="block glitch"
          data-text="Modhe"
          style={{
            background: "linear-gradient(90deg, #00ffe0, #00b4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Modhe
        </span>
      </h1>

      {/* Role pill row */}
      <div className="hero-anim flex flex-wrap gap-2 mb-5 sm:mb-7">
        {["Full-Stack Engineer", "Microservices Nerd", "Java Whisperer"].map((tag) => (
          <span
            key={tag}
            className="text-[0.6rem] tracking-[1.5px] uppercase px-3 py-1
              border border-[rgba(0,255,224,0.2)] text-[var(--neon)] bg-[rgba(0,255,224,0.04)] rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p className="hero-anim font-mono text-[0.78rem] sm:text-[0.85rem] text-[var(--muted)]
        leading-[1.9] max-w-[90%] sm:max-w-[520px] mb-8 sm:mb-10">
        I turn{" "}
        <em className="text-[var(--yellow)] not-italic">caffeine + Stackoverflow</em>{" "}
        into scalable backend systems.<br className="hidden sm:block" />
        Currently at Graviton — reducing costs by{" "}
        <span className="text-[var(--neon)]">50%</span> and raising eyebrows by{" "}
        <span className="text-[var(--accent)]">100%</span>.
      </p>

      {/* CTAs */}
      <div className="hero-anim flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="#contact"
          className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[2px] uppercase
            px-6 sm:px-8 py-3.5 sm:py-3 bg-[var(--neon)] text-[#060612] font-bold
            rounded-[2px] transition-all duration-200 text-center
            hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,224,0.4)] hover:-translate-y-0.5
            active:scale-95"
        >
          Let&apos;s Build Something
        </a>
        <a
          href="#experience"
          className="font-mono text-[0.7rem] sm:text-[0.72rem] tracking-[2px] uppercase
            px-6 sm:px-8 py-3.5 sm:py-3 border border-[var(--neon)] text-[var(--neon)]
            bg-transparent rounded-[2px] transition-all duration-200 text-center
            hover:bg-[rgba(0,255,224,0.08)] hover:-translate-y-0.5 active:scale-95"
        >
          See My Work
        </a>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 flex flex-col items-center gap-2
          text-[var(--muted)] text-[0.58rem] sm:text-[0.62rem] tracking-[2px] uppercase"
        style={{ transform: "translateX(-50%)", animation: "scroll-bounce 2s ease-in-out infinite" }}
      >
        Scroll
        <span className="block w-px h-8 sm:h-10 bg-gradient-to-b from-[var(--neon)] to-transparent" />
      </div>
    </section>
  );
}
