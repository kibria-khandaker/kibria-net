import Link from "next/link";

import Container from "@/components/Container";
import ToolCard from "@/components/tools/ToolCard";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";


export default async function ToolsSection() {
  const toolsData = await getJsonData(dataSources.tools);

  const tools = Array.isArray(toolsData)
    ? toolsData.slice(0, 3)
    : [];

  return (
    <section
      aria-labelledby="tools-home-heading"
      className="bg-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Tools
            </p>

            <h2
              id="tools-home-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              Useful tools and small applications I have built.
            </h2>

            <p className="mt-4 leading-7 text-brand-slate sm:text-lg">
              Calculators, utilities and small web applications created
              through practical development and experimentation.
            </p>

          </div>


          <Link
            href="/tools"
            className="font-semibold text-brand-teal hover:underline"
          >
            View all tools →
          </Link>

        </div>


        {tools.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {tools.map((tool) => (
              <ToolCard
                key={tool._id}
                tool={tool}
              />
            ))}

          </div>
        ) : (
          <p className="mt-10 text-brand-slate">
            Tools are currently unavailable.
          </p>
        )}

      </Container>
    </section>
  );
}