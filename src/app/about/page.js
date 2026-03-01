"use client";

import { motion } from "framer-motion";
import SkillChip from "@/components/ui/SkillChip";
import { skills } from "@/data/skills";
import styles from "./page.module.css";

export default function AboutPage() {
  let chipIndex = 0;

  return (
    <div className={styles.page}>
      {/* ---- Bio ---- */}
      <section className={styles.bioSection}>
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.photoPlaceholder}>S</div>
        </motion.div>

        <motion.div
          className={styles.bioText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.bio}>
            I&apos;m a full-stack developer with a passion for building clean,
            performant, and user-friendly web applications. I enjoy working
            across the entire stack — from crafting pixel-perfect UIs to
            designing scalable backend architectures.
          </p>
          <p className={styles.bio}>
            When I&apos;m not coding, you can find me exploring new
            technologies, contributing to open-source projects, or tinkering
            with my home lab setup. I believe in writing code that&apos;s not
            just functional, but maintainable and well-documented.
          </p>
        </motion.div>
      </section>

      {/* ---- Skills ---- */}
      <section className={styles.skillsSection}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Skills & Technologies
        </motion.h2>

        {skills.map((group) => (
          <div key={group.category} className={styles.skillGroup}>
            <h3 className={styles.skillCategory}>{group.category}</h3>
            <div className={styles.chips}>
              {group.items.map((item) => {
                const idx = chipIndex++;
                return <SkillChip key={item} label={item} index={idx} />;
              })}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
