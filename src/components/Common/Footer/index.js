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
            <Link href="mailto:contact@booleanandbeyond.com">
              contact@booleanandbeyond.com
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
                <Link href="/case-study">Case Studies</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // prevents jump
                  }}
                >
                  Our Clients
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // prevents jump
                  }}
                >
                  News & Blogs{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // prevents jump
                  }}
                >
                  Career
                </Link>
              </li> */}
            </ul>
          </div>
          <div className={styles.linksWrap}>
            <h5>Industries</h5>
            <ul>
              <li>
                <Link href="/industry/future-ready-banking-tech-solutions">
                  Banking and Fintech{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/enhancing-e-commerce-for-modern-retailers">
                  Ecommerce{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/fantasy-gaming-for-sports-fans">
                  Fantasy Gaming{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/live-sports-innovation-through-technology">
                  E-Sports{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/innovative-tech-for-competitive-gaming">
                  Sports{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/news-and-media-application-deployment">
                  News and Media{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/smart-technology-solutions-for-agriculture">
                  Agri-Tech{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/powering-mobility-with-intelligent-solutions">
                  Mobility{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/custom-travel-platforms-that-connect">
                  Travel{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/powering-digital-classrooms-with-technology">
                  E-Learning & Education{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/simplifying-property-management-with-technology">
                  Real Estate{" "}
                </Link>
              </li>
              <li>
                <Link href="/industry/improving-healthcare-through-custom-tech">
                  {" "}
                  Healthcare{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.linksWrapTech} ${styles.lastWrap}`}>
            <h5>Techstack</h5>
            <div className={styles.linksWrapTechContainer}>
              <ul>
                <li>
                  <strong>Backend</strong>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Python{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Rust{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    NodeJS
                  </Link>
                </li>
                <li>
                  <strong>Search & Indexing</strong>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Apache Solr
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Elastic Search
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <strong>Frontend</strong>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    ReactJS
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Flutter
                  </Link>
                </li>
                <li>
                  <strong>Big Data and Analytics</strong>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Apache Spark
                  </Link>
                </li>
                <li>
                  <strong>Agentic AI</strong>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    LLM Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    LangGraph
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // prevents jump
                    }}
                  >
                    Vector Dbs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <ul>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevents jump
                }}
              >
                <Image src={fb} alt="Logo" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevents jump
                }}
              >
                <Image src={insta} alt="Logo" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevents jump
                }}
              >
                <Image src={linkedin} alt="Logo" width={24} height={24} />
              </Link>
            </li>
            <li>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault(); // prevents jump
                }}
              >
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
          <p>Boolean and Beyond ⓒ 2025 All rights reserved.</p>
          <div>
            <Link href="#">Privacy</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
