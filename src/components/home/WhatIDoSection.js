import Container from "@/components/Container";
import { homeData } from "@/data/homeData";


export default function WhatIDoSection() {
  return (
    <section
      aria-labelledby="what-i-do-heading"
      className="border-y border-brand-border bg-brand-ivory"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="max-w-3xl">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            What I Do
          </p>

          <h2
            id="what-i-do-heading"
            className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
          >
            The different areas I work and learn in.
          </h2>

          <p className="mt-4 leading-7 text-brand-slate sm:text-lg">
            My work includes web development as well as digital systems,
            online business solutions, analytics and continuous learning.
          </p>

        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {homeData.workAreas.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-brand-border bg-white p-6"
            >
              <span className="text-sm font-bold text-brand-teal">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-4 text-xl font-bold text-brand-navy">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-brand-slate">
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </Container>
    </section>
  );
}