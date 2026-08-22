import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: Metadata["keywords"];
  robots?: Metadata["robots"];
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphType?: "website" | "article";
  twitterDescription?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  robots,
  openGraphTitle = title,
  openGraphDescription = description,
  openGraphType = "website",
  twitterDescription = openGraphDescription,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    keywords,
    robots,
    alternates: { canonical: path },
    openGraph: {
      title: openGraphTitle,
      description: openGraphDescription,
      url: path,
      type: openGraphType,
      images: [siteConfig.socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: twitterDescription,
      images: [siteConfig.socialImage.url],
    },
  };
}
