import dynamic from "next/dynamic";

const DataDriven = dynamic(() => import("../Home/DataDriven"));
const InsightsAndBlog = dynamic(() => import("../Home/InsightsAndBlog"));
const NumberSection = dynamic(() => import("../Home/NumberSection"));
const OurClients = dynamic(() => import("../Home/OurClients"));
const Testimonials = dynamic(() => import("../Home/Testimonials"));
const OurWorksBlack = dynamic(() => import("../Home/OurWorks"));
const OurWorks = dynamic(() => import("../Projects/OurWorks"));
const ProductDevelopment = dynamic(() =>
  import("../Projects/ProductDevelopment")
);
const AiSolutions = dynamic(() => import("../ServiceDetail/AiSolutions"));
const OurProcessSmall = dynamic(() =>
  import("../ServiceDetail/OurProcessSmall")
);
const HireOurExperts = dynamic(() => import("../Home/HireOurExperts"));

export default function BlockRendererDetail({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "service-listing.second-section":
        return <AiSolutions data={block} />;
      case "case-study.our-work-section":
        return (
          <>
            <OurWorks key={index} data={block} addTopPadding />
            <NumberSection disableTopPadding={true} />
          </>
        );
      case "service-listing.our-process":
        return <OurProcessSmall data={block} />;
      case "services.expansion-section":
        return <ProductDevelopment key={index} data={block} />;
      case "landing-page.insight-section":
        return (
          <>
            <DataDriven
              key={index}
              data={block}
              titleMaxWidth={"305px"}
              titleMarginBottom={"70px"}
            />
          </>
        );
      case "landing-page.testimonials-section":
        return <Testimonials key={index} data={block} />;
      case "landing-page.insights-blogs-section":
        return <InsightsAndBlog key={index} data={block} addPaddingTop />;
      case "landing-page.portfolio-section":
        return (
          <>
            <HireOurExperts />
            <OurWorksBlack key={index} data={block} />
          </>
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} />;
      default:
        return null;
    }
  });
}
