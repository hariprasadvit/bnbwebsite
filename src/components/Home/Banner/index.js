import React from "react";
import styles from "../../../styles/page.module.scss";

export default function Banner({
  bannerData,
  hideBorder = false,
  contactUs,
  whiteBG,
}) {
  return (
    <section
      className={`${styles.banner} ${whiteBG ? styles.whiteBG : ""}`}
      id="bannerTop"
    >
      <div className={styles.content}>
        <div>
          <h1
            className={`${styles.bannerHeading} ${
              bannerData.highlightFirst ? styles.smallHeading : ""
            }`}
          >
            {bannerData.highlightFirst ? (
              <>
                <span>{bannerData.highlight}</span> {bannerData.heading}
              </>
            ) : (
              <>
                {bannerData.heading} <span>{bannerData.highlight}</span>
              </>
            )}
          </h1>
          <h2
            className={`${styles.subheading} ${
              bannerData.highlightFirst ? styles.smallSubheading : ""
            }`}
          >
            {bannerData.subheading}
          </h2>
          {contactUs && (
            <div className={styles.bannerContactUsButton}>
              <div
                className={`${styles.contactUsButton} ${styles.CustomBorderRadius}`}
              >
                {contactUs}
              </div>
            </div>
          )}
        </div>
        {bannerData.showScroll && <div className={styles.scroll}>(Scroll)</div>}
        <div
          className={`${styles.dashedBorder} ${
            hideBorder ? styles.noBorder : ""
          }`}
        ></div>
      </div>
    </section>
  );
}
