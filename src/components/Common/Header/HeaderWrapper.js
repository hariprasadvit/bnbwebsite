"use client";

import { usePathname } from "next/navigation";
import Header from "./index";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Define config for each route
  const routeConfig = [
    { path: "/services", whiteHeader: false, active: "services" },
    { path: "/case-study", whiteHeader: false, active: "caseStudy" },
  ];

  const matchedRoute = routeConfig.find((route) =>
    pathname.startsWith(route.path)
  );

  const whiteHeader = matchedRoute?.whiteHeader || false;
  const active = matchedRoute?.active || "";

  return <Header whiteHeader={whiteHeader} active={active} />;
}
