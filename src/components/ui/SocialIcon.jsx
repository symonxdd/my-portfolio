"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./SocialIcon.module.css";

const iconMap = {
  github: FiGithub,
  linkedin: FiLinkedin,
  mail: FiMail,
};

export default function SocialIcon({ name, url, icon, size = 20 }) {
  const [copied, setCopied] = useState(false);
  const Icon = iconMap[icon] || FiMail;
  const isEmail = icon === "mail" || name.toLowerCase() === "email";

  const handleClick = (e) => {
    if (isEmail) {
      e.preventDefault();
      const email = url.replace("mailto:", "");
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const Component = isEmail ? "button" : "a";
  const props = isEmail
    ? { onClick: handleClick, type: "button" }
    : { href: url, target: "_blank", rel: "noopener noreferrer" };

  return (
    <div className={styles.wrapper} style={{ position: "relative" }}>
      <Component
        {...props}
        className={styles.socialIcon}
        aria-label={name}
      >
        <Icon size={size} />
        {isEmail && (
          <span className={`${styles.tooltip} ${copied ? styles.visible : ""}`}>
            {copied ? "Copied!" : "Copy email"}
          </span>
        )}
      </Component>
    </div>
  );
}
