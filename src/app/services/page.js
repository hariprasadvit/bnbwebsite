import dynamic from "next/dynamic";
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
const OurWorks = dynamic(() => import("@/components/Projects/OurWorks"));

export default function Projects() {
  return (
    <div style={{ width: "100%" }}>
      <Banner />
      <RepeatSection />
      <OurWorks />
      <NumberSection disableTopPadding />
      <OurClients />
      <DataDriven />
      <Testimonials />
      <InsightsAndBlog />
    </div>
  );
}
