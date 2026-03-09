"use client";

import { useReveal } from "@/hooks/useReveal";

const stats = [
  { num: "2+", label: "Years Exp" },
  { num: "10+", label: "Shipped" },
  { num: "50%", label: "Cost ↓" },
  { num: "10M+", label: "Contracts" },
  { num: "25+", label: "Mentees" },
  { num: "∞", label: "StackOverflow" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center
        py-20 sm:py-24 px-5 sm:px-8 md:px-12"
    >
      <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] mb-8 sm:mb-12 self-start sm:self-center">
        01 — About
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl w-full">
        {/* Left */}
        <div className="reveal-child">
          <h2
            className="font-syne font-black leading-[1.1] mb-5 sm:mb-6"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3.2rem)" }}
          >
            I write code.<br />
            It actually works.
          </h2>
          <p className="text-[var(--muted)] text-[0.8rem] sm:text-[0.82rem] leading-[1.9] mb-4">
            Software Engineer based in Pune, India with a B.Tech in IT from SGSITS, Indore{" "}
            <span className="text-[var(--text)]">(CGPA: 8.1 — yes, I also did my homework)</span>.
          </p>
          <p className="text-[var(--muted)] text-[0.8rem] sm:text-[0.82rem] leading-[1.9] mb-4">
            I build robust backend systems, microservices architectures, and full-stack apps.
            From HR payroll interfaces for US county clients to gRPC microservices at Zomato —
            I&apos;ve shipped code that matters at scale.
          </p>
          <p className="text-[var(--muted)] text-[0.8rem] sm:text-[0.82rem] leading-[1.9] mb-6">
            When I&apos;m not writing Spring Boot services or wrangling SQL queries, I&apos;m
            mentoring juniors and organizing coding events.
          </p>
          <blockquote className="border-l-[3px] border-[var(--yellow)] bg-[rgba(255,233,77,0.05)]
            px-4 sm:px-5 py-3 sm:py-4 text-[0.75rem] sm:text-[0.78rem] text-[var(--yellow)] italic leading-[1.7]">
            &ldquo;I have deployed to production on a Friday and survived. I fear nothing.&rdquo;
          </blockquote>
        </div>

        {/* Stats grid */}
        <div className="reveal-child grid grid-cols-3 sm:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)] self-start lg:self-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-box bg-[var(--bg)] p-4 sm:p-6 text-center group
                transition-colors duration-300 hover:bg-[rgba(0,255,224,0.04)]"
            >
              <span className="font-syne font-black text-2xl sm:text-3xl lg:text-4xl text-[var(--neon)]
                block leading-none mb-1 sm:mb-2 group-hover:scale-105 transition-transform duration-200">
                {s.num}
              </span>
              <span className="text-[0.55rem] sm:text-[0.62rem] tracking-[1px] sm:tracking-[1.5px] uppercase text-[var(--muted)] leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
