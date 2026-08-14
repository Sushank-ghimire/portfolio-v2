export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://ghimiresushank.com.np/#person",
        name: "Sushank Ghimire",
        url: "https://ghimiresushank.com.np",
        jobTitle: "Full-Stack Developer",
        description:
          "Full-stack developer specializing in React, Next.js, Node.js, Python, and modern web application development.",
        email: "mailto:contact@ghimiresushank.com.np",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu",
          addressCountry: "NP",
        },
        sameAs: [
          "https://www.linkedin.com/in/ghimire-sushank",
          "https://github.com/ghimiresushank",
          "https://instagram.com/ghimiresushank",
          "https://facebook.com/sushank.ghimire.np",
        ],
        knowsAbout: [
          "Full-Stack Development",
          "React",
          "Next.js",
          "Node.js",
          "Python",
          "JavaScript",
          "TypeScript",
          "Web Development",
          "Data Analysis",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://ghimiresushank.com.np/#website",
        url: "https://ghimiresushank.com.np",
        name: "Sushank Ghimire",
        description:
          "Portfolio of Sushank Ghimire, a full-stack developer building modern digital experiences.",
        publisher: {
          "@id": "https://ghimiresushank.com.np/#person",
        },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
