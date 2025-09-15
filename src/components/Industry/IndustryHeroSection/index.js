"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

const industryFlows = {
  "future-ready-banking-tech-solutions": {
    initial: {
      message: "👋 Welcome to Boolean & Beyond! I'm here to help you scope your banking/fintech project. What type of solution are you looking for?",
      options: [
        { text: "Digital Banking Platform", next: "banking_platform" },
        { text: "Payment Processing System", next: "payment_system" },
        { text: "Investment Management App", next: "investment_app" },
        { text: "Compliance & Risk Management", next: "compliance" }
      ]
    },
    banking_platform: {
      message: "Excellent! Digital banking is revolutionizing finance. What's your primary focus?",
      options: [
        { text: "Mobile-first banking app", next: "mobile_banking" },
        { text: "Web-based platform", next: "web_banking" },
        { text: "Multi-channel solution", next: "omnichannel" }
      ]
    },
    mobile_banking: {
      message: "Mobile banking is essential today! What features are most important?",
      options: [
        { text: "Account management & transfers", next: "final" },
        { text: "Investment & wealth management", next: "final" },
        { text: "Business banking features", next: "final" }
      ]
    },
    web_banking: {
      message: "Web platforms offer great flexibility! What's your target audience?",
      options: [
        { text: "Retail customers", next: "final" },
        { text: "Business clients", next: "final" },
        { text: "Both retail and business", next: "final" }
      ]
    },
    omnichannel: {
      message: "Smart choice! Omnichannel banking provides seamless experiences. What channels do you need?",
      options: [
        { text: "Mobile, web, and ATM integration", next: "final" },
        { text: "Branch and digital integration", next: "final" },
        { text: "Full ecosystem integration", next: "final" }
      ]
    },
    payment_system: {
      message: "Payment systems are the backbone of modern finance. What's your target market?",
      options: [
        { text: "B2B payment processing", next: "b2b_payments" },
        { text: "Consumer payments", next: "consumer_payments" },
        { text: "Cross-border transactions", next: "international" }
      ]
    },
    b2b_payments: {
      message: "B2B payments require robust solutions. What's your priority?",
      options: [
        { text: "Invoice automation", next: "final" },
        { text: "Multi-currency support", next: "final" },
        { text: "Integration with ERP systems", next: "final" }
      ]
    },
    consumer_payments: {
      message: "Consumer payments need to be fast and secure. What features do you need?",
      options: [
        { text: "Digital wallet integration", next: "final" },
        { text: "Contactless payments", next: "final" },
        { text: "Subscription billing", next: "final" }
      ]
    },
    international: {
      message: "Cross-border payments are complex but valuable. What's your focus?",
      options: [
        { text: "Real-time settlement", next: "final" },
        { text: "Compliance automation", next: "final" },
        { text: "Multi-corridor support", next: "final" }
      ]
    },
    investment_app: {
      message: "Investment management is a growing field. What features do you need?",
      options: [
        { text: "Portfolio management", next: "portfolio" },
        { text: "Trading platform", next: "trading" },
        { text: "Robo-advisor", next: "robo_advisor" }
      ]
    },
    compliance: {
      message: "Compliance is essential in fintech. What regulations do you need to meet?",
      options: [
        { text: "KYC/AML compliance", next: "kyc_aml" },
        { text: "PCI DSS compliance", next: "pci_dss" },
        { text: "GDPR compliance", next: "gdpr" }
      ]
    }
  },
  "enhancing-e-commerce-for-modern-retailers": {
    initial: {
      message: "🛒 Welcome to Boolean & Beyond! Let's build your e-commerce solution. What's your business model?",
      options: [
        { text: "B2C Online Store", next: "b2c_store" },
        { text: "B2B Marketplace", next: "b2b_marketplace" },
        { text: "Multi-vendor Platform", next: "marketplace" },
        { text: "Subscription Commerce", next: "subscription" }
      ]
    },
    b2c_store: {
      message: "Perfect! B2C stores need exceptional UX. What's your priority?",
      options: [
        { text: "Mobile commerce focus", next: "mobile_commerce" },
        { text: "Omnichannel experience", next: "omnichannel_retail" },
        { text: "Personalization engine", next: "personalization" }
      ]
    },
    mobile_commerce: {
      message: "Mobile commerce is driving sales! What features are essential?",
      options: [
        { text: "Progressive Web App (PWA)", next: "final" },
        { text: "Native mobile app", next: "final" },
        { text: "Mobile-optimized checkout", next: "final" }
      ]
    },
    omnichannel_retail: {
      message: "Omnichannel creates seamless experiences! What channels do you need?",
      options: [
        { text: "Online + Physical store integration", next: "final" },
        { text: "Social commerce integration", next: "final" },
        { text: "Marketplace + Direct sales", next: "final" }
      ]
    },
    personalization: {
      message: "Personalization boosts conversions! What type of personalization?",
      options: [
        { text: "AI-powered product recommendations", next: "final" },
        { text: "Dynamic pricing strategies", next: "final" },
        { text: "Personalized marketing campaigns", next: "final" }
      ]
    },
    b2b_marketplace: {
      message: "B2B marketplaces have unique requirements. What's your focus?",
      options: [
        { text: "Bulk ordering system", next: "final" },
        { text: "Custom pricing tiers", next: "final" },
        { text: "Integration with procurement systems", next: "final" }
      ]
    },
    subscription: {
      message: "Subscription commerce is growing fast! What type of subscriptions?",
      options: [
        { text: "Product subscriptions (boxes)", next: "final" },
        { text: "Service subscriptions (SaaS)", next: "final" },
        { text: "Hybrid subscription model", next: "final" }
      ]
    },
    marketplace: {
      message: "Marketplaces are complex but rewarding. What's your main challenge?",
      options: [
        { text: "Vendor management", next: "vendor_mgmt" },
        { text: "Payment splitting", next: "payment_split" },
        { text: "Inventory coordination", next: "inventory_sync" }
      ]
    }
  },
  default: {
    initial: {
      message: "👋 Welcome to Boolean & Beyond! I'm here to help scope your project. What type of solution are you building?",
      options: [
        { text: "Web Application", next: "web_app" },
        { text: "Mobile App", next: "mobile_app" },
        { text: "Enterprise Software", next: "enterprise" },
        { text: "AI/ML Solution", next: "ai_ml" }
      ]
    },
    web_app: {
      message: "Web applications are our specialty! What's the main purpose?",
      options: [
        { text: "E-commerce platform", next: "ecommerce" },
        { text: "SaaS product", next: "saas" },
        { text: "Content management", next: "cms" }
      ]
    },
    ecommerce: {
      message: "E-commerce drives business growth! What's your target market?",
      options: [
        { text: "B2C retail", next: "final" },
        { text: "B2B wholesale", next: "final" },
        { text: "Multi-vendor marketplace", next: "final" }
      ]
    },
    saas: {
      message: "SaaS products need scalable architecture! What's your focus?",
      options: [
        { text: "Multi-tenant platform", next: "final" },
        { text: "API-first architecture", next: "final" },
        { text: "White-label solution", next: "final" }
      ]
    },
    cms: {
      message: "Content management is crucial! What type of content?",
      options: [
        { text: "Blog and articles", next: "final" },
        { text: "Media and assets", next: "final" },
        { text: "Product catalogs", next: "final" }
      ]
    },
    mobile_app: {
      message: "Mobile apps drive engagement! What platform are you targeting?",
      options: [
        { text: "iOS & Android (React Native)", next: "cross_platform" },
        { text: "iOS only (Swift)", next: "ios_native" },
        { text: "Android only (Kotlin)", next: "android_native" }
      ]
    },
    cross_platform: {
      message: "Cross-platform development is efficient! What's your app category?",
      options: [
        { text: "Social networking", next: "final" },
        { text: "E-commerce mobile app", next: "final" },
        { text: "Productivity tool", next: "final" }
      ]
    },
    ios_native: {
      message: "iOS native apps offer premium experiences! What features do you need?",
      options: [
        { text: "Advanced UI/UX with animations", next: "final" },
        { text: "Integration with Apple ecosystem", next: "final" },
        { text: "Performance-critical features", next: "final" }
      ]
    },
    android_native: {
      message: "Android native development offers flexibility! What's your focus?",
      options: [
        { text: "Material Design implementation", next: "final" },
        { text: "Device-specific features", next: "final" },
        { text: "Enterprise deployment", next: "final" }
      ]
    },
    enterprise: {
      message: "Enterprise solutions need robust architecture. What's your focus?",
      options: [
        { text: "Internal workflow automation", next: "workflow" },
        { text: "Customer relationship management", next: "crm" },
        { text: "Data analytics platform", next: "analytics" }
      ]
    },
    workflow: {
      message: "Workflow automation increases efficiency! What processes need automation?",
      options: [
        { text: "Document approval workflows", next: "final" },
        { text: "HR and employee management", next: "final" },
        { text: "Project management automation", next: "final" }
      ]
    },
    crm: {
      message: "CRM systems drive customer success! What's your priority?",
      options: [
        { text: "Sales pipeline management", next: "final" },
        { text: "Customer support integration", next: "final" },
        { text: "Marketing automation", next: "final" }
      ]
    },
    analytics: {
      message: "Data analytics provide valuable insights! What type of analytics?",
      options: [
        { text: "Business intelligence dashboards", next: "final" },
        { text: "Real-time data processing", next: "final" },
        { text: "Predictive analytics", next: "final" }
      ]
    },
    ai_ml: {
      message: "AI/ML is transforming businesses! What's your use case?",
      options: [
        { text: "Predictive analytics", next: "predictive" },
        { text: "Natural language processing", next: "nlp" },
        { text: "Computer vision", next: "vision" }
      ]
    },
    predictive: {
      message: "Predictive analytics drive smart decisions! What do you want to predict?",
      options: [
        { text: "Customer behavior and churn", next: "final" },
        { text: "Sales forecasting", next: "final" },
        { text: "Risk assessment", next: "final" }
      ]
    },
    nlp: {
      message: "NLP enables intelligent text processing! What's your application?",
      options: [
        { text: "Chatbots and virtual assistants", next: "final" },
        { text: "Document analysis and extraction", next: "final" },
        { text: "Sentiment analysis", next: "final" }
      ]
    },
    vision: {
      message: "Computer vision opens new possibilities! What's your focus?",
      options: [
        { text: "Image recognition and classification", next: "final" },
        { text: "Quality control automation", next: "final" },
        { text: "Augmented reality features", next: "final" }
      ]
    }
  }
};

