import type { Project } from "../data/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={`${styles.cardWrapper} animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className={`glass-panel ${styles.card}`}>
        <div className={styles.cardHeader}>
          <span className={styles.highlight}>{project.highlight}</span>
          <div className={styles.mockupLines}>
            <div className={`${styles.line} ${styles.line1}`} />
            <div className={`${styles.line} ${styles.line2}`} />
            <div className={`${styles.line} ${styles.line3}`} />
          </div>
        </div>

        <h3 className={styles.title}>{project.title}</h3>

        <div className={styles.content}>
          <p><strong>Problem: </strong>{project.problem}</p>
          <p><strong>Solution: </strong>{project.solution}</p>
          <p><strong>Result: </strong>{project.result}</p>
        </div>

        <ul className={styles.techList}>
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.techItem}>
              <span className={styles.techDot} />
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
