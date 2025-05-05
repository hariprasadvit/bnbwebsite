import React from "react";
import styles from "./style.module.scss";

export default function RepeatSection() {
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
          <span>Erase the average embrace the bold</span>
          From Concept to execution, our Services designed to set you apart
        </h2>
        {sections.map((section, index) => (
          <div key={index} className={styles.contentWrapper}>
            <div className={styles.topSection}>
              <strong>{section.id}</strong>
            </div>
            <div className={styles.contentLeft}>
              <h3>{section.title}</h3>
              <div className={styles.content}>
                <p>{section.description}</p>
                <ul>
                  {section.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
