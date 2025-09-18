/** @format */

import React from "react";
import styles from "./style.module.scss";

export default function BannerContactUs() {
  return (
    <>
      <section className={styles.careersTitleBanner}>
        <div className={styles.careersTitleContent}>
          <div className={styles.careersTopTitle}>
            <h1>Let's Collaborate</h1>
            <span>Your Success is Our Priority!</span>
            <p>
              At Boolean and Beyond, we have a proven track record of success.
              We collaborate closely with our clients to achieve unparalleled
              success. Let us partner with you and create a future filled with
              incredible achievements.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
