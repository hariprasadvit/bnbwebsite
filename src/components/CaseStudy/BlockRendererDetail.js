import React from "react";
import OverviewCard from "../DigitalProducts/OverviewCard";
import DataDriven from "../Home/DataDriven";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import NumberSection from "../Home/NumberSection";
import OurClients from "../Home/OurClients";
import Testimonials from "../Home/Testimonials";
import OurWorks from "../Projects/OurWorks";
import ListCardContainer from "./ListCard";

export default function BlockRendererDetail({ blocks }) {
  if (!blocks?.length) return null;

  const MainSection = ({ data } = {}) => {
    return (
      <>
        {data?.detail_card?.map((_item, index) => (
          <React.Fragment key={index}>
            <OverviewCard key={index} data={_item} />
          </React.Fragment>
        ))}
      </>
    );
  };

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "case-study.overview-section":
        return <MainSection key={index} data={block} />;
      case "case-study.our-work-section":
        return <OurWorks key={index} data={block} />;
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} addTopPadding={true} />;
      case "landing-page.insight-section":
        return (
          <>
            <DataDriven key={index} data={block} whiteBg />;
            <NumberSection disableTopPadding={true} />
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
