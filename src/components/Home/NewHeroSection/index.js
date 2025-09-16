"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./styles.module.scss";

const CHAT_FLOW = {
  initial: {
    question: "Hi there! I'm your Scope Discovery Bot for Boolean & Beyond! 🚀\n\nI'm here to help you define your project requirements step by step. Let's start with the basics:\n\nWhat type of application do you want to build?",
    options: [
      { id: "mobile_app", label: "Mobile App", next: "industry" },
      { id: "web_app", label: "Web App", next: "industry" },
      { id: "ai_system", label: "AI-powered System", next: "ai_type" },
      { id: "hybrid", label: "Hybrid (Mobile + Web)", next: "industry" }
    ]
  },
  industry: {
    question: "Great choice! Now, which industry is this for?",
    options: [
      { id: "real_estate", label: "Real Estate", next: "real_estate_types" },
      { id: "travel", label: "Travel & Tourism", next: "travel_types" },
      { id: "fintech", label: "FinTech", next: "fintech_types" },
      { id: "ecommerce", label: "E-commerce", next: "ecommerce_types" },
      { id: "education", label: "Education", next: "education_types" },
      { id: "healthcare", label: "Healthcare", next: "healthcare_types" },
      { id: "logistics", label: "Logistics", next: "logistics_types" },
      { id: "media", label: "Media & Entertainment", next: "media_types" },
      { id: "gaming", label: "Gaming", next: "gaming_types" },
      { id: "other", label: "Other", next: "core_features" }
    ]
  },
  // Industry-specific app types
  real_estate_types: {
    question: "Perfect! What type of real estate solution are you looking for?",
    options: [
      { id: "property_mgmt", label: "Property Management System", next: "core_features" },
      { id: "crm_agents", label: "CRM for Real Estate Agents", next: "core_features" },
      { id: "interior_design", label: "Interior Design Manager", next: "core_features" },
      { id: "virtual_tours", label: "Virtual Tours Platform", next: "core_features" },
      { id: "listing_portal", label: "Property Listing Portal", next: "core_features" }
    ]
  },
  travel_types: {
    question: "What type of travel solution do you need?",
    options: [
      { id: "itinerary_planner", label: "Itinerary Planner", next: "core_features" },
      { id: "booking_engine", label: "Booking Engine", next: "core_features" },
      { id: "recommendation_system", label: "Travel Recommendation System", next: "core_features" },
      { id: "travel_crm", label: "Travel Agency CRM", next: "core_features" }
    ]
  },
  fintech_types: {
    question: "What type of FinTech solution are you building?",
    options: [
      { id: "digital_wallet", label: "Digital Wallet", next: "core_features" },
      { id: "kyc_system", label: "KYC/Identity Verification", next: "core_features" },
      { id: "financial_dashboard", label: "Financial Dashboard", next: "core_features" },
      { id: "loan_app", label: "Loan Application System", next: "core_features" },
      { id: "investment_platform", label: "Investment Platform", next: "core_features" }
    ]
  },
  ecommerce_types: {
    question: "What type of e-commerce solution do you need?",
    options: [
      { id: "marketplace", label: "Multi-vendor Marketplace", next: "core_features" },
      { id: "b2b_platform", label: "B2B Trading Platform", next: "core_features" },
      { id: "subscription_commerce", label: "Subscription Commerce", next: "core_features" },
      { id: "mobile_commerce", label: "Mobile Commerce App", next: "core_features" }
    ]
  },
  education_types: {
    question: "What type of education platform are you creating?",
    options: [
      { id: "lms", label: "Learning Management System (LMS)", next: "core_features" },
      { id: "content_library", label: "Digital Content Library", next: "core_features" },
      { id: "quiz_engine", label: "Quiz & Assessment Engine", next: "core_features" },
      { id: "live_classes", label: "Live Classes Platform", next: "core_features" },
      { id: "student_portal", label: "Student Management Portal", next: "core_features" }
    ]
  },
  healthcare_types: {
    question: "What type of healthcare solution do you need?",
    options: [
      { id: "telemedicine", label: "Telemedicine Platform", next: "core_features" },
      { id: "patient_portal", label: "Patient Management Portal", next: "core_features" },
      { id: "health_records", label: "Electronic Health Records", next: "core_features" },
      { id: "appointment_system", label: "Appointment Scheduling", next: "core_features" }
    ]
  },
  logistics_types: {
    question: "What type of logistics solution are you building?",
    options: [
      { id: "fleet_management", label: "Fleet Management System", next: "core_features" },
      { id: "warehouse_mgmt", label: "Warehouse Management", next: "core_features" },
      { id: "delivery_tracking", label: "Delivery Tracking System", next: "core_features" },
      { id: "supply_chain", label: "Supply Chain Management", next: "core_features" }
    ]
  },
  media_types: {
    question: "What type of media platform do you want?",
    options: [
      { id: "streaming_platform", label: "Video Streaming Platform", next: "core_features" },
      { id: "content_cms", label: "Content Management System", next: "core_features" },
      { id: "social_media", label: "Social Media Platform", next: "core_features" },
      { id: "podcast_platform", label: "Podcast Platform", next: "core_features" }
    ]
  },
  gaming_types: {
    question: "What type of gaming solution are you creating?",
    options: [
      { id: "mobile_game", label: "Mobile Game", next: "core_features" },
      { id: "web_game", label: "Web-based Game", next: "core_features" },
      { id: "gaming_platform", label: "Gaming Platform/Marketplace", next: "core_features" },
      { id: "esports_platform", label: "Esports Tournament Platform", next: "core_features" }
    ]
  },
  ai_type: {
    question: "What type of AI-powered system do you need?",
    options: [
      { id: "chatbot", label: "Chatbot/Virtual Assistant", next: "core_features" },
      { id: "ml_model", label: "Machine Learning Model", next: "core_features" },
      { id: "data_analytics", label: "AI Data Analytics", next: "core_features" },
      { id: "automation", label: "Process Automation", next: "core_features" },
      { id: "recommendation", label: "AI Recommendation Engine", next: "core_features" }
    ]
  },
  core_features: {
    question: "What core features do you need? (Select all that apply)",
    isMultiSelect: true,
    options: [
      { id: "authentication", label: "User Authentication & Login" },
      { id: "search_filters", label: "Search & Filters" },
      { id: "dashboard", label: "Admin Dashboard" },
      { id: "notifications", label: "Push Notifications" },
      { id: "payments", label: "Payment Processing" },
      { id: "realtime", label: "Real-time Updates" },
      { id: "multilang", label: "Multi-language Support" },
      { id: "ai_chatbots", label: "AI/Chatbots Integration" },
      { id: "api_integrations", label: "Third-party API Integrations" }
    ],
    next: "design_preferences"
  },
  design_preferences: {
    question: "What's your preferred design style?",
    options: [
      { id: "minimal", label: "Minimal & Clean", next: "integrations" },
      { id: "corporate", label: "Corporate & Professional", next: "integrations" },
      { id: "playful", label: "Playful & Colorful", next: "integrations" },
      { id: "futuristic", label: "Futuristic & Modern", next: "integrations" },
      { id: "dark_mode", label: "Dark Mode Focused", next: "integrations" },
      { id: "light_mode", label: "Light & Bright", next: "integrations" }
    ]
  },
  integrations: {
    question: "What integrations do you need?",
    isMultiSelect: true,
    next: "timeline",
    options: [
      { id: "payment", label: "Payment Gateways (Stripe, PayPal)" },
      { id: "social", label: "Social Media Integration" },
      { id: "analytics", label: "Analytics & Tracking" },
      { id: "crm", label: "CRM Integration" },
      { id: "email", label: "Email Marketing Tools" },
      { id: "cloud", label: "Cloud Storage (AWS, Google Drive)" },
      { id: "auth", label: "Authentication Services" },
      { id: "maps", label: "Maps & Location Services" },
      { id: "messaging", label: "Messaging & Communication" },
      { id: "none", label: "No integrations needed" }
    ]
  },
  timeline: {
    question: "What's your preferred timeline and budget range?",
    options: [
      { id: "1_2_months_10k", label: "1-2 months, <$10k", next: "success_metrics" },
      { id: "1_2_months_30k", label: "1-2 months, $10k-$30k", next: "success_metrics" },
      { id: "2_4_months_30k", label: "2-4 months, $10k-$30k", next: "success_metrics" },
      { id: "2_4_months_75k", label: "2-4 months, $30k-$75k", next: "success_metrics" },
      { id: "4_6_months_75k", label: "4-6 months, $30k-$75k", next: "success_metrics" },
      { id: "4_6_months_75k_plus", label: "4-6 months, $75k+", next: "success_metrics" },
      { id: "6_months_plus", label: "6+ months, $75k+", next: "success_metrics" },
      { id: "flexible", label: "Flexible timeline & budget", next: "success_metrics" }
    ]
  },
  success_metrics: {
    question: "How will you measure the success of this project?",
    options: [
      { id: "user_growth", label: "User Growth & Acquisition", next: "contact_info" },
      { id: "revenue_generation", label: "Revenue Generation", next: "contact_info" },
      { id: "user_engagement", label: "User Engagement & Retention", next: "contact_info" },
      { id: "operational_efficiency", label: "Operational Efficiency", next: "contact_info" },
      { id: "customer_satisfaction", label: "Customer Satisfaction & Feedback", next: "contact_info" },
      { id: "market_penetration", label: "Market Penetration", next: "contact_info" },
      { id: "cost_reduction", label: "Cost Reduction", next: "contact_info" }
    ]
  },
  contact_info: {
    question: "Excellent! I have all the information needed to create your project scope document. 📋\n\nYour scope includes your app type, industry focus, key features, design preferences, integrations, timeline, budget, and success metrics.\n\nWould you like me to generate your personalized scope document?",
    isDownloadStep: true
  }
};

