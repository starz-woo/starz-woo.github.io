import { profile } from "@/data/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="01 / About" title="저에 대해 간단히 소개합니다.">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-10">
        <div className="relative aspect-[4/5] w-40 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] md:w-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.JPG"
            alt={`${profile.name} 프로필 사진`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-[var(--color-ink)] md:text-lg">
          {profile.about.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
