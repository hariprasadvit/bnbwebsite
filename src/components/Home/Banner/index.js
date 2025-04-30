import React from "react";
import styles from "../../../styles/page.module.scss";
export default function Banner() {
  return (
    <section className={styles.banner} id="bannerTop">
      <div className={`${styles.content}`}>
        <div>
          <h1>
            WE BUILD MVPS, ENTERPRISE APPS & <span> AI-POWERED SYSTEMS </span>
          </h1>
          <h2>
            From rapid MVP development to enterprise-scale applications, we
            build tailored solutions—leveraging knowledge graphs and AI
            agents—to power automation, intelligence, and efficiency.
          </h2>
        </div>
        <div className={styles.scroll}>(Scroll)</div>
        <div className={styles.dashedBorder}></div>
      </div>
    </section>
  );
}
