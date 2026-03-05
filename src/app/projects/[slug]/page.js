"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLock } from "react-icons/fi";
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
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholderIcon}>
            {project.title.charAt(0)}
          </span>
        )}
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <p className={styles.description}>{project.details}</p>

        {project.motivation && (
          <motion.div
            className={styles.motivation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <h2 className={styles.sectionTitle}>Why I Built This</h2>
            {project.motivation.split("\n\n").map((paragraph, i) => (
              <p key={i} className={styles.motivationText}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}

        <div className={styles.actions}>
          {project.repoUrl ? (
            <Button href={project.repoUrl} variant="secondary">
              <FiGithub size={16} /> View Code
            </Button>
          ) : (
            <span className={styles.privateNote}>
              <FiLock size={14} />
              Private repo · Available on request
            </span>
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
