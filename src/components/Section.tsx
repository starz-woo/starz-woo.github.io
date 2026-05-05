type SectionProps = {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  label,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-[var(--color-line)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-[180px_1fr] md:gap-12">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-ink-subtle)]">
            {label}
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        <div className="md:pl-[228px]">{children}</div>
      </div>
    </section>
  );
}
