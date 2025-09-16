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

// Import home page sections
import HireOurExperts from "@/components/Home/HireOurExperts";
import OurWorks from "@/components/Home/OurWorks";
import NumberSection from "@/components/Home/NumberSection";
import OurClients from "@/components/Home/OurClients";
import DataDriven from "@/components/Home/DataDriven";
import Testimonials from "@/components/Home/Testimonials";
import InsightsAndBlog from "@/components/Home/InsightsAndBlog";
import HireExpertSection from "@/components/Home/HireExpertSection";

// const Banner = dynamic(() => import("@/components/Projects/Banner"));

async function loader({ slug }) {
  if (!slug) {
    notFound();
  }
  noStore();
  const BASE_URL = getStrapiURL();

  const query = qs.stringify(
    {
      pLevel: "5",
    },
    { encodeValuesOnly: true }
  );

  // Load industry data first (critical)
  const industryPath = `/api/industry-details/${slug}`;
  const industryUrl = new URL(industryPath + "?" + query, BASE_URL);

  try {
    const industryData = await fetchAPI(industryUrl.href, { method: "GET" });

    if (!industryData.data) notFound();

    const industryBlocks = industryData?.data?.common || [];
    const industryPageContent = industryData?.data;

    // Try to load home page data for sections (non-critical, with fallback)
    let homeBlocks = [];
    try {
      const homePath = `/api/landing-page`;
      const homeUrl = new URL(homePath + "?" + query, BASE_URL);
      const homeData = await fetchAPI(homeUrl.href, { method: "GET" });
      homeBlocks = homeData?.data?.common || [];
    } catch (homeError) {
      console.warn('Failed to load home page data, using fallbacks:', homeError);
      // Use static fallback data for home sections
      homeBlocks = [
        {
          __component: "landing-page.portfolio-section",
          title: "Some of our Featured Works",
          subtitle: "Our latest projects and case studies"
        },
        {
          __component: "landing-page.clients-section",
          title: "Our Clients"
        },
        {
          __component: "landing-page.insight-section",
          title: "Serving Clients Across Industries"
        },
        {
          __component: "landing-page.testimonials-section",
          title: "What Our Clients Say"
        },
        {
          __component: "landing-page.insights-blogs-section",
          title: "Insights & Blog"
        }
      ];
    }

    return { industryBlocks, industryPageContent, homeBlocks };

  } catch (error) {
    console.error('Failed to load industry data:', error);
    notFound();
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { industryPageContent } = await loader({ slug });
  return {
    title: industryPageContent?.meta_title || "B&B",
    description: industryPageContent?.meta_decscription || "B&B",
  };
}

export default async function ServiceDetails({ params }) {
  const blockData = await loader({
    slug: params?.slug,
  });

  // Determine if this should be a black theme based on industry
  const blackThemeIndustries = ['fantasy-gaming-for-sports-fans', 'e-sports', 'agri-tech', 'mobility'];
  const isBlackTheme = blackThemeIndustries.includes(params?.slug);

  // Get home page sections data with safety checks
  const portfolioSection = blockData?.homeBlocks?.find(block => block?.__component === "landing-page.portfolio-section");
  const clientsSection = blockData?.homeBlocks?.find(block => block?.__component === "landing-page.clients-section");
  const insightSection = blockData?.homeBlocks?.find(block => block?.__component === "landing-page.insight-section");
  const testimonialsSection = blockData?.homeBlocks?.find(block => block?.__component === "landing-page.testimonials-section");
  const blogsSection = blockData?.homeBlocks?.find(block => block?.__component === "landing-page.insights-blogs-section");

  return (
    <div>
      <div style={{ width: "100%" }}>
        <NewHeroSection data={{ brandPrefix: blockData?.industryPageContent?.highlighted_title || '', brandName: blockData?.industryPageContent?.title || '', subtitle: '', features: [] }} industryMode={true} industrySlug={params?.slug} isBlackTheme={isBlackTheme} />

        {/* Trust Pyramid Section - Our enhanced "Why Boolean and Beyond" */}
        <IndustryContentSection
          industrySlug={params?.slug}
          deliverData={blockData?.industryPageContent?.dynamic_section?.find(block => block.__component === "service-listing.our-process")}
        />

        {/* Home Page Sections - From "Some of our Featured Works" to Footer */}

        {/* Featured Works Section */}
        <HireOurExperts />
        {portfolioSection && (
          <OurWorks data={portfolioSection} />
        )}
        <NumberSection whiteBG />

        {/* Clients Section */}
        {clientsSection && (
          <OurClients data={clientsSection} greyBG />
        )}

        {/* Data Driven / Insight Section */}
        {insightSection && (
          <DataDriven data={insightSection} industryPage={true} industrySlug={params?.slug} />
        )}

        {/* Testimonials Section */}
        {testimonialsSection && (
          <Testimonials data={testimonialsSection} />
        )}

        {/* Insights and Blog Section */}
        {blogsSection && (
          <InsightsAndBlog data={blogsSection} />
        )}

        {/* Hire Expert Section */}
        <HireExpertSection />

        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
