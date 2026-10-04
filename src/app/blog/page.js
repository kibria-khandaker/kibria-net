import Link from "next/link";

import Container from "@/components/Container";

import { getBlogPosts } from "@/services/bloggerData";

import {
  getBlogSlug,
  stripHtml,
  formatBlogDate,
} from "@/utils/blogHelpers";
import { createPageMetadata } from "@/utils/pageMetadata";

export const metadata = createPageMetadata({
  title: "Blog",

  description:
    "Articles, experiences, learning notes and thoughts shared by Golam Kibria.",

  path: "/blog",

  socialTitle: "Blog | Golam Kibria",
});


export default async function BlogPage() {
  const posts = await getBlogPosts();


  return (
    <>
      {/* Page Header */}
      <section className="border-b border-brand-border bg-brand-ivory">
        <Container className="py-16 sm:py-20 lg:py-24">

          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-teal">
            Blog
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
            Articles & Thoughts
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-brand-slate">
            Articles, experiences, learning notes and ideas from different
            areas of my work and interests.
          </p>

        </Container>
      </section>


      {/* Blog Posts */}
      <section
        aria-labelledby="blog-posts-heading"
        className="bg-white"
      >
        <Container className="py-16 sm:py-20 lg:py-24">

          <h2
            id="blog-posts-heading"
            className="text-2xl font-bold text-brand-navy sm:text-3xl"
          >
            Latest Posts
          </h2>


          {posts.length > 0 ? (
            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {posts.map((post) => {
                const slug = getBlogSlug(post);

                const description =
                  stripHtml(post.content).slice(0, 180);


                return (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-brand-border bg-brand-ivory p-6"
                  >

                    <time
                      dateTime={post.published}
                      className="text-sm font-medium text-brand-teal"
                    >
                      {formatBlogDate(post.published)}
                    </time>


                    <h3 className="mt-3 text-xl font-bold text-brand-navy">
                      <Link
                        href={`/blog/${slug}`}
                        className="hover:text-brand-teal"
                      >
                        {post.title}
                      </Link>
                    </h3>


                    <p className="mt-4 leading-7 text-brand-slate">
                      {description}
                      {description.length >= 180 ? "..." : ""}
                    </p>


                    <Link
                      href={`/blog/${slug}`}
                      className="mt-5 inline-flex font-semibold text-brand-teal hover:underline"
                    >
                      Read Article →
                    </Link>

                  </article>
                );
              })}

            </div>
          ) : (
            <p className="mt-8 text-brand-slate">
              Blog posts are currently unavailable.
            </p>
          )}

        </Container>
      </section>
    </>
  );
}