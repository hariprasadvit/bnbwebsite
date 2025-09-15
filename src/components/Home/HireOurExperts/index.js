import React from "react";
import styles from "../../../styles/page.module.scss";

export default function HireOurExperts() {
  return (
    <section className={styles.contactBanner} id="bannerTop">
      <div className={styles.gradientLayer} aria-hidden="true">
        <span className={styles.blob} />
        <span className={styles.blob} />
        <span className={styles.sparkle} />
      </div>

      <div className={`${styles.contactBannerContent}`}>
        <div className={styles.contactBannerTitle}>Hire Our Experts</div>
        <div className={styles.contactBannerDescription}>
          <p>Need hands-on talent to speed up your roadmap?</p>
          <p>
            Embed our developers, designers, and AI engineers into your team. We
            bring deep expertise in modern stacks, so you can ship faster,
            without the hiring overhead.
          </p>
        </div>

        <button className={styles.contactUsButton} aria-label="Talk to us">
          <span className={styles.contactButtonInner}>
            Talk to Us
            <span className={styles.buttonIcon} aria-hidden>
              ➜
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}
