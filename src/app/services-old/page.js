import qs from "qs";
import Header from "@/components/Common/Header";
import BlockRenderer from "@/components/Services-old/BlockRenderer";
import { fetchAPI } from "@/lib/fetch-api";
import { getStrapiURL } from "@/lib/utils";
import dynamic from "next/dynamic";
import React from "react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

const Banner = dynamic(() => import("@/components/Projects/Banner"));

export const metadata = {
  title: "Services - Boolean & Beyond",
  description: "Explore our comprehensive range of technology services and solutions designed to transform your business.",
};

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
