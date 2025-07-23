"use client";

import React, { useState } from "react";
import styles from "./faq.module.scss";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const Faq = [
    {
      id: 1,
      title: "Q1. What is the difference between UI and UX Design?",
      desc: "UI refers to User Interface Design, which deals with the aesthetic elements of a product like colors, typography, and layout. UX, or User Experience Design, on the other hand, focuses on the overall experience a user has with a product, like ease of use and the process of interaction.",
    },
    {
      id: 2,
      title: "Q2. What are the expected UX Deliverables?",
      desc: "UX deliverables are outputs that provide insights into the design process. Key deliverables include user stories (users' needs), user flows (users' path through your product), wireframes (basic layout design), prototypes (interactive models of the final product), and a style guide or design system (visual branding rules). The specifics may vary based on the project's requirements.",
    },
    {
      id: 3,
      title: "Q3. Why are UI/UX design services important for my product?",
      desc: "Good UI/UX design can make your product more user-friendly, attractive, and efficient, which can lead to higher user satisfaction and ultimately, greater success for your product.",
    },
    {
      id: 4,
      title: "Q4. What will you need from me to get started?",
      desc: "Our design team usually need a clear understanding of your business, your goals for the product, your target users, and any specific requirements or preferences you have.",
    },

    {
      id: 5,
      title: "Q5. How long does a typical UI/UX design project take?",
      desc: "The timeline can depend on many factors including the complexity of the project, the number of iterations, and the client's responsiveness to feedback requests. Our Typical UI/UX Design process takes 6-10 Weeks.",
    },
    {
      id: 6,
      title: "Q6. How will the success of the design be measured?",
      desc: "Design success can be measured through user feedback, usability testing, and metrics like engagement rates, conversion rates, and user retention rates.",
    },
  ];
  return (
    <section className={styles.faq}>
      <div className={styles.faqHeading}>
        <h3>FAQs</h3>
      </div>
      <div className={styles.faqWrapper}>
        {Faq.map((items) => (
          <div
            className={`${styles.faqCard} ${
              activeId === items.id ? styles.active : ""
            }`}
            key={items.id}
          >
            <h4 onClick={() => toggleAccordion(items.id)}>{items.title}</h4>
            {activeId === items.id && <p>{items.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
