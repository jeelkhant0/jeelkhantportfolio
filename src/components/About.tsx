import { siteConfig } from "../data/site";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={`glass-panel ${styles.aboutCard}`}>
          <span className={styles.label}>About</span>
          <h2 className={styles.title}>Engineering AI systems with practical outcomes.</h2>
          <p className={styles.description}>{siteConfig.description}</p>

          <ul className={styles.focusGrid}>
            {siteConfig.aboutFocus.map((item) => (
              <li key={item} className={styles.focusItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
