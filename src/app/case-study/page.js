import qs from "qs";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import BlockRenderer from "@/components/CaseStudy/BlockRenderer";
import { unstable_noStore as noStore } from "next/cache";

import { getStrapiURL } from "@/lib/utils";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";

const Banner = dynamic(() => import("@/components/Home/Banner"));

async function loader() {
  noStore();
  const BASE_URL = getStrapiURL();
  const path = "/api/case-study";

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

export default async function CaseStudy() {
  const blockData = await loader();

  return (
    <div>
      <Head>
        <title>B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner
          data={blockData?.pageContent || {}}
          hideBorder
          contactUs={blockData?.pageContent?.button_text}
          whiteBG={true}
          highlightFirst={true}
        />
        <BlockRenderer blocks={blockData?.pageContent?.dynamic_section} />
      </div>
    </div>
  );
}
