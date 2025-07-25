import qs from "qs";
import Header from "@/components/Common/Header";
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

export default async function Home(props) {
  const blockData = await loader();
  return (
    <div>
      {console.log(
        blockData?.blocks[1].common_section_list[0].bulletins[0],
        "asdf"
      )}
      <div style={{ width: "100%" }}>
        <BlockRenderer blocks={blockData.blocks} />
        <FAQ />
        <FooterForm />
      </div>
    </div>
  );
}
