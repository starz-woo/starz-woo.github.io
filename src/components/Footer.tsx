import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-6 text-xs text-[var(--color-ink-subtle)] md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>
          Built with Next.js · Tailwind CSS ·{" "}
          <a
            href="#top"
            className="hover:text-[var(--color-ink)] hover:underline"
          >
            맨 위로 ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
