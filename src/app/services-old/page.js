import qs from "qs";
import Header from "@/components/Common/Header";
import BlockRenderer from "@/components/Services/BlockRenderer";
import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/utils";
import dynamic from "next/dynamic";
import React from "react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import Head from "next/head";

const Banner = dynamic(() => import("@/components/Projects/Banner"));
const RepeatSection = dynamic(() =>
  import("@/components/Projects/RepeatSection")
);
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const OurWorks = dynamic(() => import("@/components/Projects/OurWorks"));

async function loader() {
  noStore();
  const BASE_URL = getStrapiURL();
  const path = "/api/service";

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

export default async function Projects() {
  const blockData = await loader();
  const { pageContent: data = {} } = blockData;
  return (
    <div>
      <Head>
        <title>Projects || B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        {console.log(data, "++")}
        <Header whiteHeader active="services" />
        <Banner
          title={data?.title}
          description={data?.description}
          hightlighted_text={data?.highlighted_title}
        />
        {/* <RepeatSection />
        <OurWorks />
        <NumberSection disableTopPadding />
        <OurClients />
        <DataDriven />
        <Testimonials />
        <InsightsAndBlog /> */}
        <BlockRenderer blocks={data?.dynamic_section} />
      </div>
    </div>
  );
}
