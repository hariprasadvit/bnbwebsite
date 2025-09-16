import qs from "qs";
import Head from "next/head";
import dynamic from "next/dynamic";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";
import { notFound } from "next/navigation";

// import BlockRendererDetail from "@/components/Services-old/BlockRendererDetail";
import { fetchAPI } from "@/lib/fetch-api";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import NewHeroSection from "@/components/Home/NewHeroSection";
import BlockRendererDetail from "@/components/Industry/BlockRendererDetail";
import IndustryContentSection from "@/components/Industry/IndustryContentSection";

// const Banner = dynamic(() => import("@/components/Projects/Banner"));

async function loader({ slug }) {
  if (!slug) {
    notFound();
  }
  noStore();
  const BASE_URL = getStrapiURL();
  const path = `/api/industry-details/${slug}`;

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
  
  // Debug: Log the data structure
  console.log('CMS Data Structure:', JSON.stringify({
    common: data?.data?.common?.map(block => ({ component: block.__component, title: block.title })),
    dynamic_section: data?.data?.dynamic_section?.map(block => ({ component: block.__component, title: block.title }))
  }, null, 2));
  
  const blocks = data?.data?.common || [];
  const pageContent = data?.data;

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
  
  // Determine if this should be a black theme based on industry
  const blackThemeIndustries = ['fantasy-gaming-for-sports-fans', 'e-sports', 'agri-tech', 'mobility'];
  const isBlackTheme = blackThemeIndustries.includes(params?.slug);
  
  
  return (
    <div>
      <div style={{ width: "100%" }}>
        <NewHeroSection data={{ brandPrefix: blockData?.pageContent?.highlighted_title || '', brandName: blockData?.pageContent?.title || '', subtitle: '', features: [] }} industryMode={true} industrySlug={params?.slug} isBlackTheme={isBlackTheme} />

        {/* Trust Pyramid Section - Our enhanced "Why Boolean and Beyond" */}
        <IndustryContentSection industrySlug={params?.slug} />

        <BlockRendererDetail
          blocks={blockData?.pageContent?.dynamic_section}
          pageTitle={
            blockData?.pageContent?.title +
            blockData?.pageContent?.highlighted_title
          }
          industrySlug={params?.slug}
        />

        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
