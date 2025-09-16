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

const HireWithForm = dynamic(() => import("../Home/HireWithForm"));

export default function BlockRendererDetail({ blocks, pageTitle, industrySlug }) {
  if (!blocks?.length) return null;

  // Skip the black section for all industry pages
  const shouldSkipBlackSection = true;

  // Filter out old trust/why sections and insight sections - we have new Trust Pyramid
  const filteredBlocks = blocks.filter(block => {
    // Remove insight sections
    if (block.__component === "landing-page.insight-section") return false;

    // Remove AI Solutions section from industry pages
    if (block.__component === "service-listing.second-section") return false;

    // Remove What We Deliver section from industry pages (now merged into Trust Pyramid)
    if (block.__component === "service-listing.our-process") return false;

    // Remove "Some of our Impactful work" section from industry pages
    if (block.__component === "landing-page.portfolio-section") return false;

    // Remove old trust/why content sections
    if (block.__component === "landing-page.common-section-list") return false;
    if (block.__component === "landing-page.why-section") return false;
    if (block.__component === "service-listing.why-section") return false;

    // Filter by title content to catch any remaining trust sections
    const title = (block.title || "").toLowerCase();
    if (title.includes("what makes") ||
        title.includes("trustworthy") ||
        title.includes("why boolean") ||
        title.includes("expertise") ||
        title.includes("right choice")) {
      return false;
    }

    return true;
  });

  return filteredBlocks.map((block, index) => {
    switch (block.__component) {
      case "service-listing.second-section":
        return <AiSolutions data={block} whiteBG />;
      case "case-study.our-work-section":
        return (
          <>
            <OurWorks key={index} data={block} addTopPadding />
            <NumberSection disableTopPadding={true} industryPage={true} />
          </>
        );
      case "service-listing.our-process":
        return <OurProcessSmall data={block} />;
      case "services.expansion-section":
        return <ProductDevelopment key={index} data={block} />;
      case "landing-page.insight-section":
        console.log('Insight section data:', JSON.stringify(block, null, 2));
        return (
          <>
            <DataDriven
              key={index}
              data={block}
              titleMaxWidth={"305px"}
              titleMarginBottom={"70px"}
              industryPage={true}
              industrySlug={industrySlug} // Pass the industry slug to DataDriven
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
            {/* <HireWithForm pageTitle={pageTitle} /> */}
            <OurWorksBlack key={index} data={block} />
          </>
        );
      case "landing-page.clients-section":
        return <OurClients key={index} data={block} greyBG />;
      default:
        return null;
    }
  });
}
