import React from "react";
import styles from "../../../styles/page.module.scss";
import Link from "next/link";
export default function NumberSection({
  disableTopPadding = false
}) {
  return (
    <section className={styles.numberSection}>
      <div className={`${styles.container} ${disableTopPadding ? styles.custompadding : ""}`}>
        <div className={styles.nSectionLeft}>
          <p>
            Lorem Epsom text goes here And some more lore Epsom Text goes here
          </p>
        </div>
        <div className={styles.nSectionRight}>
          <h3>
            Make data-driven decisions With real- time insights and Ensure every
            reward aligns with your business objectives
          </h3>
          <p>
            Our AI-driven intelligent agents enhance automation,
            decision-making, and personalization across industries. At Boolean
            and Beyond, we design AI agents that integrate NLP, knowledge
            graphs, and machine learning t o provide context-aware solutions.
          </p>
          <div className={styles.numbersWrap}>
            <div className={styles.number}>
              <strong>4.9</strong>
              <span>Lorem ipsum</span>
            </div>
            <div className={styles.number}>
              <strong>5M</strong>
              <span>Lorem ipsum</span>
            </div>
            <div className={styles.number}>
              <strong>1200+</strong>
              <span>Lorem ipsum</span>
            </div>
          </div>
          <div className={` ${styles.learnMore}`}>
            <Link href={"#"} className="knowMoreLink">
              Learn More{"    "}
            </Link>
            on you can leverage Conversational AI & Chatbots for your
            organisation
          </div>
        </div>
      </div>
    </section>
  );
}
