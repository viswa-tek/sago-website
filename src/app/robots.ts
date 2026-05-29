import type { MetadataRoute } from "next";
import { businessInfo } from "@/content/business";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${businessInfo.seo.siteUrl}/sitemap.xml`,
  };
}
