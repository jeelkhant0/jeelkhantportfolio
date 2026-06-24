import { siteConfig } from "../data/site";

export default function About() {
  return (
    <section id="about" className="section-shell section-alt">
      <div className="mx-auto max-w-7xl rounded-xl border border-border bg-surface p-8 shadow-soft md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-brand">About</p>
        <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">Engineering AI systems with practical outcomes.</h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted md:text-lg">{siteConfig.description}</p>

        <ul className="mt-8 grid gap-3 md:grid-cols-3">
          {siteConfig.aboutFocus.map((item) => (
            <li key={item} className="rounded-xl border border-border/80 bg-background/60 p-4 text-sm text-text">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
