import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { canonicalUrl, defaultDescription } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Uoink \u2014 the YouTube layer for any AI",
    template: "%s | Uoink",
  },
  description: defaultDescription,
  icons: {
    icon: [
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/assets/apple-touch-icon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Uoink",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Windows 10/11",
  softwareVersion: "2.0",
  license: "https://github.com/ryanbiddy/uoink/blob/main/LICENSE",
  downloadUrl: "https://github.com/ryanbiddy/uoink/releases/latest",
  url: canonicalUrl,
  description: defaultDescription,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  sameAs: ["https://github.com/ryanbiddy/uoink", "https://ryanbiddy.com"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="software-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
        <Script src="/uoink-mark.js" strategy="beforeInteractive" />
        <Script src="/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
