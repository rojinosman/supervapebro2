import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Vape Bros",
  description: "Vape shop site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Skip link for keyboard users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {children}
      </body>
    </html>
  );
}
