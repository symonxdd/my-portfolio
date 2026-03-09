"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Button from "@/components/ui/Button";
import ProjectCard from "@/components/ui/ProjectCard";
import SocialIcons from "@/components/ui/SocialIcons";
import StatusBadge from "@/components/ui/StatusBadge";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { featuredProjects } from "@/data/projects";
import styles from "./page.module.css";

export default function Home() {
  const [showClarification, setShowClarification] = useState(false);
  const [isHoveringEverything, setIsHoveringEverything] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setShowClarification(true);
    } else {
      setShowClarification(false);
    }
  });

  return (
    <>
      {/* ——— Hero ——— */}
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
            Sup gang, I&apos;m
          </motion.p>

          <motion.h1
            className={styles.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Symon
          </motion.h1>

          <div className={styles.taglineSection}>
            <p className={styles.tagline}>
              I build{" "}
              <motion.span
                className={styles.emphasized}
                animate={{ rotate: [-0.5, 0.5, -0.5] }}
                whileHover={{ scale: 1.05, rotate: 0 }}
                onMouseEnter={() => setIsHoveringEverything(true)}
                onMouseLeave={() => setIsHoveringEverything(false)}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 0.2 }
                }}
              >
                everything
                <AnimatePresence>
                  {isHoveringEverything && (
                    <span className={styles.sparkleContainer}>
                      {[...Array(6)].map((_, i) => (
                        <motion.span
                          key={i}
                          className={styles.sparkleParticle}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.2, 0],
                            y: -20,
                            x: (i % 2 === 0 ? 1 : -1) * 10
                          }}
                          exit={{ opacity: 0 }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeOut"
                          }}
                          style={{
                            left: `${(i + 1) * 15}%`,
                            top: "50%",
                            width: i % 2 === 0 ? 3 : 2,
                            height: i % 2 === 0 ? 3 : 2,
                          }}
                        />
                      ))}
                    </span>
                  )}
                </AnimatePresence>
              </motion.span>{" "}
              with ChatGPT.
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
                ...okay, maybe not <em>everything</em>. But I do know how to prompt my way out of any problem, ship fast, and occasionally, I actually understand what the code does.
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
