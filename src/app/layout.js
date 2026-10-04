import { Geist } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import siteInfo from "@/data/siteInfo";

const geist = Geist({
  subsets: ["latin"],
});

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
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geist.className} flex min-h-screen flex-col`}>
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}