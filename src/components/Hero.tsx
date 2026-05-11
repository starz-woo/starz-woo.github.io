import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { PrintButton } from "./PrintButton";

function GithubMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedinMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top">
      {/* PRINT-ONLY compact hero */}
      <div className="hidden print:block">
        <div className="flex items-start gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.png"
            alt={`${profile.name} 프로필 사진`}
            className="h-[26mm] w-[26mm] flex-shrink-0 rounded-md object-cover"
          />
          <div className="flex-1">
            <h1 className="text-[20pt] font-semibold leading-[1.1] tracking-tight">
              조현우{" "}
              <span className="text-[14pt] font-normal italic text-[var(--color-ink-muted)]">
                · AI Product Engineer
              </span>
            </h1>
            <div className="mt-2 space-y-1 text-[9.5pt] leading-[1.55] text-[var(--color-ink-muted)]">
              {profile.about.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-2 text-[8.5pt] leading-[1.5] text-[var(--color-ink-subtle)]">
              <span className="text-[var(--color-ink)]">{profile.email}</span>
              {"  ·  "}
              {profile.links.github}
              {"  ·  "}
              {profile.links.linkedin}
              {"  ·  "}
              {profile.links.team}
            </div>
          </div>
        </div>
      </div>

      {/* SCREEN-ONLY hero */}
      <div className="relative flex min-h-[92vh] items-center overflow-hidden print:hidden">
        <div
          aria-hidden
          className="hero-grid pointer-events-none absolute inset-0 -z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60vh] bg-gradient-to-b from-[var(--color-surface)] via-white/40 to-transparent"
        />

        <div className="mx-auto w-full max-w-5xl px-6 pt-28 pb-24 md:pt-32 md:pb-28">
          <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-[1fr_280px] md:gap-14 lg:grid-cols-[1fr_320px]">
            {/* left — text content */}
            <div>
              {/* headline */}
              <h1 className="text-[2.75rem] font-semibold leading-[1.05] tracking-tight md:text-[4rem] lg:text-[4.75rem]">
                <span
                  className="animate-fade-up block"
                  style={{ animationDelay: "0.15s" }}
                >
                  조현우
                </span>
                <span
                  className="animate-fade-up mt-4 flex items-center gap-3 text-[1.25rem] font-light tracking-tight text-ink-muted md:mt-5 md:text-[1.75rem] lg:text-[2rem]"
                  style={{ animationDelay: "0.3s" }}
                >
                  <span aria-hidden className="h-px w-8 bg-ink-muted/40 md:w-10" />
                  AI Product Engineer
                </span>
              </h1>

              {/* bio */}
              <div
                className="animate-fade-up mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-[var(--color-ink-muted)] md:mt-10 md:text-[17px]"
                style={{ animationDelay: "0.6s" }}
              >
                {profile.about.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* CTAs */}
              <div
                className="animate-fade-up mt-10 flex flex-wrap items-center gap-3 md:mt-12"
                style={{ animationDelay: "0.75s" }}
              >
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                >
                  <Mail size={14} />
                  이메일 보내기
                </a>
                <PrintButton label="포트폴리오 PDF 저장" />
                <span className="mx-1 hidden h-5 w-px bg-[var(--color-line)] md:inline-block" />
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white transition-all hover:-translate-y-0.5"
                  style={{ color: "#181717" }}
                  aria-label="GitHub"
                >
                  <GithubMark size={16} />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white transition-all hover:-translate-y-0.5"
                  style={{ color: "#0A66C2" }}
                  aria-label="LinkedIn"
                >
                  <LinkedinMark size={16} />
                </a>
                <a
                  href={profile.links.team}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-[var(--color-line)] bg-white transition-all hover:-translate-y-0.5"
                  aria-label="wigtn.com"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/wigtn_mark_dark.png"
                    alt="wigtn"
                    className="h-5 w-5 rounded-full object-contain"
                  />
                </a>
              </div>
            </div>

            {/* right — profile photo */}
            <div
              className="animate-fade-up order-first md:order-last md:h-full"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="relative mx-auto aspect-square w-48 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-sm sm:w-56 md:aspect-auto md:h-full md:w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/profile.png"
                  alt={`${profile.name} 프로필 사진`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* scroll hint */}
        <a
          href="#career"
          aria-label="아래로 스크롤"
          className="animate-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="animate-scroll-hint inline-flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.2em]">
            Scroll
            <ArrowDown size={14} />
          </span>
        </a>
      </div>
    </section>
  );
}
