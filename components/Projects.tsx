import { getGitHubRepos } from "@/lib/github";
import { projectsMeta } from "@/lib/projects-meta";
import ProjectCard from "./ProjectCard";
import FadeIn from "./FadeIn";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "chelsea-layton";

export default async function Projects() {
  const repos = await getGitHubRepos(GITHUB_USERNAME);

  // Sort: featured first, then by stars, then by updated_at
  const featuredSlugs = Object.entries(projectsMeta)
    .filter(([, v]) => v.featured)
    .map(([k]) => k);

  const sorted = [...repos].sort((a, b) => {
    const aFeatured = featuredSlugs.includes(a.name) ? 1 : 0;
    const bFeatured = featuredSlugs.includes(b.name) ? 1 : 0;
    if (bFeatured !== aFeatured) return bFeatured - aFeatured;
    return b.stargazers_count - a.stargazers_count;
  });

  const displayed = sorted.slice(0, 9);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 px-4 sm:px-6"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-12 lg:gap-16">
          <FadeIn>
            <div>
              <h2 className="section-label pt-1">Projects</h2>
              <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
                via GitHub
              </p>
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={50}>
              <p
                className="text-base leading-relaxed mb-10 max-w-xl"
                style={{ color: "var(--muted)" }}
              >
                A selection of things I&apos;ve built or contributed to. Most are
                side projects, experiments, or tools I made because the problem
                annoyed me enough.
              </p>
            </FadeIn>

            {displayed.length === 0 ? (
              <FadeIn delay={100}>
                <p className="text-sm" style={{ color: "var(--muted)" }}>
                  Projects loading — check back shortly, or visit{" "}
                  <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    GitHub
                  </a>{" "}
                  directly.
                </p>
              </FadeIn>
            ) : (
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
                {displayed.map((repo, i) => (
                  <FadeIn key={repo.id} delay={i * 40}>
                    <li>
                      <ProjectCard
                        repo={repo}
                        caption={projectsMeta[repo.name]?.caption}
                      />
                    </li>
                  </FadeIn>
                ))}
              </ul>
            )}

            <FadeIn delay={200}>
              <div className="mt-8">
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View all projects on GitHub (opens in new tab)"
                  className="text-sm underline underline-offset-4 hover:opacity-60 transition-opacity"
                  style={{ color: "var(--muted)" }}
                >
                  View all on GitHub →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
