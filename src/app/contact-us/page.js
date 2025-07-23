/** @format */

import FAQ from "@/components/Common/FAQ";
import BannerContactUs from "@/components/ContactUs/Banner";
import FooterForm from "@/components/ContactUs/FooterForm";
import ContactForm from "@/components/ContactUs/Form";

export default function ContactUs() {
  return (
    <div>
      <BannerContactUs />
      <ContactForm />
      <FAQ />
    </div>
  );
}
