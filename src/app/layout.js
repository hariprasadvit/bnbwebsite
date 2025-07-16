import { Titillium_Web } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Common/Footer";
import HeaderWrapper from "@/components/Common/Header/HeaderWrapper";
import PageLoaderWrapper from "@/components/Common/FullPageLoader/PageLoaderWrapper";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Optional: choose the weights you need
  variable: "--font-titillium",
});

export const metadata = {
  title:
    "Boolean and Beyond - Building MVPs, Enterprise Apps & Intelligent AI Solutions",
  description:
    "From MVP development to enterprise software and AI agents, Boolean and Beyond powers intelligent, future-ready solutions across industries.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium.variable}>
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
