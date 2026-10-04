import Image from "next/image";
import Link from "next/link";

import slugify from "@/utils/slugify";

export default function ProjectCard({ project }) {
  const projectSlug = slugify(project.name);

  const hasLiveProject =
    project.pUrl &&
    project.pUrl !== "#";

  return (
    <article className="overflow-hidden rounded-2xl border border-brand-border bg-white">

      {project.img1 && (
        <Image
          src={project.img1}
          alt={`${project.name} project preview`}
          width={900}
          height={560}
          className="aspect-[16/10] w-full object-cover"
        />
      )}

      <div className="p-5 sm:p-6">

        <p className="text-sm font-semibold text-brand-teal">
          {project.pType}
        </p>

        <h2 className="mt-2 text-xl font-bold text-brand-navy">
          {project.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-brand-slate">
          {project.technology}
        </p>

        <div className="mt-5 flex flex-wrap gap-4">

          <Link
            href={`/projects/${projectSlug}`}
            className="font-semibold text-brand-teal hover:underline"
          >
            View Details →
          </Link>

          {hasLiveProject && (
            <a
              href={project.pUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-slate hover:text-brand-teal"
            >
              Live Site ↗
            </a>
          )}

        </div>

      </div>
    </article>
  );
}