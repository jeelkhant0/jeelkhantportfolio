import { siteConfig } from "../data/site";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
          <p className="max-w-2xl text-lg text-muted">
            My professional journey building robust systems.
          </p>
        </div>

        <div className="space-y-8">
          {siteConfig.experience.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition hover:border-brand/30 hover:shadow-soft sm:flex-row sm:gap-8"
            >
              <div className="sm:w-1/3">
                <h3 className="text-xl font-semibold text-text">{exp.role}</h3>
                <p className="text-brand font-medium mt-1">{exp.company}</p>
                <p className="text-sm text-muted mt-2">{exp.duration}</p>
              </div>
              <div className="sm:w-2/3">
                <ul className="list-disc pl-5 space-y-2 text-muted">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
