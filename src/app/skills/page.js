import Container from "@/components/Container";

import { skillGroups } from "@/data/skills";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: "Skills & Technologies",

  description:
    "Explore the web development technologies, platforms and digital tools Golam Kibria has worked with across frontend, full-stack, WordPress and digital projects.",

  path: "/skills",

  socialTitle: "Skills & Technologies | Golam Kibria",

  socialDescription:
    "Web development technologies, platforms and digital tools used by Golam Kibria.",
});


export default function SkillsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Skills & Experience
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Skills & Technologies
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-brand-slate sm:text-lg sm:leading-8">
            Technologies, platforms and tools I have worked with across web
            development, WordPress, full-stack projects, tracking and digital
            work.
          </p>

        </Container>
      </section>


      {/* Skills Groups */}
      <section
        aria-labelledby="skills-list-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="skills-list-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Technologies & Platforms
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-brand-border bg-brand-ivory p-6"
              >
                <h3 className="text-xl font-bold text-brand-navy">
                  {group.title}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2">

                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-brand-border bg-white px-3 py-2 text-sm font-medium text-brand-slate"
                    >
                      {skill}
                    </li>
                  ))}

                </ul>
              </article>
            ))}

          </div>

        </Container>
      </section>
    </>
  );
}