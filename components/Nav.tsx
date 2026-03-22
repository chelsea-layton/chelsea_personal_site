"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(250,248,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Name / logo */}
        <a
          href="#"
          className="text-sm font-medium tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Chelsea Layton
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm transition-opacity duration-150 hover:opacity-60"
                style={{ color: "var(--accent)" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground)",
              transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-200"
            style={{
              backgroundColor: "var(--foreground)",
              transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t"
          style={{
            backgroundColor: "rgba(250,248,245,0.97)",
            borderColor: "var(--border)",
          }}
        >
          <ul className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm"
                  style={{ color: "var(--accent)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
