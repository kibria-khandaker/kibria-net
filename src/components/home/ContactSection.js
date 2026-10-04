import Link from "next/link";

import Container from "@/components/Container";

export default function ContactSection() {
  return (
    <section
      aria-labelledby="contact-home-heading"
      className="border-b border-brand-border bg-brand-ivory"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Contact
            </p>

            <h2
              id="contact-home-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              Want to connect or know more?
            </h2>

            <p className="mt-4 leading-7 text-brand-slate sm:text-lg">
              Visit the contact page for ways to reach me and links to my
              professional and social profiles.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-lg bg-brand-teal px-6 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}