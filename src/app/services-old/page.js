import qs from "qs";
import Header from "@/components/Common/Header";
import BlockRenderer from "@/components/Services-old/BlockRenderer";
import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/utils";
import dynamic from "next/dynamic";
import React from "react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import Head from "next/head";

const Banner = dynamic(() => import("@/components/Projects/Banner"));

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
        <Header whiteHeader active="services" />
        <Banner
          title={data?.title}
          description={data?.description}
          hightlighted_text={data?.highlighted_title}
        />
        <BlockRenderer blocks={data?.dynamic_section} />
      </div>
    </div>
  );
}
