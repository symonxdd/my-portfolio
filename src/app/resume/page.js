"use client";

import { motion } from "framer-motion";
import {
  FiDownload,
  FiBriefcase,
  FiAward,
  FiMapPin,
  FiCode,
} from "react-icons/fi";
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
          <h2 className={styles.cardTitle}>
            <FiBriefcase size={18} /> Experience & Internships
          </h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Fullstack Cloud Developer (Internship)</h3>
            <p className={`${styles.entryMeta} ${styles.metaItem}`}>
              <FiMapPin size={12} /> Depole, Corda Campus Hasselt · May 2024
            </p>
            <p className={styles.entryDesc}>
              Extended the cloud application &quot;Witness&quot; with a focus on scalable architecture and clean code.
            </p>
            <p className={`${styles.entryMeta} ${styles.metaItem}`}>
              <FiCode size={12} /> Tech: React Native, TypeScript, VueJS, PHP, Laravel, Amplify, AWS, Cognito, S3, AppSync, DynamoDB, Lambda
            </p>
          </div>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>Fullstack Developer (Internship)</h3>
            <p className={`${styles.entryMeta} ${styles.metaItem}`}>
              <FiMapPin size={12} /> Callexcell, Stayen Sint-Truiden · Feb 2017
            </p>
            <p className={styles.entryDesc}>
              Gained experience with both .NET and PHP projects, optimizing web forms and database connections.
            </p>
            <p className={`${styles.entryMeta} ${styles.metaItem}`}>
              <FiCode size={12} /> Tech: ASP.NET, PHP, (T)SQL, JavaScript, HTML, CSS
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            <FiAward size={18} /> Education
          </h2>
          <div className={styles.entry}>
            <h3 className={styles.entryTitle}>
              Bachelor of Applied Computer Science
            </h3>
            <p className={`${styles.entryMeta} ${styles.metaItem}`}>
              <FiMapPin size={12} /> PXL University of Applied Sciences, Hasselt · Feb 14 2025
            </p>
            <p className={styles.entryMeta}>Major in application development</p>
            <p className={styles.entryDesc}>
              Focused on software engineering, algorithms, and web technologies.
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
