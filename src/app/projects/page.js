import Header from "@/components/Common/Header";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const Banner = dynamic(() => import("@/components/Projects/Banner"));
const RepeatSection = dynamic(() =>
  import("@/components/Projects/RepeatSection")
);
const NumberSection = dynamic(() => import("@/components/Home/NumberSection"));
const OurClients = dynamic(() => import("@/components/Home/OurClients"));
const InsightsAndBlog = dynamic(() =>
  import("@/components/Home/InsightsAndBlog")
);
const DataDriven = dynamic(() => import("@/components/Home/DataDriven"));
const Testimonials = dynamic(() => import("@/components/Home/Testimonials"));

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects || B&B</title>
      </Head>
      <div style={{ width: "100%" }}>
        <Header whiteHeader active="projects" />
        <Banner />
        <RepeatSection />
        <NumberSection />
        <OurClients />
        <DataDriven />
        <Testimonials />
        <InsightsAndBlog />
      </div>
    </div>
  );
}
