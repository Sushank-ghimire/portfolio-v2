import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "GoogleBot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  };
}
