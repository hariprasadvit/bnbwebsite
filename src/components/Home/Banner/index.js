import React from "react";
import styles from "../../../styles/page.module.scss";

export default function Banner({
  data = {},
  hideBorder = false,
  contactUs,
  whiteBG,
  showScroll = true,
  highlightFirst = false,
  headingMaxWidth,
  headingMarginBottom,
  descriptionMaxWidth,
}) {
  let { title, highlighted_title, sub_title, description, link } = data;
  return (
    <section
      className={`${styles.banner} ${whiteBG ? styles.whiteBG : ""}`}
      id="bannerTop"
    >
      <div className={styles.content}>
        <div>
          <h1
            style={{
              maxWidth: headingMaxWidth,
              marginBottom: headingMarginBottom,
            }}
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
          <div className={styles.descriptionContainerWithScroll}>
            <h2
              style={{ maxWidth: descriptionMaxWidth }}
              className={`${styles.subheading} ${
                highlightFirst ? styles.smallSubheading : ""
              }`}
            >
              {/* {bannerData.subheading} */}
              {sub_title || description}
            </h2>
            {showScroll && <div className={styles.scroll}>(Scroll)</div>}
          </div>
          {contactUs && (
            <div className={styles.bannerContactUsButton}>
              <a
                href={data?.link || data?.button?.link_path}
                className={styles.contactUsButton}
              >
                {data.link_text || data?.button?.button_text}
              </a>
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
