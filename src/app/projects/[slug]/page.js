"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import Button from "@/components/ui/Button";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className={styles.page}>
        <h1 className={styles.title}>Project not found</h1>
        <Link href="/projects" className={styles.backLink}>
          <FiArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link href="/projects" className={styles.backLink}>
        <FiArrowLeft size={16} /> Back to projects
      </Link>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {project.title}
      </motion.h1>

      <motion.div
        className={styles.tags}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        className={styles.thumbnail}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <span className={styles.placeholderIcon}>
          {project.title.charAt(0)}
        </span>
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <p className={styles.description}>{project.details}</p>

        <div className={styles.actions}>
          {project.repoUrl && (
            <Button href={project.repoUrl} variant="secondary">
              <FiGithub size={16} /> View Code
            </Button>
          )}
          {project.liveUrl && (
            <Button href={project.liveUrl}>
              <FiExternalLink size={16} /> Live Demo
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
