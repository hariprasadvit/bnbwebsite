import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import OurClients from "../Home/OurClients";
import Testimonials from "../Home/Testimonials";
import ListCardContainer from "./ListCard";

export default function BlockRenderer({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "case-study.dynamic-section":
        return (
          <ListCardContainer
            key={index}
            data={block?.case_study_listing_card || []}
            headingMarginBottom={30}
          />
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} />;
      case "landing-page.insight-section":
        return (
          <DataDriven
            key={index}
            data={block}
            titleMaxWidth={"305px"}
            titleMarginBottom={"70px"}
          />
        );
      case "landing-page.testimonials-section":
        return <Testimonials key={index} data={block} />;
      case "landing-page.insights-blogs-section":
        return <InsightsAndBlog key={index} data={block} />;
      default:
        return null;
    }
  });
}
