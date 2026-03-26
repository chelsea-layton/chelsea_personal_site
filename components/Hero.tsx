"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mobileFrameRef = useRef<HTMLDivElement>(null);
  const desktopFrameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const timer = setTimeout(() => el.classList.add("visible"), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="min-h-[100dvh] flex flex-col md:grid md:grid-cols-[55%_45%] overflow-hidden"
    >
      {/* Mobile: image strip (shown above text on small screens) */}
      <div
        ref={mobileFrameRef}
        className="relative md:hidden w-full aspect-[5/4] max-h-[min(72vw,22rem)] min-h-[12rem] mx-auto"
      >
        <Image
          src="/headshot.jpg"
          alt="Chelsea Layton"
          fill
          className="object-cover object-center"
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
      <div className="flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 pt-[calc(3.5rem+env(safe-area-inset-top))] md:pt-0 pb-12 md:py-0">
        <div ref={ref} className="fade-in">
          <p className="section-label mb-8">Product Manager</p>

          <h1
            className="text-[clamp(2.625rem,11vw,4.5rem)] sm:text-7xl md:text-8xl font-normal leading-[1.02] sm:leading-none tracking-tight sm:tracking-normal mb-6 sm:mb-8"
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
            className="text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-md text-pretty"
            style={{ color: "var(--muted)" }}
          >
            Product @ Workday. Currently building with Cursor and Claude Code.
          </p>

          {/* Scroll cue — decorative */}
          <div aria-hidden="true" className="mt-10 sm:mt-16 flex items-center gap-3">
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
      <div ref={desktopFrameRef} className="relative hidden md:block">
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
