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
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Failed to send message. Please check your connection.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage}>
        <h3>Thanks for reaching out!</h3>
        <p>Your message has been sent. I&apos;ll get back to you soon.</p>
        <Button onClick={() => setStatus("idle")} variant="secondary">
          Send another message
        </Button>
      </div>
    );
  }

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
          disabled={status === "loading"}
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
          disabled={status === "loading"}
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
          disabled={status === "loading"}
        />
      </div>

      {status === "error" && (
        <p className={styles.errorText}>{errorMessage}</p>
      )}

      <Button type="submit" variant="primary" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
