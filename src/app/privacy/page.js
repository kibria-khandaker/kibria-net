import Container from "@/components/Container";


export const metadata = {
  title: "Privacy Policy",

  description:
    "Privacy information for Kibria.net, the personal website of Golam Kibria.",

  alternates: {
    canonical: "/privacy",
  },
};


export default function PrivacyPage() {
  return (
    <article>
      <Container className="max-w-4xl py-16 sm:py-20 lg:py-24">

        <h1 className="text-4xl font-bold text-brand-navy sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-6 leading-7 text-brand-slate">
          Kibria.net is a personal website used to share projects,
          learning, tools, interests and other public information.
        </p>


        <h2 className="mt-10 text-2xl font-bold text-brand-navy">
          Information Collection
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          The website currently does not provide user accounts or a
          contact form that intentionally collects personal information.
          Hosting and infrastructure providers may process basic technical
          information required to deliver and secure the website.
        </p>


        <h2 className="mt-10 text-2xl font-bold text-brand-navy">
          External Services
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          Some content and links may reference third-party services such
          as GitHub, Google or other external websites. Those services
          operate under their own privacy policies.
        </p>


        <h2 className="mt-10 text-2xl font-bold text-brand-navy">
          Updates
        </h2>

        <p className="mt-4 leading-7 text-brand-slate">
          This policy may be updated if the website later introduces
          analytics, forms or other features that change how information
          is processed.
        </p>

      </Container>
    </article>
  );
}