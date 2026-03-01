"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.span
            key="sun"
            className={styles.icon}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiSun size={18} />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            className={styles.icon}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiMoon size={18} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
