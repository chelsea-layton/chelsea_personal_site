import type { MetadataRoute } from "next";
import { siteUrlString } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrlString();
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}/sitemap.xml`,
  };
}
