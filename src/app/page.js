import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import { fetchAPI } from "@/lib/fetch-api";
import BlockRenderer from "@/components/Home/BlockRenderer";
import FAQ from "@/components/Common/FAQ";
import FooterForm from "@/components/ContactUs/FooterForm";
import Script from "next/script"; // ✅ Keep this

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

export async function generateMetadata() {
  const { pageContent } = await loader();
  return {
    title: pageContent?.meta_title || "B&B",
    description: pageContent?.meta_description || "B&B",
  };
}

export default async function Home() {
  const { blocks } = await loader();

  return (
    <>
      {/* ✅ JSON-LD injected properly using next/script */}
      <Script id="ld-json-landing" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Boolean & Beyond",
          image:
            "https://www.booleanbeyond.com/_next/static/media/logo.de27cc74.svg",
          url: "https://www.booleanbeyond.com",
          telephone: "+91-9952361618",
          email: "contact@booleanbeyond.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "#509, Red Rose Plaza, DB Road, RS Puram",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641007",
            addressCountry: "IN",
          },
          sameAs: [
            "https://www.linkedin.com/company/booleanbeyond",
            "https://twitter.com/booleanbeyond",
          ],
          description:
            "Boolean & Beyond is an IT services company offering product development, UI/UX design, web and mobile app development, and AR/VR solutions tailored for startups and enterprises.",
          areaServed: "IN",
          founder: [
            {
              "@type": "Person",
              name: "Hari Prasad",
            },
            {
              "@type": "Person",
              name: "Vinod Kannan",
            },
          ],
          foundingDate: "2017",
          makesOffer: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Product Development",
                description:
                  "We help businesses build and scale digital products with modern architecture and agile development practices.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "UI/UX Design",
                description:
                  "User-centric design solutions focused on usability, performance, and brand consistency.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web & Mobile App Development",
                description:
                  "Full-stack development services for scalable, responsive web and mobile applications.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AR/VR Application Development",
                description:
                  "Immersive AR/VR experiences for enterprise and consumer applications.",
              },
            },
          ],
        })}
      </Script>

      <div style={{ width: "100%" }}>
        <BlockRenderer blocks={blocks} />
        <FAQ />
        <FooterForm />
      </div>
    </>
  );
}
