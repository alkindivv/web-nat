import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://natandkind.de/sitemap.xml",
    host: "https://natandkind.de",
  };
}
