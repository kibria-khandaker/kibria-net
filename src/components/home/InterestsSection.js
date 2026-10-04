import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export default function InterestsSection() {
  return (
    <section
      aria-labelledby="interests-home-heading"
      className="bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-3xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Interests
          </p>

          <h2
            id="interests-home-heading"
            className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
          >
            Subjects and ideas I enjoy exploring.
          </h2>

        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {homeData.interests.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-border p-6"
            >
              <h3 className="text-xl font-bold text-brand-navy">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-brand-slate">
                {item.description}
              </p>
            </article>
          ))}

        </div>


        <Link
          href="/interests"
          className="mt-8 inline-flex font-semibold text-brand-teal hover:underline"
        >
          Explore my interests →
        </Link>

      </Container>
    </section>
  );
}