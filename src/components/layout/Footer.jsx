import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socials } from "@/data/socials";
import styles from "./Footer.module.css";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {currentYear} Symon. Built with Next.js
        </p>
        <div className={styles.socials}>
          {socials.map((s) => {
            const Icon = iconMap[s.icon] || FiMail;
            return (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={s.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
