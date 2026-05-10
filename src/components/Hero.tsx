import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { PrintButton } from "./PrintButton";

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
                  className="animate-fade-up mt-2 block font-normal italic text-[var(--color-ink-muted)] md:mt-3"
                  style={{
                    animationDelay: "0.3s",
                    fontFamily: "ui-serif, Georgia, serif",
                  }}
                >
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
