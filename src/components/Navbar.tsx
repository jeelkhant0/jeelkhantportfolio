"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "../lib/utils";
import { siteConfig } from "../data/site";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-16">
        <Link href="#home" className="text-sm font-semibold tracking-[0.08em] text-text">
          {siteConfig.name}
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="link-sweep text-sm text-muted transition hover:text-text">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center rounded-md border border-border bg-surface px-3 py-2 text-sm text-text transition hover:border-brand md:hidden"
        >
          Menu
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/70 bg-background transition-[max-height] duration-300 md:hidden",
          isOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <ul className="space-y-1 px-6 py-4">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-muted transition hover:bg-surface hover:text-text"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
