"use client";

import { useEffect, useState } from "react";

const navigation = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
];

export function SideNavigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navigation
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section as any));

    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Primary navigation" className="mt-16 hidden lg:block">
      <ul className="space-y-5">
        {navigation.map((item) => {
          const id = item.href.slice(1);
          const active = activeSection === id;

          return (
            <li key={item.href}>
              <a href={item.href} className="group flex items-center gap-4">
                <span
                  className={[
                    "h-px transition-all duration-300",
                    active
                      ? "w-16 bg-foreground"
                      : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground",
                  ].join(" ")}
                />

                <span
                  className={[
                    "text-xs font-bold uppercase tracking-[0.18em] transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground group-hover:text-foreground",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
