import React from "react";

import Link from "next/link";
import Image from "next/image";
import styles from "./SectionList.module.scss";
import AnimatedSVG from "./animatedgifs";

export default function SectionList({ data = {} }) {
  let { common_section_list } = data;

  return (
    <>
      {common_section_list.map((section, index) => {
        let _img = "";
        if (section.image_name === "animated-two") {
          _img = "/enterprise.png";
        } else if (section.image_name === "animated-three") {
          _img = "/mvp.png";
        } else if (section.image_name === "kGraph") {
          _img = "/Home/kGraph.svg";
        } else if (section.image_name === "enterprise-intelligence") {
          _img = "/Home/kGraph.svg";
        } else if (section.image_name === "animated") {
          _img = "/stack.png";
        }
        return (
          <section
            key={index}
            className={`${styles.splitSection} ${
              index == 3 ? styles.lastSection : ""
            }`}
          >
            {section.image_name === "animated-three" ? (
              <div className={styles.splitSectionContainer}>
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
                      className=""
                    />
                  )}
                </div>
                <div className={styles.splitSectionRight}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className={styles.mvpCardsGrid}>
                    <div className={styles.mvpCard}>
                      <h3>Rapid MVP Development</h3>
                      <p>From concept to working MVP in weeks, not months. Our AI-assisted approach accelerates every phase of development.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>2 Features Per Week</h3>
                      <p>Our AI-powered workflow enables us to consistently ship 2 production-ready features every week.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>AI + Human Perfection</h3>
                      <p>AI handles the heavy lifting while our experts ensure code quality, security, and scalability.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.image_name === "animated-two" ? (
              <div className={styles.splitSectionContainer}>
                <div className={styles.splitSectionLeft}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className={styles.mvpCardsGrid}>
                    <div className={styles.mvpCard}>
                      <h3>Enterprise Architecture</h3>
                      <p>Scalable, secure systems designed for enterprise-grade performance and reliability.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>Custom Integrations</h3>
                      <p>Seamlessly connect your existing systems with modern APIs and middleware solutions.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>Business Process Automation</h3>
                      <p>Streamline operations with intelligent automation that reduces manual work and increases efficiency.</p>
                    </div>
                  </div>
                </div>
                <div className={styles.splitSectionRight}>
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
                      className=""
                    />
                  )}
                </div>
              </div>
            ) : section.image_name === "animated" ? (
              <div className={styles.splitSectionContainer}>
                <div className={styles.splitSectionLeft}>
                  <Image
                    src={_img}
                    alt={section.imageAlt || section.title}
                    layout="intrinsic"
                    width={315}
                    height={360}
                    sizes="(max-width: 768px) 100vw, 315px"
                    className=""
                  />
                </div>
                <div className={styles.splitSectionRight}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className={styles.mvpCardsGrid}>
                    <div className={styles.mvpCard}>
                      <h3>Knowledge Graphs</h3>
                      <p>Connect disparate data sources to reveal hidden relationships and create intelligent data ecosystems.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>AI-Driven Insights</h3>
                      <p>Transform raw data into actionable intelligence with advanced machine learning and analytics.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>Smart Search & Discovery</h3>
                      <p>Enable intelligent search across structured and unstructured data with semantic understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.image_name === "kGraph" ? (
              <div className={styles.splitSectionContainer}>
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
                      className=""
                    />
                  )}
                </div>
                <div className={styles.splitSectionRight}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className={styles.mvpCardsGrid}>
                    <div className={styles.mvpCard}>
                      <h3>Knowledge Graphs</h3>
                      <p>Connect disparate data sources to reveal hidden relationships and create intelligent data ecosystems.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>AI-Driven Insights</h3>
                      <p>Transform raw data into actionable intelligence with advanced machine learning and analytics.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>Smart Search & Discovery</h3>
                      <p>Enable intelligent search across structured and unstructured data with semantic understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : section.image_name === "enterprise-intelligence" ? (
              <div className={styles.splitSectionContainer}>
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
                      className=""
                    />
                  )}
                </div>
                <div className={styles.splitSectionRight}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <div className={styles.mvpCardsGrid}>
                    <div className={styles.mvpCard}>
                      <h3>Knowledge Graphs</h3>
                      <p>Connect disparate data sources to reveal hidden relationships and create intelligent data ecosystems.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>AI-Driven Insights</h3>
                      <p>Transform raw data into actionable intelligence with advanced machine learning and analytics.</p>
                    </div>
                    <div className={styles.mvpCard}>
                      <h3>Smart Search & Discovery</h3>
                      <p>Enable intelligent search across structured and unstructured data with semantic understanding.</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
                      className=""
                    />
                  )}
                </div>
                <div className={styles.splitSectionRight}>
                  <h2>{section.title}</h2>
                  <p>{section.description}</p>
                  <ul>
                    {section.bulletins.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          className="knowMoreLink"
                          href={"services/" + item?.service_detail?.slug}
                        >
                          {" "}
                          {item.content}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>
        );
      })}
    </>
  );
}
