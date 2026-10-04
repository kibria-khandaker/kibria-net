import Link from "next/link";

import Container from "@/components/Container";

import siteInfo from "@/data/siteInfo";
import { homeData } from "@/data/homeData";


function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}


export const metadata = {
  title: "About Me",

  description:
    "Learn about Golam Kibria, his work in web development, WordPress, modern web technologies, digital platforms, tracking, learning and personal projects.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Golam Kibria",
    description:
      "Learn about Golam Kibria, his work, technologies, digital experience, interests and learning journey.",
    url: "/about",
    type: "website",
  },
};


export default function AboutPage() {
  const aboutUrl =
    `${siteInfo.domain}/about`;

  const personId =
    `${siteInfo.domain}/#person`;

  const websiteId =
    `${siteInfo.domain}/#website`;


  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",

    "@id": `${aboutUrl}/#webpage`,

    url: aboutUrl,
    name: `About ${siteInfo.name}`,

    description:
      "Learn about Golam Kibria, his work in web development, WordPress, modern web technologies, digital platforms, tracking, learning and personal projects.",

    isPartOf: {
      "@id": websiteId,
    },

    about: {
      "@id": personId,
    },

    mainEntity: {
      "@id": personId,
    },
  };


  return (
    <>
      {/* About page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(aboutPageSchema),
        }}
      />


      {/* Page Header */}
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            About Me
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            I&apos;m Golam Kibria.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">
            {homeData.about.description}
          </p>

        </Container>
      </section>


      {/* About Overview */}
      <section
        aria-labelledby="about-overview-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

            <div>

              <h2
                id="about-overview-heading"
                className="text-3xl font-bold text-brand-navy"
              >
                More than one role or technology.
              </h2>

              <p className="mt-5 leading-7 text-brand-slate sm:text-lg sm:leading-8">
                My work includes web development, WordPress, modern JavaScript
                technologies, digital platforms, online business solutions,
                analytics and tracking.
              </p>

              <p className="mt-4 leading-7 text-brand-slate sm:text-lg sm:leading-8">
                I also use this website to organize the things I build, learn,
                explore and experience beyond individual development projects.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {homeData.workAreas.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-brand-border bg-brand-ivory p-5"
                >
                  <h3 className="font-bold text-brand-navy">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-brand-slate">
                    {item.description}
                  </p>
                </article>
              ))}

            </div>

          </div>

        </Container>
      </section>


      {/* Explore More */}
      <section className="border-t border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20">

          <h2 className="text-2xl font-bold text-brand-navy sm:text-3xl">
            Explore more
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">

            <Link
              href="/projects"
              className="rounded-lg bg-brand-teal px-5 py-3 font-semibold text-white"
            >
              Projects
            </Link>

            <Link
              href="/skills"
              className="rounded-lg border border-brand-border bg-white px-5 py-3 font-semibold text-brand-navy"
            >
              Skills
            </Link>

            <Link
              href="/journey"
              className="rounded-lg border border-brand-border bg-white px-5 py-3 font-semibold text-brand-navy"
            >
              My Journey
            </Link>

          </div>

        </Container>
      </section>
    </>
  );
}