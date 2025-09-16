import dynamic from "next/dynamic";
import qs from "qs";
import Header from "@/components/Common/Header";
import { unstable_noStore as noStore } from "next/cache";
import { getStrapiURL } from "@/lib/utils";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";
import BlockRenderer from "@/components/Services/BlockRenderer";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import OurServicesSection from "@/components/Services/OurServicesSection";

const NewHeroSection = dynamic(() => import("@/components/Home/NewHeroSection"));

async function loader() {
  noStore();
  const BASE_URL = getStrapiURL();
  const path = "/api/service-listing";

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

export async function generateMetadata() {
  const { pageContent } = await loader();

  return {
    title: pageContent?.meta_title || "B&B",
    description: pageContent?.meta_decscription || "B&B",
  };
}

export default async function ServiceListing() {
  const blockData = await loader();
  const { pageContent: data = {} } = blockData;
  return (
    <div style={{ width: "100%" }}>
      <NewHeroSection data={{
        brandPrefix: "Our",
        brandName: "Services",
        subtitle: "Comprehensive technology solutions designed to transform your business and accelerate growth through innovative development, AI integration, and enterprise-grade applications.",
        features: [
          {
            title: "Custom Application Development",
            description: "End-to-end custom software development tailored to your business needs",
            src: "https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F8df364e21dd94ffaa28f42c3ba39a273?alt=media&token=cc2bdf88-9b33-470e-afd9-83a42261156d&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"
          },
          {
            title: "Agentic AI Services",
            description: "Intelligent AI agents that understand, reason, and act autonomously",
            src: "https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F095960eb18bf4741a05eb6895d1b745e?alt=media&token=4a6e919c-8f98-4c67-af79-82d89b24139e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"
          },
          {
            title: "B2B and Enterprise Application Development",
            description: "Enterprise-grade solutions for complex business workflows",
            src: "https://cdn.builder.io/o/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fdf578aed8d704b0aaa1c3977ac67e448?alt=media&token=2bc5339c-514e-4bc9-a74e-21a9221de78e&apiKey=1ba648a6a1694e9aa91b762fb1bf4499"
          }
        ]
      }} />
      <OurServicesSection />
      <BlockRenderer blocks={data?.dynamic_zone} />
      <FAQ />
      <FooterForm />
    </div>
  );
}
