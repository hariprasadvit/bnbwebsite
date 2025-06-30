import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { homeBannerData } from "@/components/data";

const Banner = dynamic(() => import("@/components/Home/Banner"));
const SectionList = dynamic(() => import("@/components/Home/SectionList"));
const ContactBanner = dynamic(() => import("@/components/Home/ContactBanner"));
const OurWorks = dynamic(() => import("@/components/Home/OurWorks"));
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));

export const metadata = {
  title:
    "Boolean and Beyond - Building MVPs, Enterprise Apps & Intelligent AI Solutions",
  description:
    "From MVP development to enterprise software and AI agents, Boolean and Beyond powers intelligent, future-ready solutions across industries.",
};

export default function Home() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner
          headingMaxWidth={"490px"}
          descriptionMaxWidth={"660px"}
          bannerData={homeBannerData}
        />
        <SectionList />
        <ContactBanner />
        <OurWorks />
        <NumberSection />
        <OurClients />
        <DataDriven />
        <Testimonials />
        <InsightsAndBlog />
      </div>
    </div>
  );
}
