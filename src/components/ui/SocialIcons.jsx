import { socials } from "@/data/socials";
import SocialIcon from "./SocialIcon";
import styles from "./SocialIcons.module.css";

export default function SocialIcons({ size = 20 }) {
  return (
    <div className={styles.row}>
      {socials.map((s) => (
        <SocialIcon key={s.name} {...s} size={size} />
      ))}
    </div>
  );
}
