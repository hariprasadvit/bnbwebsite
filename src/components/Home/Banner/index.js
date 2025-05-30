import React from "react";
import styles from "../../../styles/page.module.scss";

export default function Banner({
  bannerData,
  data = {},
  hideBorder = false,
  contactUs,
  whiteBG,
}) {
  let { title, hightlighted_title, sub_title } = data;
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
                {/* {bannerData.heading} <span>{bannerData.highlight}</span> */}
                {title} <span> {hightlighted_title} </span>
              </>
            )}
          </h1>
          <h2
            className={`${styles.subheading} ${
              bannerData.highlightFirst ? styles.smallSubheading : ""
            }`}
          >
            {/* {bannerData.subheading} */}
            {sub_title}
          </h2>
          {contactUs && (
            <div className={styles.bannerContactUsButton}>
              <div className={styles.contactUsButton}>{contactUs}</div>
            </div>
          )}
        </div>
        {showScroll && <div className={styles.scroll}>(Scroll)</div>}
        <div
          className={`${styles.dashedBorder} ${
            hideBorder ? styles.noBorder : ""
          }`}
        ></div>
      </div>
    </section>
  );
}
