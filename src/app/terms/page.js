import Container from "@/components/Container";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: "Terms",

  description:
    "Terms and general information for using Kibria.net.",

  path: "/terms",

  socialTitle: "Terms | Kibria.net",
});


export default function TermsPage() {
  return (
    <article>
      <Container className="max-w-4xl py-16 sm:py-20 lg:py-24">

        <h1 className="text-4xl font-bold text-brand-navy sm:text-5xl">
          Terms
        </h1>


        <p className="mt-6 leading-7 text-brand-slate">
          Kibria.net is a personal website containing information about
          projects, learning, tools, experiences and other interests.
        </p>


        <h2 className="mt-10 text-2xl font-bold text-brand-navy">
          Website Content
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          Information on this website may be updated, corrected or changed
          over time as projects, technologies and personal information
          evolve.
        </p>


        <h2 className="mt-10 text-2xl font-bold text-brand-navy">
          External Links
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          The website may contain links to third-party websites and
          services. Kibria.net does not control the content or availability
          of those external services.
        </p>


        <h2 className="mt-10 text-2xl font-bold text-brand-navy">
          Trademarks
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          Product names, company names and trademarks mentioned on this
          website belong to their respective owners unless otherwise stated.
        </p>

      </Container>
    </article>
  );
}