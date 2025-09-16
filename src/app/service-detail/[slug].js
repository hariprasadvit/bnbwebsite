import dynamic from "next/dynamic";
import {
  processData,
  serviceDetailBannerData,
  solutionData,
} from "@/components/data";
const NewHeroSection = dynamic(() => import("@/components/Home/NewHeroSection"));
const AiSolutions = dynamic(() =>
  import("@/components/ServiceDetail/AiSolutions")
);
const OurProcess = dynamic(() =>
  import("@/components/ServiceDetail/OurProcess")
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

export default function ServiceDetail() {
  return (
    <div style={{ width: "100%" }}>
      <NewHeroSection data={{ brandPrefix: serviceDetailBannerData.highlight, brandName: serviceDetailBannerData.heading, subtitle: serviceDetailBannerData.subheading }} />
      <AiSolutions solutionData={solutionData} />
      <OurProcess processData={processData} />
      <OurWorks />
      <NumberSection />
      <OurClients />
      <Testimonials isCustomContainer />
      <InsightsAndBlog showKnowMore={false} />
      <IndustryWeServe />
    </div>
  );
}
