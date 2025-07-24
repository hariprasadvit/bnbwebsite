import qs from "qs";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

import BlockRendererDetail from "@/components/Services-old/BlockRendererDetail";
import { fetchAPI } from "@/lib/fetch-api";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";

const Banner = dynamic(() => import("@/components/Projects/Banner"));

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
      <Head>
        <title>B&B</title>
      </Head>
      {console.log(blockData?.pageContent?.dynamic_section, "pageContent")}
      <div style={{ width: "100%" }}>
        <Banner
          // data={blockData?.pageContent}
          // hideBorder
          // contactUs
          // highlightFirst
          // descriptionMaxWidth={"828px"}
          // headingMarginBottom={30}
          title={blockData?.pageContent?.title}
          description={blockData?.pageContent?.description}
          hightlighted_text={blockData?.pageContent?.highlighted_title}
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
        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
