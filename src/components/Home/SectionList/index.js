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
        "At Boolean and Beyond, we specialize in MVP development services that help you transform your ideas into functional, market-ready products with speed and precision. Our agile, user-centric approach combines rapid prototyping, iterative development, and scalable architecture to ensure your Minimum Viable Product reaches the market quickly while staying flexible for future enhancements.",
      imageSrc: mvp,
      imageAlt: "How we build MVP",
      listItems: [
        "Custom MVPs for B2B SaaS and B2C Products",
        "Scalable Backend and User-Centric Frontends",
        "AI-Ready E-commerce and Marketplace MVPs",
        "Rapid Prototyping and Feedback-Driven MVP Validation",
      ],
      link: "#",
      isReverse: false,
      showScroll: true,
    },
    {
      title: "Business Software, Tailored",
      description:
        "At Boolean and Beyond, we build scalable, secure, and high-performance business management applications tailored to your unique workflows. From streamlining operations to integrating critical business processes, our custom software ensures your teams work smarter, faster, and with greater flexibility.",
      imageSrc: entApp,
      imageAlt: "Enterprise Applications",
      listItems: [
        "ERP, CRM, inventory, and invoicing systems",
        "Web and desktop applications for operational management",
        "Seamless integrations with your existing business tools",
        "Business Reports & Dashboards",
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
        "At Boolean and Beyond, we build advanced enterprise intelligence systems that connect and enrich your structured and unstructured data, revealing meaningful relationships and unlocking powerful AI-driven insights. From knowledge graphs to recommendation engines, our solutions deliver smarter search, enhanced decision-making, and seamless data orchestration.",
      imageSrc: AnimatedSVG,
      imageAlt: "AI Agents",
      listItems: [
        "AI Agents and Knowledge Graphs",
        "Retrieval-Augmented Generation (RAG) Pipelines",
        "Workflow orchestration with CRM",
        "Big Data Processing and Analytics",
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
