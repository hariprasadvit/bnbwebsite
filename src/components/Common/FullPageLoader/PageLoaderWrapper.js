"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./FullPageLoader.scss"; // Assuming you have a global style for the loader
import LoaderGif from "../../../../public/Home/loader.gif"; // Adjust the path as necessary
import Image from "next/image";
export default function PageLoaderWrapper({ children }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const [exitAnim, setExitAnim] = useState(false);

  const triggerExit = () => {
    setExitAnim(true);
    setTimeout(() => {
      setShowLoader(false);
      setExitAnim(false);
    }, 600); // match transition
  };

  // 🔁 Immediate showLoader on link click
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (
        target &&
        target.href &&
        target.origin === window.location.origin &&
        target.pathname !== window.location.pathname
      ) {
        setShowLoader(true);
        setExitAnim(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // On route change trigger exit animation
  useEffect(() => {
    const timer = setTimeout(triggerExit, 1000); // simulate loading
    return () => clearTimeout(timer);
  }, [pathname]);

  // Initial load
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
        <div className={`fullPageLoader ${exitAnim ? "fade-out" : ""}`}>
          <Image src={LoaderGif} alt="loader" width={200} height={0} />
        </div>
      )}
    </>
  );
}
