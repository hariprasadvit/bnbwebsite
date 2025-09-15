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

        {/* Safe fetch wrapper: guard against external scripts that may throw synchronously or cause unhandled rejections (e.g., injected analytics). */}
        <Script id="safe-fetch" strategy="afterInteractive">
          {`(function(){
            try{
              const _origFetch = window.fetch;
              if(!_origFetch) return;
              window.fetch = function(...args){
                try{
                  const result = _origFetch.apply(this, args);
                  if(result && typeof result.then === 'function'){
                    // attach a catch to prevent unhandledrejection caused by external libs
                    return result.catch(err => {
                      console.warn('[safe-fetch] caught fetch rejection', err);
                      throw err;
                    });
                  }
                  return result;
                }catch(err){
                  console.warn('[safe-fetch] synchronous fetch error', err);
                  return Promise.reject(err);
                }
              };

              // Prevent noisy unhandledrejection messages from third-party scripts during dev HMR
              window.addEventListener('unhandledrejection', function(evt){
                // If the rejection originates from fetching the RSC payload or 3rd-party analytics, log and prevent default
                try{
                  var msg = evt && evt.reason && (evt.reason.message || evt.reason.toString());
                  if(msg && (msg.includes('Failed to fetch') || msg.includes('RSC payload'))){
                    console.warn('[safe-fetch] suppressed unhandledrejection:', evt.reason);
                    evt.preventDefault();
                  }
                }catch(e){/* ignore */}
              });
            }catch(e){
              // don't break the app if wrapper fails
              console.warn('[safe-fetch] init failed', e);
            }
          })();`}
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
