import Link from "next/link";

import Container from "@/components/Container";
import ProjectCard from "@/components/projects/ProjectCard";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";

export default async function ProjectsSection() {
  const projects = await getJsonData(dataSources.projects);

  const featuredProjects = Array.isArray(projects)
    ? projects
        .filter((project) => project.pUrl && project.pUrl !== "#")
        .slice(0, 3)
    : [];

  return (
    <section
      aria-labelledby="projects-home-heading"
      className="bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Featured Projects
            </p>

            <h2
              id="projects-home-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              Some projects I have worked on.
            </h2>

            <p className="mt-4 leading-7 text-brand-slate sm:text-lg">
              A selection of my web development and digital projects built
              with different technologies and platforms.
            </p>
          </div>

          <Link
            href="/projects"
            className="font-semibold text-brand-teal hover:underline"
          >
            View all projects →
          </Link>

        </div>

        {featuredProjects.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-brand-slate">
            Projects are currently unavailable.
          </p>
        )}

      </Container>
    </section>
  );
}