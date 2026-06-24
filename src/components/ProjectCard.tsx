import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="fade-up rounded-xl bg-gradient-to-b from-brand/25 via-brand/10 to-transparent p-px" style={{ animationDelay: `${index * 90}ms` }}>
      <div className="h-full rounded-xl border border-border/80 bg-surface p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow">
        <div className="mb-5 rounded-lg border border-border/70 bg-gradient-to-br from-brand/20 via-surfaceSoft to-background p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">{project.highlight}</p>
          <div className="mt-3 grid gap-1">
            <span className="h-1.5 w-24 rounded-full bg-brand/60" />
            <span className="h-1.5 w-32 rounded-full bg-white/20" />
            <span className="h-1.5 w-20 rounded-full bg-white/15" />
          </div>
        </div>

        <h3 className="text-xl font-semibold text-text">{project.title}</h3>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <p>
            <span className="font-medium text-text">Problem: </span>
            {project.problem}
          </p>
          <p>
            <span className="font-medium text-text">Solution: </span>
            {project.solution}
          </p>
          <p>
            <span className="font-medium text-text">Result: </span>
            {project.result}
          </p>
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li key={tech} className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/70 px-3 py-1 text-xs text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
