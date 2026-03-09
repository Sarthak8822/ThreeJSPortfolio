"use client";

import { useEffect, useState } from "react";

const sections = ["hero", "about", "experience", "skills", "projects", "certifications", "contact"];

export default function SideDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={id}
          className={`block rounded-full transition-all duration-300 ${
            active === id
              ? "w-2.5 h-2.5 bg-[var(--neon)] shadow-[0_0_8px_var(--neon)]"
              : "w-1.5 h-1.5 bg-[var(--muted)] hover:bg-[var(--text)]"
          }`}
        />
      ))}
    </div>
  );
}
