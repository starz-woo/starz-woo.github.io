"use client";

import { ArrowLeft, Award, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { SoundmindProject } from "@/data/soundmind";
import { Tag } from "./Tag";

function renderEmphasis(text: string) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-[var(--color-ink)]">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}

export function CvCareerDetail({
  project,
  company,
  role,
  category,
}: {
  project: SoundmindProject;
  company: string;
  role: string;
  category: string;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const sections = useMemo(() => {
    const list: { id: string; label: string }[] = [
      { id: "overview", label: "Overview" },
    ];
    if (project.myRole) list.push({ id: "my-role", label: "My Role" });
    if (project.highlights.length > 0)
      list.push({ id: "highlights", label: "Highlights" });
    if (project.stack && project.stack.length > 0)
      list.push({ id: "stack", label: "Stack" });
    if (project.caseStudies && project.caseStudies.length > 0)
      list.push({ id: "case-study", label: "Case Study" });
    return list;
  }, [project]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-8 md:pb-32 md:pt-14">
      <Link
        href="/cv/"
        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
      >
        <ArrowLeft size={14} />
        CV로 돌아가기
      </Link>

      {project.image ? (
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="대표 이미지 크게 보기"
          className="group mt-8 block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[var(--color-surface)] md:mt-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} 대표 이미지`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>
      ) : null}

      <header className="mt-10 md:mt-12">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {project.name}
          </h1>
          <p className="text-sm text-[var(--color-ink-muted)] md:text-lg">
            {project.summary}
          </p>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-ink-subtle)] md:text-sm">
          <span>{project.period}</span>
          <span aria-hidden>·</span>
          <span>{company}</span>
          <span aria-hidden>·</span>
          <span>{role}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.badge ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-2.5 py-1 text-xs font-medium text-white">
              <Award size={12} />
              {project.badge}
            </span>
          ) : null}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--color-ink-muted)]">
            {category}
          </span>
        </div>
      </header>

      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-14 lg:grid-cols-[1fr_220px] lg:gap-16">
        <article className="min-w-0 space-y-14">
          <section id="overview" className="scroll-mt-24">
            <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
              Overview
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-ink)] md:text-base">
              {project.about ?? project.summary}
            </p>
          </section>

          {project.myRole ? (
            <section id="my-role" className="scroll-mt-24">
              <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                My Role
              </h2>
              <p className="text-sm leading-[1.8] text-[var(--color-ink)] md:text-[15px]">
                {project.myRole}
              </p>
            </section>
          ) : null}

          {project.highlights.length > 0 ? (
            <section id="highlights" className="scroll-mt-24">
              <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Highlights
              </h2>
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
          ) : null}

          {project.stack && project.stack.length > 0 ? (
            <section id="stack" className="scroll-mt-24">
              <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Stack
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </section>
          ) : null}

          {project.caseStudies && project.caseStudies.length > 0 ? (
            <section id="case-study" className="scroll-mt-24">
              <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Case Study
              </h2>
              <p className="mb-6 text-xs leading-relaxed text-[var(--color-ink-subtle)] md:text-[13px]">
                업무 중 직접 부딪힌 문제와 그 해결 과정.
              </p>
              <div className="space-y-6">
                {project.caseStudies.map((cs, i) => (
                  <article
                    key={i}
                    className="rounded-xl border border-[var(--color-line)] bg-white p-6 md:p-7"
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        aria-hidden
                        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-[10px] font-semibold text-white"
                      >
                        {i + 1}
                      </span>
                      <h3 className="text-base font-semibold tracking-tight md:text-lg">
                        {cs.title}
                      </h3>
                    </div>
                    <dl className="mt-5 space-y-5 border-l-2 border-[var(--color-line-soft)] pl-5">
                      {[
                        { label: "Problem", value: cs.problem },
                        { label: "My Role", value: cs.myRole },
                        { label: "Approach", value: cs.approach },
                        { label: "Result", value: cs.result },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)]">
                            {label}
                          </dt>
                          <dd className="mt-2 text-sm leading-[1.75] text-[var(--color-ink)] md:text-[15px]">
                            {renderEmphasis(value)}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <aside className="hidden lg:block">
          <nav className="sticky top-24">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
              Contents
            </p>
            <ul className="space-y-2 border-l border-[var(--color-line)]">
              {sections.map((s) => {
                const active = activeSection === s.id;
                return (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`block border-l-2 px-3 py-1 text-sm transition-colors ${
                        active
                          ? "-ml-px border-[var(--color-ink)] font-medium text-[var(--color-ink)]"
                          : "-ml-px border-transparent text-[var(--color-ink-subtle)] hover:text-[var(--color-ink)]"
                      }`}
                    >
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      </div>

      {lightboxOpen && project.image ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게 보기"
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center"
        >
          <button
            type="button"
            aria-label="크게 보기 닫기"
            onClick={() => setLightboxOpen(false)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            aria-label="크게 보기 닫기"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`${project.name} 대표 이미지 확대`}
            className="animate-fade-in relative z-10 max-h-[92vh] max-w-[94vw] object-contain"
          />
        </div>
      ) : null}
    </main>
  );
}
