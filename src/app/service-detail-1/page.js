import dynamic from "next/dynamic";
import {
  serviceDetail1BannerData,
  serviceDetailBannerImageData,
} from "@/components/data";
const NewHeroSection = dynamic(() => import("@/components/Home/NewHeroSection"));
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
  import("@/components/Services/IndustryWeServe")
);

export default function ServiceDetail1() {
  return (
    <div style={{ width: "100%" }}>
      <NewHeroSection data={{ brandPrefix: serviceDetail1BannerData.highlight, brandName: serviceDetail1BannerData.heading, subtitle: serviceDetail1BannerData.subheading }} />
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
