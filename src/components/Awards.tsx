import { Award as AwardIcon } from "lucide-react";
import { awards } from "@/data/awards";
import { Section } from "./Section";

export function Awards() {
  return (
    <Section
      id="awards"
      label="03 / Awards"
      title="수상"
    >
      <ul className="space-y-8">
        {awards.map((a) => (
          <li
            key={`${a.org}-${a.date}`}
            className="grid grid-cols-1 gap-3 border-b border-[var(--color-line-soft)] pb-8 last:border-b-0 last:pb-0 md:grid-cols-[160px_1fr] md:gap-8"
          >
            <div className="text-sm text-[var(--color-ink-subtle)]">
              {a.date}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-ink)] px-2.5 py-1 text-xs font-medium text-white">
                  <AwardIcon size={12} />
                  {a.title}
                </span>
                <h3 className="text-base font-semibold tracking-tight md:text-lg">
                  {a.org}
                </h3>
              </div>
              {a.description ? (
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
                  {a.description}
                </p>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
