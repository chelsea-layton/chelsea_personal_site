"use client";

import type { GitHubRepo } from "@/lib/github";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Rust: "#dea584",
  Go: "#00ADD8",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  "C++": "#f34b7d",
  C: "#555555",
  Shell: "#89e051",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Dart: "#00B4AB",
};

interface ProjectCardProps {
  repo: GitHubRepo;
  caption?: string;
}

export default function ProjectCard({ repo, caption }: ProjectCardProps) {
  const color = repo.language ? languageColors[repo.language] ?? "#78716C" : null;

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${repo.name} — opens on GitHub in new tab`}
      className="group block p-5 sm:p-6 transition-colors duration-150 touch-manipulation active:opacity-90 min-h-[100%]"
      style={{
        backgroundColor: "var(--background)",
        border: "1px solid var(--border)",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--accent)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "var(--border)")
      }
    >
      {/* Repo name */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3
          className="text-sm font-medium leading-snug group-hover:opacity-60 transition-opacity"
          style={{ color: "var(--foreground)" }}
        >
          {repo.name}
        </h3>
        {/* External link icon — decorative */}
        <svg
          aria-hidden="true"
          className="flex-shrink-0 mt-0.5 opacity-30 group-hover:opacity-60 transition-opacity"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10L10 2M10 2H4M10 2V8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* PM caption (preferred) or GitHub description */}
      {(caption || repo.description) && (
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--muted)" }}
        >
          {caption ?? repo.description}
        </p>
      )}

      {/* Meta row */}
      <div className="flex items-center gap-4 mt-auto">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--muted)" }}>
            <span
              aria-hidden="true"
              className="inline-block w-2 h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: color ?? "var(--muted)" }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "var(--muted)" }}
            aria-label={`${repo.stargazers_count} stars`}
          >
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            {repo.stargazers_count}
          </span>
        )}
      </div>
    </a>
  );
}
