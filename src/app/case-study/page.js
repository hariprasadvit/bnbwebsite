import qs from "qs";
import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";
import BlockRenderer from "@/components/CaseStudy/BlockRenderer";
import { unstable_noStore as noStore } from "next/cache";

import { getStrapiURL } from "@/lib/utils";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";
import FAQ from "@/components/Common/FAQ";
import Footer from "@/components/Common/Footer";
import FooterForm from "@/components/ContactUs/FooterForm";

const Banner = dynamic(() => import("@/components/Home/Banner"));

async function loader() {
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

export async function generateMetadata() {
  const { pageContent } = await loader();
  return {
    title: pageContent?.meta_title || "B&B",
    description: pageContent?.meta_description || "B&B",
  };
}

export default async function CaseStudy() {
  noStore();
  const blockData = await loader();

  return (
    <div>
      <Head>
        <title>B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Banner
          data={blockData?.pageContent || {}}
          hideBorder
          whiteBG={true}
          highlightFirst={true}
          contactUs
        />
        <BlockRenderer blocks={blockData?.pageContent?.dynamic_section} />
        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
