"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowLeft, FiExternalLink, FiGithub, FiLock, FiDownload, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Button from "@/components/ui/Button";
import DynamicDownload from "@/components/ui/DynamicDownload";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const screenshots = project?.screenshots ?? [];

  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () =>
    setLightboxIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  const showNext = () =>
    setLightboxIndex((i) => (i + 1) % screenshots.length);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, screenshots.length]);

  if (!project) {
    return (
      <div className={styles.page}>
        <h1 className={styles.title}>Project not found</h1>
        <Link href="/projects" className={styles.backLink}>
          <FiArrowLeft size={16} /> Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Link href="/projects" className={styles.backLink}>
        <FiArrowLeft size={16} /> Back to projects
      </Link>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {project.title}
        {project.wip && <span className={styles.wipBadge}>Work in Progress</span>}
      </motion.h1>

      <motion.div
        className={styles.tags}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </motion.div>

      <motion.div
        className={`${styles.thumbnail} ${project.compactThumbnail ? styles.compact : ""}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            width={1280}
            height={720}
            className={styles.image}
          />
        ) : (
          <span className={styles.placeholderIcon}>
            {project.title.charAt(0)}
          </span>
        )}
      </motion.div>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {project.details.split("\n\n").map((paragraph, i) => (
          <p key={i} className={styles.description}>
            {paragraph}
          </p>
        ))}

        {project.screenshots && project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
          >
            <h2 className={styles.sectionTitle}>Screenshots</h2>
            {project.screenshotsNote && (
              <p className={styles.screenshotsNote}>{project.screenshotsNote}</p>
            )}
            <div className={styles.gallery}>
              {project.screenshots.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={styles.galleryItem}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Open screenshot ${i + 1} in full size`}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 200px"
                    className={styles.galleryImage}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {project.motivation && (
          <motion.div
            className={styles.motivation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h2 className={styles.sectionTitle}>{project.motivationTitle || "Why I Built This"}</h2>
            {project.motivation.split("\n\n").map((paragraph, i) => (
              <p key={i} className={styles.motivationText}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        )}

        <div className={styles.actions}>
          {project.repoUrl ? (
            <Button href={project.repoUrl} variant="secondary">
              <FiGithub size={16} /> View Code
            </Button>
          ) : (
            <span className={styles.privateNote}>
              <FiLock size={14} />
              {project.noRepoLabel || "Private repo · Available on request"}
            </span>
          )}
          {project.siteUrl && project.siteLabel && (
            <Button href={project.siteUrl}>
              <FiExternalLink size={16} /> {project.siteLabel}
            </Button>
          )}
          {project.downloadUrl && project.downloadLabel && (
            <DynamicDownload
              project={project}
              isButton={true}
            />
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className={styles.lightboxOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={closeLightbox}
              aria-label="Close"
            >
              <FiX size={28} />
            </button>

            {screenshots.length > 1 && (
              <button
                type="button"
                className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous screenshot"
              >
                <FiChevronLeft size={32} />
              </button>
            )}

            <motion.div
              className={styles.lightboxImageWrapper}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[lightboxIndex]}
                alt={`${project.title} screenshot ${lightboxIndex + 1}`}
                width={960}
                height={2079}
                className={styles.lightboxImage}
              />
            </motion.div>

            {screenshots.length > 1 && (
              <button
                type="button"
                className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next screenshot"
              >
                <FiChevronRight size={32} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
