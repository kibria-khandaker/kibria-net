import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export const metadata = {
  title: "My Journey",

  description:
    "Explore Golam Kibria's journey through learning, web development, practical projects, digital work and continuous exploration.",

  alternates: {
    canonical: "/journey",
  },

  openGraph: {
    title: "My Journey | Golam Kibria",
    description:
      "Learning, building, expanding and continuously exploring new technologies and digital work.",
    url: "/journey",
  },
};


export default function JourneyPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            My Journey
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Learning, building and growing over time.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">
            My journey has developed through continuous learning, practical
            projects, different technologies and experience across web and
            digital work.
          </p>

        </Container>
      </section>


      <section
        aria-labelledby="journey-stages-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="journey-stages-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            The journey so far
          </h2>

          <ol className="mt-8 space-y-5">

            {homeData.journey.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-brand-border bg-brand-ivory p-5 sm:gap-6 sm:p-6"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-navy font-bold text-brand-ivory">
                  {index + 1}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-3xl leading-7 text-brand-slate">
                    {item.description}
                  </p>
                </div>

              </li>
            ))}

          </ol>


          <div className="mt-10 flex flex-wrap gap-3">

            <Link
              href="/projects"
              className="rounded-lg bg-brand-teal px-5 py-3 font-semibold text-white"
            >
              View Projects
            </Link>

            <Link
              href="/learning"
              className="rounded-lg border border-brand-border px-5 py-3 font-semibold text-brand-navy"
            >
              Learning
            </Link>

          </div>

        </Container>
      </section>
    </>
  );
}