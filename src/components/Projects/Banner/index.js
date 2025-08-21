import React from "react";
import styles from "./style.module.scss";

export default function Banner({
  title,
  description,
  hightlighted_text,
  centerText,
  hideScroll,
  blackBg,
  removevhHeight,
}) {
  return (
    <section
      className={`${styles.banner} ${blackBg ? styles.blackBg : ""} ${
        removevhHeight ? styles.removevhHeight : ""
      }`}
      id="bannerTop"
    >
      <div
        className={`${styles.content} ${centerText ? styles.centerText : ""}`}
      >
        <div>
          <h1>
            {title}
            <span> {hightlighted_text} </span>
          </h1>
          <div className={styles.descriptionContainerWithScroll}>
            <h2>{description}</h2>
            {hideScroll ? null : (
              <div className={styles.scroll}>
                <span>Scroll</span>
              </div>
            )}
          </div>
        </div>

        <div className={styles.dashedBorder}></div>
      </div>
    </section>
  );
}
