import React from "react";
import styles from "../../../styles/page.module.scss";

export default function ContactBanner() {
  return (
    <section className={styles.contactBanner} id="bannerTop">
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
        <div className={styles.contactUsButton}>Talk to Us</div>
      </div>
    </section>
  );
}
