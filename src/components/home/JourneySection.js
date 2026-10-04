import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export default function JourneySection() {
  return (
    <section
      aria-labelledby="journey-home-heading"
      className="border-y border-brand-border bg-brand-ivory"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              My Journey
            </p>

            <h2
              id="journey-home-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              Learning, building and expanding over time.
            </h2>

            <p className="mt-4 leading-7 text-brand-slate sm:text-lg">
              My journey has grown through learning, practical projects,
              different technologies and experience across digital work.
            </p>

            <Link
              href="/journey"
              className="mt-6 inline-flex font-semibold text-brand-teal hover:underline"
            >
              Explore my journey →
            </Link>

          </div>


          <ol className="space-y-4">

            {homeData.journey.map((item, index) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-2xl border border-brand-border bg-white p-5 sm:p-6"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-brand-ivory">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold text-brand-navy">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-brand-slate">
                    {item.description}
                  </p>
                </div>

              </li>
            ))}

          </ol>

        </div>

      </Container>
    </section>
  );
}