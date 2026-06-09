import type { MetadataRoute } from "next";

const siteUrl = "https://www.abemasatoshi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/music`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
