"use client";

import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation entirely for users who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}
