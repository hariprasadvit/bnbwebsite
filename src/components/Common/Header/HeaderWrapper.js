"use client";

import { usePathname } from "next/navigation";
import Header from "./index";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Flags
  const isServiceListing = pathname === "/services";
  const isCaseStudyListing = pathname === "/case-study";
  const isAboutUs = pathname === "/about";
  const isContactUs = pathname === "/contact-us";
  const isServiceDetail =
    pathname.startsWith("/services/") && !isServiceListing;
  const isCaseStudyDetail =
    pathname.startsWith("/case-study/") && !isCaseStudyListing;

  let whiteHeader = false;
  let active = "";

  if (isServiceListing) {
    active = "services";
  } else if (isCaseStudyListing) {
    active = "caseStudy";
  } else if (isAboutUs) {
    active = "about";
  } else if (isContactUs) {
    active = "contact";
  } else if (isServiceDetail) {
    whiteHeader = true; // Only for service detail pages
  }

  return <Header whiteHeader={whiteHeader} active={active} />;
}
