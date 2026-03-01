import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socials } from "@/data/socials";
import styles from "./SocialIcons.module.css";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

export default function SocialIcons({ size = 20 }) {
  return (
    <div className={styles.row}>
      {socials.map((s) => {
        const Icon = iconMap[s.icon] || FiMail;
        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={s.name}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </div>
  );
}
