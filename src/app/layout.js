import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider"
import React from "react";
// import { store } from "@/lib/data/redux/store.js";
// import { Provider } from "react-redux";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Akshaykumar Lilani",
  description: "Full Stack Web Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta property="og:title" content="Akshaykumar Lilani" />
        <meta property="og:type" content="Portfolio" />
        <meta property="og:url" content="https://akshaylilani.com" />
        <meta
          property="og:image"
          content="https://akshaylilani.com/profile.png"
        />
        <meta property="og:description" content="Full Stack Web Developer" />
        <meta property="og:site_name" content="Akshaykumar Lilani" />
        <title>Akshaykumar Lilani</title>

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8SFGCMW02"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-X8SFGCMW02');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <React.StrictMode>
          {/* <BreakpointProvider> */}
          {/* <Provider store={store}> */}
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          {/* </Provider> */}
          {/* </BreakpointProvider> */}
          <Toaster position="top-center" />
        </React.StrictMode>
      </body>
    </html>
  );
}
