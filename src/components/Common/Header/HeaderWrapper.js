"use client";

import { usePathname } from "next/navigation";
import Header from "./index";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isServices = pathname.startsWith("/services");

  return (
    <Header whiteHeader={isServices} active={isServices ? "services" : ""} />
  );
}
