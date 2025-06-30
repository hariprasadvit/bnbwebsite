import React from "react";
import styles from "../../../styles/page.module.scss";
import Link from "next/link";
export default function NumberSection({ disableTopPadding = false }) {
  return (
    <section className={styles.numberSection}>
      <div
        className={`${styles.container} ${
          disableTopPadding ? styles.custompadding : ""
        }`}
      >
        <div className={styles.nSectionLeft}>
          <p>AI Agents for Modern Enterprises</p>
        </div>
        <div className={styles.nSectionRight}>
          <h3>
            Automate business tasks and orchestrate workflows with scalable,
            context-aware AI agents
          </h3>
          <p>
            At Boolean and Beyond, we design AI-driven intelligent agents that
            go far beyond chat, from automating routine business tasks to
            orchestrating complex workflows and enhancing decision support. By
            integrating NLP, knowledge graphs, and machine learning, our AI
            agents deliver context-aware, adaptable, and scalable solutions for
            modern enterprises.
          </p>
          <div className={styles.numbersWrap}>
            <div className={styles.number}>
              <strong>10+</strong>
              <span>Client projects with AI agents</span>
            </div>
            <div className={styles.number}>
              <strong>50+</strong>
              <span>Custom AI agents deployed</span>
            </div>
            <div className={styles.number}>
              <strong>200+</strong>
              <span>AI-driven workflows automated</span>
            </div>
          </div>
          <div className={` ${styles.learnMore}`}>
            <Link href={"#"} className="knowMoreLink">
              Learn More{"    "}
            </Link>
            on you can leverage Conversational AI & AI Agents for your
            organisation
          </div>
        </div>
      </div>
    </section>
  );
}
