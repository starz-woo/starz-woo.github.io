"use client";

import {
  ArrowLeft,
  ArrowUpRight,
  Award,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

export function ProjectDetail({ project }: { project: Project }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("overview");

  const images =
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : [];

  const sections = useMemo(() => {
    const list: { id: string; label: string }[] = [
      { id: "overview", label: "Overview" },
    ];
    if (project.highlights.length > 0)
      list.push({ id: "highlights", label: "Highlights" });
    if (project.details && project.details.length > 0)
      list.push({ id: "details", label: "Deep Dive" });
    if (project.stack.length > 0) list.push({ id: "stack", label: "Stack" });
    if (project.links && project.links.length > 0)
      list.push({ id: "links", label: "Links" });
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
    if (lightboxIndex === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i === null ? null : (i + 1) % images.length,
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length,
        );
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightboxIndex, images.length]);

  return (
    <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-10 md:px-8 md:pb-32 md:pt-14">
      <Link
        href="/#ai"
        className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
      >
        <ArrowLeft size={14} />
        Projects로 돌아가기
      </Link>

      {/* 1. Hero — single representative image at the top */}
      {images.length > 0 ? (
        <button
          type="button"
          onClick={() => setLightboxIndex(0)}
          aria-label="대표 이미지 크게 보기"
          className="group mt-8 block aspect-[16/9] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-[var(--color-surface)] md:mt-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]}
            alt={`${project.title} 대표 이미지`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>
      ) : null}

      {/* 2. Title block */}
      <header className="mt-10 md:mt-12">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          {project.subtitle ? (
            <p className="text-sm text-[var(--color-ink-muted)] md:text-lg">
              {project.subtitle}
            </p>
          ) : null}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--color-ink-subtle)] md:text-sm">
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

      {/* 3. Two-column body — content on left, sticky TOC on right */}
      <div className="mt-12 grid grid-cols-1 gap-12 md:mt-14 lg:grid-cols-[1fr_220px] lg:gap-16">
        <article className="min-w-0 space-y-14">
          <section id="overview" className="scroll-mt-24">
            <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
              Overview
            </h2>
            <p className="text-sm leading-relaxed text-[var(--color-ink)] md:text-base">
              {project.description}
            </p>
          </section>

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

          {project.details && project.details.length > 0 ? (
            <section id="details" className="scroll-mt-24">
              <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Deep Dive
              </h2>
              <div className="space-y-4 border-l-2 border-[var(--color-line)] pl-5 text-sm leading-[1.8] text-[var(--color-ink-muted)] md:text-[15px]">
                {project.details.map((d, i) => (
                  <p key={i}>{d}</p>
                ))}
              </div>
            </section>
          ) : null}

          {project.stack.length > 0 ? (
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

          {project.links && project.links.length > 0 ? (
            <section id="links" className="scroll-mt-24">
              <h2 className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                Links
              </h2>
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
        </article>

        {/* TOC */}
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

      {/* Lightbox */}
      {lightboxIndex !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="이미지 크게 보기"
          className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center"
        >
          <button
            type="button"
            aria-label="크게 보기 닫기"
            onClick={() => setLightboxIndex(null)}
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
          />

          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="크게 보기 닫기"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <X size={18} />
          </button>

          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((i) =>
                    i === null ? null : (i - 1 + images.length) % images.length,
                  )
                }
                aria-label="이전 이미지"
                className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:left-6"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((i) =>
                    i === null ? null : (i + 1) % images.length,
                  )
                }
                aria-label="다음 이미지"
                className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 md:right-6"
              >
                <ChevronRight size={20} />
              </button>
              <div className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                {lightboxIndex + 1} / {images.length}
              </div>
            </>
          ) : null}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[lightboxIndex]}
            alt={`${project.title} 스크린샷 ${lightboxIndex + 1} 확대`}
            className="animate-fade-in relative z-10 max-h-[92vh] max-w-[94vw] object-contain"
          />
        </div>
      ) : null}
    </main>
  );
}
