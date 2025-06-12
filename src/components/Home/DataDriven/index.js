"use client";

import React, { useEffect, useState } from "react";
import styles from "../../../styles/page.module.scss";
import dataDrivenImg from "../../../../public/Home/dataDriven.svg";
import Image from "next/image";
import Select from "react-select";
import { formatIndex } from "@/lib/utils";

export default function DataDriven({
  data = {},
  showDataDrivenImg = true,
  titleMaxWidth,
  titleMarginBottom,
}) {
  let { title = "Make data driven decisions with real - Time insights", card } =
    data;
  const isMobileView = () => window.innerWidth <= 978;

  const [activeMenu, setActiveMenu] = useState("");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(isMobileView());
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Format for react-select

  useEffect(() => {
    if (card?.length) {
      setActiveMenu(card[0].id);
    }
  }, [card]);

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
          <h2>{title}</h2>
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
                    options={card?.map((_item) => {
                      return {
                        ..._item,
                        label: _item.title,
                      };
                    })}
                    // defaultValue={card.find((o) => o.id === activeMenu)}
                    onChange={(selected) => setActiveMenu(selected.id)}
                    styles={{
                      container: (base) => ({
                        ...base,
                        width: "100%",
                      }),
                    }}
                  />
                </div>
              ) : (
                card?.map((item, index) => (
                  <div
                    key={item.id}
                    className={
                      activeMenu === item.id
                        ? styles.showPoints + " " + styles.pointList
                        : styles.pointList
                    }
                    onMouseEnter={() => setActiveMenu(item.id)}
                    onClick={() => setActiveMenu(item.id)}
                  >
                    <span>{formatIndex(index)}</span>
                    {/* <strong>{item.label.replace(`${item.value} `, "")}</strong> */}
                    <strong>{item.title}</strong>
                  </div>
                ))
              )}
            </div>
            <div className={styles.desc}>
              {card?.map((_item, index) => (
                <div
                  className={activeMenu === _item.id ? styles.showDesc : null}
                >
                  {_item.description}
                </div>
              ))}
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
