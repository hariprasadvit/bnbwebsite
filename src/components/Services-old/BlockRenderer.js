import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import NumberSection from "../Home/NumberSection";
import OurClients from "../Home/OurClients";
import Testimonials from "../Home/Testimonials";
import OurWorks from "../Projects/OurWorks";
import RepeatSection from "../Projects/RepeatSection";

export default function BlockRenderer({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "services.services-section":
        return <RepeatSection key={index} data={block} />;
      case "case-study.our-work-section":
        return (
          <>
            <OurWorks key={index} data={block} />
            <NumberSection disableTopPadding />
          </>
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} />;
      case "landing-page.insight-section":
        return <DataDriven key={index} data={block} />;
      case "landing-page.testimonials-section":
        return <Testimonials key={index} data={block} />;
      case "landing-page.insights-blogs-section":
        return <InsightsAndBlog key={index} data={block} />;
      default:
        return null;
    }
  });
}
