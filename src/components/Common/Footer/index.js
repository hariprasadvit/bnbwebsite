"use client";

import React from "react";
import footerLogo from "/public/footerLogo.png";
import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";
import fb from "/public/fb.svg";
import insta from "/public/insta.svg";
import linkedin from "/public/linkedin.svg";
import x from "/public/x.svg";
import up from "/public/up.svg";
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.container}>
        <div className={styles.topContent}>
          <Link href="/" className={styles.logo}>
            <Image src={footerLogo} alt="Logo" width={157} height={61} />
          </Link>
          <div>
            509, Red Rose Plaza, DB Road, <br /> RS Puram, Coimbatore 641002
          </div>
          <div>
            <span>Prefer to call us? </span>
            <Link href="tel:+91-9952361618">+91-9952361618</Link>
          </div>
          <div>
            <span>Email </span>
            <Link href="mailto:contact@cartoonmango.com">
              contact@cartoonmango.com
            </Link>
          </div>
        </div>
        <div className={styles.quickLinksWrapper}>
          <div className={`${styles.linksWrap} ${styles.firstWrap}`}>
            <h5>Quick Links</h5>
            <ul>
              <li>
                <Link href="/">Home </Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">Our Clients</Link>
              </li>
              <li>
                <Link href="/">News & Blogs </Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
            </ul>
          </div>
          <div className={styles.linksWrap}>
            <h5>Industries</h5>
            <ul>
              <li>
                <Link href="/">Banking and Fintech </Link>
              </li>
              <li>
                <Link href="/">Ecommerce </Link>
              </li>
              <li>
                <Link href="/">Fantasy Gaming </Link>
              </li>
              <li>
                <Link href="/">E-Sports </Link>
              </li>
              <li>
                <Link href="/">Sports </Link>
              </li>
              <li>
                <Link href="/">News and Media </Link>
              </li>
              <li>
                <Link href="/">Agri-Tech </Link>
              </li>
              <li>
                <Link href="/">Mobility </Link>
              </li>
              <li>
                <Link href="/">Travel </Link>
              </li>
              <li>
                <Link href="/">E-Learning & Education </Link>
              </li>
              <li>
                <Link href="/">Real Estate </Link>
              </li>
              <li>
                <Link href="/">Healthcare </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.linksWrap} ${styles.lastWrap}`}>
            <h5>Techstack</h5>
            <ul>
              <li>
                <Link href="/">Python </Link>
              </li>
              <li>
                <Link href="/">NodeJS </Link>
              </li>
              <li>
                <Link href="/">Apache Solr </Link>
              </li>
              <li>
                <Link href="/">Elastic Search </Link>
              </li>
              <li>
                <Link href="/">Frontend </Link>
              </li>
              <li>
                <Link href="/"> ReactJS </Link>
              </li>
              <li>
                <Link href="/">Flutter </Link>
              </li>
              <li>
                <Link href="/">Blockchain </Link>
              </li>
              <li>
                <Link href="/">Ethereum </Link>
              </li>
              <li>
                <Link href="/">Polygon </Link>
              </li>
              <li>
                <Link href="/">Truffle </Link>
              </li>
              <li>
                <Link href="/">Solidity </Link>
              </li>
              <li>
                <Link href="/">Big Data and Analytics </Link>
              </li>
              <li>
                <Link href="/">Apache Spark </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <Link href="/">
                <Image src={fb} alt="Logo" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={insta} alt="Logo" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={linkedin} alt="Logo" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={x} alt="Logo" width={24} height={24} />
              </Link>
            </li>
          </ul>
          <div className={styles.goToTop} onClick={scrollToTop}>
            <Image src={up} alt="Click to go to top" />
            Back To Top
          </div>
        </div>
        <div className={styles.copyright}>
          <p>Boolean Labs ⓒ 2025 All rights reserved.</p>

          <div>
            <Link href="/">Privacy</Link>
            <Link href="/">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
