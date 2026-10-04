import siteInfo from "@/data/siteInfo";
import { dataSources } from "@/data/dataSources";

import { getJsonData } from "@/services/githubData";

import slugify from "@/utils/slugify";


export default async function sitemap() {
  const pages = [
    "",
    "/about",
    "/projects",
    "/journey",
    "/interests",
    "/learning",
    "/tools",
    "/skills",
    "/resume",
    "/blog",
    "/contact",
    "/skills",
    "/now",
  ];


  const staticPages = pages.map((path) => ({
    url: `${siteInfo.domain}${path}`,
    changeFrequency:
      path === "/" || path === "/projects"
        ? "weekly"
        : "monthly",

    priority:
      path === "/"
        ? 1
        : path === "/projects"
          ? 0.9
          : 0.7,
  }));


  const projects =
    await getJsonData(dataSources.projects);


  const projectPages =
    Array.isArray(projects)
      ? projects.map((project) => ({
          url: `${siteInfo.domain}/projects/${slugify(project.name)}`,
          changeFrequency: "monthly",
          priority: 0.8,
        }))
      : [];


  return [
    ...staticPages,
    ...projectPages,
  ];
}