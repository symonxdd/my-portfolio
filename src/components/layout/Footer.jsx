import { socials } from "@/data/socials";
import SocialIcon from "../ui/SocialIcon";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>
          &copy; {currentYear} Symon. Built with Next.js
        </p>
        <div className={styles.socials}>
          {socials.map((s) => (
            <SocialIcon key={s.name} {...s} size={18} />
          ))}
        </div>
      </div>
    </footer>
  );
}
