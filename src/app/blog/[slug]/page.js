import { notFound } from "next/navigation";
import Link from "next/link";

import Container from "@/components/Container";

import { getBlogPosts } from "@/services/bloggerData";

import {
  getBlogSlug,
  stripHtml,
  formatBlogDate,
} from "@/utils/blogHelpers";


async function getPost(slug) {
  const posts = await getBlogPosts();

  return (
    posts.find(
      (post) => getBlogSlug(post) === slug
    ) || null
  );
}


export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts
    .map((post) => ({
      slug: getBlogSlug(post),
    }))
    .filter((item) => item.slug);
}


export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);


  if (!post) {
    return {
      title: "Article Not Found",
    };
  }


  const description =
    stripHtml(post.content).slice(0, 160);


  return {
    title: post.title,

    description,

    alternates: {
      canonical: `/blog/${slug}`,
    },

    openGraph: {
      title: post.title,
      description,
      url: `/blog/${slug}`,
      type: "article",

      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}


export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = await getPost(slug);


  if (!post) {
    notFound();
  }


  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,

    datePublished: post.published,
    dateModified: post.updated,

    author: {
      "@type": "Person",
      name: "Golam Kibria",
      url: "https://kibria.net",
    },
  };


  return (
    <>
      {/* Article structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />


      <article>

        {/* Article Header */}
        <header className="border-b border-brand-border bg-brand-ivory">

          <Container className="py-16 sm:py-20 lg:py-24">

            <p className="text-sm font-semibold uppercase tracking-wider text-brand-teal">
              Blog
            </p>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-brand-navy sm:text-5xl">
              {post.title}
            </h1>

            <time
              dateTime={post.published}
              className="mt-5 block text-brand-slate"
            >
              Published {formatBlogDate(post.published)}
            </time>

          </Container>

        </header>


        {/* Article Content */}
        <Container className="py-12 sm:py-16 lg:py-20">

          <div
            className="blog-content mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{
              __html: post.content,
            }}
          />


          <div className="mt-12 border-t border-brand-border pt-8">

            <Link
              href="/blog"
              className="font-semibold text-brand-teal hover:underline"
            >
              ← Back to Blog
            </Link>

          </div>

        </Container>

      </article>
    </>
  );
}