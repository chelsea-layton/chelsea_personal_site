import FadeIn from "./FadeIn";

const tools = [
  {
    name: "Claude",
    by: "Anthropic",
    description:
      "My primary thinking partner. I use it for PRD drafts, user research synthesis, competitive analysis, and stress-testing assumptions before bringing them to the team.",
  },
  {
    name: "Cursor",
    by: "Anysphere",
    description:
      "AI-native code editor. I use it to prototype features, read codebases with engineers, and write quick scripts — letting me speak the language of the people I build with.",
  },
  {
    name: "Perplexity",
    by: "Perplexity AI",
    description:
      "Real-time research. I use it to quickly map competitive landscapes, surface recent funding or product news, and get grounded in a space before going deeper.",
  },
  {
    name: "Notion AI",
    by: "Notion",
    description:
      "Where my team's knowledge lives — and where AI helps me summarize meeting notes, draft specs from bullet points, and keep async communication tight.",
  },
  {
    name: "v0",
    by: "Vercel",
    description:
      "Rapid UI prototyping. I generate component sketches to communicate design intent clearly with designers, without a Figma dependency for every early-stage idea.",
  },
  {
    name: "Granola",
    by: "Granola",
    description:
      "AI meeting notes that run locally. Every stakeholder conversation gets a structured summary in seconds, so I can stay present in the room.",
  },
];

export default function HowIWork() {
  return (
    <section id="how-i-work" className="py-24 px-6" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-16">
          <FadeIn>
            <div>
              <h2 className="section-label pt-1">How I Work</h2>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={50}>
              <p
                className="text-base leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--muted)" }}
              >
                I use AI tools throughout the full product lifecycle — not to replace
                judgment, but to sharpen it. Here&apos;s the stack I rely on and what
                role each tool actually plays.
              </p>
            </FadeIn>

            <ul aria-label="AI tools I use">
              {tools.map((tool, i) => (
                <FadeIn key={tool.name} delay={i * 40}>
                  <li
                    className="py-6 list-none"
                    style={{
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        {tool.name}
                      </h3>
                      <span className="text-xs" style={{ color: "var(--muted)" }}>
                        {tool.by}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {tool.description}
                    </p>
                  </li>
                </FadeIn>
              ))}
              {/* Bottom border */}
              <li aria-hidden="true" style={{ borderTop: "1px solid var(--border)" }} />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
