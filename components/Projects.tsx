"use client";

import { useReveal } from "@/hooks/useReveal";

const projects = [
  {
    num: "01",
    name: "Personal Finance Manager",
    tech: "Java • Spring Boot • React Native • PostgreSQL",
    desc: "Enterprise-grade personal finance platform with Springboot microservices (User, Transaction, Budget, Report, Eureka, API Gateway) and PostgreSQL multi-schema design. 30+ REST APIs with strict bounded-context isolation.",
    highlight: "🚀 150ms API latency via indexing & query optimization. JWT + BCrypt security. AI-driven financial insights. Because knowing you're broke should at least be fast.",
    link: "https://github.com/Sarthak8822",
  },
  {
    num: "02",
    name: "Job Hunt Platform",
    tech: "Next.js • RapidAPI • AcertinityUI",
    desc: "Job discovery platform with a unified API layer that merges multi-source job data. Fast, responsive UI with smart caching and routing for a seamless UX.",
    highlight: "⚡ 20% faster job load times. Built to find jobs — ironically the best proof that you don't need one.",
    link: "https://github.com/Sarthak8822",
  },
  {
    num: "03",
    name: "Metaverse Walkthrough",
    tech: "Decentraland • Open Source • Web3",
    desc: "Hackathon project — built an innovative metaverse site on Decentraland enabling realistic virtual walkthroughs with enhanced accessibility and immersive navigation.",
    highlight: "🏆 4/5 jury members impressed at Zomato Hackathon. The 5th one was still figuring out how to use a mouse.",
    link: "https://github.com/Sarthak8822",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center
        py-20 sm:py-24 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-5xl w-full">
        <div className="text-center mb-10 sm:mb-14 reveal-child">
          <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] block mb-3 sm:mb-4">
            04 — Projects
          </span>
          <h2
            className="font-syne font-black leading-tight"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
          >
            Things I Built at 2am
          </h2>
          <p className="text-[var(--muted)] text-[0.75rem] sm:text-[0.8rem] mt-2 italic">
            (because sleep is overrated when you&apos;re in flow state)
          </p>
        </div>

        {/* Responsive grid: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card reveal-child group block border border-[var(--border)]
                bg-[rgba(255,255,255,0.03)] backdrop-blur-sm p-5 sm:p-6 lg:p-7
                relative overflow-hidden no-underline
                transition-all duration-300
                hover:border-[var(--neon)] hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
                active:scale-[0.98]"
            >
              {/* Hover overlay */}
              <span className="absolute inset-0 bg-gradient-to-br from-[rgba(0,255,224,0.04)] to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number watermark */}
              <span className="absolute top-1 right-4 font-syne font-black text-4xl sm:text-5xl
                text-[rgba(0,255,224,0.05)] leading-none select-none pointer-events-none">
                {p.num}
              </span>

              <div className="font-syne font-bold text-base sm:text-[1.1rem] lg:text-[1.15rem]
                text-[var(--text)] mb-1.5 relative">
                {p.name}
              </div>
              <div className="text-[0.58rem] sm:text-[0.62rem] tracking-[1.5px] uppercase text-[var(--neon)] mb-3 sm:mb-4">
                {p.tech}
              </div>
              <p className="text-[0.74rem] sm:text-[0.78rem] text-[var(--muted)] leading-[1.75] mb-4 relative">
                {p.desc}
              </p>
              <div className="border-l-2 border-[var(--yellow)] bg-[rgba(255,233,77,0.05)]
                px-3 sm:px-4 py-2.5 sm:py-3 text-[0.68rem] sm:text-[0.72rem] text-[var(--yellow)] leading-[1.65] relative">
                {p.highlight}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
