import React from "react";
import styles from "./style.module.scss";
import Spline from "@splinetool/react-spline/next";

export default function Banner() {
  return (
    <section className={styles.banner} id="bannerTop">
      <div className={`${styles.content}`}>
        <div>
          <h1>
            EMPOWERING YOUR BUSINESS WITH CREATIVE AND{" "}
            <span> TECH-DRIVEN SOLUTIONS </span>
          </h1>
          <div className={styles.descriptionContainerWithScroll}>
            <h2>
              At Boolean and Beyond, we offer a range of tech-driven solutions
              to help businesses achieve their goals. From AI and ML to cloud
              solutions, AR and VR, and big data analytics, we’re committed to
              delivering exceptional results that help our clients stay ahead in
              today’s rapidly evolving digital landscape.
            </h2>
            <div className={styles.scroll}>(Scroll)</div>
          </div>
        </div>

        <div className={styles.dashedBorder}></div>
      </div>
      <div className={styles.splineWrap}>
        <Spline
          className={styles.spline}
          scene="https://prod.spline.design/uyq7dF5D1Z1ksQZy/scene.splinecode"
          width={849}
          height={549}
        />
      </div>
    </section>
  );
}
