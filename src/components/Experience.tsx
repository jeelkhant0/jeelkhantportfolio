import { siteConfig } from "../data/site";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Experience</h2>
          <p className={styles.subtitle}>My professional journey building robust systems.</p>
        </div>

        <div className={styles.timeline}>
          {siteConfig.experience.map((exp, index) => (
            <div key={index} className={`glass-panel ${styles.card}`}>
              <div className={styles.meta}>
                <h3 className={styles.role}>{exp.role}</h3>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.duration}>{exp.duration}</p>
              </div>
              <div className={styles.content}>
                <ul className={styles.details}>
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
