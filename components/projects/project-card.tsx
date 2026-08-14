import Image from "next/image";
import type { Project } from "@/constants/portfolio";

interface ProjectCardProps {
  project: Project;
}

export function ExternalArrow() {
  return (
    <span
      aria-hidden="true"
      className="
        inline-block
        text-sm
        transition-colors
        duration-200
        md:transition-transform
        md:group-hover/item:-translate-y-0.5
        md:group-hover/item:translate-x-0.5
      "
    >
      ↗
    </span>
  );
}

function ProjectStat({ icon, value }: NonNullable<Project["stat"]>) {
  return (
    <div className="mt-3 flex items-center gap-1.5 text-sm text-foreground">
      <span aria-hidden="true">{icon === "star" ? "★" : "⇩"}</span>

      <span>{value}</span>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group/item
        rounded-sm
        lg:p-4
        lg:cursor-pointer
        lg:transition-[opacity,background-color]
        lg:duration-300
        lg:group-hover/list:opacity-50
        lg:hover:opacity-100!
        lg:hover:bg-accent/5
      "
    >
      <div
        className="
          grid
          grid-cols-1
          items-start
          gap-4
          md:grid-cols-[minmax(0,1fr)_138px]
          md:gap-4
        "
      >
        {/* Project information */}
        <div className="min-w-0 md:order-2">
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex
              items-center
              gap-1.5
              text-base
              font-medium
              text-foreground
              transition-colors
              duration-200
              hover:text-accent
            "
          >
            {project.title}

            <ExternalArrow />
          </a>

          <p className="mt-2 max-w-xl text-sm leading-6 text-muted">
            {project.description}
          </p>

          {project.stat && (
            <ProjectStat icon={project.stat.icon} value={project.stat.value} />
          )}

          {project.technologies && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <li key={technology}>
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-full
                      bg-accent/10
                      px-3
                      py-1
                      text-xs
                      font-medium
                      text-accent
                    "
                  >
                    {technology}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project thumbnail */}
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${project.title}`}
          className="
            relative
            order-2
            block
            aspect-16/10
            w-full
            overflow-hidden
            rounded-sm
            border
            border-border
            bg-surface
            md:order-2
            md:w-full
          "
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes="(max-width: 640px) 100%, (max-width: 768px) 120px, 138px"
            className="
              object-contain
              md:transition
              md:duration-500
              md:ease-out
              md:group-hover/item:scale-[1.04]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-slate-950/0
              md:transition-colors
              md:duration-300
              md:group-hover/item:bg-slate-950/10
            "
          />
        </a>
      </div>
    </article>
  );
}
