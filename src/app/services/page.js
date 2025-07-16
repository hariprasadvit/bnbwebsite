import dynamic from "next/dynamic";
import qs from "qs";
import { serviceListingBannerData } from "@/components/data";
import Header from "@/components/Common/Header";
import { unstable_noStore } from "next/cache";
import { getStrapiURL } from "@/lib/utils";
import { fetchAPI } from "@/lib/fetch-api";
import { notFound } from "next/navigation";
import BlockRenderer from "@/components/Services/BlockRenderer";

const Banner = dynamic(() => import("@/components/Home/Banner"));
const OurService = dynamic(() => import("@/components/Services/OurService"));
const OurWorks = dynamic(() => import("@/components/Home/OurWorks"));
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const IndustryWeServe = dynamic(() =>
  import("@/components/Services/IndustryWeServe")
);

async function loader() {
  unstable_noStore();
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

export default async function ServiceListing() {
  const blockData = await loader();
  const { pageContent: data = {} } = blockData;
  return (
    <div style={{ width: "100%" }}>
      <Header active={"services"} />
      {console.log(data, "data whole")}
      <Banner
        data={data}
        highlightFirst
        hideBorder
        descriptionMaxWidth={"828px"}
        headingMarginBottom={30}
        headingMaxWidth={"730px"}
        showScroll={false}
        contactUs
      />
      <BlockRenderer blocks={data?.dynamic_zone} />
    </div>
  );
}
