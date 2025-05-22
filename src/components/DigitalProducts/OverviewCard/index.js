import React from "react";
import styles from "../../../styles/page.module.scss";

const OverviewCard = ({ overviewData }) => {
  return (
    <section className={styles.overviewCardWrapper}>
      <div className={styles.overviewCardTitle}>{overviewData.title}</div>
      <div className={styles.overviewCardDescription}>
        {overviewData.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </section>
  );
};

export default OverviewCard;
