import dynamic from "next/dynamic";
import {
  mvpCardContent,
  productDevelopmentData,
  projectBannerData,
} from "@/components/data";
import { servicePlatformCards } from "@/components/CaseStudy/ListCard/platformCardData";
const Banner = dynamic(() => import("@/components/Home/Banner"), {
  ssr: false,
});
const MvpStartUpCard = dynamic(
  () => import("@/components/Projects/MvpStartUpCard"),
  {
    ssr: false,
  }
);
const PlatformCardContainer = dynamic(
  () => import("@/components/Projects/PlatformCard"),
  {
    ssr: false,
  }
);
const ProductDevelopment = dynamic(
  () => import("@/components/Projects/ProductDevelopment"),
  {
    ssr: false,
  }
);
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"), {
  ssr: false,
});
const InsightsAndBlog = dynamic(
  () => import("@/components/Home/InsightsAndBlog"),
  {
    ssr: false,
  }
);

export default function ServiceDetails() {
  return (
    <div style={{ width: "100%" }}>
      <Banner
        bannerData={projectBannerData}
        hideBorder
        contactUs={"Talk to Us"}
        descriptionMaxWidth={"828px"}
        headingMarginBottom={30}
      />
      <MvpStartUpCard data={mvpCardContent} />
      <PlatformCardContainer platformCards={servicePlatformCards} />
      <ProductDevelopment
        title={
          " We don’t just build MVPs for startups,we create clarity, ignitemomentum, and lay the foundation for scalable success."
        }
        productDevelopmentData={productDevelopmentData}
      />
      <DataDriven titleMaxWidth={"305px"} titleMarginBottom={"70px"} />
      <Testimonials />
      <InsightsAndBlog />
    </div>
  );
}
