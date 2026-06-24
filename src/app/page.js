"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import SocialIcons from "@/components/ui/SocialIcons";
import StatusBadge from "@/components/ui/StatusBadge";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { featuredProjects } from "@/data/projects";
import styles from "./page.module.css";

function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Home() {
  const [showClarification, setShowClarification] = useState(false);
  const [greeting, setGreeting] = useState("Hi there");
  const { scrollY } = useScroll();

  useEffect(() => {
    setGreeting(getTimeBasedGreeting());
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setShowClarification(true);
    } else {
      setShowClarification(false);
    }
  });

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        {/* Background blobs */}
        <div className={styles.blobContainer} aria-hidden="true">
          <div className={`${styles.blob} ${styles.blob1}`} />
          <div className={`${styles.blob} ${styles.blob2}`} />
        </div>


        <div className={styles.statusBadgeWrapper}>
          <StatusBadge />
        </div>

        <div className={styles.heroContent}>
          <motion.p
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {greeting}, I&apos;m
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
            className={styles.portfolioLine}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            This is my portfolio
          </motion.p>

          <div className={styles.taglineSection}>
            <p className={styles.tagline}>
              <span className={styles.emphasized}>AI-assisted</span> development is how I build.
            </p>

            <motion.div
              className={styles.clarificationWrapper}
              initial={false}
              animate={{
                height: showClarification ? "auto" : 0,
                opacity: showClarification ? 1 : 0,
                marginTop: showClarification ? 12 : 0
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className={styles.clarification}>
                I lean heavily on Claude Code as my main AI pair programmer, with Gemini, Codex, and Cursor in the mix too. AI accelerates the work, it doesn&apos;t replace the thinking.
              </p>
            </motion.div>
          </div>

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

        <ScrollIndicator />
      </section>

      {/* Featured Projects */}
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
