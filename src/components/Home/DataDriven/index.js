"use client";

import React, { useState } from "react";
import styles from "../../../styles/page.module.scss";
import dataDrivenImg from "../../../../public/Home/dataDriven.svg";
import Image from "next/image";
export default function DataDriven() {
  const [activeMenu, setActiveMenu] = useState("01");
  return (
    <section className={styles.dataDriven}>
      <div className={styles.container}>
        <div className={styles.sectionTop}>
          <h2>Make data driven decisions with real - Time insights</h2>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.sectionBottomContainer}>
            <div className={styles.points}>
              <div
                className={activeMenu === "01" ? styles.showPoints : null}
                onMouseEnter={() => setActiveMenu("01")}
                onClick={() => setActiveMenu("01")}
              >
                <span>01</span>
                <strong>Banking and Fintech</strong>
              </div>
              <div
                className={activeMenu === "02" ? styles.showPoints : null}
                onMouseEnter={() => setActiveMenu("02")}
                onClick={() => setActiveMenu("02")}
              >
                <span>02</span>
                <strong>Ecommerce</strong>
              </div>
              <div
                className={activeMenu === "03" ? styles.showPoints : null}
                onMouseEnter={() => setActiveMenu("03")}
                onClick={() => setActiveMenu("03")}
              >
                <span>03</span>
                <strong>News and Media</strong>
              </div>
              <div
                className={activeMenu === "04" ? styles.showPoints : null}
                onMouseEnter={() => setActiveMenu("04")}
                onClick={() => setActiveMenu("04")}
              >
                <span>04</span>
                <strong>E-Learning & Education</strong>
              </div>
              <div
                className={activeMenu === "05" ? styles.showPoints : null}
                onMouseEnter={() => setActiveMenu("05")}
                onClick={() => setActiveMenu("05")}
              >
                <span>05</span>
                <strong>E-Learning & Education</strong>
              </div>
            </div>
            <div className={styles.desc}>
              <div className={activeMenu === "01" ? styles.showDesc : null}>
                Our AI-driven intelligent agents enhance automation,
                decision-making, and personalization across industries. At
                Boolean and Beyond, we design AI agents that integrate NLP,
                knowledge graphs, and machine learning t o provide context-aware
                solutions.
              </div>
              <div className={activeMenu === "02" ? styles.showDesc : null}>
                Personalization across industries. At Boolean and Beyond, we
                design AI agents that integrate NLP, knowledge graphs, and
                machine learning t o provide context-aware solutions.
              </div>
              <div className={activeMenu === "03" ? styles.showDesc : null}>
                AI agents that integrate NLP, knowledge graphs, and machine
                learning t o provide context-aware solutions.
              </div>
              <div className={activeMenu === "04" ? styles.showDesc : null}>
                Intelligent that integrate NLP, knowledge graphs, and machine
                learning t o provide context-aware solutions.
              </div>
              <div className={activeMenu === "05" ? styles.showDesc : null}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab
                deserunt illo iure impedit similique fugiat laborum suscipit est
                perferendis totam debitis dolorem numquam nisi architecto, cum
                eos placeat quam ipsam?
              </div>
            </div>
            <div className={styles.imgWrap}>
              <Image src={dataDrivenImg} alt="Data Driven" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
