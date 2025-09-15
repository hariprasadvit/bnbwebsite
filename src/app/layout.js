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

              function isSameOrigin(url){
                try{
                  const u = new URL(url, location.href);
                  return u.origin === location.origin;
                }catch(e){
                  return false;
                }
              }

              function extractHost(url){
                try{ return new URL(url, location.href).host; }catch(e){ return ''; }
              }

              window.fetch = function(...args){
                try{
                  const reqUrl = args[0];
                  const host = extractHost(reqUrl);

                  // If the request targets known noisy third-party (e.g., FullStory), swallow failures to avoid breaking HMR/dev overlay
                  if(host && host.includes('fullstory.com')){
                    try{
                      // attempt fetch but suppress rejection: return resolved minimal response on error
                      return _origFetch.apply(this, args).catch(err => {
                        console.warn('[safe-fetch] suppressed fullstory fetch error', err);
                        try{ return new Response(null, { status: 204, statusText: 'No Content' }); }catch(e){ return Promise.resolve(); }
                      });
                    }catch(e){
                      console.warn('[safe-fetch] fullstory fetch sync error', e);
                      try{ return Promise.resolve(new Response(null, { status: 204 })); }catch(e){ return Promise.resolve(); }
                    }
                  }

                  // For same-origin requests (RSC/HMR), retry once on transient network failures before bubbling
                  if(isSameOrigin(reqUrl)){
                    try{
                      return _origFetch.apply(this, args).catch(err => {
                        console.warn('[safe-fetch] same-origin fetch failed, retrying once', err, reqUrl);
                        return new Promise(resolve => setTimeout(resolve, 180)).then(()=> _origFetch.apply(this, args)).catch(err2 => {
                          console.warn('[safe-fetch] retry failed for', reqUrl, err2);
                          throw err2;
                        });
                      });
                    }catch(e){
                      console.warn('[safe-fetch] sync error on same-origin fetch', e);
                      return Promise.reject(e);
                    }
                  }

                  // Default: call original fetch and attach a catch to avoid unhandled promise rejections
                  const result = _origFetch.apply(this, args);
                  if(result && typeof result.then === 'function'){
                    return result.catch(err => {
                      console.warn('[safe-fetch] caught fetch rejection', err, args[0]);
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
                try{
                  var msg = evt && evt.reason && (evt.reason.message || evt.reason.toString());
                  if(msg && (msg.includes('Failed to fetch') || msg.includes('RSC payload') || msg.includes('fullstory'))){
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
