import FadeIn from "./FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="section-label mb-8 justify-center">Contact</h2>
        </FadeIn>

        <FadeIn delay={50}>
          <h2
            className="text-[clamp(1.625rem,5vw,2.25rem)] sm:text-4xl font-light leading-snug mb-6 text-pretty px-1"
            style={{ color: "var(--foreground)" }}
          >
            Get in touch
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p
            className="text-base leading-relaxed mb-10 max-w-md mx-auto"
            style={{ color: "var(--muted)" }}
          >
            I&apos;m selectively open to new roles and conversations about
            interesting problems. If something feels like a fit, reach out.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <a
              href="mailto:hi.chelsea.layton@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 min-h-11 rounded-sm transition-opacity hover:opacity-70 active:opacity-80 touch-manipulation"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              Email me
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/hichelsea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-medium px-6 py-3.5 min-h-11 rounded-sm transition-opacity hover:opacity-70 active:opacity-80 touch-manipulation"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              LinkedIn
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 10L10 2M10 2H4M10 2V8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Footer */}
      <footer
        className="max-w-5xl mx-auto mt-16 md:mt-24 pt-8 pb-2 text-center px-2"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Chelsea Layton
        </p>
      </footer>
    </section>
  );
}
