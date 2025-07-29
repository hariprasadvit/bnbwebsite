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
  whiteBg,
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

  const selectOptions = card?.map((item) => ({
    id: item.id,
    value: item.id,
    label: item.title,
  }));

  const selectedOption = selectOptions?.find(
    (option) => option.id === activeMenu
  );

  return (
    <section
      className={`${styles.dataDriven} ${whiteBg ? styles.whiteBg : ""}`}
    >
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
                    options={selectOptions}
                    value={selectedOption}
                    onChange={(selected) => setActiveMenu(selected.id)}
                    getOptionValue={(option) => option.id}
                    styles={{
                      option: (base, state) => ({
                        ...base,
                        backgroundColor:
                          state.isSelected || state.isFocused ? "#000" : "#fff",
                        color:
                          state.isSelected || state.isFocused ? "#fff" : "#000",
                        cursor: "pointer",
                      }),
                      container: (base) => ({
                        ...base,
                        width: "100%",
                      }),
                      control: (base) => ({
                        ...base,
                        borderColor: "#000",
                        boxShadow: "none",
                        "&:hover": {
                          borderColor: "#000",
                        },
                      }),
                      singleValue: (base) => ({
                        ...base,
                        color: "#000",
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
                  key={_item.id}
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
