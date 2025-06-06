import React from "react";
import styles from "../../../styles/page.module.scss";
import ReactMarkdown from "react-markdown";

const OverviewCard = ({ data }) => {
  let { title, description } = data;
  return (
    <section className={styles.overviewCardWrapper}>
      <div className={styles.overviewCardTitle}>{title}</div>
      <div className={styles.overviewCardDescription}>
        {/* {overviewData.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))} */}
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </section>
  );
};

export default OverviewCard;
