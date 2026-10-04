import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export default function HeroSection() {
  const hero = homeData.hero;

  return (
    <section
      aria-labelledby="hero-heading"
      className="border-b border-brand-border bg-brand-ivory"
    >
      <Container className="py-16 sm:py-20 lg:py-28">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Main Introduction */}
          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {hero.label}
            </p>

            <h1
              id="hero-heading"
              className="max-w-3xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl lg:text-6xl"
            >
              {hero.title}
            </h1>

            <p className="mt-5 max-w-2xl text-xl font-medium leading-8 text-brand-navy sm:text-2xl">
              {hero.headline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-brand-slate sm:text-lg sm:leading-8">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-teal px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                View My Projects
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-brand-border bg-white px-6 text-sm font-semibold text-brand-navy transition hover:border-brand-teal hover:text-brand-teal"
              >
                About Me
              </Link>

            </div>

          </div>


          {/* Personal Website Summary */}
          <aside className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">

            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Kibria.net
            </p>

            <h2 className="mt-3 text-2xl font-bold text-brand-navy sm:text-3xl">
              More than a developer portfolio.
            </h2>

            <p className="mt-4 leading-7 text-brand-slate">
              This is my personal digital home for development work, projects,
              tools, learning, digital work, interests and experiences.
            </p>

          </aside>

        </div>

      </Container>
    </section>
  );
}