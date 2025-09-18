import qs from "qs";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

import BlockRendererDetail from "@/components/Services-old/BlockRendererDetail";
import { fetchAPI } from "@/lib/fetch-api";

const Banner = dynamic(() => import("@/components/Home/Banner"));

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { pageContent } = await loader({ slug });
  return {
    title: pageContent?.meta_title || "Service Details - Boolean & Beyond",
    description: pageContent?.meta_description || "Explore our detailed service offerings and solutions.",
  };
}

async function loader({ slug }) {
  if (!slug) {
    notFound();
  }
  noStore();
  const BASE_URL = getStrapiURL();
  const path = `/api/service-details/${slug}`;

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

export default async function ServiceDetails({ params }) {
  const blockData = await loader({
    slug: params?.slug,
  });
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Banner
          data={blockData?.pageContent}
          hideBorder
          contactUs={blockData?.pageContent?.button}
          highlightFirst
          descriptionMaxWidth={"828px"}
          headingMarginBottom={30}
        />
        {/* <MvpStartUpCard data={mvpCardContent} />
        <PlatformCardContainer platformCards={servicePlatformCards} />
        <ProductDevelopment
          title={
            " We don’t just build MVPs for startups,we create clarity, ignitemomentum, and lay the foundation for scalable success."
          }
          productDevelopmentData={productDevelopmentData}
        />
        <DataDriven titleMaxWidth={"305px"} titleMarginBottom={"70px"} />
        <Testimonials />
        <InsightsAndBlog /> */}
        <BlockRendererDetail blocks={blockData?.pageContent?.dynamic_section} />
      </div>
    </div>
  );
}
