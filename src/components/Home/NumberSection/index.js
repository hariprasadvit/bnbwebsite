import React from "react";
import styles from "../../../styles/page.module.scss";
import Link from "next/link";
export default function NumberSection({ disableTopPadding = false, whiteBG, industryPage = false }) {
  return (
    <section 
      className={`${styles.numberSection} ${industryPage ? styles.industryEnhanced : ""}`}
      style={{
        background: '#000000 !important',
        backgroundColor: '#000000 !important'
      }}
    >
      <div
        className={`${styles.container} ${
          disableTopPadding ? styles.custompadding : ""
        }`}
      >
        <div className={styles.nSectionLeft}>
          <p>Digital Product Development for Modern Businesses</p>
        </div>
        <div className={styles.nSectionRight}>
          <h3>
            Design, build, and scale digital platforms from MVPs to enterprise
            systems.
          </h3>
          <p>
            At Boolean and Beyond, we specialize in end-to-end product
            development from user-centric design and scalable architectures to
            full-stack engineering. Whether you're launching a SaaS platform,
            modernizing legacy systems, or integrating enterprise tools, we help
            you deliver robust, high-impact software aligned with your goals.
          </p>
          <div className={styles.numbersWrap}>
            <div className={styles.number}>
              <strong>100+</strong>
              <span>Clients served across industries</span>
            </div>
            <div className={styles.number}>
              <strong>50+</strong>
              <span>Full-scale products launched</span>
            </div>
            <div className={styles.number}>
              <strong>10+</strong>
              <span>Years of design & engineering experience</span>
            </div>
          </div>
          <div className={` ${styles.learnMore}`}>
            <Link href={"/services"} className="knowMoreLink">
              Explore more{"    "}
            </Link>
            on how we help companies bring digital products to life faster,
            smarter, and built to scale.
          </div>
        </div>
      </div>
    </section>
  );
}
