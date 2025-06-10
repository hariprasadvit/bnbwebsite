import React from "react";
import mvp from "/public/Home/mvp.svg";
import entApp from "/public/Home/entApp.svg";
import kGraph from "/public/Home/kGraph.svg";
import AiAgent from "/public/Home/AiAgent.svg";
import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/page.module.scss";
import AnimatedSVG from "./animatedgifs";

export default function SectionList() {
  const sections = [
    {
      title: "MVP and Beyond",
      description:
        "At Boolean and Beyond, we transform ideas into functional, market-ready Minimum Viable Products (MVPs) with precision and speed. Our approach balances rapid iteration with user-centric design, ensuring your product reaches the market efficiently while staying adaptable for future growth.",
      imageSrc: mvp,
      imageAlt: "How we build MVP",
      listItems: [
        "SaaS products, B2C platforms",
        "Scalable backend, smart frontend",
        "Marketplaces & AI Ready Stack",
        "Rapid iterations with tight feedback loops",
      ],
      link: "#",
      isReverse: false,
      showScroll: true,
    },
    {
      title: "Business Software, Tailored",
      description:
        "At Boolean and Beyond, we craft scalable, secure, and high-performance enterprise applications tailored to your business needs. Whether streamlining operations or integrating complex workflows, our solutions ensure efficiency, flexibility, and future-ready adaptability.",
      imageSrc: entApp,
      imageAlt: "Enterprise Applications",
      listItems: [
        "ERP, CRM, inventory, invoicing",
        "Web or desktop apps for Operations",
        "Integrations with your tools",
        "Enterprise AI & Automation",
      ],
      link: "#",
      isReverse: true,
      showScroll: false,
    },
    // {
    //   title: "Knowledge graph",
    //   description:
    //     "At Boolean and Beyond, we build knowledge graphs that connect structured and unstructured data to uncover meaningful relationships, enabling advanced search, recommendation systems, and AI-driven insights.",
    //   imageSrc: kGraph,
    //   imageAlt: "Knowledge graph",
    //   listItems: [
    //     "Ontology Design & Data Modeling",
    //     "Enterprise Knowledge Management",
    //     "Graph Database Implementation",
    //     "AI-Driven Semantic Search",
    //   ],
    //   link: "#",
    //   isReverse: false,
    //   showScroll: false,
    // },
    {
      title: "Enterprise Intelligence Stack",
      description:
        "At Boolean and Beyond, we build knowledge graphs that connect structured and unstructured data to uncover meaningful relationships, enabling advanced search, recommendation systems, and AI-driven insights.",
      imageSrc: AnimatedSVG,
      imageAlt: "AI Agents",
      listItems: [
        "Scalable, secure architecture",
        "AI Agents, Knowledge Graphs, RAG pipelines",
        "Workflow orchestration with CRM",
        "Big Data processing and analytics",
      ],
      // link: "#",
      isReverse: false,
      showScroll: false,
      isGif: "true",
    },
  ];
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`${styles.splitSection} ${
            index == 3 ? styles.lastSection : ""
          }`}
        >
          <div
            className={`${styles.splitSectionContainer} ${
              section.isReverse ? styles.rowReverseImportant : ""
            } `}
          >
            <div className={styles.splitSectionLeft}>
              {section?.isGif ? (
                <AnimatedSVG />
              ) : (
                <Image
                  src={section.imageSrc}
                  alt={section.imageAlt}
                  layout="intrinsic"
                  width={267}
                  height={306}
                  sizes="(max-width: 768px) 100vw, 315px"
                />
              )}
            </div>
            <div className={styles.splitSectionRight}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <ul>
                {section.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {section.link && (
                <Link href={section.link} className="knowMoreLink">
                  Know More
                </Link>
              )}
            </div>
          </div>
          <div
            className={`${styles.dashedBorder} ${
              index === sections.length - 1 ? styles.noBorder : ""
            }`}
          ></div>
        </section>
      ))}
    </>
  );
}
