import Link from "next/link";

import Container from "@/components/Container";
import LearningCard from "@/components/learning/LearningCard";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";


export default async function LearningSection() {
  const learningData = await getJsonData(dataSources.learning);

  const learningItems = Array.isArray(learningData)
    ? learningData.slice(0, 2)
    : [];

  return (
    <section
      aria-labelledby="learning-home-heading"
      className="border-y border-brand-border bg-brand-ivory"
    >
      <Container className="py-16 sm:py-20 lg:py-24">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div className="max-w-3xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Learning
            </p>

            <h2
              id="learning-home-heading"
              className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl"
            >
              Things I have learned and continue to explore.
            </h2>

            <p className="mt-4 leading-7 text-brand-slate sm:text-lg">
              Some of the technologies, topics and practical areas from my
              existing learning collection.
            </p>

          </div>


          <Link
            href="/learning"
            className="font-semibold text-brand-teal hover:underline"
          >
            View all learning →
          </Link>

        </div>


        {learningItems.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {learningItems.map((item) => (
              <LearningCard
                key={item._id}
                item={item}
              />
            ))}

          </div>
        ) : (
          <p className="mt-10 text-brand-slate">
            Learning information is currently unavailable.
          </p>
        )}

      </Container>
    </section>
  );
}