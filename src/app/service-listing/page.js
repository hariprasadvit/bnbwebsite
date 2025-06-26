import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { serviceListingBannerData } from "@/components/data";
const Banner = dynamic(() => import("@/components/Home/Banner"));
const OurService = dynamic(() =>
  import("@/components/ServiceListing/OurService")
);
const OurWorks = dynamic(() => import("@/components/Home/OurWorks"));
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const IndustryWeServe = dynamic(() =>
  import("@/components/ServiceListing/IndustryWeServe")
);

export default function ServiceListing() {
  return (
    <div>
      <Head>
        <title>B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner
          bannerData={serviceListingBannerData}
          hideBorder
          contactUs={"Talk to Us"}
          descriptionMaxWidth={"828px"}
          headingMarginBottom={30}
          headingMaxWidth={"730px"}
        />
        <OurService />
        <OurWorks />
        <NumberSection />
        <OurClients />
        <Testimonials isCustomContainer />
        <InsightsAndBlog showKnowMore={false} />
        <IndustryWeServe />
      </div>
    </div>
  );
}
