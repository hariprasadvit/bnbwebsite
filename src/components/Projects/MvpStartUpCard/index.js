import React from "react";
import styles from "./mvp.module.scss";

const MvpStartUpCard = ({ data }) => {
  return (
    <div className={styles.mvpStartUpCardContainer}>
      <h2>{data.introHeading}</h2>
      <div className={styles.content}>
        <div className={styles.paragraph}>{data.tag}</div>
        <div className={styles.mainContent}>
          <div className={styles.mvpStartUpHeading}>{data.mainHeading}</div>
          <div className={styles.paragraph}>{data.description}</div>
        </div>
      </div>
    </div>
  );
};

export default MvpStartUpCard;
