import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { projectBannerData } from "@/components/data";
import DataDriven from "@/components/Home/DataDriven";
import OurClients from "@/components/Home/OurClients";
import ListCardContainer from "@/components/CaseStudy/ListCard";
import { caseStudyPlatformCards } from "@/components/CaseStudy/ListCard/platformCardData";

const Banner = dynamic(() => import("@/components/Home/Banner"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));

export default function CaseStudy() {
  return (
    <div>
      <Head>
        <title>B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner
          bannerData={projectBannerData}
          hideBorder
          contactUs={"Talk to Us"}
          whiteBG={true}
        />
        <ListCardContainer platformCards={caseStudyPlatformCards} />
        <OurClients />
        <DataDriven />
        <Testimonials />
        <InsightsAndBlog />
      </div>
    </div>
  );
}
