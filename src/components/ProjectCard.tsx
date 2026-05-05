import { ArrowUpRight, Award } from "lucide-react";
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
          {project.award ? (
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-2.5 py-1 text-xs font-medium text-white">
              <Award size={12} />
              {project.award}
            </div>
          ) : null}
        </header>

        <p className="mb-5 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
          {project.description}
        </p>

        <ul className="mb-5 space-y-2 text-sm leading-relaxed text-[var(--color-ink)] md:text-[15px]">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink)]"
              />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </div>
          {project.links && project.links.length > 0 ? (
            <div className="ml-auto flex flex-wrap gap-3 text-sm font-medium">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--color-ink)] underline-offset-4 hover:underline"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
