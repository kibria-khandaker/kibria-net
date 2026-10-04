import Link from "next/link";

import Container from "./Container";

import siteInfo from "@/data/siteInfo";
import { socialLinks } from "@/data/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-white">
      <Container className="py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-brand-slate">
            © {currentYear} {siteInfo.siteName}. All rights reserved.
          </p>

          <nav aria-label="Social links">
            <div className="flex flex-wrap items-center gap-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-slate transition hover:text-brand-teal"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-brand-slate hover:text-brand-teal"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-brand-slate hover:text-brand-teal"
            >
              Terms
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  );
}