"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, useLayoutEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

const MENU_BTN_SPACE = 38; // .menuBtn width + gap, reserved only once items overflow
const LINK_GAP = 2; // matches .navLinks gap

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(navLinks.length);

  const containerRef = useRef(null);
  const cloneRef = useRef(null);
  const cloneLinkRefs = useRef([]);
  const dropdownRef = useRef(null);
  const menuBtnRef = useRef(null);

  const recalc = useCallback(() => {
    const container = containerRef.current;
    const clone = cloneRef.current;
    if (!container || !clone) return;

    const containerWidth = container.clientWidth;
    const cloneTotalWidth = clone.offsetWidth;
    const linkWidths = cloneLinkRefs.current.map((el) => (el ? el.offsetWidth : 0));
    const linksGapTotal = LINK_GAP * Math.max(linkWidths.length - 1, 0);
    const sumLinkWidths = linkWidths.reduce((a, b) => a + b, 0);

    // Everything in the pill except the nav links themselves and the gaps
    // between them (logo, separator, theme toggle, paddings, other gaps).
    const chromeWidth = cloneTotalWidth - sumLinkWidths - linksGapTotal;

    const fits = (count, extraReserved) => {
      if (count === 0) return true;
      const needed =
        linkWidths.slice(0, count).reduce((a, b) => a + b, 0) +
        LINK_GAP * (count - 1);
      return chromeWidth + needed + extraReserved <= containerWidth;
    };

    if (fits(navLinks.length, 0)) {
      setVisibleCount(navLinks.length);
      return;
    }

    let count = navLinks.length;
    while (count > 0 && !fits(count, MENU_BTN_SPACE)) {
      count--;
    }
    setVisibleCount(count);
  }, []);

  useLayoutEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Close on click/tap outside the dropdown
  useEffect(() => {
    if (!mobileOpen) return;
    const handlePointerDown = (e) => {
      if (
        dropdownRef.current?.contains(e.target) ||
        menuBtnRef.current?.contains(e.target)
      ) {
        return;
      }
      setMobileOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [mobileOpen]);

  const visibleLinks = navLinks.slice(0, visibleCount);
  const overflowLinks = navLinks.slice(visibleCount);
  const hasOverflow = overflowLinks.length > 0;

  const isLinkActive = (href) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className={[styles.header, scrolled && styles.scrolled].filter(Boolean).join(" ")}>
      <div className={styles.container} ref={containerRef}>
        <motion.nav className={styles.pill} initial={false}>
          <div className={styles.fixedGroup}>
            <Link href="/" className={styles.logo}>
              symon.
            </Link>
            <div className={styles.separator} />
          </div>

          <div className={styles.navLinks}>
            {visibleLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className={styles.activePill}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className={styles.navLinkText}>{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className={styles.actions}>
            <ThemeToggle />

            {hasOverflow && (
              <button
                ref={menuBtnRef}
                className={styles.menuBtn}
                onClick={() => setMobileOpen((prev) => !prev)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
              </button>
            )}

            <AnimatePresence>
              {mobileOpen && hasOverflow && (
                <motion.div
                  ref={dropdownRef}
                  className={styles.mobileDropdown}
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                >
                  <nav className={styles.mobileNav} aria-label="More navigation">
                    {overflowLinks.map((link) => {
                      const isActive = isLinkActive(link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={`${styles.mobileLink} ${isActive ? styles.mobileLinkActive : ""}`}
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </div>

      {/* Hidden full-size clone of the pill (logo + ALL links + theme
          toggle placeholder, no menu button) used only to measure how
          much width the complete nav would need. */}
      <div className={styles.measureRow} aria-hidden="true">
        <div className={styles.pill} ref={cloneRef}>
          <div className={styles.fixedGroup}>
            <span className={styles.logo}>symon.</span>
            <div className={styles.separator} />
          </div>
          <div className={styles.navLinks}>
            {navLinks.map((link, i) => (
              <span
                key={link.href}
                ref={(el) => (cloneLinkRefs.current[i] = el)}
                className={styles.navLink}
              >
                {link.label}
              </span>
            ))}
          </div>
          <div className={styles.actions}>
            <span className={styles.menuBtn} />
          </div>
        </div>
      </div>
    </header>
  );
}
