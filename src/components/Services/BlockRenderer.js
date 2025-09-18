import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import NumberSection from "../Home/NumberSection";
import OurClients from "../Home/OurClients";
import OurWorks from "../Home/OurWorks";
import Testimonials from "../Home/Testimonials";

import IndustryWeServe from "./IndustryWeServe";
import OurService from "./OurService";

export default function BlockRenderer({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "service-listing.our-service-section":
        return <OurService key={index} data={block} />;
      case "landing-page.portfolio-section":
        return (
          <>
            <OurWorks key={index} data={block} />
            {/* <NumberSection /> */}
          </>
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} />;
      case "landing-page.testimonials-section":
        return (
          <Testimonials
            isCustomContainer
            key={index}
            data={block}
            addTopPadding
          />
        );
      case "landing-page.insights-blogs-section":
        return <InsightsAndBlog key={index} data={block} />;
      case "service-listing.industry-we-serve":
        return <IndustryWeServe key={index} data={block} />;
      default:
        return null;
    }
  });
}
