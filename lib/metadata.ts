import type { Metadata } from "next";
import { canonicalUrl } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function pageMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = `${canonicalUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Uoink",
      type: "website",
      images: [
        {
          url: `${canonicalUrl}/assets/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Uoink wordmark and launch message",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${canonicalUrl}/assets/og-image.png`],
    },
  };
}
