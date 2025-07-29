// app/page.js or app/(group)/page.js

import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { fetchAPI } from "@/lib/fetch-api";
import BlockRenderer from "@/components/Home/BlockRenderer";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";

async function loader() {
  noStore();
  const BASE_URL = getStrapiURL();
  const path = "/api/landing-page";

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

export async function generateMetadata() {
  const { pageContent } = await loader();
  return {
    title: pageContent?.meta_title || "B&B",
    description: pageContent?.meta_description || "B&B",
  };
}

export default async function Home() {
  const { blocks } = await loader();

  return (
    <div style={{ width: "100%" }}>
      <BlockRenderer blocks={blocks} />
      <FAQ />
      <FooterForm />
    </div>
  );
}
