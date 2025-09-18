import dynamic from "next/dynamic";
import { digitalProductBannerData } from "@/components/data";
const Banner = dynamic(() => import("@/components/Home/Banner"));
const BannerImage = dynamic(() =>
  import("@/components/DigitalProducts/BannerImage")
);
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const OurWorks = dynamic(() => import("@/components/Projects/OurWorks"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);

export default function CaseStudyDetails() {
  return (
    <div style={{ width: "100%" }}>
      <Banner
        headingMaxWidth={"555px"}
        descriptionMaxWidth={"650px"}
        bannerData={digitalProductBannerData}
        hideBorder
      />
      <BannerImage />
      <NumberSection disableTopPadding={true} />
      <Testimonials testimonialPaddingTop={0} />
      <OurWorks />
      <InsightsAndBlog />
    </div>
  );
}
