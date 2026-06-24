import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { siteConfig } from "../data/site";

export default function Projects() {
  return (
    <section id="projects" className="section-shell section-alt">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">Systems built for measurable impact</h2>
          <p className="mt-4 max-w-2xl text-muted">{siteConfig.sectionCopy.projects}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
