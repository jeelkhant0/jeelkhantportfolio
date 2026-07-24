import styles from "./Hero.module.css";
import Link from "next/link";
import { siteConfig } from "../data/site";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />
      
      <div className="container">
        <div className={`animate-fade-in ${styles.heroContent}`}>
          <span className={styles.greeting}>Hi, I'm {siteConfig.name}</span>
          <h1 className={styles.title}>
            Building <span className="gradient-text">AI solutions</span> & software.
          </h1>
          <p className={styles.subtitle}>
            {siteConfig.heroSummary}
          </p>
          
          <div className={styles.ctaGroup}>
            <Link href="#projects" className={styles.primaryButton}>
              View Work
            </Link>
            <a href="/Jeel_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
