import Container from "@/components/Container";

import { dataSources } from "@/data/dataSources";
import { getJsonData } from "@/services/githubData";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: "Resume",

  description:
    "View professional resume options for Golam Kibria covering web development, frontend development, React and WordPress.",

  path: "/resume",

  socialTitle: "Resume | Golam Kibria",

  socialDescription:
    "View professional resume options for Golam Kibria covering different areas of web development.",
});


export default async function ResumePage() {
  const resumeData = await getJsonData(dataSources.resume);

  const resumes = Array.isArray(resumeData)
    ? resumeData
    : [];

  return (
    <>
      {/* Page Header */}
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Professional Profile
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Resume
          </h1>

          <p className="mt-5 max-w-3xl leading-7 text-brand-slate sm:text-lg sm:leading-8">
            Different versions of my resume covering web development,
            frontend development, React, WordPress and related professional
            experience.
          </p>

        </Container>
      </section>


      {/* Resume List */}
      <section
        aria-labelledby="resume-list-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="resume-list-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Available Resumes
          </h2>

          {resumes.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {resumes.map((resume) => (
                <article
                  key={resume._id}
                  className="rounded-2xl border border-brand-border bg-brand-ivory p-6"
                >
                  <h3 className="text-xl font-bold text-brand-navy">
                    {resume.resumeDownloadBtnTitle}
                  </h3>

                  {resume.resumeDownloadBtnSubTitle && (
                    <p className="mt-3 text-sm leading-6 text-brand-slate">
                      {resume.resumeDownloadBtnSubTitle}
                    </p>
                  )}

                  {resume.resumeDownloadBtnUrl && (
                    <a
                      href={resume.resumeDownloadBtnUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-11 items-center font-semibold text-brand-teal hover:underline"
                    >
                      View Resume →
                    </a>
                  )}
                </article>
              ))}

            </div>
          ) : (
            <p className="mt-8 text-brand-slate">
              Resume information is currently unavailable.
            </p>
          )}

        </Container>
      </section>
    </>
  );
}