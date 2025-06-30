"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/page.module.scss";
import dataDrivenImg from "../../../../public/Home/dataDriven.svg";
import Image from "next/image";
import Select from "react-select";

export default function DataDriven({
  showDataDrivenImg = true,
  titleMaxWidth,
  titleMarginBottom,
}) {
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
    { value: "01", label: "Banking and Fintech" },
    { value: "02", label: "Ecommerce" },
    { value: "03", label: "News and Media" },
    { value: "04", label: "E-Learning & Education" },
    { value: "05", label: "Healthcare" },
  ];

  return (
    <section className={styles.dataDriven}>
      <div className={styles.container}>
        <div
          className={styles.sectionTop}
          style={
            mobile
              ? {}
              : { maxWidth: titleMaxWidth, marginBottom: titleMarginBottom }
          }
        >
          <h2>
            Serving Clients Across Industries with Smart, Scalable Digital
            Solutions
          </h2>
        </div>
        <div className={styles.sectionBottom}>
          <div
            className={`${styles.sectionBottomContainer} ${
              !showDataDrivenImg ? styles.noImage : ""
            }`}
          >
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
              {activeMenu === "01" && (
                <div className={activeMenu === "01" ? styles.showDesc : null}>
                  Modernize legacy systems, automate compliance, and deliver
                  seamless digital banking with secure enterprise applications,
                  robust MVP builds, and AI agents for fraud detection and
                  customer service.
                </div>
              )}
              {activeMenu === "02" && (
                <div className={activeMenu === "02" ? styles.showDesc : null}>
                  Accelerate your go-to-market with scalable ecommerce MVPs,
                  intelligent enterprise platforms, and AI-powered agents that
                  personalize shopping, manage inventory, and enhance customer
                  engagement.
                </div>
              )}
              {activeMenu === "03" && (
                <div className={activeMenu === "03" ? styles.showDesc : null}>
                  Transform content operations with enterprise-grade publishing
                  systems, rapid MVP experiments for new formats, and AI agents
                  that power recommendations, editorial workflows, and audience
                  personalization.
                </div>
              )}
              {activeMenu === "04" && (
                <div className={activeMenu === "04" ? styles.showDesc : null}>
                  Build engaging, scalable education platforms through tailored
                  enterprise applications, MVP prototypes for interactive tools,
                  and AI-driven agents that personalize learning experiences and
                  student support.
                </div>
              )}
              {activeMenu === "05" && (
                <div className={activeMenu === "05" ? styles.showDesc : null}>
                  Enable secure, efficient healthcare operations with
                  enterprise-grade software, MVPs for telemedicine and patient
                  apps, and intelligent agents supporting decision-making,
                  triage, and workflow automation.
                </div>
              )}
            </div>
            {showDataDrivenImg && (
              <div className={styles.imgWrap}>
                <Image src={dataDrivenImg} alt="Data Driven" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
