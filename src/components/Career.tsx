import { careers, education } from "@/data/career";
import { Section } from "./Section";
import { Tag } from "./Tag";

export function Career() {
  return (
    <Section
      id="career"
      label="02 / Career"
      title="실무에서 쌓아온 경험들."
    >
      <ul className="space-y-10">
        {careers.map((c) => (
          <li
            key={c.company}
            className="grid grid-cols-1 gap-3 border-b border-[var(--color-line-soft)] pb-10 last:border-b-0 last:pb-0 md:grid-cols-[160px_1fr] md:gap-8"
          >
            <div className="text-sm text-[var(--color-ink-subtle)]">
              {c.period}
            </div>
            <div>
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {c.company}
                </h3>
                <span className="text-sm text-[var(--color-ink-muted)]">
                  · {c.role}
                </span>
              </div>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
                {c.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-[var(--color-line)] pt-10">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)]">
          Education
        </p>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[160px_1fr] md:gap-8">
          <div className="text-sm text-[var(--color-ink-subtle)]">
            {education.period}
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {education.school}{" "}
              <span className="font-normal text-[var(--color-ink-muted)]">
                · {education.major}
              </span>
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
              {education.description}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
