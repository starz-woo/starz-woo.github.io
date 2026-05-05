import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Section } from "./Section";

export function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: "github.com/starz-woo", href: profile.links.github },
    { label: "LinkedIn", value: "linkedin.com/in/starz-woo", href: profile.links.linkedin },
    { label: "Team", value: "wigtn.com", href: profile.links.team },
  ];

  return (
    <Section
      id="contact"
      label="07 / Contact"
      title="새로운 기회나 협업에 관심이 있으시다면 편하게 연락주세요."
    >
      <ul className="divide-y divide-[var(--color-line-soft)] border-y border-[var(--color-line)]">
        {items.map((it) => (
          <li key={it.label}>
            <a
              href={it.href}
              target={it.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between gap-6 py-5 transition-colors hover:bg-[var(--color-surface)]"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--color-ink-subtle)]">
                {it.label}
              </span>
              <span className="flex items-center gap-2 text-sm text-[var(--color-ink)] md:text-base">
                {it.value}
                <ArrowUpRight
                  size={16}
                  className="text-[var(--color-ink-subtle)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
                />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
