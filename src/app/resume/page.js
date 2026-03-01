"use client";

import { motion } from "framer-motion";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Resume
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        A summary of my professional experience, education, and skills.
      </motion.p>

      {/* ---- Summary Cards ---- */}
      <motion.div
        className={styles.resumeGrid}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Experience</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Full-Stack Developer</h3>
            <p className={styles.entryMeta}>Company Name · 2023 — Present</p>
            <p className={styles.entryDesc}>
              Building and maintaining web applications using React, Node.js,
              and cloud services. Leading frontend architecture decisions and
              mentoring junior developers.
            </p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Junior Developer</h3>
            <p className={styles.entryMeta}>Another Company · 2021 — 2023</p>
            <p className={styles.entryDesc}>
              Developed internal tools and customer-facing features. Worked with
              Python, Django, and PostgreSQL in an agile team environment.
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Education</h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              BSc Computer Science
            </h3>
            <p className={styles.entryMeta}>University · 2017 — 2021</p>
            <p className={styles.entryDesc}>
              Focused on software engineering, algorithms, and web technologies.
              Graduated with honours.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ---- Download ---- */}
      <motion.div
        className={styles.downloadSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p className={styles.downloadText}>
          Want the full version? Download my resume as a PDF.
        </p>
        <div className={styles.downloadActions}>
          <Button href="/resume.pdf" download>
            <FiDownload size={16} /> Download PDF
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
