"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import SocialIcons from "@/components/ui/SocialIcons";
import { featuredProjects } from "@/data/projects";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className={styles.hero}>
        {/* Background blobs */}
        <div className={styles.blobContainer} aria-hidden="true">
          <div className={`${styles.blob} ${styles.blob1}`} />
          <div className={`${styles.blob} ${styles.blob2}`} />
        </div>

        <div className={styles.heroContent}>
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Symon
          </motion.h1>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full-Stack Developer crafting modern web experiences.
          </motion.p>

          <motion.div
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Button href="/projects">
              View My Work <FiArrowRight size={16} />
            </Button>
            <Button href="/resume.pdf" variant="secondary" download>
              <FiDownload size={16} /> Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SocialIcons />
          </motion.div>
        </div>
      </section>

      {/* ——— Featured Projects ——— */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Featured Projects
          </motion.h2>
          <Link href="/projects" className={styles.viewAll}>
            View all <FiArrowRight size={14} />
          </Link>
        </div>

        <div className={styles.projectGrid}>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
