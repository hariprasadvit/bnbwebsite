import React from "react";
import styles from "./style.module.scss";

export default function Banner({ title, description, hightlighted_text }) {
  return (
    <section className={styles.banner} id="bannerTop">
      <div className={`${styles.content}`}>
        <div>
          <h1>
            {/* {title}  */}
            <span> {hightlighted_text} </span>
          </h1>
          <div className={styles.descriptionContainerWithScroll}>
            <h2>{description}</h2>
            <div className={styles.scroll}>(Scroll)</div>
          </div>
        </div>

        <div className={styles.dashedBorder}></div>
      </div>
      {/* <div className={styles.splineWrap}>
        <Spline
          className={styles.spline}
          scene="https://prod.spline.design/uyq7dF5D1Z1ksQZy/scene.splinecode"
          width={849}
          height={549}
        />
      </div> */}
    </section>
  );
}
