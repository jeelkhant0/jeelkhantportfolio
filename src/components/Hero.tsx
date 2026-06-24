import Link from "next/link";
import { cn } from "../lib/utils";
import { siteConfig } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radialGlow" />
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="fade-up">
          <p className="text-xs uppercase tracking-[0.25em] text-brand">{siteConfig.role}</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-text md:text-6xl">
            {siteConfig.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{siteConfig.heroSummary}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={siteConfig.ctas.primary.href}
              className="rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brandStrong"
            >
              {siteConfig.ctas.primary.label}
            </Link>
            <Link
              href={siteConfig.ctas.secondary.href}
              className="rounded-xl border border-border bg-white/0 px-6 py-3 text-sm font-semibold text-text transition duration-300 hover:-translate-y-0.5 hover:border-brand"
            >
              {siteConfig.ctas.secondary.label}
            </Link>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {siteConfig.trustMetrics.map((item, index) => (
              <li
                key={item.label}
                className={cn(
                  "fade-up rounded-xl border border-border/80 bg-surface/60 p-4 shadow-soft",
                  "transition duration-300 hover:-translate-y-0.5 hover:border-brand/70"
                )}
                style={{ animationDelay: `${index * 110}ms` }}
              >
                <p className="text-2xl font-semibold text-text">{item.value}</p>
                <p className="mt-1 text-xs text-muted">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="fade-up rounded-xl border border-brand/30 bg-surface p-5 shadow-glow" style={{ animationDelay: "120ms" }}>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-brand">Automation Pipeline</p>
          <div className="space-y-3 text-sm">
            <div className="rounded-lg border border-border bg-background/70 p-3 text-muted">
              <span className="text-brand">01</span> Capture inbound event streams and normalize payloads.
            </div>
            <div className="rounded-lg border border-border bg-background/70 p-3 text-muted">
              <span className="text-brand">02</span> Apply Python processing + AI classification with fallback rules.
            </div>
            <div className="rounded-lg border border-border bg-background/70 p-3 text-muted">
              <span className="text-brand">03</span> Trigger automated actions, persist logs, and monitor outcomes.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
