import React from "react";
import styles from "./mvp.module.scss";

const MvpStartUpCard = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.mvpStartUpCardContainer}>
      <h2>{data.title}</h2>
      <div className={styles.content}>
        <div className={styles.paragraph}>({data.type})</div>
        <div className={styles.mainContent}>
          <div className={styles.mvpStartUpHeading}>
            {data.right_section_title}
          </div>
          <div className={styles.paragraph}>
            {data.right_section_description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MvpStartUpCard;
