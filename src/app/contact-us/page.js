/** @format */

import FAQ from "@/components/Common/FAQ";
import BannerContactUs from "@/components/ContactUs/Banner";
import ContactForm from "@/components/ContactUs/Form";

export const generateMetadata = () => {
  return {
    title: "Contact Us | Start Your Digital Journey with Boolean & Beyond",
    description:
      "Connect with our team in Coimbatore to build AI-powered platforms, MVPs, and enterprise-grade software that scales.",
  };
};

export default function ContactUs() {
  return (
    <div>
      <BannerContactUs />
      <ContactForm />
      <FAQ />
    </div>
  );
}
