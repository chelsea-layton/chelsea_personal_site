import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="section-label mb-10">About</h2>
        </FadeIn>

        <FadeIn delay={50}>
          <p
            className="text-2xl sm:text-3xl font-light leading-snug mb-10"
            style={{ color: "var(--foreground)" }}
          >
            I&apos;m a product manager with a track record of turning ambiguous
            opportunities into products people actually use.
          </p>
        </FadeIn>

        <div className="space-y-5">
          <FadeIn delay={100}>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I&apos;ve worked across early-stage startups and growth-stage companies,
              always in the messy middle where vision meets execution. My edge is
              synthesis — I move quickly from user research and market signals to
              prioritized bets, and I bring engineers and designers along with clarity
              rather than process overhead.
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              I care about craft at every layer: the strategic, the tactical, and
              the copy on the button. Outside of product work, I&apos;m curious about
              how AI tools are reshaping knowledge work — and I use them extensively
              in my own practice, not as a shortcut but as a force multiplier for
              thinking more rigorously and shipping more intentionally.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
