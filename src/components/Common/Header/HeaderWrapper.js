"use client";

import { usePathname } from "next/navigation";
import Header from "./index";

export default function HeaderWrapper() {
  const pathname = usePathname();

  // Normalize path to remove trailing slash
  const cleanedPath = pathname.replace(/\/$/, "");

  // Split into parts: ['', 'services', 'slug']
  const pathParts = cleanedPath.split("/");

  // Check if it matches exactly /services/[slug]
  const isServiceDetailPage =
    pathParts.length === 3 && pathParts[1] === "services";

  const whiteHeader = isServiceDetailPage;
  const active = isServiceDetailPage ? "services" : "";

  return <Header whiteHeader={whiteHeader} active={active} />;
}
