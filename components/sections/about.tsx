export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div className="space-y-6 text-base leading-7 text-muted">
        <p>
          I'm Sushank Ghimire, a full-stack developer with 2+ years of
          experience building scalable and user-focused web applications. I'm
          currently pursuing a Bachelor of Science in Computer Science and
          Information Technology at Tribhuvan University.
        </p>

        <p>
          I work across both frontend and backend development, with experience
          using JavaScript, TypeScript, Python, React, Next.js, Express.js,
          Flask, SQL, and MongoDB. I enjoy building clean, maintainable
          applications and solving technical problems with practical and
          scalable solutions.
        </p>

        <p>
          As a freelance software developer, I've worked on projects including
          real-time collaboration tools, URL shorteners, and multi-format file
          conversion applications. I'm also interested in AI/ML and Data Science
          and enjoy exploring how technology can be used to solve real-world
          problems.
        </p>
      </div>
    </section>
  );
}
