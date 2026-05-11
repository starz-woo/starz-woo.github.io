"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import type { SoundmindProject } from "@/data/soundmind";

export function SoundmindModal({
  project,
  onClose,
}: {
  project: SoundmindProject;
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
      aria-labelledby="soundmind-modal-title"
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
                alt={project.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}

          <div className="px-6 py-8 md:px-10 md:py-10">
            <header className="mb-6">
              <h2
                id="soundmind-modal-title"
                className="text-2xl font-semibold tracking-tight md:text-3xl"
              >
                {project.name}
              </h2>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-ink-subtle)] md:text-sm">
                <span>{project.period}</span>
                <span aria-hidden>·</span>
                <span>(주)사운드마인드</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
                {project.summary}
              </p>
            </header>

            {project.about ? (
              <section className="mb-8">
                <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                  About
                </h3>
                <p className="text-sm leading-[1.8] text-[var(--color-ink)] md:text-[15px]">
                  {project.about}
                </p>
              </section>
            ) : null}

            {project.myRole ? (
              <section className="mb-8">
                <h3 className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                  My Role
                </h3>
                <p className="text-sm leading-[1.8] text-[var(--color-ink)] md:text-[15px]">
                  {project.myRole}
                </p>
              </section>
            ) : null}

            <section>
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
          </div>
        </div>
      </div>
    </div>
  );
}
