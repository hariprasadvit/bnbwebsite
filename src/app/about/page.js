/** @format */

import BannerTechLeader from "@/components/Aboutus/Banner";
import CoreContent from "@/components/Aboutus/Core";
import SuccessCard from "@/components/Aboutus/SuccessCard";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import Testimonials from "@/components/Home/Testimonials";

const testimonial = [
  {
    clientText:
      "Learn more about our culture, research methods and design philosophy",
    testimonialsContent:
      "Cartoon Mango was great to work with. They improvise and provide 24X7 support.",
    clientName: "Gaurav Saxena",
    clientDesignation: "Media Manager - BCCI",
    img: "/bcci-logo.png",
  },
  {
    clientText:
      "Learn more about our culture, research methods and design philosophy",
    testimonialsContent:
      "The goals set by us were achieved on a competitive timeline and the MVP was well received by our early on-set users.",
    clientName: "Sagar Nair",
    clientDesignation: "Chief Executive Officer - Qlan Gaming",
    img: "/qlan-icon1.png",
  },
  {
    clientText:
      "Learn more about our culture, research methods and design philosophy",
    testimonialsContent:
      "We had a great time partnering with Cartoon Mango. The team is adept with the latest technologies and can produce products at scale.",
    clientName: "Gautham Varma",
    clientDesignation: "Sr. Product Manager - Cricket.com",
    img: "/cricket-icon.png",
  },
  {
    clientText:
      "Learn more about our culture, research methods and design philosophy",
    testimonialsContent:
      " Their competence to develop a complex product was quite impressive.",
    clientName: "Nitin Arora ",
    clientDesignation: "Chief Operating Officer - Bidzapp",
    img: "/bidzapp-color.png",
  },
  {
    clientText:
      "Learn more about our culture, research methods and design philosophy",
    testimonialsContent:
      "Cartoon Mango impressed us with good results and performance from the get-go.",
    clientName: "Arjun Shetty",
    clientDesignation: "Co-Founder - Leaguex Gaming",
    img: "/leagueX-color.png",
  },
];
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
