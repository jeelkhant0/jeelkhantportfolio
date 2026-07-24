import Link from "next/link";
import { siteConfig, type SocialLink } from "../data/site";
import styles from "./Footer.module.css";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.47v-1.65c-2.78.6-3.37-1.18-3.37-1.18-.46-1.14-1.12-1.44-1.12-1.44-.91-.62.07-.61.07-.61 1 .08 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.84.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.1-4.56-4.93 0-1.09.4-1.99 1.03-2.69-.1-.25-.45-1.28.1-2.66 0 0 .85-.27 2.77 1.02A9.8 9.8 0 0 1 12 6.84c.87 0 1.75.12 2.57.35 1.93-1.3 2.77-1.02 2.77-1.02.56 1.38.2 2.4.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.68-4.59 4.92.36.31.69.92.69 1.86v2.75c0 .27.18.57.69.47A10 10 0 0 0 12 2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M6.94 8.5A3.44 3.44 0 1 1 6.93 1.6a3.44 3.44 0 0 1 .01 6.9ZM3.9 22.4h6.07V9.7H3.9v12.7Zm9.35 0h6.06v-6.18c0-3.3-3.52-3.05-3.52 0v6.18h-2.54V9.7h2.54v2.03c1.18-2.2 5.52-2.37 5.52 2.1v8.56h-8.06Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.ctaCard}>
          <div>
            <span className={styles.label}>Next Step</span>
            <h2 className={styles.ctaTitle}>{siteConfig.footerCta.title}</h2>
            <p className={styles.ctaDescription}>{siteConfig.footerCta.description}</p>
          </div>
          <Link
            href={siteConfig.footerCta.href}
            className={styles.ctaButton}
          >
            {siteConfig.footerCta.label}
          </Link>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className={styles.socialLinks}>
            {siteConfig.socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={styles.socialLink}
              >
                <SocialIcon icon={item.icon} />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
