import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: "Interests",

  description:
    "Explore Golam Kibria's interests in technology, online business, learning, digital systems and other areas beyond individual projects.",

  path: "/interests",

  socialTitle: "Interests | Golam Kibria",

  socialDescription:
    "Technology, online business, learning, digital systems and other areas Golam Kibria enjoys exploring.",
});


export default function InterestsPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Interests
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Things I enjoy exploring.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">
            My interests extend beyond individual development projects and
            include technology, digital systems, online business, learning
            and useful ideas.
          </p>

        </Container>
      </section>


      <section
        aria-labelledby="interests-list-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="interests-list-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Areas I explore
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

            {homeData.interests.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-brand-border bg-brand-ivory p-6"
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


          <div className="mt-10 flex flex-wrap gap-3">

            <Link
              href="/learning"
              className="font-semibold text-brand-teal hover:underline"
            >
              Explore Learning →
            </Link>

            <Link
              href="/tools"
              className="font-semibold text-brand-teal hover:underline"
            >
              Explore Tools →
            </Link>

          </div>

        </Container>
      </section>
    </>
  );
}