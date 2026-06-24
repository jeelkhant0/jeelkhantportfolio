import { skills } from "../data/skills";
import { siteConfig } from "../data/site";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">Core capabilities</h2>
          <p className="mt-4 max-w-2xl text-muted">{siteConfig.sectionCopy.skills}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <article
              key={group.category}
              className="fade-up rounded-xl border border-border/80 bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/70"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-semibold text-text">{group.category}</h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {group.items.map((skill) => (
                  <li key={skill} className="inline-flex items-center gap-2 rounded-lg bg-background/65 px-3 py-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
