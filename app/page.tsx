'use use client';

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <main id="main-content">
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </main>
    </>
  );
}
