interface CardProps {
  item: {
    company: string;
    period: string;
    href: string;
    role: string;
    description: string;
  };
}

export default function ExperienceCard({ item }: CardProps) {
  return (
    <article
      className="
        group/item grid rounded-sm lg:p-4
        lg:grid-cols-[120px_1fr] lg:gap-8
        lg:cursor-pointer
        lg:transition-[opacity,background-color]
        lg:duration-300
        lg:group-hover/list:opacity-50
        lg:hover:opacity-100!
        lg:hover:bg-accent/5
      "
    >
      <time className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {item.period}
      </time>

      <div>
        <a
          href={item.href}
          className="
            inline-flex items-center gap-2
            text-base font-medium text-foreground
            transition-colors duration-200
            hover:text-accent
            sm:group-hover/item:text-accent
          "
        >
          {item.role} · {item.company}
          <span
            aria-hidden="true"
            className="
              sm:transition-transform
              sm:duration-200
              sm:group-hover/item:-translate-y-0.5
              sm:group-hover/item:translate-x-0.5
            "
          >
            ↗
          </span>
        </a>

        <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
          {item.description}
        </p>
      </div>
    </article>
  );
}
