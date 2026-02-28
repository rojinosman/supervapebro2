import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Super Vape Bros | Downtown San Diego Vape Shop | Lounge & Arcade",
  description:
    "Super Vape Bros is a downtown San Diego vape shop offering quality disposables, vape juice, mods, cigars, and more. Visit our lounge with free arcades, friendly service, and a welcoming environment at 530 3rd Ave.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3452144462263723"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NVT4YJC0C3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVT4YJC0C3');
          `}
        </Script>

        {/* Skip link for keyboard users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
