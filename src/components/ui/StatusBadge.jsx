"use client";

import { motion } from "framer-motion";
import styles from "./StatusBadge.module.css";

export default function StatusBadge() {
  return (
    <motion.div
      className={styles.badge}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={styles.dotContainer}>
        <div className={styles.dot} />
        <div className={styles.pulse} />
      </div>
      <span className={styles.text}>Portfolio under construction</span>
    </motion.div>
  );
}