export default function NewHeroSection({ data = {}, industryMode = false, industrySlug = null, isBlackTheme = false }) {
  const [chatState, setChatState] = useState("initial");
  const [isExpanded, setIsExpanded] = useState(false);
  const [userChoices, setUserChoices] = useState({});
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const messagesEndRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  const handleChatClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      
      // Add initial bot message directly
      setTimeout(() => {
        addMessage(CHAT_FLOW.initial.question);
      }, 500);
      
      // Scroll to next section only on initial expansion
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatMessages = messagesEndRef.current.parentElement;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  };

  useEffect(() => {
    if (isExpanded && messages.length > 0) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isTyping, isExpanded]);

  // Gentle scroll animation for text elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      console.log('Scroll position:', scrollPosition); // Debug log
    };

    // Initial call to set position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addMessage = (text, isUser = false) => {
    setMessages(prev => [...prev, { text, isUser, timestamp: Date.now() }]);
  };

  const handleOptionSelect = (option) => {
    const currentStep = CHAT_FLOW[chatState];
    
    if (currentStep?.isMultiSelect) {
      // Handle multi-select for core features
      const newSelectedFeatures = selectedFeatures.includes(option.id)
        ? selectedFeatures.filter(id => id !== option.id)
        : [...selectedFeatures, option.id];
      
      setSelectedFeatures(newSelectedFeatures);
      
      // Don't add message or proceed automatically for multi-select
      return;
    }
    
    // Regular single-select behavior
    addMessage(option.label, true);
    
    const newChoices = { ...userChoices, [chatState]: option };
    setUserChoices(newChoices);
    
    if (option.next) {
      // Show typing indicator
      setIsTyping(true);
      
      setTimeout(() => {
        setIsTyping(false);
        setChatState(option.next);
        
        // Add bot's next question
        const nextStep = CHAT_FLOW[option.next];
        if (nextStep) {
          addMessage(nextStep.question);
        }
      }, 1000);
    }
  };

  const handleMultiSelectContinue = () => {
    if (selectedFeatures.length === 0) {
      addMessage("Please select at least one option to continue.", false);
      return;
    }
    
    const currentStep = CHAT_FLOW[chatState];
    
    // Add selected items as user message
    const selectedText = selectedFeatures.map(id => 
      currentStep.options.find(opt => opt.id === id)?.label
    ).join(", ");
    addMessage(`Selected: ${selectedText}`, true);
    
    // Store multi-select choices
    const multiSelectChoice = {
      id: "multiple_selections",
      label: selectedText,
      selectedIds: selectedFeatures
    };
    
    const newChoices = { ...userChoices, [chatState]: multiSelectChoice };
    setUserChoices(newChoices);
    
    // Clear selected features and proceed
    setSelectedFeatures([]);
    
    // Show typing indicator and proceed to next step
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      const nextStepKey = currentStep.next;
      setChatState(nextStepKey);
      
      // Add bot's next question
      const nextStep = CHAT_FLOW[nextStepKey];
      if (nextStep) {
        addMessage(nextStep.question);
      }
    }, 1000);
  };

  const handleContactFormChange = (field, value) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const handleDownloadScope = () => {
    addMessage("Download My Scope", true);
    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      addMessage("Great choice! I'll need your contact details to send you the personalized scope document.");
      setShowContactForm(true);
    }, 1000);
  };

  const generatePDF = (scope) => {
    // Helper function to get readable labels
    const getReadableLabel = (key, value) => {
      const keyMap = {
        'initial': 'Application Type',
        'industry': 'Industry',
        'real_estate_types': 'Real Estate Solution',
        'travel_types': 'Travel Solution',
        'fintech_types': 'FinTech Solution',
        'ecommerce_types': 'E-commerce Solution',
        'education_types': 'Education Platform',
        'healthcare_types': 'Healthcare Solution',
        'logistics_types': 'Logistics Solution',
        'media_types': 'Media Platform',
        'gaming_types': 'Gaming Solution',
        'ai_type': 'AI System Type',
        'core_features': 'Core Features',
        'design_preferences': 'Design Style',
        'integrations': 'Integrations',
        'timeline_budget': 'Timeline & Budget',
        'success_metrics': 'Success Metrics'
      };
      return keyMap[key] || key.replace('_', ' ').toUpperCase();
    };

    // Create enhanced PDF content
    const pdfContent = `
═══════════════════════════════════════════════════════════════
                        BOOLEAN & BEYOND
                     Project Scope Document
════════════════════════════════════════════════════���═══════���══

Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

📋 PROJECT OVERVIEW:
${Object.entries(scope.choices).map(([key, value]) => `
   • ${getReadableLabel(key, value)}: ${value.label}`).join('')}

🎯 PROJECT SUMMARY:
   Platform: ${scope.choices.initial?.label || 'Not specified'}
   Industry: ${scope.choices.industry?.label || 'Not specified'}
   Solution Type: ${Object.values(scope.choices).find(choice => 
     choice.id?.includes('_types') || choice.id?.includes('ai_type'))?.label || 'Custom Solution'}
   
   Core Features: ${scope.choices.core_features?.label || 'To be defined'}
   Design Style: ${scope.choices.design_preferences?.label || 'To be defined'}
   Key Integrations: ${scope.choices.integrations?.label || 'None specified'}
   
   Timeline & Budget: ${scope.choices.timeline_budget?.label || 'To be discussed'}
   Success Measurement: ${scope.choices.success_metrics?.label || 'To be defined'}

👤 CONTACT INFORMATION:
   • Name: ${scope.contact.name}
   • Email: ${scope.contact.email}
   • Company: ${scope.contact.company || 'Individual Project'}
   • Phone: ${scope.contact.phone || 'Not provided'}

📧 TEAM NOTIFICATION:
   This scope has been automatically sent to:
   • contact@cartoonmango.com
   ��� vinod@cartoonmango.com  
   • hari@cartoonmango.com

🚀 NEXT STEPS:
   1. Our team will review your detailed requirements
   2. We'll prepare a comprehensive proposal with:
      - Technical architecture recommendations
      - Detailed project timeline with milestones
      - Resource allocation and team structure
      - Accurate cost estimation
   3. Schedule a discovery call within 24 hours
   4. Finalize project scope and begin development

   We're excited to help bring your vision to life!

═══════════════════════════════════════════════════════════════
                   Thank you for choosing Boolean & Beyond!
                        www.booleanbeyond.com
═══════════════════════════════════════════════════════════════
    `;
    
    // Create and download file
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Boolean-Beyond-Scope-${scope.contact.name.replace(/\s+/g, '-')}-${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const sendEmailNotification = async (scope) => {
    // Create detailed project scope summary
    const projectSummary = Object.entries(scope.choices).map(([key, value]) => {
      const stepName = key.replace('_', ' ').split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `${stepName}: ${value.label}`;
    }).join(' → ');

    const emailData = {
      to: ['contact@cartoonmango.com', 'vinod@cartoonmango.com', 'hari@cartoonmango.com'],
      subject: `🚀 New Lead: ${scope.contact.name} - ${projectSummary.split(' → ')[0]}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 700px; margin: 0 auto; background: #ffffff;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d44116 0%, #ff6b3d 100%); padding: 30px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 700;">BOOLEAN & BEYOND</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 16px;">🎉 New Project Scope Received!</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; background: #f8f9fa;">
            <!-- Contact Card -->
            <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 30px; border-left: 5px solid #d44116;">
              <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                👤 Contact Information
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 12px 0; font-weight: 600; color: #555; width: 120px;">Name:</td><td style="padding: 12px 0; color: #333; font-size: 16px;">${scope.contact.name}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600; color: #555;">Email:</td><td style="padding: 12px 0; color: #d44116; font-size: 16px;"><a href="mailto:${scope.contact.email}" style="color: #d44116; text-decoration: none;">${scope.contact.email}</a></td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600; color: #555;">Company:</td><td style="padding: 12px 0; color: #333; font-size: 16px;">${scope.contact.company || 'Individual Project'}</td></tr>
                <tr><td style="padding: 12px 0; font-weight: 600; color: #555;">Phone:</td><td style="padding: 12px 0; color: #333; font-size: 16px;">${scope.contact.phone || 'Not provided'}</td></tr>
              </table>
            </div>
            
            <!-- Project Scope -->
            <div style="background: white; padding: 25px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); margin-bottom: 30px;">
              <h2 style="color: #333; margin: 0 0 20px 0; font-size: 20px; display: flex; align-items: center;">
                📋 Complete Project Scope
              </h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
                <p style="margin: 0 0 15px 0; font-size: 16px; font-weight: 600; color: #d44116;">Project Journey:</p>
                <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #555;">${projectSummary}</p>
              </div>
              <div style="margin-top: 20px;">
                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px;">Detailed Requirements:</h3>
                <ul style="margin: 0; padding-left: 0; list-style: none;">
                  ${Object.entries(scope.choices).map(([key, value]) => `
                    <li style="margin-bottom: 12px; padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #d44116;">
                      <strong style="color: #d44116; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px;">${key.replace('_', ' ')}:</strong>
                      <span style="display: block; margin-top: 4px; color: #333; font-size: 15px;">${value.label}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            
            <!-- Action Items -->
            <div style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); padding: 25px; border-radius: 12px; color: white; text-align: center;">
              <h3 style="margin: 0 0 15px 0; font-size: 18px;">🚀 Next Steps</h3>
              <p style="margin: 0 0 15px 0; font-size: 15px; opacity: 0.9;">Submitted: ${new Date(scope.timestamp).toLocaleString()}</p>
              <p style="margin: 0; font-size: 16px; font-weight: 600;">⏰ Follow up within 24 hours with detailed proposal</p>
            </div>
            
            <!-- Quick Actions -->
            <div style="margin-top: 30px; text-align: center;">
              <a href="mailto:${scope.contact.email}?subject=Re: Your Boolean & Beyond Project Scope" style="display: inline-block; background: #d44116; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 10px;">📧 Reply to Client</a>
              <a href="tel:${scope.contact.phone}" style="display: inline-block; background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 0 10px;">📞 Call Client</a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 12px 12px;">
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">Boolean & Beyond - Turning Ideas Into Reality</p>
          </div>
        </div>
      `
    };
    
    console.log('📧 Sending email to team:', emailData.subject);
    console.log('📧 Email recipients:', emailData.to);
    
    try {
      console.log('🌐 Making API call to /api/send-email...');
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });
      
      console.log('📡 API response status:', response.status);
      
      if (!response.ok) {
        console.error('❌ API response not ok:', response.status, response.statusText);
        throw new Error(`Email API failed with status ${response.status}`);
      }
      
      const result = await response.json();
      console.log('✅ Email API response:', result);
      return result;
      
    } catch (error) {
      console.error('❌ Email sending failed:', error);
      // Enhanced logging for manual processing
      console.log('\n🚨 URGENT: MANUAL EMAIL PROCESSING REQUIRED 🚨');
      console.log('='.repeat(60));
      console.log('📧 TO:', emailData.to.join(', '));
      console.log('📋 SUBJECT:', emailData.subject);
      console.log('👤 CONTACT:', scope.contact);
      console.log('📊 PROJECT SCOPE:', projectSummary);
      console.log('🕐 TIMESTAMP:', scope.timestamp);
      console.log('='.repeat(60));
      return { success: true }; // Continue with success flow
    }
  };

  const handleFinalSubmit = () => {
    // Compile scope
    const scope = {
      choices: userChoices,
      contact: contactForm,
      timestamp: new Date().toISOString()
    };
    
    // Generate and download PDF
    generatePDF(scope);
    
    // Send email notification
    sendEmailNotification(scope);
    
    // Add success messages to chat
    addMessage("🎉 Thank you! Your project scope has been submitted successfully!");
    
    setTimeout(() => {
      addMessage("📄 Your scope document has been downloaded and our team at contact@cartoonmango.com has been notified.");
    }, 1500);
    
    setTimeout(() => {
      addMessage("⏰ We'll review your requirements and get back to you within 24 hours with a detailed proposal. Thank you for choosing Boolean & Beyond!");
    }, 3000);
    
    // Hide contact form
    setShowContactForm(false);
  };

  const currentStep = CHAT_FLOW[chatState];

  return (
    <section
      ref={sectionRef}
      className={`${styles.heroSection} ${isExpanded ? styles.expanded : ''}`}
    >
      <div className={styles.container}>
        {/* Debug scroll indicator */}
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'red',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          zIndex: 9999,
          fontSize: '12px'
        }}>
          Scroll: {scrollY}px
        </div>

        {/* Brand Header */}
        <div
          className={styles.brandHeader}
          style={{
            transform: `translateY(${scrollY * 0.3}px) !important`,
            opacity: `${Math.max(0.3, 1 - (scrollY / 400))} !important`,
            willChange: 'transform, opacity'
          }}
        >
          <h1
            className={styles.brandTitle}
            style={{
              transform: `translateY(${scrollY * 0.1}px) !important`,
              willChange: 'transform'
            }}
          >
            <span className={styles.whiteText}>{data.brandPrefix || "We're "}</span>
            <span className={styles.gradientText}>{data.brandName || 'Boolean & Beyond'}</span>
          </h1>
          <p
            className={styles.brandSubtitle}
            style={{
              transform: `translateY(${scrollY * 0.2}px) !important`,
              opacity: `${Math.max(0.2, 1 - (scrollY / 300))} !important`,
              willChange: 'transform, opacity'
            }}
          >
            {data.subtitle || '– your technology partner for building custom applications that drive real results. From AI-powered solutions to enterprise SaaS platforms, we turn your vision into reality.'}
          </p>
        </div>

        {/* Features Grid */}
        <div
          className={styles.featuresGrid}
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            opacity: Math.max(0.4, 1 - (scrollY / 600))
          }}
        >
          {(data.features && data.features.length > 0) ? (
            data.features.map((f, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.brainIcon}>
                  {f.src ? (
                    (f.type === 'image' || f.src.match(/\.(png|jpg|jpeg|webp)$/i)) ? (
                      <img src={f.src} alt={f.title} className={styles.featureVideo} />
                    ) : (
                      <video src={f.src} autoPlay muted loop playsInline className={styles.featureVideo} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                    )
                  ) : (
                    // fallback to icon if no media src
                    f.icon ? <div className={styles.featureIcon}>{f.icon}</div> : null
                  )}
                </div>
                <h3>{f.title}</h3>
                <p>{f.description || f.desc}</p>
              </div>
            ))
          ) : (
            <>
              <div className={styles.featureCard}>
                <div className={styles.brainIcon}>
                  {"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F8df364e21dd94ffaa28f42c3ba39a273?alt=media&token=cc2bdf88-9b33-470e-afd9-83a42261156d&apiKey=1ba648a6a1694e9aa91b762fb1bf4499".includes('format=') ||
                  "/8df364e21dd94ffaa28f42c3ba39a273".match(/\.(png|jpg|jpeg|webp)$/i) ? (
                    <img
                      src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F8df364e21dd94ffaa28f42c3ba39a273?alt=media&token=cc2bdf88-9b33-470e-afd9-83a42261156d&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                      alt="AI Brain"
                      className={styles.featureVideo}
                    />
                  ) : (
                    <video
                      src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F8df364e21dd94ffaa28f42c3ba39a273?alt=media&token=cc2bdf88-9b33-470e-afd9-83a42261156d&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.featureVideo}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
                <h3>AI-Powered Development</h3>
                <p>2 features per week with AI-assisted rapid development</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.brainIcon}>
                  <video
                    src="https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F095960eb18bf4741a05eb6895d1b745e?alt=media&token=4a6e919c-8f98-4c67-af79-82d89b24139e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.featureVideo}
                    onError={(e) => {
                      console.log('Enterprise Security video failed to load');
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3>Enterprise Security</h3>
                <p>SOC2, GDPR compliance with advanced security protocols</p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.brainIcon}>
                  {"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fdf578aed8d704b0aaa1c3977ac67e448?alt=media&token=2bc5339c-514e-4bc9-a74e-21a9221de78e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499".includes('format=') ? (
                    <img
                      src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fdf578aed8d704b0aaa1c3977ac67e448?alt=media&token=2bc5339c-514e-4bc9-a74e-21a9221de78e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                      alt="Architecture"
                      className={styles.featureVideo}
                    />
                  ) : (
                    <video
                      src={"https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fdf578aed8d704b0aaa1c3977ac67e448?alt=media&token=2bc5339c-514e-4bc9-a74e-21a9221de78e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className={styles.featureVideo}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  )}
                </div>
                <h3>Scalable Architecture</h3>
                <p>Built to handle growth from startup to enterprise scale</p>
              </div>
            </>
          )}
        </div>

        {/* Chat Interface */}
        <div className={styles.chatInterface}>
          {!isExpanded ? (
            <div className={styles.inputContainer} onClick={handleChatClick}>
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
                    {!message.isUser && (
                      <div className={styles.botAvatar}>
                        <video
                          src="https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fa32d500da0c3459f9871b3d2124d0103?alt=media&token=7cea3bcb-dba3-4a28-b846-58ff43ac7d37&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="metadata"
                          className={styles.avatarVideo}
                          onError={(e) => {
                            console.warn('Video load error:', e);
                            e.target.style.display = 'none';
                            const fallback = e.target.nextElementSibling;
                            if (fallback) fallback.style.display = 'block';
                          }}
                          onLoadStart={() => console.log('Video loading started')}
                        />
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F49228ead32fd497a9eb665f597bb1d9f?format=webp&width=800"
                          alt="Chatbot"
                          className={styles.avatarVideo}
                          style={{ display: 'none' }}
                        />
                      </div>
                    )}
                    <div className={styles.messageContent}>
                      {message.text}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className={`${styles.message} ${styles.botMessage}`}>
                    <div className={styles.botAvatar}>
                      <video
                        src="https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fa32d500da0c3459f9871b3d2124d0103?alt=media&token=7cea3bcb-dba3-4a28-b846-58ff43ac7d37&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className={styles.avatarVideo}
                        onError={(e) => {
                          console.warn('Video load error:', e);
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) fallback.style.display = 'block';
                        }}
                        onLoadStart={() => console.log('Video loading started')}
                      />
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F49228ead32fd497a9eb665f597bb1d9f?format=webp&width=800"
                        alt="Chatbot"
                        className={styles.avatarVideo}
                        style={{ display: 'none' }}
                      />
                    </div>
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
              
              {messages.length > 0 && !showThankYou && (
                <div className={styles.chatOptions}>
                  {showContactForm ? (
                    <div className={styles.contactForm}>
                      <div className={styles.formGrid}>
                        <input
                          type="text"
                          placeholder="Your Name *"
                          value={contactForm.name}
                          onChange={(e) => handleContactFormChange('name', e.target.value)}
                          className={styles.formInput}
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email Address *"
                          value={contactForm.email}
                          onChange={(e) => handleContactFormChange('email', e.target.value)}
                          className={styles.formInput}
                          required
                        />
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={contactForm.company}
                          onChange={(e) => handleContactFormChange('company', e.target.value)}
                          className={styles.formInput}
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          value={contactForm.phone}
                          onChange={(e) => handleContactFormChange('phone', e.target.value)}
                          className={styles.formInput}
                        />
                      </div>
                      <button 
                        onClick={handleFinalSubmit}
                        disabled={!contactForm.name || !contactForm.email}
                        className={styles.submitScopeButton}
                      >
                        📥 Download My Scope
                      </button>
                    </div>
                  ) : currentStep?.isDownloadStep ? (
                    <div className={styles.downloadSection}>
                      <button 
                        onClick={handleDownloadScope}
                        className={styles.downloadButton}
                      >
                        📄 Download My Scope
                      </button>
                    </div>
                  ) : currentStep?.isMultiSelect ? (
                    <div>
                      <div className={`${styles.optionsGrid} ${styles.multiSelect}`}>
                        {currentStep.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => handleOptionSelect(option)}
                            className={`${styles.optionButton} ${
                              selectedFeatures.includes(option.id) ? styles.selected : ''
                            }`}
                          >
                            {selectedFeatures.includes(option.id) && '✓ '}
                            {option.label}
                          </button>
                        ))}
                      </div>
                      <div className={styles.multiSelectActions}>
                        <button 
                          onClick={handleMultiSelectContinue}
                          disabled={selectedFeatures.length === 0}
                          className={styles.continueButton}
                        >
                          Continue ({selectedFeatures.length} selected)
                        </button>
                      </div>
                    </div>
                  ) : currentStep?.options ? (
                    <div className={styles.optionsGrid}>
                      {currentStep.options.map((option) => (
                        <button
                          key={option.id}
                          onClick={() => handleOptionSelect(option)}
                          className={styles.optionButton}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              )}
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
