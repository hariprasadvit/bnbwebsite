import qs from "qs";
import dynamic from "next/dynamic";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

// import BlockRendererDetail from "@/components/Services-old/BlockRendererDetail";
import { fetchAPI } from "@/lib/fetch-api";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import Banner from "@/components/Home/Banner";
import BlockRendererDetail from "@/components/Industry/BlockRendererDetail";

// const Banner = dynamic(() => import("@/components/Projects/Banner"));

async function loader({ slug }) {
  if (!slug) {
    notFound();
  }
  noStore();
  const BASE_URL = getStrapiURL();
  const path = `/api/technologies/${slug}`;

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
    description: pageContent?.meta_decscription || "B&B",
  };
}

export default async function ServiceDetails({ params }) {
  const blockData = await loader({
    slug: params?.slug,
  });
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Banner
          data={blockData?.pageContent || {}}
          hideBorder
          whiteBG={true}
          highlightFirst={true}
          contactUs
        />
        <BlockRendererDetail
          blocks={blockData?.pageContent?.dynamic_section}
          pageTitle={
            blockData?.pageContent?.title +
            blockData?.pageContent?.highlighted_title
          }
        />

        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
