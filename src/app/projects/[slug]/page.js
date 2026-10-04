import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/Container";

import { dataSources } from "@/data/dataSources";
import siteInfo from "@/data/siteInfo";

import { getJsonData } from "@/services/githubData";

import slugify from "@/utils/slugify";


function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}


async function getProject(slug) {
  const projects = await getJsonData(dataSources.projects);

  if (!Array.isArray(projects)) {
    return null;
  }

  return (
    projects.find(
      (project) => slugify(project.name) === slug
    ) || null
  );
}


export async function generateStaticParams() {
  const projects = await getJsonData(dataSources.projects);

  if (!Array.isArray(projects)) {
    return [];
  }

  return projects.map((project) => ({
    slug: slugify(project.name),
  }));
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }


  const description =
    `${project.name} is a ${project.pType} built with ${project.technology}.`;


  return {
    title: project.name,

    description,

    alternates: {
      canonical: `/projects/${slug}`,
    },

    openGraph: {
      title: project.name,
      description,
      url: `/projects/${slug}`,

      type: "website",
      siteName: siteInfo.siteName,
      locale: "en_US",

      images: project.img1
        ? [
            {
              url: project.img1,
              alt: `${project.name} project preview`,
            },
          ]
        : [
            {
              url: siteInfo.logo,
              alt: `${siteInfo.siteName} logo`,
            },
          ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.name,
      description,

      images: [
        project.img1 || siteInfo.logo,
      ],
    },
  };
}


export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const project = await getProject(slug);

  if (!project) {
    notFound();
  }


  const hasLiveProject =
    project.pUrl &&
    project.pUrl !== "#";


  const gallery =
    Array.isArray(project.allImg)
      ? project.allImg
      : [];


  const description =
    `${project.name} is a ${project.pType} built with ${project.technology}.`;


  const projectUrl =
    `${siteInfo.domain}/projects/${slug}`;

  const projectsUrl =
    `${siteInfo.domain}/projects`;


  const projectImages = [
    project.img1,
    ...gallery,
  ].filter(Boolean);


  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    name: project.name,
    description,
    url: projectUrl,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": projectUrl,
    },

    ...(projectImages.length > 0 && {
      image: projectImages,
    }),

    creator: {
      "@type": "Person",
      "@id": `${siteInfo.domain}/#person`,
      name: siteInfo.name,
      url: siteInfo.domain,
    },

    ...(project.category && {
      genre: project.category,
    }),

    ...(project.technology && {
      keywords: project.technology,
    }),

    ...(hasLiveProject && {
      sameAs: project.pUrl,
    }),
  };


  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteInfo.domain,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: projectsUrl,
      },

      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: projectUrl,
      },
    ],
  };


  return (
    <>
      {/* Project structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(projectSchema),
        }}
      />


      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(breadcrumbSchema),
        }}
      />


      {/* Project Introduction */}
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
            {project.category}
          </p>


          <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            {project.name}
          </h1>


          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">
            {project.name} is a {project.pType} built using{" "}
            {project.technology}.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">

            {hasLiveProject && (
              <a
                href={project.pUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-lg bg-brand-teal px-6 font-semibold text-white"
              >
                Visit Live Project ↗
              </a>
            )}


            <Link
              href="/projects"
              className="inline-flex min-h-12 items-center rounded-lg border border-brand-border bg-white px-6 font-semibold text-brand-navy"
            >
              All Projects
            </Link>

          </div>

        </Container>
      </section>


      {/* Project Information */}
      <section className="bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            <div>
              {project.img1 && (
                <Image
                  src={project.img1}
                  alt={`${project.name} main project preview`}
                  width={1200}
                  height={750}
                  priority
                  className="w-full rounded-2xl border border-brand-border object-cover"
                />
              )}
            </div>


            <div>

              <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
                Project Information
              </h2>


              <dl className="mt-6 space-y-5">

                <div>
                  <dt className="text-sm font-semibold text-brand-teal">
                    Project Type
                  </dt>

                  <dd className="mt-1 text-brand-slate">
                    {project.pType}
                  </dd>
                </div>


                <div>
                  <dt className="text-sm font-semibold text-brand-teal">
                    Category
                  </dt>

                  <dd className="mt-1 text-brand-slate">
                    {project.category}
                  </dd>
                </div>


                <div>
                  <dt className="text-sm font-semibold text-brand-teal">
                    Technologies
                  </dt>

                  <dd className="mt-1 leading-7 text-brand-slate">
                    {project.technology}
                  </dd>
                </div>

              </dl>

            </div>

          </div>

        </Container>
      </section>


      {/* Project Gallery */}
      {gallery.length > 0 && (
        <section
          aria-labelledby="project-gallery-heading"
          className="border-t border-brand-border bg-brand-ivory"
        >

          <Container className="py-16 sm:py-20 lg:py-24">

            <h2
              id="project-gallery-heading"
              className="text-2xl font-bold text-brand-navy sm:text-3xl"
            >
              Project Gallery
            </h2>


            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {gallery.map((image, index) => (
                <Image
                  key={`${project._id}-${index}`}
                  src={image}
                  alt={`${project.name} screenshot ${index + 1}`}
                  width={1200}
                  height={750}
                  className="w-full rounded-xl border border-brand-border object-cover"
                />
              ))}

            </div>

          </Container>

        </section>
      )}
    </>
  );
}