/** @format */

import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export default function BannerCaseStudy() {
  return (
    <>
      <section className={styles.careersTitleBanner}>
        <div className={styles.careersTitleContent}>
          <div className={styles.careersTopTitle}>
            <span
              style={{
                textTransform: "uppercase",
              }}
            >
              Disruptive Tech Leaders
            </span>
            <h2>Crafting Tech-Driven Solutions with Exceptional Design.</h2>
          </div>
          <p>
            Through exceptional design and tech expertise, Boolean and Beyond
            creates tailored solutions that help businesses achieve their goals
            and stand out in the digital landscape.
          </p>
          <div className={styles.btns}>
            <a href="/services" type="button">
              Explore Now
            </a>
            <a href="/careers">To join our team</a>
          </div>
        </div>
      </section>
      <section className={styles.designWrapper}>
        <div className={styles.speaker}>
          {/* <img src="/speaker.png" alt="speaker" /> */}
        </div>
        <p>
          Boolean and Beyond is a <strong>tech-driven company</strong> with a
          <strong> passion for exceptional design</strong>, that offers
          customized solutions to help businesses succeed. We help our{" "}
          <strong>clients grow their business</strong> by understanding their
          needs and utilize the appropriate methodology and technology to
          deliver the best solutions through{" "}
          <strong>design, development, and activation strategy</strong>. Whether
          it's{" "}
          <strong>
            improving customer satisfaction, streamlining operations, or driving
            revenue growth
          </strong>
          , we are committed to
          <strong> delivering exceptional</strong> results that help our clients
          achieve their goals.
        </p>
        <div className={styles.circle}>
          {/* <img src="/circle.png" alt="circle" /> */}
        </div>
      </section>
    </>
  );
}
