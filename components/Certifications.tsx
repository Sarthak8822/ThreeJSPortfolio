"use client";

import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative z-10 py-20 sm:py-24 px-5 sm:px-8 md:px-12 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full">
        {/* ── CERTIFICATIONS ── */}
        <div className="text-center mb-10 sm:mb-14 reveal-child">
          <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] block mb-3 sm:mb-4">
            05 — Certifications
          </span>
          <h2
            className="font-syne font-black leading-tight"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)" }}
          >
            Official Proof I Know Stuff
          </h2>
          <p className="text-[var(--muted)] text-[0.75rem] sm:text-[0.8rem] mt-2 italic">
            (Oracle said so, not just my mom)
          </p>
        </div>

        {/* Oracle Cert Card */}
        <a
          href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=BD8B7AB6C64E4C2AA5F859F46EE42611804F738AF99B701066A2DE23529B4037"
          target="_blank"
          rel="noopener noreferrer"
          className="reveal-child group block border border-[var(--border)] bg-[rgba(255,255,255,0.03)]
            backdrop-blur-sm overflow-hidden mb-6 no-underline
            transition-all duration-300 hover:border-[var(--neon)] hover:-translate-y-1
            hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]
            max-w-3xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row">
            {/* Left — badge screenshot */}
            <div className="relative w-full sm:w-56 shrink-0 overflow-hidden bg-[rgba(0,0,0,0.3)]
              border-b sm:border-b-0 sm:border-r border-[var(--border)]">
              <Image
                src="/oracle-cert.png"
                alt="Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate"
                width={400}
                height={300}
                className="w-full h-48 sm:h-full object-cover object-top opacity-90
                  group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[rgba(6,6,18,0.6)] to-transparent" />
            </div>

            {/* Right — details */}
            <div className="p-5 sm:p-7 flex flex-col justify-between flex-1">
              <div>
                {/* Issuer badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[0.6rem] tracking-[2px] uppercase text-[var(--neon)]
                    border border-[rgba(0,255,224,0.3)] bg-[rgba(0,255,224,0.06)] px-2.5 py-1 rounded-full">
                    Oracle Certified
                  </span>
                  <span className="text-[0.6rem] tracking-[1.5px] uppercase text-[var(--muted)]">2025</span>
                </div>

                <h3 className="font-syne font-bold text-base sm:text-lg text-[var(--text)] mb-2 leading-tight">
                  Oracle Cloud Infrastructure<br />
                  <span className="text-[var(--neon)]">AI Foundations Associate</span>
                </h3>

                <p className="text-[0.72rem] sm:text-[0.75rem] text-[var(--muted)] leading-[1.7] mb-4">
                  Foundational knowledge of AI and ML concepts within Oracle Cloud Infrastructure.
                  Covers supervised/unsupervised learning, deep learning fundamentals, and practical
                  LLM applications. Valid until{" "}
                  <span className="text-[var(--text)]">October 31, 2027</span>.
                </p>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {["AI/ML Fundamentals", "OCI Platform", "Deep Learning", "LLMs", "GenAI"].map((s) => (
                    <span
                      key={s}
                      className="text-[0.58rem] tracking-[0.5px] px-2 py-0.5
                        border border-[rgba(255,233,77,0.25)] bg-[rgba(255,233,77,0.05)]
                        text-[var(--yellow)] rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[0.7rem] tracking-[1px] uppercase
                text-[var(--neon)] group-hover:gap-3 transition-all duration-200">
                <span>View Certificate</span>
                <span className="text-base leading-none">→</span>
              </div>
            </div>
          </div>
        </a>

        {/* ── RESUME ── */}
        <div className="mt-16 sm:mt-20 reveal-child">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[0.62rem] tracking-[4px] uppercase text-[var(--neon)] block mb-3">
              Resume
            </span>
            <h2
              className="font-syne font-black leading-tight mb-2"
              style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)" }}
            >
              The Old-Fashioned Kind
            </h2>
            <p className="text-[var(--muted)] text-[0.75rem] italic">
              (for recruiters who still use ATS systems — no judgement)
            </p>
          </div>

          {/* PDF preview card */}
          <div className="border border-[var(--border)] bg-[rgba(255,255,255,0.02)] overflow-hidden max-w-3xl mx-auto">
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[var(--border)]
              bg-[rgba(0,0,0,0.3)]">
              <span className="text-[0.62rem] tracking-[2px] uppercase text-[var(--muted)]">
                Sarthak_Modhe_Resume.pdf
              </span>
              <div className="flex gap-2">
                <a
                  href="/Sarthak_Modhe_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.62rem] tracking-[1.5px] uppercase text-[var(--neon)]
                    border border-[rgba(0,255,224,0.3)] bg-[rgba(0,255,224,0.06)]
                    px-3 py-1 hover:bg-[rgba(0,255,224,0.14)] transition-colors no-underline"
                >
                  View ↗
                </a>
                <a
                  href="/Sarthak_Modhe_Resume.pdf"
                  download="Sarthak_Modhe_Resume.pdf"
                  className="text-[0.62rem] tracking-[1.5px] uppercase text-[#060612]
                    bg-[var(--neon)] px-3 py-1 font-bold
                    hover:bg-white transition-colors no-underline"
                >
                  Download ↓
                </a>
              </div>
            </div>

            {/* Embedded PDF */}
            <div className="w-full" style={{ height: "clamp(400px, 70vh, 720px)" }}>
              <iframe
                src="/Sarthak_Modhe_Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                className="w-full h-full border-0"
                title="Sarthak Modhe Resume"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
