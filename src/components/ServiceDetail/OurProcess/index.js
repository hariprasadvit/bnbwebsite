import React from "react";
import styles from "../serviceDetail.module.scss";
import Image from "next/image";
import processImage from "../../../../public/processImage.svg";

const OurProcess = ({ data }) => {
  return (
    <div className={styles.ourProcessSection}>
      {console.log(data, "OurProcess data")}
      <div className={styles.ourProcessTopContainer}>
        <h2>Our Process</h2>
        <div className={styles.ourProcessTop}>
          <div className={styles.ourProcessImage}>
            <Image src={processImage} alt="Process" />
          </div>
          <div className={styles.ourProcessTitleDescription}>
            <div className={styles.ourProcessTitle}>{data?.title}</div>
            <div className={styles.ourProcessDescription}>{data?.desc}</div>
          </div>
        </div>
      </div>

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

export default OurProcess;
