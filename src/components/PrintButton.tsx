import { Download } from "lucide-react";

export function PrintButton({ label }: { label: string }) {
  return (
    <a
      href="/portfolio.pdf"
      download="조현우-포트폴리오.pdf"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-all hover:bg-[var(--color-surface)] hover:-translate-y-0.5 print:hidden"
    >
      <Download size={14} />
      {label}
    </a>
  );
}
