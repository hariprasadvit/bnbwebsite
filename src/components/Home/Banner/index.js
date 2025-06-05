import React from "react";
import styles from "../../../styles/page.module.scss";

export default function Banner({
  bannerData,
  hideBorder = false,
  contactUs,
  whiteBG,
  headingMaxWidth,
  descriptionMaxWidth,
}) {
  return (
    <section
      className={`${styles.banner} ${whiteBG ? styles.whiteBG : ""}`}
      id="bannerTop"
    >
      <div className={styles.content}>
        <div>
          <h1
            style={{ maxWidth: headingMaxWidth }}
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
          <div className={styles.descriptionContainerWithScroll}>
            <h2
              style={{ maxWidth: descriptionMaxWidth }}
              className={`${styles.subheading} ${
                bannerData.highlightFirst ? styles.smallSubheading : ""
              }`}
            >
              {bannerData.subheading}
            </h2>
            {bannerData.showScroll && (
              <div className={styles.scroll}>(Scroll)</div>
            )}
          </div>
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
        <div
          className={`${styles.dashedBorder} ${
            hideBorder ? styles.noBorder : ""
          }`}
        ></div>
      </div>
    </section>
  );
}
