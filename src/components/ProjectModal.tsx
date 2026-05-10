"use client";

import { ArrowUpRight, Award, Star, X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="animate-fade-in fixed inset-0 z-50 flex items-end justify-center md:items-center"
    >
      <button
        type="button"
        aria-label="닫기"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <div className="animate-modal-in relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl md:max-h-[88vh] md:max-w-3xl md:rounded-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="닫기"
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink-muted)] backdrop-blur transition-colors hover:bg-white hover:text-[var(--color-ink)]"
        >
          <X size={16} />
        </button>

        <div className="overflow-y-auto">
          {project.image ? (
            <div className="aspect-[16/9] w-full overflow-hidden bg-[var(--color-surface)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div className="px-6 py-8 md:px-10 md:py-10">
            <header className="mb-6">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h2
                  id="project-modal-title"
                  className="text-2xl font-semibold tracking-tight md:text-3xl"
                >
                  {project.title}
                </h2>
                {project.subtitle ? (
                  <p className="text-sm text-[var(--color-ink-muted)] md:text-base">
                    {project.subtitle}
                  </p>
                ) : null}
              </div>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-ink-subtle)] md:text-sm">
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
                <div className="mt-4 flex flex-wrap gap-1.5">
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

            <p className="mb-6 text-sm leading-relaxed text-[var(--color-ink)] md:text-base">
              {project.description}
            </p>

            {project.details && project.details.length > 0 ? (
              <div className="mb-8 space-y-4 border-l-2 border-[var(--color-line)] pl-5 text-sm leading-[1.8] text-[var(--color-ink-muted)] md:text-[15px]">
                {project.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            ) : null}

            <section className="mb-8">
              <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Highlights
              </h3>
              <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-ink)] md:text-[15px]">
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
            </section>

            <section className="mb-8">
              <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </section>

            {project.links && project.links.length > 0 ? (
              <section>
                <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                  Links
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-3.5 py-1.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface)]"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
