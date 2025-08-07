"use client";

import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import WhiteLogo from "/public/footerLogo.png";
import servicePagelogo from "/public/footerLogo.png";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import fb from "/public/fb.svg";
import insta from "/public/insta.svg";
import linkedin from "/public/linkedin.svg";
import x from "/public/x.svg";
import footerfb from "/public/fb(white).svg";
import footerinsta from "/public/insta(white).svg";
import footerlinkedin from "/public/linkedin(white).svg";
import footerx from "/public/x(white).svg";

export default function Header({ whiteHeader, active }) {
  const [scrolled, setScrolled] = useState(false);
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const [activeLabel, setActiveLabel] = useState("");

  //Mobile Screen Capture
  const isMobileView = () => window.innerWidth <= 768;
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(isMobileView());
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    open: { display: "flex" },
    closed: { display: "none" },
  };

  const item4Variants = {
    open: { scaleX: 1, opacity: 1, transformOrigin: "right" },
    closed: { scaleX: 0, opacity: 1, transformOrigin: "right" },
  };

  const transition = {
    type: "ease",
    duration: 0.3,
  };

  const handleMenuNavClick = (label) => {
    setActiveLabel(label);
    switch (label) {
      case "Home":
        router.push("/");
        closeMainMenu();
        break;
      case "About":
        router.push("/about");
        closeMainMenu();
        break;
      case "Services":
        router.push("/services");
        closeMainMenu();
        break;
      case "Hiring":
        router.push("#");
        break;
      case "Portfolio":
        router.push("#");
        break;
      case "Clients":
        router.push("#");
      case "Case Studies":
        router.push("/case-study");
        closeMainMenu();
        break;
      case "Contact Us":
        router.push("/contact-us");
        closeMainMenu();
        break;
      default:
        break;
    }
  };

  // Each item will animate from above (y offset) to its final position
  const slideFromTop = {
    hidden: {
      opacity: 0,
      y: "-100%", // fully above the screen
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], // easeInOut
      },
    },
  };

  const delayedFadeDown = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4, // Delay after logo appears
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const menuIconFooter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "self-start",
  };

  const IconbackgroundStyle = {
    // border: "5px solid #05050566",
    borderRadius: "50px",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  };

  return (
    <header
      className={`${styles.headerWrapper} ${scrolled ? styles.shrink : ""} ${
        whiteHeader ? styles.whiteHeader : ""
      } `}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={whiteHeader && !scrolled ? WhiteLogo : logo} alt="Logo" />
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link
                href="/case-study"
                className={active === "caseStudy" ? styles.active : ""}
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
              <Link
                href="/about"
                className={active === "about" ? styles.active : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={active === "contact" ? styles.active : ""}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        {/* <div className={styles.submenu} onClick={toggleMainMenu}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
        <div className={`${styles.submenu}`} onClick={toggleMainMenu}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <AnimatePresence>
          {!mobile && isMainMenuOpen && (
            <motion.div
              className={styles.mainMenu}
              variants={mainMenuVariants}
              transition={transition}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_1}`}
                variants={item4Variants}
                transition={transition}
              >
                <motion.nav
                  variants={item4Variants}
                  initial="closed"
                  animate="open"
                >
                  {[
                    "Home",
                    "About",
                    "Services",
                    // "Hiring",
                    // "Portfolio",
                    // "Clients",
                    "Case Studies",
                    "Contact Us",
                  ].map((label, index) => (
                    <motion.a
                      key={index}
                      onClick={() => handleMenuNavClick(label)}
                      // href="#"
                      variants={item4Variants}
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
                <div onClick={closeMainMenu} className={styles.closeIcon}>
                  &times;
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginLeft: "40px",
                  }}
                >
                  <div
                    style={{
                      ...menuIconFooter,
                      fontSize: "15px",
                    }}
                  >
                    <p className={styles.text_1}>Start a Conversation</p>
                    <p className={styles.text_2}>
                      contact@booleanandbeyond.com
                    </p>
                    <p className={styles.text_3}>We are available here</p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      paddingTop: "20px",
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        gap: "30px",
                        paddingBottom: "15px",
                      }}
                    >
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/booleanbeyond"
                          style={{
                            ...IconbackgroundStyle,
                            backgroundColor: "#fff",
                          }}
                        >
                          <Image
                            src={linkedin}
                            alt="Linkedin Icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                      <li key={idx}>
                        <Link
                          href="https://x.com/booleanbeyond"
                          style={{
                            ...IconbackgroundStyle,
                            backgroundColor: "#fff",
                          }}
                        >
                          <Image src={x} alt="X Icon" width={24} height={24} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
          {mobile && isMainMenuOpen && (
            <motion.div
              className={styles.mainMenu}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {/* 1️⃣ Logo and Close Icon */}
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_1}`}
                variants={slideFromTop}
              >
                <div>
                  <div
                    style={{
                      position: "absolute",
                      top: 18,
                      left: 10,
                      padding: "1rem",
                      zIndex: 10,
                    }}
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    <Image
                      src={servicePagelogo}
                      alt="Logo"
                      width={90}
                      height={30}
                    />
                  </div>
                  <div onClick={closeMainMenu} className={styles.closeIcon}>
                    &times;
                  </div>
                </div>
              </motion.div>
              {/* 2️⃣ Entire menu block appears from top after delay */}
              <motion.div
                className={`${styles.menuItem} ${styles.menuItem_2}`}
                variants={slideFromTop}
              >
                <nav className={`${styles.menuItem} ${styles.menuItem_3}`}>
                  {[
                    "Home",
                    "About",
                    "Services",
                    "Case Studies",
                    // "Hiring",
                    // "Portfolio",
                    // "Clients",
                    "Contact Us",
                  ].map((label, index) => (
                    <a
                      key={index}
                      onClick={() => handleMenuNavClick(label)}
                      role="button"
                      tabIndex={0}
                      className={
                        label === activeLabel ? styles.activeMenuItem : ""
                      }
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <div
                  className={`${styles.menuItem} ${styles.menuItem_4}`}
                ></div>
                <div className={`${styles.menuItem} ${styles.menuItem_5}`}>
                  <div style={{ ...menuIconFooter, paddingLeft: "18px" }}>
                    <p className={styles.text_1}>Start a Conversation</p>
                    <p className={styles.text_2}>
                      contact@booleanandbeyond.com
                    </p>
                    <p className={styles.text_3}>We are available here</p>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      padding: "20px 20px 0",
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        gap: "20px",
                        paddingBottom: "15px",
                      }}
                    >
                      <li>
                        <Link
                          href="https://www.linkedin.com/company/booleanbeyond"
                          style={IconbackgroundStyle}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <Image
                            src={footerlinkedin}
                            alt="Icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://x.com/booleanbeyond"
                          style={IconbackgroundStyle}
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                        >
                          <Image
                            src={footerx}
                            alt="Icon"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
