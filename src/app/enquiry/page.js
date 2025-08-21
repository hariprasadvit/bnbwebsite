import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/HireForm";
import AIpoweredSection from "@/components/Enquiry/AIpoweredSection";
import CardSection from "@/components/Enquiry/CardSection";
import ChatSection from "@/components/Enquiry/ChatSection";
import WhyChoose from "@/components/Enquiry/WhyChoose";
import Banner from "@/components/Projects/Banner";
import React from "react";

export default function Enquiry() {
  return (
    <div
      style={{
        background: "#f2f2f2",
      }}
    >
      <Banner
        hightlighted_text={"WITH SMART TECHNOLOGY"}
        description={
          "We help businesses turn bold ideas into functional, user-validated MVPs through a thoughtful, data-driven strategy. From initial discovery to launch, our approach ensures every feature supports your core value proposition and business goals."
        }
        title={"TRANSFORM YOUR BUSINESS "}
        centerText
        hideScroll
        removevhHeight
      />
      <CardSection />
      <ChatSection />
      <AIpoweredSection />
      <WhyChoose />
      <FAQ />
      <FooterForm />
    </div>
  );
}
