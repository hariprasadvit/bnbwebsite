import dynamic from "next/dynamic";
import {
  serviceDetail1BannerData,
  serviceDetailBannerImageData,
} from "@/components/data";
const Banner = dynamic(() => import("@/components/Home/Banner"));
const ServiceDetailBannerImage = dynamic(() =>
  import("@/components/ServiceDetail/ServiceDetailBannerImage")
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

export default function ServiceDetail1() {
  return (
    <div style={{ width: "100%" }}>
      <Banner
        bannerData={serviceDetail1BannerData}
        hideBorder
        contactUs={"Talk to Us"}
        descriptionMaxWidth={"945px"}
        headingMarginBottom={30}
        headingMaxWidth={"805px"}
      />
      {serviceDetailBannerImageData.map((data, index) => (
        <ServiceDetailBannerImage
          key={index}
          {...data}
          removeRightMarginTop={index === 1}
          isSecondBanner={index === 1}
        />
      ))}

      <OurWorks />
      <NumberSection />
      <OurClients />
      <Testimonials isCustomContainer />
      <InsightsAndBlog showKnowMore={false} />
      <IndustryWeServe />
    </div>
  );
}
