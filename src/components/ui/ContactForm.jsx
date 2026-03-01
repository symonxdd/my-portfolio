"use client";

import { useState } from "react";
import Button from "./Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:symon@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className={styles.input}
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className={styles.input}
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={styles.textarea}
          placeholder="Your message…"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" variant="primary">
        Send Message
      </Button>
    </form>
  );
}
