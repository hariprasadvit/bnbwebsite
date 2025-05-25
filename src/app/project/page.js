import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import {
  mvpCardContent,
  productDevelopmentData,
  projectBannerData,
} from "@/components/data";
import OurWorks from "@/components/Projects/OurWorks";
import MvpStartUpCard from "@/components/Projects/MvpStartUpCard";
import PlatformCardContainer from "@/components/Projects/PlatformCard";
import DataDriven from "@/components/Home/DataDriven";
import ProductDevelopment from "@/components/Projects/ProductDevelopment";

const Banner = dynamic(() => import("@/components/Home/Banner"));
const BannerImage = dynamic(() =>
  import("@/components/DigitalProducts/BannerImage")
);
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));

export default function Project() {
  return (
    <div>
      <Head>
        <title>B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner bannerData={projectBannerData} hideBorder />
        <MvpStartUpCard data={mvpCardContent} />
        <PlatformCardContainer />
        <ProductDevelopment
          title={
            " We don’t just build MVPs for startups,we create clarity, ignitemomentum, and lay the foundation for scalable success."
          }
          productDevelopmentData={productDevelopmentData}
        />
        <DataDriven />
        <Testimonials />
        <InsightsAndBlog />
      </div>
    </div>
  );
}
