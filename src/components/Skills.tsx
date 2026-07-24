import { skills } from "../data/skills";
import { siteConfig } from "../data/site";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Skills</span>
          <h2 className={styles.title}>Core capabilities</h2>
          <p className={styles.description}>{siteConfig.sectionCopy.skills}</p>
        </div>

        <div className={styles.grid}>
          {skills.map((group, index) => (
            <article
              key={group.category}
              className={`glass-panel ${styles.card} animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              <ul className={styles.skillList}>
                {group.items.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillDot} />
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
