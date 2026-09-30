import { publications } from "@/data/publications";
import { Section } from "./Section";

export function Publications() {
  return (
    <Section id="publications" label="04 / Publications" title="논문">
      <ul className="space-y-8">
        {publications.map((p) => (
          <li
            key={p.title}
            className="border-b border-[var(--color-line-soft)] pb-8 last:border-b-0 last:pb-0"
          >
            <p className="text-sm text-[var(--color-ink-subtle)]">{p.authors}</p>
            <h3 className="mt-1 text-base font-semibold tracking-tight md:text-lg">
              {p.title}
            </h3>
            <p className="mt-1 text-sm italic text-[var(--color-ink-muted)]">
              {p.venue}
            </p>
            {p.note ? (
              <p className="mt-1 text-xs text-[var(--color-ink-subtle)]">
                {p.note}
              </p>
            ) : null}
            {p.links ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-[var(--color-line)] px-2.5 py-1 text-xs font-medium uppercase tracking-wide text-[var(--color-ink)] transition-colors hover:bg-[var(--color-surface)]"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
