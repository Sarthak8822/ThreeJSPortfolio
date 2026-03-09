"use client";

import { useReveal } from "@/hooks/useReveal";

const experiences = [
  {
    company: "Graviton",
    companyHighlight: "Consulting Services",
    role: "Software Engineer",
    location: "Hybrid, Pune",
    date: "Jan 2024 — Present",
    accentColor: "#00ffe0",
    bullets: [
      <>Built backend automation for high-volume <strong>Purchase Order ingestion</strong> using Java, Spring Boot, Python, SQL &amp; NoSQL — <strong>cut costs by 50%</strong> (boss was very happy, team got chai)</>,
      <>Architected a <strong>loosely coupled data integration layer</strong> for Time &amp; Labor data from legacy systems — <strong>40% higher throughput</strong>, 0% grey hairs (almost)</>,
      <>Deployed <strong>10+ Payroll &amp; HR Interfaces</strong> for US county clients — owned complete SDLC from analysis to production support</>,
      <>Enhanced <strong>ReactJS interfaces</strong> for a contract management system: <strong>10K+ users, 10M+ contracts</strong>. Performance so smooth users thought it was a native app</>,
      <>Optimized queries, API payloads &amp; data transformation across Java, Python, JS &amp; SQL in enterprise-scale distributed systems</>,
    ],
  },
  {
    company: "Zomato",
    companyHighlight: "",
    role: "Software Engineer Intern",
    location: "Gurugram",
    date: "May 2023 — Aug 2023",
    accentColor: "#ff4d6d",
    bullets: [
      <>Built a <strong>scalable coupon-generation service</strong> + graph-based chatbot visualizer using Golang, Python, ReactJS, AWS &amp; NewRelic — internal tooling efficiency went brrr</>,
      <>Engineered <strong>5+ high-performance gRPC microservices</strong> — faster response times, happier engineers, fewer 3am pages</>,
      <>Collaborated with <strong>100+ engineers, designers &amp; PMs</strong> across distributed systems — basically herding cats, but make it microservices</>,
      <>Won a <strong>Hackathon</strong> — built a Decentraland metaverse site. 4/5 jury members impressed. The 5th couldn&apos;t figure out his VR headset.</>,
    ],
  },
  {
    company: "Cloudraft",
    companyHighlight: ".io",
    role: "Frontend Developer Intern",
    location: "Remote",
    date: "Feb 2023 — Mar 2023",
    accentColor: "#ffe94d",
    bullets: [
      <>Reconstructed the <strong>cloudraft.io website</strong> — <strong>25% faster page load</strong>, <strong>15% lower bounce rate</strong>. Users stayed. Marketing was shocked.</>,
      <>Delivered a faster, more efficient website experience through <strong>performance optimizations</strong> — users were actually happy, which is rare</>,
      <>Enhanced overall <strong>user satisfaction</strong> by shipping a polished, responsive frontend that didn&apos;t make people cry</>,
    ],
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center
        py-20 sm:py-24 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10 sm:mb-14 reveal-child">
          <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] block mb-3 sm:mb-4">
            02 — Experience
          </span>
          <h2
            className="font-syne font-black leading-tight"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
          >
            Where I&apos;ve Shipped Code
          </h2>
          <p className="text-[var(--muted)] text-[0.75rem] sm:text-[0.8rem] mt-2 italic">
            (and occasionally broken things at 2am — but that&apos;s a feature, not a bug)
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal-child group border border-[var(--border)]
                bg-[rgba(255,255,255,0.03)] backdrop-blur-sm
                p-5 sm:p-7 md:p-8 relative overflow-hidden
                transition-all duration-300 hover:border-[rgba(0,255,224,0.5)] hover:translate-x-1"
              style={{ "--exp-accent": exp.accentColor } as React.CSSProperties}
            >
              {/* Left accent bar */}
              <span
                className="absolute top-0 left-0 w-[3px] h-full scale-y-0 group-hover:scale-y-100
                  transition-transform duration-300 origin-bottom"
                style={{ background: exp.accentColor }}
              />

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-5">
                <div className="min-w-0">
                  <div className="font-syne font-bold text-lg sm:text-xl text-[var(--text)] flex flex-wrap items-center gap-1">
                    {exp.companyHighlight ? (
                      <>
                        <span>{exp.company}</span>
                        <span style={{ color: exp.accentColor }}>{exp.companyHighlight}</span>
                      </>
                    ) : (
                      <span style={{ color: exp.accentColor }}>{exp.company}</span>
                    )}
                  </div>
                  <div className="text-[0.68rem] sm:text-[0.72rem] text-[var(--muted)] mt-0.5">
                    {exp.role} — {exp.location}
                  </div>
                </div>
                <span
                  className="self-start shrink-0 text-[0.58rem] sm:text-[0.62rem] tracking-[1.5px]
                    border px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[2px] whitespace-nowrap"
                  style={{
                    color: exp.accentColor,
                    borderColor: `${exp.accentColor}44`,
                    background: `${exp.accentColor}12`,
                  }}
                >
                  {exp.date}
                </span>
              </div>

              <ul className="space-y-1.5 sm:space-y-2">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-[0.75rem] sm:text-[0.78rem] text-[var(--muted)] leading-[1.75]
                      pl-4 sm:pl-5 relative [&_strong]:text-[var(--text)]"
                  >
                    <span className="absolute left-0" style={{ color: exp.accentColor }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
