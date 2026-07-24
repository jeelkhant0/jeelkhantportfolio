"use client";

import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          Jeel<span className={styles.logoAccent}>.</span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="#about" className={styles.navLink}>About</Link>
          <Link href="#experience" className={styles.navLink}>Experience</Link>
          <Link href="#projects" className={styles.navLink}>Projects</Link>
          <Link href="#skills" className={styles.navLink}>Skills</Link>
          <button className={styles.ctaButton}>Let's Talk</button>
        </div>
      </div>
    </nav>
  );
}
