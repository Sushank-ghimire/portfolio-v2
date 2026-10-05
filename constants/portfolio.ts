export const experience = [
  {
    period: "2026 — present",
    company: "Januka Saving & Credit Co-Operative PVT. Ltd.",
    role: "Junior Full-Stack Developer",
    description:
      "Working on internal tools and company websites, helping build and maintain features across the frontend and backend while improving existing systems as needed.",
    href: "https://janukasaving.com",
  },
  {
    period: "2024 — 2028",
    company: "Tribhuvan University",
    role: "B.Sc. CSIT Student",
    description:
      "Pursuing a bachelor's degree in Computer Science and Information Technology, with a focus on programming, algorithms, and software development.",
    href: "https://bkmc.tu.edu.np",
  },
  {
    period: "2025 — 2026",
    company: "PeoplePerHour",
    role: "Freelance Software Developer",
    description:
      "Developed full-stack web applications using modern frontend and backend technologies, focusing on clean, maintainable code and user-focused solutions.",
    href: "https://peopleperhour.com",
  },
];

export interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
  technologies?: string[];
  stat?: {
    icon: "star" | "download";
    value: string;
  };
}

export const projects: Project[] = [
  {
    title: "Januka Saving",
    description:
      "A professional website built for Januka Saving to present its services, information, and online presence in a clear and accessible way.",
    image: "/projects/januka-saving.png",
    href: "https://janukasaving.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "IT Companies Nepal",
    description:
      "A directory of IT companies in Nepal where you can explore company details, services, locations, contact information, and other useful information in one place.",
    image: "/projects/it-companies-nepal.png",
    href: "https://itcompaniesnepal.ghimiresushank.com.np",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
  },
  {
    title: "URL Shortener",
    description:
      "A full-stack URL shortener where users can create and manage short links with authentication, backed by a Go API and PostgreSQL database.",
    image: "/projects/url-shortener.png",
    href: "https://github.com/Sushank-ghimire/url-shortener",
    technologies: ["Next.js", "TypeScript", "Go", "Gin", "PostgreSQL", "JWT"],
  },
  {
    title: "Paper Trading",
    description:
      "A mobile app for practicing stock trading with virtual money, allowing users to buy and sell stocks without using real money.",
    image:
      "https://raw.githubusercontent.com/Sushank-ghimire/paper-trading/main/screenshots/home1.jpeg",
    href: "https://github.com/Sushank-ghimire/paper-trading",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Resend",
    ],
  },
  {
    title: "Academic Front Page Generator",
    description:
      "A small web app that makes it easier to create front pages for academic reports and assignments by filling in the required details and generating a ready-to-use page.",
    image: "/projects/academic.png",
    href: "https://academic.ghimiresushank.com.np",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PDFX"],
  },
];
