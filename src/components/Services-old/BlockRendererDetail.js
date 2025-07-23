import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import OurClients from "../Home/OurClients";
import OurWorks from "../Home/OurWorks";
import Testimonials from "../Home/Testimonials";
import MvpStartUpCard from "../Projects/MvpStartUpCard";
import PlatformCardContainer from "../Projects/PlatformCard";
import ProductDevelopment from "../Projects/ProductDevelopment";
import AiSolutions from "../ServiceDetail/AiSolutions";
import OurProcess from "../ServiceDetail/OurProcess";

export default function BlockRendererDetail({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "service-listing.second-section":
        return <AiSolutions data={block} />;
      case "service-listing.our-process":
        return <OurProcess data={block} />;
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
            <OurWorks key={index} data={block} />
            {/* <NumberSection /> */}
          </>
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} addTopPadding />;
      default:
        return null;
    }
  });
}
