import Header from "@/components/Common/Header";
import { Titillium_Web } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Common/Footer";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"], // Optional: choose the weights you need
  variable: "--font-titillium",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium.variable}>
      <head />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
