/** @format */

import qs from "qs";
import dynamic from "next/dynamic";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";
const BlockRendererDetail = dynamic(() =>
  import("@/components/CaseStudy/BlockRendererDetail")
);
const BannerImage = dynamic(() =>
  import("@/components/DigitalProducts/BannerImage")
);
const FAQ = dynamic(() => import("@/components/Common/FAQ"));
const FooterForm = dynamic(() => import("@/components/ContactUs/FooterForm"));

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

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { pageContent } = await loader({ slug });
  return {
    title: pageContent?.meta_title || "B&B",
    description: pageContent?.meta_desc || "B&B",
  };
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
      <div style={{ width: "100%" }}>
        <Banner
          data={blockData.pageContent}
          descriptionMaxWidth={"660px"}
          hideBorder
        />
        <BannerImage url={imageUrl} />
        <BlockRendererDetail blocks={blockData?.pageContent?.dynamic_section} />
        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
