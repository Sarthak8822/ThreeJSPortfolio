import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ThreeCanvas = dynamic(() => import("@/components/ThreeCanvas"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });
const SideDots = dynamic(() => import("@/components/SideDots"), { ssr: false });

export default function Home() {
  return (
    <main className="grain relative">
      <ThreeCanvas />
      <Cursor />
      <Navbar />
      <SideDots />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
