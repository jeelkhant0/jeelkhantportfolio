import Link from "next/link";
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <main className="section-shell mx-auto max-w-7xl">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-brand">Projects</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">Built AI and Automation Systems</h1>
        <p className="mt-4 max-w-2xl text-muted">
          A selection of systems-focused projects delivering measurable impact through Python, AI, and automation.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </section>

      <div className="mt-12">
        <Link
          href="/"
          className="inline-flex rounded-xl border border-border px-5 py-3 text-sm text-text transition hover:-translate-y-0.5 hover:border-brand"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
