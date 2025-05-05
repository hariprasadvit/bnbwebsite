import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "@/components/Common/Header";

const Banner = dynamic(() => import("@/components/Home/Banner"));
const SectionList = dynamic(() => import("@/components/Home/SectionList"));
const OurWorks = dynamic(() => import("@/components/Home/OurWorks"));
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));

export default function Home() {
  return (
    <div>
      <Head>
        <title>B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header />
        <Banner />
        <SectionList />
        <OurWorks />
        <NumberSection />
        <OurClients />
        <DataDriven />
        <Testimonials />
        <InsightsAndBlog />
      </div>
    </div>
  );
}
