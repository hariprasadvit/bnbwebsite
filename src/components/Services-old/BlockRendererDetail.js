import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import NumberSection from "../Home/NumberSection";
import OurClients from "../Home/OurClients";
import Testimonials from "../Home/Testimonials";
import OurWorksBlack from "../Home/OurWorks";
import OurWorks from "../Projects/OurWorks";
import ProductDevelopment from "../Projects/ProductDevelopment";
import AiSolutions from "../ServiceDetail/AiSolutions";
import OurProcessSmall from "../ServiceDetail/OurProcessSmall";
import HireOurExperts from "../Home/HireOurExperts";

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
        return <InsightsAndBlog key={index} data={block} />;
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
