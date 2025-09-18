import React from "react";
import styles from "./styles.module.scss";
export default function WhyChoose() {
  return (
    <div className={styles.WhyChooseSection}>
      <div className={styles.WhyChooseContainer}>
        <div className={styles.title}>
          <h2>Why choose us for B2B Development</h2>
          <p>
            We help businesses turn bold ideas into functional, user-validated
            MVPs through a thoughtful, data-driven strategy. From initial
            discovery to launch, our approach ensures every feature supports
            your core value proposition and business goals.
          </p>
        </div>
        <div className={styles.CardContainer}>
          <div className={styles.left}>
            <ul>
              <li>Make data driven decisions with real</li>
              <li>Make data driven decisions with real and som</li>
              <li>Make data driven decisions with real</li>
              <li>Make data driven decisions</li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.card}>
              <strong>30+</strong>
              <span>SaaS Projects</span>
            </div>
            <div className={styles.card}>
              <strong>30+</strong>
              <span>SaaS Projects</span>
            </div>
            <div className={styles.card}>
              <strong>30+</strong>
              <span>SaaS Projects</span>
            </div>
            <div className={styles.card}>
              <strong>30+</strong>
              <span>SaaS Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
