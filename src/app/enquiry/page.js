import qs from "qs";
import { fetchAPI } from "@/lib/fetch-api";

import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/HireForm";
import AIpoweredSection from "@/components/Enquiry/AIpoweredSection";
import BlockRenderer from "@/components/Enquiry/BlockRenderer";
import CardSection from "@/components/Enquiry/CardSection";
import ChatSection from "@/components/Enquiry/ChatSection";
import WhyChoose from "@/components/Enquiry/WhyChoose";
import Banner from "@/components/Projects/Banner";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { getStrapiURL } from "@/lib/utils";

async function loader() {
  noStore();
  const BASE_URL = getStrapiURL();
  const path = "/api/landing-page";

  const query = qs.stringify(
    {
      pLevel: "5",
    },
    { encodeValuesOnly: true }
  );

  const url = new URL(path + "?" + query, BASE_URL);
  const data = await fetchAPI(url.href, {
    method: "GET",
  });

  if (!data.data) notFound();

  const blocks = data?.data?.common || [];
  const pageContent = data?.data || {};

  return { blocks, pageContent };
}

export default async function Enquiry() {
  const { blocks } = await loader();
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
      <BlockRenderer blocks={blocks} />
      <FAQ />
      <FooterForm />
    </div>
  );
}
