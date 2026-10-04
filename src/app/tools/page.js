import Container from "@/components/Container";
import ToolCard from "@/components/tools/ToolCard";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";

export const metadata = {
  title: "Tools",

  description:
    "Explore useful web applications, calculators and tools created by Golam Kibria.",

  alternates: {
    canonical: "/tools",
  },

  openGraph: {
    title: "Tools by Golam Kibria",
    description:
      "Explore useful web applications, calculators and tools created by Golam Kibria.",
    url: "/tools",
  },
};

export default async function ToolsPage() {
  const tools = await getJsonData(dataSources.tools);

  const toolList = Array.isArray(tools) ? tools : [];

  return (
    <>
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Useful Applications
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Tools I Have Built
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-brand-slate sm:text-lg sm:leading-8">
            A collection of calculators, utilities and small web applications
            I have created while learning, experimenting and solving practical
            problems.
          </p>

        </Container>
      </section>

      <section aria-labelledby="tools-list-heading" className="bg-white">
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="tools-list-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            All Tools
          </h2>

          {toolList.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {toolList.map((tool) => (
                <ToolCard
                  key={tool._id}
                  tool={tool}
                />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-brand-slate">
              Tools are currently unavailable.
            </p>
          )}

        </Container>
      </section>
    </>
  );
}