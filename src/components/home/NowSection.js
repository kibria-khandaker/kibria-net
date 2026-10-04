import Container from "@/components/Container";
import { homeData } from "@/data/homeData";
import Link from "next/link";


export default function NowSection() {
  return (
    <section
      aria-labelledby="now-home-heading"
      className="bg-brand-navy text-brand-ivory"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-ivory">
              Right Now
            </p>

            <h2
              id="now-home-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What I am currently focused on.
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-slate-300 sm:text-lg">
              A snapshot of the projects, technologies and areas currently
              receiving my attention.
            </p>

            <Link
              href="/now"
              className="mt-6 inline-flex font-semibold text-brand-ivory hover:underline"
            >
              View current focus →
            </Link>

          </div>


          <ul className="space-y-3">

            {homeData.currentFocus.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-5 leading-7 text-slate-200"
              >
                {item}
              </li>
            ))}

          </ul>

        </div>

      </Container>
    </section>
  );
}