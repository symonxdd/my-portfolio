"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Thumbnail placeholder */}
      <div className={styles.thumbnail}>
        <span className={styles.placeholderIcon}>
          {project.title.charAt(0)}
        </span>
      </div>

      <div className={styles.content}>
        <Link href={`/projects/${project.slug}`} className={styles.titleLink}>
          <h3 className={styles.title}>{project.title}</h3>
        </Link>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.links}>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`${project.title} GitHub repository`}
            >
              <FiGithub size={16} />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink size={16} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
