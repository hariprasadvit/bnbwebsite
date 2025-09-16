import dynamic from "next/dynamic";
import qs from "qs";
import Header from "@/components/Common/Header";
import { unstable_noStore as noStore } from "next/cache";
import { getStrapiURL } from "@/lib/utils";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";
import BlockRenderer from "@/components/Services/BlockRenderer";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import OurServicesSection from "@/components/Services/OurServicesSection";

const NewHeroSection = dynamic(() => import("@/components/Home/NewHeroSection"));

async function loader() {
  noStore();
  const BASE_URL = getStrapiURL();
  const path = "/api/service-listing";

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
    description: pageContent?.meta_decscription || "B&B",
  };
}

export default async function ServiceListing() {
  const blockData = await loader();
  const { pageContent: data = {} } = blockData;
  return (
    <div style={{ width: "100%" }}>
      <NewHeroSection data={{ brandPrefix: data?.highlight || '', brandName: data?.heading || data?.title || '', subtitle: data?.subheading || data?.description || '' }} />
      <BlockRenderer blocks={data?.dynamic_zone} />
      <FAQ />
      <FooterForm />
    </div>
  );
}
