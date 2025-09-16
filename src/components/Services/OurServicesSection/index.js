"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

const servicesData = [
  {
    id: "custom-app-dev",
    title: "Custom Application Development",
    description: "End-to-end custom software development tailored to your business needs. From web applications to mobile apps, we build scalable solutions that drive growth and efficiency.",
    technicalHighlights: ["Full-Stack Development", "Cloud Architecture", "API Integration"],
    businessImpact: "40% faster time-to-market",
    features: [
      "Modern tech stacks (React, Node.js, Python)",
      "Scalable cloud infrastructure",
      "Real-time data processing",
      "Advanced security protocols"
    ]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI Services",
    description: "Intelligent AI agents that can understand, reason, and act autonomously. Build AI-powered systems that transform how your business operates and interacts with customers.",
    technicalHighlights: ["Machine Learning", "Natural Language Processing", "Autonomous Agents"],
    businessImpact: "60% reduction in manual tasks",
    features: [
      "Custom AI model development",
      "Intelligent automation workflows",
      "Conversational AI interfaces",
      "Predictive analytics and insights"
    ]
  },
  {
    id: "b2b-enterprise",
    title: "B2B and Enterprise Application Development",
    description: "Enterprise-grade solutions designed for complex business workflows. Streamline operations with robust, secure, and scalable applications built for the modern enterprise.",
    technicalHighlights: ["Enterprise Security", "Workflow Automation", "System Integration"],
    businessImpact: "50% improvement in operational efficiency",
    features: [
      "Enterprise resource planning (ERP)",
      "Customer relationship management (CRM)",
      "Business intelligence dashboards",
      "Legacy system modernization"
    ]
  }
];

export default function OurServicesSection() {
  const [visibleElements, setVisibleElements] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.element;
            setVisibleElements(prev => [...new Set([...prev, elementId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-element]');
    elements?.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.servicesSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Services Header */}
        <div 
          className={`${styles.servicesHeader} ${visibleElements.includes('services-header') ? styles.visible : ''}`}
          data-element="services-header"
        >
          <h2 className={styles.servicesTitle}>Our Services</h2>
          <p className={styles.servicesSubtitle}>
            Comprehensive technology solutions designed to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesContainer}>
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${visibleElements.includes(`service-${index}`) ? styles.visible : ''}`}
              data-element={`service-${index}`}
            >
              <div className={styles.serviceIcon}>
                <div className={styles.iconPlaceholder}>
                  <span>🚀</span>
                </div>
              </div>

              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>

                <div className={styles.technicalHighlights}>
                  {service.technicalHighlights.map((highlight, hIndex) => (
                    <span key={hIndex} className={styles.techTag}>{highlight}</span>
                  ))}
                </div>

                <div className={styles.businessImpact}>
                  <strong>Impact: </strong>{service.businessImpact}
                </div>

                <div className={styles.serviceFeatures}>
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={styles.serviceNumber}>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className={`${styles.ctaSection} ${visibleElements.includes('cta') ? styles.visible : ''}`}
          data-element="cta"
        >
          <h3>Ready to Transform Your Business?</h3>
          <p>Let's discuss how our services can accelerate your growth and drive real results.</p>
          <button className={styles.ctaButton}>
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
