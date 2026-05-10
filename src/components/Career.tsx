import { careers, education } from "@/data/career";
import { soundmindCareer } from "@/data/soundmind";
import { Section } from "./Section";
import { Tag } from "./Tag";

export function Career() {
  const otherCareers = careers.filter((c) => c.company !== "사운드마인드");

  return (
    <Section id="career" label="01 / Career" title="경력">
      {/* Soundmind — detailed career description */}
      <div className="mb-14 grid grid-cols-1 gap-3 border-b border-[var(--color-line)] pb-8 md:grid-cols-[160px_1fr] md:gap-8">
        <div className="text-sm text-[var(--color-ink-subtle)]">
          {soundmindCareer.period}
        </div>
        <div>
          <h3 className="text-lg font-semibold tracking-tight md:text-xl">
            {soundmindCareer.company}{" "}
            <span className="font-normal text-[var(--color-ink-muted)]">
              · {soundmindCareer.role}
            </span>
          </h3>

          <div className="mt-8 space-y-12">
            {soundmindCareer.groups.map((group) => (
              <div key={group.category}>
                <h4 className="mb-6 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)]">
                  {group.category}
                </h4>
                <ul className="space-y-10">
                  {group.projects.map((p) => (
                    <li
                      key={p.name}
                      className="border-b border-[var(--color-line-soft)] pb-10 last:border-b-0 last:pb-0"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h5 className="text-base font-semibold tracking-tight md:text-lg">
                          {p.name}
                        </h5>
                        <span className="text-xs text-[var(--color-ink-subtle)]">
                          {p.period}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
                        {p.summary}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[var(--color-ink)] md:text-[15px]">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5">
                            <span
                              aria-hidden
                              className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink)]"
                            />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Other careers */}
      {otherCareers.length > 0 ? (
        <ul className="space-y-10">
          {otherCareers.map((c) => (
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
                {c.highlights && c.highlights.length > 0 ? (
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--color-ink)] md:text-[15px]">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <span
                          aria-hidden
                          className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-ink)]"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {c.stack && c.stack.length > 0 ? (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      ) : null}

      {/* Education */}
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
            <dl className="mt-3 space-y-1.5 text-sm md:text-[15px]">
              <div className="flex gap-3">
                <dt className="shrink-0 text-[var(--color-ink-subtle)]">
                  학점
                </dt>
                <dd className="text-[var(--color-ink)]">{education.gpa}</dd>
              </div>
              <div className="flex flex-col gap-1 md:flex-row md:gap-3">
                <dt className="shrink-0 text-[var(--color-ink-subtle)]">
                  졸업 연구
                </dt>
                <dd className="text-[var(--color-ink)]">
                  <span className="font-medium">{education.thesis.title}</span>
                  <p className="mt-1 leading-relaxed text-[var(--color-ink-muted)]">
                    {education.thesis.description}
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
}
