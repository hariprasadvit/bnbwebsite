import React from "react";
import styles from "../serviceDetail.module.scss";

export default function AiSolutions({ solutionData }) {
  return (
    <section className={styles.aiSolutionsSection}>
      <div className={styles.container}>
        <h2>
          <span>Erase the average embrace the bold</span>
          Designing lucid, captivating UX/UI designs for your AI solutions
        </h2>
        <div className={styles.description}>
          We help businesses develop strong, user-friendly platforms that
          connect with their audience by converting complex AI procedures into
          intuitive experiences.
        </div>
        <div className={styles.aiSolutionList}>
          {solutionData.map((item, index) => (
            <div key={index} className={styles.solutionListContainer}>
              <div className={styles.title}>{item.title}</div>
              <div
                className={`${styles.description} ${styles.descriptionWidth}`}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
