import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sushank Ghimire",
    start_url: "/",
    display: "standalone",
    short_name: "Sushank",
    icons: [
      {
        src: "/icons/72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/180x180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#0f172a",
    background_color: "#0f172a",
    orientation: "portrait",
    description:
      "Transforming ideas into exceptional digital experiences. I build cutting-edge web applications with React, Next.js, Node.js and Python that solve real business challenges. Let's create something remarkable together.",
  };
}
