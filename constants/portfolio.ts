export const experience = [
  {
    period: "2024 — 2028",
    company: "Tribhuvan University",
    role: "B.Sc. CSIT Student",
    description:
      "Pursuing a bachelor's degree in Computer Science and Information Technology, with a focus on programming, algorithms, and software development.",
    href: "#",
  },
  {
    period: "2022 — present",
    company: "PeoplePerHour",
    role: "Freelance Software Developer",
    description:
      "Developed full-stack web applications using modern frontend and backend technologies, focusing on clean, maintainable code and user-focused solutions.",
    href: "#",
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
    title: "URL Shortener",
    description:
      "A full-stack URL shortening service that lets users create and manage short links with authentication and a fast backend API.",
    image: "/projects/url-shortener.png",
    href: "https://github.com/Sushank-ghimire/url-shortener",
    technologies: ["Next.js", "TypeScript", "Go", "Gin", "PostgreSQL", "JWT"],
  },
  {
    title: "Paper Trading",
    description:
      "A mobile paper trading app that lets users practice buying and selling stocks with virtual money in a simulated market.",
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
    title: "Portfolio",
    description:
      "A personal portfolio built to showcase my projects, skills, and experience with a clean and responsive design.",
    image: "/projects/portfolio.png",
    href: "https://ghimiresushank.com.np",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Academic Front Page Generator",
    description:
      "A simple web app for creating clean, professional front pages for academic reports and assignments. Users can enter their details and generate a polished page in seconds.",
    image: "/projects/academic.png",
    href: "https://academic.ghimiresushank.com.np",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PDFX"],
  },
];
