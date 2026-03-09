import type { Metadata } from "next";
import { Syne, Space_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sarthak Modhe — Software Engineer",
  description:
    "Full-Stack Engineer & Microservices Enthusiast. I turn caffeine + Stackoverflow into scalable backend systems.",
  keywords: ["Sarthak Modhe", "Software Engineer", "Full Stack", "Java", "React", "Spring Boot"],
  openGraph: {
    title: "Sarthak Modhe — Not Just Another Dev",
    description: "Full-Stack Engineer building things that actually scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${syne.variable} ${spaceMono.variable} bg-[#060612] text-[#e8e8f0] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
