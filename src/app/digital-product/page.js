/** @format */

import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { digitalProductBannerData } from "@/components/data";
import OurWorks from "@/components/Projects/OurWorks";

const Banner = dynamic(() => import("@/components/Home/Banner"));
const BannerImage = dynamic(() =>
  import("@/components/DigitalProducts/BannerImage")
);
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));

export default function DigitalProduct() {
  return (
    <div>
      <Head>
        <title>Boolean & Beyond</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner bannerData={digitalProductBannerData} hideBorder />
        <BannerImage />
        <NumberSection disableTopPadding={true} />
        <Testimonials />
        <OurWorks />
        <InsightsAndBlog />
      </div>
    </div>
  );
}
