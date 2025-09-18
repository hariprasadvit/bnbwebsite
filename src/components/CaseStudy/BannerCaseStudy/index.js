/** @format */

import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function BannerCaseStudy() {
  return (
    <section className={styles.bannerCaseStudy}>
      <div className={styles.content}>
        <div>
          <h1>
            <span> FROM ZERO TO LAUNCH— </span> WITHOUT WASTING MONTHS.
          </h1>

          <p>
            At Boolean and Beyond, we offer a range of tech-driven solutions to
            help businesses achieve their goals.We don’t just build MVPs, we
            build what your users will love—and your investors will notice.
          </p>
          <Link className={styles.contactUsButton} href="/contact-us">
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
