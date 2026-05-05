import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const facts: { label: string; value: string }[] = [
  { label: "Now", value: "Soundmind · Full-Stack" },
  { label: "Focus", value: "AI · Product · React Native" },
  { label: "Recent", value: "ACL '26 · TRAE '26 · Snowflake '26" },
  { label: "Based", value: "Seoul, KR" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 -z-10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-[var(--color-surface)] via-white/40 to-transparent"
      />

      <div className="mx-auto w-full max-w-5xl px-6 pt-28 pb-24 md:pt-32 md:pb-28">
        {/* top meta bar */}
        <div
          className="animate-fade-up mb-14 flex flex-wrap items-center justify-between gap-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--color-ink-subtle)] md:mb-16"
          style={{ animationDelay: "0.05s" }}
        >
          <span className="font-mono normal-case tracking-normal text-[var(--color-ink-muted)]">
            {profile.name} · Portfolio / 2026
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-blink" />
            Open to new roles
          </span>
        </div>

        {/* headline — full width */}
        <h1 className="text-[2.5rem] font-semibold leading-[1.05] tracking-tight md:text-[4rem] lg:text-[4.75rem]">
          <span
            className="animate-fade-up block"
            style={{ animationDelay: "0.15s" }}
          >
            AI 프로덕트를 만드는
          </span>
          <span
            className="animate-fade-up mt-1 block font-normal italic text-[var(--color-ink-muted)] md:mt-2"
            style={{
              animationDelay: "0.3s",
              fontFamily: "ui-serif, Georgia, serif",
            }}
          >
            Full-Stack Engineer,
          </span>
          <span
            className="animate-fade-up mt-1 block md:mt-2"
            style={{ animationDelay: "0.45s" }}
          >
            조현우{" "}
            <span className="text-[var(--color-ink-subtle)]">· David Cho</span>
            <span className="font-normal text-[var(--color-ink-muted)]">
              {" "}
              입니다.
            </span>
          </span>
        </h1>

        {/* tagline */}
        <p
          className="animate-fade-up mt-10 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)] md:text-lg"
          style={{ animationDelay: "0.6s" }}
        >
          {profile.tagline}
        </p>

        {/* facts row */}
        <dl
          className="animate-fade-up mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--color-line)] pt-8 md:grid-cols-4"
          style={{ animationDelay: "0.7s" }}
        >
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--color-ink-subtle)]">
                {f.label}
              </dt>
              <dd className="mt-1.5 text-sm leading-snug text-[var(--color-ink)]">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* CTAs */}
        <div
          className="animate-fade-up mt-12 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "0.85s" }}
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
          <span className="mx-1 hidden h-5 w-px bg-[var(--color-line)] md:inline-block" />
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
          >
            wigtn.com
            <ArrowUpRight size={12} />
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
