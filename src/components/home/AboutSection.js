import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export default function AboutSection() {
  const about = homeData.about;

  return (
    <section
      aria-labelledby="about-home-heading"
      className="bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              {about.label}
            </p>

            <h2
              id="about-home-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              {about.title}
            </h2>

            <p className="mt-5 leading-7 text-brand-slate sm:text-lg sm:leading-8">
              {about.description}
            </p>

            <Link
              href="/about"
              className="mt-7 inline-flex font-semibold text-brand-teal hover:underline"
            >
              Learn more about me →
            </Link>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            <article className="rounded-xl border border-brand-border bg-brand-ivory p-5">
              <h3 className="font-bold text-brand-navy">
                Development
              </h3>

              <p className="mt-2 text-sm leading-6 text-brand-slate">
                WordPress, React, Next.js and modern web development.
              </p>
            </article>


            <article className="rounded-xl border border-brand-border bg-brand-ivory p-5">
              <h3 className="font-bold text-brand-navy">
                Digital Work
              </h3>

              <p className="mt-2 text-sm leading-6 text-brand-slate">
                Online business, digital platforms and practical solutions.
              </p>
            </article>


            <article className="rounded-xl border border-brand-border bg-brand-ivory p-5">
              <h3 className="font-bold text-brand-navy">
                Tracking
              </h3>

              <p className="mt-2 text-sm leading-6 text-brand-slate">
                Analytics, Meta Pixel, Conversion API and conversion tracking.
              </p>
            </article>


            <article className="rounded-xl border border-brand-border bg-brand-ivory p-5">
              <h3 className="font-bold text-brand-navy">
                Learning
              </h3>

              <p className="mt-2 text-sm leading-6 text-brand-slate">
                New technologies, tools, ideas and personal experiments.
              </p>
            </article>

          </div>

        </div>

      </Container>
    </section>
  );
}