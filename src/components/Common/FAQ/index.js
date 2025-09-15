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
      title: "1. How do I get started with a project at Boolean & Beyond?",
      desc: "Getting started is simple just reach out via our contact form or email with a brief about your business, goals, and any existing material (like wireframes or specs). We'll schedule a discovery call to understand your vision and recommend the best next steps.",
    },
    {
      id: 2,
      title: "2. What industries do you specialize in?",
      desc: "We work across diverse industries like Fintech, Healthcare, E-commerce, Logistics, Education, and Media. Our domain-driven design and development ensures your product fits industry needs while being future-ready.",
    },
    {
      id: 3,
      title:
        "3. Do you only build AI solutions, or can you handle full product development?",
      desc: "We do both. While we specialize in AI-driven features (like semantic search, recommendations, or autonomous agents), we also design and build complete digital products including frontend, backend, mobile apps, and user experience design.",
    },
    {
      id: 4,
      title:
        "4. Can you help if I only have an idea and no technical knowledge?",
      desc: "Absolutely. We work with founders and teams from napkin sketches to launch. We'll guide you through requirement definition, user flows, MVP scope, and help you make technical decisions without the jargon.",
    },
    {
      id: 5,
      title: "5. What does your project process look like?",
      desc: `Our process typically includes:
Discovery & Scoping,
 UX/UI Design, 
Architecture & Development, 
Testing & QA, 
Launch & Support, 
We follow an agile approach with weekly check-ins, demos, and transparent communication throughout.`,
    },
    {
      id: 6,
      title:
        "6. Do you take on redesign or modernization of existing platforms?",
      desc: "Yes. We specialize in revamping legacy systems, improving UX/UI, and migrating old architectures into scalable, modern tech stacks whether it’s a fintech dashboard or a multi-tenant ERP.",
    },
    {
      id: 7,
      title: "7. How do you integrate AI in projects?",
      desc: "We implement AI thoughtfully from contextual search and recommendations to autonomous workflows and agentic systems. Our AI is integrated around your data, goals, and user flows never as a gimmick.",
    },
    {
      id: 8,
      title: "8. Do you work with startups and enterprises alike?",
      desc: "Yes. We work with early-stage startups building MVPs as well as large enterprises with complex systems. Our teams adapt to your scale, whether it’s fast iterations or long-term transformation projects.",
    },
    {
      id: 9,
      title: "9. Can you handle both design and development in-house?",
      desc: "Yes, we’re a full-stack product studio. Our UX/UI design team works closely with developers to ensure seamless implementation, consistent branding, and great user experience across all screens and platforms.",
    },
    {
      id: 10,
      title: "10. What tech stacks and tools do you use?",
      desc: "We use modern, scalable stacks like React, Next.js, Node.js, Python, and TypeScript. For AI and agentic solutions, we use OpenAI, LangChain, Pinecone, and other LLM frameworks always picking what’s right for your problem.",
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
            <div className={styles.questionRow} onClick={() => toggleAccordion(items.id)}>
              <h4>{items.title}</h4>
              <svg
                className={styles.toggleIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M8 5l8 7-8 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {activeId === items.id && <p>{items.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
