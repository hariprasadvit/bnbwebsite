"use client";

import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import servicePagelogo from "/public/footerLogo.png";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export default function Header({ whiteHeader, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [activeLabel, setActiveLabel] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    switch (pathname) {
      case "/":
        setActiveLabel("Home");
        break;
      case "/services":
        setActiveLabel("Services");
        break;
      case "/clients":
        setActiveLabel("Clients");
        break;
      case "/about":
        setActiveLabel("About");
        break;
      case "/hiring":
        setActiveLabel("Hiring");
        break;
      case "/portfolio":
        setActiveLabel("Portfolio");
        break;
      case "/contact-us":
        setActiveLabel("Contact Us");
        break;
      default:
        setActiveLabel("");
    }
  }, [pathname]);

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
    duration: 0.3,
  };

  const fadeUpStaggerContainer = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const fadeUpItem = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  const handleMenuNavClick = (label) => {
    setActiveLabel(label);
    closeMainMenu();
    switch (label) {
      case "Home":
        router.push("/");
        break;
      case "About":
        router.push("/");
        break;
      case "Services":
        router.push("/services");
        break;
      case "Hiring":
        router.push("/");
        break;
      case "Portfolio":
        router.push("/");
        break;
      case "Clients":
        router.push("/clients");
        break;
      case "Contact Us":
        router.push("/");
        break;
      default:
        break;
    }
  };

  return (
    <header
      className={`${styles.headerWrapper} ${scrolled ? styles.shrink : ""} ${
        whiteHeader ? styles.whiteHeader : ""
      } `}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo" />
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link
                href="/case-study"
                className={active === "projects" ? styles.active : ""}
              >
                Case Studies
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={active === "services" ? styles.active : ""}
              >
                Services
              </Link>
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
                <div onClick={closeMainMenu} className={styles.closeIcon}>
                  &times;
                </div>

                <motion.nav
                  variants={fadeUpStaggerContainer}
                  initial="closed"
                  animate="open"
                >
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Hiring",
                    "Portfolio",
                    "Clients",
                    "Contact Us",
                  ].map((label, index) => (
                    <motion.a
                      key={index}
                      onClick={() => handleMenuNavClick(label)}
                      // href="#"
                      variants={fadeUpItem}
                      role="button"
                      tabIndex={0}
                      className={
                        label === activeLabel ? styles.activeMenuItem : ""
                      }
                    >
                      {label}
                    </motion.a>
                  ))}
                </motion.nav>
              </motion.div>

              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_2}`}
                variants={item2Variants}
                transition={transition}
              >
                <div className={styles.locationCard}>
                  <img src="/image.png" alt="Map" className={styles.mapImage} />
                  <div className={styles.hoverOverlay}>
                    <a
                      href="/your-location-link"
                      className={styles.locationText}
                    >
                      The Location
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_3}`}
                variants={item3Variants}
                transition={transition}
              >
                <motion.ul
                  variants={fadeUpStaggerContainer}
                  initial="closed"
                  animate="open"
                >
                  {[
                    "THE GAMEPLAY",
                    "ABOUT LARP",
                    "THE RULES",
                    "HISTORY",
                    "PEOPLE",
                    "JOIN",
                    "...",
                  ].map((text, index) => (
                    <motion.li key={index} variants={fadeUpItem}>
                      <a href="#">{text}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_4}`}
                variants={item4Variants}
                transition={transition}
              >
                <motion.div
                  className={styles.joinNow}
                  variants={fadeUpStaggerContainer}
                  initial="closed"
                  animate="open"
                >
                  <motion.h3 variants={fadeUpItem}>
                    <a href="#">Learn how to participate</a>
                  </motion.h3>
                </motion.div>
              </motion.div>

              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_5}`}
                variants={item5Variants}
                transition={transition}
              >
                <div>
                  <h3>Learn how to participate</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
