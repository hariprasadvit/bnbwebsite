/** @format */

"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";

function Accordion({ title, imageOne, imageTwo, heading, desc, outLineText }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.successCard}>
      <div className={styles.successCardHeading} onClick={toggleAccordion}>
        <h4>{title}</h4>

        <div className={`${styles.icon} ${isOpen ? styles.open : ""}`}>
          <span>+</span>
        </div>
      </div>
      {isOpen && (
        <>
          <div className={styles.successCardContent}>
            <div className={styles.successCardBanner}>
              {/* <img src={imageOne} alt="goal" className={styles.goalsImage} /> */}

              <h4>{outLineText}</h4>
              {/* <img src={imageTwo} alt="goal" className={styles.goalsIcon} /> */}
            </div>
            <div className={styles.successCardContentWrapper}>
              <h4>{heading}</h4>
              <p>{desc}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default function SuccessCard() {
  return (
    <section className={styles.success}>
      <div className={styles.successTitle}>
        <h3>
          Design For <strong>Success</strong>
        </h3>
      </div>

      <div className={styles.successWrapper}>
        <Accordion
          title="Design Growth through Leadership"
          outLineText="Growth"
          imageTwo="/2nd.gif"
          heading="Team empowerment for innovation and success"
          desc="At Cartoon Mango, we believe that strong leadership is essential to creating a culture of growth and innovation. We are committed to fostering a work environment that encourages creativity, risk-taking, and continuous learning, allowing us to deliver exceptional solutions that help our clients achieve their goals."
        />
        <Accordion
          title="Design Process with Drive"
          outLineText="Process"
          imageTwo="/3rd.gif"
          heading="Streamlining our process to deliver exceptional results"
          desc="Our rigorous design process ensures that each project is delivered on time and within budget, while still maintaining flexibility to adapt to our clients' unique needs. We are committed to continuously improving our process, using feedback and data to drive innovation and deliver exceptional results."
        />
        <Accordion
          title="Design Teams for Collaboration"
          outLineText="Teams"
          imageTwo="/4th.gif"
          heading="Bringing diverse perspectives for greater success"
          desc="Collaboration is at the heart of what we do at Cartoon Mango. We believe that diverse perspectives and cross-functional teams are essential to creating innovative solutions that meet the unique needs of our clients. Our team members work closely together, sharing ideas and expertise to create solutions that drive growth and success."
        />
        <Accordion
          title="Design Experiences with Empathy"
          outLineText="Experiences"
          imageTwo="/5th.gif"
          heading="User-centric solutions for exceptional experiences"
          desc="We believe that exceptional user experiences are the foundation of business success. That's why we approach each project with empathy, putting ourselves in the shoes of our clients and their end-users to create solutions that are not only functional and effective but also delightful and engaging."
        />
        <Accordion
          title="Design Technology for Innovation"
          outLineText="Technology"
          imageTwo="/6th.gif"
          heading="Driving innovation with tech advancements"
          desc="We are passionate about leveraging the latest technology to create innovative solutions for our clients. Our team members are skilled in a range of cutting-edge technologies, including AI and ML, cloud computing, AR/VR, and big data analytics, which allows us to create customized solutions that meet the unique needs of our clients and help them stay ahead of the competition."
        />
        <Accordion
          title="Design Products with Passion"
          outLineText="Products"
          imageTwo="/7th.gif"
          heading="Passion and expertise for exceptional products"
          desc="Our team members are passionate about what they do, and it shows in the exceptional products we create. We take a product-centric approach to our solutions, focusing on delivering exceptional products that meet the needs of our clients and their end-users. We work closely with our clients to understand their goals and their target audience, and use that information to craft a product that not only meets their needs but also delights their users."
        />

        {/* <div className={styles.successCard}>
                  <div className={styles.successCardHeading}>
                    <h4>Design Goals with Ambition.</h4>

                    <div className={styles.plusAndMinus}>+</div>
                  </div>

                  <div className={styles.successCardContent}>
                    <div className={styles.successCardBanner}>
                      <img
                        src="/goals.png"
                        alt="goal"
                        className={styles.goalsImage}
                      />
                      <img
                        src="/goals-icon.png"
                        alt="goal"
                        className={styles.goalsIcon}
                      />
                    </div>
                    <div className={styles.successCardContentWrapper}>
                      <h4>Talk Something About Passion Goal</h4>
                      <p>
                        Our team of real estate app developers not just have an
                        idea about the most conversion friendly real estate app
                        design but also are skilled in giving innovative,
                        path-breaking ideas which gives you competitive
                        advantage. We design the app’s prototype and present you
                        with the working models at the very initial stages.
                        Following the wireframe approval, we code and test your
                        app until it is flawless.
                      </p>
                    </div>
                  </div>
                </div> */}
      </div>
    </section>
  );
}
