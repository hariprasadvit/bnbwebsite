/** @format */

import React from "react";
import styles from "./style.module.scss";

export default function CoreContent() {
  return (
    <>
      <section className={styles.core}>
        <div className={styles.coreTitle}>
          {/* <h3>OUR CORE PILLARS</h3> */}
          <h2>
            Five Core Pillars of <br /> Boolean and Beyond
          </h2>
        </div>
        <div className={styles.coreWrapper}>
          <div className={styles.coreCard}>
            <div className={styles.coreCardTitle}>
              <h3>01</h3>
              <h2>People</h2>
            </div>
            <div className={styles.coreCardContent}>
              <p>
                Our team is made up of highly skilled and passionate individuals
                who are committed to delivering exceptional results. We believe
                that people are our most valuable asset, and we invest in our
                team members by providing opportunities for growth and
                development.
              </p>
            </div>
          </div>

          <div className={styles.coreCard}>
            <div className={styles.coreCardTitle}>
              <h3>02</h3>
              <h2>Process</h2>
            </div>
            <div className={styles.coreCardContent}>
              <p>
                At Cartoon Mango, we believe that a well-defined process is
                essential to delivering consistent, high-quality results. We
                have developed a rigorous methodology that ensures each project
                is delivered on time and within budget, while still maintaining
                flexibility to adapt to our clients' unique needs.
              </p>
            </div>
          </div>

          <div className={styles.coreCard}>
            <div className={styles.coreCardTitle}>
              <h3>03</h3>
              <h2>Technology</h2>
            </div>
            <div className={styles.coreCardContent}>
              <p>
                We are committed to staying at the forefront of technology and
                leveraging the latest advancements to deliver innovative
                solutions for our clients. Our team is skilled in a range of
                cutting-edge technologies, including AI and ML, cloud computing,
                AR/VR, and big data analytics, which allows us to create
                customized solutions that meet the unique needs of our clients.
              </p>
            </div>
          </div>

          <div className={styles.coreCard}>
            <div className={styles.coreCardTitle}>
              <h3>04</h3>
              <h2>Product</h2>
            </div>
            <div className={styles.coreCardContent}>
              <p>
                We take a product-centric approach to our solutions, focusing on
                delivering exceptional products that meet the needs of our
                clients and their end-users. We work closely with our clients to
                understand their goals and their target audience, and use that
                information to craft a product that not only meets their needs
                but also delights their users.
              </p>
            </div>
          </div>

          <div className={styles.coreCard}>
            <div className={styles.coreCardTitle}>
              <h3>05</h3>
              <h2>Growth</h2>
            </div>
            <div className={styles.coreCardContent}>
              <p>
                At Cartoon Mango, we are committed to helping our clients
                achieve their goals and drive business growth. We measure our
                success by the success of our clients, and we are dedicated to
                providing solutions that deliver exceptional results and help
                our clients stand out in a crowded marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
