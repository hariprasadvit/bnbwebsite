import OverviewCard from "../DigitalProducts/OverviewCard";
import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import NumberSection from "../Home/NumberSection";
import OurClients from "../Home/OurClients";
import Testimonials from "../Home/Testimonials";
import MvpStartUpCard from "../Projects/MvpStartUpCard";
import OurWorks from "../Projects/OurWorks";
import PlatformCardContainer from "../Projects/PlatformCard";
import ProductDevelopment from "../Projects/ProductDevelopment";

export default function BlockRendererDetail({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "services.approach-section":
        return <MvpStartUpCard data={block} />;
      case "services.listing-card":
        return <PlatformCardContainer key={index} data={block} />;
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
      default:
        return null;
    }
  });
}
