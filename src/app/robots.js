export const dynamic = "force-static";
export const revalidate = false;
import siteInfo from "@/data/siteInfo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: `${siteInfo.domain}/sitemap.xml`,
    host: siteInfo.domain,
  };
}