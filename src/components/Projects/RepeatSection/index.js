import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function RepeatSection({ data = [] }) {
  const sections = [
    {
      id: "01",
      title: "How we build MVP",
      description:
        "At Boolean and Beyond, we transform ideas into functional, market-ready Minimum Viable Products (MVPs) with precision and speed. Our approach balances rapid iteration with user-centric design, ensuring your product reaches the market efficiently while staying adaptable for future growth.",
      points: [
        "MVP Strategy & Roadmap",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
      ],
    },
    {
      id: "02",
      title: "How we build MVP",
      description:
        "At Boolean and Beyond, we transform ideas into functional, market-ready Minimum Viable Products (MVPs) with precision and speed. Our approach balances rapid iteration with user-centric design, ensuring your product reaches the market efficiently while staying adaptable for future growth.",
      points: [
        "MVP Strategy & Roadmap",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
      ],
    },
    {
      id: "03",
      title: "How we build MVP",
      description:
        "At Boolean and Beyond, we transform ideas into functional, market-ready Minimum Viable Products (MVPs) with precision and speed. Our approach balances rapid iteration with user-centric design, ensuring your product reaches the market efficiently while staying adaptable for future growth.",
      points: [
        "MVP Strategy & Roadmap",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
      ],
    },
    {
      id: "04",
      title: "How we build MVP",
      description:
        "At Boolean and Beyond, we transform ideas into functional, market-ready Minimum Viable Products (MVPs) with precision and speed. Our approach balances rapid iteration with user-centric design, ensuring your product reaches the market efficiently while staying adaptable for future growth.",
      points: [
        "MVP Strategy & Roadmap",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
        "Rapid Prototyping & UX Design",
        "Go-To-Market & Scaling Support",
        "Agile Development & Iteration",
      ],
    },
  ];
  return (
    <section className={styles.repeatSection}>
      <div className={styles.container}>
        <h2>
          <span>{data?.hightlighted_title}</span>
          {data?.title}
        </h2>
        {data?.listing_card?.map((section, index) => (
          <div key={index} className={styles.contentWrapper}>
            <div className={styles.topSection}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </div>
            <Link href={`/services/${section?.service_detail?.slug}`}>
              <div className={styles.contentLeft}>
                <h3>{section.title}</h3>
                <div className={styles.content}>
                  <p>{section.description}</p>
                  <ul>
                    {section.points.map((point, idx) => (
                      <li key={idx}>{point.content}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
