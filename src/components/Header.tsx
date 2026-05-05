"use client";

import { useEffect, useState } from "react";

const NAV = [
  { id: "about", label: "About" },
  { id: "career", label: "Career" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "work", label: "Work" },
  { id: "ai", label: "AI" },
  { id: "side", label: "Side" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur transition-colors ${
        scrolled
          ? "border-b border-[var(--color-line)] bg-white/80"
          : "border-b border-transparent bg-white/40"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          조현우 <span className="text-[var(--color-ink-subtle)]">·</span>{" "}
          <span className="font-normal text-[var(--color-ink-muted)]">
            AI Product Engineer
          </span>
        </a>
        <nav className="hidden gap-6 text-sm text-[var(--color-ink-muted)] md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="transition-colors hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
