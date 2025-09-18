/** @format */

import BannerTechLeader from "@/components/Aboutus/Banner";
import CoreContent from "@/components/Aboutus/Core";
import SuccessCard from "@/components/Aboutus/SuccessCard";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";

export const generateMetadata = () => {
  return {
    title: "About Boolean & Beyond | Digital Product Engineering Studio",
    description:
      "Boolean & Beyond is a digital innovation studio headquartered in Coimbatore, India, helping ambitious companies turn ideas into platforms.",
  };
};
export default function About() {
  return (
    <div>
      <BannerTechLeader />
      <CoreContent />
      <SuccessCard />
      <FAQ />
      <FooterForm />
      {/* <Testimonials data={testimonial} /> */}
    </div>
  );
}
