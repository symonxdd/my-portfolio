import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  variant = "primary",
  download,
  onClick,
  type = "button",
  ...props
}) {
  const className = `${styles.btn} ${styles[variant] || ""}`;

  if (href) {
    return (
      <a
        href={href}
        className={className}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
