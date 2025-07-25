import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/page.module.scss";
import AnimatedSVG from "./animatedgifs";

export default function SectionList({ data = {} }) {
  let { common_section_list } = data;

  return (
    <>
      {common_section_list.map((section, index) => {
        let _img = "";
        if (section.image_name === "animated-two") {
          _img = "/Home/animated-two.svg";
        } else if (section.image_name === "animated-three") {
          _img = "/Home/animated-three.svg";
        } else if (section.image_name === "kGraph") {
          _img = "/Home/kGraph.svg";
        } else if (section.image_name === "animated") {
          _img = "/Home/AiAgent.svg";
        }
        return (
          <section
            key={index}
            className={`${styles.splitSection} ${
              index == 3 ? styles.lastSection : ""
            }`}
          >
            <div
              className={`${styles.splitSectionContainer} ${
                section.is_reverse ? styles.rowReverseImportant : ""
              } `}
            >
              <div className={styles.splitSectionLeft}>
                {section?.is_gif ? (
                  <AnimatedSVG />
                ) : (
                  <Image
                    src={_img}
                    alt={section.imageAlt || section.title}
                    layout="intrinsic"
                    width={315}
                    height={360}
                    sizes="(max-width: 768px) 100vw, 315px"
                  />
                )}
              </div>
              <div className={styles.splitSectionRight}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <ul>
                  {section.bulletins.map((item, idx) => (
                    <li key={idx}>
                      <Link href={"services/" + item?.service_detail?.slug}>
                        {" "}
                        {item.content}
                      </Link>
                    </li>
                  ))}
                </ul>
                {/* <Link href={section.link.link_path} className="knowMoreLink">
                  {section.link.button_text}
                </Link> */}
              </div>
            </div>
            <div
              className={`${styles.dashedBorder} ${
                index === common_section_list.length - 1 ? styles.noBorder : ""
              }`}
            ></div>
          </section>
        );
      })}
    </>
  );
}
