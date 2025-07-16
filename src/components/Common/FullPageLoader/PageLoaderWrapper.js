"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FullPageLoader from "./FullPageLoader";

export default function PageLoaderWrapper({ children }) {
  const pathname = usePathname();

  const [showLoader, setShowLoader] = useState(true);
  const [exitAnim, setExitAnim] = useState(false);

  const triggerExit = () => {
    setExitAnim(true);
    setTimeout(() => {
      setShowLoader(false);
      setExitAnim(false);
    }, 600); // match CSS animation duration
  };

  // Prevent flicker on route change
  useLayoutEffect(() => {
    setShowLoader(true);
    setExitAnim(false);
  }, [pathname]);

  // Exit loader after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerExit();
    }, 1000); // simulate loading
    return () => clearTimeout(timer);
  }, [pathname]);

  // Initial page load
  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(triggerExit, 300);
    } else {
      const onLoad = () => setTimeout(triggerExit, 300);
      window.addEventListener("load", onLoad);
      return () => window.removeEventListener("load", onLoad);
    }
  }, []);

  return (
    <>
      {children}
      {showLoader && (
        <div className={`full-page-loader ${exitAnim ? "fade-out" : ""}`}>
          <div className="spinner" />
        </div>
      )}
    </>
  );
}
