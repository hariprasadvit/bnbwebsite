"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const industryContentData = {
  "fantasy-gaming-for-sports-fans": {
    title: "Why Boolean and Beyond Leads Fantasy Gaming Innovation",
    subtitle: "Where Sports Technology Meets User Engagement",
    industry: "Fantasy Gaming",
    trustFoundation: {
      yearsExperience: "8+",
      projectsDelivered: "200+",
      industryFocus: "Sports & Gaming"
    },
    expertisePillars: [
      {
        pillarId: "realtime",
        iconName: "realtime-data", // User will design this
        title: "Real-Time Sports Intelligence",
        description: "Live match integration with millisecond precision, official APIs, and instant scoring updates that keep users engaged throughout every game.",
        technicalHighlights: ["WebSocket Architecture", "Live Data Streaming", "API Integration"],
        businessImpact: "99.9% uptime during peak events"
      },
      {
        pillarId: "engagement",
        iconName: "user-engagement", // User will design this
        title: "Advanced User Engagement",
        description: "Social features, chat systems, and gamification that create addictive user experiences and drive long-term retention.",
        technicalHighlights: ["Social Architecture", "Gamification Engine", "Notification Systems"],
        businessImpact: "85% higher user retention"
      },
      {
        pillarId: "scalability",
        iconName: "scalable-gaming", // User will design this
        title: "Tournament-Grade Scalability",
        description: "Contest management systems that handle millions of users simultaneously during major sporting events without compromise.",
        technicalHighlights: ["Cloud Infrastructure", "Load Balancing", "Auto-scaling"],
        businessImpact: "10M+ concurrent users"
      }
    ],
    proofPoints: [
      { metric: "50M+", label: "Fantasy Players Served" },
      { metric: "99.9%", label: "Uptime During Super Bowl" },
      { metric: "15ms", label: "Average Response Time" }
    ]
  },
  "future-ready-banking-tech-solutions": {
    title: "Why Boolean and Beyond Secures Banking's Digital Future",
    subtitle: "Enterprise-Grade Security Meets Financial Innovation",
    industry: "Banking & Finance",
    trustFoundation: {
      yearsExperience: "10+",
      projectsDelivered: "150+",
      industryFocus: "Financial Services"
    },
    expertisePillars: [
      {
        pillarId: "security",
        iconName: "banking-security", // User will design this
        title: "Fort Knox-Level Security",
        description: "Military-grade encryption, PCI DSS compliance, and fraud detection systems that protect billions in transactions daily.",
        technicalHighlights: ["End-to-End Encryption", "PCI DSS Level 1", "Real-time Fraud Detection"],
        businessImpact: "Zero security breaches in 10+ years"
      },
      {
        pillarId: "compliance",
        iconName: "regulatory-compliance", // User will design this
        title: "Regulatory Excellence",
        description: "Deep understanding of banking regulations with automated compliance monitoring and reporting systems.",
        technicalHighlights: ["GDPR Compliance", "SOX Compliance", "Automated Reporting"],
        businessImpact: "100% audit success rate"
      },
      {
        pillarId: "digital-banking",
        iconName: "digital-banking", // User will design this
        title: "Complete Digital Banking",
        description: "Full-stack banking solutions from mobile apps to core banking systems with seamless user experiences.",
        technicalHighlights: ["Core Banking Integration", "Mobile-First Design", "API-Driven Architecture"],
        businessImpact: "300% increase in digital adoption"
      }
    ],
    proofPoints: [
      { metric: "$10B+", label: "In Secure Transactions" },
      { metric: "100%", label: "Regulatory Compliance" },
      { metric: "2.5M+", label: "Banking Users" }
    ]
  },
  "simplifying-property-management-with-technology": {
    title: "Why Boolean and Beyond Transforms Real Estate Operations",
    subtitle: "Where Property Technology Meets Business Intelligence",
    industry: "Real Estate Technology",
    trustFoundation: {
      yearsExperience: "12+",
      projectsDelivered: "300+",
      industryFocus: "PropTech Solutions"
    },
    expertisePillars: [
      {
        pillarId: "property-intelligence",
        iconName: "property-intelligence", // User will design this
        title: "Intelligent Property Management",
        description: "AI-powered portfolio management that automates tenant relations, lease tracking, and maintenance scheduling for maximum efficiency.",
        technicalHighlights: ["AI-Driven Analytics", "Automated Workflows", "Predictive Maintenance"],
        businessImpact: "60% reduction in operational costs"
      },
      {
        pillarId: "financial-automation",
        iconName: "financial-automation", // User will design this
        title: "Financial Automation Suite",
        description: "Complete payment processing, automated rent collection, and comprehensive financial reporting that eliminates manual processes.",
        technicalHighlights: ["Payment Gateway Integration", "Automated Invoicing", "Real-time Reporting"],
        businessImpact: "95% faster payment processing"
      },
      {
        pillarId: "tenant-experience",
        iconName: "tenant-experience", // User will design this
        title: "Next-Gen Tenant Experience",
        description: "Mobile-first tenant portals with instant communication, service requests, and digital lease management for modern living.",
        technicalHighlights: ["Mobile-First Design", "Real-time Messaging", "Digital Document Management"],
        businessImpact: "4.8/5 tenant satisfaction score"
      }
    ],
    proofPoints: [
      { metric: "100K+", label: "Properties Managed" },
      { metric: "$500M+", label: "In Rent Processed Monthly" },
      { metric: "24/7", label: "System Availability" }
    ]
  },
  "enhancing-e-commerce-for-modern-retailers": {
    title: "Why Boolean and Beyond Powers E-Commerce Success",
    subtitle: "Scalable Retail Technology for Global Growth",
    industry: "E-Commerce & Retail",
    trustFoundation: {
      yearsExperience: "9+",
      projectsDelivered: "250+",
      industryFocus: "Retail Technology"
    },
    expertisePillars: [
      {
        pillarId: "marketplace",
        iconName: "marketplace-platform", // User will design this
        title: "Multi-Vendor Marketplace",
        description: "Complete marketplace ecosystems with vendor management, commission tracking, and automated order processing.",
        technicalHighlights: ["Vendor Portal", "Commission Engine", "Order Management"],
        businessImpact: "500% increase in vendor onboarding"
      },
      {
        pillarId: "mobile-commerce",
        iconName: "mobile-commerce", // User will design this
        title: "Mobile-First Commerce",
        description: "Native mobile experiences with AR product preview, push notifications, and one-click checkout optimization.",
        technicalHighlights: ["AR Integration", "Push Notifications", "One-Click Checkout"],
        businessImpact: "40% higher mobile conversion"
      },
      {
        pillarId: "analytics",
        iconName: "commerce-analytics", // User will design this
        title: "Intelligent Analytics",
        description: "Real-time inventory tracking, customer behavior insights, and predictive analytics for data-driven decisions.",
        technicalHighlights: ["Real-time Tracking", "Behavioral Analytics", "Predictive Modeling"],
        businessImpact: "35% increase in sales through insights"
      }
    ],
    proofPoints: [
      { metric: "50M+", label: "Products Processed" },
      { metric: "99.9%", label: "Platform Uptime" },
      { metric: "15s", label: "Average Page Load" }
    ]
  },
  "custom-travel-platforms-that-connect": {
    title: "Why Boolean and Beyond Transforms Travel Experiences",
    subtitle: "Connected Travel Technology for Modern Journeys",
    industry: "Travel & Tourism",
    trustFoundation: {
      yearsExperience: "11+",
      projectsDelivered: "180+",
      industryFocus: "Travel Technology"
    },
    expertisePillars: [
      {
        pillarId: "booking-intelligence",
        iconName: "booking-intelligence", // User will design this
        title: "Intelligent Booking Engine",
        description: "AI-powered booking systems with real-time inventory, dynamic pricing, and seamless payment integration for optimal user experiences.",
        technicalHighlights: ["Real-time Inventory", "Dynamic Pricing", "Payment Gateway Integration"],
        businessImpact: "45% increase in booking conversion"
      },
      {
        pillarId: "personalization",
        iconName: "travel-personalization", // User will design this
        title: "Personalized Travel Recommendations",
        description: "Machine learning algorithms that analyze user preferences, travel history, and behavior to deliver hyper-personalized travel suggestions.",
        technicalHighlights: ["ML Recommendation Engine", "User Behavioral Analytics", "Preference Learning"],
        businessImpact: "60% higher user engagement"
      },
      {
        pillarId: "omnichannel",
        iconName: "omnichannel-travel", // User will design this
        title: "Omnichannel Travel Management",
        description: "Unified platforms connecting web, mobile, and agency channels with real-time synchronization for seamless travel planning.",
        technicalHighlights: ["Cross-platform Sync", "Agency Integration", "Mobile-first Design"],
        businessImpact: "80% reduction in booking errors"
      }
    ],
    proofPoints: [
      { metric: "5M+", label: "Travelers Served Annually" },
      { metric: "99.8%", label: "Booking Success Rate" },
      { metric: "150+", label: "Travel Partners Integrated" }
    ]
  },
  "smart-technology-solutions-for-agriculture": {
    title: "Why Boolean and Beyond Revolutionizes Agriculture Technology",
    subtitle: "Smart Farming Solutions for Modern Agriculture",
    industry: "AgriTech & Smart Farming",
    trustFoundation: {
      yearsExperience: "8+",
      projectsDelivered: "120+",
      industryFocus: "Agricultural Technology"
    },
    expertisePillars: [
      {
        pillarId: "precision-farming",
        iconName: "precision-farming", // User will design this
        title: "Precision Farming Intelligence",
        description: "IoT sensors, satellite imagery, and AI analytics that optimize crop yields, reduce waste, and enable data-driven farming decisions.",
        technicalHighlights: ["IoT Sensor Networks", "Satellite Data Integration", "Predictive Analytics"],
        businessImpact: "40% increase in crop yields"
      },
      {
        pillarId: "supply-chain",
        iconName: "agri-supply-chain", // User will design this
        title: "Farm-to-Market Traceability",
        description: "Complete supply chain management from farm operations to market delivery with real-time tracking and quality assurance.",
        technicalHighlights: ["Blockchain Traceability", "Cold Chain Monitoring", "Quality Management"],
        businessImpact: "60% reduction in food waste"
      },
      {
        pillarId: "smart-automation",
        iconName: "smart-automation", // User will design this
        title: "Automated Farm Operations",
        description: "Smart irrigation systems, autonomous equipment control, and automated monitoring that reduce labor costs and improve efficiency.",
        technicalHighlights: ["Smart Irrigation", "Equipment Automation", "Remote Monitoring"],
        businessImpact: "50% reduction in operational costs"
      }
    ],
    proofPoints: [
      { metric: "500K+", label: "Acres Under Smart Management" },
      { metric: "85%", label: "Water Usage Reduction" },
      { metric: "200+", label: "Farms Digitized" }
    ]
  }
};

