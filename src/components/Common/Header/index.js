"use client";

import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ whiteHeader, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };

  const closeMainMenu = () => {
    setIsMainMenuOpen(false);
  };

  const mainMenuVariants = {
    open: { display: "grid" },
    closed: { display: "none" },
  };

  const item1Variants = {
    open: { scaleY: 1, opacity: 1, transformOrigin: "bottom" },
    closed: { scaleY: 0, opacity: 1, transformOrigin: "bottom" },
  };

  const item2Variants = {
    open: { scaleX: 1, opacity: 1, transformOrigin: "left" },
    closed: { scaleX: 0, opacity: 1, transformOrigin: "left" },
  };

  const item3Variants = {
    open: { scaleY: 1, opacity: 1, transformOrigin: "bottom" },
    closed: { scaleY: 0, opacity: 1, transformOrigin: "bottom" },
  };

  const item4Variants = {
    open: { scaleX: 1, opacity: 1, transformOrigin: "right" },
    closed: { scaleX: 0, opacity: 1, transformOrigin: "right" },
  };

  const item5Variants = {
    open: { scaleY: 1, opacity: 1, transformOrigin: "top" },
    closed: { scaleY: 0, opacity: 1, transformOrigin: "top" },
  };

  const transition = {
    type: "ease",
    duration: 0.3, // Adjust duration as needed
  };

  return (
    <header
      className={`${styles.headerWrapper} ${scrolled ? styles.shrink : ""} ${
        whiteHeader ? styles.whiteHeader : ""
      }`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo" width={157} height={61} />
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link
                href="/projects"
                className={active === "projects" ? styles.active : ""}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link href="/">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/">Clients</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.submenu} onClick={toggleMainMenu}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <AnimatePresence>
          {isMainMenuOpen && (
            <motion.div
              className={styles.mainMenu}
              variants={mainMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_1}`}
                variants={item1Variants}
                transition={transition}
              >
                <div onClick={closeMainMenu}>Close</div>
              </motion.div>
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_2}`}
                variants={item2Variants}
                transition={transition}
              ></motion.div>
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_3}`}
                variants={item3Variants}
                transition={transition}
              ></motion.div>
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_4}`}
                variants={item4Variants}
                transition={transition}
              ></motion.div>
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_5}`}
                variants={item5Variants}
                transition={transition}
              ></motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
