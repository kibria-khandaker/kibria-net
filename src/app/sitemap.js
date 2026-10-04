import siteInfo from "@/data/siteInfo";
import { dataSources } from "@/data/dataSources";

import { getJsonData } from "@/services/githubData";
import { getBlogPosts } from "@/services/bloggerData";

import slugify from "@/utils/slugify";
import { getBlogSlug } from "@/utils/blogHelpers";


export default async function sitemap() {
  const pages = [
    "/",
    "/about",
    "/projects",
    "/journey",
    "/interests",
    "/learning",
    "/tools",
    "/skills",
    "/resume",
    "/now",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];


  const staticPages = pages.map((path) => ({
    url: `${siteInfo.domain}${path}`,

    changeFrequency:
      path === "/" || path === "/projects" || path === "/blog"
        ? "weekly"
        : "monthly",

    priority:
      path === "/"
        ? 1
        : path === "/projects" || path === "/blog"
          ? 0.9
          : 0.7,
  }));


  // Project URLs
  const projects = await getJsonData(dataSources.projects);

  const projectPages = Array.isArray(projects)
    ? projects.map((project) => ({
        url: `${siteInfo.domain}/projects/${slugify(project.name)}`,
        changeFrequency: "monthly",
        priority: 0.8,
      }))
    : [];


  // Blog URLs
  const posts = await getBlogPosts();

  const blogPages = Array.isArray(posts)
    ? posts
        .map((post) => {
          const slug = getBlogSlug(post);

          if (!slug) {
            return null;
          }

          return {
            url: `${siteInfo.domain}/blog/${slug}`,
            lastModified: post.updated || post.published,
            changeFrequency: "monthly",
            priority: 0.8,
          };
        })
        .filter(Boolean)
    : [];


  return [
    ...staticPages,
    ...projectPages,
    ...blogPages,
  ];
}