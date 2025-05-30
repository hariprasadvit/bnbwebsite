import React from "react";
import styles from "../../../styles/page.module.scss";

export default function Banner({
  data = {},
  hideBorder = false,
  contactUs,
  whiteBG,
  showScroll = true,
  highlightFirst = false,
}) {
  let { title, highlighted_title, sub_title, description } = data;
  return (
    <section
      className={`${styles.banner} ${whiteBG ? styles.whiteBG : ""}`}
      id="bannerTop"
    >
      <div className={styles.content}>
        <div>
          <h1
            className={`${styles.bannerHeading} ${
              highlightFirst ? styles.smallHeading : ""
            }`}
          >
            {highlightFirst ? (
              <>
                <span>{highlighted_title}</span> {title}
              </>
            ) : (
              <>
                {/* {bannerData.heading} <span>{bannerData.highlight}</span> */}
                {title} <span> {highlighted_title} </span>
              </>
            )}
          </h1>
          <h2
            className={`${styles.subheading} ${
              highlightFirst ? styles.smallSubheading : ""
            }`}
          >
            {/* {bannerData.subheading} */}
            {sub_title || description}
          </h2>
          {contactUs && (
            <div className={styles.bannerContactUsButton}>
              <div className={styles.contactUsButton}>
                {contactUs.button_text}
              </div>
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
