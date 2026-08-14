import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ghimiresushank.com.np";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/notfound`,
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0.1,
    },
    {
      url: `${base}/Sushank_Ghimire.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
