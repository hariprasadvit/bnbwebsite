"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/page.module.scss";
import dataDrivenImg from "../../../../public/Home/dataDriven.svg";
import Image from "next/image";
import Select from "react-select";

export default function DataDriven() {
  const isMobileView = () => window.innerWidth <= 978;

  const [activeMenu, setActiveMenu] = useState("01");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(isMobileView());
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Format for react-select
  const options = [
    { value: "01", label: "01 Banking and Fintech" },
    { value: "02", label: "02 Ecommerce" },
    { value: "03", label: "03 News and Media" },
    { value: "04", label: "04 E-Learning & Education" },
    { value: "05", label: "05 E-Learning & Education" },
  ];

  return (
    <section className={styles.dataDriven}>
      <div className={styles.container}>
        <div className={styles.sectionTop}>
          <h2>Make data driven decisions with real - Time insights</h2>
        </div>
        <div className={styles.sectionBottom}>
          <div className={styles.sectionBottomContainer}>
            <div className={styles.points}>
              {mobile ? (
                <div className={styles.mobilePoints}>
                  <Select
                    options={options}
                    defaultValue={options.find((o) => o.value === activeMenu)}
                    onChange={(selected) => setActiveMenu(selected.value)}
                    styles={{
                      container: (base) => ({
                        ...base,
                        width: "100%",
                      }),
                    }}
                  />
                </div>
              ) : (
                options.map((item) => (
                  <div
                    key={item.value}
                    className={
                      activeMenu === item.value
                        ? styles.showPoints + " " + styles.pointList
                        : styles.pointList
                    }
                    onMouseEnter={() => setActiveMenu(item.value)}
                    onClick={() => setActiveMenu(item.value)}
                  >
                    <span>{item.value}</span>
                    <strong>{item.label.replace(`${item.value} `, "")}</strong>
                  </div>
                ))
              )}
            </div>
            <div className={styles.desc}>
              <div className={activeMenu === "01" ? styles.showDesc : null}>
                Our AI-driven intelligent agents enhance automation,
                decision-making, and personalization across industries. At
                Boolean and Beyond, we design AI agents that integrate NLP,
                knowledge graphs, and machine learning to provide context-aware
                solutions.
              </div>
              <div className={activeMenu === "02" ? styles.showDesc : null}>
                Personalization across industries. At Boolean and Beyond, we
                design AI agents that integrate NLP, knowledge graphs, and
                machine learning to provide context-aware solutions.
              </div>
              <div className={activeMenu === "03" ? styles.showDesc : null}>
                AI agents that integrate NLP, knowledge graphs, and machine
                learning to provide context-aware solutions.
              </div>
              <div className={activeMenu === "04" ? styles.showDesc : null}>
                Intelligent that integrate NLP, knowledge graphs, and machine
                learning to provide context-aware solutions.
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
