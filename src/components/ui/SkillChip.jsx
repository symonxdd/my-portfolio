"use client";

import { motion } from "framer-motion";
import styles from "./SkillChip.module.css";

export default function SkillChip({ label, index = 0 }) {
  return (
    <motion.span
      className={styles.chip}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04, ease: "easeOut" }}
    >
      {label}
    </motion.span>
  );
}
