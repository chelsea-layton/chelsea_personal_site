"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="min-h-screen flex flex-col md:grid md:grid-cols-[55%_45%] overflow-hidden"
    >
      {/* Mobile: image strip (shown above text on small screens) */}
      <div
        className="relative md:hidden w-full"
        style={{ height: "60vw" }}
      >
        <Image
          src="/headshot.jpg"
          alt="Chelsea Layton"
          fill
          className="object-cover object-top"
          style={{ filter: "saturate(0.85)" }}
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(196, 137, 106, 0.06)" }}
        />
      </div>

      {/* Left: text block */}
      <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-16 md:pt-0 pb-12 md:py-0">
        <div ref={ref} className="fade-in">
          <p className="section-label mb-8">Product Manager</p>

          <h1
            className="text-6xl sm:text-7xl md:text-8xl font-normal leading-none mb-8"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              color: "var(--foreground)",
            }}
          >
            Chelsea
            <br />
            Layton
          </h1>

          {/* Accent rule — decorative */}
          <div
            aria-hidden="true"
            className="w-12 h-px mb-8"
            style={{ backgroundColor: "var(--accent)" }}
          />

          <p
            className="text-lg sm:text-xl font-light leading-relaxed max-w-md"
            style={{ color: "var(--muted)" }}
          >
            Product @ Workday. Currently building with Cursor and Claude Code.
          </p>

          {/* Scroll cue — decorative */}
          <div aria-hidden="true" className="mt-16 flex items-center gap-3">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--border)" }} />
            <span
              className="text-xs tracking-widest uppercase font-medium"
              style={{ color: "var(--muted)", letterSpacing: "0.15em" }}
            >
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Right: headshot image (desktop only) */}
      <div className="relative hidden md:block">
        <Image
          src="/headshot.jpg"
          alt="Chelsea Layton"
          fill
          className="object-cover object-center"
          style={{ filter: "saturate(0.85)" }}
          priority
        />
        {/* Subtle warm overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(196, 137, 106, 0.06)" }}
        />
      </div>
    </section>
  );
}
