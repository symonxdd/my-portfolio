"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Projects
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        A collection of things I&apos;ve built and worked on.
      </motion.p>

      <div className={styles.grid}>
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
