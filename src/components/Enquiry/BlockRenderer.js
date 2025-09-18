import DataDriven from "../Home/DataDriven";
import HireWithForm from "../Home/HireWithForm";
import InsightsAndBlog from "../Home/InsightsAndBlog";
import OurClients from "../Home/OurClients";
import OurWorks from "../Home/OurWorks";
import Testimonials from "../Home/Testimonials";

export default function BlockRenderer({ blocks }) {
  if (!blocks?.length) return null;

  // Define the order you want
  const renderOrder = [
    "landing-page.clients-section",
    "landing-page.insight-section",
    "landing-page.testimonials-section",
    "landing-page.portfolio-section",
    "landing-page.insights-blogs-section",
  ];

  return renderOrder.map((type, index) => {
    const block = blocks.find((b) => b.__component === type);
    if (!block) return null;

    switch (block.__component) {
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} />;
      case "landing-page.portfolio-section":
        return (
          <>
            <HireWithForm />
            <OurWorks key={index} data={block} />
          </>
        );
      case "landing-page.testimonials-section":
        return (
          <div key={index}>
            <Testimonials data={block} />
          </div>
        );
      case "landing-page.insights-blogs-section":
        return <InsightsAndBlog key={index} data={block} addPaddingTop />;
      case "landing-page.insight-section":
        return <DataDriven key={index} data={block} />;
      default:
        return null;
    }
  });
}
