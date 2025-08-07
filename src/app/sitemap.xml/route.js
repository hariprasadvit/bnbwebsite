// app/sitemap.xml/route.js
export async function GET() {
  const baseUrl = "https://www.booleanbeyond.com";

  const paths = [
    "/",
    "/case-study",
    "/case-study/leveling-up-fan-engagement-with-a-real-time-fantasy-sports-platform",
    "/case-study/building-a-mobile-first-news-experience-for-the-subscription",
    "/case-study/revolutionizing-wholesale-shopping-with-a-b2b-ecommerce-platform",
    "/case-study/scaling-a-real-time-multi-sport-fantasy-gaming-platform-gaming-platform-with-blockchain-and-social-features",
    "/case-study/launching-a-premium-electric-cab-service-with-connected-features",
    "/case-study/empowering-food-businesses-with-comprehensive-nutrition-intelligence",
    "/case-study/building-a-next-gen-social-network-for-gamers-and-esports-enthusiasts",
    "/case-study/transforming-corporate-oversight-with-a-centralized-mis-portal",
    "/case-study/streamlining-procurement-for-b2-b-buyers-with-a-unified-digital-platform",
    "/case-study/digital-first-reinventing-community-living-with-a-unified-resident-app",
    "/services",
    "/services/designing-ai-that-thinks-acts-and-delivers-agentic-ai-services-for-autonomous-business-outcomes",
    "/services/building-platforms-that-scale-with-business-b2b-ana-enterprise-application-development-services",
    "/services/build-smarter-scale-faster-ship-better-custom-application-development-for-real-world-impact",
    "/services/accelerate-product-launch-with-purpose-built-mvp",
    "/services/engineer-for-growth-design-for-people",
    "/services/ai-ready-e-commerce-and-marketplace-mvp",
    "/services/move-from-concept-to-clarity-fast",
    "/services/unify-automate-accelerate-growth-connected-business-systems-for-smarter-operations",
    "/services/orchestrate-operations-everywhere-custom-web-and-desktop-apps-for-seamless-business-execution",
    "/services/empower-operations-connected-and-streamlined",
    "/services/great-decisions-are-built-with-clarity-custom-dashboards-and-reports-for-real-time-insight",
    "/services/great-intelligence-is-built-with-context-ai-agents-powered-by-knowledge-graphs-for-smarter-automation",
    "/services/great-answers-are-built-with-context-rag-pipelines-for-ai-grounded-in-real-time-knowledge",
    "/services/great-customer-journeys-are-built-on-seamless-crm-powered-workflow",
    "/services/great-outcomes-are-built-with-insight-big-data-analytics-to-power-smarter-decisions",
    "/about",
    "/contact-us",
    "/blog/discovery-engine-for-gaming-social-platform",
    "/blog/ensuring-integrity-in-gaming-with-blockchain",
    "/blog/efficient-vehicle-log-management-with-anpr-and-ml",
    "/industry/future-ready-banking-tech-solutions",
    "/industry/fantasy-gaming-for-sports-fans",
    "/industry/live-sports-innovation-through-technology",
    "/industry/smart-technology-solutions-for-agriculture",
    "/industry/custom-travel-platforms-that-connect",
    "/industry/simplifying-property-management-with-technology",
    "/industry/enhancing-e-commerce-for-modern-retailers",
    "/industry/innovative-tech-for-competitive-gaming",
    "/industry/news-and-media-application-deployment",
    "/industry/powering-mobility-with-intelligent-solutions",
    "/industry/powering-digital-classrooms-with-technology",
    "/industry/improving-healthcare-through-custom-tech",
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (path) => `<url>
  <loc>${baseUrl}${path}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
