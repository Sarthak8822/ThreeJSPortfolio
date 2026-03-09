"use client";

import { useReveal } from "@/hooks/useReveal";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Java", hot: true },
      { name: "Python", hot: true },
      { name: "JavaScript", hot: false },
      { name: "C++", hot: false },
      { name: "SQL", hot: false },
      { name: "Golang (gRPC)", hot: false },
    ],
  },
  {
    label: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", hot: true },
      { name: "React", hot: true },
      { name: "Next.js", hot: false },
      { name: "Node.js", hot: false },
      { name: "Express", hot: false },
      { name: "Redux", hot: false },
      { name: "React Native", hot: false },
    ],
  },
  {
    label: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", hot: false },
      { name: "MySQL", hot: false },
      { name: "MongoDB", hot: false },
      { name: "AWS", hot: true },
      { name: "OCI", hot: false },
      { name: "Firebase", hot: false },
      { name: "Docker", hot: false },
      { name: "CI/CD", hot: false },
    ],
  },
  {
    label: "Tools & Others",
    skills: [
      { name: "Git / GitHub", hot: false },
      { name: "IntelliJ IDEA", hot: false },
      { name: "DBeaver", hot: false },
      { name: "BI Publisher", hot: false },
      { name: "Visual Builder", hot: false },
      { name: "NewRelic", hot: false },
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center
        py-20 sm:py-24 px-5 sm:px-8 md:px-12"
    >
      <div className="max-w-4xl w-full">
        <div className="text-center mb-10 sm:mb-14 reveal-child">
          <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] block mb-3 sm:mb-4">
            03 — Skills
          </span>
          <h2
            className="font-syne font-black leading-tight"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
          >
            My Tech Arsenal
          </h2>
          <p className="text-[var(--muted)] text-[0.75rem] sm:text-[0.8rem] mt-2 italic">
            (not just on my resume — I&apos;ve actually used these in production)
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          {skillGroups.map((group, i) => (
            <div key={i} className="reveal-child">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-[0.58rem] sm:text-[0.62rem] tracking-[3px] uppercase text-[var(--neon)] shrink-0">
                  {group.label}
                </span>
                <span className="flex-1 h-px bg-[var(--border)]" />
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag${skill.hot ? " hot" : ""} text-[0.68rem] sm:text-[0.72rem]`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun note */}
        <div className="reveal-child mt-10 sm:mt-12 p-4 sm:p-5 border border-[rgba(255,233,77,0.2)]
          bg-[rgba(255,233,77,0.04)] text-[0.72rem] sm:text-[0.78rem] text-[var(--yellow)] italic leading-[1.7]">
          💡 <strong>Pro tip for recruiters:</strong> The{" "}
          <span className="text-[var(--accent)] not-italic">red ones</span> = &quot;I&apos;ll rebuild
          your backend this weekend.&quot; The others = &quot;give me a day and the docs.&quot; Both valid.
        </div>
      </div>
    </section>
  );
}
