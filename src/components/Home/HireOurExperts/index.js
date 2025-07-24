import React from "react";
import styles from "../../../styles/page.module.scss";
import Link from "next/link";

export default function HireOurExperts() {
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
        <Link className={styles.contactUsButton} href="/contact-us">
          Talk to Us
        </Link>
      </div>
    </section>
  );
}
