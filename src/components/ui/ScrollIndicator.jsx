"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollIndicator.module.css";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide once we've scrolled 80px down
      if (window.scrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.indicator}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.mouse}>
            <motion.div
              className={styles.wheel}
              animate={{
                y: [0, 16],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "linear",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
