"use client";

import React, { useEffect, useState } from "react";
import logo from "/public/logo.svg";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`${styles.headerWrapper} ${scrolled ? styles.shrink : ""}`}
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Logo" width={157} height={61} />
        </Link>
        <nav className={styles.menu}>
          <ul>
            <li>
              <Link href="/">Projects</Link>
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
        <div className={styles.submenu}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </header>
  );
}
