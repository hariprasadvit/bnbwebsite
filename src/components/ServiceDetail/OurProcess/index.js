import React from "react";
import styles from "../serviceDetail.module.scss";
import Image from "next/image";
import processImage from "../../../../public/processImage.svg";

const OurProcess = ({ processData }) => {
  return (
    <div className={styles.ourProcessSection}>
      <div className={styles.ourProcessTopContainer}>
        <h2>Our Process</h2>
        <div className={styles.ourProcessTop}>
          <div className={styles.ourProcessImage}>
            <Image src={processImage} alt="Process" />
          </div>
          <div className={styles.ourProcessTitleDescription}>
            <div className={styles.ourProcessTitle}>
              We improve the overall customer experience through different
              digital channels with a focus on ease of use, accessibility, and
              personalization.
            </div>
            <div className={styles.ourProcessDescription}>
              We help businesses develop strong, user-friendly platforms that
              connect with their audience by converting complex AI procedures
              into intuitive experiences.
            </div>
          </div>
        </div>
      </div>

      {processData.map((item, index) => (
        <div key={index} className={styles.ourProcessBottom}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.ourProcessDetails}>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.listsContainer}>
              {item.lists.map((list, i) => (
                <div key={i} className={styles.listsWrapper}>
                  <div className={styles.listsLabel}>{list.label}</div>
                  <div className={styles.listsValue}>{list.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProcess;
