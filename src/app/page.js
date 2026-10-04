import Link from "next/link";

import Container from "@/components/Container";
import siteInfo from "@/data/siteInfo";

export const metadata = {
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: `${siteInfo.name} | Personal Website`,
    description: siteInfo.description,
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* Main Introduction */}
      <section
        aria-labelledby="home-heading"
        className="border-b border-brand-border"
      >
        <Container className="py-20 sm:py-24 lg:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Personal Website
          </p>

          <h1
            id="home-heading"
            className="max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl"
          >
            Welcome to Kibria.net
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-brand-slate sm:text-lg sm:leading-8">
            A personal space for my work, projects, experiences, learning,
            interests and journey.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-lg bg-brand-teal px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-brand-border bg-white px-5 py-3 text-sm font-semibold text-brand-navy transition hover:border-brand-teal"
            >
              About Me
            </Link>
          </div>
        </Container>
      </section>

      {/* About Preview */}
      <section aria-labelledby="about-heading">
        <Container className="py-16 sm:py-20">
          <h2
            id="about-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            About This Website
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-brand-slate">
            Kibria.net brings together my professional work, personal
            projects, learning, interests and experiences in one place.
          </p>
        </Container>
      </section>
    </>
  );
}