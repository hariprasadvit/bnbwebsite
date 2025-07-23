/** @format */

import qs from "qs";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { digitalProductBannerData } from "@/components/data";
import OurWorks from "@/components/Projects/OurWorks";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";
import BlockRendererDetail from "@/components/CaseStudy/BlockRendererDetail";
import BannerImage from "@/components/DigitalProducts/BannerImage";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";

const Banner = dynamic(() => import("@/components/Home/Banner"));

async function loader({ slug }) {
  if (!slug) {
    notFound();
  }
  noStore();
  const BASE_URL = getStrapiURL();
  const path = `/api/case-study-details/${slug}`;

  const query = qs.stringify(
    {
      pLevel: "5",
    },
    { encodeValuesOnly: true }
  );

  const url = new URL(path + "?" + query, BASE_URL);
  const data = await fetchAPI(url.href, {
    method: "GET",
  });
  if (!data.data) notFound();
  const blocks = data?.data?.common || [];
  const pageContent = data?.data || {};

  return { blocks, pageContent };
}

export default async function DigitalProduct({ params }) {
  const blockData = await loader({
    slug: params?.slug,
  });
  let { banner_image } = blockData?.pageContent || {};
  const imageUrl = banner_image?.url
    ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + banner_image?.url
    : "/fallback-image.png";
  return (
    <div>
      <Head>
        <title>Boolean & Beyond</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Banner data={blockData.pageContent} hideBorder />
        <BannerImage url={imageUrl} />
        {/*<NumberSection disableTopPadding={true} />
        <Testimonials />
        <OurWorks />
        <InsightsAndBlog /> */}
        <BlockRendererDetail blocks={blockData?.pageContent?.dynamic_section} />
        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
