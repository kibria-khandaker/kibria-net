import Link from "next/link";

import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export const metadata = {
  title: "Now",

  description:
    "See what Golam Kibria is currently focused on, including current projects, web development, learning and digital work.",

  alternates: {
    canonical: "/now",
  },

  openGraph: {
    title: "Now | Golam Kibria",
    description:
      "A current snapshot of the projects, technologies and areas receiving Golam Kibria's attention.",
    url: "/now",
  },
};


export default function NowPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-navy text-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Right Now
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl">
            What I am currently focused on.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            A simple snapshot of the projects, technologies and areas
            currently receiving my attention.
          </p>

        </Container>
      </section>


      <section
        aria-labelledby="current-focus-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="current-focus-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Current focus
          </h2>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">

            {homeData.currentFocus.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-brand-border bg-brand-ivory p-6 leading-7 text-brand-slate"
              >
                {item}
              </li>
            ))}

          </ul>


          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/projects"
              className="font-semibold text-brand-teal hover:underline"
            >
              Current Projects →
            </Link>

            <Link
              href="/learning"
              className="font-semibold text-brand-teal hover:underline"
            >
              Learning →
            </Link>

            <Link
              href="/tools"
              className="font-semibold text-brand-teal hover:underline"
            >
              Tools →
            </Link>

          </div>

        </Container>
      </section>
    </>
  );
}