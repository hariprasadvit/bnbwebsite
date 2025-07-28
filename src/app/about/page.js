/** @format */

import BannerTechLeader from "@/components/Aboutus/Banner";
import CoreContent from "@/components/Aboutus/Core";
import SuccessCard from "@/components/Aboutus/SuccessCard";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import Testimonials from "@/components/Home/Testimonials";

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
