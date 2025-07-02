import Head from "next/head";
import dynamic from "next/dynamic";
const Banner = dynamic(() => import("@/components/Home/Banner"));
const ListCardContainer = dynamic(() =>
  import("@/components/CaseStudy/ListCard")
);
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
import { projectBannerData } from "@/components/data";
import { caseStudyPlatformCards } from "@/components/CaseStudy/ListCard/platformCardData";

export default function CaseStudy() {
  return (
    <div style={{ width: "100%" }}>
      <Banner
        bannerData={projectBannerData}
        hideBorder
        contactUs={"Talk to Us"}
        whiteBG={true}
        headingMarginBottom={30}
      />
      <ListCardContainer platformCards={caseStudyPlatformCards} />
      <OurClients />
      <DataDriven />
      <Testimonials />
      <InsightsAndBlog />
    </div>
  );
}
