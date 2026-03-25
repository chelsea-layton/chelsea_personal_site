import FadeIn from "./FadeIn";

const experience = [
  {
    company: "Workday",
    role: "Senior Product Manager — Consumer Candidate Experience",
    period: "Aug 2024 — Present",
    bullets: [
      "Drove 101% YoY growth for Candidate Experience, the fastest-growing SKU in the oCHRO portfolio ($32M ARR product line).",
      "Delivered an integrated conversational AI experience enabling 80M MAU to search and apply for jobs.",
      "Defined GTM strategy for OpenAI App SDK integration leading to FY27 launch; created requirements for AEO to surface job postings to LLM channels (ChatGPT, Gemini, Claude).",
      "Delivered multi-channel campaign automation (email, SMS, WhatsApp, landing pages) with personalized multi-modal content to scale outreach to 10M monthly users.",
    ],
  },
  {
    company: "Workday",
    role: "Senior Product Manager — Architecture & Product Experience Strategic Programs",
    period: "Dec 2022 — Aug 2024",
    bullets: [
      "Led product diligence for 3 acquisitions, resulting in 2 closings including HiredScore AI ($52M ARR product line).",
      "Assessed product-market fit and 12-month integration roadmap for HiredScore, scrutinizing AI and Gen AI capabilities and identifying first integration touchpoints.",
      "Analyzed 19 prior acquisitions to surface cross-functional failures and define improved processes across diligence, integration model, and GTM strategy.",
    ],
  },
  {
    company: "Workday",
    role: "Senior Product Manager — UI Platform Consumer Experience",
    period: "Apr 2021 — Dec 2022",
    bullets: [
      "Led a 30+ person multi-disciplinary team of PMs, engineers, research & design, and data analysts overhauling strategic user journeys for a $4B revenue HR and Finance suite.",
      "Delivered zero-to-one intuitive UIs for onboarding, navigation, and information architecture for 70M MAU on the Absence product.",
    ],
  },
  {
    company: "Workday",
    role: "Product Manager — UI Platform Consumer Experience",
    period: "Apr 2019 — Apr 2021",
    bullets: [
      "Migrated 1,700+ customers to Workday's next-gen UX for the Recruiting Career Site, connecting 18M daily candidates to Fortune 500 companies; defended $200M+ ARR product.",
      "Launched a new Career Site application flow UI, sustaining 97% customer renewal rate.",
      "Reduced candidate application completion time by shipping a consumer-grade full-stack experience while maintaining 99.7% uptime SLA.",
    ],
  },
  {
    company: "Workday",
    role: "Senior Associate Product Manager — UI Platform Design System",
    period: "Aug 2017 — Apr 2019",
    bullets: [
      "Delivered a reusable React component library and Design System across 6 product pillars and 2 acquisitions, slashing engineering time from months to days.",
      "Achieved 100% Design System and component library adoption across all product pillars and acquisitions.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 lg:gap-16">
          <FadeIn>
            <h2 className="section-label pt-1">Experience</h2>
          </FadeIn>

          <div className="space-y-12">
            {experience.map((job, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className="grid sm:grid-cols-[1fr_auto] gap-3 sm:gap-4">
                  <div>
                    <h3
                      className="text-sm font-medium mb-0.5"
                      style={{ color: "var(--foreground)" }}
                    >
                      {job.role}
                    </h3>
                    <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                      {job.company}
                    </p>
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-sm leading-relaxed flex gap-3"
                          style={{ color: "var(--muted)" }}
                        >
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "var(--accent)" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p
                    className="text-xs sm:text-right sm:whitespace-nowrap mt-0.5 text-pretty"
                    style={{ color: "var(--muted)" }}
                  >
                    {job.period}
                  </p>
                </div>

                {i < experience.length - 1 && (
                  <div
                    className="mt-12 w-full h-px"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
