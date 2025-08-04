import React from "react";
import styles from "../serviceDetail.module.scss";

export default function AiSolutions({ data, whiteBG }) {
  return (
    <section
      className={`${styles.aiSolutionsSection} ${
        whiteBG ? styles.whiteBG : ""
      }`}
    >
      <div className={styles.container}>
        <h2>
          <span>{data.pre_title}</span>
          {data.title}
        </h2>
        <div className={styles.description}>{data.desc}</div>
        <div className={styles.aiSolutionList}>
          {data?.second_section_list.map((item, index) => (
            <div key={index} className={styles.solutionListContainer}>
              <div className={styles.title}>{item.title}</div>
              <div
                className={`${styles.description} ${styles.descriptionWidth}`}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
