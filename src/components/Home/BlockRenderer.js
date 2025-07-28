import Banner from "./Banner";
import DataDriven from "./DataDriven";
import HireOurExperts from "./HireOurExperts";
import InsightsAndBlog from "./InsightsAndBlog";
import NumberSection from "./NumberSection";
import OurClients from "./OurClients";
import OurWorks from "./OurWorks";
import SectionList from "./SectionList";
import Testimonials from "./Testimonials";

export default function BlockRenderer({ blocks }) {
  if (!blocks?.length) return null;

  return blocks.map((block, index) => {
    switch (block.__component) {
      case "landing-page.hero-section":
        return (
          <Banner
            key={index}
            data={block}
            headingMaxWidth={"490px"}
            descriptionMaxWidth={"660px"}
            hideBorder
            whiteBG
          />
        );
      case "landing-page.common-section-list":
        return <SectionList key={index} data={block} />;
      case "landing-page.portfolio-section":
        return (
          <>
            <HireOurExperts />
            <OurWorks key={index} data={block} />
            <NumberSection whiteBG />
          </>
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} greyBG />;
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
