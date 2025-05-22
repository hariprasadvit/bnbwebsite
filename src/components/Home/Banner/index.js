import React from "react";
import styles from "../../../styles/page.module.scss";
export default function Banner({ data = {} }) {
  let { title, hightlighted_title, sub_title } = data;
  return (
    <section className={styles.banner} id="bannerTop">
      <div className={`${styles.content}`}>
        <div>
          <h1>
            {title} <span> {hightlighted_title} </span>
          </h1>
          <h2>{sub_title}</h2>
        </div>
        <div className={styles.scroll}>(Scroll)</div>
        <div className={styles.dashedBorder}></div>
      </div>
    </section>
  );
}
