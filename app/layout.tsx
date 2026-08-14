import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/worker/service-worker";
import JsonLd from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["greek"],
});

export const metadata: Metadata = {
  title: "Sushank Ghimire | Innovative Full-Stack Developer",
  description:
    "Transforming ideas into exceptional digital experiences. I help build cutting edge web applications with React, Next.js, Node.js, and Python that help address real business challenges. Let's create something remarkable together.",
  keywords: [
    "software developer",
    "full-stack developer",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
    "software engineer",
    "Sushank Ghimire",
    "Kathmandu",
    "Nepal",
    "Data Analyst",
    "Python",
  ],
  icons: {
    icon: [
      { url: "/icons/72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/icons/192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/180x180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  authors: [{ name: "Sushank Ghimire", url: "https://ghimiresushank.com.np" }],
  creator: "Sushank Ghimire",
  publisher: "Sushank Ghimire",
  metadataBase: new URL("https://ghimiresushank.com.np"),
  openGraph: {
    type: "website",
    url: "https://ghimiresushank.com.np",
    title: "Sushank Ghimire | Crafting Digital Excellence",
    description:
      "Full-stack developer who transforms intricate issues into sophisticated solutions. Discover my portfolio of pioneering web applications created with state-of-the-art technology.",
    siteName: "Sushank Ghimire Portfolio",
    emails: ["contact@ghimiresushank.com.np"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ghimire_sushank",
    title: "Sushank Ghimire | Web Development Virtuoso",
    description:
      "Discover how I blend creativity with technical expertise to deliver impactful digital solutions that drive results.",
  },
  alternates: {
    canonical: "https://ghimiresushank.com.np",
  },
  appleWebApp: {
    statusBarStyle: "black-translucent",
  },
  generator: "Next.js",
  other: {
    "og:see_also": "https://facebook.com/sushank.ghimire.np",
    "og:see_also:1": "https://www.linkedin.com/in/sushank-ghimire",
    "og:see_also:2": "https://instagram.com/ghimiresushank",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full antialiased bg-background`}
    >
      <body className="min-h-screen w-screen font-inter overflow-x-hidden bg-background text-foreground">
        <ServiceWorkerRegistration />
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
