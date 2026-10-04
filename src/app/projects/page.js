import Container from "@/components/Container";
import ProjectCard from "@/components/projects/ProjectCard";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";

export const metadata = {
  title: "Projects",

  description:
    "Explore web development, WordPress, React, Next.js and full-stack projects by Golam Kibria.",

  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "Projects by Golam Kibria",
    description:
      "Explore web development, WordPress, React, Next.js and full-stack projects by Golam Kibria.",
    url: "/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getJsonData(dataSources.projects);

  const projectList = Array.isArray(projects) ? projects : [];

  return (
    <>
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            My Work
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Projects
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-brand-slate sm:text-lg sm:leading-8">
            A collection of websites, frontend applications, full-stack
            projects and other digital work I have built or worked on.
          </p>

        </Container>
      </section>

      <section
        aria-labelledby="project-list-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="project-list-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            All Projects
          </h2>

          {projectList.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projectList.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-brand-slate">
              Projects are currently unavailable.
            </p>
          )}

        </Container>
      </section>
    </>
  );
}