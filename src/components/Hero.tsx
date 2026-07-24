import styles from "./Hero.module.css";
import Link from "next/link";
import { siteConfig } from "../data/site";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />
      
      <div className="container">
        <div className={styles.heroGrid}>
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

          <div className={`animate-fade-in ${styles.heroVisual}`} style={{ animationDelay: '200ms' }}>
            <div className={styles.codeWindow}>
              <div className={styles.codeHeader}>
                <span className={`${styles.dot} ${styles.red}`}></span>
                <span className={`${styles.dot} ${styles.yellow}`}></span>
                <span className={`${styles.dot} ${styles.green}`}></span>
              </div>
              <div className={styles.codeBody}>
                <div><span className={styles.keyword}>class</span> <span className={styles.function}>Developer</span> {'{'}</div>
                <div>&nbsp;&nbsp;<span className={styles.keyword}>constructor</span>() {'{'}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>this</span>.<span className={styles.variable}>name</span> = <span className={styles.string}>'Jeel Khant'</span>;</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>this</span>.<span className={styles.variable}>role</span> = <span className={styles.string}>'AI & Software Dev'</span>;</div>
                <div>&nbsp;&nbsp;{'}'}</div>
                <br/>
                <div>&nbsp;&nbsp;<span className={styles.function}>buildSolutions</span>() {'{'}</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.keyword}>return</span> [</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>'AI Automation'</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>'MERN Stack'</span>,</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>'Flutter Apps'</span></div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;];</div>
                <div>&nbsp;&nbsp;{'}'}</div>
                <div>{'}'}</div>
                <br/>
                <div><span className={styles.comment}>// Initializing the future...</span></div>
                <div><span className={styles.keyword}>const</span> <span className={styles.variable}>jeel</span> = <span className={styles.keyword}>new</span> <span className={styles.function}>Developer</span>();</div>
                <div><span className={styles.variable}>jeel</span>.<span className={styles.function}>buildSolutions</span>();</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
