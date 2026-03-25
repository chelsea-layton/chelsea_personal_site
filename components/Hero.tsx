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

  // #region agent log
  useEffect(() => {
    const logFrame = (label: "mobile" | "desktop", frame: HTMLDivElement | null) => {
      if (!frame) return;
      const img = frame.querySelector("img");
      const rect = frame.getBoundingClientRect();
      const dpr = window.devicePixelRatio ?? 1;
      const minSourceW = Math.ceil(rect.width * dpr);
      const minSourceH = Math.ceil(rect.height * dpr);
      const payload = {
        sessionId: "d6f449",
        runId: "pre-fix",
        hypothesisId: "H1-H2-H3",
        location: "Hero.tsx:logFrame",
        message: "hero image layout vs decoded bitmap",
        timestamp: Date.now(),
        data: {
          label,
          innerWidth: window.innerWidth,
          dpr,
          containerCssW: Math.round(rect.width),
          containerCssH: Math.round(rect.height),
          minSourceW,
          minSourceH,
          hasImg: Boolean(img),
          naturalW: img?.naturalWidth ?? null,
          naturalH: img?.naturalHeight ?? null,
          imgClientW: img?.clientWidth ?? null,
          imgClientH: img?.clientHeight ?? null,
          likelyUnderserved:
            img != null && img.naturalWidth > 0
              ? img.naturalWidth < minSourceW * 0.92 || img.naturalHeight < minSourceH * 0.92
              : null,
          currentSrcHasWidthParam: img?.currentSrc.includes("w=") ?? null,
        },
      };
      fetch("http://127.0.0.1:7499/ingest/06ef5644-0c2a-41d0-bb59-e83a3d488930", {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "d6f449" },
        body: JSON.stringify(payload),
      }).catch(() => {});
    };

    const run = () => {
      logFrame("mobile", mobileFrameRef.current);
      logFrame("desktop", desktopFrameRef.current);
    };

    const imgs = new Set<HTMLImageElement>();
    for (const frame of [mobileFrameRef.current, desktopFrameRef.current]) {
      const im = frame?.querySelector("img");
      if (im) imgs.add(im);
    }
    const onImg = () => run();
    imgs.forEach((im) => im.addEventListener("load", onImg, { passive: true }));

    run();
    window.addEventListener("load", run);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(run) : null;
    if (ro) {
      if (mobileFrameRef.current) ro.observe(mobileFrameRef.current);
      if (desktopFrameRef.current) ro.observe(desktopFrameRef.current);
    }
    return () => {
      imgs.forEach((im) => im.removeEventListener("load", onImg));
      window.removeEventListener("load", run);
      ro?.disconnect();
    };
  }, []);
  // #endregion

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
