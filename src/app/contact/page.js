import Container from "@/components/Container";

import siteInfo from "@/data/siteInfo";
import { socialLinks } from "@/data/socialLinks";


export const metadata = {
  title: "Contact",

  description:
    "Contact Golam Kibria and find links to his public professional and social profiles.",

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Golam Kibria",
    description:
      "Public contact and professional profile links for Golam Kibria.",
    url: "/contact",
  },
};


export default function ContactPage() {
  return (
    <>
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Contact
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Connect with me.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">
            You can use the public profile links below to find and connect
            with {siteInfo.name}.
          </p>

        </Container>
      </section>


      <section
        aria-labelledby="contact-links-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="contact-links-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Public profiles
          </h2>


          {socialLinks.length > 0 ? (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {socialLinks.map((item) => (
                <li key={item.name}>

                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-24 flex-col justify-center rounded-2xl border border-brand-border bg-brand-ivory p-6 transition hover:border-brand-teal"
                  >
                    <span className="text-lg font-bold text-brand-navy">
                      {item.name}
                    </span>

                    <span className="mt-2 text-sm text-brand-teal">
                      Visit profile →
                    </span>
                  </a>

                </li>
              ))}

            </ul>
          ) : (
            <p className="mt-8 text-brand-slate">
              Public contact information will be available here.
            </p>
          )}

        </Container>
      </section>
    </>
  );
}