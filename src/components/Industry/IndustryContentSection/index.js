"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const industryContentData = {
  "fantasy-gaming-for-sports-fans": {
    title: "Why Boolean and Beyond for Fantasy Gaming Apps",
    subtitle: "Expertise in Sports & Gaming Technology",
    isDark: true,
    features: [
      {
        icon: "🏆",
        title: "Live Match Integration",
        description: "Real-time score updates, player statistics, and match events integrated directly from official sports APIs for accurate fantasy scoring.",
        stats: "Real-Time Data"
      },
      {
        icon: "⚡",
        title: "Contest Management",
        description: "Create and manage multiple contest formats - head-to-head, leagues, tournaments with automated prize distribution and leaderboards.",
        stats: "Multi-Format"
      },
      {
        icon: "🎮",
        title: "User Engagement",
        description: "Social features, chat rooms, player analysis tools, and gamification elements that keep users engaged throughout the season.",
        stats: "High Retention"
      }
    ]
  },
  "future-ready-banking-tech-solutions": {
    title: "Why Boolean and Beyond for Banking Solutions",
    subtitle: "Expertise in Financial Technology",
    features: [
      {
        icon: "🏦",
        title: "Digital Banking Platform",
        description: "Complete mobile and web banking solutions with account management, fund transfers, bill payments, and investment tracking.",
        stats: "Full-Service Banking"
      },
      {
        icon: "💳",
        title: "Payment Gateway Integration",
        description: "Secure payment processing with multiple gateway support, fraud detection, PCI compliance, and real-time transaction monitoring.",
        stats: "Multi-Gateway Support"
      },
      {
        icon: "📊",
        title: "Loan Management System",
        description: "End-to-end loan processing from application to disbursement with credit scoring, document verification, and EMI management.",
        stats: "Automated Processing"
      }
    ]
  },
  "enhancing-e-commerce-for-modern-retailers": {
    title: "Why Boolean and Beyond for E-Commerce Solutions",
    subtitle: "Expertise in Retail Technology",
    features: [
      {
        icon: "🛒",
        title: "Multi-Vendor Marketplace",
        description: "Complete marketplace solution with vendor onboarding, product catalog management, order processing, and commission tracking.",
        stats: "Vendor Management"
      },
      {
        icon: "📱",
        title: "Mobile Commerce App",
        description: "Native iOS/Android apps with push notifications, offline browsing, AR product preview, and one-click checkout.",
        stats: "Native Mobile"
      },
      {
        icon: "📈",
        title: "Inventory & Analytics",
        description: "Real-time inventory tracking, sales analytics, customer behavior insights, and automated reorder management.",
        stats: "Smart Analytics"
      }
    ]
  },
  "simplifying-property-management-with-technology": {
    title: "Why Boolean and Beyond for Property Management Solutions",
    subtitle: "Expertise in Real Estate Technology",
    features: [
      {
        icon: "🏢",
        title: "Property Management System",
        description: "Complete property portfolio management with tenant tracking, lease management, rent collection, and maintenance scheduling.",
        stats: "Full Property Control"
      },
      {
        icon: "💰",
        title: "Automated Rent Collection",
        description: "Digital payment processing, automated rent reminders, late fee calculations, and financial reporting for property owners.",
        stats: "Payment Automation"
      },
      {
        icon: "🔧",
        title: "Maintenance Management",
        description: "Work order management, vendor coordination, maintenance scheduling, and tenant request tracking with mobile apps.",
        stats: "Smart Maintenance"
      }
    ]
  }
};

export default function IndustryContentSection({ industrySlug = "default" }) {
  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const content = industryContentData[industrySlug] || {
    title: "Why Boolean and Beyond for Your Industry",
    subtitle: "Expertise in Technology Solutions",
    features: [
      {
        icon: "🚀",
        title: "Rapid Development",
        description: "Fast-track your project with our proven methodologies and experienced development teams.",
        stats: "50% Faster Delivery"
      },
      {
        icon: "🔒",
        title: "Enterprise Security",
        description: "Industry-standard security protocols and compliance frameworks built into every solution.",
        stats: "Enterprise-Grade"
      },
      {
        icon: "📈",
        title: "Scalable Solutions",
        description: "Built to grow with your business needs using modern cloud-native architectures.",
        stats: "Unlimited Scale"
      }
    ]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => [...new Set([...prev, cardIndex])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`${styles.contentSection} ${styles.darkTheme}`} 
      ref={sectionRef}
      style={{
        background: '#000000 !important',
        backgroundColor: '#000000 !important',
        backgroundImage: 'none !important',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 
            className={styles.title}
            style={{
              color: '#ffffff',
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
            }}
          >
            {content.title}
          </h2>
          <p 
            className={styles.subtitle}
            style={{
              color: '#cccccc',
              fontWeight: '500'
            }}
          >
            {content.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {content.features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`${styles.featureCard} ${
                visibleCards.includes(index) ? styles.visible : ''
              } ${hoveredCard === index ? styles.hovered : ''}`}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '20px',
                padding: '32px 24px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>
                
                <div className={styles.textContent}>
                  <h3 
                    className={styles.featureTitle}
                    style={{
                      color: '#ffffff',
                      fontWeight: '700'
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className={styles.featureDescription}
                    style={{
                      color: '#cccccc',
                      lineHeight: '1.7'
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
                
                <div className={styles.statsWrapper}>
                  <span 
                    className={styles.stats}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {feature.stats}
                  </span>
                </div>
              </div>
              
              <div className={styles.cardBackground}></div>
              <div className={styles.cardBorder}></div>
            </div>
          ))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Ready to Transform Your Business?</h3>
            <p>Let's discuss how we can help you achieve your goals with cutting-edge technology solutions.</p>
            <a 
              href="/contact-us"
              className={styles.ctaButton}
            >
              <span>Get In Touch</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
