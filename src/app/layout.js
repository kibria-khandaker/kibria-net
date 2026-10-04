import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import siteInfo from "@/data/siteInfo";
import { socialLinks } from "@/data/socialLinks";
import { skillGroups } from "@/data/skills";

const geist = Geist({
  subsets: ["latin"],
});


function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}


export const metadata = {
  metadataBase: new URL(siteInfo.domain),

  title: {
    default: `${siteInfo.name} | Personal Website`,
    template: `%s | ${siteInfo.name}`,
  },

  description: siteInfo.description,

  creator: siteInfo.name,
  publisher: siteInfo.name,

  openGraph: {
    siteName: siteInfo.siteName,
    type: "website",
    locale: "en_US",

    title: `${siteInfo.name} | Personal Website`,
    description: siteInfo.description,

    url: siteInfo.domain,

    images: [
      {
        url: siteInfo.logo,
        alt: `${siteInfo.siteName} logo`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteInfo.name} | Personal Website`,
    description: siteInfo.description,
    images: [siteInfo.logo],
  },

  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({ children }) {
  const personId =
    `${siteInfo.domain}/#person`;

  const websiteId =
    `${siteInfo.domain}/#website`;


  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Person",
        "@id": personId,

        name: siteInfo.name,
        url: siteInfo.domain,

        description: siteInfo.intro,

        sameAs: socialLinks
          .filter((item) => item.sameAs !== false)
          .map((item) => item.url),

        knowsAbout: skillGroups.flatMap(
            (group) => group.skills
          ),
      },

      {
        "@type": "WebSite",
        "@id": websiteId,

        url: siteInfo.domain,
        name: siteInfo.siteName,

        description: siteInfo.description,

        inLanguage: "en",

        publisher: {
          "@id": personId,
        },

        about: {
          "@id": personId,
        },
      },
    ],
  };


  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
    >
      <body
        className={`${geist.className} flex min-h-screen flex-col`}
      >

        {/* Site-wide structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(structuredData),
          }}
        />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}