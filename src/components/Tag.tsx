export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--color-line)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--color-ink-muted)]">
      {children}
    </span>
  );
}
