"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

import siteInfo from "@/data/siteInfo";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-brand-ivory/95 backdrop-blur">
      <Container>
        <div className="flex min-h-20 items-center justify-between gap-6">

          {/* Website Logo */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label={`${siteInfo.siteName} homepage`}
          >
            <Image
              src={siteInfo.logo}
              alt="Kibria.net logo"
              width={48}
              height={48}
              priority
            />

            <span className="text-lg font-semibold text-brand-navy">
              {siteInfo.siteName}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-brand-slate transition hover:text-brand-teal"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-lg border border-brand-border px-3 py-2 text-sm font-medium text-brand-navy md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="border-t border-brand-border py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium text-brand-slate hover:text-brand-teal"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}