import Container from "@/components/Container";
import LearningCard from "@/components/learning/LearningCard";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: "Learning",

  description:
    "Explore the technologies, topics and subjects Golam Kibria has learned and continues to explore.",

  path: "/learning",

  socialTitle: "Learning | Golam Kibria",
});

export default async function LearningPage() {
  const learningData = await getJsonData(dataSources.learning);

  const learningList = Array.isArray(learningData)
    ? learningData
    : [];

  return (
    <>
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Continuous Learning
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Learning
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-brand-slate sm:text-lg sm:leading-8">
            Technologies, subjects and practical areas I have learned,
            practiced or continue to explore.
          </p>

        </Container>
      </section>

      <section
        aria-labelledby="learning-list-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="learning-list-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Learning Areas
          </h2>

          {learningList.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {learningList.map((item) => (
                <LearningCard
                  key={item._id}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <p className="mt-8 text-brand-slate">
              Learning information is currently unavailable.
            </p>
          )}

        </Container>
      </section>
    </>
  );
}