import siteInfo from "@/data/siteInfo";


export function createPageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  socialDescription = description,
}) {
  return {
    title,
    description,

    alternates: {
      canonical: path,
    },

    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: path,

      type: "website",
      siteName: siteInfo.siteName,
      locale: "en_US",

      images: [
        {
          url: siteInfo.logo,
          alt: `${siteInfo.siteName} logo`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [siteInfo.logo],
    },
  };
}