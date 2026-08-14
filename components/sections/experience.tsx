import ExperienceCard from "@/components/experience/experience-card";
import { experience } from "@/constants/portfolio";

export function ExperienceSection() {
  const RESUME_LINK =
    process.env.RESUME_LINK || "https://resume.ghimiresushank.com.np";
  return (
    <section id="experience" className="mt-32 scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div className="group/list space-y-6">
        {experience.map((item) => (
          <ExperienceCard key={item.role} item={item} />
        ))}
      </div>
      <div className="flex mt-3 gap-2 flex-row">
        <a
          href={RESUME_LINK}
          className="
            group
            inline-flex items-center gap-2
            font-bold text-md text-foreground
            transition-colors duration-200
            hover:text-accent
          "
        >
          View Full Résumé
          <span
            aria-hidden="true"
            className="
              inline-block
              transition-transform
              duration-200
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
              font-medium
            "
          >
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