export default function IndustryContentSection({ industrySlug = "default" }) {
  const [activePillar, setActivePillar] = useState(null);
  const [visibleElements, setVisibleElements] = useState([]);
  const sectionRef = useRef(null);

  const content = industryContentData[industrySlug] || {
    title: "Why Boolean and Beyond for Your Industry",
    subtitle: "Technology Excellence Across Sectors",
    industry: "Technology Solutions",
    trustFoundation: {
      yearsExperience: "10+",
      projectsDelivered: "500+",
      industryFocus: "Enterprise Solutions"
    },
    expertisePillars: [
      {
        pillarId: "innovation",
        iconName: "innovation", // User will design this
        title: "Cutting-Edge Innovation",
        description: "Latest technologies and methodologies to keep your business ahead of the competition.",
        technicalHighlights: ["Modern Tech Stack", "Agile Methodology", "Continuous Innovation"],
        businessImpact: "50% faster time to market"
      },
      {
        pillarId: "security",
        iconName: "enterprise-security", // User will design this
        title: "Enterprise Security",
        description: "Industry-standard security protocols and compliance frameworks built into every solution.",
        technicalHighlights: ["End-to-End Encryption", "Compliance Frameworks", "Security Audits"],
        businessImpact: "Zero security incidents"
      },
      {
        pillarId: "scalability",
        iconName: "scalable-solutions", // User will design this
        title: "Infinite Scalability",
        description: "Cloud-native architectures that grow seamlessly with your business needs and user base.",
        technicalHighlights: ["Cloud-Native", "Auto-scaling", "Load Balancing"],
        businessImpact: "10x growth capacity"
      }
    ],
    proofPoints: [
      { metric: "500+", label: "Successful Projects" },
      { metric: "99.9%", label: "Client Satisfaction" },
      { metric: "24/7", label: "Support Available" }
    ]
  };

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
    <section className={styles.trustSection} ref={sectionRef}>
      <div className={styles.container}>
        
        {/* Trust Foundation Hero */}
        <div 
          className={`${styles.trustFoundation} ${visibleElements.includes('foundation') ? styles.visible : ''}`}
          data-element="foundation"
        >
          <div className={styles.trustHero}>
            <div className={styles.trustContent}>
              <h2 className={styles.trustTitle}>{content.title}</h2>
              <p className={styles.trustSubtitle}>{content.subtitle}</p>
              
              <div className={styles.credibilityBadges}>
                <div className={styles.badge}>
                  <span className={styles.badgeNumber}>{content.trustFoundation.yearsExperience}</span>
                  <span className={styles.badgeLabel}>Years Building {content.industry} Solutions</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeNumber}>{content.trustFoundation.projectsDelivered}</span>
                  <span className={styles.badgeLabel}>Successful Projects Delivered</span>
                </div>
                <div className={styles.badge}>
                  <span className={styles.badgeNumber}>100%</span>
                  <span className={styles.badgeLabel}>Client Success Rate</span>
                </div>
              </div>
            </div>
            
            <div className={styles.trustVisual}>
              <div className={styles.trustSymbol}>
                <div className={styles.trustRings}>
                  <div className={styles.ring}></div>
                  <div className={styles.ring}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.trustCore}>
                  <span>🛡️</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Pillars */}
        <div className={styles.expertiseSection}>
          <div 
            className={`${styles.sectionHeader} ${visibleElements.includes('pillars-header') ? styles.visible : ''}`}
            data-element="pillars-header"
          >
            <h3>Our {content.industry} Expertise</h3>
            <p>Three pillars that make us the trusted choice for industry leaders</p>
          </div>

          <div className={styles.pillarsContainer}>
            {content.expertisePillars.map((pillar, index) => (
              <div
                key={pillar.pillarId}
                className={`${styles.expertisePillar} ${visibleElements.includes(`pillar-${index}`) ? styles.visible : ''} ${activePillar === index ? styles.active : ''}`}
                data-element={`pillar-${index}`}
                onMouseEnter={() => setActivePillar(index)}
                onMouseLeave={() => setActivePillar(null)}
              >
                <div className={styles.pillarIcon}>
                  {/* Custom icon placeholder - user will design these */}
                  <div className={styles.iconPlaceholder} data-icon={pillar.iconName}>
                    <span className={styles.iconLetter}>{pillar.title.charAt(0)}</span>
                  </div>
                  <div className={styles.iconGlow}></div>
                </div>
                
                <div className={styles.pillarContent}>
                  <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                  
                  <div className={styles.technicalHighlights}>
                    {pillar.technicalHighlights.map((highlight, hIndex) => (
                      <span key={hIndex} className={styles.techTag}>{highlight}</span>
                    ))}
                  </div>
                  
                  <div className={styles.businessImpact}>
                    <strong>Impact: </strong>{pillar.businessImpact}
                  </div>
                </div>
                
                <div className={styles.pillarNumber}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Proof Points */}
        <div 
          className={`${styles.proofSection} ${visibleElements.includes('proof') ? styles.visible : ''}`}
          data-element="proof"
        >
          <h3>Proven Results That Speak for Themselves</h3>
          <div className={styles.proofGrid}>
            {content.proofPoints.map((proof, index) => (
              <div key={index} className={styles.proofPoint}>
                <div className={styles.proofMetric}>{proof.metric}</div>
                <div className={styles.proofLabel}>{proof.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div 
          className={`${styles.ctaSection} ${visibleElements.includes('cta') ? styles.visible : ''}`}
          data-element="cta"
        >
          <div className={styles.ctaContent}>
            <h3>Ready to Transform Your {content.industry} Business?</h3>
            <p>Join industry leaders who trust Boolean & Beyond with their most critical technology initiatives.</p>
            
            <div className={styles.ctaActions}>
              <a href="/contact-us" className={styles.primaryCta}>
                <span>Start Your Project</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              
              <a href="#case-studies" className={styles.secondaryCta}>
                <span>View Case Studies</span>
              </a>
            </div>
          </div>
          
          <div className={styles.ctaVisual}>
            <div className={styles.successIndicators}>
              <div className={styles.indicator}>✓ Enterprise Security</div>
              <div className={styles.indicator}>✓ Proven Track Record</div>
              <div className={styles.indicator}>✓ 24/7 Support</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
