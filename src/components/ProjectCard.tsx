import { ArrowUpRight, Award, Star } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group grid grid-cols-1 gap-6 border-t border-[var(--color-line)] py-10 first:border-t-0 first:pt-0 md:grid-cols-[60px_1fr] md:gap-10">
      <div className="font-mono text-xs text-[var(--color-ink-subtle)] md:pt-1">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <Link
          href={`/projects/${project.slug}/`}
          className="block w-full text-left transition-opacity hover:opacity-70"
          aria-label={`${project.title} 자세히 보기`}
        >
          <header className="mb-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {project.title}
              </h3>
              {project.subtitle ? (
                <p className="text-sm text-[var(--color-ink-muted)] md:text-base">
                  {project.subtitle}
                </p>
              ) : null}
              <span
                aria-hidden
                className="ml-auto inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)] transition-colors group-hover:text-[var(--color-ink)] print:hidden"
              >
                Detail
                <ArrowUpRight size={12} />
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-ink-subtle)]">
              <span>{project.period}</span>
              <span aria-hidden>·</span>
              <span>{project.role}</span>
              {project.aiModel ? (
                <>
                  <span aria-hidden>·</span>
                  <span>AI · {project.aiModel}</span>
                </>
              ) : null}
            </div>
            {project.award || project.githubStars ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.award ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-2.5 py-1 text-xs font-medium text-white">
                    <Award size={12} />
                    {project.award}
                  </span>
                ) : null}
                {project.githubStars ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--color-ink)]">
                    <Star size={12} className="fill-amber-400 text-amber-500" />
                    {project.githubStars} stars
                  </span>
                ) : null}
              </div>
            ) : null}
          </header>

          <p className="mb-5 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
            {project.description}
          </p>
        </Link>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </div>

        {/* print-only expanded details */}
        <div className="hidden print:block">
          {project.highlights && project.highlights.length > 0 ? (
            <div className="mt-5">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Highlights
              </p>
              <ul className="space-y-1.5 text-[13px] leading-relaxed text-[var(--color-ink)]">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink)]"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {project.details && project.details.length > 0 ? (
            <div className="mt-5 space-y-3 border-l-2 border-[var(--color-line)] pl-4 text-[12.5px] leading-[1.7] text-[var(--color-ink-muted)]">
              {project.details.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          ) : null}
          {project.links && project.links.length > 0 ? (
            <div className="mt-4 text-[12px] text-[var(--color-ink-subtle)]">
              {project.links.map((l, i) => (
                <span key={l.url}>
                  {i > 0 ? " · " : ""}
                  <span className="font-medium text-[var(--color-ink)]">
                    {l.label}
                  </span>{" "}
                  {l.url}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