export default function IndustryHeroSection({ 
  data = {}, 
  industrySlug = "default",
  isBlackTheme = false 
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentStep, setCurrentStep] = useState("initial");
  const [messages, setMessages] = useState([]);
  const [userChoices, setUserChoices] = useState({});
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: ""
  });
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getCurrentFlow = () => {
    return industryFlows[industrySlug] || industryFlows.default;
  };

  const getCurrentOptions = () => {
    const flow = getCurrentFlow();
    const currentStepData = flow[currentStep];
    return currentStepData?.options || [];
  };

  const addMessage = (text, isUser = false) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: Date.now() }]);
  };

  const handleOptionClick = (option) => {
    // Add user's choice to messages
    addMessage(option.text, true);
    
    // Store user choice
    setUserChoices(prev => ({
      ...prev,
      [currentStep]: option.text
    }));

    // Show typing indicator
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      const flow = getCurrentFlow();
      const nextStepData = flow[option.next];
      
      if (nextStepData) {
        // Continue conversation
        addMessage(nextStepData.message);
        setCurrentStep(option.next);
      } else {
        // End of flow - show contact form
        addMessage("Perfect! I have enough information to create your project scope. Let me get your contact details to send you a detailed proposal.");
        setTimeout(() => {
          setShowContactForm(true);
        }, 500);
      }
    }, 800 + Math.random() * 400); // Shorter, more consistent delay
  };

  const generatePDF = (scope) => {
    const content = `
Project Scope Document
Generated: ${new Date().toLocaleDateString()}

Client Information:
Name: ${scope.contact.name}
Email: ${scope.contact.email}
Phone: ${scope.contact.phone || 'Not provided'}
Company: ${scope.contact.company || 'Not provided'}

Project Requirements:
${Object.entries(scope.choices).map(([step, choice]) => `• ${choice}`).join('\n')}

Next Steps:
1. Technical architecture review
2. Detailed timeline and cost estimation
3. Team assignment and project kickoff

Thank you for choosing Boolean & Beyond!
Contact: contact@cartoonmango.com
    `;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `project-scope-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sendEmailNotification = async (scope) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'contact@cartoonmango.com',
          subject: `New Project Scope: ${scope.contact.name}`,
          text: `
New project scope submitted:

Client: ${scope.contact.name}
Email: ${scope.contact.email}
Phone: ${scope.contact.phone || 'Not provided'}
Company: ${scope.contact.company || 'Not provided'}

Requirements:
${Object.entries(scope.choices).map(([step, choice]) => `• ${choice}`).join('\n')}

Submitted: ${new Date().toLocaleString()}
          `
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;

    // Compile scope
    const scope = {
      choices: userChoices,
      contact: contactForm,
      timestamp: new Date().toISOString()
    };

    try {
      // Generate and download PDF
      generatePDF(scope);

      // Send email notification (await this to prevent routing issues)
      await sendEmailNotification(scope);

      // Add success messages to chat
      addMessage("🎉 Thank you! Your project scope has been submitted successfully!");

      setTimeout(() => {
        addMessage("📄 Your scope document has been downloaded and our team at contact@cartoonmango.com has been notified.");
      }, 1500);

      setTimeout(() => {
        addMessage("⏰ We'll review your requirements and get back to you within 24 hours with a detailed proposal. Thank you for choosing Boolean & Beyond!");
      }, 3000);

      // Hide contact form after successful submission
      setShowContactForm(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      addMessage("❌ There was an error submitting your form. Please try again or contact us directly at contact@cartoonmango.com");
    }
  };

  // Get industry-specific content
  const getIndustryContent = () => {
    const industryContent = {
      "future-ready-banking-tech-solutions": {
        title: "Future-Ready Banking",
        subtitle: "Tech Solutions",
        description: "Boolean and Beyond is a leading fintech application development company in India. We specialize in building modern, secure, and scalable solutions that help banks and financial institutions deliver seamless customer experiences and drive digital innovation.",
        features: [
          { icon: "🏦", title: "Digital Banking", desc: "Mobile-first banking platforms with advanced security" },
          { icon: "💳", title: "Payment Processing", desc: "Secure, fast payment systems with global compliance" },
          { icon: "📊", title: "Risk Management", desc: "AI-powered fraud detection and compliance tools" }
        ]
      },
      "enhancing-e-commerce-for-modern-retailers": {
        title: "Enhancing E-Commerce",
        subtitle: "For Modern Retailers",
        description: "Transform your retail business with cutting-edge e-commerce solutions. We build scalable platforms that drive sales, enhance customer experience, and integrate seamlessly with your existing operations.",
        features: [
          { icon: "🛒", title: "Smart Commerce", desc: "AI-powered product recommendations and personalization" },
          { icon: "📱", title: "Mobile Shopping", desc: "Native mobile apps with seamless checkout experience" },
          { icon: "📈", title: "Analytics Dashboard", desc: "Real-time insights into sales, inventory, and customer behavior" }
        ]
      },
      "fantasy-gaming-for-sports-fans": {
        title: "Fantasy Gaming",
        subtitle: "For Sports Fans",
        description: "Create engaging fantasy sports platforms that captivate users with real-time data, social features, and seamless gameplay. Built for scale with advanced analytics and user engagement tools.",
        features: [
          { icon: "🏆", title: "Live Scoring", desc: "Real-time match data and instant score updates" },
          { icon: "👥", title: "Social Gaming", desc: "Leagues, tournaments, and social interaction features" },
          { icon: "💰", title: "Secure Payments", desc: "Safe and fast payment processing for contests" }
        ]
      }
    };

    // Helper function to ensure proper title case
    const toTitleCase = (str) => {
      if (!str) return str;
      return str.replace(/\w\S*/g, (txt) => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      );
    };

    return industryContent[industrySlug] || {
      title: toTitleCase(data.title) || "Transform Your Industry",
      subtitle: toTitleCase(data.highlighted_title) || "With Technology",
      description: data.description?.replace(/Coimbatore/g, 'India') || "Boolean and Beyond delivers cutting-edge technology solutions tailored to your industry's unique challenges and opportunities.",
      features: [
        { icon: "🚀", title: "Rapid Development", desc: "Fast-track your project with our proven methodologies" },
        { icon: "🔒", title: "Enterprise Security", desc: "Industry-standard security and compliance built-in" },
        { icon: "📈", title: "Scalable Solutions", desc: "Built to grow with your business needs" }
      ]
    };
  };

  const industryContent = getIndustryContent();

  return (
    <section className={`${styles.heroSection} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.container}>
        {/* Brand Header */}
        <div className={styles.brandHeader}>
          <h1 className={styles.brandTitle}>
            <span className={styles.highlight}>{industryContent.title}</span>{" "}
            {industryContent.subtitle}
          </h1>
          <p className={styles.brandSubtitle}>
            {industryContent.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {industryContent.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Chat Interface */}
        <div className={styles.chatInterface}>
          {!isExpanded ? (
            <div className={styles.inputContainer} onClick={() => {
              setIsExpanded(true);
              // Add initial greeting when chat opens
              setTimeout(() => {
                const flow = getCurrentFlow();
                addMessage(flow.initial.message);
              }, 300);
            }}>
              <input
                type="text"
                placeholder="Type your idea and we'll build it together."
                className={styles.chatInput}
                readOnly
              />
              <button className={styles.submitButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          ) : (
            <div className={styles.expandedChat}>
              <div className={styles.chatMessages}>
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`${styles.message} ${message.isUser ? styles.userMessage : styles.botMessage}`}
                  >
                    <div className={styles.messageContent}>
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className={`${styles.message} ${styles.botMessage}`}>
                    <div className={styles.messageContent}>
                      <div className={styles.typingIndicator}>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {showContactForm ? (
                <div className={styles.contactForm}>
                  <h4>Let's get your details</h4>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className={styles.formInput}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className={styles.formInput}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className={styles.formInput}
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className={styles.formInput}
                  />
                  <button 
                    onClick={(e) => handleFinalSubmit(e)}
                    disabled={!contactForm.name || !contactForm.email}
                    className={styles.submitScopeButton}
                    type="button"
                  >
                    Submit & Get Scope Document
                  </button>
                </div>
              ) : (
                <div className={styles.chatOptions}>
                  {getCurrentOptions().map((option, index) => (
                    <button
                      key={index}
                      className={styles.optionButton}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
