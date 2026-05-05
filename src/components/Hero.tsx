import { ArrowDown, ArrowUpRight, Github, Globe, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* background dot grid */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
      />
      {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-[var(--color-surface)] via-white/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-5xl px-6 py-24 md:py-32">
        <p
          className="animate-fade-up mb-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-ink)] animate-blink" />
          Portfolio · 2026 · Available for new opportunities
        </p>

        <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
          <span
            className="animate-fade-up block"
            style={{ animationDelay: "0.15s" }}
          >
            안녕하세요,
          </span>
          <span
            className="animate-fade-up mt-2 block"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-shimmer">{profile.name}</span>{" "}
            <span className="text-[var(--color-ink-subtle)]">/</span>{" "}
            <span className="font-normal text-[var(--color-ink-muted)]">
              {profile.role}
            </span>
            <span className="text-[var(--color-ink)]">입니다.</span>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-10 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg"
          style={{ animationDelay: "0.5s" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fade-up mt-12 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
          >
            <Mail size={14} />
            이메일 보내기
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-all hover:bg-[var(--color-surface)] hover:-translate-y-0.5"
          >
            이력서 PDF
            <ArrowUpRight size={14} />
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink-muted)] transition-all hover:text-[var(--color-ink)] hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-ink-muted)] transition-all hover:text-[var(--color-ink)] hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={profile.links.team}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-4 text-sm font-medium text-[var(--color-ink-muted)] transition-all hover:text-[var(--color-ink)] hover:-translate-y-0.5"
            aria-label="WIGTN"
          >
            <Globe size={14} />
            wigtn.com
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <a
        href="#about"
        aria-label="아래로 스크롤"
        className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="animate-scroll-hint inline-flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em]">
          Scroll
          <ArrowDown size={14} />
        </span>
      </a>
    </section>
  );
}
