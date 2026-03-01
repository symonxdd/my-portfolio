"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ui/ContactForm";
import SocialIcons from "@/components/ui/SocialIcons";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        Have a question or want to work together? Drop me a message.
      </motion.p>

      <div className={styles.layout}>
        <motion.div
          className={styles.formWrapper}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>

        <motion.aside
          className={styles.sidebar}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className={styles.infoCard}>
            <h2 className={styles.infoTitle}>Other Ways to Reach Me</h2>
            <p className={styles.infoText}>
              Feel free to connect with me on any of these platforms. I&apos;m
              always happy to chat about tech, open source, or potential
              collaborations.
            </p>
            <SocialIcons size={22} />
          </div>
        </motion.aside>
      </div>
    </div>
  );
}
