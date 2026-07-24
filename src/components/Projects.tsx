import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { siteConfig } from "../data/site";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Projects</span>
          <h2 className={styles.title}>Systems built for measurable impact</h2>
          <p className={styles.description}>{siteConfig.sectionCopy.projects}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
