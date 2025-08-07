import { Titillium_Web } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Common/Footer";
import HeaderWrapper from "@/components/Common/Header/HeaderWrapper";
import PageLoaderWrapper from "@/components/Common/FullPageLoader/PageLoaderWrapper";
import Script from "next/script";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Optional: choose the weights you need
  variable: "--font-titillium",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium.variable}>
      <head>
        {/* Google Tag Manager Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RS4FR1L7EL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RS4FR1L7EL');
          `}
        </Script>
      </head>
      <body>
        <PageLoaderWrapper>
          <HeaderWrapper />
          {children}
          <Footer />
        </PageLoaderWrapper>
      </body>
    </html>
  );
}
