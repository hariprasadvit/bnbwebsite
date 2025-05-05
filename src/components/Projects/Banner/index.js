import React from "react";
import styles from "./style.module.scss";

export default function Banner() {
  return (
    <section className={styles.banner} id="bannerTop">
      <div className={`${styles.content}`}>
        <div>
          <h1>
            EMPOWERING YOUR BUSINESS WITH CREATIVE AND{" "}
            <span> TECH-DRIVEN SOLUTIONS </span>
          </h1>
          <h2>
            At Boolean and Beyond, we offer a range of tech-driven solutions to
            help businesses achieve their goals. From AI and ML to cloud
            solutions, AR and VR, and big data analytics, we’re committed to
            delivering exceptional results that help our clients stay ahead in
            today’s rapidly evolving digital landscape.
          </h2>
        </div>
        <div className={styles.scroll}>(Scroll)</div>
        <div className={styles.dashedBorder}></div>
      </div>
    </section>
  );
}
