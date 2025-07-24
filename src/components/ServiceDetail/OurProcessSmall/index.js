import React from "react";
import styles from "../serviceDetail.module.scss";

const OurProcessSmall = ({ data }) => {
  return (
    <div className={styles.ourProcessSection}>
      {data?.our_process_list.map((item, index) => (
        <div key={index} className={styles.ourProcessBottom}>
          <div className={styles.label}>{item.main_title}</div>
          <div className={styles.ourProcessDetails}>
            <div className={styles.description}>{item.main_desc}</div>
            <div className={styles.listsContainer}>
              <div className={styles.listsWrapper}>
                <div className={styles.listsLabel}>{item.sub_title_one}</div>
                <div className={styles.listsValue}>{item.desc_one}</div>
              </div>
              <div className={styles.listsWrapper}>
                <div className={styles.listsLabel}>{item.sub_title_two}</div>
                <div className={styles.listsValue}>{item.desc_two}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProcessSmall;
