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
      title: "How we build MVP",
      description:
        "At Boolean and Beyond, we transform ideas into functional, market-ready Minimum Viable Products (MVPs) with precision and speed. Our approach balances rapid iteration with user-centric design, ensuring your product reaches the market efficiently while staying adaptable for future growth.",
      imageSrc: mvp,
      imageAlt: "How we build MVP",
      listItems: [
        "MVP Strategy & Roadmap",
        "Rapid Prototyping & UX Design",
        "Agile Development & Iteration",
        "Go-To-Market & Scaling Support",
      ],
      link: "#",
      isReverse: false,
      showScroll: true,
    },
    {
      title: "Enterprise Applications",
      description:
        "At Boolean and Beyond, we craft scalable, secure, and high-performance enterprise applications tailored to your business needs. Whether streamlining operations or integrating complex workflows, our solutions ensure efficiency, flexibility, and future-ready adaptability.",
      imageSrc: entApp,
      imageAlt: "Enterprise Applications",
      listItems: [
        "Custom Enterprise Software Development",
        "ERP & CRM Implementation",
        "Cloud & Microservices Architecture",
        "Enterprise AI & Automation",
      ],
      link: "#",
      isReverse: true,
      showScroll: false,
    },
    {
      title: "Knowledge graph",
      description:
        "At Boolean and Beyond, we build knowledge graphs that connect structured and unstructured data to uncover meaningful relationships, enabling advanced search, recommendation systems, and AI-driven insights.",
      imageSrc: kGraph,
      imageAlt: "Knowledge graph",
      listItems: [
        "Ontology Design & Data Modeling",
        "Enterprise Knowledge Management",
        "Graph Database Implementation",
        "AI-Driven Semantic Search",
      ],
      link: "#",
      isReverse: false,
      showScroll: false,
    },
    {
      title: "AI Agents",
      description:
        "Our AI-driven intelligent agents enhance automation, decision-making, and personalization across industries. At Boolean and Beyond, we design AI agents that integrate NLP, knowledge graphs, and machine learning to provide context-aware solutions.",
      imageSrc: AnimatedSVG,
      imageAlt: "AI Agents",
      listItems: [
        "Conversational AI & Chatbots",
        "Autonomous Decision-Making Agents",
        "Retrieval-Augmented Generation Pipelines",
        "Predictive & Prescriptive AI Models",
      ],
      link: "#",
      isReverse: true,
      showScroll: false,
      isGif: "true"
    },
  ];
  return (
    <>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`${styles.splitSection} ${index == 3 ? styles.lastSection : ""
            }`}
        >
          <div
            className={`${styles.splitSectionContainer} ${section.isReverse ? styles.rowReverseImportant : ""
              } `}
          >
            <div className={styles.splitSectionLeft}>
              {
                section?.isGif ? <AnimatedSVG /> :

                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    layout="intrinsic"
                    width={315}
                    height={360}
                    sizes="(max-width: 768px) 100vw, 315px"
                  />
              }
            </div>
            <div className={styles.splitSectionRight}>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
              <ul>
                {section.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <Link href={section.link} className="knowMoreLink">
                Know More
              </Link>
            </div>
          </div>
          {index != 3 ? <div className={styles.dashedBorder}></div> : ""}
        </section>
      ))}
    </>
  );
}
