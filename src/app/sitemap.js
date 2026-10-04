import siteInfo from "@/data/siteInfo";

export default function sitemap() {
  return [
    {
      url: siteInfo.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}