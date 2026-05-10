import { skills } from "@/data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="02 / Skills" title="다뤄본 도구와 기술">
      <ul className="space-y-8">
        {skills.map((row) => (
          <li
            key={row.category}
            className="grid grid-cols-1 gap-4 border-b border-[var(--color-line-soft)] pb-8 last:border-b-0 last:pb-0 md:grid-cols-[160px_1fr] md:gap-8"
          >
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)] md:pt-2">
              {row.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {row.items.map((item) => (
                <span
                  key={item.name}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 text-sm text-[var(--color-ink)]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://cdn.simpleicons.org/${item.slug}`}
                    alt=""
                    aria-hidden
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 shrink-0"
                    loading="lazy"
                  />
                  {item.name}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
